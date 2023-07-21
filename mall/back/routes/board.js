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
router.get('/detail', function(req, res, next) {
    const idx = req.body.idx;
    db.query('select * from board where idx = ?', [idx])
})


module.exports = router