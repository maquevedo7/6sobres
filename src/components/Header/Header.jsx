import React from "react";
//import "./Header.scss";
//import { FaBeer } from "react-icons/fa";

function Header({ menuOpen, setmenuOpen }) {
    return (
        <div className={"header " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="right">
                    <div
                        className="burger"
                        onClick={() => setmenuOpen(!menuOpen)}
                    >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;