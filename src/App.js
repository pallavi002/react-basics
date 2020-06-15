import React, { Component, createElement } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
      { name: "Pallavi", lastname: "Lodhi", age: "19" },
      { name: "Sumer", lastname: "Gharat", age: "27" },
      { name: "palmer", age: "5" }
    ]
  }
  // persons = [
  //   { name: "Pal", age: "19"},
  //   { name: "Sum"  , age: "27" },
  //   { name: "alum" , age: "5" }
  // ]

  switchName = (newName) => {
    this.setState({
      persons: [
        { name: "Pallavi", lastname: newName, age: "19" },
        { name: "Sumer", lastname: "Gharat", age: "27" },
        { name: "palmer", age: "5" }
      ]
    })
  }

  nameChanged = (event) => {
    this.setState({
      persons: [
        { name: "Pallavi", lastname: "Lodhi", age: "19" },
        { name: event.target.value , lastname: "Gharat", age: "27" },
        { name: "palmer", age: "5" }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "#ccd",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
    return (
      <div className="App">
        <h1>Hey, This is my React App Demo.</h1>
        <button onClick={this.switchName.bind(this, "Pallss")} style={style}>Switch the name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} lastname={this.state.persons[0].lastname} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
        changed = { this.nameChanged }
        click={this.switchName.bind(this, "Gharat")}>I am her Boyfriend.</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
