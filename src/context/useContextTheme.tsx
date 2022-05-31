import { createContext, useCallback, useContext, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark } from "../styles/Theme/dark";
import { light } from "../styles/Theme/light";
import { MainProps, ThemeContextData } from "./types";

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const useTheme = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: MainProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);
  const [size, setSize] = useState(16);
  const { colors, title } = theme;

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === "light" ? dark : light);
  }, [theme]);
  const toggleFonts = useCallback((size: number) => {
    setSize(size);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, size, toggleTheme, toggleFonts}}>
      <ThemeProvider theme={{ colors, font: size, title }}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
