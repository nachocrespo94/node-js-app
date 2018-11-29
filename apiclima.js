const axios = require('axios');


let getClima = async(lat, long) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=173f039c81d4a1e3f6e5e2dd7e311fe2`);
    return {
        direccion: res.data.name,
        clima: res.data.weather[0].main
    };
}

module.exports = {
    getClima
}


/*
 */