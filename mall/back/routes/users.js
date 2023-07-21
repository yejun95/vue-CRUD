const express = require('express');
const router = express.Router();
const db = require('../config/database');
const session = require('express-session');

router.post('/login', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    if(id && pw) { //id와 pw가 입력되어있는지 확인
        db.query('select count(*) from user where user_id = ? and user_pw = ?', [id, pw], (err, result) => {
            if (err) {
                console.log('로그인 error')
            }
            if (result[0]['count(*)'] > 0) { // result 0번쨰 인덱스에 위치한 count(*)의 값을 비교 -> 1이면 if문 진입
                req.session.loggedIn = true; // loggedIn이라는 변수로 세션을 생성
                req.session.username = id; // 가져온 id에 세션을 부여
                console.log(req.session.loggedIn)
                res.send('1');
            } else {
                res.send('0');
                // res.send(alert('로그인 정보가 일치하지 않습니다.')) => alert is not defined 오류 발생
            }
        });
    }
});

// header에서 v-if로 로그인 체크하는 것
router.post('/check-login', (req, res) => {
    if(req.session.loggedIn) {
        res.send('good')
    } else {
        res.send('bad')
    }
})

// 로그아웃
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('세션 삭제 실패:', err);
        res.status(500).send('세션 삭제 실패');
      } else {
        console.log(res)
        res.sendStatus(200);
      }
    });
  });

// 회원가입
router.post('/register', (req, res) => {
    const id = req.body.id;
    const pw = req.body.pw;
    db.query('INSERT INTO user (user_id, user_pw) VALUES (?, ?)', [id, pw], (err, result) => {
        if (err) {
            console.log('Database error');
        } else {
            console.log('회원가입 성공');
        }
    });
});



module.exports = router