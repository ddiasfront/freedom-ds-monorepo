import { createStitches, globalCss, PropertyValue } from "@stitches/react";
import type * as StitchesTypes from "@stitches/react";
import {
  mauve,
  blueDarkA,
  mintDarkA,
  violet,
  blackA,
  mauveDarkA,
  mintA,
  blueA,
  mauveA,
  mint,
  blue,
  mintDark,
} from "@radix-ui/colors";

export const globalStyles = globalCss({
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
  ],
  "@font-face": [
    {
      fontFamily: "Work Sans",
      src: "url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
    },
  ],
});

export const {
  styled,
  css,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...mauve,
      blue1: blueDarkA.blueA1,
      blue2: blueDarkA.blueA2,
      blue3: blueDarkA.blueA3,
      blue4: blueDarkA.blueA4,
      blue5: blueDarkA.blueA5,
      blue6: blueDarkA.blueA6,
      blue7: blueDarkA.blueA7,
      blue8: blueDarkA.blueA8,
      blue9: blueDarkA.blueA9,
      blue10: blueDarkA.blueA10,
      blue11: blueDarkA.blueA11,
      blue12: blueDarkA.blueA12,

      mint1: mintDarkA.mintA1,
      mint2: mintDarkA.mintA2,
      mint3: mintDarkA.mintA3,
      mint4: mintDarkA.mintA4,
      mint5: mintDarkA.mintA5,
      mint6: mintDarkA.mintA6,
      mint7: mintDarkA.mintA7,
      mint8: mintDarkA.mintA8,
      mint9: mintDarkA.mintA9,
      mint10: mintDarkA.mintA10,
      mint11: mintDarkA.mintA11,
      mint12: mintDarkA.mintA12,
      defaultText: mauve.mauve1,
      defaulOutlinedtText: mauve.mauve12,
    },
    space: {
      px: "1px",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
    },
    fontSizes: {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
    },
    fonts: {
      work: "Work Sans, sans-serif",
    },
    fontWeights: {
      thin: "100",
      medium: "400",
      bold: "800",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      rxl: "50px",
      rl: "20px",
      rsm: "7px",
      rsmx: "3px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },

  utils: {
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
  },
});

export const LightTheme = createTheme({
  colors: {
    blue1: blueA.blueA1,
    blue2: blueA.blueA2,
    blue3: blueA.blueA3,
    blue4: blueA.blueA4,
    blue5: blueA.blueA5,
    blue6: blueA.blueA6,
    blue7: blueA.blueA7,
    blue8: blueA.blueA8,
    blue9: blueA.blueA9,
    blue10: blueA.blueA10,
    blue11: blueA.blueA11,
    blue12: blueA.blueA12,

    mint1: mint.mint1,
    mint2: mint.mint2,
    mint3: mint.mint3,
    mint4: mint.mint4,
    mint5: mint.mint5,
    mint6: mint.mint6,
    mint7: mint.mint7,
    mint8: mint.mint8,
    mint9: mint.mint9,
    mint10: mint.mint10,
    mint11: mint.mint11,
    mint12: mint.mint12,
    defaultText: mauve.mauve12,
  },
});
export { StitchesTypes };
