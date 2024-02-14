"use client";
import { Accordion } from "@/components/Accordion";
import { Page } from "@/components/Page";
import { ProductAddedModal } from "@/components/ProductAddedModal";
import { useProduct } from "@/hooks/useProduct";
import { IOption, IProduct } from "@/models/IProduct";
import { calculatePrice, formatPrice } from "@/services/prices";
import { useCartStore } from "@/store/zustand";
import { useRef, useState } from "react";

export default function ProductPage({ params }) {
  const { category, subCategory } = params;
  const { product } = useProduct({ category, subCategory });

  return (
    <Page title="Buying Product" description="">
      <ProductData product={product} />
    </Page>
  );
}

const ProductData = ({ product }: { product: IProduct | null }) => {
  const { add: handleAddToCart } = useCartStore();
  const [parsedPrice, setParsedPrice] = useState(null);
  const [showAddedModal, setShowAddedModal] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));
    formData["price"] = calculatePrice(
      product?.priceType == "calculation"
        ? product?.formula
        : "[quantity] * [price]",
      {
        ...formData,
        price: product?.price,
      }
    );

    handleAddToCart({
      product: product!,
      metadata: formData as any,
    });

    setShowAddedModal(true);
  };

  const handleFormChange = (event) => {
    event.preventDefault();

    try {
      const formData = Object.fromEntries(new FormData(formRef.current!));
      setParsedPrice(
        calculatePrice(
          product?.priceType == "calculation"
            ? product?.formula
            : "[quantity] * [price]",
          {
            ...formData,
            price: product?.price,
          }
        )
      );
    } catch (e) {
      setParsedPrice(null);
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden w-full">
      {showAddedModal && (
        <ProductAddedModal setShowAddedModal={setShowAddedModal} />
      )}

      <div className="container px-5 py-4 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-1/2 h-64 object-cover object-center rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product?.title.toUpperCase()}
            </h2>
            <p className="leading-relaxed text-gray-900 py-4">
              {product?.description}
            </p>

            <div className="flex mt-2 items-center pb-6 border-b-2 border-gray-100">
              <form
                ref={formRef}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                {product?.options &&
                  Object.entries(product?.options).map(([key, option]) => {
                    switch (option.type) {
                      case "int":
                        return (
                          <div
                            key={option.label}
                            className="relative border-black border-1"
                          >
                            <label
                              className="leading-7 text-sm text-gray-600"
                              htmlFor={option.name}
                            >
                              {option.label}
                            </label>
                            <input
                              className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              key={option.label}
                              type="number"
                              name={option.name}
                              min={option.min}
                              max={option.max}
                              step={1}
                            />
                          </div>
                        );
                      case "float":
                        return (
                          <div
                            key={option.label}
                            className="relative border-black border-1"
                          >
                            <label
                              className="leading-7 text-sm text-gray-600"
                              htmlFor={option.name}
                            >
                              {option.label}
                            </label>
                            <input
                              className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              key={option.label}
                              type="number"
                              name={option.name}
                              min={option.min}
                              max={option.max}
                              step={0.1}
                            />
                          </div>
                        );
                      case "dropdown":
                        return (
                          <div key={option.label} className="relative">
                            <label
                              className="leading-7 text-sm text-gray-600"
                              htmlFor={option.name}
                            >
                              {option.label}
                            </label>
                            <select
                              className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-blue-200 focus:bg-transparent focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                              key={option.label}
                              name={option.name}
                            >
                              {option.options.map((secOption) => (
                                <option
                                  key={secOption.label}
                                  value={secOption.value}
                                >
                                  {secOption.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      case "imagechoice":
                        return (
                          <div
                            key={option.label}
                            className="relative border-black border-1"
                          >
                            <label
                              className="leading-7 text-sm text-gray-600"
                              htmlFor={option.label.toLowerCase()}
                            >
                              {option.label}
                            </label>

                            <div className="flex flex-wrap items-stretch gap-6">
                              {option.options.map((secOption, idx) => (
                                <div key={idx} className="w-36 overflow-hidden">
                                  <input
                                    type="checkbox"
                                    id={secOption.label
                                      .toLowerCase()
                                      .replaceAll(" ", "")}
                                    name={secOption.label
                                      .toLowerCase()
                                      .replaceAll(" ", "")}
                                    value={secOption.value}
                                    className="hidden peer"
                                  />
                                  <label
                                    htmlFor={secOption.label
                                      .toLowerCase()
                                      .replaceAll(" ", "")}
                                    className="flex flex-col h-full items-center text-center justify-between p-2 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50"
                                  >
                                    <img
                                      src={secOption.image}
                                      alt={secOption.label}
                                    />
                                    <div className="w-full text-lg font-semibold">
                                      {secOption.label}
                                    </div>
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                    }
                  })}
                <div className="flex mt-6">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    {parsedPrice ? formatPrice(parsedPrice) : "Fill the info"}
                  </span>
                  <button className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                    Add to cart
                  </button>
                </div>
              </form>
            </div>

            <Accordion tabs={product?.tabs!} title="Related info..." />
          </div>
        </div>
      </div>
    </section>
  );
};
