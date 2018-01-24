var express = require('express')

var app = express()

app.use(express.static('static')).listen(3000, ()=>{
  console.log(`server running at http://localhost:3000`)
})
