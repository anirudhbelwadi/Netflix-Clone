import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false)
    const history = useHistory();
    const transitionNavbar = () => {
        if (window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);
        return () => window.removeEventListener('scroll',transitionNavbar)
    }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                onClick={() => history.push("/")}
                className="nav__logo"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="Netflix Logo" />
                <img 
                className="nav__avatar" 
                onClick={() => history.push("/profile")}
                src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" 
                alt="Netflix Avatar" />
            </div>
        </div>
    )
}

export default Nav
