import { useEffect, useState } from 'react';
import { IProduct } from '@/models/IProduct';
import { getMappedProducts } from '@/services/products';

interface IUseProductsProps {
  category: string;
}

export function useProducts({ category }: IUseProductsProps) {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    function mapProducts() {
      fetch(`${process.env.API_URL}/products?category=${category}`)
        .then(res => res.json())
        .then(data => setProducts(data as any))
    }

    mapProducts()
  }, [category])

  return { products }
}