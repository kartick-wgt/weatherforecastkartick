

export const fetchWeatherApiwithgeolocation = async (lat,long) => {
    return fetch(`${process.env.REACT_APP_API_OPEN_WEATHER_URL}weather?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
  };



  export const fetchWeatherApiwithlocation = (city,country) => {   
    return fetch(`${process.env.REACT_APP_API_OPEN_WEATHER_URL}weather?q=${city},${country}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,{
        method:"GET"
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>{
        console.log(err)
    })
}