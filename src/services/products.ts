import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getMappedProducts({ category, name }) {
  const mappedProducts = await prisma.product.findMany({
    where: {
      category: category as any,
      name: name as any
    },
    include: {
      tabs: true,
      options: {
        include: {
          options: true
        }
      }
    }
  });

  return mappedProducts;
}
