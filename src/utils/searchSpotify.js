import axios from 'axios';

const searchSpotify = (searchItem) => {
    return axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`);
};

export default searchSpotify;