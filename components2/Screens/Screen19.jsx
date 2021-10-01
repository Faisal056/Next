import React, { useEffect, useState } from "react";
import Orange from "../Icons/Orange";
import Stripe from "../Icons/Stripe";
import MsAzure from "../Icons/MsAzure";
import IBM from "../Icons/IBM";
import Cisco from "../Icons/Cisco";
import Amazon from "../Icons/Amazon";
import Google from "../Icons/Google";
import Wise from "../Icons/Wise";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const OurFeaturedPartner = ({ page, myIndex, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (page === myIndex) setShow(true);
    else {
      setShow(false);
    }
  }, [page]);

  const styles = {
    bounce2: {
      animation: "x 4s",
      animationName: Radium.keyframes(fadeIn, "bounce2"),
    },
    bounce4: {
      animation: "x 6s",
      animationName: Radium.keyframes(fadeIn, "bounce4"),
    },
    bounce6: {
      animation: "x 8s",
      animationName: Radium.keyframes(fadeIn, "bounce6"),
    },
    bounce8: {
      animation: "x 10s",
      animationName: Radium.keyframes(fadeIn, "bounce8"),
    },
  };

  return (
    <div className="h-screen" id="screen-19">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div style={styles.bounce2}>
            <header className="flex text-white justify-center text-semibold md:text-6xl text-3xl py-16">
              شركائنا المميزون
            </header>
          </div>
          <div style={styles.bounce4} className="grid-cols-3  py-8 ">
            <div className=" md:flex flex-cols-3  md:ml-8 justify-around md:mt-14">
              <div className="">
                <Google />
              </div>
              <div className="">
                <MsAzure />
              </div>
              <div className="">
                <Amazon />
              </div>
              <div className="">
                <IBM />
              </div>
            </div>
            <div className=" md:flex flex-cols-3 md:ml-4 md:justify-around md:mt-14 mb-6">
              <div className="">
                <Orange />
              </div>
              <div className="">
                <Stripe />
              </div>
              <div className="">
                <Wise />
              </div>
              <div className="">
                <Cisco />
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};
export default OurFeaturedPartner;
