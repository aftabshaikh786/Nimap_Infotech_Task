import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css_Styles/Movie_Details.css";
import Header from "./Header";

const Movie_Details = () => {
    const { id } = useParams(); 
    const [movieDetails, setMovieDetails] = useState(null);
    const [castDetails, setCastDetails] = useState([]);

    useEffect(() => {
        fetchMovieDetails();
        fetchCastDetails();
    }, [id]);

    const fetchMovieDetails = async () => {
        try {
            const apiKey = "c45a857c193f6302f2b5061c3b85e743";
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
            );
            const data = await response.json();
            setMovieDetails(data);
        } catch (error) {
            console.error("Error fetching movie details:", error);
        }
    };

    const fetchCastDetails = async () => {
        try {
            const apiKey = "c45a857c193f6302f2b5061c3b85e743";
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
            );
            const data = await response.json();
            setCastDetails(data.cast.slice(0,10));
        } catch (error) {
            console.error("Error fetching cast details:", error);
        }
    };

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header />
            <div className="movie-details-container">
                <div className="movie-backdrop">
                    <img
                        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                        alt={movieDetails.title}
                    />
                </div>
                <div className="movie-info">
                    <div className="movie-poster">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt={movieDetails.title}
                        />
                    </div>
                    <div className="movie-text">
                        <h1>{movieDetails.title}</h1>
                        <p className="tagline">{movieDetails.tagline}</p>
                        <div className="movie-stats">
                            <p><b>Rating:</b> {movieDetails.vote_average.toFixed(1)}</p>
                            <p><b>Release Date:</b> {movieDetails.release_date}</p>
                            <p><b>Runtime:</b> {movieDetails.runtime} minutes</p>
                        </div>
                        <div className="genres">
                            {movieDetails.genres.map(genre => (
                                <span key={genre.id} className="genre-tag">
                                    {genre.name}
                                </span>
                            ))}
                        </div>
                        <div className="overview">
                            <h3>Overview</h3>
                            <p>{movieDetails.overview}</p>
                        </div>
                        <div className="cast-section">
                            <h3>Cast</h3>
                            <div className="cast-list">
                                {castDetails.map(cast => (
                                    <div key={cast.id} className="cast-card">
                                        <img
                                            src={cast.profile_path 
                                                ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                                                : 'placeholder-image-url'}
                                            alt={cast.name}
                                        />
                                        <p className="cast-name">{cast.name}</p>
                                        <p className="character-name">{cast.character}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie_Details;