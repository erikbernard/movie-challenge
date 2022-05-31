import { HashRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { CustomThemeProvider } from "./context/useContextTheme";
import { Routes } from "./Routes";
import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyles />
      <HashRouter>
        <Header />
        <Routes />
      </HashRouter>
    </CustomThemeProvider>
  );
}
