

const axios = require('axios');

const apiKey ='e56e28748e82d9c40995b65e9cbc318a'; 


const getLugarLatLong = async(dir)=>{
    try {
        const encodeDir = encodeURI(dir);

        const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodeDir}&APPID=${apiKey}`)
        const data  = resp.data;
        const direccion = data.name;
        const lat = data.coord.lat;
        const lon = data.coord.lon;

        return({
            direccion,
            lat,
            lon
        });

    } catch (error) {
        return(error);
    }
    
}

module.exports = {getLugarLatLong};


