import React, { Component } from 'react';

class Search extends React {
	
	state = {
		word: ''
	}

	render() {
		return (
			<div><input type="text" name="wordSearch"/></div>
		);
	}	
}

export Search default;