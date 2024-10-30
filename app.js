const express = require('express')
const path = require('path');
const app = express()
app.use(express.static('public'))
const host = 'http://127.0.0.1'
const port = 3000
const postController = require('./Controllers/postsController')

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})


app.get('/home', (req, res) => {
    res.send('<H1>Benvenuti nel mio blog!</H1>')
  })

  app.get('/post' ,postController.index)

  app.get('/', (req, res) => {
  
    res.sendFile(path.join(__dirname,'public', 'index.html'));
    
  })