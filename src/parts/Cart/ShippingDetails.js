import fetchData from "helpers/fetch";
import useAsync from "helpers/hooks/useAsync";
import useForm from "helpers/hooks/useForm";
import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function ShippingDetails() {
  const { data, run, isLoading } = useAsync();
  const history = useHistory();
  const { state, dispatch } = useGlobalContext();

  const { state: payload, fnUpdateState } = useForm({
    completeName: "",
    emailAddress: "",
    address: "",
    phoneNumber: "",
    courier: "",
    payment: "",
  });
  const isSubmitDisabled =
    Object.keys(payload).filter((key) => {
      return payload[key] !== "";
    }).length === Object.keys(payload).length;
  //fetch API
  useEffect(() => {
    run(fetchData({ url: `/api/checkout/meta` }));
  }, [run]);

  //Function Submit Form
  async function fnSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetchData({
        url: `/api/checkout`,
        method: `POST`,
        body: JSON.stringify({
          ...payload,
          cart: Object.keys(state.cart).map((key) => state.cart[key]),
        }),
      });
      if (res) {
        history.push("/congratulation");
        dispatch({ type: "RESET_CART" });
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full md:px-4 md:w-4/12" id="shipping-details">
      <div className="bg-gray-100 px-4 py-6 md:p-8 md:rounded-3xl">
        <form action="success.html" onSubmit={fnSubmit}>
          <div className="flex flex-start mb-6">
            <h3 className="text-2xl">Shipping Details</h3>
          </div>
          {/* <!--name--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="completeName" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.completeName}
              name="completeName"
              type="text"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Name"
            />
          </div>
          {/* <!--name--> */}

          {/* <!--email--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="emailAddress" className="text-sm mb-2">
              Email Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.emailAddress}
              name="emailAddress"
              type="email"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Email Address"
            />
          </div>
          {/* <!--email--> */}

          {/* <!--address--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="text-sm mb-2">
              Address
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.address}
              name="address"
              type="text"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Address"
            />
          </div>
          {/* <!--address--> */}

          {/* <!--phone--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              onChange={fnUpdateState}
              value={payload.phoneNumber}
              name="phoneNumber"
              type="tel"
              className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-200 focus:outline-none"
              placeholder="Input Your Phone Number"
            />
          </div>
          {/* <!--phone--> */}

          {/* <!--Courier--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="courier" className="text-sm mb-2">
              choose Courier
            </label>
            <div className="flex -mx-2 flex-wrap">
              {/* <!--list courier--> */}
              {isLoading
                ? Array(2)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className="px-2 h-24 mb-4 w-6/12">
                        <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                      </div>
                    ))
                : data?.couriers?.map((item) => (
                    <div className="px-2 h-24 mb-4 w-6/12">
                      <button
                        type="button"
                        onClick={() =>
                          fnUpdateState({
                            target: { name: "courier", value: item.id },
                          })
                        }
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.name}
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                  ))}
              {/* <!--list courier--> */}
            </div>
          </div>
          {/* <!--Courrier--> */}

          {/* <!--payment--> */}
          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="text-sm mb-2">
              choose payment
            </label>
            <div className="flex -mx-2 flex-wrap">
              {isLoading
                ? Array(4)
                    .fill()
                    .map((_, index) => (
                      <div key={index} className="px-2 h-24 mb-4 w-6/12">
                        <div className="bg-gray-300 w-full h-full animate-pulse rounded-lg mx-2"></div>
                      </div>
                    ))
                : data?.payments?.map((item) => (
                    <div className="px-2 w-6/12 h-24 mb-4">
                      <button
                        onClick={() =>
                          fnUpdateState({
                            target: { name: "payment", value: item.id },
                          })
                        }
                        type="button"
                        className="border border-gray-200 focus:outline-none focus:border-red-200 flex items-center justify-center rounded-xl bg-white w-full h-full"
                      >
                        <img
                          src={item.imgUrl}
                          alt={item.name}
                          className="object-contain max-h-full"
                        />
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          {/* <!--payment--> */}

          <div className="text-center">
            <button
              type="submit"
              disabled={!isSubmitDisabled}
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
