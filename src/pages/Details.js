import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/breadcrumb/index";
// import BrowsRoom from "parts/HomePage/browsRoom";
// import Arrived from "parts/HomePage/justArrived";
import Client from "parts/Client";
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
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
