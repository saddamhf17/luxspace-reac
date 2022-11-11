import { useLayoutEffect } from "react";
// hooks react
export default function useScrollAncor() {
  useLayoutEffect(() => {
    const smoothScrollAnchor = document.querySelectorAll("a[href^='#']");
    // ^= artinya diawali dengan #

    for (let index = 0; index < smoothScrollAnchor.length; index++) {
      const el = smoothScrollAnchor[index];

      el.addEventListener("click", function (ev) {
        ev.preventDefault(); //menghilangkan kebiasaan asli dari click
        if (document.getElementById(this.getAttribute("href").replace("#", "")))
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
      });
    }
    return () => {};
  });
}
