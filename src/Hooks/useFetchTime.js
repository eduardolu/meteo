import { useState, useEffect } from "react";
import { getWeather } from "../Helpers/GetWeather";

/* Hacer la peticion al API usando la uncon getWeather()*/
export const useFetchTime = ({ cityN, count, setCount }) => {
    const [tiempo, setTiempo] = useState(null);
    const [current, setCurrent] = useState(null);
    const [condition, setCondition] = useState(null);
    const [forecastday, setForecastday] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(false); 

    const getTiempo = async()=>{
        if (!cityN || !cityN.length) return;
        try{
            setisLoading(true);
            // await new Promise(resolve => setTimeout(resolve, 300000));

            const {location,current,forecast} = await getWeather ( cityN );
            const {condition} = current;
            const {forecastday} = forecast;
            setForecastday(forecastday);
            setTiempo(location);
            setCurrent(current);
            setCondition(condition);
            setisLoading(false);
            setCount(count + 1);
            setError(false); //no hay error de la peticion
        }catch{
            setError("Hubo un error al obtener el tiempo. Por favor, verifica tu búsqueda o inténtalo de nuevo más tarde.");
            setisLoading(false);
            setForecastday(null);
            setTiempo(null);
            setCurrent(null);
            setCondition(null);
        }
    }
    
    /* usamos UseEffect para lanzar la petición a API solo cuando cambia el texto a cityN*/
    useEffect(()=>{
        getTiempo();
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