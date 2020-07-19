import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: "key01", name: "Pallavi", age: "19" },
      { id: "key02", name: "Sumer", age: "27" },
      { id: "key03", name: "palmer", age: "5" }
    ],
    showPersons: false
  }

  // switchName = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: "Pallavi", lastname: newName, age: "19" },
  //       { name: "Sumer", lastname: "Gharat", age: "27" },
  //       { name: "palmer", age: "5" }
  //     ]
  //   })
  // }

  nameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  }
  deletePersonHandler = (personIndex) => {
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }



  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      marginBottom: "1%"
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} changed={(event) => this.nameChanged(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      )
      style.backgroundColor = "red";
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }
    return (
      <div className={styles.App}>
        <h1>Hey, This is my React App Demo.</h1>
        <p className={classes.join(" ")}>This is really workingg, hurray..!!!</p>
        <button onClick={this.togglePersonsHandler} style={style}>SHOW PERSONS</button>
        {/* { this.state.showPersons ? */}
        {persons}
        {/* : null } */}
      </div>
    );
  }
}

export default App;
