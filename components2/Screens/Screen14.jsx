import React, { useEffect, useState } from "react";
// import "./screens.css";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const Screen14 = ({ page, myIndex, ...props }) => {
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
          <div className="grid md:grid-cols-2 h-screen">
            <div className="bg-gray-200" id="s-14-l"></div>
            <div
              style={styles.bounce2}
              className="w-full items-center"
              id="S-9-h4"
            >
              <div className="  md:w-2/4 pr-4 md:mx-auto mt-auto md:mt-40 text-right ">
                <h1
                  style={styles.bounce4}
                  className="  text-blue-600 text-5xl font-semibold leading-normal"
                >
                  معاير وممارسات الأمن السيبراني
                </h1>
                <h3
                  style={styles.bounce6}
                  className="text-blue-600 text-base  text-2xl font-semibold mt-12"
                  id="s3-h1"
                >
                  هل تواجهك شكوك حول مدى التزام شركتك ومظفيك بمعاير الامن
                  السيبراني؟
                </h3>
                <h3
                  style={styles.bounce8}
                  className="text-blue-600 text-base text-xl  mt-8"
                >
                  في تكوين نقوم بفحص شامل لجميع جوانب الامن السيبراني في شركتك
                  بداية من المعدات والبرمجيات وحتى الموظفين والعاملين في
                  المنظمة، وذلك لضمان عدم وجود اي ثغرات تقنية او بشرية في
                  مؤسستك.
                </h3>
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

export default Screen14;
