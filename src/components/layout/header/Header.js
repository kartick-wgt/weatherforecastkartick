import React from 'react'
import './style.css'
 const Header = () => {
    return (
        <div className="nav">
        <div className="icon">
           Weather forecast portal
        </div> 
        <img
          src="data:image/png;base64,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"
          height="80%"
          alt="logo"
        />
      </div>
    )
}

export default Header