const m = require('./logica.js');
const { getClima } = require('./apiclima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;




let getInfo = async() => {

    try {

        let ciudad = await m.llamada(argv.direccion);
        let info = await getClima(ciudad.lat, ciudad.lgn);
        return (`El clima en la ciudad de ${ info.direccion } se puede describir como => ${ info.clima }`);

    } catch (e) {
        return "No existe esta ciudad";
    }
}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));