import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: "#36194B",
          primarySecond: "#854CAD",
          primaryThird: "#B57EDC",
          primaryFourth: "#E0B0FF",
          primaryFifth: "#F8EEFF",
          secondary: "#4B4B4B",
          secondaryFirst: "#A0A0A0",
          secondarySecondary: "#E2DCE4",
          accent: "#000",
          neutral: "#fff",
          "base-100": "#ffffff",
          info: "#778ad4",
          success: "#23b893",
          warning: "#f79926",
          error: "#D32F2F",
          body: {
            "background-color": "#e3e6e6",
          },
        },
      },
    ],
  },
};
export default config;
