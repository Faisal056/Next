import React from "react";
import PropTypes from "prop-types";
// import "./screens.css";
import ResponsiveNavbar from "../Navbar/NavbarNew";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const Main = (props) => {
  // const [isScrolled, setIsScrolled] = useState(false)

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
    <div className="h-screen" id="bg-1-img" ref={props.myRef}>
      <StyleRoot>
        <ResponsiveNavbar {...props} />
        <div className="px-4 " id="bgImg">
          <div className="flex flex-row-reverse p-2 ml-auto mr-2 lg:mr-16 bg-white text-right pt-56">
            <h1
              style={styles.bounce8}
              className="text-blue-600 text-5xl font-semibold leading-loose"
            >
              نحن نقدم افضل <br />
              الخدمات لتنمية أعمالك <br />
              بشكل أسرع مما تتخيله
            </h1>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
};

Main.propTypes = {
  ref: PropTypes.object,
};

export default Main;
