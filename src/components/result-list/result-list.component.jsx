import React from 'react';
import './result-list.styles.scss';

const ResultList = () => (

    <div className='result-list'>
            <div className='result-info'>
                <div className='result-info__image'></div>
                <div className='result-info__name'>Rick</div>
            </div>
            <div className='result-status'>
                <div className='result-status__indicator'></div>
                <div className='result-status__text'>Alive</div>
            </div>
        </div>
);

export default ResultList;