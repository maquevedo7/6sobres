import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import AhorroLargoPlazo from "../AhorroLargoPlazo/AhorroLargoPlazo";
import Donaciones from "../../components/Donaciones/Donaciones";
import Educacion from "../../components/Educacion/Educacion";
import FinanzasLibres from "../../components/FinanzasLibres/FinanzasLibres";
import Gastos from "../../components/Gastos/Gastos";
import Ocio from "../../components/Ocio/Ocio";
import Intro from "../../components/Intro/Intro";
//import "./App.css";
import { useState } from "react";

function App() {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
        <div className="app">
             <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
             <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
            <div className="sections">
                <Intro />
                <AhorroLargoPlazo />
                <Donaciones />
                <Educacion />
                <FinanzasLibres />
                <Gastos />
                <Ocio />
            </div>
        </div>
    );
}

export default App;