import React from "react";

export default function ShippingDetails() {
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-details">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="success.html">
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>
          {/* <!--name--> */}
          <div className="flex flex-col mb-4">
            <label for="complete-name" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              data-input
              id="complete-name"
              type="text"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Name"
            />
          </div>
          {/* <!--name--> */}

          {/* <!--email--> */}
          <div className="flex flex-col mb-4">
            <label for="email-address" className="text-sm mb-2">
              Email Address
            </label>
            <input
              data-input
              id="email-address"
              type="email"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Email Address"
            />
          </div>
          {/* <!--email--> */}

          {/* <!--address--> */}
          <div className="flex flex-col mb-4">
            <label for="address" className="text-sm mb-2">
              Address
            </label>
            <input
              data-input
              id="address"
              type="text"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Address"
            />
          </div>
          {/* <!--address--> */}

          {/* <!--phone--> */}
          <div className="flex flex-col mb-4">
            <label for="phone" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              data-input
              id="phone"
              type="tel"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Phone Number"
            />
          </div>
          {/* <!--phone--> */}

          {/* <!--Courier--> */}
          <div className="flex flex-col mb-4">
            <label for="phone" className="text-sm mb-2">
              choose Courier
            </label>
            <div className="flex -mx-2 flex-wrap">
              {/* <!--list courier--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="fedex"
                  data-name="courier"
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/courier1.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list courier--> */}

              {/* <!--list courier--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="dhl"
                  data-name="courier"
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/courier2.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list courier--> */}
            </div>
          </div>
          {/* <!--Courrier--> */}

          {/* <!--payment--> */}
          <div className="flex flex-col mb-4">
            <label for="phone" className="text-sm mb-2">
              choose payment
            </label>
            <div className="flex -mx-2 flex-wrap">
              {/* <!--list payment--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="midtrans"
                  data-name="payment"
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/payment1.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list payment--> */}

              {/* <!--list payment--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/payment2.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list payment--> */}

              {/* <!--list payment--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="mastercard"
                  data-name="payment"
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/payment3.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list payment--> */}

              {/* <!--list payment--> */}
              <div className="px-2 w-6/12 h-24 mb-4">
                <button
                  data-value="bitcoin"
                  data-name="payment"
                  type="button"
                  className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                >
                  <img
                    src="/assets/img/payment4.png"
                    alt=""
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!--list payment--> */}
            </div>
          </div>
          {/* <!--payment--> */}

          <div className="text-center">
            <button
              type="submit"
              disabled
              data-value="american-express"
              data-name="payment"
              className="bg-pink-400 text-black focus:bg-black-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-pink-400 transition-all duration-200 px-6"
            >
              Checkout Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
