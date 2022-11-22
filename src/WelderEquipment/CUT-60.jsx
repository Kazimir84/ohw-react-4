import React from "react";
import LogoCUT_60 from './Img/plazmorez-tesla-cut.jpg';

export default class CUT_60 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    CUT-60
                </h2>
                <span>
                    <img src={LogoCUT_60} alt="CUT-60"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Позволяет резать металлы толщиной до 20 мм (максимальный рез, чистовой — до 15 мм).
                    <div>ВЕНТИЛЯТОР ДИАМЕТРОМ 115 ММ</div>
                    Отвечает за принудительное охлаждение внутренних компонентов аппарата.
                    <div>ВСТРОЕННЫЙ РЕДУКТОР С МАНОМЕТРОМ И ВЛАГООТДЕЛИТЕЛЕМ</div>
                    Расположены в задней части аппарата.Редуктор позволяет отрегулировать давление воздуха,
                    поступающего от компрессора.Аналоговый манометр предназначен для контроля давления.
                    Влагоотделитель очищает подаваемый воздух от влаги для бесперебойной работы аппарата.
                    <div>ВЫСОКОЧАСТОТНЫЙ ПОДЖИГ ДУГИ</div>
                    Предусмотрена кнопка для бесконтактного поджига дуги на плазмотроне.
                    <div>УКОМПЛЕКТОВАН ПЛАЗМОТРОНОМ SG 55</div>
                    Длина шланга — 5 м.
                    <div>ТРИ ИНДИКАТОРА</div>
                    Зеленый — нормальная работа/сеть подключена, желтый — перегрев, красный — авария (несоответствие напряжения сети)
                    <div>ПЕРЕКЛЮЧАТЕЛЬ НА 2 ПОЛОЖЕНИЯ</div>
                    1-е: тест воздуха;2-е: резка (рабочий режим)
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="520" height="293" src="https://www.youtube.com/embed/sgc3wCnSLLo"
                                    title="Плазморез Тесла Велд КАТ 60. Разборка аппарата." frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Продолжительность включения (ПВ), %	60</li>
                        <li>Источник энергии для сварки	плазменная струя</li>
                        <li>CUT (воздушно-плазменная резка)	да</li>
                        <li>Сварочный ток мин. (CUT), А	30</li>
                        <li>Сварочный ток макс. (CUT), А	60</li>
                        <li>Толщина реза, чистовой/максимальный, мм	15/20</li>
                        <li>Расход воздуха, л/мин	200</li>
                        <li>Номинальное давление воздуха, Атм	6.5</li>
                        <li>Поджиг дуги плазмотрона	Высокочастотный</li>
                        <li>Пилотная дуга	нет</li>
                        <li>Напряжение холостого хода (CUT), В	265</li>
                        <li>Рабочее напряжение на дуге (CUT), В	108</li>
                        <li>Напряжение питающей сети, В	380</li>
                        <li>Потребляемый ток (CUT), А	25</li>
                        <li>Частота питающей сети, Гц	50/60</li>
                        <li>Потребляемая мощность (CUT), кВт	8.8</li>
                        <li>Коэффициент полезного действия, %	80</li>
                        <li>Коэффициент мощности, cos	0.7</li>
                        <li>Степень защиты	IP21</li>
                        <li>Класс изоляции	F</li>
                        <li>Вес, кг	25</li>
                        <li>Pазмеры (ДхШхВ), мм	542x280x382</li>
                        <li>Гарантийный срок, мес	36</li>
                    </ol>
                </p>
                <button className="BackToList">
                    <a href="/">Вернуться к списку оборудования</a>
                </button>
            </div>
        )
    }
}