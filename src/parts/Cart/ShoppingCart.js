import React from "react";

import { useGlobalContext } from "helpers/hooks/useGlobalContext";
import { INSPECT_MAX_BYTES } from "buffer";
import { Link } from "react-router-dom";
import "helpers/formating/currency";

export default function ShoppingCart() {
  const { state, dispatch } = useGlobalContext();
  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
      <div className="flex flex-start mb-4 mt-8 pb-3 border-b border-gray-200 md:border-b-0">
        <h3 className="text-2xl">Shopping Cart</h3>
      </div>

      {/* <!--Start table header--> */}
      <div className="border-b border-gray-200 mb-4 hidden md:block">
        <div className="flex flex-start items-center pb-2 -mx-4">
          <div className="px-4 flex-none">
            <div style={{ width: 90 }}>Photo</div>
          </div>
          <div className="px-4 w-5/12">
            <div>Product</div>
          </div>
          <div className="px-4 w-5/12">
            <div>Price</div>
          </div>
          <div className="px-4 w-2/12">
            <div className="text-center">Action</div>
          </div>
        </div>
      </div>
      {/* <!--End table header--> */}
      {/* <!--Empty Cart--> */}
      {Object.keys(state.cart).length === 0 ? (
        <p id="cart-empty" className=" text-center py-8 capitalize">
          your cart is empty,{" "}
          <Link to="/" className="underline">
            shop now!
          </Link>
        </p>
      ) : (
        Object.keys(state.cart).map((key) => {
          const item = state.cart[key];
          return (
            <div
              className="flex flex-start flex-wrap items-center mb-4 -mx-4"
              key={key}
            >
              <div className="px-4 flex-none">
                <div style={{ width: 90, height: 90 }}>
                  <img
                    src={item.imgUrls[0]}
                    alt={item.title}
                    className="object-cover rounded-xl w-full"
                  />
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-1">
                <div>
                  <h6 className="font-semibold text-lg md:text-xl leading-8">
                    {item.title}
                  </h6>
                  <span className="text-sm md:text-lg">
                    {item.category.title}
                  </span>
                  <h6 className="font-semibold text-base md:text-lg block md:hidden">
                    {item.price.currency()}
                  </h6>
                </div>
              </div>
              <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
                <div>
                  <h6 className="font-semibold text-lg">
                    {item.price.currency()}
                  </h6>
                </div>
              </div>
              <div className="px-4 w-2/12 ">
                <div className="text-center">
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", id: item.id })
                    }
                    className="text-red-600 border-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
