import { useState, useEffect } from "react";
import { GetWeather } from "../Helpers/GetWeather";

/* Hacer la petición a la API usando la función getWeather()*/
export const useFetchTime = ({ cityN, setCount }) => {
    const [tiempo, setTiempo] = useState(null);
    const [current, setCurrent] = useState(null);
    const [condition, setCondition] = useState(null);
    const [forecastday, setForecastday] = useState(null);
    const [fallbackReason, setFallbackReason] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false); 

    useEffect(()=>{
      const GetTiempo = async()=>{
        if (!cityN || !cityN.length) return;
        try{
            setisLoading(true);//empezar la carga
            setError(false);
            const {location,current,forecast,fallbackReason} = await GetWeather ( cityN );
            const {condition} = current;
            setForecastday(forecast?.forecastday || null);
            setFallbackReason(fallbackReason || null);
            setTiempo(location);
            setCurrent(current);
            setCondition(condition);
            setisLoading(false); //todo cargado
            setCount((currentCount) => currentCount + 1);//suma uno al contador de búsquedas
        }catch(error){
            setError(error.message || "Hubo un error al obtener el tiempo. Por favor, verifica tu búsqueda o inténtalo de nuevo más tarde.");
            setisLoading(false);
            setForecastday(null);
            setFallbackReason(null);
            setTiempo(null);
            setCurrent(null);
            setCondition(null);
        }
      }

      /* Lanzar la petición a la API solo cuando cambia el texto de cityN. */
        GetTiempo();
    }, [cityN, setCount])

    return ({
        forecastday,
        tiempo,
        condition,
        current,
        isLoading,
        fallbackReason,
        error,
        setError,
    })
}
