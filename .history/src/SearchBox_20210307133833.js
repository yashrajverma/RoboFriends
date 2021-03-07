import React from 'react';
const SearchBox=({searchfield,searchChange})=>{
    return (
        <>
        <input placeholder="Search Robots"
        className="pa3 ba b--green bg-lightest-blue shadow-5"
        type="search"
        onChange={searchChange}
        />
        </>
    );
}
export default SearchBox;