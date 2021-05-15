import React, { useEffect, useState } from 'react';
import Movie from './components/movie';



const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=12c713a5fea488b7e00ffd0f5315f814&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";



const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=12c713a5fea488b7e00ffd0f5315f814&language=en-US&page=1&include_adult=false&query=";



function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {

        fetch(FEATURED_API)
            .then((res) => res.json())
            .then((data) => {

                setMovies(data.results);
            });
    }, []);



    const handleOnSubmit = (e) => {
        e.preventDefault();
        fetch(SEARCH_API + searchTerm)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data.results);
            })
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }


    return ( < >
        <
        header >
        <
        h1 className = 'header-name' > My Movies < /h1> <
        form onSubmit = { handleOnSubmit } >
        <
        input className = 'search'
        type = 'text'
        placeholder = 'Search...'
        value = { searchTerm }
        onChange = { handleOnChange }
        /> < /
        form > < /header > < div className = 'movie-container' >


        {

            movies.map((movie) =>
                <
                Movie key = { movie.id } {...movie }
                / > )
            } < /div> </ >
        );
    }


    export default App;