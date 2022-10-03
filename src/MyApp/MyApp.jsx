import React from "react";
import {Axios} from "axios";
import Equipment from "./Equipment";
import MyCSS from "./MyCSS.css"

export default class MyApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    Сварочное оборудование компании ALTEP
                </h1>
                <div>
                    <Equipment />
                </div>
            </div>
        )
    }
}