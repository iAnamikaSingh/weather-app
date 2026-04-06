
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



export default function ButtonAppBar() {
 
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ backgroundColor: "#d81919" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 } // left-right spacing (responsive)
        }}
      >
        {/* LEFT: Logo */}
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem" },
            fontFamily: '"Times New Roman", serif'
          }}
          variant="h6"
        >
          WeatherX
        </Typography>
  
      
        
  
          <Button
            color="inherit"
            href="https://openweathermap.org/"
            target="_blank"
            sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
          >
            API Used
          </Button>
        
      </Toolbar>
    </AppBar>
  
    {/* Spacer */}
    <Toolbar />
  </Box>
  );
}
