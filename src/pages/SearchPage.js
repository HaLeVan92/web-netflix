import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
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




function SearchPage() {
    let [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('search');

    const[movie, setMovie] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await apiService.get(`/search/movie?query=${query}&api_key=${API_KEY}`);
            // console.log(data.data.results);
            setMovie(data.data.results);
        }
        fetchData();
    // eslint-disable-next-line    
    }, [query])


  return (
    <div className='listSearch'>
        <h2 className='text-search'>Search Infomation</h2>
        <div className='row'>
        <Carousel responsive={responsive} className='listMovies'>         
                {movie?.length > 0 && movie?.map((movie) => (                   
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

export default SearchPage
