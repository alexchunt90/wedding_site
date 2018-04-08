const webpack = require('webpack')
const path = require('path')

const rootAssetPath = './src/'
let pathsToClean = [
  'static/js'
]

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
    devServer: {
		contentBase: '.',
		hot: true
    },	
	watch: true,
	watchOptions: {
		poll: true,
		ignored: /node_modules/
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
			use: {
				loader: 'file-loader'
			}
		},
		{
		    test: /\.(scss)$/,
		    use: [{
		    	loader: 'style-loader', // inject CSS to page
		    }, {
		    	loader: 'css-loader', // translates CSS into CommonJS modules
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
		// TODO: Dev / Prod Config
		// new webpack.optimize.UglifyJsPlugin(),
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