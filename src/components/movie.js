import React from 'react';

const Movie = (props) => {
	return (
		<div className="container">
			<div className="results">
					<h4 className="text-center synonyms">Synonyms</h4>
					{	
						//map through synonyms array and append items to li
						props.movieData.map((item)=> {
							return (
								<li key={item} className="list-item col-md-4">{item}</li>
							)
						})
					}
				</div>
		</div>
	);
}

export default Movie;