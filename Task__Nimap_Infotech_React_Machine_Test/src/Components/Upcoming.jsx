import { useEffect, useState } from "react";
import '../Css_Styles/Top_Rated.css' ;
import Header from "./Header";
import Cards from './Cards';
const Upcoming = () => {
    const [upcomingData, setUpcomingData] = useState([]);
    const [filteredUpcomingData, setFilteredUpcomingData] = useState([]);

    useEffect(() => {
        fetchUpcomingData();
    }, []);

    const fetchUpcomingData = async () => {
        try {
            const apiKey = "c45a857c193f6302f2b5061c3b85e743";
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
            );
            const data = await response.json();
            setUpcomingData(data.results || []);
            setFilteredUpcomingData(data.results || []);
        } catch (error) {
            console.error("Error fetching upcoming movies:", error);
        }
    };

    const onSearchClick = (searchText) => {
        const filteredData = upcomingData.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUpcomingData(filteredData);
    };

    return (
        <>
          <Header onSearchClick={onSearchClick} />
          <h1>Upcoming Movies</h1>
          <div className="movies-container-two">
            {filteredUpcomingData.length === 0 ? (
              <p>No movies found</p>
            ) : (
              filteredUpcomingData.map((item) => (
                <Cards 
                  key={item.id}
                  id={item.id}  
                  title={item.title}
                  overview={item.overview}
                  vote_count={item.vote_average}
                  poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  release_date={item.release_date}
                />
              ))
            )}
          </div>
        </>
      );
};

export default Upcoming;