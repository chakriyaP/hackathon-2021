const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Hello World'))
app.post('/webhook', (req, res) => res.sendStatus(200))

app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})

module.exports = app