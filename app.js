const { getLugarLatLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudadpara obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(dir)=>{
    try{
        const {direccion,lat, lon} = await getLugarLatLong(dir);
        const clima = await getClima(lat,lon);
        console.log(`El clima en ${direccion} es de ${clima.temp}°C`);
        return clima;
    }catch(err){
        console.log(`No se pudo determinar el clima de ${direccion}`);
        return err;
    }
}
getInfo(argv.direccion);

//getLugarLatLong(argv.direccion).then(resp => console.log(resp))

// getClima(40.740000,-74.000000).then(resp => console.log(resp)).catch(err=>console.log(err));