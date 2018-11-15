const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();
const singinData = require('./singin.js')   //登录接口
const ListData = require('./list.js')

// post请求提交数据时 解析request的body
const bodyParser = require('koa-bodyparser');
app.use(bodyParser()); 

// 允许跨域设置
const cors = require('koa-cors');
app.use(cors({
    origin: '*',
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 500,
    credentials: true,  //cookie
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

const handler = async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
};

const test = ctx => {
    ctx.response.type = 'json';
    ctx.response.body = 'test'
}

const signin = ctx => {
    ctx.response.type = 'json';
    ctx.response.body = singinData
}

const list = ctx => {
    ctx.response.type = 'json';
    ctx.response.body = ListData
}

app.use(handler);
app.use(route.get('/test', test));
app.use(route.post('/auth/signin', signin));
app.use(route.get('/list', list));
app.listen(2000, function(){
    console.log('server is listening at 2000...')
});

