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
            "type": "flex",
            "altText": "Flex Message",
            "contents": {
              "type": "carousel",
              "contents": [
                {
                  "type": "bubble",
                  "hero": {
                    "type": "image",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "url": "https://firebasestorage.googleapis.com/v0/b/hackathon-5c71e.appspot.com/o/product1.jpg?alt=media&token=62926088-754b-44f9-bb91-89303c2380bd"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ก๋วยเตี๋ยวเอ็นตุ๋นเนื้อตุ๋นสมุนไพร",
                        "wrap": true,
                        "weight": "bold",
                        "size": "xl"
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "text",
                            "text": "69 บาท",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "style": "primary",
                        "action": {
                          "type": "uri",
                          "label": "สั่งซื้อสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "ดูรายละเอียดสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "bubble",
                  "hero": {
                    "type": "image",
                    "url": "https://firebasestorage.googleapis.com/v0/b/hackathon-5c71e.appspot.com/o/product2.jpg?alt=media&token=c463e892-a887-485a-9bd3-20f81876d772",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ก๋วยเตี๋ยวหมูตุ๋นสมุนไพร",
                        "size": "xl",
                        "weight": "bold"
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "text",
                            "text": "69 บาท",
                            "weight": "bold",
                            "size": "xl"
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "สั่งซื้อสินค้า",
                          "uri": "http://linecorp.com/"
                        },
                        "style": "primary"
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "ดูรายละเอียดสินค้า",
                          "uri": "http://linecorp.com/"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "bubble",
                  "hero": {
                    "type": "image",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "url": "https://firebasestorage.googleapis.com/v0/b/hackathon-5c71e.appspot.com/o/product3.jpg?alt=media&token=426e674c-f622-4251-86ae-11f6d4992f30"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ก๋วยเตี๋ยวเป็ดตุ๋นสมุนไพร",
                        "wrap": true,
                        "weight": "bold",
                        "size": "xl"
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "text",
                            "text": "69 บาท",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "style": "primary",
                        "action": {
                          "type": "uri",
                          "label": "สั่งซื้อสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "ดูรายละเอียดสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "bubble",
                  "hero": {
                    "type": "image",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "url": "https://firebasestorage.googleapis.com/v0/b/hackathon-5c71e.appspot.com/o/product4.jpg?alt=media&token=a0bb3264-ee4b-42a9-a548-b1af0d05d4f9"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "ก๋วยเตี๋ยวไก่ตุ๋นสมุนไพร",
                        "wrap": true,
                        "weight": "bold",
                        "size": "xl"
                      },
                      {
                        "type": "box",
                        "layout": "baseline",
                        "contents": [
                          {
                            "type": "text",
                            "text": "69 บาท",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                          }
                        ]
                      }
                    ]
                  },
                  "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "style": "primary",
                        "action": {
                          "type": "uri",
                          "label": "สั่งซื้อสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "ดูรายละเอียดสินค้า",
                          "uri": "https://linecorp.com"
                        }
                      }
                    ]
                  }
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