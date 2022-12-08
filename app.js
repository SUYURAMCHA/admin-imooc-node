const express = require('express')

// 创建 express 应用
const app = express()

// 日志中间件
const myLogger = function(req, res, next) {
  console.log('myLogger')
  next()
}

app.use(myLogger)

// 监听 / 路径的 get 请求
// app.get('/', function(req, res) {
//   res.send('hello node')
// })

app.get('/', function(req, res) {
  throw new Error('something has error...')
})

// post 请求
app.post('/', function(req, res) {
  res.send('hello node')
})

// 异常处理
const errorHandler = function (err, req, res, next) {
  console.log('errorHandler...')
  res.status(500).json({
    error: -1,
    msg: err.toString()
  })
  // res.send('down...')
  // res.send(err.toString())
}

app.use(errorHandler)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(3000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})