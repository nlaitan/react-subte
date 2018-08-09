const path = require('path');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname + '/public/js'),
		filename: 'bundle.js'
	},
	module: {

		rules: [
      		{
      			test: /\.(js|jsx)$/, 
      			use: 'babel-loader',
      			exclude: /node_modules/
      		},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			},
			{
				test: /\.svg$/,
				use: [
					{ loader: "svg-loader" }
				]
			}
    	]

	}
}