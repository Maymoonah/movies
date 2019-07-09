import React, { Component } from 'react';

class Search extends Component {
	
	state = {
		word: '',
		data: []
	}

	getWord = (e) => {
		this.setState({word: e.target.value});
		console.log(this.state.word);

		
		}

	onSubmit = (e) => {
		console.log('clicked')
		const API_KEY = 'c617e14926msh1b32a202714298ap130120jsn5a3fce0740f8';

	    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/typeOf`, {
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
			<div className="text-center" >
				<input type="text" name="searchWord" onKeyUp={this.getWord} />
				<button type="submit" className="btn-info" onClick={this.onSubmit}>Search</button>
			</div>
		);
	}	
}

export default Search;