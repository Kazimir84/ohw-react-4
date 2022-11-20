import React from "react";
import axios, {Axios} from "axios";
import RemoveEquipmentFromRepair from "./RemoveEquipmentFromRepair";
import MyCSS from "./MyCSS.css"
import {Link, NavLink} from "react-router-dom";

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
        this.changeDiscription = this.changeDiscription.bind(this);
        this.changeServiceCenterContacts = this.changeServiceCenterContacts.bind(this);
        this.changeRepairCost = this.changeRepairCost.bind(this);
        this.changeRepairTime = this.changeRepairTime.bind(this);
        this.changeDateRepair = this.changeDateRepair.bind(this)
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

    changeDiscription = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[12].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение описанной неисправности', oldValue);
            if (newValue !== null) {
                let target = this.state.repairEquipment.find((index => index.id === id));
                target.breakdownDescription = newValue;
                const URLPUT = `http://localhost:3001/repairEquipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Неисправность изменена c ${oldValue} на ${newValue} успешно!`);
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
    }

    changeServiceCenterContacts = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[12].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение данные сервисного центра', oldValue);
            if (newValue !== null) {
                let target = this.state.repairEquipment.find((index => index.id === id));
                target.serviceCenterContacts = newValue;
                const URLPUT = `http://localhost:3001/repairEquipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Контактные данные сервисного центра изменены c ${oldValue} на ${newValue} успешно!`);
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
    }

    changeRepairCost = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[12].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение данные стоимости ремонта', oldValue);
            if (newValue !== null) {
                let target = this.state.repairEquipment.find((index => index.id === id));
                target.repairCost = newValue;
                const URLPUT = `http://localhost:3001/repairEquipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Стоимость ремонта изменена c ${oldValue} на ${newValue} успешно!`);
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
    }

    changeRepairTime = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[12].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение данные стоимости ремонта', oldValue);
            if (newValue !== null) {
                let target = this.state.repairEquipment.find((index => index.id === id));
                target.repairTime = newValue;
                const URLPUT = `http://localhost:3001/repairEquipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Срок ремонта изменен c ${oldValue} на ${newValue} успешно!`);
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
    }

    changeDateRepair = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[12].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение даты начала ремонта', oldValue);
            if (newValue !== null) {
                let target = this.state.repairEquipment.find((index => index.id === id));
                target.dateRepair = newValue;
                const URLPUT = `http://localhost:3001/repairEquipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Дата начала ремонта изменена c ${oldValue} на ${newValue} успешно!`);
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
    }

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
        const activeStyle = {color: 'red'};
        return (
            <div className='EquipmentUnderRepair'>
                <nav className='navLink'>
                    <NavLink exact to="/" activeClassName="active">Домашняя страница</NavLink>
                    <NavLink to="/repair" activeClassName="active">Сварочное оборудование которое в ремонте</NavLink>
                    <NavLink to="/history" activeClassName="active">История ремонта сварочного оборудования</NavLink>
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
                <h3 className = 'h3_EquipmentUnderRepair'>
                    Оборудование которое на данный момент находится в ремонте!
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
                                            <a onClick={this.linkManufacturer}
                                               href={this.state.linkManufacturer}
                                               title={'Ссылка на сайт компании' + ' ' + '"' + equipments.manufacturer + '"'}>
                                                {equipments.manufacturer}
                                            </a>
                                        </td>
                                        <td>
                                            <a onClick={this.changeDateRepair}
                                               title='Дата когда аппарат был отправлен в ремонт. Нажмите что бы изменить данные.'>
                                                {equipments.dateRepair}
                                            </a>
                                        </td>
                                        <td>
                                            <a  onClick={this.changeDiscription}
                                                title='Описание неисправности выявленное во время работы сварочного оборудования. Нажмите что бы изменить данные.'>
                                                {equipments.breakdownDescription}
                                            </a>

                                        </td>
                                        <td>
                                            <a onClick={this.changeServiceCenterContacts}
                                               title='Контактные данные сервисного центра или лица осуществляющего ремонт сварочного аппарата. Нажмите что бы изменить данные'>
                                                {equipments.serviceCenterContacts}
                                            </a>

                                        </td>
                                        <td>
                                            <a onClick={this.changeRepairCost}
                                               title='Ориентировочная стоимость ремонта сварочного аппарата. Нажмите что бы изменить данные.'>
                                                {equipments.repairCost}
                                            </a>
                                        </td>
                                        <td>
                                            <a onClick={this.changeRepairTime}
                                               title='Ориентировочное колличество дней для ремонта сварочного аппарата. Нажмите что бы изменить данные.'>
                                                {equipments.repairTime}
                                            </a>
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
                <div>
                    <Link
                        to="/history"
                        title="Нажмите для просмотра всей истории ремонтов сварочного оборудования.">
                        Посмотреть истории ремонтов сварочного оборудования!
                    </Link>
                </div>
            </div>
        )
    }
}
