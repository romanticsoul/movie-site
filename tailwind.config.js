import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "16px",
      center: true,

      screens: {
        lg: "1280px",
      },
    },
    extend: {
      fontWeight: {
        inherit: "inherit",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            default: {
              50: "#fafafa",
              100: "#f2f2f3",
              200: "#ebebec",
              300: "#e3e3e6",
              400: "#dcdcdf",
              500: "#d4d4d8",
              600: "#afafb2",
              700: "#8a8a8c",
              800: "#656567",
              900: "#404041",
              foreground: "#000",
              DEFAULT: "#d4d4d8",
            },
            primary: {
              50: "#e0eee4",
              100: "#b3d5bf",
              200: "#87bd9a",
              300: "#5ba575",
              400: "#2f8c4f",
              500: "#03742a",
              600: "#026023",
              700: "#024b1b",
              800: "#013714",
              900: "#01230d",
              foreground: "#fff",
              DEFAULT: "#03742a",
            },
            background: "#ffffff",
            foreground: "#000000",
            content1: {
              DEFAULT: "#ffffff",
              foreground: "#000",
            },
            content2: {
              DEFAULT: "#f4f4f5",
              foreground: "#000",
            },
            content3: {
              DEFAULT: "#e4e4e7",
              foreground: "#000",
            },
            content4: {
              DEFAULT: "#d4d4d8",
              foreground: "#000",
            },
            focus: "#00ed71",
            overlay: "#000000",
          },
        },
        dark: {
          colors: {
            default: {
              50: "#0d0d0e",
              100: "#262626",
              200: "#313131",
              300: "#323238",
              400: "#3f3f46",
              500: "#65656b",
              600: "#8c8c90",
              700: "#b2b2b5",
              800: "#d9d9da",
              900: "#ffffff",
              foreground: "#fff",
              DEFAULT: "#313131",
            },
            primary: {
              50: "#01230d",
              100: "#013714",
              200: "#024b1b",
              300: "#026023",
              400: "#03742a",
              500: "#2f8c4f",
              600: "#5ba575",
              700: "#87bd9a",
              800: "#b3d5bf",
              900: "#e0eee4",
              foreground: "#fff",
              DEFAULT: "#03742a",
            },
            background: "#141414",
            foreground: "#ffffff",
            content1: {
              DEFAULT: "#222222",
              foreground: "#fff",
            },
            content2: {
              DEFAULT: "#222222",
              foreground: "#fff",
            },
            content3: {
              DEFAULT: "#3f3f46",
              foreground: "#fff",
            },
            content4: {
              DEFAULT: "#52525b",
              foreground: "#fff",
            },
            focus: "#00ed71",
            overlay: "#ffffff",
          },
        },
      },
      layout: {
        disabledOpacity: "0.4",
      },
    }),
  ],
}

module.exports = config
