	/** @type {import('tailwindcss').Config} */
	module.exports = {
	  content: [
	    "./src/**/*.{js,jsx,ts,tsx}",
	  ],
	  theme: {
	    extend: {
			animation: {
			  'fade-in': 'fadeIn 1s ease-out forwards',
			  'gradient-xy': 'gradient-xy 5s ease infinite',
			},
			keyframes: {
			  fadeIn: {
				'0%': { opacity: 0 },
				'100%': { opacity: 1 },
			  },
			  'gradient-xy': {
				'0%, 100%': {
				  'background-position': '0% 50%',
				},
				'50%': {
				  'background-position': '100% 50%',
				},
			  },
			},
			fontFamily: {
			  sans: ['Roboto', 'sans-serif'],
			  montserrat: ['Montserrat', 'sans-serif'],
			  orbitron: ['Orbitron', 'sans-serif'],
       		 rajdhani: ['Rajdhani', 'sans-serif'],
        	exo: ['"Exo 2"', 'sans-serif'],
			},
			colors: {
			  primary: {
				DEFAULT: '#e35f21', // Represents energy and innovation.
			  },
			  mainwhite: {
				DEFAULT: '#f5f5f5', // Clean background and text areas.
			  },
			  highlight: {
				DEFAULT: '#f39539', // Accent or hover effect.
			  },
			  maingreen: {
				DEFAULT: '#39ff14', // Energetic accents and details.
			  },
			  dark: {
				DEFAULT: '#212529', // Contrast, text, footers, headers.
			  },
			  amber: {
				DEFAULT: '#ffbf00', // Attention banners or highlights.
			  },
			},
		  },
		},
		plugins: [],
	  };

