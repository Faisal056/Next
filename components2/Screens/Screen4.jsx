import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import ResponsiveNavbar from "../Navbar/NavbarNew";



const Difference = ({ myRef, page, myIndex,...props }) => {
  const [show, setShow] = useState(false)

  const styles = {
    bounce2: {
      animation: 'x 4s',
      animationName: Radium.keyframes(fadeIn, 'bounce2')
    },
    bounce4: {
      animation: 'x 6s',
      animationName: Radium.keyframes(fadeIn, 'bounce4')
    },
    bounce6: {
      animation: 'x 8s',
      animationName: Radium.keyframes(fadeIn, 'bounce6')
    }, bounce8: {
      animation: 'x 10s',
      animationName: Radium.keyframes(fadeIn, 'bounce8')
    }
  }
  useEffect(() => {
    if (page === myIndex)
      setShow(true)
    else {
      setShow(false)
    }
  }, [page])

  return (
    <div>
      {show && (
        <StyleRoot>
          <ResponsiveNavbar{...props} />
          <div className="grid md:grid-cols-2 h-screen" ref={myRef}>
            <div className="bg-blue-600 text-white text-3xl md:text-5xl font-semibold  text-center">
              <h1 style={styles.bounce2} className="pt-2 md:pt-28 lg:w-10/12 pr-4 md:pr-4 lg:pr-0 text-right leading-loose">
                العمل والحياة في وجود التكنولوجيا
              </h1>
              <div className="text-white text-base pt-4 md:pt-28 text-right pr-4 lg:pr-28">
                <h3 style={styles.bounce4} className="py-4 md:py-8">
                  .من الممكن إجراء عمليات التدقيق وتسجيل العمليات الحسابية بشكل أسرع
                  (وأكثر دقة)
                </h3>
                <h3 style={styles.bounce6} className="py-4 md:py-8">
                  يتميز الإعلان عبر الإنترنت بنطاق أوسع وسيجعلك قادرًا على الوصول إلى
                  .جمهور أكبر
                </h3>
                <h3 style={styles.bounce8} className="py-4 md:py-8">
                  .يتم تتبع الوقت وإدارة الموظفين باستخدام برامج أفضل
                </h3>
              </div>
            </div>
            <div className="text-blue-600 text-3xl md:text-5xl font-semibold  text-center">
              <div className="pt-2 md:pt-28  sm:w-11/12 text-right leading-loose pr-4 md:pr-0 lg:pr-12">
                <h1 style={styles.bounce2}> العمل والحياة قبل <br />
                  التكنولوجيا
                </h1>
              </div>
              <div className="text-blue-600 text-base pt-4 md:pt-28 pr-4 lg:pr-28 text-right">
                <h3 style={styles.bounce4} className="py-4 md:py-8">
                  .استغرق إكمال عمليات التدقيق وتسجيل العمليات الحسابية عدة أسابيع
                </h3>
                <h3 style={styles.bounce6} className="py-4 md:py-8">
                  .كانت الإعلانات المطبوعة هي الطريقة التي تتبعها الشركات
                </h3>
                <h3 style={styles.bounce8} className="py-4 md:py-8">.كان يتم حساب تتبع الوقت يدويًا</h3>
              </div>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

Difference.propTypes = {
  myRef: PropTypes.object,
  neeProp: PropTypes.string
}

export default Difference;
