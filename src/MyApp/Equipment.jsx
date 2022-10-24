import React from "react";
import axios, {Axios} from "axios";
import AddNewEquipment from "./AddNewEquipment";
import RemoveEquipment from "./RemoveEquipment";
import EquipmentsSettings from "../WelderEquipment/EquipmentsSettings";
import ShopEquipments from "./ShopEquioments";
import SendEquipmentUnderRepair from "./SendEquipmentUnderRepair";
import EquipmentUnderRepair from "./EquipmentUnderRepair";
import FoundEquipment from "./FoundEquipment";


const PASSWORD = 'admin';
const URL = 'http://localhost:3001/equipments';
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json'

export default class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            error: null,
            nameEquipment: null,
            nameManufacture: null,
        };
        this.props = props;
        this.visibleSettings = this.visibleSettings.bind(this);
        this.linkManufacturer = this.linkManufacturer.bind(this);
        this.changeInventoryEquipment = this.changeInventoryEquipment.bind(this);
        this.changeShopEquipment = this.changeShopEquipment.bind(this);
        this.pageReload = this.pageReload.bind(this);
        this.changeSerialEquipment = this.changeSerialEquipment.bind(this);
    };

    componentDidMount() {
            axios.get(URL)
                .then(response => {
                    response.data.sort((a, b) => a.shop - b.shop);
                    this.setState({equipment: response.data});

                })
                .catch(error => {
                    this.setState({error: error})
                    console.log('Error', error.code)
                })
    };

    visibleSettings = event => {
        if (this.state.nameEquipment === null) {
            let nameEquipment = event.nativeEvent.path[0].textContent;
            this.setState({nameEquipment: nameEquipment});
        } else {
            let divVisibleSettings = document.querySelectorAll(".visibleSettings")[0];
            divVisibleSettings.classList.toggle("hiddenSetting");
            let divHiddenSetting = document.querySelectorAll(".hiddenSetting")[1];
            divHiddenSetting.classList.toggle("hiddenSetting");
            let nameEquipment = event.nativeEvent.path[0].textContent;
            this.setState({nameEquipment: nameEquipment});
            // =======Hide Buttons Shops
            let divVisibleShopButton = document.querySelectorAll(".divVisibleShopButton")[0];
            divVisibleShopButton.classList.toggle("hiddenSetting")
            // =======
        }
    };

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
                const URLPanasonic = ' https://www.directindustry.com.ru/prod/panasonic-robot-welding-system-solutions/product-29315-116058.html';
                this.setState({linkManufacturer: URLPanasonic});
                break;

            default:
                this.setState({linkManufacturer: 'No'});
        };
    };

    render() {
        if (this.state.error !== null) {
            return (
                <div>
                    <h4>
                        Error message: {this.state.error.message}
                    </h4>
                    <h5>
                        Page {this.state.error.response.statusText}, Error {this.state.error.response.status}
                    </h5>
                </div>
            )
        }
        return (
            <div>
                <div className="visibleSettings">
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
                                <a href='#endTable'>В конец страницы &#8595;</a>
                            </th>
                            <th>
                                Ремонт апарата
                            </th>
                            <th className='id'>
                                Id
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.equipment.map((equipments, index) => {
                                if(equipments.repair === false) {
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
                                            <RemoveEquipment/>
                                            <td>
                                                <SendEquipmentUnderRepair/>
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
                            <div id='endTable'>
                                Конец таблицы со сварочным оборудованием!
                                <h5>
                                    Общее колличество сварочного оборудования = <span className='numberOfEquipments'>{this.state.equipment.length}</span> шт.
                                </h5>
                            </div>
                        </h4>
                        <div>
                            <FoundEquipment />
                        </div>
                        <div>
                            <EquipmentUnderRepair />
                        </div>
                    </div>
                    <AddNewEquipment/>
                </div>
                <EquipmentsSettings choise={this.state.nameEquipment}/>
                <ShopEquipments />
                <div>
                    <a href='#beginTable'>
                        В верх страницы! &#8593;
                    </a>
                </div>
            </div>
        )
    }
}