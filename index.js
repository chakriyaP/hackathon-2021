const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
    let reply_token = req.body.events[0].replyToken
    // res.status(403)

    // try {
    //     let reply_token = req.body.events[0].replyToken
    // } catch (err) {
    //     res.status(403)
    // }
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
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
              "type": "carousel",
              "imageSize": "cover",
              "imageAspectRatio": "rectangle",
              "columns": [
                {
                  "thumbnailImageUrl": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                  "title": "ก๋วยเตี๋ยวเอ็นตุ๋นสมุนไพร",
                  "text": "ุ69 บาท",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "สั่งซื้อสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    },
                    {
                      "type": "uri",
                      "label": "รายละเอียดสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "thumbnailImageUrl": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                  "title": "ก๋วยเตี๋ยวหมูตุ๋นสมุนไพร",
                  "text": "ุ69 บาท",
                  "actions": [
                    {
                      "type": "uri",
                      "label": "สั่งซื้อสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    },
                    {
                      "type": "uri",
                      "label": "รายละเอียดสินค้า",
                      "uri": "https://glacial-plateau-06583.herokuapp.com/"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "thumbnailImageUrl": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
                  "title": "ก๋วยเตี๋ยวเป็ดตุ๋นสมุนไพร",
                  "text": "ุ69 บาท",
                  "actions": [
                    {
                      "type": "message",
                      "label": "สั่งซื้อสินค้า",
                      "text": "Action 1"
                    },
                    {
                      "type": "message",
                      "label": "รายละเอียดสินค้า",
                      "text": "Action 2"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
                },
                {
                  "thumbnailImageUrl": "PROVIDE_URL_FROM_YOUR_SERVER",
                  "title": "ก๋วยเตี๋ยวไก่ตุ๋นสมุนไพร",
                  "text": "ุ69 บาท",
                  "actions": [
                    {
                      "type": "message",
                      "label": "สั่งซื้อสินค้า",
                      "text": "Action 1"
                    },
                    {
                      "type": "message",
                      "label": "รายละเอียดสินค้า",
                      "text": "Action 2"
                    }
                  ],
                  "imageBackgroundColor": "#FFFFFF"
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