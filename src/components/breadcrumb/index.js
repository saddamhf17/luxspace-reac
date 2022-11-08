import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//nilai ynag diterima dalam bentuk objek
export default function breadcrumb({ List }) {
  return (
    <section className="bg-gray-100 py-8 px-4">
      <div className="container mx-auto">
        <ul className="breadcrumb">
          {List?.map?.((item, index) => {
            const arias =
              index === List?.length ? { "aria-label": "current-page" } : {};
            return (
              //key must be unique value
              <li key={item.url}>
                <Link to="{item.url}" {...arias}>
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li>
            <Link to="#">Office Room</Link>
          </li>
          <li>
            <Link to="#" aria-label="current-page">
              Details
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

//prop list dari komponen bradcrumb harus dalam bentuk array
breadcrumb.prototype = {
  list: PropTypes.array.isRequired,
};
