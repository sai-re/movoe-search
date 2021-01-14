import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
				keyword: '',
				year: 0,
				results: [],
				movieDetails: null,
				totalCount: 0,
				genreOptions: [],
				ratingOptions: [
					{ id: 7.5, name: 7.5 },
					{ id: 8, name: 8 },
					{ id: 8.5, name: 8.5 },
					{ id: 9, name: 9 },
					{ id: 9.5, name: 9.5 },
					{ id: 10, name: 10 }
				],
				languageOptions: [
					{ id: 'GR', name: 'Greek' },
					{ id: 'EN', name: 'English' },
					{ id: 'RU', name: 'Russian' },
					{ id: 'PO', name: 'Polish' }
				]
			};
	}

	// Write a function to preload the popular movies when page loads & get the movie genres
	async loadPopularMovies() {
		try {
			const movies = await fetcher.getPopularMovies();
			const genres = await fetcher.getMovieGenres();
			
			this.setState({ 
				results: movies.data.results, 
				totalCount: movies.data.results.length,
				genreOptions: genres.data.genres
			});
		} catch(err) {
			throw new Error(err);
		}
	}
	

	// Write a function to get the movie details based on the movie id taken from the URL.

	async searchMovies (keyword, year) {
		// Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
	}

	componentDidMount() {
		this.loadPopularMovies();
	}

	render () {
		const { genreOptions, languageOptions, ratingOptions, totalCount, results, movieDetails } = this.state;

		return (
			<DiscoverWrapper>
				<MobilePageTitle>Discover</MobilePageTitle>

				<MovieFilters>
					<SearchFilters 
						genres={ genreOptions } 
						ratings={ ratingOptions }  
						languages={ languageOptions }
						searchMovies={ (keyword, year) => this.searchMovies(keyword, year) }
					/>
				</MovieFilters>

				<MovieResults>
					{ totalCount > 0 && <TotalCounter>{ totalCount } results</TotalCounter>}

					<MovieList 
						movies={ results || [] }
						genres={ genreOptions || [] }
					/>
					{/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
				</MovieResults>
			</DiscoverWrapper>
		)
	}
}

const DiscoverWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 60px 10px;
	
	@media (min-width: 900px) {
		flex-direction: row;
		padding: 60px 15px;
	}
	
	@media (min-width: 1200px) {
		padding: 60px 35px;
	}
`

const TotalCounter = styled.div`
	font-weight: 900;
`

const MovieResults = styled.div`
	order: 3;
	margin-top: 15px;
	
	@media (min-width: 900px) {
		flex-grow: 3;
		order: 2;
		margin: 7.5px;
		transform: translateY(-35px);
	}
`

const MovieFilters = styled.div`
	order: 2;
	
	@media (min-width: 900px) {
		flex-grow: 1;
		order: 3;
		margin: 7.5px;
	}
`

const MobilePageTitle = styled.header`
	flex-basis: 100%;
	order: 1;
	font-size: 1.6em;
	transform: translate(60px, -45px);

	@media (min-width: 900px) {
		display: none;
	}
`