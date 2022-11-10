import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/breadcrumb/index";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function HomePage(props) {
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
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
