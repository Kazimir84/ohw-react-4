import React from "react";
import LogoDEX_PM3000 from './Img/dex-pm3000.jpg';

export default class DEX_PM3000 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>
                    Dex PM3000
                </h2>
                <span>
                    <img src={LogoDEX_PM3000} alt="DEX PM3000"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Многофункциональный аппарат и отличная совместимость с процессом сварки Dex CM3000.
                    Весь опыт сварки углеродистых и нержавеющих сталей, алюминиевых сплавов, импульсной
                    сварки, сварки с двойным импульсом.
                    Огромная база экспертных данных сварки: синергети-ческое регулирование и автоматическая
                    коррекция параметров.
                    Новое решение для управления импульсной сваркой обеспечивает более мягкий старт сварки
                    и меньшее количество брызг.
                    Строгое распределение энергии в сварочном цикле обеспечивает более четкое формирование
                    двух импульсов.
                    Диверсифицированные сварочные экспертные системы и специальные программы для сварки
                    алюминиевых сплавов для получения оптимального качества сварки.
                    Параметры импульсной сварки в каждой фазе открыты для точной настройки и достигается
                    лучшее качество сварки.
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/PPMVheH_YxQ"
                                    title="Цифровые промышленные полуавтоматы серии Dex (CM/PM) 3000^ MEGMEET"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Напряжение питания	~3x380 В ±25% (285-475 В)</li>
                        <li>Частота сети питания	45 - 65 Гц</li>
                        <li>Потребляемая мощность	9,2 кВА (8,7 кВт)</li>
                        <li>Коэффициент мощности	0,94</li>
                        <li>Эффективный КПД	0,9</li>
                        <li>Номинальное напряжение холостого хода	54,2 В</li>
                        <li>Диапазон тока сварки	30-300 А</li>
                        <li>Диапазон напряжения дуги	12-30 В</li>
                        <li>Номинальный рабочий цикл	280 А / 60% / 40°С</li>
                        <li>Процессы сварки	C02/MAG/MIG, DC/импульс/двойной импульс</li>
                        <li>Последовательность сварки	2-такта / 4-такта / 4-такта спец.</li>
                        <li>Диаметр проволоки	0,8/1,0/1,2/SP мм</li>
                        <li>Свариваемые материалы	Углеродистая/ нержавеющая сталь Алюминиевые сплавы</li>
                        <li>Регулировка скорости подачи проволоки	1,4-28 м/мин</li>
                        <li>Динамика дуги	-9-+9</li>
                        <li>Класс защиты	IP23S</li>
                        <li>Габаритные размеры	610 х 260 х 398 мм</li>
                        <li>Масса	25,4 кг</li>
                    </ol>
                </p>
                <button onClick={this.backToList} className="BackToList">Вернуться к списку оборудования</button>
            </div>
        )
    }
}