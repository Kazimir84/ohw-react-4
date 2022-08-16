import React from "react";
import axios from "axios";

const URL = 'http://localhost:3001/equipments';
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json'


const newEquipment = {
    shop: 'Данные небыли введены',
    id: 'Данные небыли введены',
    inventory: 'Данные небыли введены',
    model: 'Данные небыли введены',
    manufacturer: 'Данные небыли введены',
    serial: 'Данные небыли введены',
}

export default class AddNewEquipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // shop: 'Данные небыли введены',
            // id: 'Данные небыли введены',
            // inventory: 'Данные небыли введены',
            // model: 'Данные небыли введены',
            // manufacture: 'Данные небыли введены',
            // serial: 'Данные небыли введены',
            newEquipment: [],
            error: null
        }

        this.handleAddShop = this.handleAddShop.bind(this);
        this.handleAddId = this.handleAddId.bind(this);
        this.handleAddInventory = this.handleAddInventory.bind(this);
        this.handleAddModel = this.handleAddModel.bind(this);
        this.handleAddManufacturer = this.handleAddManufacturer.bind(this);
        this.handleAddSerial = this.handleAddSerial.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleAddShop = event => {
        newEquipment.shop = Number(event.target.value);
    }
    handleAddId = event => {
        let id = event.nativeEvent.path[3].children[0].children[1].children.length + 1;
        newEquipment.id = Number(id);
    }
    handleAddModel = event => {
        newEquipment.model = event.target.value;
    }
    handleAddInventory = event => {
        newEquipment.inventory = event.target.value;
    }
    handleAddSerial = event => {
        newEquipment.serial = event.target.value;
    }
    handleAddManufacturer = event => {
        newEquipment.manufacturer = event.target.value;
    }

    handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    axios.post(URL, newEquipment)
        .then(response => {
            console.log('res', response.data);
            this.setState({newEquipment: response.data});
            this.pageReload();
        })
        .catch(e => {
            this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack})
            console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack)
        })

    }

    pageReload() {
        document.location.reload();
    }

    render() {
        if (this.state.error !== null) {
            return (
                <div>
                <h4>
                    {this.state.error}
                    <p>Такой Id уже есть!</p>
                </h4>
                <button onClick={this.pageReload}>Попробовать еще раз</button>
                </div>
            )
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input name="shop" type="text" onChange={this.handleAddShop} placeholder="Номер Цеха"/>
                        <input name="model" type="text" onChange={this.handleAddModel} placeholder="Модель апарата"/>
                        <input name="inventory" type="text" onChange={this.handleAddInventory} placeholder="Инвентарный Номер"/>
                        <input name="serial" type="text" onChange={this.handleAddSerial} placeholder="Серийный номер"/>
                        <input name="manufacture" type="text" onChange={this.handleAddManufacturer} placeholder="Производитель"/>
                    </label>
                    <button type="submit" onClick={this.handleAddId} className='btnAddEqw'>Добавить оборудование</button>
                </form>
            </div>
        )
    }
}