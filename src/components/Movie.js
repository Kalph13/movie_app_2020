import React from "react";
import propTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ title, year, rating, summary, poster, genres }) {
    return(
        <div className="movie">
            <Link to={{pathname: "/movie-detail", state: { year, title, summary, poster, genres}}}>
                <img src={poster} alt={title} title={title}></img>
                <div className="movie_data">
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie_genre">{genre}</li>
                            );
                        })}
                    </ul>
                    <p className="movie_rating">{rating}/10</p>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    rating: propTypes.number,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;