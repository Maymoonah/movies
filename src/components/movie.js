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
										{
											item.Title.length < 15 ? <h6 className="list-item col-md-4">{item.Title}</h6> : 
											<h6 className="movieTitle">{item.Title.substring(0, 15) + '...'}</h6>
										}
										{
											item.Poster === "N/A" ? <img src="https://dummyimage.com/200x350&text=Picture+Not+Available" /> :	
											<img src={item.Poster} alt={item.Title}/>
										}
										
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