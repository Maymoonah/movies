import React, { Component } from 'react';

class Search extends Component {
	
	state = {
		word: '',
		data: []
	}

	componentDidMount() {

      const API_KEY = 'c617e14926msh1b32a202714298ap130120jsn5a3fce0740f8';

      {!this.state.word ? console.log('Loading...'): fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/typeOf`, {
          headers : {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key": API_KEY
          }
        }
      )
      .then(response => response.json())
      .then(data => console.log(this.state.data));



  }

      
      
    }

	getWord = (e) => {
		//set state.word to the input value only when user presses enter
		if(e.which === 13) {
			this.setState({word: e.target.value});
			console.log(this.state.word);
		}
	}

	render() {
		return (
			<div><input type="text" name="wordSearch" onKeyPress={this.getWord}/></div>
		);
	}	
}

export default Search;