import { getMappedProducts } from "@/services/products";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if ( req.method === 'GET' ) {
    const category = req.query.category as string;
    const name = req.query.name as string;

    getMappedProducts({ category, name }).then((result) => {
      res.status(200).json(result);
    })
  } else {
    res.status(500).json({
      status: 500
    });
  }
}