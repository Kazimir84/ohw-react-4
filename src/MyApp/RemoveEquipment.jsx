import React from "react";
import axios, {Axios} from "axios";

const URL = "http://localhost:3000/equipments"

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
    }

    render() {
        return(
            <td className="removeTd">
                <button onClick={this.removeEquipment} className="remove">Удалить оборудование из списка</button>
            </td>
        )
    }
}