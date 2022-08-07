import React from "react";
import axios, {Axios} from "axios";
import AddNewEquipment from "./AddNewEquipment";
import RemoveEquipment from "./RemoveEquipment";
import EquipmentsSettings from "../WelderEquipment/EquipmentsSettings";

const PASSWORD = 'admin';
const URL = 'http://localhost:3001/equipments';
// const URL = 'https://kazimir84.github.io/Server_db'

export default class Equipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            error: null,
            nameEquipment: null,
            nameManufacture: null
        };
        this.visibleSettings = this.visibleSettings.bind(this);
        this.props = props;
        this.linkManufacturer = this.linkManufacturer.bind(this);
        this.changeInventoryEquipment = this.changeInventoryEquipment.bind(this);
        this.changeShopEquipment = this.changeShopEquipment.bind(this);
        this.pageReload = this.pageReload.bind(this);
        this.changeSerialEquipment = this.changeSerialEquipment.bind(this);
    };

    componentDidMount() {
        axios.get(URL)
            .then(response => {
                this.setState({equipment: response.data})
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
        }
    };

    pageReload() {
        document.location.reload();
    };

    changeInventoryEquipment = event => {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].children[1].textContent);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменение Инвентарного Номера', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.inventory = newValue;
                const URLPUT = `http://localhost:3000/equipments/${target.id.toString()}`;
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
            let id = Number(event.nativeEvent.path[2].children[1].textContent);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменить номер цеха', oldValue);
                if (newValue !== null) {
                    let target = this.state.equipment.find((index => index.id === id));
                    target.shop = newValue;
                    const URLPUT = `http://localhost:3000/equipments/${target.id.toString()}`;
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
            let id = Number(event.nativeEvent.path[2].children[1].textContent);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('Изменить Серийный номер аппарата', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.serial = newValue;
                const URLPUT = `http://localhost:3000/equipments/${target.id.toString()}`
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

            default:
                this.setState({linkManufacturer: 'No'});
        }
    }

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

                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.equipment.map(equipments => {
                                return (
                                    <tr>
                                        <td>
                                            <span onClick={this.changeShopEquipment}
                                                  className='spanLink'>{equipments.shop}</span>
                                        </td>
                                        <td>
                                            {equipments.id}
                                        </td>
                                        <td>
                                            <a onClick={this.visibleSettings} target='_blank'
                                               rel="noopener noreferrer">{equipments.model}</a>
                                        </td>
                                        <td>
                                            <span onClick={this.changeInventoryEquipment}
                                                  className='spanLink'>{equipments.inventory}</span>
                                        </td>
                                        <td>
                                            <span onClick={this.changeSerialEquipment}
                                                  className='spanLink'>{equipments.serial}</span>
                                        </td>
                                        <td>
                                            <a onClick={this.linkManufacturer}
                                               href={this.state.linkManufacturer}>{equipments.manufacturer}</a>
                                        </td>
                                        <RemoveEquipment/>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                        <tfoot>
                        <h4>
                            <div>
                                End of Table
                                <h5>
                                    Общее колличество сварочного оборудования = {this.state.equipment.length} шт.
                                </h5>
                            </div>
                        </h4>
                        </tfoot>
                    </table>
                    <AddNewEquipment/>
                </div>
                <EquipmentsSettings choise={this.state.nameEquipment}/>
            </div>
        )
    }
}