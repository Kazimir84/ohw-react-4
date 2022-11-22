import React from "react";
import LogoSSVA_180_P from './Img/ssva-180-p.jpg';

export default class SSVA_180_Р extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    SSVA 180-Р
                </h2>
                <span>
                    <img src={LogoSSVA_180_P} alt="SSVA-180 P"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Cравнительно высокая мощность: в режиме "полуавтомат" средний сварочный ток достигает около 180А;
                    легко и без затруднений можно работать проволокой для сварки сечением до 1,0мм;
                    благодаря точным регулировкам, полуавтомат SSVA-180P легко справляется с тонким металом;
                    легкая заправка сварочной проволоки;
                    беспроблемная работа при питании нестабильной сетью;
                    SSVA 180P в режиме ММА без проблем способен работать электродами диаметром от 1,6мм до 5мм;
                    благодаря современным новейшим технологиям, полуавтомат SSVA-180 P обладает немалым КПД и,
                    по сравнению с трансформаторным полуавтоматом, существенно экономит электроэнергию;
                    Инверторный полуавтомат SSVA 180 P снабжен функцией пуско-зарядного устройства, что сильно
                    поможет в зимнюю пору автолюбителю;
                    как и все оборудование SSVA имеет возможность перепрошивки Программного Обеспечения.
                    Это существенно для улучшения сварочных качеств аппаратуры
                    Благодаря многофункциональности, полуавтомат SSVA-180 P очень распространен на
                    Станциях Технического Обеспечения
                    Гарантия на харьковское сварочное оборудование - 2 года
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/tswjGoD45m8"
                                    title="Сварочный Полуавтомат SSVA 180 P Обзор Отзывы" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Номинальное напряжение, В	220	 </li>
                        <li>Рабочее напряжение питания, В	165-275</li>
                        <li>Рабочий диапазон температур,	-30 С +45 С</li>
                        <li>Потребляемая мощность (бытовая сеть 220В, 16А), Вт	не более 2700 (12А)</li>
                        <li>Потребляемая мощность (бытовая сеть 220В, 16А), Вт	не более 3500 (16А)</li>
                        <li>Потребляемая мощность (промышленная сеть 220В, 25А), Вт	не более 5500 (25А)</li>
                        <li>Потребляемая мощность (промышленная сеть 220В, 25А), Вт	Кратковременная, 0,2сек. не более 6700 (30А)</li>
                        <li>Потребляемая мощность холостого хода, Вт	не более 40	~10Вт</li>
                        <li>Максимальный ток короткого замыкания, А	~250</li>
                        <li>Постоянная нагрузки (ПН) при нормальных условиях, не менее до 135А - 100%, 160А - 60%</li>
                        <li>Скорость подачи проволоки, режим MIG/MAG, метров в минуту	1,5-10</li>
                        <li>Рекомендованный диаметр проволоки, режим   MIG/MAG, мм.	0,6-10</li>
                        <li>Диапазон регулировки выходного напряжения, режим MIG/MAG, В	12,4 - 24,6	 </li>
                        <li>Сопротивление изоляции, при напряжении 2,5кВ, не менее, Ом	50М Ом	Типовое - 300МОм</li>
                        <li>Габаритные размеры ДхШхВ, мм	460х220х340	 </li>
                        <li>Масса, не более, кг	15</li>
                    </ol>
                </p>
                <button className="BackToList">
                    <a href="/">Вернуться к списку оборудования</a>
                </button>
            </div>
        )
    }
}