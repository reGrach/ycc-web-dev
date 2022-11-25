const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.post('/login', (req, res) => {
    res.send('Вход выполнен!')
})

app.post('/registration', (req, res) => {
  res.send('Регистрация завершена!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})