module.exports={
	devServer:{
		// port:8000,
		proxy:{
			'/Home':{
				target:'http://m.muyingzhijia.com',
				host:'m.muyingzhijia.com',
				changeOrigin:true,
			},
			'/json':{
				target:'http://goods.api.muyingzhijia.com',
				host:'goods.api.muyingzhijia.com',
				changeOrigin:true,
			},
		}
	}	
}