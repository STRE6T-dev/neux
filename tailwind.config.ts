import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/{button,checkbox,navbar,radio,ripple,spinner}.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'dotted': 'radial-gradient(circle, white 1px, transparent 1px)',
      },
      backgroundSize: {
        'dotted': '20px 20px',
      },
    },
  },
  plugins: [
    nextui(),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.bg-dotted': {
          'background-image': 'radial-gradient(circle, white 1px, transparent 1px)',
          'background-size': '20px 20px',
        },
      });
    },
  ],
};

export default config;
