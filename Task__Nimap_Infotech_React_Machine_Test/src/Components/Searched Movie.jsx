import { useEffect, useState } from "react";
import Cards from './Cards';
import Header from "./Header";

const Searched_Movie = () => {
    const [data, setData] = useState([]);
    const [filterdEventData, setfilterdEventData] = useState([]);
    
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiKey = "c45a857c193f6302f2b5061c3b85e743";
        const movie_name = onSearchClick(); 

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${movie_name}&page=1`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result.results);
            setfilterdEventData(result.results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const onSearchClick = (searchText) => {
        const FilterdData = data.filter((item) => 
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setfilterdEventData(FilterdData);
    };

    return (
        <>
            <Header onSearchClick={onSearchClick} />
            <div>
                <h1>Search Results</h1>
                <div className="movies-container">
                    {filterdEventData.length === 0 ? (
                        <p>No Match Found</p>
                    ) : (
                        filterdEventData.map((movie) => (
                            <Cards 
                                key={movie.id}
                                id={movie.id}
                                title={movie.title} 
                                overview={movie.overview} 
                                vote_count={movie.vote_count} 
                                poster_path={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                release_date={movie.release_date}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Searched_Movie;