import logo from './logo.svg';
import './App.css';
import MyApp from "./MyApp/MyApp";
import HistoryOfRepairEquipments from "./MyApp/HistoryOfRepairEquipments";

// ==============
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import EquipmentUnderRepair from './MyApp/EquipmentUnderRepair';
import Shop_1 from "./MyApp/Shop_1";
import Shop_2 from "./MyApp/Shop_2";
import Shop_3 from "./MyApp/Shop_3";
import Shop_5 from "./MyApp/Shop_5";
import Shop_9 from "./MyApp/Shop_9";
import Shop_10 from "./MyApp/Shop_10";
import DeletedEquipments from "./MyApp/DeletedEquipments";
// ============
function History() {
    return (
        <div>
            <nav className='navLink'>
                <NavLink exact to="/" activeClassName="active">Домашняя страница</NavLink>
                <NavLink to="/repair" activeClassName="active">Сварочное оборудование в ремонте</NavLink>
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
function Repair() {
    return (
        <div>
            <EquipmentUnderRepair/>
        </div>
    );
};
function Shop1() {
    return (
        <div>
            <Shop_1 />
        </div>
    );
};
function Shop2() {
    return (
        <div>
            <Shop_2 />
        </div>
    );
};
function Shop3() {
    return (
        <div>
            <Shop_3 />
        </div>
    );
};
function Shop5() {
    return (
        <div>
            <Shop_5 />
        </div>
    );
};
function Shop9() {
    return (
        <div>
            <Shop_9 />
        </div>
    );
};
function Shop10() {
    return (
        <div>
            <Shop_10 />
        </div>
    );
};
function Deleted() {
    return (
        <div>
            <DeletedEquipments />
        </div>
    );
};
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
                  <Route exact path="/">
                      <Home />
                  </Route>
                  <Route path="/history">
                      <History />
                  </Route>
                  <Route path="/repair">
                      <Repair />
                  </Route>
                  <Route path="/shop1">
                      <Shop1 />
                  </Route>
                  <Route path="/shop2">
                      <Shop2 />
                  </Route>
                  <Route path="/shop3">
                      <Shop3 />
                  </Route>
                  <Route path="/shop5">
                      <Shop5 />
                  </Route>
                  <Route path="/shop9">
                      <Shop9 />
                  </Route>
                  <Route path="/shop10">
                      <Shop10 />
                  </Route>
                  <Route path="/deletedEquipments">
                      <Deleted />
                  </Route>
              </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
