import React, { Component } from 'react';
import Movie from './movie';

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

	    //fetch call to Urban dictionary api
	    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${this.state.word}`, {
		      headers : {
		      "X-RapidAPI-Host": "movie-database-imdb-alternative.p.rapidapi.com",
		      "X-RapidAPI-Key": API_KEY
		      }
		    }
	    )
	    .then(response => response.json())
	    .then(data => this.setState({ data: data.Search }))

	    //add error handling
	}
	
	render() {
		return (
			<div className="container">
				<div className="text-center searchBar" >
					<input type="text" name="searchWord" onChange={this.getWord} />
					<button type="submit" className="btn-info" onClick={this.onSubmit}>Search</button>
				</div>
				<Movie movieData={this.state.data}/>
			</div>
		);
	}	
}

export default Search;