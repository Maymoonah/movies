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
								<Col lg={3} md={4} xs={6} key={item.ImdbID} className="movieList">
									<h6 className="movieTitle">{item.Title}</h6>

									{
										// check if image is available, if not, get image from dummyimage website
										item.Poster === "N/A" ? <img src="https://dummyimage.com/200x350&text=Picture+Not+Available" alt="not Available"/> :	
										<img src={item.Poster} alt={item.Title}/>
									}
								</Col>
							)
					})
				}
			</Row>
		</Container>
	);
}

export default Movie;