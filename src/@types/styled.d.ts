import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      span: string;
      background: string;

      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
    };
  }
}
