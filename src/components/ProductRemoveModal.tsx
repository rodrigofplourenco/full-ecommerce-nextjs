"use client";
import { useCartStore } from "@/store/zustand";

export function ProductRemoveModal({ productTitle, productIdx, setShowRemoveModal }: { productTitle: string, productIdx: number, setShowRemoveModal: Function }) {
  const { remove: handleRemoveFromCart } = useCartStore();
  
  const handleRemove = () => {
    handleRemoveFromCart(productIdx);
    setShowRemoveModal(false);
  }
  
  return (
    <div className="grid place-items-center absolute top-0 right-0 left-0 bottom-0 bg-black/50 w-screen h-screen z-50">
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {productTitle} <span className="text-secondaryBlue">(ID: {productIdx + 1})</span>
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Want to remove this product?
          </p>

            <div className="flex mt-6 gap-4">
              <button onClick={() => setShowRemoveModal(false)} className="flex w-full text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                No
              </button>
              <button onClick={handleRemove} className="flex w-full text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                Yes
              </button>
            </div>
        </div>
      </div>
    </div>
  );
}
