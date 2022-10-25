import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";

// api_key: at_RQNsaQhQloede2EgY59US3oICdfvm

const AroundYou = () => {

    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const [activeSong, isPlaying] = useSelector((state) => state.player);

    useEffect(() => {
        axios.get (`https://geo.ipify.org/api/v2/country?apiKey=at_RQNsaQhQloede2EgY59US3oICdfvm`)
        
    }, [country])
    

  return (
    <div>

    </div>
  );
};

export default CountryTracks;
