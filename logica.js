
const axios = require('axios');


let llamada = async (direccion) =>{

    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${direccion}&appid=173f039c81d4a1e3f6e5e2dd7e311fe2`)

    if(res.cod==="404"){
        throw new Error("Mal la llamada ajax");
    }else {
        return {
            direcion : res.data.name,
            lgn : res.data.coord.lon,
            lat : res.data.coord.lat,
            todo: res.data.weather
        };
    }
}



module.exports={
    llamada
}



