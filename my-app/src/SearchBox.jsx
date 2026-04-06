import {Button,TextField,Box} from '@mui/material';
import {useState} from "react";
import "./WeatherX.css"


export default function SearchBox({updateInfo}) {
    const [error,setError] = useState(false);
    const [city,setCity] = useState("");

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/weather?city=${encodeURIComponent(city.trim())}`
            );
            const jsonResponse = await response.json();
            if (!response.ok || jsonResponse.error ) {
                setError(true);
                return null;
            }
            setError(false);
            return {
                temp: jsonResponse.main?.temp,
                min_temp: jsonResponse.main?.temp_min,
                max_temp: jsonResponse.main?.temp_max,
                feels_like: jsonResponse.main?.feels_like,
                humidity: jsonResponse.main?.humidity,
                desc: jsonResponse.weather?.[0]?.description,
                name: jsonResponse.name
            };
        } catch (err) {
            setError(true);
            return null;
        }
    }
    

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity("");
        }
    }

    return (
            <form onSubmit={handleSubmit}>
            <Box sx={{display: 'flex', gap: 0}}>
            <TextField  id="city" label="City Name" variant="outlined" color="error" required onChange={handleChange} value={city} 
                  sx={{ 
                        "& fieldset":{
                        borderTopRightRadius:"0",
                        borderBottomRightRadius:"0",
                        },
                        '& .MuiInputBase-root': { height: 45, width:{xs:"200px",sm:"260", md:"320"}},  // control the whole input box
                     }}/>
            <Button variant="contained" color="error" type="submit" sx={{borderTopLeftRadius:0,borderBottomLeftRadius:0 }}>Search</Button>
            </Box>
            {error && <p style={{color:"red", marginTop:"1rem"}}>No data found ! </p>}
            </form>
    )}
