const express = require('express')
require('./stats') 


app = express()

const appPort = '3000'

app.get('/' , (req, res) =>{
  res.send('Hello World')
})



app.listen(appPort,listenCallback)

function listenCallback(){
console.log(`Server is running at port ${appPort}`)
}