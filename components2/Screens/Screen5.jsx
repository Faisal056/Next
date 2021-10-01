import React, { useEffect, useState } from "react";
import LogoB from "../Icons/LogoB";
import LogoC from "../Icons/LogoC";
import LogoWeb from "../Icons/LogoWeb";
import LogoMApp from "../Icons/LogoMApp";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Training = ({ page, myIndex, ...props }) => {
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
    <div className="px-4   md:w-full">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div
            style={styles.bounce2}
            className="  grid md:grid-cols-2 md:gap-4 space-between md:py-8 "
          >
            <div>
              <LogoC />
            </div>
            <div className="md:p-2  bg-white text-right ">
              <h1 className="text-blue-600 md:text-5xl text-2xl font-normal">
                خدمات تكوين ذات المستوى العالمي
              </h1>
              <h3 className="text-blue-600 text-base mt-4 text-right">
                .تُعتبر التكنولوجيا هي القوة الدافعة القوية لنمو الشركة
              </h3>
            </div>
          </div>
          <div
            style={styles.bounce4}
            className=" grid md:grid-cols-3 md:gap-8 text-right"
          >
            <div className=" bg-gray-100  md:p-6 rounded-2xl ">
              <div className="flex  justify-end">
                <LogoB />
              </div>
              <h1 className="text-blue-600 text-right text-2xl md:mt-12 ">
                UI / UX تصميم{" "}
              </h1>
              <p className="text-blue-600 text-right text-base ">
                يوفر نظام التصميم تجربة لا مثيل لها عبر الأجهزة والقنوات ونقاط
                الاتصال{" "}
              </p>
            </div>
            <div className=" bg-gray-100  md:p-6 rounded-2xl">
              <div className="flex  justify-end">
                <LogoWeb />
              </div>
              <h1 className="text-blue-600 text-right text-2xl md:mt-12">
                تطبيقات الويب
              </h1>
              <p className="text-blue-600 text-right text-base  ">
                {" "}
                التطوير السريع لتطبيقات الويب التي تلبي احتياجات المستخدمين
                والمؤسسات والشركات{" "}
              </p>
            </div>
            <div className=" bg-gray-100  md:p-6 rounded-2xl">
              <div className="flex  justify-end">
                <LogoMApp />
              </div>
              <h1 className="text-blue-600  text-right text-2xl md:mt-12">
                تطبيقات الهواتف
              </h1>
              <p className="text-blue-600 text-base text-right  ">
                {" "}
                بناء تطبيقات الأجهزة المحمولة الخاصة بك باستخدام أحدث التقنيات
                والعمليات المتطورة{" "}
              </p>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Training;
