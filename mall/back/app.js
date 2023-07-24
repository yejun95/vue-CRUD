const createError = require('http-errors'); // error가 났을 때 내가 원하는 페이지를 만듬.
const express = require('express'); // 익스프레스 모듈 생성
const session = require('express-session'); // 익스프레스-세션 모듈 생성
const Memorystore = require('memorystore')(session); // 세션을 담을 저장소
const path = require('path'); // 경로 지정시 사용하는 모듈
const logger = require('morgan'); // 콘솔에 서버 관련 정보가 도출 ex) 404, 200 에러 등
const mysql = require('./config/database'); // mysql 연결을 하는 폴더 조회
const app = express(); // 익스프레스 사용

// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
// })

// app.get('/', function(req, res) {
//   res.sendFile("Hello Chating App Server");
// })

mysql.connect();
// router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');

// session
let maxAge = 60*1000 // 서버에 저장할공간
app.use(session({
  secret: "asdasd", // 암호화 값
  resave: false, // 요청이 왔을 때 세션을 수정하지 않더라도 다시 저장소에 저장
  saveUninitialized: true, // 세션이 필요할 떄 세션을 실행 (서버의 부담 줄이기 위해)
  store: new Memorystore({ checkPeriod: maxAge }), // 데이터 저장 형식, checkPeriod : 서버쪽 세션의 유효기간
  cookie: {
    maxAge: maxAge // 유효기간만 설정해줌, 그 외 HttpOnly, Path 등이 존재
    }, 
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);

// 등록되지 않은 path로 요청이 왔으면 404페이지를 만들어야함.
// http-errors 모듈로 error 객체 생성 후 에러 처리 핸들러로 넘김
app.use(function(req, res, next) {
  // error 생성 후 next
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // error 템플릿에 전달할 데이터 설정
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
