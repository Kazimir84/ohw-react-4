import React from "react";
import axios, {Axios} from "axios";

const PASSWORD = 'admin';
const URL = "http://localhost:3001/equipments";
const URL_REPAIR = "http://localhost:3001/repairEquipments";
// const URL = 'https://welders-73e50-default-rtdb.firebaseio.com/equipments.json'

export default class SendEquipmentUnderRepair extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            repairEquipment: [],
            equipments: []
        }
        this.sendEquipmentUnderRepair = this.sendEquipmentUnderRepair.bind(this);
        this.pageReload = this.pageReload.bind(this);
    }

    sendEquipmentUnderRepair (event) {
        console.log('ffff', Number(event.nativeEvent.path[3].cells[8].innerText))

        let passwordEnter = prompt('Введите пароль для подтверждения', 'password');
        if (passwordEnter === PASSWORD) {
            let selectedTd = event.nativeEvent.path[3];
            let selectedButton = event.nativeEvent.path[0];
                selectedTd.classList.toggle('inRepair');
                selectedButton.setAttribute( 'disabled', 'disabled');
                selectedButton.innerHTML = 'На данный момент апарат находиться в ремонте!';
                selectedButton.classList.toggle('disabledButtonText');

            //====== Ввод информации о ремонте
            let dateRepair = prompt('Введите дату отправки аппарата в ремонт', 'д.м.г');
            let breakdownDescription = prompt('Опишите неисправность', 'В произвольной форме');
            let serviceCenterContacts = prompt('Укажите данные сервисного центра (адрес, номер телефона) по ремонту');
            let repairCost;
            let repairTime;

        while (repairCost = prompt('Ориентировочная стоимость ремонта', 'грн'))
            if (isNaN(repairCost) || repairCost === "Данные небыли введены") {
                alert('Нужно писать число!');
            } else {
                alert('Теперь все правильно!');
                repairCost = Number(repairCost);
                break;
            };

        while (repairTime = prompt('Ориентировочный срок ремонта', 'дней'))
            if (isNaN(repairTime) || repairTime === "") {
                alert('Нужно писать число!');
            } else {
                alert('Теперь все правильно!');
                repairTime = parseInt(repairTime);
                break;
            };

            //======

            let id = Number(event.nativeEvent.path[3].cells[8].innerText);
            this.setState({id: id});


            axios.get(URL)
                .then(response => {
                    console.log('response', response.data)
                    this.setState({equipments: response.data})
                    let repairEquipmentSelected = response.data.find(function (value, index) {
                        return value.id === id;
                    });
                    repairEquipmentSelected.repair = true;

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

                    console.log('dddd', repairEquipmentSelected);
                    //============Добавляем информацию о ремонте
                    repairEquipmentSelected.dateRepair = `${dateRepair}`;
                    repairEquipmentSelected.serviceCenterContacts = `${serviceCenterContacts}`;
                    repairEquipmentSelected.breakdownDescription = `${breakdownDescription}`;
                    repairEquipmentSelected.repairCost = `${repairCost}`;
                    repairEquipmentSelected.repairTime = `${repairTime}`;
                    repairEquipmentSelected.repair = true;
                    //============
                    this.setState({repairEquipment: repairEquipmentSelected});

                    axios.post(URL_REPAIR, repairEquipmentSelected)
                        .then(response => {
                            console.log('resSSS', response.data);
                        })
                    // document.location.reload();
                })

        } else {
            alert('У Вас нет прав для этого действия!');
        };
    };

    pageReload() {
        document.location.reload();
    };

    render() {
        return(
            <div className="sendEquipmentUnderRepair">
                <button
                    onClick={this.sendEquipmentUnderRepair} className="sendRepair"
                    title = 'Нажмите для отправки оборудования в ремонт'>
                    Отправить оборудование в ремонт
                </button>
            </div>
        )
    }
}