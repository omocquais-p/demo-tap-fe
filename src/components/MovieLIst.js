import { Fragment } from "react";

import MovieItem from "./MovieItem";
import NewMovie from "./NewMovie";
import { useState, useEffect, useCallback } from "react";


const MovieList = () => {
    const DUMMY_MOVIES = [{'name': 'alligator', 'title': 'movie 1'}];

    const [movies, setMovies] = useState(DUMMY_MOVIES);
    const [isLoading, setIsLoading] = useState(false);

    const addMovieHandler = (movie) => {
        setMovies((prevMovies) => {
            return [movie, ...prevMovies];
        });

    };

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch('http://api-demo-tap-be.apps.omocquais-demos-tap.calatrava.vmware.com/films/')
        const data = await response.json();
        const transformData = data.map(movieData => {
            return {
                'name': movieData.director,
                'title': movieData.title
            }
        });
        console.log('transformData:');
        console.log(transformData);

        setMovies(transformData);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    return(
        <Fragment>
                <h2>Fetch Movies</h2>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
                <h2>Add New Movie</h2>
                <NewMovie onAddMovie={addMovieHandler}/>
                <h1>Movies List</h1>
                <ol>
                    {!isLoading && movies.map((movie, index) => <MovieItem key={index} movie={movie}/>)}
                    {isLoading && <p>Loading ...</p>}
                </ol>
        </Fragment>
    )

}

export default MovieList;
