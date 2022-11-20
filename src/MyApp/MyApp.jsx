import React from "react";
import {Axios} from "axios";
import Equipment from "./Equipment";
import MyCSS from "./MyCSS.css"
import DateLocal from "./DateLocal";
// ==============
import {NavLink} from 'react-router-dom';
// ============

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(event) {
        let getNum = function() {return Math.floor(Math.random() * 256)};
        setInterval(function() {
            event.target.style.color = 'rgb(' + getNum() + ',' + getNum() + ',' + getNum() + ')';
        }, 1000);
    }

    render() {
        const activeStyle = {color: 'red'};
        return (
            <div>
                <nav className='navLink'>
                    <NavLink exact to="/" activeStyle={activeStyle}>Домашняя страница</NavLink>
                    <NavLink to="/repair" activeStyle={activeStyle}>Сварочное оборудование в ремонте</NavLink>
                    <NavLink to="/history" activeStyle={activeStyle}>История ремонта сварочного оборудования</NavLink>
                    <a href="https://altep.ua/">Сайт компании ALTEP</a>
                </nav>
                <div className="dropdown">
                    <button className="dropbtn">Цех</button>
                    <div className="dropdown-content">
                        <NavLink exact to="/" activeStyle={activeStyle}>Домашняя страница</NavLink>
                        <NavLink to="/shop1" activeStyle={activeStyle}>Цех №1</NavLink>
                        <NavLink to="/shop2" activeStyle={activeStyle}>Цех №2</NavLink>
                        <NavLink to="/shop3" activeStyle={activeStyle}>Цех №3</NavLink>
                        <NavLink to="/shop5" activeStyle={activeStyle}>Цех №5</NavLink>
                        <NavLink to="/shop9" activeStyle={activeStyle}>Цех №9</NavLink>
                        <NavLink to="/shop10" activeStyle={activeStyle}>Цех №10</NavLink>
                        <NavLink to="/deletedEquipments" activeStyle={activeStyle}>Списанное Оборудование</NavLink>
                    </div>
                </div>
                <h1 className='h1_MyApp_WelderEquipmentALTEP' id='beginTable'>
                    Сварочное оборудование компании <span className='altep' onClick={this.changeColor} title='Нажми на ALTEP!'>ALTEP</span>
                </h1>
                <div>
                    <Equipment />
                    <DateLocal />
                </div>
            </div>
        )
    }
}