import React from "react";

export const SwiperCard = ({ name, text }) => {
  return (
    <div className="SwiperCard">
      <div className="SwiperCard__row">
        <div className="SwiperCard__row__name">
          <svg viewBox="0 0 24 24" fill="none" stroke="#bbb">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                cx="12"
                cy="9"
                r="3"
                stroke="#bbb"
                strokeWidth="1.5"
              ></circle>{" "}
              <path
                d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                stroke="#bbb"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#bbb"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
          <span>Илья Скворцов</span>
        </div>
        <div className="SwiperCard__row__stars">
          <svg
            width="26.629639"
            height="25.326233"
            viewBox="0 0 26.6296 25.3262"
            fill="none"
          >
            <defs />
            <path
              id="Star 1"
              d="M13.3148 0L10.1713 9.6734L0 9.67377L8.22858 15.6526L5.08582 25.3262L13.3148 19.348L21.5438 25.3262L18.4011 15.6526L26.6296 9.67377L16.4583 9.6734L13.3148 0Z"
              fill="#5821F8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          <svg
            width="26.629639"
            height="25.326233"
            viewBox="0 0 26.6296 25.3262"
            fill="none"
          >
            <defs />
            <path
              id="Star 1"
              d="M13.3148 0L10.1713 9.6734L0 9.67377L8.22858 15.6526L5.08582 25.3262L13.3148 19.348L21.5438 25.3262L18.4011 15.6526L26.6296 9.67377L16.4583 9.6734L13.3148 0Z"
              fill="#5821F8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          <svg
            width="26.629639"
            height="25.326233"
            viewBox="0 0 26.6296 25.3262"
            fill="none"
          >
            <defs />
            <path
              id="Star 1"
              d="M13.3148 0L10.1713 9.6734L0 9.67377L8.22858 15.6526L5.08582 25.3262L13.3148 19.348L21.5438 25.3262L18.4011 15.6526L26.6296 9.67377L16.4583 9.6734L13.3148 0Z"
              fill="#5821F8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          <svg
            width="26.629639"
            height="25.326233"
            viewBox="0 0 26.6296 25.3262"
            fill="none"
          >
            <defs />
            <path
              id="Star 1"
              d="M13.3148 0L10.1713 9.6734L0 9.67377L8.22858 15.6526L5.08582 25.3262L13.3148 19.348L21.5438 25.3262L18.4011 15.6526L26.6296 9.67377L16.4583 9.6734L13.3148 0Z"
              fill="#5821F8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
          <svg
            width="26.629639"
            height="25.326233"
            viewBox="0 0 26.6296 25.3262"
            fill="none"
          >
            <defs />
            <path
              id="Star 1"
              d="M13.3148 0L10.1713 9.6734L0 9.67377L8.22858 15.6526L5.08582 25.3262L13.3148 19.348L21.5438 25.3262L18.4011 15.6526L26.6296 9.67377L16.4583 9.6734L13.3148 0Z"
              fill="#5821F8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </div>
      <p className="SwiperCard__text">Отличный проект, который направлен на улучшение результатов обучающихся 9 классов в решении 1-5 заданий в ОГЭ по математике. Он полностью бесплатен и очень удобен! Рекомендую!</p>
    </div>
  );
};
