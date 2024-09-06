	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {

			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			  },

			colors: {
				primary: {
					DEFAULT: '#007bff', // Electric Blue: Represents energy and innovation.
				  },
				  mainwhite: {
					DEFAULT: '#f5f5f5', // Bright White: Clean background and text areas.
				  },
				  cyan: {
					DEFAULT: '#00e5ff', // Vivid Cyan: Accent or hover effect.
				  },
				  maingreen: {
					DEFAULT: '#39ff14', // Neon Green: Energetic accents and details.
				  },
				  dark: {
					DEFAULT: '#2e2e2e', // Dark Charcoal: Contrast, text, footers, headers.
				  },
				  amber: {
					DEFAULT: '#ffbf00', // Amber Yellow: Attention banners or highlights.
				  },
			  },

		},
	  },
	  plugins: [],
	};

