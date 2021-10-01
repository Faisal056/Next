import React from "react"
import PropTypes from "prop-types";

const LogoFB= React.memo( ()=>{
    return(
        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6641 0.199219C7 0.199219 0.789062 6.41406 0.789062 14.0742C0.789062 21.0312 5.91406 26.7773 12.5898 27.7812V17.7539H9.15625V14.1055H12.5898V11.6797C12.5898 7.66016 14.5469 5.89844 17.8867 5.89844C19.4844 5.89844 20.332 6.01563 20.7344 6.07031V9.25391H18.4531C17.0391 9.25391 16.543 10.5977 16.543 12.1133V14.1055H20.6953L20.1328 17.7539H16.543V27.8086C23.3125 26.8906 28.5391 21.1016 28.5391 14.0742C28.5391 6.41406 22.3281 0.199219 14.6641 0.199219Z" fill="#22DBDE"/>
        </svg>
        
        
    )
})
    LogoFB.displayName = "";
LogoFB.propTypes = {
  fill: PropTypes.string,
}

export default LogoFB;