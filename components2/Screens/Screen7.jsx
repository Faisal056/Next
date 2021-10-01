import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import "./screens.css"
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import ResponsiveNavbar from "../Navbar/NavbarNew";

const MadeFeatures = ({ myRef, page, myIndex, ...props }) => {
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
    <div className="text-right md:h-screen" id="screen-7" ref={myRef}>
      {show && (
        <StyleRoot>
          <ResponsiveNavbar {...props} />
          <div style={styles.bounce2} className="pr-6 md:px-16 md:py-16">
            <h1 className="text-white text-2xl md:text-5xl font-normal pt-16 ">
              ميزات مصممة خصيصًا
            </h1>
            <h3 className="text-white text-right">
              .تقدم تكوين ميزات وأنظمة مصممة خصيصًا لتعزيز تجربتك الرقمية{" "}
            </h3>
            <h3 className="text-white text-right">
              .نحن هنا لمساعدتك في الوصول إلى المعلومات الأكثر أهمية
            </h3>
          </div>
          <div
            style={styles.bounce4}
            className="justify-evenly  grid md:grid-cols-3 text-right md:py-8 md:px-16 "
          >
            <div className="">
              <h1 className="text-white md:mt-6 underline">سهل الاستخدام</h1>
              <p className="text-white text-sm md:mt-8">
                نحن نقدم منتجًا نهائيًا ميسور التكلفة وفعال وسهل الاستخدام ؛ لقد
                أصبح عملاؤنا ومستهلكونا يثقون في منتجات تكوين من حيث الجودة
                والقيمة والأداء
              </p>
            </div>
            <div className="">
              <h1 className="text-white md:mt-6 underline">المرونة</h1>
              <p className="text-white md:mt-8">
                لقد أنشأنا خدمة مرنة لأولئك الذين يحتاجون إلى القليل من المساعدة
                الإضافية للتنظيم
              </p>
            </div>
            <div className="">
              <h1 className="text-white md:mt-6 underline">سير عمل قوي</h1>
              <p className="text-white md:mt-8">
                تخلق شركة تكوين تجارب عملاء مبتكرة وجذابة. نحن نقدم جميع
                العمليات والأدوات الصحيحة والتقنيات التي تحتاجها لبناء منتجات
                استثنائية
              </p>
            </div>
            <div className="">
              <h1 className="text-white md:mt-12 underline">التنظيم السليم</h1>
              <p className="text-white md:mt-4 ">
                فريق ديناميكي ومنظم جيدًا متحمس للابتكار ويحب إنشاء أفضل
                المنتجات في مختلف المجالات
              </p>
            </div>
            <div className="">
              <h1 className="text-white md:mt-12 underline">
                الطريق إلى نجاحك
              </h1>
              <p className="text-white md:mt-4">
                نحن نبني الطريق الافتراضي لنجاحك ، نقدم أفضل الخدمات لتنمية
                أعمالك بشكل أسرع مما تتخيله
              </p>
            </div>
            <div className="">
              <h1 className="text-white md:mt-12 underline">
                تغطية شاملة للسوق المستهدف
              </h1>
              <p className="text-white md:mt-4">
                نقدم في تكوين لعملائنا نظرة شاملة للسوق من خلال تحليل متعمق
                للمعالم المالية والتشغيلية والاستراتيجية والصناعية الرئيسية{" "}
              </p>
            </div>
          </div>
        </StyleRoot>
      )}
    </div>
  );
};

MadeFeatures.propTypes = {
  myRef: PropTypes.object,
};

export default MadeFeatures;
