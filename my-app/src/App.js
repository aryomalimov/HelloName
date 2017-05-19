import React, { Component } from 'react';
import './App.css';
import InputField from './Components/inputField.js';
import AppMessage from './Components/appMessage.js';

class App extends Component {

  state = {
    name: '',
    surname: ''
  };

   nameSurname = {
     name: '',
     surname: ''
   };

  handleNameChange = (el) => {
    this.nameSurname.name = el;
  };

  handleSurnameChange = (el) => {
    this.nameSurname.surname = el;
  };

  handelOnClick = (el) => {
    this.setState({
      name: this.nameSurname.name,
      surname: this.nameSurname.surname
    });
  };

  render() {
    return (
      <div className="App">
          <InputField changerName={ this.handleNameChange }
                      changerSurname={ this.handleSurnameChange }
                      onClicker={ this.handelOnClick}/>
          <AppMessage text={ 'Добрейшего дня, ' + this.state.name + ' ' + this.state.surname }/>
      </div>
    );
  }
}

export default App;
