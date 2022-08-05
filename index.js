const express = require('express')
const app = express()

const {serverConfig} = require('./config/settings')
const { routerHome } = require('./controller/routes/home')

app.set('view engine', 'ejs');
app.use(express.static('views/static'));

app.use('/', routerHome)

app.listen(serverConfig.port, () => {
    console.log("SERVER IS RUNNING!")
})