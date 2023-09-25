import config from '../../config.json' //Importar el apiKey para no tenerlo a la vista.

/* Clase donde preparamos la petición para lanzarla. */
export const GetWeather =async(cityN)=>{
  const apiKey = config.API_KEY; 
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ cityN }&days=7&lang=4`
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('No se pudo obtener el pronóstico del tiempo.');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}