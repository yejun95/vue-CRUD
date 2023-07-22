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
})


module.exports = router