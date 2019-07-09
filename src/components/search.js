import React, { Component } from 'react';

class Search extends Component {
	
	state = {
		word: '',
		data: []
	}

	//function to set state.word to user input.
	getWord = (e) => {
		this.setState({word: e.target.value});
	}

	//fetch api on submit
	onSubmit = (e) => {
		const API_KEY = 'c617e14926msh1b32a202714298ap130120jsn5a3fce0740f8';

	    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/typeOf`, {
		      headers : {
		      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
		      "X-RapidAPI-Key": API_KEY
		      }
		    }
	    )
	    .then(response => response.json())
	    .then(data => this.setState({ data: data.typeOf })); 

	    fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${this.state.word}`, {
		      headers : {
		      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
		      "X-RapidAPI-Key": API_KEY
		      }
		    }
	    )
	    .then(response => response.json())
	    .then(data => console.log(data)); 
	}
	
	render() {
		return (
			<div className="container">
				<div className="text-center" >
					<input type="text" name="searchWord" onChange={this.getWord} />
					<button type="submit" className="btn-info" onClick={this.onSubmit}>Search</button>
				</div>
				<div className="results">
					<h4 className="text-center synonyms">Synonyms</h4>
					{	
						//map through data array and append items to li
						this.state.data.map((item)=> {
							return (
								<li key={item} className="list-item">{item}</li>
							)
						})
					}
				</div>
			</div>
			
		);
	}	
}

export default Search;