import React from "react";
import { Theory } from "../theory";
import stove from '../../assets/stove.png';
import stove1 from '../../assets/stove1.png';
import stove5 from '../../assets/stove5.png';

export const Stove = () => {
  return (
    <Theory
    taskImage={stove}
    src1={stove1}
    src5={stove5}
      title="Печь"
      taskMain="Хозяин дачного участка строит баню с парным отделением. Парное отделение имеет размеры: длина 3,5 м, ширина 2,2 м, высота 2 м. Окон в парном отделении нет, для доступа внутрь планируется дверь шириной 60 см, высота дверного проема 1,8 м. Для прогрева парного отделения можно использовать электрическую или дровяную печь. В таблице представлены характеристики трех печей.Для установки дровяной печи дополнительных затрат не потребуется. Установка электрической печи потребует подведения специального кабеля, что обойдется в 6500 руб."
      task1="Установите соответствие между объемами помещения и номерами печей, для которых данный объем является наибольшим для отопления помещений. Заполните таблицу, в бланк ответов перенесите последовательность трех цифр без пробелов, запятых и других дополнительных символов."
      how1="Из таблицы видно, что наибольший объем для первой печи  — 12, для второй  — 16, а для третьей  — 15."
      ans1="132"
      task2="Найдите объем парного отделения строящейся бани. Ответ дайте в кубических метрах."
      how2="Объем парного отделения может быть вычислен по формуле:  где a  — ширина, b  — длина, с  — высота. Имеем: V = 3,5 * 2,2 * 2 = 15,4 м^3"
      ans2="15,4"
      task3="Во сколько рублей обойдется покупка электрической печи с установкой и доставкой, если доставка печи до дачного участка будет стоить 800 рублей?"
      how3="Вычислим стоимость электрической печи: 15 000 + 800 + 6500  =  22 300 рублей."
      ans3="22300"
      task4="На дровяную печь, масса которой 48 кг, сделали скидку 10%. Сколько рублей стала стоить печь?"
      how4="Вычислим сколько стала стоить печь массой 48 кг: 19500 − 19500 · 0,1  =  19500 − 1950  =  17 550."
      ans4="17 550"
      task5="Хозяин выбрал дровяную печь (рис. 1). Чертеж передней панели печи показан на рисунке 2.Печь снабжена кожухом вокруг дверцы топки. Верхняя часть кожуха выполнена в виде арки, приваренной к передней стенке печки по дуге окружности с центром в середине нижней части кожуха (см. рис. 2). Для установки печки хозяину понадобилось узнать радиус закругления арки R. Размеры кожуха в сантиметрах показаны на рисунке. Найдите радиус закругления арки в сантиметрах."
      how5="Проведем радиус как показано на рисунке. Тогда AC  =  30, так как точка С середина по условию. Тогда имеем треугольник ABC  — прямоугольный. По теореме Пифагора найдем радиус"
      ans5="50"
    />
  );
};
