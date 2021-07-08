const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		extend: {},
    fontFamily:{
      'recoleta':'Recoleta'
    }
	},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin:'0 auto',
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      })
    }
  ]
};

module.exports = config;
