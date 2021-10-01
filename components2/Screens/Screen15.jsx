import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Screen15 = ({ page, myIndex, ...props }) => {
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
    <div className="bg-blue-700">
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div>
            <div
              className="bg-blue-700 md:grid md:grid-cols-4 gap-4 align-right text-white text-6xl lg:text-7xl font-bold flex items-end h-screen"
              id="s-15-bg"
            >
              <div className="col-start-2 col-end-3 text-right mb-32 pl-16 pb-16 md:pl-0 md:-pb-16">
                <h1 style={styles.bounce4} className="leading-normal">
                  فوائد
                  <br />
                  التكنولوجيا
                </h1>
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Screen15;
