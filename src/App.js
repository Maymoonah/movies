import React, { Component } from 'react';

class App extends Component {

    state = {
      data: []
    }

  componentDidMount() {
      const API_KEY = 'c617e14926msh1b32a202714298ap130120jsn5a3fce0740f8';

      fetch('https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf', {
          headers : {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key": API_KEY
          }
        }
      )
      .then(response => response.json())
      .then(data => console.log(data));

      
    }

  render() {
    return (
      <div>
  
      </div>
    );
  }
}

export default App;

