import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends React.Component{

    constructor(){
        super()
        this.state={
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>this.setState({robots:users}))
    }   

    onSearchChange=(event)=>{
        this.setState({
            searchfield:event.target.value
        });
    }

    render(){
        const filteredrobots=this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if(this.state.robots===0){
            return <div className="loader"></div>;
        }else{
            return(
            <div className="tc">
            <h1 className="bg-light-blue pa3 ">RoboFriends</h1>
            <div>
                <a href="https://yashrajverma.github.io/BackgroundGenerator/" target="blank">Check Out my another work here</a>
            </div>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredrobots}/>
            </div>
        );
        }
        
    }
}
export default App;