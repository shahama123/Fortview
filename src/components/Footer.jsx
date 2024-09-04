import React from "react";

const Footer = () => {
  return (
    <div className="flex  items-center text-center text-blue-gray-900  pt-10 pb-11 lg:mx-28 mx-6">
      <ul className="flex items-center text-center lg:gap-2 gap-1 lg:text-xs text-xs underline">
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Product & Pricing</a>
        </li>
        <li>
          <a href="">Privacy Policy</a>
        </li>
        <li>
          <a href="">Terms & Conditions</a>
        </li>
        <li>
          <a href="">Refund & Cancellation Policy</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
