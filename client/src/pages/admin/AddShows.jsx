import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../assets/assets';
import Loading from '../../components/Loading';

const AddShows = () => {
    const currency = import.meta.env.VITE_CURRENCY;
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [dateTimeSelection,setDateTimeSelection] = useState({});
    const [dateTimeInput, setDateTimeInput] = useState("");
    const [showPrice, setShowPrice] = useState("");

    const fetchNowPlayingMovies = async () => {
        setNowPlayingMovies(dummyBookingData)
    };

    useEffect(()=>{
        fetchNowPlayingMovies();
    },[]);

  return nowPlayingMovies.length>0 ?(
    <div>
      
    </div>
  ): <Loading />
}

export default AddShows
