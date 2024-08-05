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
global.owner = process.env.OWNER_NUMBER || "2348031111297";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1AyQXlNWURJSE5ueHVTME83MkFvbHdKRUJsVmNKZGVhK2RHYzdaTnQyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm1RRDVrZG1yZVNpRGZyV3Z0bkprNFQxaU9UUjQ3RkVRMzVIUTJnZW9pQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSG4rdWJESlVNQnVmL0krb3VCd1RzU3FEZU1sT1pHelFBYzdZVXVHUVdnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0ZjlnUFhuOC9WeVFPUURHYW4rL0s0SnZOWjU4V0d0OHIzQ1dVMVlsM3gwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGQUlrVHRmS3U1blExdGtGVHR6NW54Q2p5SVdUK3hpUzhsZHVFa0pRRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg2YXdvWGxFeVFZQ0pJcGQraXRIaDZJVzg1SXlBRmt2ODJFZXprU3hBelk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUlkeGhZdUo0UmpOZGJHUUNMSk1ta1RpVDJXeHpCOFdQYVZXZithalBuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmdNMWR6MVhWUkZBMTArZ2Z2NktUQzhLQjJ4V1pMNGp4c3FzcFdDd3oyaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZDSFIzWnhubFIybE5CckMvRmFzL0pnREhGcFdjQ25NemloMGExQXhiZXBiT244N05uMWxsRDF6NHZ6dGJwZFU1ei9sVDh5T0J2RG5YaDlGcmQ0MkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJEa3VSS3g1RjAvdG4xOEJJeUtUcDFUV3h1MElqVlo4azc4L2ZKOTJGc3VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHNmRMTnI0QlRoS0RCVjNlT1BiRmpRIiwicGhvbmVJZCI6ImJmNzA4NDY4LWI0ODUtNGVkMi1hNjgxLTNmOGZhMGQ5Mzc1YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuOFdnMkpHbHM2ZnBEU2x0QUJVbTg1WGNvZkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUZ2aGpNbkdUNGVjSm9iZGtpYUViQndxWHVNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdTRUxQQU1GIiwibWUiOnsiaWQiOiIyMzQ4MDMxMTExMjk3OjUwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRyZWFzdXJlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZUx4ZmNGRUxicnc3VUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMOFBQSlBQYzBEK1BDSHczZWc4ekJYZGJ6cnp5VzEvWWpkMTI1dmtYR2tjPSIsImFjY291bnRTaWduYXR1cmUiOiI0QWlYZGpOMElCM2J5a3NrQUwzODAvUkVqdHNiQTNvK3h2TVVUL281K1ZvbW1US29kUEtKdnhjdkxmaldicVhWTE80RTB5OWl5bVhCM1RFb1IzNjJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoib0dNSmF2ZTUyb2hZZ3dvaTJQM1VSbkMxRVl0ZzA1Tm0xWjYvQUk5SWNvcUMyU1ZqV2ptS0VqbjQvNnRwOWhoYkNPdkQzZjVyUWR5LytBTTNPVS8zQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDMxMTExMjk3OjUwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlMvRHp5VHozTkEvandoOE4zb1BNd1YzVzg2ODhsdGYySTNkZHViNUZ4cEgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NzMyODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRFhQIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
