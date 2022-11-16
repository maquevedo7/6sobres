import React from "react";
//import "./Menu.scss";
import { GrDocumentStore as Docs } from "react-icons/gr";
import { GrLock as Saving } from "react-icons/gr";
import { GrFavorite as Donate } from "react-icons/gr";
import { GrCertificate as Education } from "react-icons/gr";
import { GrLineChart as Free } from "react-icons/gr";
import { GrShop as Bills } from "react-icons/gr";
import { GrGamepad as Game } from "react-icons/gr";



function Menu({ menuOpen, setmenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
            <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">
                        <Docs className="icon" /> Intro
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#intro">
                        <Saving className="icon" /> Ahorro a largo plazo
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#skills">
                        <Donate className="icon" /> Donaciones
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#portfolio">
                        <Education className="icon" /> Educación
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="../FinanzasLibres">
                        <Free className="icon" /> Finanzas libres
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">
                        <Bills className="icon" /> Gastos
                    </a>
                </li>
                <li onClick={() => setmenuOpen(false)}>
                    <a href="#contact">
                        <Game className="icon" /> Ocio
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;