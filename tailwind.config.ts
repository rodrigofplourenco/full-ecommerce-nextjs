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
        primaryBlue: '#39C5F3',
        secondaryBlue: '#007dab',
        accentBlue: '#35B4DE',
        lightGrey: '#dadada',
        darkGrey: '#767676',
        black: '#121212',
      },
      boxShadow: {
        'before': '10px 10px 0 #fff',
        'after': '10px -10px 0 #fff',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "instagram": "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        "facebook": "linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)",
        "whatsapp": "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
        "email": "linear-gradient(135deg, #f2a60c 0%, #c71610 100%)",
        "call": "linear-gradient(135deg, #32a852 0%, #097969 100%)",
      }
    },
  },
  plugins: []
};
export default config;
