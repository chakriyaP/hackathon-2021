const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const {WebhookClient} = require('dialogflow-fulfillment');


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

// app.post('/fulfill', (req, res) => {
//     console.log("new ");
//     const agent = new WebhookClient({
//       request: req,
//       response: res
//     });
  
//     //Function Location
    
//     // Run the proper function handler based on the matched Dialogflow intent name
//     let intentMap = new Map();
//     intentMap.set('framchise package - custom - yes', informbilling);  // "Location" is once Intent Name of Dialogflow Agent
//     agent.handleRequest(intentMap);
//   });

app.listen(port)

// function informbilling(agent) {
//     // let {set} = req.body.queryResult.parameters
//     agent.add(`คุณสั่งชุด`);
// }


function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {IpRxqcEwa87ScXKBhisyCLEMzb2ETuH5tLHKFVkdCYln5OflI6VG0vntiW2k98iYcnUcF8t7RCdINGEHcm93h/coKx3FpU9YvD1kiVJhSAufWCVglLxEDh4W+sJmCWiaJiw4f6us/zswKf9QTNU4xwdB04t89/1O/w1cDnyilFU=}'
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [
            {
              type: `text`,
              text: "ขอบคุณที่ใช้บริการค่ะ"
            }
          ]
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


