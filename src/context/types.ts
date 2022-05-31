import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export type ThemeContextData = {
  toggleFonts(size: number): void;
  toggleTheme(): void;
  theme: DefaultTheme;
  size: number;
}

export type DetailContextData = {
  data: string | number;
  setDetailData: (id: string | number )=> void;
};

export type MainProps = {
  children: ReactNode;
}
