require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

//Middleware — must match the browser Origin header exactly (no trailing slash)
app.use(
    cors({
        origin: [
            "https://weather-app-mu-two-31.vercel.app",
            "http://localhost:5173"
        ],
    })
);
app.use(express.json());


//Route
app.get("/weather", async(req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).json({ error: "City is required" });
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
        )}&appid=${process.env.API_KEY}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        const code = Number(data.cod);
        if (!Number.isFinite(code) || code !== 200) {
            const status =
                Number.isFinite(code) && code >= 400 && code < 600 ? code : 502;
            return res.status(status).json({
                error: data.message || "Weather data unavailable",
            });
        }

        res.json(data);

    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});


//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}.`);
});
