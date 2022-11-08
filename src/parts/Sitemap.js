import React from "react";
import { Link } from "react-router-dom";

export default function Sitemap() {
  return (
    <section>
      <div class="border-t border-b border-gray-200 py-12 mt-16 px-4">
        <div class="flex justify-center mb-8">
          <img src="assets/img/logo.png" alt="" />
        </div>
        <aside class="container mx-auto">
          <div class="flex flex-wrap md:space-x-4 justify-center">
            <div class="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 class="text-xl font-semibold mb-2 relative">overview</h5>
              <ul class="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Refund
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Promotion
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 class="text-xl font-semibold mb-2 relative">Company</h5>
              <ul class="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 class="text-xl font-semibold mb-2 relative">Explore</h5>
              <ul class="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/Home" class="hover:underline py-1 block">
                    For Developer
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-3/12 mb-4 md:mb-0">
              <h5 class="text-xl font-semibold mb-2 relative">
                Special Letter
              </h5>
              <form action="">
                <label class="relative w-full">
                  <input
                    type="text"
                    class="bg-gray-100 rounded-xl py-3 px-5 w-full focus:outline-none"
                    placeholder="Your Email Adress"
                  />
                  <button class="bg-pink-400 absolute rounded-xl right-0 p-3">
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
