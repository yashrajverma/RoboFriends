import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    });
  };

  render() {
    const filteredrobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <div className="loader"></div>;
    } else {
      return (
        <div className="tc">
          <h1 className="bg-light-blue pa3 ">RoboFriends</h1>
         
            <a
              href="https://yashrajverma.github.io/BackgroundGenerator/"
              target="blank"
            >
              Check Out my another work here
            </a>
         
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredrobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
