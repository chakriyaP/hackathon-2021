const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const {
    WebhookClient
  } = require('dialogflow-fulfillment');

const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/webhook', (req, res) => {
    if (req.method === "POST") {
        let event = req.body.events[0]
        if (event.type === "message" && event.message.type === "text") {
          postToDialogflow(req);
        } else {
         let reply_token = req.body.events[0].replyToken
          reply(reply_token);
        }
      }
    return res.status(200).send(req.method);
})

app.post('/fulfillment', (req, res) => {
    const agent = new WebhookClient({
      request: req,
      response: res
    });
  
    //Function Location
    function informbilling(agent) {
        // let {set} = req.body.queryResult.parameters
        agent.add(`คุณสั่งชุด`);
    }
  
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('framchise package - custom - yes', informbilling);  // "Location" is once Intent Name of Dialogflow Agent
    agent.handleRequest(intentMap);
  });

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

const postToDialogflow = req => {
  req.headers.host = "bots.dialogflow.com";
  return request.post({
    uri: "https://bots.dialogflow.com/line/362d4e3b-583c-4eee-a1f2-36ea28a4f312/webhook",
    headers: req.headers,
    body: JSON.stringify(req.body)
  });
};


