import { screens } from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const config = {
   darkMode: ["class"],
   content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
   prefix: "",
   theme: {
      screens: {
         xs: "500px",
         ...screens,
      },
      container: {
         center: true,
         padding: "2rem",
         screens: {
            "2xl": "1400px",
         },
      },
      extend: {
         fontSize: {
            "hero-bg": "clamp(3.75rem, 6vw, 8rem)",
         },
         minHeight: {
            page: "calc(95vh - 5rem)",
         },
         boxShadow: {
            "project-img":
               "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
         },
         fontFamily: {
            recoleta: ["var(--font-recoleta)"],
            "recoleta-light": ["var(--font-recoleta-light)"],
            gordita: ["var(--font-gordita)"],
            "gordita-light": ["var(--font-gordita-light)"],
            "gordita-italic": ["var(--font-gordita-italic)"],
            "gordita-medium": ["var(--font-gordita-medium)"],
         },
         colors: {
            "box-border": "#c8c8c826",
            "box-color": "#6464641a",
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
               DEFAULT: "hsl(var(--primary))",
               foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
               DEFAULT: "hsl(var(--secondary))",
               foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
               DEFAULT: "hsl(var(--destructive))",
               foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
               DEFAULT: "hsl(var(--muted))",
               foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
               DEFAULT: "hsl(var(--accent))",
               foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
               DEFAULT: "hsl(var(--popover))",
               foreground: "hsl(var(--popover-foreground))",
            },
            card: {
               DEFAULT: "hsl(var(--card))",
               foreground: "hsl(var(--card-foreground))",
            },
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
         backgroundImage: {
            "project-gradient": "linear-gradient(180deg, transparent, hsl(0, 0%, 7%))",
            "contact-gradient": "linear-gradient(180deg, hsl(240 10% 3.9%) 25%, hsla(0, 0%, 0%, 0.6) 80%)",
         },
         transitionTimingFunction: {
            "project-hover": "700ms cubic-bezier(0.17, 0.67, 0, 1.01);",
         },
         keyframes: {
            "accordion-down": {
               from: { height: "0" },
               to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
               from: { height: "var(--radix-accordion-content-height)" },
               to: { height: "0" },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            logo: "spin 30s linear infinite",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
