const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const api = require('./api');

const app = new Koa();
const router = new Router();
/*
//라우터 설정
router.get('/', ctx => {
  ctx.body = '홈';
});

router.get('/about/:name?', ctx => {
  const { name } = ctx.params;
  //name의 존재 유무에 따라 다른 결과 출력
  ctx.body = name ? `${name}의 소개` : '소개';
});

router.get('/posts', ctx => {
  const { id } = ctx.query;
  //id의 존재 유무에 따라 다른 결과 출력
  ctx.body = id ? `포스트 #${id}` : '포스트 아이디가 없습니다.';
});

*/
/*
http://localhost:4000/about/react
http://localhost:4000/posts
http://localhost:4000/posts?id=10
*/

//라우터 설정
router.use('/api', api.routes()); //api 라우트 적용

//라우터 적용 전에 bodyParser 적용
app.use(bodyParser());

//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

//포트를 4000번으로 열고, 서버에 접속하면 'hello world'라는 텍스트를 반환하도록 설정했다
