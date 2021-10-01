import React, { useEffect, useState } from "react";
// import "./screens.css";
import Footer from "./Footer";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Questions = ({ page, myIndex, ...props }) => {
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
    <div className="h-screen bg-blue-600">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div style={styles.bounce2} className="px-4 grid md:grid-cols-2">
            <div className="bg-blue-600 mt-48 ml-48" id="screen-21-l"></div>
            <div className="w-full items-center">
              <div
                style={styles.bounce4}
                className=" md:w-2/4 mx-auto mt-18 text-right "
              >
                <h1 className=" text-white  text-5xl font-semibold md:mt-52">
                  هل لديك أية استفسارات؟
                </h1>
                <h3 className="text-white text-base  text-xl font-semibold mt-12">
                  ارسلها إلينا! نأمل أن نسمع منك المزيد حول مشروعك{" "}
                </h3>
                <h3 className="text-white text-base text-3xl  mt-8">
                  {" "}
                  growth@takwen.co
                </h3>
                <h3 className="text-white text-base text-3xl  mt-8">
                  {" "}
                  +44 7458 195555
                </h3>
              </div>
            </div>
          </div>
          <div style={styles.bounce8} className="md:mt-48">
            <Footer />
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Questions;
