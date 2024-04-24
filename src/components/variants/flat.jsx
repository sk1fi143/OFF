import React from "react";
import { Theory } from "../theory";
import flat from "../../assets/flat1.png";
import flat5 from "../../assets/flat5.png";

export const Flat = () => {
    return(
        <Theory 
        taskImage={flat}
        src5={flat5}
            title='План квартиры'
            taskMain='На рисунке изображен план двухкомнатной квартиры в многоэтажном жилом доме. Сторона одной клетки на плане соответствует 0,4 м, а условные обозначения двери и окна приведены в правой части рисунка.
            Вход в квартиру находится в коридоре. Слева от входа в квартиру находится санузел, а в противоположном конце коридора  — дверь в кладовую. Рядом с кладовой находится спальня, из которой можно пройти на одну из застекленных лоджий. Самое большое по площади помещение  — гостиная, откуда можно попасть в коридор и на кухню. Из кухни также можно попасть на застекленную лоджию.'
            task1='Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк перенесите последовательность четырех цифр без пробелов, запятых и других дополнительных символов.'
            how1='Вход в квартиру находится в коридоре, следовательно, он отмечен на плане цифрой 2, слева от входа в гостиную комнату отмечен санузел под цифрой 1, в противоположном конце под цифрой 3 отмечена кладовая. Из кладовой можно пройти в спальню, отмеченную цифрой 4, а из нее в лоджию, которая отмечена на плане цифрой 5. Гостиная, как самое большое помещение, отмечена цифрой 6, кухня  — цифрой 7 и еще одна лоджия под цифрой 8.'
            ans1='2346'
            task2='Плитка для пола размером 40 см на 40 см продается в упаковках по 12 штук. Сколько упаковок плитки понадобится, чтобы выложить пол санузла?'
            how2='Пол санузла является прямоугольником со сторонами 2 м и 2,4 м. Укладывая плитки в шесть рядов по 5 штук в ряду, пол можно замостить полностью. Таким образом, понадобится 30 плиток, то есть 3 упаковки.'
            ans2='3'
            task3='Найдите площадь санузла. Ответ дайте в квадратных метрах.'
            how3='Санузел является прямоугольником со сторонами 2 м и 2,4 м, поэтому его площадь составляет 2 * 2,4 = 4,8 м^2.'
            ans3='4,8'
            task4='На сколько процентов площадь коридора больше площади кладовой?'
            how4='Площадь коридора равна 24 * 0,4 * 5 * 0,4 + 5 * 0,4 * 1 * 0,4 = 20 м^2.
            Аналогично площадь кладовой равна 4 * 0,4 * 5 * 0,4 = 3,2 м^2. Таким образом, площадь коридора больше площади кладовой на (20 - 3,2) / 3,2 * 100% = 525%'
            ans4='525'
            task5='В квартире планируется установить стиральную машину. Характеристики стиральных машин, условия подключения и доставки приведены в таблице. Планируется купить стиральную машину с фронтальной загрузкой вместимостью не менее 6 кг.Сколько рублей будет стоить наиболее дешевый подходящий вариант вместе с подключением и доставкой?'
            how5='Наиболее дешевый подходящий вариант — модель З, ее стоимость вместе с подключением и доставкой составит 20 000 + 6300 + 20 000 * 0,15 = 29 300 руб.'     
            ans5='29 300'
        />
    )
}