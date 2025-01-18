import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
import Home from './Components/Home';
import Top_Rated from './Components/Top_Rated';
import Upcoming from './Components/Upcoming';
import Movie_Details from './Components/Movie_Details';
import Searched_Movie from './Components/Searched Movie';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/Top-Rated" element={<Top_Rated />} />
          <Route path = "/Upcoming Movies" element= {<Upcoming/>}/>
          <Route path="/movie/:id" element={<Movie_Details/>} />
          <Route path="/Searched Movie" element={<Searched_Movie/>}></Route>
          
          {/* <Route path="/top-rated" element={<h1>Top Rated Movies</h1>} />
          <Route path="/upcoming" element={<h1>Upcoming Movies</h1>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;