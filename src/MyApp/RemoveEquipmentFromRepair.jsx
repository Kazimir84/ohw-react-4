import React from "react";
import axios, {Axios} from "axios";

const URL_REMOVE_FROM_REPAIR = "http://localhost:3001/repairEquipments";
const URL = "http://localhost:3001/equipments";
const URL_HISTORY_OF_REPAIR = "http://localhost:3001/historyOfRepairEquipments";
const PASSWORD = 'admin';

export default class RemoveEquipmentFromRepair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            historyId: null,
            repairEquipment: [],
            equipments: []
        }
        this.removeEquipmentFromRepair = this.removeEquipmentFromRepair.bind(this);
        this.pageReload = this.pageReload.bind(this);
    }

    pageReload() {
        document.location.reload();
    };

    removeEquipmentFromRepair (event) {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[3].cells[12].innerText);
            this.setState({id: id});
            event.nativeEvent.path[3].remove();

//=======================Begin=======Добавление лтремонтированного оборудования в список История ремонта Оборудования===
            axios.get(URL_HISTORY_OF_REPAIR)
                .then(response => {
                    let newId = response.data.length+1;
                    this.setState({historyId: newId})
                })
            axios.get(URL_REMOVE_FROM_REPAIR)
                .then(response => {
                    let historyOfRepair = response.data.find(function (value, index) {
                        return value.id === id;
                    });
                    historyOfRepair.id = this.state.historyId;
                        axios.post(URL_HISTORY_OF_REPAIR, historyOfRepair)
                            .then(response => {
                                console.log('History', response.data)
                                // this.pageReload();
                            })
                })
//=======================End============================================================================================

            axios.delete(`${URL_REMOVE_FROM_REPAIR}/${id}`)
                .then(res => {
                    axios.get(URL)
                        .then(response => {
                            this.setState({repairEquipment: response});
                            document.location.reload();
                        })
                    //============
                    axios.get(URL)
                        .then(response => {
                            console.log('response', response.data)
                            this.setState({equipments: response.data})
                            let repairEquipmentSelected = response.data.find(function (value, index) {
                                return value.id === id;
                            });
                            repairEquipmentSelected.repair = false;

                            const URLPUT = `http://localhost:3001/equipments/${repairEquipmentSelected.id.toString()}`;
                            axios.put(URLPUT, repairEquipmentSelected)
                                .then(response => {
                                    console.log('RESPONSE', response.data);
                                    this.pageReload();
                                })
                                .catch(e => {
                                    this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack});
                                    console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
                                })
                        })
                })

        } else {
            alert('У Вас нет прав для этого действия!');
        };
    }

    render() {
        return (
            <div className="sendEquipmentUnderRepair">
                <button
                    onClick={this.removeEquipmentFromRepair} className="sendRepair"
                    title = 'Нажмите что бы убрать оборудование из списка ремонта'>
                    Убрать оборудование из списка ремонта
                </button>
            </div>
        )
    }
}