import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Custom hook to scroll to top on location change
export const useScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

// Array of venue navigation links
export const services = [
  {
    name: "30 Minute Customizable Massage",
    description: "Customizable Massage to Meet Your Nees",
    price: "$60",
    id: "30min",
  },
  {
    name: "60 Minute Customizable Massage",
    description: "Customizable Massage to Meet Your Nees",
    price: "$100",
    id: "60min",
  },
  {
    name: "90 Minute Customizable Massage",
    description: "Customizable Massage to Meet Your Nees",
    price: "$150",
    id: "90min",
  },
  {
    name: "120 Minute Customizable Massage",
    description: "Customizable Massage to Meet Your Nees",
    price: "$200",
    id: "120min",
  },
];
