import React from 'react';
import './homepage.styles.scss';

import Search from '../../components/search/search.component';
import DisplayResult from '../../components/display-result/display-result.component';


//Redux import
import {storeCharactersAsync} from '../../redux/characters/characters.action';
import {connect} from 'react-redux';


class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    componentDidMount() {
        const {storeCharactersAsync} = this.props;
        storeCharactersAsync();
      }
    handleChange = (e) => {
        const {storeCharactersAsync} = this.props;
        this.setState({value: e.target.value});
        storeCharactersAsync(this.state.value);
    }
    render() {
        const {characters} = this.props;
        console.log(characters);
        console.log('helolo', characters.characters.results)
        return(
            <div className='homepage' handleChange={this.handleChange}>
                <h1> Rick and Morty Search API </h1>
                <Search handleChange={this.handleChange} value={this.state.value} />
                <DisplayResult characters={characters.characters.results}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    characters: state.characters
});

const mapDispatchToProps = (dispatch) => ({
    storeCharactersAsync: (name) => dispatch(storeCharactersAsync(name))
});
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);




