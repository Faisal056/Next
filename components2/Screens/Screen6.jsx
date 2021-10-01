import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import LogoC from "../Icons/LogoC";
import LogoD from "../Icons/LogoD";
import LogoE from "../Icons/LogoE";
import LogoF from "../Icons/LogoF";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const NextScreen = ({ myRef, page, myIndex, ...props }) => {
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
    <div className="px-4  md:h-screen md:w-full" ref={myRef}>
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div
            style={styles.bounce2}
            className=" grid md:grid-cols-2 md:gap-4 space-between md:py-8 "
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
            className=" grid md:grid-cols-3  md:gap-x-2 md:divide-x text-right"
          >
            <div className=" bg-gray-100  md:p-6 rounded-2xl">
              <div className="flex  justify-end">
                <LogoD />
              </div>
              <h1 className="text-blue-600 text-right text-normal md:text-2xl md:mt-12 ">
                ادارة المشاريع{" "}
              </h1>
              <p className="text-blue-600 text-base text-right">
                عند اتباع نهج أكثر تلقائية في العمليات التجارية، يكون من الممكن
                إتمام وظائف إضافية بكفاءة ودقة أكثر.{" "}
              </p>
            </div>
            <div className=" bg-gray-100  md:p-6 rounded-2xl">
              <div className="flex  justify-end">
                <LogoF />
              </div>
              <h1 className="text-blue-600 text-right text-2xl md:mt-12 ">
                التسويق الابداعي
              </h1>
              <p className="text-blue-600 text-base text-right  ">
                بدلاً من الإعلان المُكلف في الوسائط التقليدية، يجعل التسويق
                الرقمي الشركات قادرة على مضاعفة جهودها والوصول إلى جمهور أوسع
                بدون حدوث تأخير وتحمل تكاليف باهظة.
              </p>
            </div>
            <div className=" bg-gray-100  md:p-6 rounded-2xl ">
              <div className="flex  justify-end">
                <LogoE />
              </div>
              <h1 className="text-blue-600  text-right text-2xl md:mt-12">
                الإستراتيجية والعلامة{" "}
              </h1>
              <h1 className="text-blue-600  text-right text-2xl"> التجارية</h1>
              <p className="text-blue-600 text-base text-right md:mt-6 ">
                ضع استراتيجيتك موضع التنفيذ. اتقن علامتك التجارية بتوجيه من
                خبراء المجال.{" "}
              </p>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

NextScreen.propTypes = {
  ref: PropTypes.object,
};
export default NextScreen;
