import { Chip, Stack, ThemeProvider, createTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import ApartmentIcon from "@mui/icons-material/Apartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import "./App.css";
import React from "react";

export default function Chipbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#102444",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={2} sx={{marginLeft: '1.5rem', marginTop: '3rem'}}>
          <Chip
            variant="outlined"
            label="Търсене"
            color="primary"
            icon={<SearchIcon />}
            sx={{ borderWidth: "0.2rem", padding:'15px 90px 15px 5px' }}
          ></Chip>
          <Chip
            variant="outlined"
            color="primary"
            label="Какво да правиш"
            icon={<QuestionMarkIcon />}
            sx={{ borderWidth: "0.2rem" }}
          />
          <Chip
            variant="outlined"
            color="primary"
            label="Хотели"
            icon={<ApartmentIcon />}
            sx={{ borderWidth: "0.2rem" }}
          />
          <Chip
            variant="outlined"
            color="primary"
            label="Ресторанти"
            icon={<RestaurantIcon />}
            sx={{ borderWidth: "0.2rem" }}
          />
          <Chip
            variant="outlined"
            color="primary"
            label="..."
            sx={{ borderWidth: "0.2rem" }}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
}
