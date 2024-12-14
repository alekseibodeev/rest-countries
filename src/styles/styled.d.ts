import 'styled-components';

export type Colors = {
  'body-content': string;
  'body-background': string;
  'base-content': string;
  'base-background': string;
  'neutral-100': string;
  'shadow-50': string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
