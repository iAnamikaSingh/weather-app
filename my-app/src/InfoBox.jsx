import {Card,CardContent,Typography,CardMedia} from '@mui/material'
import "./WeatherX.css"
import CardImage from "./CardImage.jsx";
import LightModeIcon from '@mui/icons-material/LightMode'; // Sunny
import AcUnitIcon from '@mui/icons-material/AcUnit'; //cold
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing'; // Rainy
import CloudIcon from '@mui/icons-material/Cloud'; //cloudy  
import ThunderstormIcon from '@mui/icons-material/Thunderstorm'; // thunderstorm
import WaterIcon from '@mui/icons-material/Water';




export default function InfoBox ({info}) {
    if (!info || !info.name) {
        return (
            <div className="card-container">
                <p style={{color: 'red', textAlign: 'center', margin: '2rem'}}>No weather data available.</p>
            </div>
        );
    }

    return (
            <div className="card-container">
            <Card className="Card" variant="outlined">
            <CardMedia   sx={{ height:150 }} image={CardImage(info)}/>
            <CardContent>
            <Typography> { info.temp < 20 ? <AcUnitIcon/>
                : info.desc.includes("broken clouds") || info.desc.includes("scattered clouds") || info.desc.includes("overcast clouds") ?  
                <CloudIcon />
                : info.desc.includes("light rain") ? <CloudySnowingIcon/>
                : info.desc.includes("thunderstorm") ? <ThunderstormIcon/>
                : info.desc.includes("sunny")  ? <LightModeIcon/>
                : <WaterIcon/>} </Typography>
            <Typography sx={{fontSize:{ 
                        xs: "14px", 
                        sm: "15px", 
                        md: "16px" 
            } }}> The current weather condition of <b>{info.name}</b> is <b>{info.desc}</b>. <br></br>
            The temperature is <b>{info.temp}°C</b> but it feels like <b>{info.feels_like}°C</b>.<br></br> 
            Humidity is around <b>{info.humidity}%</b>, with a high of <b>{info.max_temp}°C </b> 
            and a low of <b>{info.min_temp}°C</b>.</Typography>    
            </CardContent> 
            </Card>
            </div>
    )
}
