import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DateLocal from "./DateLocal";
import MyCSS from "./MyCSS.css"

const URL_HISTORY_REPAIR = "http://localhost:3001/historyOfRepairEquipments";

export default class HistoryOfRepairEquipments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [],
            error: null,
        }
    }
    componentDidMount() {
        axios.get(URL_HISTORY_REPAIR)
            .then(response => {
                response.data.sort((a,b) => a.shop - b.shop)
                this.setState({history: response.data})
            })
            .catch(error => {
                this.setState({error: error})
                console.log('History Error', error.code);
            })
    }

    render() {
        return(
        <div className='historyOfEquipmentUnderRepair'>
            <h3 className = 'h3_HistoryOfEquipmentUnderRepair'>
                История ремонта сварочного оборудования компании ALTEP
            </h3>
            <div>
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
                            Дата отправки в ремонт
                        </th>
                        <th>
                            Дата возврата с ремонта
                        </th>
                        <th>
                            Неисправность
                        </th>
                        <th>
                            Контакты сервисного центра
                        </th>
                        <th>
                            Стоимость ремонта, грн
                        </th>
                        <th>
                            Срок ремонта, дней
                        </th>
                        <th>
                            <a href='#endTable'>В конец страницы &#8595;</a>
                        </th>
                        <th className='id'>
                            Id
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.history.map((equipments, index) => {
                            return (
                                <tr>
                                    <td title={'Порядковый номер'}>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <span
                                            className='spanLink'
                                            title='Hомер Цеха'>
                                            {equipments.shop}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            title={'Модель Сварочного аппарата'}>
                                            {equipments.model}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className='spanLink'
                                            title='Инвентарный номер'>
                                            {equipments.inventory}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            className='spanLink'
                                            title='Серийный номер'>
                                            {equipments.serial}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            title='Kомпания'>
                                            {equipments.manufacturer}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                           title='Дата отправки в ремонт сварочного аппарата.'>
                                            {equipments.dateRepair}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            title='Дата возврата с ремонта сварочного аппарата.'>
                                            {equipments.date}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                            title='Описание неисправности выявленное во время работы сварочного оборудования.'>
                                            {equipments.breakdownDescription}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                           title='Контактные данные сервисного центра или лица осуществляющего ремонт сварочного аппарата.'>
                                            {equipments.serviceCenterContacts}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                           title='Стоимость ремонта сварочного аппарата.'>
                                            {equipments.repairCost}
                                        </span>
                                    </td>
                                    <td>
                                        <span
                                           title='Колличество дней ремонта сварочного аппарата.'>
                                            {equipments.repairTime}
                                        </span>
                                    </td>
                                    <td>
                                        {/*<RemoveEquipmentFromRepair />*/}
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
            </div>
            <div>
                <h4>
                    <div id='endTable'>
                        Конец таблицы с историей ремонта сварочного оборудования!
                        <h5>
                            Общее колличество отремонтированного сварочного оборудования = <span className='numberOfEquipments'>{this.state.history.length}</span> шт.
                        </h5>
                    </div>
                </h4>
            </div>
            <div>
                <Link
                    to="/"
                    title="Нажмите для возврата на главную страницу!">
                    На главную страницу.
                </Link>
            </div>
            <div>
                <DateLocal />
            </div>
        </div>
        )
    }
}