import React from "react";
import LogoPDGU_350 from './Img/pdgu-350-1.jpg';

export default class Energy_PDGU_350 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h2>
                    Энергия ПДГУ-350
                </h2>
                <span>
                    <img src={LogoPDGU_350} alt="Энергия ПДГУ-350"/>
                </span>
                <h3>
                    Описание Оборудования
                </h3>
                <p>
                    Сварочный инвертор полуавтомат ПДГУ-350 является мощным, трёхфазным, универсальным
                    сварочным полуавтоматом, с выходным током 350А. в 60% рабочем цикле
                    Надёжный, прочной конструкции аппарат со встроенным, механизмом подачи проволоки,
                    позволяет без проблем справиться с большинством сварочных задач в трёх
                    режимах сварки: МИГ/МАГ, ММА, ТИГ-ДС
                    ПРЕИМУЩЕСТВА : Сварочный инвертор полуавтомат ПДГУ-35
                    4-роликовый привод;
                    Энергосберегающая инверторная технология;
                    Информативный, чёткий дисплей: ток, напряжение, неполадки;
                    Функции “Горячий старт”, “Антиприлипание” и “Форсаж дуги”;
                    Регулируемый “Плавный старт/стоп”, для плавного нарастания/уменьшения напряжения и
                    скорости вылета проволоки в режиме МИГ/МАГ;
                    Регулировка индуктивности в режиме МИГ/МАГ, позволяет задать необходимую эпюру сварочного
                    тока, для получения более “мягкого” или “жесткого” сварочного процесса;
                    Регулировка тока форсажа в режиме ММА, позволяет подстроиться под различные типы электродов
                    и пространственное положение шва;
                    Режим сварки алюминия и нержавеющих сталей со струйным переносом металла.
                    Автоматическое отключение при перегреве, отсутствии одной из фаз питающего напряжения или
                    при снижении питающего напряжения более чем на 10%.
                    Функция FAN (вентилятор по потребности), ограничивает попадание излишней пыли внутрь;
                    Двух-четырёх тактная (2Т/4Т) конфигурация включения процесса сварки в режиме МИГ/МАГ;
                    Функция заправки проволоки без подачи газа и тока. Тест газовой магистрали;
                    Регулируемые: предварительная /финальная продувка газом, Дожиг вылета проволоки;
                    Автоматическое отключение, при отсутствии циркуляции охлаждающего агента (при работе с ABICOOL-L CR1000);
                    Розетка (36В./100Вт.) для подключения подогревателя газа;
                    Обратный кабель 3м., безопасные, байонетные разъёмы;
                    Широкие возможности комплектации горелками, под различные задачи в сварке:от ABIMIG 305AT
                    с поворотным гусаком, до ABIMIG WT с жидкостным охлаждением и сменными, поворотными гусаками на 240 и 340 Ампер;
                    В максимальной конфигурации, комплектуется блоком принудительного охлаждения, горелкой
                    с охлаждением жидкостью, редуктором и подогревателем газа, универсальной тележкой для перемещения
                    ОБЛАСТИ ПРИМЕНЕНИЯ: Сварочный инвертор полуавтомат ПДГУ-35
                    Машиностроение. Автомобили специального назначения/строительные машины. Судостроение.
                    Вагоностроение. Энергетика. Резервуары и сосуды под давлением. Изготовление оборудования
                    и стальных конструкций. Сооружение промышленных установок и труб. Роботизированная сварка
                    <p>Видео обзор аппарата
                        <div>
                            <iframe width="853" height="480" src="https://www.youtube.com/embed/l203VaZWqqA"
                                    title="Инверторный сварочный полуавтомат ПДГУ 350 сварка алюминия"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </p>
                    <h4>Технические характеристики.</h4>
                    <ol>
                        <li>Напряжение питания, В * 	3 x 380 ±10% )</li>
                        <li>Потребляемая мощность max, кВт	14</li>
                        <li>Потребляемый ток, Iмакс., А.	22</li>
                        <li>Номинальный ток при ПН 60%, А.	350</li>
                        <li>Допустимая нагрузка при ПН 100%, А.	300</li>
                        <li>Пределы регулирования тока, А.	10 - 350</li>
                        <li>Напряжение холостого хода, В.	70</li>
                        <li>Потребляемая мощность холостого хода, Вт.	40</li>
                        <li>Диапазон рабочего  напряжения, В.	8 - 30</li>
                        <li>Диаметр электрода / проволоки, мм.	1,6 - 6 / 0,8 - 2,4</li>
                        <li>Программы	ММА, МИГ/МАГ, ТИГ-ДС</li>
                        <li>Степень защиты	IP 23</li>
                        <li>Первичный предохранитель (автомат), А	25</li>
                        <li>Габаритные размеры, Д х Ш х В, мм.	710х340х580</li>
                        <li>Масса, кг	40</li>
                    </ol>
                </p>
                <button className="BackToList">
                    <a href="/">Вернуться к списку оборудования</a>
                </button>
            </div>
        )
    }
}