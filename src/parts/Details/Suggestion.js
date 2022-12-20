import React from "react";
import { Link } from "react-router-dom";
import "helpers/formating/currency";
export default function Suggestion({ data }) {
  console.log(data);
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <div className="text-2xl capitalize font-semibold">
            complete your room <br /> with what we designed
          </div>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {data?.map((item) => {
            return (
              <div className="px-3 w-full md:w-3/12 mb-4" key={item.id}>
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                    <img src={item.imageUrl} className="w-full" />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span>{item.price.currency()}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link "
                  ></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
