import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../app/apiService';
import { API_KEY } from '../app/config';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2500 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 2500, min: 2100 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 2100, min: 1500 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 1500, min: 900 },
      items: 2
    },
  };
function List({dataMovie, title}) {
    const [movies, setMovies] = useState();
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.get(`/movie/${dataMovie}?api_key=${API_KEY}`);
            
            setMovies(data.data.results);
        }
        fetchData();
    // eslint-disable-next-line    
    }, [])



  return (
    <div className='list'>
        <h2 className='text-genres'>{title}</h2>
        <div className='row'>
        <Carousel responsive={responsive} className='listMovies'>         
                {movies?.length > 0 && movies?.map((movie) => (                   
                    <div className='movie' onClick={() => navigate(`/detail/${movie.id}`)}>
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='Movie 1' width='360' height='500'/>                       
                        <h3 className='moviesName'>{`${movie.title}`}</h3>
                    </div>               
                ))}    
            </Carousel>
        </div>
    </div>
  )
}

export default List

