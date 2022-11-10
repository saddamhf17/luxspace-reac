import React from "react";

export default function ShoppingCart() {
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
      <p id="cart-empty" className="hidden text-center py-8 capitalize">
        your cart is empty,{" "}
        <a href="details.html" className="underline">
          shop now!
        </a>
      </p>
      {/* <!--Empty Cart--> */}

      {/* <!--Start table item 1--> */}
      <div
        className="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="1"
      >
        <div className="px-4 flex-none">
          <div style={{ width: 90, height: 90 }}>
            <img
              src="/assets/img/other-img1.jpg"
              alt="chair 1"
              className="object-cover rounded-xl w-full"
            />
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-1">
          <div>
            <h6 className="font-semibold text-lg md:text-xl leading-8">
              Saman Kakka
            </h6>
            <span className="text-sm md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 3.200.000
            </h6>
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div>
            <h6 className="font-semibold text-lg">IDR 3.200.000</h6>
          </div>
        </div>
        <div className="px-4 w-2/12 ">
          <div className="text-center">
            <button
              data-delete-item="1"
              className="text-red-600 border-none focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!--End table item 1--> */}

      {/* <!--Start table item 2--> */}
      <div
        className="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="2"
      >
        <div className="px-4 flex-none">
          <div style={{ width: 90, height: 90 }}>
            <img
              src="/assets/img/other-img2.jpg"
              alt="chair 1"
              className="object-cover rounded-xl w-full"
            />
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-1">
          <div>
            <h6 className="font-semibold text-lg md:text-xl leading-8">
              Green Seat
            </h6>
            <span className="text-sm md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 2.800.000
            </h6>
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div>
            <h6 className="font-semibold text-lg">IDR 2.800.000</h6>
          </div>
        </div>
        <div className="px-4 w-2/12 ">
          <div className="text-center">
            <button
              data-delete-item="2"
              className="text-red-600 border-none focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!--End table item 2--> */}

      {/* <!--Start table item 3--> */}
      <div
        className="flex flex-start flex-wrap items-center mb-4 -mx-4"
        data-row="3"
      >
        <div className="px-4 flex-none">
          <div style={{ width: 90, height: 90 }}>
            <img
              src="/assets/img/other-img3.jpg"
              alt="chair 1"
              className="object-cover rounded-xl w-full"
            />
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-1">
          <div>
            <h6 className="font-semibold text-lg md:text-xl leading-8">
              Pasific
            </h6>
            <span className="text-sm md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 4.500.000
            </h6>
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-none md:flex-1 hidden md:block">
          <div>
            <h6 className="font-semibold text-lg">IDR 4.500.000</h6>
          </div>
        </div>
        <div className="px-4 w-2/12 ">
          <div className="text-center">
            <button
              data-delete-item="3"
              className="text-red-600 border-none focus:outline-none"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!--End table item 3--> */}
    </div>
  );
}
