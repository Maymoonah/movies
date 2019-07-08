import React, { Component } from 'react';

class Search extends Component {
	
	state = {
		word: ''
	}

	getWord = (e) => {
		this.setState({word: e.target.value});
	}

	render() {
		return (
			<div><input type="text" name="wordSearch" onChange={this.getWord}/></div>
		);
	}	
}

export default Search;