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
                <div>
                    <Equipment />
                </div>
            </div>
        )
    }
}