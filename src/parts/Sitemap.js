import React, { useState } from "react";
import { Link } from "react-router-dom";

function SitemapLinks({ isActive, setActive, children, title }) {
  return (
    <div className="w-full md:w-2/12 mb-4 md:mb-0 accordion">
      <h5 className="text-xl font-semibold mb-2 relative">
        {title}
        <button
          onClick={() => setActive(isActive)}
          className={[
            "absolute block md:hidden top-1/2 right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 ",
            isActive ? "rotate-0" : "rotate-180",
          ].join(" ")}
        >
          <svg
            width="20"
            height="9"
            viewBox="0 0 20 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.197257 0.403676C0.526597 -0.0396672 1.15298 -0.132085 1.59632 0.197256L9.75 6.25427L17.9037 0.197256C18.347 -0.132085 18.9734 -0.0396672 19.3027 0.403676C19.6321 0.847019 19.5397 1.4734 19.0963 1.80274L10.3463 8.30274C9.99227 8.56575 9.50773 8.56575 9.15368 8.30274L0.403676 1.80274C-0.0396667 1.4734 -0.132084 0.847019 0.197257 0.403676Z"
              fill="black"
            />
          </svg>
        </button>
      </h5>
      <ul
        className={[
          "md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200",
          isActive ? "h-0 invisible opacity-0" : "opacity-100",
        ].join(" ")}
      >
        {children}
      </ul>
    </div>
  );
}

export default function Sitemap() {
  const [active, setActive] = useState(null);
  return (
    <section className="sitemap">
      <div className="border-b border-gray-200 py-12 mt-16 px-4">
        <div className="flex justify-center mb-8">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <aside className="container mx-auto">
          <div className="flex flex-wrap md:space-x-4 justify-center">
            <SitemapLinks
              setActive={setActive}
              isActive={active === 1 ? null : 1}
              title="Overview"
            >
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Refund
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Promotion
                </Link>
              </li>
            </SitemapLinks>
            <SitemapLinks
              setActive={setActive}
              isActive={active === 2 ? null : 2}
              title="Company"
            >
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Refund
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Promotion
                </Link>
              </li>
            </SitemapLinks>
            <SitemapLinks
              setActive={setActive}
              isActive={active === 3 ? null : 3}
              title="Explore"
            >
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/Home" className="hover:underline py-1 block">
                  Contact Us
                </Link>
              </li>
            </SitemapLinks>
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
              <h5 className="text-xl font-semibold mb-2 relative">
                Special Letter
              </h5>
              <form action="">
                <label className="relative w-full">
                  <input
                    type="text"
                    className="bg-gray-100 rounded-xl py-3 px-5 w-full focus:outline-none"
                    placeholder="Your Email Adress"
                  />
                  <button className="bg-pink-400 absolute rounded-xl right-0 p-3">
                    <img src="../assets/img/btn-vector.png" alt="" />
                  </button>
                </label>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
