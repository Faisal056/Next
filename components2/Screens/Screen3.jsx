import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
// import { useEffect } from "react/cjs/react.development";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Impact = ({ myRef3, page, myIndex, ...props }) => {
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
    <div className="h-screen">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div className="h-screen s3-m" ref={myRef3}>
            <div className="flex flex-row-reverse pl-auto text-right h-1/2">
              <h1
                style={styles.bounce4}
                className="text-blue-600 md:text-6xl text-2xl font-semibold md:leading-loose pt-32 md:pt-16 pr-4 md:pr-12 lg:pr-16"
              >
                تأثير التكنولوجيا على طريقة <br />
                عمل الشركات والأعمال
              </h1>
            </div>

            <div className="flex flex-row-reverse text-blue-500 text-base md:text-2xl font-semibold text-right h-1/2">
              <h3
                style={styles.bounce2}
                className="pt-32 md:pt-16 pr-4 md:pr-12 lg:pr-16"
              >
                تستطيع التكنولوجيا أن تبقيك في الصدارة، حيث تمنحك طرقًا للحفاظ
                على
                <br />
                الميزة التنافسية وتقويتها. سيدفعك التسويق الرقمي وأحدث الأنظمة
                في
                <br />
                العمل نحو الأمام، وستُحقق أقصى استفادة من كل دقيقة تقضيها على
                <br />
                الإنترنت.
              </h3>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};
Impact.propTypes = {
  myRef3: PropTypes.object,
  neeProp: PropTypes.string,
};

export default Impact;
