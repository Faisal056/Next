import React from "react";
import { useRef, useEffect, useState } from "react";
// import { Switch, Route, } from "react-router-dom";
// import disableScroll from 'disable-scroll';
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
// import "./App.css";
// import "../../styles/tailwindOutput.css";
import Main from "../Screens/Screen1";
import Benefits from "../Screens/Screen2";
import Impact from "../Screens/Screen3";
import Difference from "../Screens/Screen4";
import Training from "../Screens/Screen5";
import NextScreen from "../Screens/Screen6";
import MadeFeatures from "../Screens/Screen7";
import Screen8 from "../Screens/Screen8";
import Screen9 from "../Screens/Screen9";
import Screen10 from "../Screens/Screen10";
import Screen11 from "../Screens/Screen11";
import Screen12 from "../Screens/Screen12";
import Security from "../Screens/Screen13";
import Screen14 from "../Screens/Screen14";
import Screen15 from "../Screens/Screen15";
import Screen16 from "../Screens/Screen16";
import NextTechnology from "../Screens/Screen17";
import Screen18 from "../Screens/Screen18";
import OurFeaturedPartner from "../Screens/Screen19";
import Served from "../Screens/Screen20";
import Questions from "../Screens/Screen21";
// import ResponsiveNavbar from '../Navbar/NavbarNew';

const App = () => {
  const [index, setIndex] = useState(0);
  // const [ api, setApi ] = useState({})
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const contextRef = useRef(null);
  const servicesRef = useRef(null);
  return (
    <div>
      <ReactFullpage
        scrollOverflow={true}
        resetSliders
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
          setIndex(destination.index);
        }}
        render={({ state, fullpageApi }) => {
          console.log("fullpageApi", state, fullpageApi);
          return (
            <div id="fullpage-wrapper">
              <div className="bg-white h-screen">
                <div className="section section1">
                  <Main
                    myIndex={0}
                    myRef={mainRef}
                    page={index}
                    fullpageApi={fullpageApi}
                  />
                </div>
                <div className="section">
                  <Benefits
                    myIndex={1}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Impact
                    myIndex={2}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Difference
                    myIndex={3}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Training
                    myIndex={4}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <NextScreen
                    myIndex={5}
                    myRef={aboutRef}
                    data-anchor="about"
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <MadeFeatures
                    myIndex={6}
                    myRef={contextRef}
                    data-anchor="context"
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen8
                    myIndex={7}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen9
                    myIndex={8}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen10
                    myIndex={9}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen11
                    myIndex={10}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen12
                    myIndex={11}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Security
                    myIndex={12}
                    myRef={servicesRef}
                    data-anchor="services"
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen14
                    myIndex={13}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen15
                    myIndex={14}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen16
                    myIndex={15}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <NextTechnology
                    myIndex={16}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Screen18
                    myIndex={17}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <OurFeaturedPartner
                    myIndex={18}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Served
                    myIndex={19}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
                <div className="section">
                  <Questions
                    myIndex={20}
                    page={index}
                    fullpageApi={fullpageApi}
                    mainRef={0}
                    aboutRef={5}
                    contextRef={6}
                    servicesRef={12}
                  />
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
export default App;
