import React, { useEffect } from "react";
import { Theory } from "../theory";
import area from "../../assets/area.jpg";
import area1 from "../../assets/area1.png";
import area2 from "../../assets/area2.jpg";
import area3 from "../../assets/area3.jpg";
import area4 from "../../assets/area4.jpg";
import area5 from "../../assets/area5.png";

export const Area = () => {
  
  return (
    <Theory
      title="Участок"
      src1={area1}
      src2={area2}
      src3={area3}
      src4={area4}
      src5={area5}
      taskImage={area}
      taskMain="На плане изображено домохозяйство по адресу: с. Авдеево, 3-й Поперечный пер., д. 13 (сторона каждой клетки на плане равна 2 м). Участок имеет прямоугольную форму. Выезд и въезд осуществляются через единственные ворота.
      При входе на участок справа от ворот находится баня, а слева – гараж, отмеченный на плане цифрой 7. Площадь, занятая гаражом, равна 32 м2.
      Жилой дом находится в глубине территории. Помимо гаража, жилого дома и бани, на участке имеется сарай (подсобное помещение), расположенный рядом с гаражом, и теплица, построенная на территории огорода (огород отмечен цифрой 2). Перед жилым домом имеются яблоневые посадки.
      Все дорожки внутри участка имеют ширину 1 м и вымощены тротуарной плиткой размером 1м×1м. Между баней и гаражом имеется площадка площадью 64 м2, вымощенная такой же плиткой.
      К домохозяйству подведено электричество. Имеется магистральное газоснабжение.
      "
      task1="Для объектов, указанных в таблице, определите, какими цифрами они обозначены на плане. Заполните таблицу, в бланк ответов перенесите последовательность четырёх цифр."
      how1="Чтобы узнать, где что находится, надо подписать названия объектов, обозначенных цифрами.
      Изначально известно, что гараж слева от ворот при входе, баня — справа от ворот при входе. Значит, баня обозначена цифрой 6. Далее в условии говорится, что сарай находится рядом с гаражом, то есть в близости с ним. Рядом находится только здание под цифрой 4. Значит, сарай на плане обозначен цифрой 4. По условию огород обозначается цифрой 2 или 2-мя морковками, и теплица находится внутри огорода. Значит, теплица будет под номером 1.По условию перед жилым домом имеются яблоневые посадки. Таковые имеются перед зданиями под номерами 3 и 6. Но мы уже выяснили, что под номером 6 баня. Значит, жилой дом обозначается цифрой 3."
      ans1="3461"
      task2="Тротуарная плитка продаётся в упаковках по 4 штуки. Сколько упаковок плитки понадобилось купить, чтобы выложить все дорожки и площадку перед гаражом?"
      how2="На плане участка одна плитка обозначается серым квадратом. По условию требуется узнать, сколько упаковок плитки потребовалось на площадку и все дорожки.
      Нам известно, что в одной упаковке 4 плитки. Поделим плитку группами по 4 плитки в каждой (1 группа=1 упаковка). Чтобы найти количество всех купленных упаковок, надо еще сложить количество плиток в неполных группах и разделить на 4, по количеству плиток в упаковке. (2 + 2 + 2) : 4 = 6 : 4 = 1,5 упаковки.Так как упаковки покупаются целыми, ответ необходимо округлить до целого числа. Если округлим в меньшую сторону, хозяину не хватить плиток. Значит, надо округлить большую сторону до 2 упаковок, чтобы плиток хватило.
      В итоге получаем 20 + 2 = 22 упаковки."
      ans2="22"
      task3="Найдите площадь, которую занимает жилой дом. Ответ дайте в квадратных метрах."
      how3="Чтобы найти площадь жилого дома, надо сначала выяснить, какой геометрической фигурой он представлен на плане. На плане участка жилой дом представлен в виде многоугольника, у которого все углы прямые.
      Чтобы найти общую площадь такого многоугольника, его надо условно разбить на 2 прямоугольника, проведя условную линию.Таким образом, площадь жилого дома будет состоять из площади прямоугольников ABCE и EFGD (Sдома = SABCE + SEFGD). Формула нахождения площади прямоугольника Sпрям.=a*b, где a — длина прямоугольника, b — его ширина. В плане жилого дома сказано, что сторона клетки равна фактической ширине 2м.
      Найдем ширину и длину сторон прямоугольника ABCE, умножив количество клеток на их фактическую длину. Мы знаем, что противоположные стороны прямоугольника равны.
      Длина = AB = EC = 5 × 2 = 10м, ширина = AE = BC = 3 × 2 = 6м.
      Вычислим площадь прямоугольника ABCE = 6 × 10 = 60 м2.
      Аналогичным способом найдем стороны прямоугольника EFGD и вычислим его площадь.
      Теперь найдем площадь дома, сложив площади прямоугольников.
      S дома = 60 + 8 = 68 м2."
      ans3="68"
      task4="Найдите расстояние от жилого дома до гаража (расстояние между двумя ближайшими точками по прямой) в метрах."
      how4="Чтобы найти расстояние между двумя ближайшими точками по прямой, сначала надо найти эти точки. Для этого надо провести условные прямые по границы каждого здания.
      Точки пересечения, лежащие на углах здания — ближайшие точки. Прямая, соединяющая их — расстоянием от дома до гаража. Теперь мы видим на рисунке, что ближайшее расстояние от гаража до дома обозначено прямой NP. Она же является диагональю прямоугольника MNOP.
      Из свойств диагоналей прямоугольника мы знаем, что диагональ делит прямоугольник на 2 равных прямоугольных треугольника, где
      стороны прямоугольника = катеты треугольника,
      диагональ прямоугольника = гипотенуза треугольника.
      Нам известно, что длина одной клетки равна 2м. На плане длина катетов NO=4 клетки, OP=3 клетки. Далее NP = √42 + 32 = √16 + 9 = √25 = 5 клеток
      NP = 5 × 2 = 10м"
      ans4="10м"
      task5="Хозяин участка планирует устроить в жилом доме зимнее отопление. Он рассматривает два варианта: электрическое или газовое отопление. Цены на оборудование и стоимость его установки, данные о расходе газа, электроэнергии и их стоимости даны в таблице."
      how5="Данный тип задачи решается по следующей формуле:
      (Стоимость оборудования и монтажа газового отопления — Стоимость оборудования и монтажа электрического отопления) ÷ (Стоимость часа газового отопления — Стоимость часа обогрева электрического отопления)  
      Вычислим стоимость оборудования и монтажа, а также стоимость часа обогрева кВт*ч (м3/ч) по каждому оборудованию отдельно.Стоимость оборудования и монтажа (газовое отопление):
      24 000 + 18 280 = 42 280 руб.
      Стоимость среднего расхода (газовое отопление):
      1,2 × 5,6 = 6,72 руб.
      Стоимость оборудования и монтажа (электричество):
      20 000 + 15 000 = 35 000
      Стоимость среднего расхода (электричество):
      5,6 × 3,8 = 21,28 руб.
      Подставим теперь полученные значения в формулу. В данной задаче ответ не может быть отрицательным, поэтому в случая отрицательного ответа его надо умножить на -1.
      (42 280 — 35 000) ÷ (6,72 — 21,28) = 7280 ÷ (-14,56) = — 500 × (-1) = 500 ч"
      ans5="500"
    />
  );
};
