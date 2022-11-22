import logo from './logo.svg';
import './App.css';
import MyApp from "./MyApp/MyApp";
import HistoryOfRepairEquipments from "./MyApp/HistoryOfRepairEquipments";
import DeletedEquipments from "./MyApp/DeletedEquipments";
import EquipmentUnderRepair from './MyApp/EquipmentUnderRepair';
// ==============
import {BrowserRouter, Switch, Route, Link, NavLink} from "react-router-dom";
import Shop_1 from "./MyApp/Shop_1";
import Shop_2 from "./MyApp/Shop_2";
import Shop_3 from "./MyApp/Shop_3";
import Shop_5 from "./MyApp/Shop_5";
import Shop_9 from "./MyApp/Shop_9";
import Shop_10 from "./MyApp/Shop_10";
import JASIC_TIG_315P_TIG_315Р_Блок_охолодження_WCN_370B from './WelderEquipment/JASIC_TIG_315P_TIG_315Р_Блок_охолодження_WCN_370B';
import BURAN_PDG_315 from './WelderEquipment/BURAN_PDG_315';
import PST250 from './WelderEquipment/PST-250';
import Origio_MIG_C340_Pro from './WelderEquipment/Origio_MIG_C340_Pro';
import CNCPlasmaRadian1500 from './WelderEquipment/CNCPlasmaRadian1500';
import CNCPlasmaRadian2000 from './WelderEquipment/CNCPlasmaRadian2000';
import SSVA160 from './WelderEquipment/SSVA-160-2';
import JasicMig500 from "./WelderEquipment/JASIC_MIG_500";
import MEGMEET_Ehave_CM350 from './WelderEquipment/MEGMEET_Ehave_CM350';
import Energy_PDGU_350 from './WelderEquipment/ENERGY_PDGU_350';
import VD306 from './WelderEquipment/VD306';
import PST161 from './WelderEquipment/PST-161';
import Gackl33h from './WelderEquipment/Gackl33h';
import EnergyBuran315 from './WelderEquipment/ENERGY_PDG_315';
import JASIC_MIG_315F from './WelderEquipment/JASIC_MIG_315F';
import MEGMEET_Ehave_CM500 from './WelderEquipment/MEGMEET_Ehave_CM500';
import Digi_TIG_320P_Блок_охолодження_WC_10 from './WelderEquipment/Digi_TIG_320P_Блок_охолодження_WC_10';
import DEX_PM3000 from './WelderEquipment/DEX_PM3000';
import SSVA_180_Р from './WelderEquipment/SSVA_180-Р';
import ESAB_Aristo_Mig_Pulse_500 from './WelderEquipment/ESAB_Aristo_Mig_Pulse_500';
import JASIC_MIG_400 from './WelderEquipment/JASIC_MIG_400';
import ENERGY_PDGU_500 from './WelderEquipment/ENERGY_PDGU_500';
import CUT_60 from './WelderEquipment/CUT-60';
import Panasonic_Robot_TA_1400 from './WelderEquipment/Panasonic_Robot_TA_1400';
import MEGMEET_Artsen_CM500 from './WelderEquipment/MEGMEET_Artsen_CM500';
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
                  <Route path="/ПСТ-251">
                      <PST250 />
                  </Route>
                  <Route path="/Origio_MIG_C340_Pro">
                      <Origio_MIG_C340_Pro />
                  </Route>
                  <Route path="/Машина_плазменной_резки_ЧПУ_Radian-1500">
                      <CNCPlasmaRadian1500 />
                  </Route>
                  <Route path="/Машина_плазменной_резки_ЧПУ_Radian-2000">
                      <CNCPlasmaRadian2000 />
                  </Route>
                  <Route path="/SSVA-160-2">
                      <SSVA160 />
                  </Route>
                  <Route path="/JASIC_MIG_500">
                      <JasicMig500 />
                  </Route>
                  <Route path="/MEGMEET_Ehave_CM350">
                      <MEGMEET_Ehave_CM350 />
                  </Route>
                  <Route path="/ВД-306">
                      <VD306 />
                  </Route>
                  <Route path="/ПСТ-161">
                      <PST161 />
                  </Route>
                  <Route path="/Аппарат_Плазменной_Резки_GACKL_33H">
                      <Gackl33h />
                  </Route>
                  <Route path="/ENERGY_ПДГ-315">
                      <EnergyBuran315 />
                  </Route>
                  <Route path="/JASIC_MIG_315F">
                      <JASIC_MIG_315F />
                  </Route>
                  <Route path="/Энергия_ПДГУ-350">
                      <Energy_PDGU_350 />
                  </Route>
                  <Route path="/MEGMEET_Ehave_CM500">
                      <MEGMEET_Ehave_CM500 />
                  </Route>
                  <Route path="/Digi_TIG_320P_Блок_охолодження_WC_10">
                      <Digi_TIG_320P_Блок_охолодження_WC_10 />
                  </Route>
                  <Route path="/JASIC_TIG_315P_TIG_315Р_Блок_охолодження_WCN_370B">
                      <JASIC_TIG_315P_TIG_315Р_Блок_охолодження_WCN_370B />
                  </Route>
                  <Route path="/DEX_PM3000">
                      <DEX_PM3000 />
                  </Route>
                  <Route path="/SSVA_180-Р">
                      <SSVA_180_Р />
                  </Route>
                  <Route path="/ESAB_Aristo_Mig_Pulse_500">
                      <ESAB_Aristo_Mig_Pulse_500 />
                  </Route>
                  <Route path="/JASIC_MIG_400">
                      <JASIC_MIG_400 />
                  </Route>
                  <Route path="/Энергия_ПДГУ-500">
                      <ENERGY_PDGU_500 />
                  </Route>
                  <Route path="/БУРАН_ПДГ-315">
                      <BURAN_PDG_315 />
                  </Route>
                  <Route path="/CUT-60">
                      <CUT_60 />
                  </Route>
                  <Route path="/Panasonic_Robot_Controller_TA_1400">
                      <Panasonic_Robot_TA_1400 />
                  </Route>
                  <Route path="/MEGMEET_Artsen_CM500">
                      <MEGMEET_Artsen_CM500 />
                  </Route>
              </Switch>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
