import React from "react";

export default function Client() {
  return (
    <section className="container mx-auto lg:py-1">
      <div className="flex justify-center flex-wrap">
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4">
          <img
            src="assets/img/logo-adobe.png"
            alt="logo adobe"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4">
          <img
            src="assets/img/logo ikea.png"
            alt="logo adobe"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4">
          <img
            src="assets/img/logo HM.png"
            alt="logo adobe"
            className="mx-auto"
          />
        </div>
        <div className="w-full flex-auto md:w-auto md:flex-initial px-4 md:px-6 my-4">
          <img
            src="assets/img/logo miele.png"
            alt="logo adobe"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
