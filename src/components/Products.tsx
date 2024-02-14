"use client";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";

export function Products({ category }: { category: string }) {
  const { products } = useProducts({ category });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products?.map((product, idx) => (
            <ProductCard
              key={product.title}
              image={product.image}
              category={category}
              subCategory={product.name!}
              label={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  image,
  category,
  label,
  description,
  subCategory,
}: {
  image: string;
  category: string;
  label: string;
  description: string;
  subCategory: string;
}) {
  return (
    <div className="w-full p-4 border border-lightGrey rounded flex flex-col justify-between">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain  object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category.toUpperCase()}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {label}
          </h2>
          <p className="mt-1">{description}</p>
        </div>

        <Link
          href={`/product/${category}/${subCategory}`}
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4"
        >
          Buy now
        </Link>
      </div>
    </div>
  );
}
