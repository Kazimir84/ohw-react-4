import React from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import RemoveEquipment from "./RemoveEquipment";
import DateLocal from "./DateLocal";

const URL_DELETED = 'http://localhost:3001/deletedEquipments';

export default class DeletedEquipments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedEquipment:[],
            error: null,
        }
    }

    componentDidMount() {
        axios.get(URL_DELETED)
            .then(response => {
                this.setState({deletedEquipment: response.data});
            })
            .catch(error => {
                this.setState({error: error})
                console.log('Error', error.code)
            })
    }

    render() {
        const activeStyle = {color: 'red'};
        return (
            <div className='delletedEquipments'>
                <div className='dropList'>
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
                    <div>
                        <p className='styleShopPage'>Списанное оборудование {this.state.selectedShop}</p>
                        <table>
                            <thead>
                            <tr>
                                <th>
                                    № п/п
                                </th>
                                <th>
                                    Номер Цеха
                                </th>
                                <th>
                                    Модель апарата
                                </th>
                                <th>
                                    ИНВ №
                                </th>
                                <th>
                                    Заводской №
                                </th>
                                <th>
                                    Производитель
                                </th>
                                <th>
                                    Дата ввода в эксплуатацию
                                </th>
                                <th>
                                    Дата списания
                                </th>
                                <th>
                                    Описание причины списания
                                </th>
                                <th>
                                    <a href='#endShopTable'>В конец страницы &#8595;</a>
                                </th>
                                <th className='id'>
                                    Id
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.deletedEquipment.map((equipments, index) => {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td><span className='spanLink' title='Hомер Цеха'>
                                                {equipments.shop}
                                            </span>
                                            </td>
                                            <td>
                                                {equipments.model}
                                            </td>
                                            <td><span className='spanLink' title='Инвентарный номер'>
                                                {equipments.inventory}
                                            </span>
                                            </td>
                                            <td><span className='spanLink' title='Серийный номер'>
                                                {equipments.serial}
                                            </span>
                                            </td>
                                            <td>
                                                {equipments.manufacturer}
                                            </td>
                                            <td>
                                                {equipments.date}
                                            </td>
                                            <td>
                                                {equipments.dateDeleted}
                                            </td>
                                            <td>
                                                {equipments.faultDiscription}
                                            </td>
                                            <td>
                                                &#9851;
                                            </td>
                                            <td className='id'>
                                                {equipments.id}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <div>
                            <h4>
                                <div id='endShopTable'>
                                    Конец таблицы!
                                    <h5>
                                        Общее колличество сварочного оборудования
                                        = <span className='numberOfEquipments'>{this.state.deletedEquipment.length}</span> шт.
                                    </h5>
                                </div>
                            </h4>
                        </div>
                    </div>
                    <DateLocal />
                </div>
            </div>
        )
    }
}