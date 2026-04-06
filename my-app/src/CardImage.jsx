    import Image from "./assets/main.jpg"


    const haze_url = "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";
    
    const sunny_url = "https://images.unsplash.com/vector-1756773357477-da0aaee49027?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";

    const light_rain_url = "https://images.unsplash.com/photo-1674386903754-983c3db72077?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpZ2h0JTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";

    const overcast_clouds_url = "https://images.unsplash.com/photo-1728062816660-120f281936b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500";

    const broken_clouds_url = "https://images.unsplash.com/photo-1728062816660-120f281936b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500";

    const thunderstorm_url = "https://plus.unsplash.com/premium_photo-1727474689747-9775aeddf728?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGh1bmRlcnN0b3JtJTIwcmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";

    const cold_url = "https://images.unsplash.com/vector-1759145395794-9219df15d5f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500";

    const clear_sky_url = "https://images.unsplash.com/photo-1592698117601-70c282996f9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsZWFyJTIwc2t5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500";

    
export default function getImg (info) {
    const img = info.temp < 20 ? cold_url
        : info.desc.includes("broken clouds") || info.desc.includes("scattered clouds") ?  broken_clouds_url 
        : info.desc.includes("overcast clouds") ? overcast_clouds_url
        : info.desc.includes("light rain") ? light_rain_url
        : info.desc.includes("haze") ? haze_url
        : info.desc.includes("thunderstorm") ? thunderstorm_url
        : info.desc.includes("sunny")  ? sunny_url
        : info.desc.includes("clear sky") ? clear_sky_url
        : Image ;

    return img;
} 