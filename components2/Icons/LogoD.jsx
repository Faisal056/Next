import React from "react"
import PropTypes from "prop-types";

const LogoD= React.memo( ()=>{
    return(
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.49243 0.933563H36.9924C39.4768 0.933563 41.4924 2.94919 41.4924 5.43356V36.9336C41.4924 39.4218 39.4768 41.4336 36.9924 41.4336H5.49243C3.00415 41.4336 0.992432 39.4218 0.992432 36.9336V5.43356C0.992432 2.94919 3.00415 0.933563 5.49243 0.933563ZM27.9924 32.4336H32.4924V16.6836H27.9924V32.4336ZM18.9924 32.4336H23.4924V9.93356H18.9924V32.4336ZM9.99243 32.4336H14.4924V23.4336H9.99243V32.4336Z" fill="#1157F5"/>
        </svg>
    )
})
 LogoD.displayName = "";
 LogoD.propTypes = {
  fill: PropTypes.string,
}

export default LogoD;