import React from "react";
import axios, {Axios} from "axios";
import RemoveEquipmentFromRepair from "./RemoveEquipmentFromRepair";

const URL_REPAIR = "http://localhost:3001/repairEquipments";
const PASSWORD = 'admin';

export default class EquipmentUnderRepair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            repairEquipment: [],
            error: null
        }
        this.props = props;
        this.linkManufacturer = this.linkManufacturer.bind(this);
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

    changeInventoryEquipment = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение Инвентарного Номера', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.inventory = newValue;
                const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Инвентарный Номер изменен c ${oldValue} на ${newValue} успешно!`);
                        this.pageReload();
                    })
                    .catch(e => {
                        this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack});
                        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
                    })
            }
        } else {
            alert('У Вас нет прав для этого действия!');
        }
    };

    linkManufacturer = event => {
        let linkManufacturer = event.nativeEvent.path[0].firstChild.textContent;
        switch (linkManufacturer) {
            case 'Темп-С':
                const URLTEMP = 'https://ua.bizorg.su/chernigov-rg/c396664-temps-chp';
                this.setState({linkManufacturer: URLTEMP});
                break;
            case 'ESAB':
                const URLESAB = 'https://esab.com/ua/eur_en/';
                this.setState({linkManufacturer: URLESAB});
                break;
            case 'Radian':
                const URLRADIAN = 'https://abiznes.prom.ua/p189679112-mashina-plazmennoj-rezki.html';
                this.setState({linkManufacturer: URLRADIAN});
                break;
            case 'SSVA':
                const URLSSVA_160_2 = 'https://ssva.ua/uk/';
                this.setState({linkManufacturer: URLSSVA_160_2});
                break;
            case 'JASIC':
                const URLJASIC = 'https://jasic.ua/';
                this.setState({linkManufacturer: URLJASIC});
                break;
            case 'MEGMEET':
                const URLMEGMEET = 'https://idel.com.ua/brands/megmeet/';
                this.setState({linkManufacturer: URLMEGMEET});
                break;
            case 'Jaeckle':
                const URLJaeckle = 'https://svarka-trading.com.ua/info/brands/jackle/';
                this.setState({linkManufacturer: URLJaeckle});
                break;
            case 'ЭНЕРГИЯ':
                const URLEnergy = 'https://energy-welding.com/';
                this.setState({linkManufacturer: URLEnergy});
                break;
            case 'Welding Dragon':
                const URLWelding_Dragon = 'https://weldingdragon.ua/ua/';
                this.setState({linkManufacturer: URLWelding_Dragon});
                break;
            case 'TESLA':
                const URLTesla = 'https://teslaweld.com/';
                this.setState({linkManufacturer: URLTesla});
                break;
            case 'PANASONIC':
                const URLPanasonic = ' https://www.directindustry.com.ru/prod/panasonic-robot-welding-system-solutions/product-29315-116058.html';
                this.setState({linkManufacturer: URLPanasonic});
                break;

            default:
                this.setState({linkManufacturer: 'No'});
        };
    };

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
                                            <span
                                                  className='spanLink'
                                                  title='Hомер Цеха'>
                                                {equipments.shop}
                                            </span>
                                        </td>
                                        <td title={'Порядковый номер'}>
                                            {index + 1}
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
                                            <a onClick={this.linkManufacturer}
                                               href={this.state.linkManufacturer}
                                               title={'Ссылка на сайт компании' + ' ' + '"' + equipments.manufacturer + '"'}>
                                                {equipments.manufacturer}
                                            </a>
                                        </td>
                                        <td title='Дата когда аппарат был отправлен в ремонт'>
                                            {equipments.dateRepair}
                                        </td>
                                        <td title='Описание неисправности выявленное во время работы сварочного оборудования'>
                                            {equipments.breakdownDescription}
                                        </td>
                                        <td title='Контактные данные сервисного центра или лица осуществляющего ремонт сварочного аппарата'>
                                            {equipments.serviceCenterContacts}
                                        </td>
                                        <td title='Ориентировочная стоимость ремонта сварочного аппарата'>
                                            {equipments.repairCost}
                                        </td>
                                        <td title='Ориентировочное колличество дней для ремонта сварочного аппарата'>
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
