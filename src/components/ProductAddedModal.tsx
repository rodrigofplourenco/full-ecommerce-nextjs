"use client";
import { useCartStore } from "@/store/zustand";
import Link from "next/link";

export function ProductAddedModal({ setShowAddedModal }: { setShowAddedModal: Function }) {
  const handleBack = () => {
    setShowAddedModal(false);
  }
  
  return (
    <div className="grid place-items-center absolute top-0 right-0 left-0 bottom-0 bg-black/50 z-50">
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Product added to cart!
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Want to continue shopping or go to cart?
          </p>

            <div className="flex mt-1 gap-4">
              <button onClick={handleBack} className="flex w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Shopping
              </button>
              <Link href="/cart" className="flex w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Cart
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
