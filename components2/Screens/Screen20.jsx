import React, { useEffect, useState } from "react";
import LogoCureify from "../Icons/LogoCureify";
import LogoUAE from "../Icons/LogoUAE";
import LogoStc from "../Icons/LogoStc";
import LogoST from "../Icons/LogoST";
import LogoTnaweel from "../Icons/LogoTnaweel";
import LogoNun from "../Icons/LogoNun";
import Mrsool from "../Icons/Mrsool";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Served = ({ page, myIndex, ...props }) => {
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
              خدمنا بكل فخر
            </header>
          </div>
          <div style={styles.bounce4} className=" grid-cols-3  py-8 ">
            <div className=" md:flex flex-cols-3 md:ml-4 md:justify-around md:mt-14">
              <div>
                <Mrsool />{" "}
              </div>
              <div className="">
                <LogoCureify />
              </div>
              <div className="">
                <LogoTnaweel />
              </div>
              <div className="">
                <LogoNun />
              </div>
            </div>
            <div className="md:flex flex-cols-3 md:ml-4 md:justify-around md:mt-14 mb-16">
              <div className="text-white text-right text-2xl">
                <h1>يشرفنا نحط شعارك</h1>
                <h1 className="mr-20">(: هنا</h1>
              </div>
              <div className="">
                <LogoUAE />
              </div>
              <div className="">
                <LogoStc />
              </div>
              <div className="">
                <LogoST />
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};
export default Served;
