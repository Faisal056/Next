import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Screen12 = ({ page, myIndex, ...props }) => {
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    if (page === myIndex) setShow(true);
    else {
      setShow(false);
    }
  }, [page]);

  return (
    <div>
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div className="grid md:grid-cols-2 h-screen">
            <div className="bg-gray-200" id="s-12-l"></div>
            <div
              style={styles.bounce2}
              className="w-full items-center"
              id="S-9-h4"
            >
              <div className="  md:w-2/4 pr-4 mx-auto  md:mt-40 text-right ">
                <h1
                  style={styles.bounce2}
                  className="  text-blue-600 text-5xl font-semibold leading-snug"
                >
                  التحول الرقمي المضمون
                </h1>
                <h3
                  style={styles.bounce4}
                  className="text-blue-600 text-base  text-2xl font-semibold mt-12"
                  id="s3-h1"
                >
                  .تقدم في المنافسة من خلال التحول الرقمي المضمون
                </h3>
                <h3
                  style={styles.bounce6}
                  className="text-blue-600 text-base text-xl  mt-12"
                >
                  نقوم بكل بساطة بتحويل جميع الادوات والعملية والوسائل
                  التقليديلة الى رقمية باستخدام احدث التقنيات والبرمجيات، وذلك
                  ضمن خدمة التحول الرقمي المضمون والتي تضمن لك تحول كامل بنسبة
                  100% خلال مدة لا تتجاوز 4 أشهر
                </h3>
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Screen12;
