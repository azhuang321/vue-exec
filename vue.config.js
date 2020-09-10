module.exports = {
    devServer:{
        host:'127.0.0.1',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn/'
                ,changeOrigin:true
                ,pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}