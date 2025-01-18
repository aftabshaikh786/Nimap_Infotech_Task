import { useNavigate } from 'react-router-dom';
import '../Css_Styles/Cards.css';

const Cards = ({id,title,overview,vote_count,release_date,poster_path}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="cards-div" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div>
        <img className="img-div-p" src={poster_path} alt={title}></img>
      </div>
      <div className='Info-div'>
        <span><b>Title</b>: {title}</span><br />
        <span><b>Vote's</b>: {vote_count}</span><br />
        <span><b>Date Of Release</b>: {release_date}</span><br />
        <span><b>Overview</b>: {overview}</span>
      </div>
    </div>
  );
};

export default Cards;