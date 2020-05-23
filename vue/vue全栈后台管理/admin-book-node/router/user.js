const express = require('express')

// 注册路由
const router = express.Router()

router.get('/info',function (req,res,next) {
  res.json('user info ....')
})

module.exports = router