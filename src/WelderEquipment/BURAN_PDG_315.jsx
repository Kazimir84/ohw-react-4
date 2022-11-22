import React from "react";
import LogoBURAN_PDG_315 from './Img/pdg-315-buran.jpg';

export default class BURAN_PDG_315 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <div>
                <h2>
                    БУРАН ПДГ-315
                </h2>
                <span>
                    <img src={LogoBURAN_PDG_315} alt="БУРАН ПДГ-315"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Полуавтомат сварочный ПДГ-315 БУРАН – надёжный, неприхотливый сварочный полуавтомат
                    классической, трансформаторной схемы, идеально предназначенный для
                    МИГ/МАГ полуавтоматической сварки углеродистых и легированных сталей, проволокой
                    сплошного сечения в среде защитного газа - двуокиси углерода СО2
                    (его смеси в газовых миксах) O 0,8 – 1,6 мм. или самозащитной, O до 2,4 мм;
                    МИГ/МАГ полуавтоматической сварки конструкций из алюминия и его сплавов, проволокой
                    сварочной, из алюминия и его сплавов O 1.0 - 1,2мм. в среде аргона.
                    ТИГ ДС (опция) аргонодуговой сварки постоянным током.
                    ПРЕИМУЩЕСТВА: Полуавтомат сварочный ПДГ-315 БУРА
                    Электронное управление стабилизацией подачи электрода в зону сварки.
                    Режим работы 2Т/4Т функция, облегчающая работу с длинными швами.
                    Необходимые задержки включения/ отключения подачи электрода, сварочного тока и
                    защитного газа. Ручки регулировки, находятся в отсеке подающего механизма.
                    Функция заправки проволоки без включения тока и газа, позволяет быстрее и экономней
                    производить замену катушки.
                    Универсальный евроразъём горелки KZ-2.
                    Безопасные байонетные разъёмы силовых кабелей BINZEL.
                    Размот с тормозным устройством, под катушки D200/5 и D 300/15.
                    Качественный, четырёх-роликовый механизм подачи проволоки SSJ-15 или CWF-410 COOPTIM,
                    позволяет применять удлинённые (до 5м.) горелки, алюминиевую и самозащитную
                    проволоку O 0,8 - 2,4мм. Обеспечивает диапазоны скорости подачи проволоки от 0,1 до 18 м./мин.
                    Широкие возможности комплектации горелками BINZEL под различные задачи в сварке:
                    от стандарта -  ABIMIG 305AT с поворотным гусаком, до ABIMIG WT с жидкостным
                    охлаждением и сменными, поворотными гусаками на 240, 340 и 540 Ампер.
                    КОМПЛЕКТАЦИЯ ПОСТАВКИ : Полуавтомат сварочный ПДГ-315 БУРА
                    В стандартном варианте комплектуется газоэлектрической горелкой 3м. и обратным кабелем.
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="450" height="300" src="https://www.youtube.com/embed/GWrw5e811fc"
                                    title="Эксплуатация сварочного полуавтомата ПДГ 315 Буран" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Номинальное напряжение сети 50 Гц, В	3 x 380</li>
                        <li>Потребляемая мощность max, кВт	12,9</li>
                        <li>Номинальный сварочный ток при ПН 40%, А	300</li>
                        <li>Номинальный сварочный ток при ПН 60%, А	270</li>
                        <li>Номинальный сварочный ток при ПН 100%, А	190</li>
                        <li>Пределы регулирования сварочного тока, А	30-300</li>
                        <li>Напряжение холостого хода, В, не более	45</li>
                        <li>Число ступеней регулировки тока	2 x 6</li>
                        <li>Диапазон регулирования напряжения, В	18-34</li>
                        <li>Диаметр электродной проволоки, мм.	0,8 – 1,6</li>
                        <li>Тип охлаждения	AF</li>
                        <li>Степень защиты	IP 21</li>
                        <li>Первичный предохранитель (автомат), А	20</li>
                        <li>Предохранитель управления, А	5</li>
                        <li>Масса, кг	120</li>
                        <li>Габаритные размеры, мм (с тележкой) Д/Ш/В	830/380/700</li>
                    </ol>
                </p>
                <button onClick={this.backToList} className="BackToList">Вернуться к списку оборудования</button>
            </div>
        )
    }
}