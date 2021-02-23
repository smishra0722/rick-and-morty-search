import React from 'react';
import './display-result.styles.scss';
import ResultList from '../result-list/result-list.component';

import {connect} from 'react-redux';
import {cardToggle} from '../../redux/characters/characters.action';

//Component import
import {Card} from '../card/card.component';

const DisplayResult = ({characters, cardToggle, isCardToggle}) => {
    console.log('hhi', characters);
    console.log('cardtog', isCardToggle);
    return (
        <div className='display-result' onClick={() => cardToggle()}>
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
                {isCardToggle? <Card result={result} />: ''}
            </div>)
            ): 'No data'}
            
        </div>
    )
};

const mapStateToProps = (state) => ({
    isCardToggle: state.characters.cardToggle
});
const mapDispatchToProps = (dispatch) => ({
    cardToggle: () => dispatch(cardToggle())
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResult);