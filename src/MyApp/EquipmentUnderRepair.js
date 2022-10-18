import React from "react";
import axios, {Axios} from "axios";
import RemoveEquipment from "./RemoveEquipment";
import RemoveEquipmentFromRepair from "./RemoveEquipmentFromRepair";

const URL_REPAIR = "http://localhost:3001/repairEquipments"

export default class EquipmentUnderRepair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            repairEquipment: [],
            error: null
        }
        this.props = props;

    }

    componentDidMount() {
        axios.get(URL_REPAIR)
            .then(response => {
                response.data.sort((a, b) => a.shop - b.shop);
                this.setState({repairEquipment: response.data});
            })
            .catch(error => {
                this.setState({error: error})
                console.log('Error', error.code)
            })
    }


    render() {
        return (
            <div className='EquipmentUnderRepair'>
                <h3 className = 'h3_EquipmentUnderRepair'>
                    Оборудование которое на данный момент находится в ремонте!
                </h3>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>
                                Номер Цеха
                            </th>
                            <th>
                                № п/п
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
                            this.state.repairEquipment.map((equipments, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <span onClick={this.changeShopEquipment}
                                                  className='spanLink'
                                                  title='Кликни что бы изменить номер Цеха'>
                                                {equipments.shop}
                                            </span>
                                        </td>
                                        <td title={'Порядковый номер'}>
                                            {index + 1}
                                        </td>
                                        <td>
                                            <a onClick={this.visibleSettings}
                                               target='_blank'
                                               rel="noopener noreferrer"
                                               title={'Кликните для продробного описания Модели Сварочного аппарата' + ' ' + '"' + equipments.model + '"'}>
                                                {equipments.model}
                                            </a>
                                        </td>
                                        <td>
                                            <span onClick={this.changeInventoryEquipment}
                                                  className='spanLink'
                                                  title='Кликни что бы изменить Инвентарный номер'>
                                                {equipments.inventory}
                                            </span>
                                        </td>
                                        <td>
                                            <span onClick={this.changeSerialEquipment}
                                                  className='spanLink'
                                                  title='Кликни что бы изменить Серийный номер'>
                                                {equipments.serial}
                                            </span>
                                        </td>
                                        <td>
                                            <a onClick={this.linkManufacturer}
                                               href={this.state.linkManufacturer}
                                               title={'Ссылка на сайт компании' + ' ' + '"' + equipments.manufacturer + '"'}>
                                                {equipments.manufacturer}
                                            </a>
                                        </td>
                                        <td>
                                            {equipments.dateRepair}
                                        </td>
                                        <td>
                                            {equipments.breakdownDescription}
                                        </td>
                                        <td>
                                            {equipments.serviceCenterContacts}
                                        </td>
                                        <td>
                                            {equipments.repairCost}
                                        </td>
                                        <td>
                                            {equipments.repairTime}
                                        </td>
                                        <td>
                                            <RemoveEquipmentFromRepair />
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
                            Конец таблицы со сварочным оборудованием которое в ремонте!
                            <h5>
                                Общее колличество сварочного оборудования в ремонте = <span className='numberOfEquipments'>{this.state.repairEquipment.length}</span> шт.
                            </h5>
                        </div>
                    </h4>
                </div>
            </div>
        )
    }
}
