const express = require('express');
const router = express.Router();
const db = require('../config/database');

// 게시판 전체 리스트 조회
router.get('/list', function(req, res, next) {
    db.query('select * from board', (err, rows, fields)=>{
        res.send(rows);
    })
})

// 게시판 상세 정보 조회
router.get('/detail/:idx', function(req, res, next) {
    console.log(req.params.idx);
    const idx = req.params.idx
    db.query('select * from board where idx = ?', [idx], (err,rows,file) => {
        res.send(rows);
    });
});

router.get('/edit/:idx', function(req, res, next) {
    console.log(req.params.idx);
    const idx = req.params.idx
    db.query('select * from board where idx = ?', [idx], (err,rows,file) => {
        res.send(rows);
    });
})


// 게시판 글쓰기
router.post('/boardWrite', function(req, res){
    const boardTitle = req.body.boardTitle;
    const boardContent = req.body.boardContent;
    const boardId = req.body.boardId;
    db.query('insert into board (title, content, date, user_id) values (?, ?, now(), ?);', [boardTitle, boardContent, boardId], (err, rows) => {
        res.send(rows);
    });
})

// 게시판 지우기
router.delete('/delete/:idx', function(req, res) {
    const idx = req.params.idx;
    db.query('delete from board where idx = ?', [idx], (err, rows) => {
        res.send(rows);
    })
})

// 게시판 업데이트
router.put('/edit/:idx', function(req, res){
    const title = req.body.title;
    const content = req.body.content;
    const idx = req.params.idx;
    db.query('update board set title=?, content=?  where idx = ?', [title, content, idx], (err, rows) => {
        res.send(rows)
    })
})

module.exports = router