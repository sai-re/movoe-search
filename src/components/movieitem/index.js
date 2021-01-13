import React from "react";
import styled from 'styled-components';

import * as colors from '../../colors';

export default function MovieItem(props) {
	return (
		// The MovieItemWrapper must be linked to the movie details popup
		<MovieItemWrapper>
			<LeftCont>
				<Poster 
					src={`https://image.tmdb.org/t/p/w185/${ props.poster }`} 
					alt={ props.title } 
				/>
			</LeftCont>

			<RightCont>
				<HeadingCont>
					<Heading>{ props.title }</Heading>

					<RatingCont>
						<Rating>{ props.rating }</Rating>
					</RatingCont>
				</HeadingCont>

				<Genres>genres</Genres>

				<Overview>{ props.overview }</Overview>

				<Release>{ props.release }</Release>
			</RightCont>
		</MovieItemWrapper>
	)
}

const MovieItemWrapper = styled.div`
	display: flex;
	position: relative;
	background-color: white;
	border-radius: 3px;
	padding: 10px;
	margin-top: 15px;
`
const LeftCont = styled.div`
	margin: 10px;
`
const RightCont = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px;
`
const Poster = styled.img`
	width: 100px;

	@media (min-width: 600px) {
		width: auto;
	}
`
const HeadingCont = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-direction: column;
	
	@media (min-width: 600px) {
		flex-direction: row;
		align-items: center;
	}
`
const Heading = styled.h2`
	margin: 0;
	font-size: 1.2rem;
	
	@media (min-width: 600px) {
		font-size: 1.5rem;
	}
`
const RatingCont = styled.div`
	padding: 5px;
	border-radius: 3px;
	background-color: #d9e021;
	margin-top: 10px;
	
	@media (min-width: 600px) {
		margin-top: 0px;
	}
`
const Rating = styled.p`
	color: #ffffff;
`
const Genres = styled.p`
	margin-top: 10px;
	color: ${ colors.secondaryColor };
	font-weight: bold;
`
const Overview = styled.p`
	margin-top: 10px;
	flex-grow: 1;
`
const Release = styled.p`
	margin-top: 20px;
`
