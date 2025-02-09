import 'dotenv/config'
import express from 'express';
// import { Twilio } from 'twilio';
import pkg from 'twilio';
const { Twilio } = pkg;

const app = express()
app.use(express.json())
const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN


const client =new Twilio(accountSid, authToken);

// for making a message to a verified twilio phone number 

// async function createMessage() {
//     const message = await client.messages.create({
//       body: "Hi there nigga",
//       from: process.env.PHONE_NUMBER,
//       to: "++923042281289",
//     });
  
//     console.log(message.body);
//   }
  
//   createMessage();

app.get("/",(req,res)=>{
    createCall();
res.send("Working fine")


})
async function createCall() {
    const call = await client.calls.create({
      from: process.env.PHONE_NUMBER,
      to: "+923042281289",
      url: "http://demo.twilio.com/docs/voice.xml",
    });
  
    console.log(call.sid);
    console.log(call);

  }
  
  createCall();



app.listen(5005,(req,res)=>{

})

