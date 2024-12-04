import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string;
      background: string;
      element: string;
      input: string;
      shadow: string;
    };
  }
}
