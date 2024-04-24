import React from "react";
import { Card } from "./card";
import { SwiperSection } from "./swiper";
import areaIcon from "../assets/areaIcon.png";
import flatIcon from "../assets/flatIcon.png";
import paperIcon from "../assets/paperIcon.png";
import stoveIcon from "../assets/stoveIcon.png";
import tarifIcon from "../assets/tarifIcon.png";
import tireIcon from "../assets/tireIcon.png";
import planIcon from "../assets/planIcon.png";
import { Link } from "react-scroll";

export const Main = () => {
  return (
    <div className="main">
      <h1 className="main__title">
        Практико-ориентированные задачи из ОГЭ по математике
      </h1>
      <p className="main__text">
        Одним из эффективных способов развития математической грамотности
        являются практико-ориентированные задачи. Это задачи, содержание которой
        раскрывает приложения математики в окружающей нас действительности.
      </p>
      <Link
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        activeClass="active"
        to="main__taskTitle"
      >
        <button className="main__buttonGo">Перейти к задачам</button>
      </Link>
      <h2 className="main__taskTitle" id={"main__taskTitle"}>
        Виды задач
      </h2>
      <div className="main__taskWrap">
        <Card title="Участок" link="/area" icon={areaIcon} />
        <Card title="План квартиры" link="/flat" icon={flatIcon} />
        <Card title="Листы бумаги" link="/paper" icon={paperIcon} />
        <Card title="Печь" link="/stove" icon={stoveIcon} />
        <Card title="Тарифы" link="/tarif" icon={tarifIcon} />
        <Card title="Шины" link="/tire" icon={tireIcon} />
        <Card title="План местности" link="/plan" icon={planIcon} />
      </div>
      <h2 className="main__titleAbout" id={"main__titleAbout"}>
        Об этом проекте
      </h2>
      <div className="main__aboutUs">
        <div className="main__aboutUs__col">
          <p className="main__aboutUs__col__text">
            OFF - ОГЭ на пять (OGE for five). Проект, представляющий из себя
            сайт для подготовки к ОГЭ по математике по практико-ориентированным
            задачам. <br />
            Этот ресурс абсолютно бесплатен и находится в открытом доступе,
            каждый желающий может посмотреть теорию и испытать свои знания на
            практике!
          </p>
          <button className="main__aboutUs__col__button">Оставить отзыв</button>
        </div>
        <SwiperSection />
      </div>
    </div>
  );
};
