import React, { useState} from 'react';
import API from '../../utils/API';
import SearchResultList from '../SearchResultList'
function Search() {
    const [searchTitle, setSearchTitle] = useState('');
    const [searchResultList, setSearchResultList] = useState('');

    function handleSearchChange(event) {
        const { value } = event.target;
        setSearchTitle(value);
    }

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
                <input type='search' onChange={handleSearchChange} placeholder='Search by Name'/>
                <button disabled={!searchTitle} onClick={getTitle} type='submit'>Submit</button>
            </div>
            <SearchResultList searchResultList={searchResultList}/>
        </div>
    )
}

export default Search;