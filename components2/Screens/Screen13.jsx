import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Security = ({ myRef, page, myIndex, ...props }) => {
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
    <div id="screen-7" ref={myRef}>
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div
            style={styles.bounce4}
            className="md:flex bg-blue-600 flex-row-reverse md:h-screen items-center px-6 "
            id="mobile"
          >
            <h1 className="text-white md:text-6xl text-2xl flex md:ml-96 text-right items-center mt-20">
              أهمية الأمن السيبراني وتكنولوجيا الأمن
            </h1>
            <div className=" items-center md:mr-68 ">
              <h1 className="text-green-300 text-3xl  underline text-right mt-20">
                تُعتبر مسألة الأمن هي سر حماية المعلومات الشخصية والملكية
                الفكرية والبيانات
              </h1>
              <p className="text-white text-right mt-10">
                بدون الاستثمار الفائق في الأمن الإلكتروني، سيكون الاستقرار
                والتقدم المُحقق بشق الأنفس ومعلومات الشركة الثمينة بدون فائدة.
              </p>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

Security.propTypes = {};
export default Security;
