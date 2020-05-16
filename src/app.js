import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./home";
import Zaak from "./zaak";
import Situatie from "./situatie";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Demonstratie API strategie</h1>
                    <ul className="header">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/zaak">Zaak</NavLink></li>
                        <li><NavLink to="/situatie">Situatie</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/zaak" component={Zaak} />
                        <Route path="/situatie" component={Situatie} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;