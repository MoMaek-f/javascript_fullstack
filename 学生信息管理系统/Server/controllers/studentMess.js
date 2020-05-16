const {mysql} = require('../mysql')

async function queryAllStudentMessAction(ctx) {
  const data = await mysql('student_message').select()

  if(data) {
    ctx.body = {
      'data': data
    }
  }
  else {
    ctx.body = {
      'data': false
    }
  }
}
async function queryOwnStudentMessAction(ctx) {
  const value = ctx.request.body
  const data = await mysql('student_message').where({
    'stu_number': value.username
  }).select()

  if(data) {
    ctx.body = {
      'data': data
    }
  }
  else {
    ctx.body = {
      'data': false
    }
  }
}
async function updateStudentMessAction(ctx) {
  const data = await mysql('student_message').where({
    'stu_number': 'value.number'
  }).update({
    'stu_name': '',
    'stu_number': '',
    'stu_birthday': '',
    'stu_address':'',
    'stu_telephone':'',
    'stu_pic_url':'',
    'stu_id':'',
    'stu_study_status':''
  })
  if(data) {
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
async function addStudentMessAction(ctx) {
  const value = ctx.request.body
  if(!value.stu_id && !value.stu_number) {
    const data = await mysql('student_message').insert({
      'stu_name': '',
      'stu_number': '',
      'stu_birthday': '',
      'stu_address':'',
      'stu_telephone':'',
      'stu_pic_url':'',
      'stu_id':'',
      'stu_study_status':''
    })
    if(data) {
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
}
async function deleteStudentMessAction(ctx) {
  const data = await mysql('student_message').where({
    'stu_number': 'value.number'
  }).delete()
  if(!data) {
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
  queryAllStudentMessAction,
  updateStudentMessAction,
  addStudentMessAction,
  deleteStudentMessAction,
  queryOwnStudentMessAction
}