import React from "react";
import LogoFirst from "../Icons/LogoFirst";
import LogoWebsite from "../Icons/LogoWebsite";
import LogoIn from "../Icons/LogoIn";
import LogoFB from "../Icons/LogoFB";
import LogoTwitter from "../Icons/LogoTwitter";
import LogoInsta from "../Icons/LogoInsta";

const Footer = () => {
  return (
    <div className=" flex justify-center mt-46">
      <div className="flex ">
        <LogoFirst />
        <h1 className="text-sm">
          Takwen is a modern software development company officially registered
          in the United Kingdom - London
        </h1>
      </div>
      <div className="md:flex md:ml-8 justify-center space-x-2 md:space-x-8">
        <LogoWebsite />
        <h1 className="text-sm "> takwen.co</h1>
        <LogoTwitter />
        <LogoIn />
        <LogoInsta />
        <LogoFB />
        <h1 className="text-sm">TakwenLTD</h1>
      </div>
    </div>
  );
};

export default Footer;
