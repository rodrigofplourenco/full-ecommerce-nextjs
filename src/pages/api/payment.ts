import { Client } from "square";
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: process.env.SQUARE_ENVIRONMENT as any,
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if ( req.method === 'POST' ) {
    const { sourceId, cart, customer } = req.body;

    let totPrice = 0;

    cart.forEach(prod => {
      totPrice += prod.metadata.price 
    });

    totPrice = Math.round(totPrice)

    const idempotencyKey = randomUUID()

    paymentsApi.createPayment({
      idempotencyKey: idempotencyKey,
      sourceId,
      amountMoney: {
        currency: 'GBP',
        amount: totPrice as any
      }
    }).then(({result}) => {
      prisma.order.create({
        data: {
          id: idempotencyKey.trim().replaceAll(' ', '-'),
          customer: customer,
          cart: cart
        }
      }).then(() => {
        res.status(200).json(result);
      })
    })
  } else {
    res.status(500).json({
      status: 500
    });
  }
}