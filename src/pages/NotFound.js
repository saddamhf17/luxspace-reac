import React from "react";
import Header from "parts/Header";
import PageErrorMassage from "parts/PageErrorMassage";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Document from "parts/Document";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <PageErrorMassage />
      <Sitemap />
      <Footer />
    </Document>
  );
}
