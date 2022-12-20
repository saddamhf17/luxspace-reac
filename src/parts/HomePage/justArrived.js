import React, { useEffect, useRef } from "react";
import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";
import { Link } from "react-router-dom";
import Carousel from "components/Carousel";
import "helpers/formating/currency";

function Loading() {
  return Array(6)
    .fill()
    .map((_, index) => {
      return (
        <div className="px-4 relative card group" key={index}>
          <div
            className="rounded-xl bg-gray-300 overflow-hidden card-shadow"
            style={{ width: 287, height: 386 }}
          ></div>
          <div className="w-36 h-3 bg-gray-400 mt-3 rounded-full"></div>
          <div className="w-24 h-3 bg-gray-400 mt-2 rounded-full"></div>
        </div>
      );
    });
}

export default function JustArrived() {
  const { data, error, run, isLoading } = useAsync();

  const refContainer = useRef(null);
  //fetch API
  useEffect(() => {
    run(fetch({ url: "/api/products/?page=1&limit=10" }));
  }, [run]);

  return (
    <section className="flex flex-col py-16 mt-3">
      <div className="container mx-auto mb-4 lg:px-10">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl font-semibold capitalize">
            just arrived <br /> this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto" ref={refContainer}></div>

        {isLoading ? (
          <div
            className="flex -mx-4 flex-row relative"
            style={{
              paddingLeft:
                refContainer.current?.getBoundingClientRect?.()?.left - 16 || 0,
            }}
          >
            <Loading></Loading>
          </div>
        ) : error ? (
          JSON.stringify(error)
        ) : data.data.length === 0 ? (
          "No Product Found"
        ) : (
          <Carousel refContainer={refContainer}>
            {data.data.map((item) => {
              return (
                <div className="card group px-4 relative " key={item.id}>
                  <div
                    className="rounded-xl overflow-hidden card-shadow"
                    style={{ width: 287, height: 386 }}
                  >
                    <img
                      src={item.imageUrl}
                      className="w-full h-full object-cover object-center"
                      alt="cangkir"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">{item.title}</h5>
                  <span>{item.price.currency()}</span>
                  <Link
                    to={`/categories/${item.idc}/products/${item.id}`}
                    className="stretched-link "
                  ></Link>
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
}
