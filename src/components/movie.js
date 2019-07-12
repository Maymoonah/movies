import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const Movie = (props) => {
	return (
		<Container>
			<Row className="row">		
				{	
					//poster, title, type, year, imdbID

					//map through synonyms array and append items to li
					props.movieData.map((item)=> {
							return (
								<Col md={3} key={item.ImdbID} className="movieList">
									<Card className="movieCard">
										{
											item.Title.length < 15 ? <h6 className="list-item col-md-4">{item.Title}</h6> : 
											<h6 className="movieTitle">{item.Title.substring(0, 15) + '...'}</h6>
										}
										{
											item.Poster === "N/A" ? <Card.Img src="https://dummyimage.com/200x350&text=Picture+Not+Available" alt="not Available"/> :	
											<img src={item.Poster} alt={item.Title}/>
										}
										
									</Card>
								</Col>
							)
					})
				}
			</Row>
		</Container>
	);
}

export default Movie;