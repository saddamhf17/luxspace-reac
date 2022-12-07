import React, { useEffect } from "react";
import Header from "parts/Header";
import { useParams } from "react-router-dom";
import Breadcrumb from "components/breadcrumb/index";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import useAsync from "helpers/hooks/useAsync";
import fetch from "helpers/fetch";

function LoadingProductDetail() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-16 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 bg-gray-300 animate-pulse rounded-full"></div>
        </div>

        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="p-2  relative card group" key={index}>
                      <div
                        className="rounded-xl  bg-gray-300 animate-pulse"
                        style={{ width: 105, height: 105 }}
                      ></div>
                    </div>
                  );
                })}
            </div>

            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="item bg-gray-300 animate-pulse rounded-xl h-full overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 md:p-6">
          <div className="hidden md:block">
            <div className="w-80 h-8 mb-2 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="w-40 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
          <div className="w-44 mt-8 h-14 mb-2 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />
          <div className="w-36 h-4 mt-6 mb-2 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-44 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-4 mt-6 mb-2 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-52 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-48 h-4 mt-6 mb-2 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-56 h-4 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
  return (
    <section className="bg-gray-100 px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <div className="text-2xl capitalize font-semibold">
            complete your room <br /> with what we designed
          </div>
        </div>
        <div className="flex flex-wrap overflow-x-auto mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div className="px-3 w-full md:w-3/12 mb-4" key={index}>
                  <div className="rounded-xl p-4 pb-8 relative bg-white overflow-hidden">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-52">
                      <div className="w-full bg-gray-300 animate-pulse rounded-xl h-full overflow-hidden"></div>
                    </div>
                    <div className="w-56 h-4 mt-4 mb-2 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-44 h-4 mt-4 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function HomePage(props) {
  const { id } = useParams();
  const { data, run, isLoading } = useAsync();
  //fetch API
  useEffect(() => {
    run(fetch({ url: `/api/products/${id}` }));
  }, [run]);
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        List={[
          { url: "/", name: "Home" },
          { url: "/categories/6342", name: "Office Room" },
          { url: "/categories/6342/products/4321", name: "Details" },
        ]}
      />
      {isLoading ? <LoadingProductDetail /> : <ProductDetails data={data} />}
      {isLoading ? (
        <LoadingSuggestion />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}
      <Sitemap />
      <Footer />
    </>
  );
}
