import logo from './logo.svg';
import './App.css';
import MyApp from "./MyApp/MyApp";
import HistoryOfRepairEquipments from "./MyApp/HistoryOfRepairEquipments";

// ==============
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
// import React from "@types/react";
// ============
function History() {
    return (
        <div>
            <nav className='navLink'>
                <NavLink exact to="/" activeClassName="active">Домашняя страница</NavLink>
                <NavLink to="/history" activeClassName="active">История ремонта сварочного оборудования</NavLink>
                <a href="https://altep.ua/">Сайт компании ALTEP</a>
            </nav>
            <h1>История ремонта сварочного оборудования компании ALTEP</h1>
            <HistoryOfRepairEquipments />
        </div>
    );
}
function Home() {
    return (
        <div>
            <MyApp />
        </div>
    );
}
// ==============

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Edit <code>src/App.js</code> and save to reload.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Learn React*/}
        {/*</a>*/}

        {/*<MyApp />*/}

          <BrowserRouter>
              <Switch>
                  <Route path="/history">
                      <History />
                  </Route>
                  <Route exact path="/">
                      <Home />
                  </Route>
              </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
