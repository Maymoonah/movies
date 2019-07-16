import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Movie = (props) => {
	return (
		<Container>
			<Row className="row">		
				{	
					//poster, title, type, year, imdbID

					//map through synonyms array and append items to li
					props.movieData.map((item)=> {
							return (
								<Row key={item.ImdbID} className="movieList">
									<Col md={3}>
										{
											item.Title.length < 15 ? <h6 className="list-item col-md-4">{item.Title}</h6> : 
											<h6 className="movieTitle">{item.Title.substring(0, 15) + '...'}</h6>
										}
										{
											item.Poster === "N/A" ? <img src="https://dummyimage.com/200x350&text=Picture+Not+Available" alt="not Available"/> :	
											<img src={item.Poster} alt={item.Title}/>
										}
									</Col>
								</Row>
							)
					})
				}
			</Row>
		</Container>
	);
}

export default Movie;