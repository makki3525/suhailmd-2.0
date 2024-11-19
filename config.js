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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923245643588,923257607934,923005705557,923190446934";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_32_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg5LFxuICAgICAgICA2NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTkyLFxuICAgICAgICA1OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDM2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA2NCxcbiAgICAgICAgODksXG4gICAgICAgIDIzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDksXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2WkxGK0pvdTFHUVJUVWRRZUU5TnprbS9oYWlCNzBvdDhhdHI3U2U5aUcwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzeldaaVdYd1QxZWsyV3d4U19iT2lnXCIsXG4gIFwicGhvbmVJZFwiOiBcImM2OTdiNTlmLWZmNWEtNDdkNS05OGU4LTdiYjJmOTg1YzJhNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNCxcbiAgICAgIDgsXG4gICAgICA4NCxcbiAgICAgIDIzNixcbiAgICAgIDE0NixcbiAgICAgIDk0LFxuICAgICAgMTY3LFxuICAgICAgMTA4LFxuICAgICAgMjI5LFxuICAgICAgMTAzLFxuICAgICAgMjMxLFxuICAgICAgMTI4LFxuICAgICAgMjUsXG4gICAgICA5MixcbiAgICAgIDAsXG4gICAgICA4NixcbiAgICAgIDEyMCxcbiAgICAgIDYwLFxuICAgICAgMjgsXG4gICAgICAxMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgNjMsXG4gICAgICAyMzcsXG4gICAgICA1MyxcbiAgICAgIDkxLFxuICAgICAgMTg5LFxuICAgICAgMjQyLFxuICAgICAgMjQwLFxuICAgICAgNjEsXG4gICAgICAxMTIsXG4gICAgICAxNzIsXG4gICAgICAxNTIsXG4gICAgICAxMzEsXG4gICAgICAxNzYsXG4gICAgICAxNTksXG4gICAgICAzMyxcbiAgICAgIDIyNyxcbiAgICAgIDEyNSxcbiAgICAgIDEyNixcbiAgICAgIDEzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMkdUWlBNTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjU3NjA3OTM0OjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMTY1MjcyNjEwMzY2NDg6MzhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERkczVnREVPeXVucmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJYeldtNlFzNnROM2hmOFFveVFMbnJKY3lRQndSS3lraFQ1Q3RGU2tRQzJVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpzRm1mVE5Ddk1xV2RXTW10eUFacU9aUzJzaXhzSnBFQzMyM0xYdXFNRjhpYksrRFg0Uk9NdnUzVnA0VnUzdzZoQUxuRlp2bEo1bnhVdGlPYTk2cERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjBQZXVZM1p3cEpIY09MbTRRTEtCRnFtSVEyeElSS3FHR2V6MnpvamlHRVN5dGVSS2pVTm9NQWMwR0RNdzYzd2UvL1F2VFJVN1l1NjVDWkFyMjltTUJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI1NzYwNzkzNDozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjQ3OTE5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhHXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWEcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJOU3M1cDZXdHpMOEF6ZStzbXVRTTJvYUJ2elJLeXNLckdrNkI3QnVLNFFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg1NjQ4NTYxNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNjQ3OTIyODExXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "BatmanMD" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝘼𝙃𝙈₇ 𝙎𝙩𝙞𝙘𝙠𝙚𝙧𝙨",
  packname: process.env.PACK_NAME || "Made By",
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
