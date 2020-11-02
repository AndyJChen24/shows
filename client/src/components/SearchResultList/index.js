import react from 'react';
import SearchResult from '../SearchResult'
function SearchResultList( { searchResultList } ){
    return (
        <div>
            <ul>
            {searchResultList && searchResultList.map((searchResult) => (
                <SearchResult key={searchResult.id} searchResult={searchResult}/>
            ))
        }
            </ul>
        </div>
    )
}

export default SearchResultList;