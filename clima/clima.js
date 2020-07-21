const axios = require('axios');

const apiKey ='e56e28748e82d9c40995b65e9cbc318a'; 

const getClima = async (lat,lon)=>{
    
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    return resp.data.main

}

module.exports ={getClima};