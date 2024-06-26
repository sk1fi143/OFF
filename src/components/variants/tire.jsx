import React from "react";
import { Theory } from "../theory";
import tire from '../../assets/tire.png';
import tire1 from '../../assets/tire5.png';

export const Tire = () => {
    return(
        <Theory 
        taskImage={tire}
        src1={tire1}
            title='Шины'
            taskMain='Автомобильное колесо, как правило, представляет собой металлический диск с установленной на него резиновой шиной. Диаметр диска совпадает с диаметром внутреннего отверстия в шине.
            Для маркировки автомобильных шин применяется единая система обозначений. Например, 195/65 R15 (рис. 1). Первое число (число 195 в приведенном примере) обозначает ширину шины в миллиметрах (параметр B на рисунке 2). Второе число (число 65 в приведенном примере)  — процентное отношение высоты боковины (параметр H на рисунке 2) к ширине шины, то есть 
            Последующая буква обозначает тип конструкции шины. В данном примере буква R означает, что шина радиальная, то есть нити каркаса в боковине шины расположены вдоль радиусов колеса. На всех легковых автомобилях применяются шины радиальной конструкции.
            За обозначением типа конструкции шины идет число, указывающее диаметр диска колеса d в дюймах (в одном дюйме 25,4 мм). Таким образом, общий диаметр колеса D легко найти, зная диаметр диска и высоту боковины.
            Возможны дополнительные маркировки, обозначающие допустимую нагрузку на шину, сезонность использования, тип дорожного покрытия и другие параметры.
            Завод производит легковые автомобили определенной модели и устанавливает на них колеса с шинами маркировки 165/70 R13.'
            task1='Завод допускает установку шин с другими маркировками. В таблице показаны разрешенные размеры шин.
            Шины какой наименьшей ширины можно устанавливать на автомобиль, если диаметр диска равен 15 дюймам? Ответ дайте в миллиметрах.'
            how1='Из таблицы видно, что при диаметре 15 дюймов наименьшая ширина шины  — 185 мм.'
            ans1='185'
            task2='На сколько миллиметров радиус колеса с шиной маркировки 205/55 R14 больше, чем радиус колеса с шиной маркировки 165/65 R14?'
            how2='Радиус колеса составляет половину диаметра: r = D / 2 = (d + 2H) / 2, причем диаметр d диска у обоих колес одинаковый: d = 14 * 25,4 = 355,6 мм. Найдем высоту боковины H для обоих случаев. Для шины 205/55 R14:
            Общий диаметр колеса  Для шины с маркировкой 165/70 R13, находим вначале диаметр диска:  тогда Для шины 165/65 R14: 100 * (H2 / B2) = 65 <=> H2 = 65 * B2 / 100 <=> H2 = 107,25 мм. Следовательно, r1 - r2 = H1 - H2 = 5,5 мм.'
            ans2='5,5'
            task3='Найдите диаметр колеса автомобиля, выходящего с завода. Ответ дайте в миллиметрах.'
            how3='Общий диаметр колеса D = d + 2H. Для шины с маркировкой 165/70 R13, находим вначале диаметр диска: d = 13 * 25,4 = 330,2 мм, тогда 100 * (H / B) = 70 <=> H = 70 * B / 100 <=> H = 115,5 мм, откуда D = d + 2H = 561,2 мм.'
            ans3='561,2 мм.'
            task4='На сколько миллиметров увеличится диаметр колеса, если заменить колеса, установленные на заводе, колесами с шинами маркировки 195/50 R15?'
            how4='Найдем общий диаметр колеса D = d + 2H для обоих колес. Для шины 165/70 R13 диаметр диска равен 330,2 мм., откуда H1 = 115.5 мм.,
            а тогда D1 = 561,2 мм.
            Для шины 195/50 R15 диаметр диска равен d2 = 381 мм., откуда H2 = 97,5 мм.
            а потому D2 = 576 мм.
            Следовательно, D2 - D1 = 14,8 мм.'
            ans4='14,8 мм.'
            task5='На сколько процентов увеличится пробег автомобиля при одном обороте колеса, если заменить колеса, установленные на заводе, колесами с шинами маркировки 175/60 R14? Результат округлите до десятых.'
            how5='При одном обороте колесо проходит расстояние, равное длине окружности радиусом, равным половине общего диаметра колеса D: C = 2пr = пD. Найдем этот диаметр D = d + 2H для каждого из колес. Для шины с маркировкой 165/70 R13 получаем:  тогда
            а значит,  Для шины с маркировкой 175/60 R14 имеем: 
            откуда 
            Следовательно, расстояние, проходимое за один оборот колеса, увеличилось на 0,8 %.
            '
            ans5='0,8 %.'
        />
    )
}