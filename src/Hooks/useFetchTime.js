import { useState, useEffect } from "react";
import { getWeather } from "../Helpers/GetWeather";

/* Hacer la peticion al API usando la uncon getWeather()*/
export const useFetchTime = ( buscar ) => {
    const [tiempo, setTiempo] = useState([]);
    const [current, setCurrent] = useState([]);
    const [condition, setCondition] = useState([]);
    const [forecastday, setForecastday] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getTiempo = async()=>{
        if (!buscar || !buscar.length) return;
        const {location,current,forecast} = await getWeather ( buscar );
        const {condition} = current;
        const {forecastday} = forecast;
        setForecastday(forecastday);
        setTiempo(location);
        setCurrent(current);
        setCondition(condition);
        setisLoading(false);
    }
    
    /* usamos UseEffect para lanzar la petición a API solo cuando cambia el texto a buscar*/
    useEffect(()=>{
        getTiempo();
    }, [buscar])

    return ({
        forecastday,
        tiempo,
        condition,
        current,
        isLoading
    })
}