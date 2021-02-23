import React from 'react';
import './card.styles.scss';

export const Card = ({image, gender, name, origin, species, status, location}) => {
    console.log('gend',gender);
    return (
    <div className='card'>
        <div className='card-top'>
            <div className='card-top__image'></div>
            <div className='card-top__info'>{name}</div>
        </div>
        <div className='card-bottom'>
            <div className='card-bottom__cont'>
                <span className='gender'>{gender}</span>
                <span className='location'>{location}</span>
            </div>
            <div className='card-bottom__cont'>
                <span className='species'>{species}</span>
                <span className='origin'>{origin}</span>
            </div>
        </div>
    </div>
)};