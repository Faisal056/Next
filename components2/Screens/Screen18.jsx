import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Screen18 = ({ page, myIndex, ...props }) => {
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
          <div className="bg-blue-600 h-screen" id="s-18-b">
            <div className=" text-right pr-4" id="Screen-18-pd">
              <h3
                style={styles.bounce4}
                className="text-white text-2xl font-semibold"
              >
                مات مولينويج
              </h3>
              <h1
                style={styles.bounce6}
                className="text-white text-3xl md:text-5xl font-semibold leading-normal lg:leading-loose pt-20"
              >
                تُعتبر التكنولوجيا هي الأفضل عندما تجمع
                <br /> الاشخاص معًا
              </h1>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Screen18;
