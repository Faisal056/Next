import React, { useState } from "react";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import LogoA from "../Icons/LogoA";
import { GiHamburgerMenu } from "react-icons/gi";
// import { NavLink } from "react-router-dom";

export default function ResponsiveNavbar(props) {
  //We will use react hooks for toggling the menu

  console.log("asd");
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  const showSideMenu = () => {
    isSideMenuOpen ? setisSideMenuOpen(false) : setisSideMenuOpen(true);
  };

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

  const onClick = (ref) => {
    props.fullpageApi.moveTo(ref);
    // ref?.current.scrollIntoView({ behavior: 'smooth', top: ref?.current.offsetTop })
  };

  return (
    <StyleRoot>
      <nav className="bg-white">
        <div className=" w-auto lg:mx-20 px-4 text-blue-600  sm:mr-4">
          <div className="flex-justify-between">
            <div className="flex justify-between">
              <button
                onClick={() => {
                  showSideMenu();
                }}
                className="lg:hidden menu-button mr-4 "
              >
                {isSideMenuOpen ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
              </button>
              <div className="hidden md:flex items-center space-x-3 cursor-pointer">
                <a
                  to=""
                  className="py-2 px-2 w-36 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300 text-center cursor-pointer"
                  onClick={() => onClick(props.mainRef)}
                >
                  أبدا الان
                </a>
              </div>

              {isSideMenuOpen ? SideMenu() : ""}
              <div className="hidden md:flex items-center space-x-1">
                <a
                  to="/"
                  style={styles.bounce}
                  className="py-4 px-2 text-blue-700 hover:text-blue-500 transition duration-300  font-semibold cursor-pointer"
                  onClick={() => onClick(props.mainRef)}
                >
                  المدونة
                </a>
                <a
                  to="/context"
                  style={styles.bounce2}
                  className="py-4 px-2 text-blue-700 font-semibold hover:text-blue-500 transition duration-300 cursor-pointer"
                  onClick={() => onClick(props.contextRef)}
                >
                  دراسات الحالة
                </a>
                <a
                  to="/about"
                  style={styles.bounce4}
                  className="py-4 px-2 text-blue-700 font-semibold hover:text-blue-500 transition duration-300 cursor-pointer"
                  onClick={() => onClick(props.aboutRef)}
                >
                  الخدمات
                </a>
                <a
                  to="/service"
                  style={styles.bounce6}
                  className="py-4 px-2 text-blue-700 font-semibold hover:text-blue-500 transition duration-300 cursor-pointer"
                  onClick={() => onClick(props.servicesRef)}
                >
                  الرئيسية
                </a>
              </div>

              <div>
                <a href="#" className="flex items-center py-4 px-2">
                  <LogoA />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </StyleRoot>
  );
}

function SideMenu() {
  return (
    <div className="fixed h-auto w-1/4 sm:w-1/4 mt-5 lg:hidden bg-gray-300 top-8  text-center">
      <ul className="menu-list flex flex-col text-sm font-semibold">
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a to="/service">الرئيسية</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a to="/about">الخدمات</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a to="/context">دراسات الحالة</a>
        </li>
        <li className="menu-list-item py-2 hover:bg-white hover:text-blue-700">
          <a to="/">المدونة</a>
        </li>
      </ul>
    </div>
  );
}
