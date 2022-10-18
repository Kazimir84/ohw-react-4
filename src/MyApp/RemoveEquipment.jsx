import React from "react";
import axios, {Axios} from "axios";

const PASSWORD = 'admin';
const URL = "http://localhost:3001/equipments";
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json'

export default class RemoveEquipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            equipment: []
        }
        this.removeEquipment = this.removeEquipment.bind(this);
    }

    removeEquipment (event) {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[7].innerText);
            this.setState({id: id});
            event.nativeEvent.path[2].remove();
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