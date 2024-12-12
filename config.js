const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Mellow911:1234@cluster0.ewxqmjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Mellow911:1234@cluster0.ewxqmjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "null";
global.website=process.env.GURL || "null" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "null" || "null" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© BatmanMD" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923245643588,923257607934,923005705557,923365100676";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923245643588";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "null" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_29_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4LFxuICAgICAgICAzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDg3LFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY5LFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0aFhDbnJabG5PNXg0eGR1M1NwYmtCR05JYk5hdmtQTzBQMFROYmptUzZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2b1lBNnZRdFJqQ0RYcnpDOU5JWlBRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZkMGRlYTcyLTQ2NzAtNGE0OC1iY2MyLTIyODQ0YzgzMmRhZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5LFxuICAgICAgMjM2LFxuICAgICAgMTAzLFxuICAgICAgNDcsXG4gICAgICA0NCxcbiAgICAgIDUzLFxuICAgICAgMjM0LFxuICAgICAgMjI5LFxuICAgICAgMTQ1LFxuICAgICAgMjYsXG4gICAgICAxNjEsXG4gICAgICAxNDYsXG4gICAgICAxMzcsXG4gICAgICAyNDksXG4gICAgICAxMzgsXG4gICAgICAxMTksXG4gICAgICA3MixcbiAgICAgIDEzMyxcbiAgICAgIDcyLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgMTEsXG4gICAgICA3NixcbiAgICAgIDI0NyxcbiAgICAgIDE1OSxcbiAgICAgIDMwLFxuICAgICAgMTAyLFxuICAgICAgMTI2LFxuICAgICAgMTI0LFxuICAgICAgMjE2LFxuICAgICAgMjI3LFxuICAgICAgMTU3LFxuICAgICAgMzQsXG4gICAgICAxOTIsXG4gICAgICAxNjksXG4gICAgICAxNTcsXG4gICAgICA1OCxcbiAgICAgIDEyLFxuICAgICAgMjU0LFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVQWDdHUEw2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyNTc2MDc5MzQ6NDNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjExNjUyNzI2MTAzNjY0ODo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRGRzNWdERUtMcDZib0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlh6V202UXM2dE4zaGY4UW95UUxuckpjeVFCd1JLeWtoVDVDdEZTa1FDMlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYkFZbnlEK0pwMzlWVzAvTmgyV0NoNTNVVnNwd1U1ZEoyZktqY3dZNXdHejF1b1lvdDRCM2FYeXVGWEpVeUdBT1RtVnltZk55TGdJd0oyZnB0Z1hsQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRm5FRGZON29hY3JUWk0wK0o5MHhFUzlJd3lvdFlHRVp3b01wWWs5bUpaejgwb3d2elJVSWlvRTcycEVqWTBhWUEyM2I3NzM0Szg3aHFZNnJFNFJKQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjU3NjA3OTM0OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5ODEzNTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNWEhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1YSC5qc29uIjogIntcImtleURhdGFcIjpcIklsZGNOVjB0SkhUeVNZQUtSS0dGSTVsUHkxV3JaU3VqVkZQY3BDbVpRaWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODU2NDg1NjE2LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "BatmanMD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝘼𝙃𝙈₇",
  packname: process.env.PACK_NAME || `
𝘼𝙃𝙈₇ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨
•
•
𝙝𝙚𝙮𝙡𝙞𝙣𝙠.𝙢𝙚/𝘼𝙝𝙢𝙏𝙚𝙘𝙝 
• 
𝙒ʜᴛ𝙨ᴀᴘᴘ 𝘾ʜᴀɴɴᴇʟ 𝙇ɪɴᴋ
(ᵗʸᵖᵉ ᵗʰᵉ ˡⁱⁿᵏ ⁱⁿ ʸᵒᵘʳ ᶜʰᵃᵗ ᵃⁿᵈ ʲᵒⁱⁿ)
▼▼▼▼▼▼
𝙩𝙞𝙣𝙮𝙪𝙧𝙡.𝙘𝙤𝙢/2𝙙𝙣52𝙪𝙭𝙗
`,
  botname : process.env.BOT_NAME  || "BATxSUHAIL-MD",
  ownername:process.env.OWNER_NAME|| "Muhammad Makki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
