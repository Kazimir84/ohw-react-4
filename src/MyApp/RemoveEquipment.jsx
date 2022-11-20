import React from "react";
import axios, {Axios} from "axios";

const PASSWORD = 'admin';
const URL = "http://localhost:3001/equipments";
const URL_DELETED = 'http://localhost:3001/deletedEquipments';
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json'

export default class RemoveEquipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            deletedId: null,
            equipment: []
        }
        this.removeEquipment = this.removeEquipment.bind(this);
    }

    removeEquipment (event) {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            console.log('IDDDD', event)
            let id = Number(event.nativeEvent.path[2].cells[8].innerText);
            console.log('IDDDD', event)
            this.setState({id: id});
            event.nativeEvent.path[2].remove();

//=======================Begin============================== Добавление оборудования в список Списанного Оборудования===
            axios.get(URL_DELETED)
                .then(response => {
                    let newId = response.data.length+1;
                    this.setState({deletedId: newId})
                })
            axios.get(URL)
                .then(response => {
                    let deletedEquipments = response.data.find(function (value, index) {
                        return value.id === id;
                    });
                    deletedEquipments.id = this.state.deletedId;
                    let date = new Date();
                    let options = {
                        era: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        weekday: 'long',
                        timezone: 'UTC',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric'
                    };
                    deletedEquipments.dateDeleted = date.toLocaleString("ua", options);
                    let faultDiscription = prompt("Опишите причину списания сварочного оборудования");
                    deletedEquipments.faultDiscription = faultDiscription;
                    axios.post(URL_DELETED, deletedEquipments)
                        .then(response => {
                            console.log('Deleted', response.data)
                            // this.pageReload();
                        })
                })
//========================End===========================================================================================

            axios.delete(`${URL}/${id}`)
                .then(res => {
                    axios.get(URL)
                        .then(response => {
                            this.setState({equipment: response});
                            document.location.reload();
                        })
                })
        } else {
            alert('У Вас нет прав для этого действия!');
        };
    };

    render() {
        return(
            <td className="removeTd">
                <button
                    onClick={this.removeEquipment} className="remove"
                    title='Нажмите для удаления оборудования из списка'>
                    Удалить оборудование из списка
                </button>
            </td>
        )
    }
}