
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pHSWhISnNDNVFwQ052Zk5KTUh0dWVuS3MyYjBCRlZlZzhzYjBIaHlWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYytRa08xclJmMFVEWSt2d25vL0hMVFVCVkVJTzlueGZXYWFPYkE3TUh5cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TCtqM1paUHFUREhzT2F4QjBOSTYxY3RWRzBtbXV1Y1JhOWVqUG5YVFdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLVjNFYVZQRklnQzV2dnhUV244MXRiNVo3cFFtSEZ0amtHdTZXRko4ZGh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklHVTdMQ1dTNk0yWU1WTUFhKzBJRldNTGZJUzM3Ymh6LzhwZFVneVEzMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0zczJ3cktlRFVwaDl2Q2orT01IM2ZHN0pFb2JaK1I2aWNBME5rQXFLbWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0RCSmJEWmVway8xN1IyK0x3akpKbDhmMDliNjViUkI3ZDZTcEFlTWhHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTndvODVNLzlCdDFYYkRoQjF3VUVZZlNHbUpqU2FxMnNLMU5UNXduT2REST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhseWJsNThLbWs5ZmxrN3hJMytieVRmaGc0THFHVUpLTG9OUWJjejQvdnMrbXF1ZG55LytIeUw4K3ZoN0I4OGhRZllRU1ZzUmNweTFPTCszY0VFcERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJpVmpkeEJ2cDc2UnFDMWFhRVFNamVpVXNMVTlIakV1L3NzR3YyV0V0MlJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjM0NjgzNzg3MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg5RTkxN0VBOTMzOUNCQzY2QzdGQTYxOTYyMDI0RDdGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwODcwNjh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjM0NjgzNzg3MTY3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY1MzRDN0JBMEM2MTFDRTlCNzhGQUVEMDVDRjYwMENGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjIwODcwNjh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlJxUmliaFVkUURDOFhuY0t4ZE83b2ciLCJwaG9uZUlkIjoiNTY1YjNhZWYtODc2Ni00NmVlLWE3ZGYtMWVkMDgxNzY1MGI3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBzb1pya0tMR3lGOHkyQWgzZnZxZ2ZocmpNTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVS9rUDdnaHNobjlHZzUweU8xNjVBNW5aNEE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMUU1RjY4S0YiLCJtZSI6eyJpZCI6IjM0NjgzNzg3MTY3OjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuODi+ODj+ODqy3jgrYt44OH44OT44OrIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcVZubnNRamUyVHRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJTVkU4MU1qY29Ud2VnT05WN2xDM0dlRWpjdFZETkxxYlpXdG9BK3dNWHpjPSIsImFjY291bnRTaWduYXR1cmUiOiJTN2l3aTFxS3RBS05WVFpzdVI2ZjM1MWtmejRCY0o3a1lRaWdJQTN4Y2d6OEQzZFFSQVIzaVQzaDdpb21rS0dnNlcyQzIyNVpaeGI3VDFnWTJPSGlCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRVF2NDlxRDdoOCtHUWQ1T1o3cWRocUJWZHBTSmxhMFk4L2RmdlZrVW9oUWkreHBqT2k1bzhqNXFLNEw1VjJrQXQva2Z4MENqaXh6VUFEWFFtYi8rQVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIzNDY4Mzc4NzE2NzoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVbFJQTlRJM0tFOEhvRGpWZTVRdHhuaEkzTFZRelM2bTJWcmFBUHNERjgzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDg3MDY2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1IUiJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
