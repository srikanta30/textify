import React from 'react';
import { searchText, useTextDispatch, useTextState } from '../../context';

const SearchBar = () => {

const {search, text} = useTextState();
const dispatch = useTextDispatch();

 const handleSearch = (e: any) => {
    searchText(dispatch, e.target.value);
 };

  return (
    <React.Fragment>
    <div>
    <div className='search-box'>
        <input type="text" placeholder={!text ? "Please Upload A File To Search..." : "Search Text Here..."} onChange={handleSearch} value={search} disabled={text ? false : true}/>
    </div>
    </div>
    </React.Fragment>
  )
}

export default SearchBar