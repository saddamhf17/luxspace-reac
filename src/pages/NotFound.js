import React from "react";
import Header from "parts/Header";
import PageErrorMassage from "parts/PageErrorMassage";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <PageErrorMassage />
      <Sitemap />
      <Footer />
    </>
  );
}
