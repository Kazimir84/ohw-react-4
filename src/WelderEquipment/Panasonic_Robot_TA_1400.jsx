import React from "react";
import LogoPanasonicRobot from './Img/Panasonic.png';

export default class Panasonic_Robot_TA_1400 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    Робот для сварки  Panasonic
                </h2>
                <span>
                    <img src={LogoPanasonicRobot} alt="Робот для сварки  Panasonic Robot Controller  TA 1400 WG ||| E YA-1WAR61E00  (OM1303030E)"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    TAWERS серии WG3 — широко известные промышленные роботы Panasonic с самыми
                    уникальными и интегрированными функциями. Эта серия роботов представляет собой
                    универсальный контроллер с плавким предохранителем, источник сварочного тока и
                    устройство подачи сервопроволоки в одном устройстве. Он поставляется с различными
                    классификациями, такими как TA-1000WG3, TA-1400WG3, TA-1600WG3, TA-1800WG3, а также TA-1900WG3
                    <p>Видео обзор Robot
                        <div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/aw2cmDwIWyI"
                                    title="Производство котлов Альтеп (Altep) - работа сварочного робота"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Метод TIG, для дуговой сварки, MIG, MAG</li>
                        <li>Режим функционирования - роботизированное</li>
                        <li>Другие характеристики - встроенное, высокая скорость</li>
                    </ol>
                </p>
                <button lassName="BackToList">
                    <a href="/">Вернуться к списку оборудования</a>
                </button>
            </div>
        )
    }
}