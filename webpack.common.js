const webpack = require('webpack')
const path = require('path')

const rootAssetPath = './src/'

module.exports = {
	entry: {
		landing: [
			rootAssetPath + 'landing.js',
			rootAssetPath + 'stylesheets/' + 'landing.scss'
		]
	},
	output: {
		publicPath: '/static/js/',
    	filename: '[name].js',
    	path: path.resolve(__dirname, 'static/js/')
	},
	module : {
		rules: [
		{
			test: /\.(js)$/,
			exclude: /node_modules/,
	    	use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
	        	}
			}
		},
		{
			test: /\.(png)$/,
			exclude: /node_modules/,
			use: {
				loader: 'file-loader'
			}
		},
		{
		    test: /\.(scss)$/,
		    exclude: /node_modules/,
		    use: [{
		    	loader: 'style-loader', // inject CSS to page
		    }, {
		    	loader: 'css-loader', // translates CSS into CommonJS modules
		    	options: {
		    		minimize: true
		    	}
		    }, {
		    	loader: 'postcss-loader', // Run post css actions
		    	options: {
		        	plugins: [
		            	require('precss'),
		            	require('autoprefixer')
		          	]
		        }
		    }, {
		      loader: 'sass-loader' // compiles SASS to CSS
		    }]
	    }
    ]},
	plugins: [
        new webpack.ProvidePlugin({
	        $: 'jquery',
	        jQuery: 'jquery',
	        'window.jQuery': 'jquery',
	        Popper: ['popper.js', 'default']
        }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()        
	],
};