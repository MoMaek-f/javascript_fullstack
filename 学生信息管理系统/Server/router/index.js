const router = require('koa-router')({
  prefix: '/smm'
})

const controllers = require('../controllers/automatch')
//登录接口
router.post('/index',controllers.index.login)
//学生信息相关的接口
router.get('/studentMess/queryAllStudentMessAction',controllers.studentMess.queryAllStudentMessAction)
router.get('/studentMess/queryOwnStudentMessAction',controllers.studentMess.queryOwnStudentMessAction)
router.post('/studentMess/updateStudentMessAction',controllers.studentMess.updateStudentMessAction)
router.post('/studentMess/addStudentMessAction',controllers.studentMess.addStudentMessAction)

module.exports = router