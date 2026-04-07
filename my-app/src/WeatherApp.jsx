import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import AppBar from "./AppBar";
import About from "./About";
import {Typography} from '@mui/material'
import { useState, useEffect } from "react";



import "./WeatherX.css";

export default function WeatherApp () {
    
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchDelhiWeather = async () => {
        try {
            const response = await fetch(
                `https://weather-app-zu3m.onrender.com/weather?city=${encodeURIComponent("Delhi".trim())}`
            );

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setWeatherInfo({
                    temp: data.main?.temp,
                    min_temp: data.main?.temp_min,
                    max_temp: data.main?.temp_max,
                    feels_like: data.main?.feels_like,
                    humidity: data.main?.humidity,
                    desc: data.weather?.[0]?.description,
                    name: data.name
                });
            } else {
                setWeatherInfo(null);
            }

        } catch (err) {
            setWeatherInfo(null);
        } finally {
            setLoading(false);
        }
    };

    fetchDelhiWeather();
}, []);

    const updateInfo = (newInfo) => {
        if (newInfo && newInfo.name) {
            setWeatherInfo(newInfo);
        }
    };

    return (
        <div className="App">   
            <AppBar/> 
            <div className="main-content">
            <div className="content_header"> 
                <h1 className="brand-name">WeatherX</h1>
                <SearchBox updateInfo={updateInfo}/>
            </div>
            
                {loading ? (
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        Loading weather information...
                    </div>
                ) : (
                    <InfoBox info={weatherInfo}/>
                )}
            
            </div>
            <About/>
            <div className="disclaimer">
                <Typography variant="caption" color="text.secondary">Disclaimer: This application relies on third-party data from <a href="https://openweathermap.org/" rel="noopener noreferrer">OpenWeather</a>. The accuracy and reliability of weather information are not guaranteed.</Typography>
            </div>
            
        </div>
    )
}