import { useEffect, useState } from "react";
import '../Css_Styles/Top_Rated.css'
import Header from "./Header";
import Cards from './Cards';

const Top_Rated = () => {
  const [topRatedData, setTopRatedData] = useState([]);
  const [filteredTopRatedData, setFilteredTopRatedData] = useState([]);

  useEffect(() => {
    fetchTopData();
  }, []);

  const fetchTopData = async () => {
    try {
      const apiKey = "c45a857c193f6302f2b5061c3b85e743";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      );
      const data = await response.json();
      setTopRatedData(data.results || []);
      setFilteredTopRatedData(data.results || []);
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
    }
  };

  const onSearchClick = (searchText) => {
    const filteredData = topRatedData.filter((item) => 
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTopRatedData(filteredData);
  };

  return (
    <>
      
    <>
      <Header onSearchClick={onSearchClick} />
      <h1>Top Rated Movies</h1>
      <div className="movies-container-two">
        {filteredTopRatedData.length === 0 ? (
          <p>No movies found</p>
        ) : (
          filteredTopRatedData.map((item) => (
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
  
    </>
  );
};

export default Top_Rated;