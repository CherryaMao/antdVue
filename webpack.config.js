//const path = require("./path")
const webpack = require('webpack');
module.exports = {
	entry:__dirname + "/src/index.js",
	output:{
		path:__dirname+"/dist",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:'./dist',
		historyApiFallback:true,
		inline:true,
		port:3000,
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:"babel-loader",
					options:{
						presets:["es2016","react"]
					}
				},
				exclude:/node_modules/
			},{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('版权所有，翻版必究')
	]
}
