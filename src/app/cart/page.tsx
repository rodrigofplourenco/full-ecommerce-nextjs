"use client";
import { Page } from "@/components/Page";
import { ProductChangeModal } from "@/components/ProductChangeModal";
import { ProductRemoveModal } from "@/components/ProductRemoveModal";
import { formatPrice } from "@/services/prices";
import { useCartStore } from "@/store/zustand";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, remove: removeFromCart } = useCartStore();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [toUpdateProductData, setToUpdateProductData] = useState(null);
  const [toRemoveProductData, setToRemoveProductData] = useState(null);

  const handleRemove = (title: string, idx: number) => {
    setShowRemoveModal(true);
    setToRemoveProductData({
      title,
      idx,
    });
  };

  const handleEdit = (product, metadata, idx) => {
    setShowUpdateModal(true);
    setToUpdateProductData({
      product,
      metadata,
      idx,
    });
  };

  return (
    <Page title="Cart" description="Your shopping cart">
      {showUpdateModal && (
        <ProductChangeModal
          product={toUpdateProductData}
          setShowUpdateModal={setShowUpdateModal}
        />
      )}

      {showRemoveModal && (
        <ProductRemoveModal
          productTitle={toRemoveProductData.title}
          productIdx={toRemoveProductData.idx}
          setShowRemoveModal={setShowRemoveModal}
        />
      )}

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Price Each
              </th>
              <th scope="col" className="px-6 py-3">
                Metadata
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cart?.map(({ product, metadata }, idx) => {
              return (
                <tr key={idx} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24"
                    />
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product.title}
                  </th>
                  <td className="px-6 py-4">{metadata.quantity}</td>
                  <td className="px-6 py-4">{formatPrice(metadata.price)}</td>
                  <td className="px-6 py-4">
                    {formatPrice(metadata.price / metadata.quantity)}
                  </td>
                  <td className="px-6 py-4">
                    {Object.entries(metadata).map(([key, meta]) => (
                      <span
                        key={key}
                        className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded"
                      >
                        {key}: {meta as any}
                      </span>
                    ))}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button
                      onClick={() => handleRemove(product.title, idx)}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Remove
                    </button>

                    <button
                      onClick={() => handleEdit(product, metadata, idx)}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Link
        href="/checkout"
        className="flex mt-6 text-white bg-secondaryBlue border-0 py-2 px-6 focus:outline-none hover:bg-secondaryBlue/75 rounded"
      >
        Checkout
      </Link>
    </Page>
  );
}
