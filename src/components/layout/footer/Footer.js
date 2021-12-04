import React from 'react'
import './style.css'
function Footer() {
    return (
        <div className="footer">
            <span className="name">
            Weather forecast portal developed by - {" "} Kartick Das
            </span>
            <hr style={{ width: "90%" }} />
            <div>
               Codecloudes© 2021. All rights reserved.
            </div>
    </div>
    )
}

export default Footer
