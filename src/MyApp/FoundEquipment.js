import React from "react";
import axios, {Axios} from "axios";

const URL = 'http://localhost:3001/equipments';

let searchData = {
    searchInventory: 'Данные небыли введены',
    searchSerial: 'Данные небыли введены',
    noMatch: null
};

export default class FoundEquipment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipment: [],
            foundEquipment: [],
            error: null

        }

        this.foundSubmit = this.foundSubmit.bind(this);
        this.getInterInventory = this.getInterInventory.bind(this);
        this.getInterSerial = this.getInterSerial.bind(this);
    }

    componentDidMount() {
        axios.get(URL)
            .then(response => {
                this.setState({equipment: response.data});
            })
            .catch(e => {
                this.setState({error: 'Ошибка ' + e.name + ":" + e.message + "\n" + e.stack})
                console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack)
            })
    }

    getInterInventory(event) {
        searchData.searchInventory = event.target.value;
    }

    getInterSerial(event) {
        searchData.searchSerial = event.target.value;
    }

    foundSubmit = event => {
        event.preventDefault();
        event.target.reset();
        let searchMatch = [];
        if(searchData.searchInventory === 'Данные небыли введены' && searchData.searchSerial === 'Данные небыли введены') {
            searchData.noMatch = 'Введите Инвентарный или Заводской номер оборудования.';
            let foundMatch = searchData.noMatch
            searchMatch.push(foundMatch);
            this.setState({foundEquipment: searchMatch});
        } else {
            let foundMatch = this.state.equipment.find((index => index.inventory === searchData.searchInventory || index.serial === searchData.searchSerial));
            if (foundMatch === undefined) {
                searchData.noMatch = 'Такого оборудования Нет!';
                let foundMatch = searchData.noMatch
                searchMatch.push(foundMatch);
                this.setState({foundEquipment: searchMatch});
            } else {
                searchMatch.push(foundMatch);
                this.setState({foundEquipment: searchMatch});
                searchData.searchInventory = 'Данные небыли введены';
                searchData.searchSerial = 'Данные небыли введены'
                searchData.noMatch = null;
            }
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.foundSubmit} className='formAddNewEquipment blockHeight'>
                    <h3 className='form_h4_AddNewEquipment'>
                        Поиск оборудования
                    </h3>
                    <label>
                        <input name="inventory" type="text" onChange={this.getInterInventory} placeholder="Инвентарный Номер"/>
                        <input name="serial" type="text" onChange={this.getInterSerial} placeholder="Заводской номер"/>
                    </label>
                    <button type="submit"  className='btnAddEqw'>Найти оборудование</button>
                    <div>
                        Результат поиска &#8595;
                        {
                            this.state.foundEquipment.map((equipment, index) => {
                                if(searchData.noMatch === null) {
                                    return (
                                        <div className='foundEquipment'>
                                            Апарат - <b>{equipment.manufacturer} </b>
                                            с Заводским номером - <b>{equipment.serial}</b> ,
                                            и Инвентарным номером - <b>{equipment.inventory}</b> ,
                                            находиться в Цеху № - <b>{equipment.shop}</b> ,
                                            в таблице под номером <b>{equipment.id+1}</b>

                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className='notFoundEquipment'>
                                            {searchData.noMatch}
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </form>
            </div>
        )
    }
}