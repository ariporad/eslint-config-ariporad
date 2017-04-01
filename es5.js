module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/node',
		'./rules/style',
		'./rules/variables'
	].map(require.resolve),
	env: {
		node: true,
		// TODO: Not sure about this
		browser: false,
	},
};
