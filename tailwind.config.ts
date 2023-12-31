import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },

      colors: {
        purple: {
          "50": "#fbfbfb",
          "100": "#f6f0f8",
          "200": "#eed2f0",
          "300": "#dba8dd",
          "400": "#d17bc6",
          "500": "#bd56b1",
          "600": "#a13b94",
          "700": "#7b2c6f",
          "800": "#551f4a",
          "900": "#311329"
        },
        cerise: {
          "50": "#fcfcfa",
          "100": "#faf0ea",
          "200": "#f6d3d3",
          "300": "#e9a8aa",
          "400": "#e2787e",
          "500": "#d1545b",
          "600": "#b73a3f",
          "700": "#8f2c2e",
          "800": "#651e20",
          "900": "#3d1312"
        },
        cocoa: {
          "50": "#fcfbf9",
          "100": "#faf0e2",
          "200": "#f5d6c2",
          "300": "#e6ad92",
          "400": "#da7f62",
          "500": "#c55b40",
          "600": "#a8412a",
          "700": "#823121",
          "800": "#5a2117",
          "900": "#37150e"
        },
        ochre: {
          "50": "#fbfaf7",
          "100": "#f9f0d6",
          "200": "#f1dbaa",
          "300": "#ddb576",
          "400": "#c58948",
          "500": "#a86729",
          "600": "#8b4d1b",
          "700": "#693a16",
          "800": "#482711",
          "900": "#2d180c"
        },
        olive: {
          "50": "#f9f9f6",
          "100": "#f1f0e3",
          "200": "#dfe0c1",
          "300": "#b9bf90",
          "400": "#84985f",
          "500": "#65783b",
          "600": "#505f28",
          "700": "#3f4721",
          "800": "#2b3019",
          "900": "#1c1d12"
        },
        teal: {
          "50": "#f4f8f7",
          "100": "#e0f0f4",
          "200": "#bae3e6",
          "300": "#85c5c7",
          "400": "#48a2a1",
          "500": "#34837c",
          "600": "#2b6a60",
          "700": "#25504a",
          "800": "#1a3636",
          "900": "#112125"
        },
        navy: {
          "50": "#f5f8f9",
          "100": "#dff1fa",
          "200": "#b9dff5",
          "300": "#88c0e6",
          "400": "#549bd1",
          "500": "#3f79be",
          "600": "#345ea5",
          "700": "#2b4683",
          "800": "#1e305d",
          "900": "#121d3c"
        },

        blue: {
          "50": "#f7fafb",
          "100": "#e5f1fc",
          "200": "#c8dafa",
          "300": "#9fb6f1",
          "400": "#7a8ee6",
          "500": "#626add",
          "600": "#504dcd",
          "700": "#3d3aab",
          "800": "#2b277d",
          "900": "#18184d"
        },
        indigo: {
          "50": "#f8fafb",
          "100": "#ebf0fc",
          "200": "#d5d7f9",
          "300": "#b3b2ef",
          "400": "#9788e3",
          "500": "#7e63da",
          "600": "#6747c8",
          "700": "#4d35a5",
          "800": "#352577",
          "900": "#1e1747"
        }
      }
    }
  },
  plugins: []
};
export default config;
