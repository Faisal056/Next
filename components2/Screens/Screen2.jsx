import React, { useEffect, useState } from "react";
import Footer from "./Footer";
// import "./screens.css"
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Benefits = ({ page, myIndex, ...props }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("page", page);
    console.log("my", myIndex);
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
    <div className="md:h-screen">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div>
            <div className="flex flex-row-reverse p-2 ml-auto mr-2 bg-white text-right ">
              <div style={styles.bounce4} className="  " id="S-2-h4">
                <h1 className="text-blue-600 text-6xl tracking-wide font-semibold mt-16">
                  الفوائد
                </h1>
                <h1 className="text-blue-600 text-6xl tracking-wide font-semibold mt-6">
                  الجذابة
                </h1>
                <h3 className="text-blue-500 text-base mt-8 ">
                  التأثير الإيجابي والدائم للتكنولوجيا على الشركات ومكان العمل
                </h3>
              </div>
              <div
                style={styles.bounce6}
                className="flex  w-1/2 flex-col ml-auto"
              >
                <div className="flex mt-6 pl-9">
                  <h3 className="text-blue-500 text-base mr-8 ">
                    عمليات أسرع{" "}
                  </h3>
                  <h3 className="text-green-400 text-base ">01</h3>
                </div>
                <div className="flex mt-6">
                  <h3 className="text-blue-500 text-center mr-8 ">
                    صيانة أسهل ودقيقة
                  </h3>
                  <h3 className="text-green-400 text-base  ">02</h3>
                </div>
                <div className="flex mt-6 pl-6">
                  <h3 className="text-blue-500 text-base mr-7 ">
                    الميزة التنافسية
                  </h3>
                  <h3 className="text-green-400 text-base ">03</h3>
                </div>
                <div className="flex mt-6 pl-8">
                  <h3 className="text-blue-500 text-base mr-7">
                    التواصل الفعال
                  </h3>
                  <h3 className="text-green-400 text-base ">04</h3>
                </div>
                <div className="flex mt-6 pl-8">
                  <h3 className="text-blue-500 text-base mr-7 ">
                    ملاءمة الصناعة
                  </h3>
                  <h3 className="text-green-400 text-base ">05</h3>
                </div>
                <div className="flex mt-6 pl-8">
                  <h3 className="text-blue-500 text-base mr-7">
                    التتبع والمراقبة
                  </h3>
                  <h3 className="text-green-400 text-base ">06</h3>
                </div>
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

export default Benefits;
