import React from 'react';
import LogoSSVA_160_2 from './Img/SSVA-160-2-b.jpg';

export default class SSVA160 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>
                    SSVA-160-2
                </h2>
                <span>
                    <img src={LogoSSVA_160_2} alt="SSVA-160-2"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Сварочные инверторы SSVA-160-2, также как и все сварочное оборудование ООО «Максима-Плюс»,
                    характеризуется качественной сборкой, современными электрическими компонентами, и, как
                    результат, продолжительной работой сварочных аппаратов в различных условиях без
                    дополнительного сервиса
                    Основные достоинства и преимущества инвертора SSVA-160-2 перед аналогичными иноземными конкурентами:
                    Сварочный инвертор создан украинскими инженерами с учетом наших условий сварки, начиная
                    от нестабильной сети и заканчивая менталитетом нашего сварщика.
                    Металлический корпус легко переносит все нагрузки при транспортировке и случайные падения.
                    Сварочный аппарат, благодаря цельнометаллическому корпусу, легко перенесет тяжелую долю
                    сварочника в нашей стране.
                    Во время разработки SSVA 160, инженеры не забыли важный параметр – способность работать
                    при питании нестабильной сетью с пониженным напряжением до 160В
                    Так как харьковский инвертор – современный сварочный аппарат с микропроцессорным
                    управлением, то он обладает высоким КПД. Это поможет более рационально использовать
                    электроэнергию, и предохранит вашу проводку от перенагрузок во время эксплуатации
                    сварочного аппарата
                    Благодаря покрытию платы слоем защитного лака, SSVA 160 2 не боится пыли и влаги.
                    Хотя рекомендуется время от времени продувать внутренности аппарата сжатым воздухом
                    Харьковские сварочные аппараты могут легко использовать как профессионалы, так и
                    начинающие сварщики. Функции «Антиприлипание», «Форсаж дуги» и «Поджиг» помогут научиться
                    любому новичку сварочному делу.
                    <p>
                        Помимо сварки ММА (сварка штучными электродами с покрытием), SSVA-160-2 может служить
                        источником сварочного тока при работе с аргоном в режиме TIG с пределами регулировки
                        тока от 5А до 180А.
                        Если вам понадобится полуавтомат, вы можете докупить подающее устройство SSVA-PU и,
                        после подключения всех комплектующих, сможете пользоваться полуавтоматической сваркой.
                        Также SSVA-160 может работать в качестве пуско-зарядного устройства для автомобилей с
                        бортовой сетью 12В. Пределы регулировок в этом режиме: от 1А до 130А.
                        Сварочный инверторный аппарат ССВА 160 построен на базе микроконтроллера, который можно
                        по мере обновления Программного Обеспечения, перепрошивать. Из продукции Максима-Плюс
                        можно еще выделить сварочный полуавтомат инверторного типа SSVA-180 который в режиме ММA
                        обладает всеми сварочными показателями что и SSVA 160
                        Благодаря множеству функций инвертора харьковского производства, он получил широкое
                        распространение не только в быту, но и на СТО, газовых, фермерских и коммунальных хозяйствах
                        В меню выбора режимов аппарата SSVA-160-2 можно выбрать режим «безопасного холостого
                        хода». При его включении сварочный инвертор в момент холостого хода будет выдавать
                        безопасное напряжение. В момент возбуждения дуги, напряжение автоматически включается
                        до рабочего. Этот  режим очень полезен при выполнении сварочных работ в сырости.
                    </p>
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/_IXhnOuSKK0"
                                    title="Сварочный инвертор SSVA 160-2" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Гарантийный срок 24 мес</li>
                        <li>Диаметр электрода 1,6-5,0 мм</li>
                        <li>Диапазон сварочного тока 5-190 А</li>
                        <li>Напряжение питающей сети 220 В</li>
                        <li>Применение MMA</li>
                        <li>Вес 10,0 кг</li>
                    </ol>
                </p>
                <button className="BackToList">
                    <a href='/'>Вернуться к списку оборудования</a>
                </button>
            </div>
        )
    }
}