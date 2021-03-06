const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/assets')))
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render('index')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("LISTENING AT PORT 3000")
})