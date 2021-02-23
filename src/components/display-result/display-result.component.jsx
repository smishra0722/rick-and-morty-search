import React from 'react';
import './display-result.styles.scss';
import ResultList from '../result-list/result-list.component';

import {connect} from 'react-redux';
import {cardToggle} from '../../redux/characters/characters.action';
import {storeCardData} from '../../redux/card/card.action';
//Component import
import Card from '../card/card.component';



const displayCard = (id, isCardToggle, result) => {
    return (isCardToggle? <Card result={result} />: '')
}

class DisplayResult extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            gender: '',
            location: '',
            species: '',
            origin: ''
        }
    }
    handleClick(result) {
        const {cardToggle, storeCardData} = this.props;
        const {name, gender, location, species, origin} = result;
        cardToggle();
        this.setState({name, gender, location, species, origin}, () => storeCardData(this.state));
    }    
 render() {
     console.log(this.state);
        const {characters, cardToggle, isCardToggle, storeCardData, cardData} = this.props;
        return (
            <div className='display-result'>
                {characters?characters.map(
                    result => (<div className='result-list' key={result.id} onClick={() => this.handleClick(result)}>
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
                {isCardToggle?cardData.data[0]? <Card />: 'bye': ''}
            </div>
        )
    }  
};

const mapStateToProps = (state) => ({
    isCardToggle: state.characters.cardToggle,
    cardData: state.card
});
const mapDispatchToProps = (dispatch) => ({
    cardToggle: () => dispatch(cardToggle()),
    storeCardData: (data) => dispatch(storeCardData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(DisplayResult);