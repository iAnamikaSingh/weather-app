import { Box, Typography, Card, CardContent, IconButton} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: { xs: "95%", sm: "85%", md: "700px" },
        margin: "2rem auto",
        padding: { xs: "0.5rem", sm: "1rem" },
      }}
    >
      {/* About Section */}
      <Card
        sx={{
          marginBottom: "1.5rem",
          borderRadius: "16px",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              fontWeight:700,
            }}
            gutterBottom
          >
            About WeatherX
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontFamily:"roboto, 'Times New Roman'"
            }}
          >
            WeatherX is a web application that provides real-time weather
            information using the OpenWeather API. It displays key details such
            as temperature, humidity, and weather conditions in a simple format.
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginTop: "0.5rem",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontFamily:"roboto, 'Times New Roman'",
              color:"#d81919ff",
              fontWeight:"700"
            }}
          >
            Note: Data accuracy depends on the API provider.
          </Typography>
        </CardContent>
      </Card>

      {/* Creator Section */}
      <Card
        sx={{
          borderRadius: "16px",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              fontWeight:700,
            }}
            gutterBottom
          >
            About the Creator
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontFamily:"roboto, 'Times New Roman'"
            }}
          >
            Hi, I'm Anamika, a beginner web developer. This project is built
            using React, Vite, Material UI, Node.js and Express.js as part of my learning
            journey.
          </Typography>
          <div>
      <IconButton
        component="a"
        href="https://github.com/iAnamikaSingh"
        target="_blank"
        rel="noopener noreferrer"
        sx= {{color: "#d81919"}}
      >
        <GitHubIcon />
      </IconButton>

      <IconButton
        component="a"
        href="https://www.linkedin.com/in/ianamikasingh/"
        target="_blank"
        rel="noopener noreferrer"
        sx= {{color: "#d81919"}}
      >
        <LinkedInIcon />
      </IconButton>
    </div>
        </CardContent>
      </Card>
    </Box>
  );
}