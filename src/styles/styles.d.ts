
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    font: number;
    colors: {
      primary: string;
      secondary: string;
      font: string;
      font_border: string;
      border: string;
      houver: string;
      background: string;
      focus: string;
      text_input: string;
      icon: string;
      background_header:string;
      background_card:string;
    },
  }
}
