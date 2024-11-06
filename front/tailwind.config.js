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
			  'scan-line': 'scan 2s ease-in-out infinite',
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
			  scan: {
				'0%, 100%': { opacity: 0.3 },
				'50%': { opacity: 1 },
			  },
			},
			fontFamily: {
			  Roboto: ['Roboto', 'sans-serif'],
			  Poppins: ['Poppins', 'sans-serif'],
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

