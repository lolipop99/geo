
const http = require('http')

const server = http.createServer((req,res)=>{
  res.status = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('hello world!')
})

server.listen(3000, '127.0.0.1',()=>{
  console.log(`Server running at http://127.0.0.1:3000`)
})
