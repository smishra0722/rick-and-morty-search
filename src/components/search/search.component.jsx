import React from 'react';
import './search.styles.scss';



const Search = ({handleChange, value}) => {
        return(
            <div className='search-bar'>
                <input type='text' placeholder='Enter character to search' value={value} onChange={(e) => handleChange(e)}></input>
            </div>
        )
} 

export default Search;