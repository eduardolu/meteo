import { useState, useEffect } from "react";
import { GetWeather } from "../Helpers/GetWeather";

/* Hacer la petición a la API usando la función getWeather()*/
export const useFetchTime = ({ cityN, count, setCount }) => {
    const [tiempo, setTiempo] = useState(null);
    const [current, setCurrent] = useState(null);
    const [condition, setCondition] = useState(null);
    const [forecastday, setForecastday] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false); 

    const GetTiempo = async()=>{
        if (!cityN || !cityN.length) return;
        try{
            setisLoading(true);//empezar la carga
            const {location,current,forecast} = await GetWeather ( cityN );
            const {condition} = current;
            const {forecastday} = forecast;
            setForecastday(forecastday);
            setTiempo(location);
            setCurrent(current);
            setCondition(condition);
            setisLoading(false); //todo cargado
            setCount(count + 1);//suma uno al contador de búsquedas
            setError(false); //no hay error de la petición
        }catch{
            setError("Hubo un error al obtener el tiempo. Por favor, verifica tu búsqueda o inténtalo de nuevo más tarde.");
            setisLoading(false);
            setForecastday(null);
            setTiempo(null);
            setCurrent(null);
            setCondition(null);
        }
    }
    
    /* usamos UseEffect para lanzar la petición a la API solo cuando cambia el texto de cityN. */
    useEffect(()=>{
        GetTiempo();
    }, [cityN])

    return ({
        forecastday,
        tiempo,
        condition,
        current,
        isLoading,
        error,
        setError,
    })
}