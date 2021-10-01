import React, { useEffect, useState } from 'react'
import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import ResponsiveNavbar from "../Navbar/NavbarNew";


const Screen16 = ({ page, myIndex ,...props}) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (page === myIndex)
            setShow(true)
        else {
            setShow(false)
        }
    }, [page])

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

    return (
        <div className="">
            {show && (
                <StyleRoot>
                    <ResponsiveNavbar {...props} />
                    <div style={styles.bounce4} className="md:flex items-center justify-end">
                        <div className="text-right text-blue-600 mx-auto sm:w-3/4 md:mt-48 md:pl-96">
                            <h2 className="text-blue-600 mt-16 underline text-2xl"> تواصل واضح</h2>
                            <p className="text-blue-600 md:mt-6">بفضل التكنولوجيا، أضحى التواصل واضحًا، مما يسهل على أعضاء الفريق التفاعل مع بعضهم البعض والتواصل مع أصحاب العمل بدون حدوث تأخير.</p>
                            <h2 className="text-blue-600 md:mt-12 underline text-2xl">أدوات التعلم</h2>
                            <p className="text-blue-600 md:mt-6">تتيح التكنولوجيا إمكانية الوصول إلى البرامج التدريبية عبر الإنترنت، ووضع مواد تعليمية داخلية، والاستمتاع بالاشتراكات في أدوات التعلم مثل المجلات المتوافقة مع مجال عملك.</p>
                            <h2 className="text-blue-600 md:mt-12 underline text-2xl">مشاركة أقوى</h2>
                            <p className="text-blue-600 md:mt-6">أصبح إجراء مراجعة مع موظفيك أسهل كثيرًا الآن، وذلك بفضل التكنولوجيا. يبقيهم ذلك متحمسين كذلك. لم يكن إتمام العمل افتراضيًا بهذه السهولة من قبل.</p>
                        </div>
                        <div style={styles.bounce6} className=" bg-gray-100 text-blue-600 text-right  mx-auto md:mt-48 rounded-3xl">
                            <h1 className="text-2xl md:text-5xl mr-4 mt-10" >
                                تشغيل
                                <br /> المنظمات
                                <br />والشركات
                                <br />باستخدام
                                <br /> التكنولوجيا
                            </h1>
                            <p className="md:text-3xl mr-6 mt-4">
                                أضحى الاهتمام بموظفيك
                            </p>
                            <p className="md:text-3xl mr-6 mb-10 ml-6">
                                .أسهل، وذلك بفضل التكنولوجيا
                            </p>
                        </div>
                    </div>
                </StyleRoot>
            )}
        </div>
    )
}

export default Screen16
