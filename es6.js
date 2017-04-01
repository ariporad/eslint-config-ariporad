module.exports = {
	extends: [
		'./es5.js',
		'./rules/es6',
		'./rules/strict',
		'./rules/imports',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
};
