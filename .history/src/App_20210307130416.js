import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

const App=()=>{
    return(
        <>
        <h1 className="tc">RoboFriends</h1>
        <SearchBox/>
        <CardList robots={robots}/>
        </>
    );
}
export default App;