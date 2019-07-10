import React from 'react';

const Movie = (props) => {
	return (
		<div className="container">
			<h4 className="text-center synonyms">Synonyms</h4>
			{	
				//poster, title, type, year, imdbID

				//map through synonyms array and append items to li
				props.movieData.map((item)=> {
						return (
							<div className="movieList row">
								<div className="col-md-4">
									<li key={item.ImdbID} className="list-item col-md-4">{item.Title}</li>
									<img src={item.Poster} alt={item.Title}/>
								</div>
							</div>
						)
				})
			}
		</div>
	);
}

export default Movie;