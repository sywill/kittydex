import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      kitties: [],
      filterField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => this.setState({ kitties: users }));
  }

  handleChange = (e) => {
    this.setState({ filterField: e.target.value });
  };

  render() {
    const { kitties, filterField } = this.state;
    const filteredKitties = kitties.filter((kitty) =>
      kitty.name.toLowerCase().includes(filterField.toLowerCase())
    );
    return (
      <div className="App">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <h1>Kitty Rolodex</h1>
        <SearchBox
          placeholder="Search Kitties"
          handleChange={this.handleChange}
        />
        <CardList kitties={filteredKitties}></CardList>
      </div>
    );
  }
}

export default App;
