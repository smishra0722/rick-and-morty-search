import React from 'react';
import './display-result.styles.scss';
import ResultList from '../result-list/result-list.component';

const DisplayResult = ({characters}) => {
    console.log('hhi', characters);
    return (
        <div className='display-result'>
            {characters?characters.map(
                result => (<div className='result-list' key={result.id}>
                <div className='result-info'>
                    <div className='result-info__image' style={{ backgroundImage: `url(${result.image})`}}></div>
                    <div className='result-info__name'>{result.name}</div>
                </div>
                <div className='result-status'>
                    <div className='result-status__indicator' style={{backgroundColor: `${result.status === 'Alive'? 'green':result.status === 'Dead'? 'red':'cyan'}`}}></div>
                    <div className='result-status__text'>{result.status}</div>
                </div>
            </div>)
            ): 'No data'}
        </div>
    )
};

export default DisplayResult;