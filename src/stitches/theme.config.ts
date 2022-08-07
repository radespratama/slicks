import { createStitches } from "@stitches/react";
import * as Colors from "colorcrafts";

export const { globalCss, createTheme, styled, keyframes, getCssText } =
  createStitches({
    theme: {
      colors: {
        primary: "#111111",
        ...Colors.White,
        ...Colors.Gray,
        ...Colors.Blue,
        ...Colors.Red,
      },
      fonts: {
        sans: "Outfit, sans-serif",
        mono: "Roboto Mono, monospace",
      },
      fontSizes: {
        "text-xs": "0.75rem",
        "text-sm": "0.875rem",
        "text-base": "1rem",
        "text-lg": "1.125rem",
        "text-xl": "1.25rem",
        "text-2xl": "1.5rem",
        "text-3xl": "1.875rem",
        "text-4xl": "2.25rem",
        "text-5xl": "3rem",
        "text-6xl": "4rem",
      },
      sizes: {
        xs: "576px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1100px",
      },
    },
    media: {
      xs: "(min-width: 576px)",
      sm: "(min-width: 640px)",
      md: "(min-width: 768px)",
      lg: "(min-width: 992px)",
    },
  });
