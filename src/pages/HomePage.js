import React from "react";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowsRoom from "parts/HomePage/browsRoom";
import Arrived from "parts/HomePage/justArrived";
import Client from "parts/Client";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import useScrollAncor from "helpers/hooks/useScrollAncor";
import useModalDom from "helpers/hooks/useModalDom";

export default function HomePage(props) {
  useScrollAncor();
  useModalDom();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowsRoom />
      <Arrived />
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
