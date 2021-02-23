import React from 'react';
import './card.styles.scss';

import {connect} from 'react-redux';

class Card extends React.Component {
    render() {
        const {cardData} = this.props;
        console.log(cardData.data[0].origin);
        return(
            <div className='overlay'>
                {cardData.data[0]?<div className='card'>
                <div className='card-top'>
                    <div className='card-top__image' style={{ backgroundImage: `url(${cardData.data[0].image})`}}></div>
                    <div className='card-top__info'>{cardData.data[0].name}</div>
                </div>
                <div className='card-bottom'>
                    <div className='card-bottom__cont'>
                        <span className='gender'>{cardData.data[0].gender}</span>
                        <span className='location'></span>
                    </div>
                    <div className='card-bottom__cont'>
                        <span className='species'>{cardData.data[0].species}</span>
                        <span className='origin'>{cardData.data[0].origin.name}</span>
                    </div>
                </div>
                </div>: ''}
            </div>        
        )
    }
}
const mapStateToProps = (state) => ({
    cardData: state.card
});
export default connect(mapStateToProps)(Card);