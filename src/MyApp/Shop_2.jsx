import React from "react";
import axios, {Axios} from "axios";
import RemoveEquipment from "./RemoveEquipment";
import EquipmentsSettings from "../WelderEquipment/EquipmentsSettings";
import {NavLink} from "react-router-dom";
import DateLocal from "./DateLocal";

const URL = 'http://localhost:3001/equipments';
const PASSWORD = 'admin';

export default class Shop_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment:[],
            shopEquipment: [],
            selectedShop: 2,
            error: null,
            nameEquipment: null,
            equipmentNameLink: null,
            shopEquipmentRepair:[]
        }
        this.props = props;
        this.changeInventoryEquipment = this.changeInventoryEquipment.bind(this);
        this.changeShopEquipment = this.changeShopEquipment.bind(this);
        this.changeSerialEquipment = this.changeSerialEquipment.bind(this);
        this.linkManufacturer = this.linkManufacturer.bind(this);
        this.pageReload = this.pageReload.bind(this);
        this.linkSettingsEquipments = this.linkSettingsEquipments.bind(this)
    };

    componentDidMount() {
        axios.get(URL)
            .then(response => {
                this.setState({equipment: response.data});
            })
        axios.get(URL)
            .then(response => {
                let shopEquipment = response.data.filter((equipment) => equipment.shop === this.state.selectedShop);
                this.setState({shopEquipment: shopEquipment});
            })
            .catch(error => {
                this.setState({error: error})
                console.log('Error', error.code)
            })
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        axios.get(URL)
            .then(response => {
                let shopEquipmentRepair = this.state.shopEquipment.filter(equipments => equipments.repair === true);
                this.setState({shopEquipmentRepair: shopEquipmentRepair});
            })
    }

    pageReload() {
        document.location.reload();
    };

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

    changeShopEquipment = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменить номер цеха', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.shop = newValue;
                const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Номер Цеха изменен c ${oldValue} на ${newValue} успешно!`);
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

    changeSerialEquipment = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменить Серийный номер аппарата', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.serial = newValue;
                const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`Серийный номер аппарата изменен c ${oldValue} на ${newValue} успешно!`);
                        this.pageReload();
                    })
                    .catch(e => {
                        this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack});
                        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
                    })
            }
        } else {
            alert('У Вас нет прав для этого действия!');
        };
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
                const URLPanasonic = 'https://www.directindustry.com.ru/prod/panasonic-robot-welding-system-solutions/product-29315-116058.html';
                this.setState({linkManufacturer: URLPanasonic});
                break;

            default:
                this.setState({linkManufacturer: 'No'});
        };
    };

    linkSettingsEquipments = event => {
        if (event.nativeEvent.path[0].innerText === 'ESAB Aristo Mig Pulse COOL ESAB (БВО) AristoR Feed 3004 Пульт AristoR U82 Plus' || event.nativeEvent.path[0].innerText === 'ESAB Aristo Mig Pulse ESAB Aristo Mig Pulse COOL ESAB (БВО) AristoR Feed 3004 Пульт AristoR U82 Plus') {
            let equipmentName = 'ESAB_Aristo_Mig_Pulse_500';
            this.setState({equipmentNameLink:equipmentName});
        } else if (event.nativeEvent.path[0].innerText === 'Робот для сварки Panasonic Robot Controller TA 1400 WG ||| E YA-1WAR61E00 (OM1303030E)') {
            let equipmentName = 'Panasonic_Robot_Controller_TA_1400';
            this.setState({equipmentNameLink:equipmentName});
        }
        else {
            let equipmentName = event.nativeEvent.path[0].innerText.split(' ').join('_');
            this.setState({equipmentNameLink:equipmentName});
        }
    }

    render() {
        const activeStyle = {color: 'red'};
        return (
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
                    <p className='styleShopPage'>Оборудование цеха № {this.state.selectedShop}</p>
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
                                <a href='#endShopTable'>В конец страницы &#8595;</a>
                            </th>
                            <th className='id'>
                                Id
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.shopEquipment.map((equipments, index) => {
                                if(equipments.repair === false) {
                                    return (
                                        <tr>
                                            <td>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <span onClick={this.changeShopEquipment}
                                                      className='spanLink'
                                                      title='Кликни что бы изменить номер Цеха'>
                                                    {equipments.shop}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.linkSettingsEquipments}
                                                   href={this.state.equipmentNameLink}
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
                                            <RemoveEquipment/>
                                            <td className='hiddenTD'>

                                            </td>
                                            <td className='id'>
                                                {equipments.id}
                                            </td>
                                        </tr>
                                    )
                                };
                                if(equipments.repair === true) {
                                    return (
                                        <tr className = 'inRepair'>
                                            <td title={'Порядковый номер'}>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <span onClick={this.changeShopEquipment}
                                                      className='spanLink'
                                                      title='Кликни что бы изменить номер Цеха'>
                                                    {equipments.shop}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.linkSettingsEquipments}
                                                   href={this.state.equipmentNameLink}
                                                   className='shopEquipmentTdTextStyle'
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
                                                   className='shopEquipmentTdTextStyle'
                                                   href={this.state.linkManufacturer}
                                                   title={'Ссылка на сайт компании' + ' ' + '"' + equipments.manufacturer + '"'}>
                                                    {equipments.manufacturer}
                                                </a>
                                            </td>
                                            <RemoveEquipment/>
                                            <td>
                                                <button className='disabledButtonText sendRepair'>На данный момент апарат находиться в ремонте!</button>
                                            </td>
                                            <td className='id'>
                                                {equipments.id}
                                            </td>
                                        </tr>
                                    )
                                }
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
                                    = <span className='numberOfEquipments'>
                                        {
                                            this.state.shopEquipment.length
                                        }
                                    </span> шт.
                                </h5>
                                <h5>
                                    Общее колличество сварочного оборудования в ремонте
                                    = <span className='numberOfEquipments'>
                                        {
                                            this.state.shopEquipmentRepair.length
                                        }
                                    </span> шт.
                                </h5>
                            </div>
                        </h4>
                    </div>
                </div>
                <DateLocal />
            </div>
        )
    }
}