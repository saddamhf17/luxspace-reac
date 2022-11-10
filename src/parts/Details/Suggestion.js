import React from "react";
import { Link } from "react-router-dom";

export default function Suggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <div className="text-2xl capitalize font-semibold">
            complete your room <br /> with what we designed
          </div>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                <img src="/assets/img/other-img1.jpg" className="w-full" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2XL</h5>
              <span>IDR 2.200.000</span>
              <Link to="/details" className="streached-link"></Link>
            </div>
          </div>

          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                <img src="/assets/img/other-img2.jpg" className="w-full" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 2L</h5>
              <span>IDR 2.340.000</span>
              <Link to="/details" className="streached-link"></Link>
            </div>
          </div>

          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                <img src="/assets/img/other-img3.jpg" className="w-full" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 3L</h5>
              <span>IDR 2.880.000</span>
              <Link to="/details" className="streached-link"></Link>
            </div>
          </div>

          <div className="px-3 w-full md:w-3/12 mb-4">
            <div className="rounded-xl p-4 pb-8 relative bg-white">
              <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                <img src="/assets/img/other-img4.jpg" className="w-full" />
              </div>
              <h5 className="text-lg font-semibold mt-4">Office Chair 4XL</h5>
              <span>IDR 4.350.000</span>
              <Link to="/details" className="streached-link"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
