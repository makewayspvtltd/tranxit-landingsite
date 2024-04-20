import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#BFF000",
      },
      borderColor: {
        Primary: "#AFAFAE",
      },
      fontFamily: {
        UberMove: "UberMove",
        Glendale: "Glendale",
        Avenir: "Avenir",
      },
    },
  },
  plugins: [],
};
export default config;
