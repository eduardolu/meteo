const translateApiError = (message) => {
  const messages = {
    "This endpoint is disabled for your subscription":
      "Tu suscripción de RapidAPI no tiene activado el pronóstico. Se mostrará el tiempo actual si está disponible.",
    "You are not subscribed to this API.":
      "La API key no está suscrita a WeatherAPI.com en RapidAPI.",
    "Invalid API key.":
      "La API key no es válida. Revisa el archivo .env.local.",
  };

  return messages[message] || message || "No se pudo obtener el tiempo.";
};

/* Clase donde preparamos la petición para lanzarla. */
export const GetWeather = async (cityN) => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;

  if (!apiKey) {
    throw new Error(
      import.meta.env.DEV
        ? "Falta configurar VITE_RAPIDAPI_KEY en el archivo .env.local."
        : "Falta configurar VITE_RAPIDAPI_KEY en las variables de build de Cloudflare Pages."
    );
  }

  const options = {
    method: "GET",
    headers: {
      "X-Rapidapi-Key": apiKey,
      "X-Rapidapi-Host": "weatherapi-com.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  };

  const getResponseData = async (response) => {
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const apiMessage = data?.message || data?.error?.message;
      throw new Error(translateApiError(apiMessage));
    }

    return data;
  };

  try {
    const forecastUrl = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ cityN }&days=3&lang=es`;
    const forecastResponse = await fetch(forecastUrl, options);

    try {
      const forecastData = await getResponseData(forecastResponse);
      return { ...forecastData, fallbackReason: null };
    } catch (error) {
      if (!error.message.includes("pronóstico")) {
        throw error;
      }

      const currentUrl = `https://weatherapi-com.p.rapidapi.com/current.json?q=${ cityN }&lang=es`;
      const currentResponse = await fetch(currentUrl, options);
      const currentData = await getResponseData(currentResponse);

      return { ...currentData, fallbackReason: error.message };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
