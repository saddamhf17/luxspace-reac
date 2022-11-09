import React from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import BrowsRoom from "parts/HomePage/browsRoom";
import Arrived from "parts/HomePage/justArrived";
import Client from "parts/Client";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function HomePage(props) {
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
