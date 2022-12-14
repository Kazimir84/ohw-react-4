import React from "react";
import LogoJASIC_MIG_400 from './Img/jasic-mig-400.jpeg';

export default class JASIC_MIG_400 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    JASIC MIG 400
                </h2>
                <span>
                    <img src={LogoJASIC_MIG_400} alt="JASIC MIG 400"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Аппарат JASIC MIG-400 (N361) относится к типу инверторных полуавтоматов и может использоваться
                    для таких видов сварки как полуавтоматическая плавящейся электродной проволокой в среде
                    защитных газов СО2, CO2+Ar, Ar (MIG+MAG), полуавтоматическая самозащитной порошковой
                    проволокой (FCAW), а также для ручной дуговой сварки на постоянном токе (DC MMA).
                    Аппарат можно использовать для сварки рядовых и ответственных конструкций из стали
                    (углеродистой, низкоуглеродистой, легированной и низколегированной)
                    Функции и преимущества
                    - переключение полуавтомат/ручная дуговая
                    - возможность сварки в режиме 2 или 4 такта
                    - возможность работы "мягкой"и "жесткой"дугой
                    - кассета с проволокой в защитном боксе
                    - большая мобильность сварщика, благодаря отдельному подающему механизму
                    <p> Видео демонстрация
                        <div>
                            <iframe width="683" height="384" src="https://www.youtube.com/embed/UuYgMuj-SNc"
                                    title="Jasic MIG 400 (N361) - професійний напівавтомат" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    Вид сварки/резки	MMA MIG
                    Напряжение питающей сети	380 В ± 15% (3 фазы)
                    Тип сварочного тока	DC
                    Сварочный ток MMA (min)	30 А
                    Сварочный ток MMA (max)	400 А
                    Сварочный ток MIG/MAG (min)	60 А
                    Сварочный ток MIG/MAG (max)	740 А
                    ПВ (40 °С)	60 %
                    Сварочный ток (ПВ 100%)	400 А
                    Напряжение холостого хода	62 В
                    Диапазон рабочего напряжения	17 - 34
                    Потребляемая мощность (полная)	17.8 кВА
                    Потребляемая мощность (активная)	16.55 кВт
                    Подающее устройство	в отдельном корпусе
                    Количество роликов	4
                    Скорость подачи проволоки	1.0 - 21 м/мин.
                    Диаметр сварочной проволоки	0.8 / 1.0 / 1.2 / 1.6 мм
                    КПД	85 %
                    Коэффициент мощности (cos φ)	0.85
                    Класс изоляции	F
                    Степень защиты	IP21
                    Габаритные размеры (Д х Ш х В)	760 x 360 x 585 мм
                    Вес	41 кг
                    Бренд	Jasic
                </p>
                <button onClick={this.backToList} className="BackToList">Вернуться к списку оборудования</button>
            </div>
        )
    }
}