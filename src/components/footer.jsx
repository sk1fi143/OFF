import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__line"></div>
      <div className="footer__row">
        <Link to="/"><div className="header__logo footer-logo">
          <svg
            width="53.535004"
            height="60.000000"
            viewBox="0 0 53.535 60"
            fill="none"
            className="header__logo__icon"
          >
            <defs />
            <path
              id="Vector"
              d="M49.2327 60L9.5661 60C8.66107 60 7.92737 59.2661 7.92737 58.3613L7.92737 4.69849C7.92737 3.7937 8.66107 3.05981 9.5661 3.05981L49.2327 3.05981C51.605 3.05981 53.535 4.98975 53.535 7.36182L53.535 34.2603C53.535 35.1653 52.8011 35.8989 51.8962 35.8989C50.9913 35.8989 50.2575 35.1653 50.2575 34.2603L50.2575 7.36182C50.2575 6.79712 49.7978 6.3374 49.2328 6.3374L11.2049 6.3374L11.2049 56.7224L49.2327 56.7224C49.7978 56.7224 50.2574 56.2627 50.2574 55.6978L50.2574 43.2073C50.2574 42.3022 50.9912 41.5684 51.8961 41.5684C52.801 41.5684 53.5349 42.3022 53.5349 43.2073L53.5349 55.6978C53.5349 58.0701 51.6049 60 49.2327 60Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M11.9487 58.3511L5.58868 58.3511C3.40747 58.3511 1.6391 56.5828 1.6391 54.4016L1.6391 8.63794C1.6391 6.45679 3.40735 4.68848 5.58868 4.68848L11.9488 4.68848L11.9487 58.3511Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M11.9487 59.9897L5.58844 59.9897C2.50702 59.9897 0 57.4829 0 54.4014L0 8.63794C0 5.55664 2.5069 3.04956 5.58844 3.04956L11.9487 3.04956C12.8537 3.04956 13.5874 3.78345 13.5874 4.68823L13.5874 58.3511C13.5875 59.2561 12.8538 59.9897 11.9487 59.9897ZM5.58844 6.32715C4.31427 6.32715 3.27759 7.36377 3.27759 8.63794L3.27759 54.4016C3.27759 55.6758 4.31427 56.7124 5.58844 56.7124L10.3099 56.7124L10.3099 6.32715L5.58844 6.32715Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M33.9247 1.63867L33.9247 19.9314C33.9247 20.2859 34.3003 20.5146 34.6154 20.3518L39.4561 17.8506C39.5924 17.7803 39.7544 17.7803 39.8907 17.8506L44.7314 20.3518C45.0465 20.5146 45.4221 20.2859 45.4221 19.9314L45.4221 1.63867L33.9247 1.63867Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M44.9482 22.0442C44.9482 22.0442 44.9481 22.0442 44.9479 22.0442C44.6129 22.0442 44.2776 21.9624 43.9784 21.8079L39.6732 19.5833L35.3674 21.8079C35.0685 21.9624 34.7332 22.0442 34.3981 22.0442C33.2333 22.0442 32.2856 21.0964 32.2856 19.9314L32.2856 1.63867C32.2858 0.733887 33.0196 0 33.9245 0L45.4217 0C46.3266 0 47.0604 0.733887 47.0604 1.63867L47.0604 19.9316C47.0604 20.511 46.8312 21.051 46.4146 21.4521C46.018 21.834 45.4973 22.0442 44.9482 22.0442ZM35.5633 3.27759L35.5633 18.0176L38.7036 16.395C39.2997 16.0869 40.0459 16.0867 40.643 16.3953L43.7829 18.0176L43.7829 3.27759L35.5633 3.27759Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="Vector"
              d="M41.1074 29.4414L23.0809 29.4414C22.1758 29.4414 21.4421 28.7075 21.4421 27.8025C21.4421 26.8977 22.1758 26.1638 23.0809 26.1638L41.1074 26.1638C42.0123 26.1638 42.7461 26.8977 42.7461 27.8025C42.7462 28.7075 42.0125 29.4414 41.1074 29.4414Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
            <path
              id="OFF"
              d="M22.2976 48.728C21.4656 48.728 20.7083 48.568 20.0256 48.248C19.3536 47.928 18.7723 47.496 18.2816 46.952C17.8016 46.3973 17.4283 45.7787 17.1616 45.096C16.895 44.4027 16.7616 43.6933 16.7616 42.968C16.7616 42.2107 16.9003 41.4907 17.1776 40.808C17.4656 40.1147 17.855 39.5013 18.3456 38.968C18.847 38.424 19.4336 37.9973 20.1056 37.688C20.7883 37.368 21.535 37.208 22.3456 37.208C23.167 37.208 23.9136 37.3733 24.5856 37.704C25.2683 38.0347 25.8496 38.4773 26.3296 39.032C26.8096 39.5867 27.183 40.2053 27.4496 40.888C27.7163 41.5707 27.8496 42.2747 27.8496 43C27.8496 43.7467 27.711 44.4667 27.4336 45.16C27.1563 45.8427 26.767 46.456 26.2656 47C25.775 47.5333 25.1883 47.9547 24.5056 48.264C23.8336 48.5733 23.0976 48.728 22.2976 48.728ZM19.0016 42.968C19.0016 43.4587 19.0763 43.9333 19.2256 44.392C19.375 44.8507 19.5883 45.2613 19.8656 45.624C20.1536 45.976 20.5003 46.2587 20.9056 46.472C21.3216 46.6747 21.791 46.776 22.3136 46.776C22.847 46.776 23.3216 46.6693 23.7376 46.456C24.1536 46.232 24.5003 45.9387 24.7776 45.576C25.055 45.2027 25.263 44.792 25.4016 44.344C25.551 43.8853 25.6256 43.4267 25.6256 42.968C25.6256 42.4773 25.5456 42.008 25.3856 41.56C25.2363 41.1013 25.0176 40.696 24.7296 40.344C24.4523 39.9813 24.1056 39.6987 23.6896 39.496C23.2843 39.2827 22.8256 39.176 22.3136 39.176C21.7696 39.176 21.2896 39.288 20.8736 39.512C20.4683 39.7253 20.127 40.0133 19.8496 40.376C19.5723 40.7387 19.359 41.144 19.2096 41.592C19.071 42.04 19.0016 42.4987 19.0016 42.968ZM29.5434 48.648L29.5434 37.288L37.1754 37.288L37.1754 39.224L31.7514 39.224L31.7514 42.152L36.2634 42.152L36.2634 43.944L31.7514 43.944L31.7514 48.648L29.5434 48.648ZM38.7309 48.648L38.7309 37.288L46.3629 37.288L46.3629 39.224L40.9389 39.224L40.9389 42.152L45.4509 42.152L45.4509 43.944L40.9389 43.944L40.9389 48.648L38.7309 48.648Z"
              fill="#5821f8"
              fillOpacity="1.000000"
              fillRule="evenodd"
            />
          </svg>
          <span className="header__logo__title">OGE For Five</span>
        </div></Link>
        <span className="footer__madeBy">Создание сайта: Sk1fi</span>
        <span className="footer__protected">© 2024, Все права защищены</span>
      </div>
    </footer>
  );
};
