module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			screens: {
				smaller: "26.25em",
			},
			fontFamily: {
				"primary-bold": ["Orbitron-Bold", "Poppins", "sans-serif"],
				"primary-semibold": ["Orbitron-SemiBold", "Poppins", "sans-serif"],
				"primary-regular": ["Orbitron-Regular", "Poppins", "sans-serif"],
				secondary: ["Poppins-Regular", "sans-serif"],
			},
			animation: {
				blob: "blob 7s infinite",
			},
			keyframes: {
				blob: {
					"0%": { transform: "translate(0px, 0px) scale(1)" },
					"33%": { transform: "translate(30px, -50px) scale(1.1)" },
					"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
					"100%": { transform: "translate(0px, 0px) scale(1)" },
				},
			},
		},
	},
	plugins: [],
};
