import React from 'react';

function SearchResult( { searchResult } ) {
    return(
        <div>
            <p>{searchResult.title}</p>
        </div>
    )
}

export default SearchResult;