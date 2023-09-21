import config from '../../config.json'

export const getWeather =async(buscar)=>{
  const apiKey = config.API_KEY;
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ buscar }&days=7&lang=4`
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
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}