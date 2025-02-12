// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Delay the scroll to ensure the new component has mounted
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
