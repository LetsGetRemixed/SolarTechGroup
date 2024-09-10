	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {

			extend: {
				animation: {
				  'fade-in': 'fadeIn 1s ease-out forwards',
				},
				keyframes: {
				  fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				  },
				},
			  },

			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			  },

			colors: {
				primary: {
					DEFAULT: '#e35f21', // Electric Blue: Represents energy and innovation.
				  },
				  mainwhite: {
					DEFAULT: '#f5f5f5', // Bright White: Clean background and text areas.
				  },
				  highlight: {
					DEFAULT: '#f39539', // Vivid Cyan: Accent or hover effect.
				  },
				  maingreen: {
					DEFAULT: '#39ff14', // Neon Green: Energetic accents and details.
				  },
				  dark: {
					DEFAULT: '#212529', // Dark Charcoal: Contrast, text, footers, headers.
				  },
				  amber: {
					DEFAULT: '#ffbf00', // Amber Yellow: Attention banners or highlights.
				  },
			  },

			  

		},
	  },
	  plugins: [],
	};

