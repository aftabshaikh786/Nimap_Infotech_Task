import { useEffect, useState } from "react";
import Cards from './Cards';
import Header from "./Header";

const Home = () => {
  const [data, setData] = useState([]);
  
  
  const [filterdEventData , setfilterdEventData] = useState([])
  
  
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
 


  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";
    const baseUrl = "https://api.themoviedb.org/3/movie/popular";

    try {
      const response = await fetch(`${baseUrl}?api_key=${apiKey}&language=en-US&page=1`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result.results);
      setfilterdEventData(result.results)
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  const onSearchClick = (searchText) => {
    const FilterdData = data.filter((item)=> item.title.toLowerCase().includes(searchText.toLowerCase()))
    setfilterdEventData(FilterdData)
   
     
    
}
  return (
    <>
    <Header onSearchClick = {onSearchClick } />
    <div>
      <h1>Popular Movies</h1>
      <div className="movies-container">
        {filterdEventData.length === 0 ? (
          <p>Loading...</p>
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

export default Home;