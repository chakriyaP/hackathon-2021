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
            text: 'สวัสดีค่าาา'
        },
        {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "imageSize": "cover",
              "imageAspectRatio": "rectangle",
              "columns": [
                {
                  "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
                  "title": "Set 1",
                  "text": "19,900 บาท",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "สั่งซื้อสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    },
                    {
                      "type": "uri",
                      "label": "รายละเอียดเพิ่มเติม",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
                  "title": "Set 2",
                  "text": "39,900 บาท",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "สั่งซื้อสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    },
                    {
                      "type": "uri",
                      "label": "รายละเอียดเพิ่มเติม",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
                  "title": "Set 3",
                  "text": "159,900 บาท",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "สั่งซื้อสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    },
                    {
                      "type": "uri",
                      "label": "รายละเอียดเพิ่มเติม",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    }
                  ]
                }
              ]
            }
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