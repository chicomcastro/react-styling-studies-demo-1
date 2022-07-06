import "./App.css";
import { CssStyledButton } from "./components/CssStyledButton";
import { InlineStyledButton } from "./components/InlineStyledButton";
import { MUIDeclarativeUIButton } from "./components/MUIDeclarativeUIButton";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MUIStyledButton } from "./components/MUIStyledButton";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#F0F0F0",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* Esse button é um componente que criamos e estilizamos via css */}
          <CssStyledButton></CssStyledButton>

          {/* Esse button pega o estilo de css mesmo sem o arquivo .css ser importado nesse arquivo */}
          <button className="css-styled-button">
            Fui estilizado por css indiretamente
          </button>

          {/* Esse button é um componente que criamos e estilizamos via inline styles */}
          <InlineStyledButton></InlineStyledButton>

          {/* Esse button é um componente que criamos e estilizamos seguindo uma UI declarativa via material UI */}
          <MUIDeclarativeUIButton></MUIDeclarativeUIButton>

          {/* Esse button é um componente que criamos e estilizamos usando mui/styled */}
          <MUIStyledButton></MUIStyledButton>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
