/// <reference types="vite/client" />

import '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      mauve: string;
      purple: string;
      borderColor: string;
      blue: string;
      contour: string;
    };
    border: {
      radius: string;
    };
    size: {
      height: number;
    };
  }
}
