const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const app = new Koa();

const prifix = '/'

app.use(mount(prifix,serve(__dirname + '/dist')));
 
app.listen(3000);
 
console.log('listening on port 3000');