import React from "react";
import { Link } from "react-router-dom";

export default function PageErrorMassage({
  title = "404 NOT FOUND",
  body = "This page was not found",
}) {
  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto min-h-screen px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-4/12 text-center capitalize">
            <img
              className="mr-auto ml-auto my-4"
              src="/assets/img/alert.png"
              style={{ width: 200 }}
              alt="Error"
            />
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <p className="text-lg mb-12">{body}</p>
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
  );
}
