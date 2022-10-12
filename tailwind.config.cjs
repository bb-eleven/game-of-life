/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'pine-glade': '#C7D19E',
				'ship-cove': '#6E91B9',
				mirage: {
					DEFAULT: '#191F2D',
					darker: '#151B29'
				},
				'cadet-blue': '#A0A8C3',
				comet: {
					DEFAULT: '#636985',
					darker: '#434965'
				},
				'orange-red-crayola': '#FF5A5F',
				cultured: '#F5F5F5',
				'tea-green': '#C4D6B0'
			},
			fontFamily: {
				logo: 'MeshedDisplay-SemiBold',
				text: 'BLMelody-Regular'
			}
		}
	},
	plugins: []
};
