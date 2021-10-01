import React from "react"
import PropTypes from "prop-types";

const LogoE= React.memo( ()=>{
    return(
        <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.4258 0.816376L1.68359 39.5586" stroke="#024BD6" strokeWidth="1.59984" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.68359 13.7304H27.5117V39.5586H1.68359V13.7304Z" stroke="#024BD6" strokeWidth="1.59984" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.5977 0.816376H40.4219V26.6445H14.5977V0.816376Z" stroke="#024BD6" strokeWidth="1.59984" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.17578 6.29294H34.9609V34.0781H7.17578V6.29294Z" stroke="#024BD6" strokeWidth="1.59984" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
})
 LogoE.displayName = "";
 LogoE.propTypes = {
  fill: PropTypes.string,
}

export default LogoE;