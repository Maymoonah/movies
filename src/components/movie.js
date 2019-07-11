import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Movie = (props) => {
	return (
		<Container>
			<Row>		
				{	
					//poster, title, type, year, imdbID

					//map through synonyms array and append items to li
					props.movieData.map((item)=> {
							return (
								<Col md={3} key={item.ImdbID} className="movieList">
									<div className="col-md-4">
										<h2 className="list-item col-md-4">{item.Title}</h2>
										<img src={item.Poster} alt={item.Title}/>
									</div>
								</Col>
							)
					})
				}
			</Row>
		</Container>
	);
}

export default Movie;