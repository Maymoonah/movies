import React, { Component } from 'react';

class Search extends Component {
	
	state = {
		word: '',
		synonyms: [],
		data: []
	}

	//function to set state.word to user input.
	getWord = (e) => {
		this.setState({word: e.target.value});
	}

	//fetch api on submit
	onSubmit = (e) => {
		const API_KEY = 'c617e14926msh1b32a202714298ap130120jsn5a3fce0740f8';

		//fetch call to words api
	    fetch(`https://wordsapiv1.p.rapidapi.com/words/${this.state.word}/typeOf`, {
		      headers : {
		      "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
		      "X-RapidAPI-Key": API_KEY
		      }
		    }
	    )
	    .then(response => response.json())
	    .then(data => this.setState({ synonyms: data.typeOf })); 

	    //fetch call to Urban dictionary api
	    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${this.state.word}`, {
		      headers : {
		      "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com",
		      "X-RapidAPI-Key": API_KEY
		      }
		    }
	    )
	    .then(response => response.json())
	    .then(data => console.log(data))
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
						//map through synonyms array and append items to li
						this.state.synonyms.map((item)=> {
							return (
								<li key={item} className="list-item col-md-4">{item}</li>
							)
						})
					}

					
				</div>
			</div>
			
		);
	}	
}

export default Search;