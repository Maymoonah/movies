import React, { Component } from 'react';

class Search extends React {
	
	state = {
		word: ''
	}

	getWord = (e) => {
		this.setState({word: e.target.value});
	}

	render() {
		return (
			<div><input type="text" name="wordSearch" onChange={getWord}/></div>
		);
	}	
}

export default Search;