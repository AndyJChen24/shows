import React from 'react';

function SearchResult( { searchResult } ) {
    
    return(
        <div>
            <p>{searchResult.title}</p>
            <img alt={searchResult.title} src={searchResult.image} width='240'/>
        </div>
    )
}

export default SearchResult;