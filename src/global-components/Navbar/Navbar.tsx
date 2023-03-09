import './navbar.scss'
import React, {useState} from "react";
import './navbar.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

export const Navbar: React.FC = () => {

    const [isHamburgerActive,setHamburgerState] = useState<boolean>(false)
    const [isLoginClick,setLoginClick] = useState<boolean>(false)
    const [isRegisterClick,setRegisterClick] = useState<boolean>(false)
    function logIn():void {
        setLoginClick(true)
        setTimeout(() => setLoginClick(false),100)
        console.log('login')
    }
    function register():void {
        setRegisterClick(true)
        setTimeout(() => setRegisterClick(false),100)
        console.log('register')
    }

    return (
            <div id="navbar-top">
                <div className={"hamburger-menu " + (isHamburgerActive? "active" : "")} onClick={() => setHamburgerState(!isHamburgerActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span>reddit</span>
                <div className="search-container">
                    <FontAwesomeIcon className={"search-icon"} icon={faMagnifyingGlass}/>
                    <input type="text" placeholder={'Search'}></input>
                </div>
                <div className="buttons-container">
                    <button id={'login-btn'} className={isLoginClick? 'clicked' : ''} onClick={() => logIn()}>Log in</button>
                    <button id={'register-btn'} className={isRegisterClick? 'clicked' : ''} onClick={() => register()}>Register</button>
                </div>
            </div>
    )
}