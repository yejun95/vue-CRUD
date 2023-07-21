const createError = require('http-errors');
const express = require('express');
const session = require('express-session')
const Memorystore = require('memorystore')(session)
const cookieParser = require('cookie-parser');
const path = require('path');
const logger = require('morgan');
const mysql = require('./config/database')
const app = express();

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
