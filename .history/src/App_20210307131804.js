import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            robots: robots,
            searchfield:''
        }

    }

    onSearchChange(event){
        console.log(event);
    }

    render(){
        return(
            <div className="tc">
            <h1 >RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={robots}/>
            </div>
        );
    }
}
export default App;