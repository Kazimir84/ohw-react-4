import React from "react";
import axios, {Axios} from "axios";

const PASSWORD = 'admin';
const URL = "http://localhost:30001/equipments";

export default class RemoveEquipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            equipment: []
        }
        this.removeEquipment = this.removeEquipment.bind(this)
    }

    removeEquipment (event) {
        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let id = Number(event.nativeEvent.path[2].cells[1].textContent);
            this.setState({id: id});
            event.nativeEvent.path[2].remove();
            axios.delete(`${URL}/${id}`)
                .then(res => {
                    axios.get(URL)
                        .then(response => {
                            this.setState({equipment: response})
                        })
                })
        } else {
            alert('У Вас нет прав для этого действия!')
        }

    }

    render() {
        return(
            <td className="removeTd">
                <button onClick={this.removeEquipment} className="remove">Удалить оборудование из списка</button>
            </td>
        )
    }
}