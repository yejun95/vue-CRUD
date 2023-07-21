var express = require('express');
var router = express.Router();

// header에서 로그인,로그아웃 구현
// router.post('/check-login', (req, res) => {
//   if (req.session.loggedIn && req.session.username) {
//     res.json({
//       loggedIn: true,
//       username: req.session.username
//     });
//   } else {
//     res.json({
//       loggedIn: false
//     });
//   }
// });

module.exports = router;
