//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "+2348031111297";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEc2SmxmL0hvcTBPejdJcTJkRHpDcDlsYmV6UGRQdGJaM0tiaDJUQnMzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1pab0xVQXpjbHgxeFUxWm4yWmdTSk42VkpBZ1ZSSEtVYUFxQ1ZWbG5RMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSjF2dGZnMFF6dTgwV1FBMENLOCtJZjVCTEZvOFY1SkUwT25ZVVdCeFZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjbjJwd2pVTDMrNGJIYytUUUJmZ0t3RkpqNGdFKzl1MGJNUlAvaUhnQWs4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNeUp2NTQyamRvZG5YQ1RnSzBPenkyQVVpSlJwUVRLeG9lVEhiZldaV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZMQi8rNks1Yk41bkZUU2dNRktQUXc3Z0YvczFKTGRzQlBvdHB5NnNPSFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0E4OUpqdWNZdlo1eVhhUUNLVmgxenF1Ujh6TGlncnRyblhSbFZ3WGptWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFxN1lOMm9neFlZSU4wNTZHNC9qSzJOdGZIczhJRDlidXZqaGthWDdqND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjExTEQzZTI1ZkZHYXovNSt4WFBBQkgvdGszRng5Q2JtdTlqeHFSZEx6ek4yMVVaVjNRSmswazBJTGgyT014Q2JhMHQ3cmZJU1Y4UzN1Y0k0TERtckRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IkRUOXRmMXhzd1krejdpNlFvcVA1elN3ckFTcmMrK085Yk1KaHhyMFl0YkE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik83a1Y1VFpVUWF1OHE1RVR0QU5ZSFEiLCJwaG9uZUlkIjoiMzA5OTgyMWYtZTE3MC00OTBhLWIxMWMtNmI4NWUwMmIyNmFmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IWms1NEVlbTBFb0tqaWFHTGx1cEhqWHgraz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTU9TTmMxaGdqN2x4ZVQ3bTJsci8zSTlrK0k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEQ0VE0yREwiLCJtZSI6eyJpZCI6IjIzNDgwMzExMTEyOTc6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVHJlYXN1cmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xhTHhmY0ZFT0tqd0xVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikw4UFBKUFBjMEQrUENIdzNlZzh6QlhkYnpyenlXMS9ZamQxMjV2a1hHa2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii8yVXhXdlBZbURyRTRSTGZMT2pqMU1OR2RKRmliMk1pc1EzV3h1S1FRZ0ZhOGtGKzl2TndIM1BjdlQ3bTY0aWJxS1crbEtLMmhuUXRZVWRMWE1jbkF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkRGFxS3dwb0tLTXk1RjhSZEJxNFpHMEk2UlZyWEZSU2NMVmJVQThjWEF1elBVVlRhaEpIQTlRa1NGVStqbWZLVXR0OUt4TzIrSkJQYjIrM21ybkdEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMzExMTEyOTc6NDNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUy9EenlUejNOQS9qd2g4TjNvUE13VjNXODY4OGx0ZjJJM2RkdWI1RnhwSCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjgxNDk2MX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "Bolt_x-V2",
  ownername: process.env.OWNER_NAME || "Boltkuma",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
