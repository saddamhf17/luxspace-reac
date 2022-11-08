import React from "react";
import { Link } from "react-router-dom";

export default function browsRoom() {
  return (
    <section className="flex bg-grey-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto xl:px-1">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            {" "}
            browse the room <br />
            that we design for you
          </h3>
        </div>
        <div className="grid grid-rows-2 grid-cols-9 gap-4">
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="card-shadow rounded-xl">
              <img
                src="assets/img/catalogue1.jpg"
                alt=""
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay left-0 top-0 right-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72">
              <h5 className="text-lg font-semibold">Living Rooms</h5>
              <span>23.000+ items</span>
            </div>
            <Link to="/details" className="streached-link">
              {/* <!--fake children--> */}
            </Link>
          </div>

          <div className="relative col-span-9 row-span-1 md:col-span-2 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="assets/img/catalogue3.jpg"
                alt=""
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
              <h5 className="text-lg font-semibold">Decoration</h5>
              <span>14.000+ items</span>
            </div>
            <Link to="/details" className="streached-link">
              {/* <!--fake children--> */}
            </Link>
          </div>

          <div className="relative col-span-9 row-span-1 md:col-span-3 md:row-span-2 card">
            <div className="card-shadow rounded-xl">
              <img
                src="assets/img/catalogue4.jpg"
                alt=""
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay inset-0 md:bottom-auto flex justify-center md:items-center flex-col pl-48 md:pl-0 pt-0 md:pt-12">
              <h5 className="text-lg font-semibold">Bed Rooms</h5>
              <span>16.000+ items</span>
            </div>
            <Link to="/details" className="streached-link">
              {/* <!--fake children--> */}
            </Link>
          </div>

          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="card-shadow rounded-xl">
              <img
                src="assets/img/catalogue2.jpg"
                alt=""
                className="w-full h-full object-cover overlay overflow-hidden rounded-xl"
              />
            </div>
            <div className="overlay left-0 top-0 right-0 bottom-0 flex justify-center flex-col pl-48 md:pl-72">
              <h5 className="text-lg font-semibold">Children Rooms</h5>
              <span>17.000+ items</span>
            </div>
            <Link to="/details" className="streached-link">
              {/* <!--fake children--> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
