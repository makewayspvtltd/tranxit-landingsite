import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heathmont/moon-core-tw/**/*.{js,ts,jsx,tsx}",
  ],

  presets: [
    require('@heathmont/moon-core-tw/lib/private/presets/ds-moon-preset'),
  ],
  theme: {
    extend: {

      
      colors: {
        Primary: "#BFF000",
        Secondary:"#AFAFAE",
      },
      borderColor: {
        Primary: "#AFAFAE",
      },
      fontFamily: {
        UberMove: "UberMove",
        UberMoveBold:"UberMoveBold",
        Glendale: "Glendale",
        Avenir: "Avenir",
      },
    },
  },
  plugins: [],
};
export default config;
