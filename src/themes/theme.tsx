import { PaletteMode } from "@mui/material";
import { Roboto } from 'next/font/google';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

// color design tokens export
export const tokens = (mode: PaletteMode) => ({
  ...(mode === "dark"
    ? {
      black: {
        100: "#ffffff",
        200: "#e6f0ff",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#141414",
        700: "#171717",
        800: "#000000",
        900: "#000000"
      },
      indigo: {
        100: "#d8deff",
        200: "#b1bdff",
        300: "#8b9cfe",
        400: "#647bfe",
        500: "#3d5afe",
        600: "#3148cb",
        700: "#253698",
        800: "#182466",
        900: "#0c1233"
      },
      grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
      },
      primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
      },
      greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
      },
      redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
      },
      blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#2c37ff",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
      },
      white: {
        100: "#fafcff",
        200: "#f5f9ff",
        300: "#f0f6ff",
        400: "#ebf3ff",
        500: "#e6f0ff",
        600: "#b8c0cc",
        700: "#8a9099",
        800: "#5c6066",
        900: "#2e3033"
      },
    }
    : {
      black: {
        100: "#000000",
        200: "#000000",
        300: "#000000",
        400: "#000000",
        500: "#000000",
        600: "#e6e6e6",
        700: "#ddebff",
        800: "#f5f5f5",
        900: "#ffffff",
      },
      indigo: {
        100: "#0c1233",
        200: "#182466",
        300: "#253698",
        400: "#3148cb",
        500: "#3d5afe",
        600: "#647bfe",
        700: "#8b9cfe",
        800: "#b1bdff",
        900: "#d8deff",
      },
      grey: {
        100: "#141414",
        200: "#292929",
        300: "#3d3d3d",
        400: "#525252",
        500: "#666666",
        600: "#858585",
        700: "#a3a3a3",
        800: "#c2c2c2",
        900: '#f5f5f5',
      },
      primary: {
        100: "#040509",
        200: "#080b12",
        300: "#0c101b",
        400: "#f2f0f0", // manually changed
        500: "#141b2d",
        600: "#1F2A40",
        700: "#727681",
        800: "#a1a4ab",
        900: "#d0d1d5",
      },
      greenAccent: {
        100: "#0f2922",
        200: "#1e5245",
        300: "#2e7c67",
        400: "#3da58a",
        500: "#4cceac",
        600: "#70d8bd",
        700: "#94e2cd",
        800: "#b7ebde",
        900: "#dbf5ee",
      },
      redAccent: {
        100: "#2c100f",
        200: "#58201e",
        300: "#832f2c",
        400: "#af3f3b",
        500: "#db4f4a",
        600: "#e2726e",
        700: "#e99592",
        800: "#f1b9b7",
        900: "#f8dcdb",
      },
      blueAccent: {
        100: "#151632",
        200: "#2a2d64",
        300: "#3e4396",
        400: "#535ac8",
        500: "#6870fa",
        600: "#868dfb",
        700: "#a4a9fc",
        800: "#c3c6fd",
        900: "#e1e2fe",
      },
      white: {
        100: "#fafcff",
        200: "#f5f9ff",
        300: "#f0f6ff",
        400: "#ebf3ff",
        500: "#e6f0ff",
        600: "#b8c0cc",
        700: "#8a9099",
        800: "#5c6066",
        900: "#2e3033"
      },
    }),
});

// mui theme settings

export const themeSettings = (mode: PaletteMode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
          // palette values for dark mode
          primary: {
            main: colors.primary[500],
            dark: colors.primary[100],
            light: colors.primary[700],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: "#181818",
          },
        }
        : {
          // palette values for light mode
          primary: {
            main: colors.primary[100],
          },
          secondary: {
            main: colors.greenAccent[500],
          },
          neutral: {
            dark: colors.grey[700],
            main: colors.grey[500],
            light: colors.grey[100],
          },
          background: {
            default: '#f5f5f5',
          },

        }),
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  };
};