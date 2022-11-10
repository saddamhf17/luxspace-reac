import Breadcrumb from "components/breadcrumb";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import React from "react";
import { Link } from "react-router-dom";

export default function Success() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/success", name: "Success Checkout" },
        ]}
      />
      <section className="py-4 md:py-16">
        <div className="container mx-auto min-h-screen px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-4/12 text-center capitalize">
              <img src="/assets/img/success-img.jpg" alt="Success" />
              <h2 className="text-3xl font-semibold mb-6">
                your transaction is succesfull
              </h2>
              <p className="text-lg mb-12">
                We will send the furniture that you buy right now so now please
                sit tight and be ready for it
              </p>
              <Link
                to="/"
                className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition duration-200 px-8"
              >
                back to shop
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
