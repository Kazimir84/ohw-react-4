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
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json';
// const URL = 'https://github.com/Kazimir84/ohw-react-4/blob/main/src/db';


// const equipment = [];

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
        //-------------------------------------
        // this.fetchEqw = this.fetchEqw.bind(this)
        //-------------------------------------
    };
    //----------------------------------------
    // componentDidMount() {
    //     this.fetchEqw();
    // }
    //
    // fetchEqw = () => {
    //     // this.setState({...this.state, isFetching: true})
    //     axios.get(URL)
    //         .then(response => {
    //             response.data.sort((a, b) => a.shop - b.shop);
    //             this.setState({equipment:response.data});
    //             console.log('equipment', equipment);
    //         })
    //         .catch(e => console.log(e));
    // }
    //----------------------------------------------


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
        let passwordEnter = prompt('?????????????? ???????????? ?????? ??????????????????????????', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('?????????????????? ???????????????????????? ????????????', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.inventory = newValue;
                const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`?????????????????????? ?????????? ?????????????? c ${oldValue} ???? ${newValue} ??????????????!`);
                        this.pageReload();
                    })
                    .catch(e => {
                        this.setState({error: '???????????? ' + e.name + ":" + e.message + "\n" + e.stack});
                        console.log('???????????? ' + e.name + ":" + e.message + "\n" + e.stack);
                    })
            }
        } else {
            alert('?? ?????? ?????? ???????? ?????? ?????????? ????????????????!');
        }
    };

    changeShopEquipment = event => {
        let passwordEnter = prompt('?????????????? ???????????? ?????? ??????????????????????????', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('???????????????? ?????????? ????????', oldValue);
                if (newValue !== null) {
                    let target = this.state.equipment.find((index => index.id === id));
                    target.shop = newValue;
                    const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                    axios.put(URLPUT, target)
                        .then(response => {
                            alert(`?????????? ???????? ?????????????? c ${oldValue} ???? ${newValue} ??????????????!`);
                            this.pageReload();
                        })
                        .catch(e => {
                            this.setState({error: '???????????? ' + e.name + ":" + e.message + "\n" + e.stack});
                            console.log('???????????? ' + e.name + ":" + e.message + "\n" + e.stack);
                        })
                }
        } else {
            alert('?? ?????? ?????? ???????? ?????? ?????????? ????????????????!');
        }
    };

    changeSerialEquipment = event => {
        let passwordEnter = prompt('?????????????? ???????????? ?????? ??????????????????????????', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            let oldValue = event.nativeEvent.path[0].textContent;
            let newValue = prompt('???????????????? ???????????????? ?????????? ????????????????', oldValue);
            if (newValue !== null) {
                let target = this.state.equipment.find((index => index.id === id));
                target.serial = newValue;
                const URLPUT = `http://localhost:3001/equipments/${target.id.toString()}`;
                axios.put(URLPUT, target)
                    .then(response => {
                        alert(`???????????????? ?????????? ???????????????? ?????????????? c ${oldValue} ???? ${newValue} ??????????????!`);
                        this.pageReload();
                    })
                    .catch(e => {
                        this.setState({error: '???????????? ' + e.name + ":" + e.message + "\n" + e.stack});
                        console.log('???????????? ' + e.name + ":" + e.message + "\n" + e.stack);
                    })
            }
        } else {
            alert('?? ?????? ?????? ???????? ?????? ?????????? ????????????????!');
        };
    };

    linkManufacturer = event => {
        let linkManufacturer = event.nativeEvent.path[0].firstChild.textContent;
        switch (linkManufacturer) {
            case '????????-??':
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
            case '??????????????':
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
                                ??? ??/??
                            </th>
                            <th>
                                ?????????? ????????
                            </th>
                            <th>
                                ???????????? ??????????????
                            </th>
                            <th>
                                ?????? ???
                            </th>
                            <th>
                                ?????????????????? ???
                            </th>
                            <th>
                                ??????????????????????????
                            </th>
                            <th>
                                <a href='#endTable'>?? ?????????? ???????????????? &#8595;</a>
                            </th>
                            <th>
                                ???????????? ??????????????
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
                                        <tr id={equipments.id + 1}>
                                            <td title={'???????????????????? ??????????'}>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <span onClick={this.changeShopEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ?????????? ????????'>
                                                    {equipments.shop}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.visibleSettings}
                                                   target='_blank'
                                                   rel="noopener noreferrer"
                                                   title={'???????????????? ?????? ?????????????????????? ???????????????? ???????????? ???????????????????? ????????????????' + ' ' + '"' + equipments.model + '"'}>
                                                    {equipments.model}
                                                </a>
                                            </td>
                                            <td>
                                                <span onClick={this.changeInventoryEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ?????????????????????? ??????????'>
                                                    {equipments.inventory}
                                                </span>
                                            </td>
                                            <td>
                                                <span onClick={this.changeSerialEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ???????????????? ??????????'>
                                                    {equipments.serial}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.linkManufacturer}
                                                   href={this.state.linkManufacturer}
                                                   title={'???????????? ???? ???????? ????????????????' + ' ' + '"' + equipments.manufacturer + '"'}>
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
                                        <tr className = 'inRepair' id={equipments.id + 1}>
                                            <td title={'???????????????????? ??????????'}>
                                                {index + 1}
                                            </td>
                                            <td>
                                                <span onClick={this.changeShopEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ?????????? ????????'>
                                                    {equipments.shop}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.visibleSettings}
                                                   className='shopEquipmentTdTextStyle'
                                                   target='_blank'
                                                   rel="noopener noreferrer"
                                                   title={'???????????????? ?????? ?????????????????????? ???????????????? ???????????? ???????????????????? ????????????????' + ' ' + '"' + equipments.model + '"'}>
                                                    {equipments.model}
                                                </a>
                                            </td>
                                            <td>
                                                <span onClick={this.changeInventoryEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ?????????????????????? ??????????'>
                                                    {equipments.inventory}
                                                </span>
                                            </td>
                                            <td>
                                                <span onClick={this.changeSerialEquipment}
                                                      className='spanLink'
                                                      title='???????????? ?????? ???? ???????????????? ???????????????? ??????????'>
                                                    {equipments.serial}
                                                </span>
                                            </td>
                                            <td>
                                                <a onClick={this.linkManufacturer}
                                                   className='shopEquipmentTdTextStyle'
                                                   href={this.state.linkManufacturer}
                                                   title={'???????????? ???? ???????? ????????????????' + ' ' + '"' + equipments.manufacturer + '"'}>
                                                    {equipments.manufacturer}
                                                </a>
                                            </td>
                                                <RemoveEquipment/>
                                            <td>
                                                <button className='disabledButtonText sendRepair'>???? ???????????? ???????????? ???????????? ???????????????????? ?? ??????????????!</button>
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
                                ?????????? ?????????????? ???? ?????????????????? ??????????????????????????!
                                <h5>
                                    ?????????? ?????????????????????? ???????????????????? ???????????????????????? = <span className='numberOfEquipments'>{this.state.equipment.length}</span> ????.
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
                        ?? ???????? ????????????????! &#8593;
                    </a>
                </div>
            </div>
        )
    }
}