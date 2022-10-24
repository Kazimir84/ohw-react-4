import React from "react";
import {Axios} from "axios";
import Equipment from "./Equipment";
import MyCSS from "./MyCSS.css"
import DateLocal from "./DateLocal";

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
        return (
            <div>
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