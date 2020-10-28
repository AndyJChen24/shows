import React, { useState, useEffect } from 'react';
import API from '../../utils/API';

function Search() {
    const [searchTitle, setSearchTitle] = useState('');

    function handleSearchChange(event) {
        const { value } = event.target;
        setSearchTitle(value);
    }

    function getTitle(event){
        event.preventDefault();
        API.getTitle(searchTitle)
            .then((res) =>{
                console.log(res)
            })
    }
    return (
        <div>
            <input type='search' onChange={handleSearchChange} placeholder='Search by Name'/>
            <button disabled={!searchTitle} onClick={getTitle} type='submit'>Submit</button>
        </div>
    )
}

export default Search;