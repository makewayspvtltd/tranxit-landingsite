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
      screens: {
        mobile: "370px",
        tablet: "768px", // Adjusted from 1024px
        laptop: "1024px", // Adjusted from 1280px
        desktop: "1440px", // New breakpoint for desktop
        'giant-screen': "1920px", // Adjusted from 1536px
      },
      colors: {
        Primary: "#BFF000",
        textPrimary:"#111110",
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
        UberMoveRegular:"UberMoveRegular",
        UberMoveLight:"UberMoveLight",
        Glendalebold:"Glendalebold",
        Avenirbold:"Avenirbold",
        UberMoveMedium:"UberMoveMedium",
        AvenirRoman:"AvenirRoman",
      },
    },
  },
  plugins: [],
};
export default config;
