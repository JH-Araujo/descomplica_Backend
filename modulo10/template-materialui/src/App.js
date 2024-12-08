import React from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2c2f33",
      paper: "#23272a",
    },
    text: {
      primary: "#ffffff", 
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/* CssBaseline aplica o tema no fundo e texto */}
      <CssBaseline />
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;