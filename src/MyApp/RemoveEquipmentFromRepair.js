import React from "react";
import axios, {Axios} from "axios";

const URL_REMOVE_FROM_REPAIR = "http://localhost:3001/repairEquipments";
const URL = "http://localhost:3001/equipments";
const PASSWORD = 'admin';

export default class RemoveEquipmentFromRepair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            repairEquipment: [],
            equipments: []
        }
        this.removeEquipmentFromRepair = this.removeEquipmentFromRepair.bind(this);
    }

    removeEquipmentFromRepair (event) {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[3].cells[12].innerText);
            this.setState({id: id});
            event.nativeEvent.path[3].remove();

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
                    //===========
                })

        } else {
            alert('У Вас нет прав для этого действия!');
        };
        //====================

//         axios.get(URL)
//             .then(response => {
//                 console.log('response', response.data)
//                 this.setState({equipments: response.data})
//                 let repairEquipmentSelected = response.data.find(function (value, index) {
//                     return value.id === id;
//                 });
//                 repairEquipmentSelected.repair = true;
//
//                 const URLPUT = `http://localhost:3001/equipments/${repairEquipmentSelected.id.toString()}`;
//                 axios.put(URLPUT, repairEquipmentSelected)
//                     .then(response => {
//                         console.log('RESPONSE', response.data);
//                         this.pageReload();
//                     })
//                     .catch(e => {
//                         this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack});
//                         console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
//                     })
//
//                 console.log('dddd', repairEquipmentSelected);
//                 //============Добавляем информацию о ремонте
//                 repairEquipmentSelected.dateRepair = `${dateRepair}`;
//                 repairEquipmentSelected.serviceCenterContacts = `${serviceCenterContacts}`;
//                 repairEquipmentSelected.breakdownDescription = `${breakdownDescription}`;
//                 repairEquipmentSelected.repairCost = `${repairCost}`;
//                 repairEquipmentSelected.repairTime = `${repairTime}`;
//                 repairEquipmentSelected.repair = true;
//                 //============
//                 this.setState({repairEquipment: repairEquipmentSelected});
//                 // console.log('this state', this.state.repairEquipment);
//
//                 axios.post(URL_REPAIR, repairEquipmentSelected)
//                     .then(response => {
//                         console.log('resSSS', response.data);
//                     })
//                 // document.location.reload();
//             })
//
//     } else {
//     alert('У Вас нет прав для этого действия!');
// };

        //=================
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