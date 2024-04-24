import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Theory = ({
  taskImage,
  title,
  src1,
  src2,
  src3,
  src4,
  src5,
  taskMain,
  task1,
  task2,
  task3,
  task4,
  task5,
  how1,
  how2,
  how3,
  how4,
  how5,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
}) => {
  return (
    <div className="theory">
      <div className="theory__row">
        <div className="theory__row__colTitle">
          <h2 className="theory__row__title">Теоритическая часть</h2>
          <h3 className="theory__row__titleName">{title}</h3>
        </div>
        <Link to="/">
          <button className="theory__row__button">Вернуться на главную</button>
        </Link>
      </div>
      <Swiper
        className="theory__swiper"
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="theory__swiper__slide">
           <span className="theory__swiper__first__taskMainName">Задание</span>
           <img src={taskImage} alt="" className="theory__swiper__first__image"/>
           <p className="theory__swiper__first__task">{taskMain}</p>
        </SwiperSlide>
        <SwiperSlide className="theory__swiper__slide">
          <span className="theory__swiper__num">Задание 1/5</span>
          <p className="theory__swiper__task">{task1}</p>
          {src1 && <img src={src1} alt="" className="theory__swiper__image" />}
          <p className="theory__swiper__how">{how1}</p>
          <span className="theory__swiper__answer">Ответ: {ans1}</span>
        </SwiperSlide>
        <SwiperSlide className="theory__swiper__slide">
          <span className="theory__swiper__num">Задание 2/5</span>
          <p className="theory__swiper__task">{task2}</p>
          {src2 && <img src={src2} alt="" className="theory__swiper__image" />}
          <p className="theory__swiper__how">{how2}</p>
          <span className="theory__swiper__answer">Ответ: {ans2}</span>
        </SwiperSlide>
        <SwiperSlide className="theory__swiper__slide">
          <span className="theory__swiper__num">Задание 3/5</span>
          <p className="theory__swiper__task">{task3}</p>
          {src3 && <img src={src3} alt="" className="theory__swiper__image" />}
          <p className="theory__swiper__how">{how3}</p>
          <span className="theory__swiper__answer">Ответ: {ans3}</span>
        </SwiperSlide>
        <SwiperSlide className="theory__swiper__slide">
          <span className="theory__swiper__num">Задание 4/5</span>
          <p className="theory__swiper__task">{task4}</p>
          {src4 && <img src={src4} alt="" className="theory__swiper__image" />}
          <p className="theory__swiper__how">{how4}</p>
          <span className="theory__swiper__answer">Ответ: {ans4}</span>
        </SwiperSlide>
        <SwiperSlide className="theory__swiper__slide">
          <span className="theory__swiper__num">Задание 5/5</span>
          <p className="theory__swiper__task">{task5}</p>
          {src5 && <img src={src5} alt="" className="theory__swiper__image" />}
          <p className="theory__swiper__how">{how5}</p>
          <span className="theory__swiper__answer">Ответ: {ans5}</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
