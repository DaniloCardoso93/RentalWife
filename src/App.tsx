import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./features/routes";
import { GlobalStyle } from "./features/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import "animate.css";
import light from "./features/styles/theme/light";
import dark from "./features/styles/theme/dark";
import { useState } from "react";

export const App = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    localStorage.setItem("@rentalTheme", theme.title);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <RoutesMain toggleTheme={toggleTheme} setTheme={setTheme} />
        <ToastContainer limit={3} autoClose={2000} />
      </Router>
    </ThemeProvider>
  );
};
