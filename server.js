
/*jshint esversion: 6 */ 

const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const compression = require('compression');
const koaConnect = require('koa-connect');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  
  router.get('/filmes/', async ctx => {
    await app.render(ctx.req, ctx.res, '/buscaFilmes', ctx.query);
  });
  
  router.get('/filmes/:titulo/', async (ctx, next) => {
		await app.render(ctx.req, ctx.res, '/buscaFilmes', ctx.params)
	});
  

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

	server.use(koaConnect(compression()))

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  });
  
})