import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Screen9 = ({ page, myIndex, ...props }) => {
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
          <div className=" grid md:grid-cols-2 h-screen">
            <div className="bg-gray-200" id="s-9-l"></div>
            <div className="w-full items-center" id="S-9-h4">
              <div className="  md:w-2/4 pr-4 md:mx-auto pt-4 md:pt-44 text-right ">
                <h1
                  style={styles.bounce2}
                  className="  text-blue-600 text-5xl font-semibold"
                >
                  الذكاء الاصطناعي
                </h1>
                <h3
                  style={styles.bounce4}
                  className="text-blue-600 text-base  text-2xl font-semibold pt-12"
                  id="s3-h1"
                >
                  زيادة أتمتة المهام واستخدام الذكاء الاصطناعي
                </h3>
                <h3
                  style={styles.bounce6}
                  className="text-blue-600 text-base text-xl  pt-8"
                >
                  جميع الشركات والجهات الخاصة والحكومية تسعى الى أتمتة ما تستطيع
                  بقدر الامكان وذلك لتخفيف الضغط الكبير على الموظفين وتركيزهم
                  على مهام اكثر أهمية
                </h3>
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Screen9;
