// const express = require('express')
// const app = express()
// const PORT = process.env.PORT || 8080

// app.get('/', (req, res) => res.send('Hello World'))
// app.post('/webhook', (req, res) => res.sendStatus(200))




// app.listen(PORT, () => {
//     console.log(`Server is running on port : ${PORT}`)
// })

// module.exports = app
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 8080
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token
    try {
        reply_token = req.body.events[0].replyToken
    } catch (err) {
        res.sendStatus(403)
    }
    reply(reply_token)
    res.sendStatus(200)
})

app.listen(port)

function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {IpRxqcEwa87ScXKBhisyCLEMzb2ETuH5tLHKFVkdCYln5OflI6VG0vntiW2k98iYcnUcF8t7RCdINGEHcm93h/coKx3FpU9YvD1kiVJhSAufWCVglLxEDh4W+sJmCWiaJiw4f6us/zswKf9QTNU4xwdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'สวัสดีต่าาา'
        },
        {
            type: 'text',
            text: 'แล้วไปละ'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}