"use client";
import { Page } from "@/components/Page";
import { useCartStore } from "@/store/zustand";
import { useState } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

export default function CartPage() {
  const { cart, removeAll: handleRemoveAllFromCart } = useCartStore();
  const [customerData, setCustomerData] = useState(null);
  const [showDoneModal, setShowDoneModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));
    setCustomerData(formData as any);
  };

  return (
    <Page title="Checkout" description="Let's go!">
      {!customerData && (
        <section className="text-gray-600 body-font relative mx-auto">
          <div className="container px-5 py-8 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Customer Data
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Fill with your infos, please
              </p>
            </div>

            <div className="w-full mx-auto">
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-2 -m-2"
              >
                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="firstName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="doorNumber"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Door Number
                  </label>
                  <input
                    type="number"
                    name="doorNumber"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="streetName"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Street Name
                  </label>
                  <input
                    type="text"
                    name="streetName"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="townCity"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="townCity"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="county"
                    className="leading-7 text-sm text-gray-600"
                  >
                    County
                  </label>
                  <input
                    type="text"
                    name="county"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="postCode"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postCode"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative">
                  <label
                    htmlFor="country"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                <div className="relative col-span-2">
                  <label
                    htmlFor="notes"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>

                <button className="flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Next
                </button>
                {/* <div className="w-full col-span-2"></div> */}
              </form>
            </div>
          </div>
        </section>
      )}

      {customerData && (
        <div className="mx-auto w-1/2">
          <PaymentForm
            applicationId={process.env.SQUARE_APPLICATION_ID}
            cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
              const response = await fetch("/api/payment", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  sourceId: token.token,
                  cart,
                  customer: customerData,
                }),
              });
              const data = await response.json();

              console.log(data);
            }}
            locationId={process.env.SQUARE_LOCATION_ID}
          >
            <CreditCard />
          </PaymentForm>
        </div>
      )}
    </Page>
  );
}
