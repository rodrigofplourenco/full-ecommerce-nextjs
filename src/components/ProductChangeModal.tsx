"use client";
import { IProduct } from "@/models/IProduct";
import { calculatePrice, formatPrice } from "@/services/prices";
import { useCartStore } from "@/store/zustand";
import { useRef, useState } from "react";

interface IChangeProduct {
  product: IProduct;
  metadata: any;
  idx: number;
}

export function ProductChangeModal({
  product,
  setShowUpdateModal,
}: {
  product: IChangeProduct;
  setShowUpdateModal: Function;
}) {
  const { update: handleUpdateToCart } = useCartStore();
  const [parsedPrice, setParsedPrice] = useState(null);
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));

    formData["price"] = calculatePrice(
      product.product.priceType == "calculation"
        ? product.product.formula
        : "[quantity] * [price]",
      {
        ...formData,
        price: product.product.price,
      }
    );

    handleUpdateToCart(product.idx, {
      product: product.product,
      metadata: formData as any,
    });

    setShowUpdateModal(false);
  };

  const handleChange = (event) => {
    event.preventDefault();

    try {
      const formData = Object.fromEntries(new FormData(formRef.current!));
      setParsedPrice(
        calculatePrice(
          product.product.priceType == "calculation"
            ? product.product.formula
            : "[quantity] * [price]",
          {
            ...formData,
            price: product.product.price,
          }
        )
      );
    } catch (e) {
      setParsedPrice(null);
    }
  };

  return (
    <div className="grid place-items-center absolute top-0 right-0 left-0 bottom-0 bg-black/50 w-screen h-screen z-50">
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setShowUpdateModal(false)}
          >
            ❌
          </div>

          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            {product.product.title.toUpperCase()}{" "}
            <span className="text-secondaryBlue">(ID: {product.idx + 1})</span>
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            {product.product.description}
          </p>

          <form ref={formRef} onChange={handleChange} onSubmit={handleSubmit}>
            {product.product.options &&
              Object.entries(product.product.options).map(([key, option]) => {
                switch (option.type) {
                  case "int":
                    return (
                      <div key={option.label} className="relative mb-4">
                        <label
                          className="leading-7 text-sm text-gray-600"
                          htmlFor={option.name}
                        >
                          {option.label}
                        </label>
                        <input
                          defaultValue={product.metadata[option.name]}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      <div key={option.label} className="relative mb-4">
                        <label
                          className="leading-7 text-sm text-gray-600"
                          htmlFor={option.name}
                        >
                          {option.label}
                        </label>
                        <input
                          defaultValue={product.metadata[option.name]}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                          defaultValue={product.metadata[option.name]}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                      <div key={option.label} className="relative mb-4">
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
                                defaultChecked={
                                  product.metadata[
                                    secOption.label
                                      .toLowerCase()
                                      .replaceAll(" ", "")
                                  ]
                                }
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
                Update info
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
