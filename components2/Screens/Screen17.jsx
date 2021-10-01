import React, { useEffect, useState } from "react";
// import "./screens.css";
import LogoSurface17 from "../Icons/LogoSurface17";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const NextTechnology = ({ page, myIndex, ...props }) => {
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
    <div className="bg-white py-18 md:w-full sm:w-full ">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div style={styles.bounce2}>
            <header className="flex text-blue-600  justify-center text-semibold md:text-6xl text-2xl py-16">
              ما هو التالي في العمل التكنولوجي
            </header>
          </div>
          <div className="flex  p-2  mr-2 bg-gray-100  text-right">
            <div
              style={styles.bounce4}
              className="flex flex-col justify-center ml-auto "
            >
              <div className="flex mt-6">
                <h3 className="text-blue-500 text-base  -ml-6 ">
                  زيادة أتمتة المهام واستخدام الذكاء الاصطناعي.{" "}
                </h3>
                <h3 className="text-green-400 text-base ml-6 ">01</h3>
              </div>
              <div className="flex md:mt-16 ">
                <h3 className="text-blue-500 text-center mr-4 ml-14">
                  تركيز أكثر على المهام عالية القيمة.
                </h3>
                <h3 className="text-green-400 text-base ">02</h3>
              </div>
              <div className="flex md:mt-16 -ml-20">
                <h3 className="text-blue-500 text-base mr-5">
                  الاستثمار المستمر في الأمن الإلكتروني وتكنولوجيا الأمن.
                </h3>
                <h3 className="text-green-400 text-base">03</h3>
              </div>
              <div className="flex md:mt-20 ">
                <h3 className="text-blue-500 text-base">
                  تركيز واعٍ بشكل أفضل على الصحة العقلية.
                </h3>
                <h3 className="text-green-400 text-base ml-6 ">04</h3>
              </div>
              <div className="flex md:mt-16  -ml-14">
                <h3 className="text-blue-500 text-base mr-6">
                  تحقيق توزيع وتمثيل جغرافي أكبر في القوى العاملة.
                </h3>
                <h3 className="text-green-400 text-base ">05</h3>
              </div>
            </div>
            <div styles={styles.bounce6} className="md:ml-6" id="S-17-h4">
              <LogoSurface17 />
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};
export default NextTechnology;
