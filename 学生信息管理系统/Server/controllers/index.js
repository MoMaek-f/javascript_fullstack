const {mysql} = require('../mysql')

async function login(ctx) {
  const value = ctx.request.body
  const data = await mysql('users').where({
      'admin_username': value.username,
      'admin_password': value.password,
  }).select()
  // console.log(data)
   
if(data!='') {
  ctx.body = {
    'data': true
  }
}
else {
  ctx.body = {
    'data': false
  }
}  
}

module.exports = {
  login
}
