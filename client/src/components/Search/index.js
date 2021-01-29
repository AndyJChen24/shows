import React, { useState } from 'react';
import API from '../../utils/API';
import SearchResultList from '../SearchResultList'

function Search() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResultList, setSearchResultList] = useState('');

    // This set the movie title the user type to a State Hook
    function handleSearchChange(event) {
        const { value } = event.target;
        setSearchTitle(value);
    }

    // This function makes an API call to put the result in another State Hook
    function getTitle(event){
        event.preventDefault();
        API.getTitle(searchTitle)
            .then((res) =>{
                setSearchResultList(res.data.results);
            })
    }
    return (
        <div>
            <div>
                Search a title: 
                <input type='search' onChange={handleSearchChange} placeholder='Search by Name'/>
                <button disabled={!searchTitle} onClick={getTitle} type='submit'>Submit</button>
            </div>
            <SearchResultList searchResultList={searchResultList}/>
        </div>
    )
}

export default Search;