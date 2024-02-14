import { useEffect, useState } from 'react';
import { IProduct } from '@/models/IProduct';

interface IUseProductProps {
  category: string;
  subCategory: string;
}

export function useProduct({ category, subCategory }: IUseProductProps) {
  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    function mapProducts() {
      fetch(`${process.env.API_URL}/products?category=${category}&name=${subCategory}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            setProduct(data[0] as any)
          } else {
            console.error('Product not found!')
          }
        })
    }

    mapProducts()
  }, [category])

  return { product }
}