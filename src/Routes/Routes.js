import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AhorroLargoPlazo from "../Pages/AhorroLargoPlazo/AhorroLargoPlazo";
import App from "../Pages/App/App";

function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}></Route>
                    <Route exact path="/ahorro-largo-plazo" component={AhorroLargoPlazo}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;