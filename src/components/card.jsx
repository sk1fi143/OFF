import React from 'react'
import { Link } from "react-router-dom";

export const Card = ({icon, title, link}) => {
  return (
    <div className='card'>
        <img src={icon} alt='' className='card__icon' />
        <h5 className='card__title'>{title}</h5>
        <Link to={link}><button className='card__button'>Перейти к задаче</button></Link>
    </div>
  )
}
