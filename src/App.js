import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Persons/Person';

class App extends Component {
  state = {
      persons: [
        {id:1, name:'Sobin', age:32},
        {id:2, name:'Biji', age:30},
        {id:3, name:'Diya', age:1}
      ],
      otherState: "My Other State",
      showPersons: true
  }

  clickMeHandler = (event, id) => {
      alert('clicked!'+ id);
  }

  togglePersonsViewHandler = () => {
    const currentState = {...this.state};
    this.setState({
      showPersons: !currentState.showPersons
    });    
  }

  nameChangeHandler = (event, id) => {
    // update state
    const persons = [
      ...this.state.persons
    ];

    const personIndex = persons.findIndex((person) => {
        return person.id === id;
    });

    persons[personIndex].name = event.target.value;
    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (event, personIndex) => {

      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({
        persons: persons
      });
  }

  render() {

    const btnStyle = {
      padding: '10px',
      margin:'auto 10px',
      border:'1px solid #000',
      fontWeight: 'bold',
      cursor: 'pointer'
    }

    const persons  = (this.state.showPersons) ? this.state.persons.map((person, index) => {
        return <Person 
        key={person.id} name={person.name} 
        age={person.age} 
        click={(event) => this.clickMeHandler(event, person.id)} 
        change={(event) => this.nameChangeHandler(event,person.id)} 
        delete={(event) => this.deletePersonHandler(event, index)} />
    }) : 'No persons to show!!';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button style={btnStyle} onClick={this.togglePersonsViewHandler}>{(this.state.showPersons) ? 'Hide' : 'Show'}</button>
        <div>
          {persons}
        </div>
      </div>
    );
  }
}

export default App;
