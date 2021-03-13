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
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Arm Chair, White",
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
                            "text": "$49",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                          },
                          {
                            "type": "text",
                            "text": ".99",
                            "wrap": true,
                            "weight": "bold",
                            "size": "sm"
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
                          "label": "Add to Cart",
                          "uri": "https://linecorp.com"
                        }
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to wishlist",
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
                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_carousel.png"
                  },
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "text",
                        "text": "Metal Desk Lamp",
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
                            "text": "$11",
                            "wrap": true,
                            "weight": "bold",
                            "size": "xl"
                          },
                          {
                            "type": "text",
                            "text": ".99",
                            "wrap": true,
                            "weight": "bold",
                            "size": "sm"
                          }
                        ]
                      },
                      {
                        "type": "text",
                        "text": "Temporarily out of stock",
                        "wrap": true,
                        "size": "xxs",
                        "margin": "md",
                        "color": "#ff5551"
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
                        "color": "#aaaaaa",
                        "action": {
                          "type": "uri",
                          "label": "Add to Cart",
                          "uri": "https://linecorp.com"
                        }
                      },
                      {
                        "type": "button",
                        "action": {
                          "type": "uri",
                          "label": "Add to wish list",
                          "uri": "https://linecorp.com"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "bubble",
                  "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [
                      {
                        "type": "button",
                        "gravity": "center",
                        "action": {
                          "type": "uri",
                          "label": "See more",
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