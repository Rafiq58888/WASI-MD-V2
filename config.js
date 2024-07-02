//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923409686413";
global.owner = process.env.OWNER_NUMBER || "923405452658";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR004cE5jTGFjeVhnNkoxNll6SExodlkrTHM2ZG9JWVNQTkU5eGwwdUJHdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidzVSRTFJcktmaEdPYUo1eTdJOWhiSXJ1YnI5U0s5YlRzTjFiNmsrMG5Vdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTktsaXdhWEs2aDVhSHZyZEJSVFRDM2F1TUZxZUZya0UwUjdzcHRVWjFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZY1NEbmVydGVka04rLzRvdmwwNEFCN2ZBTGkzMitYaUNyZmxhSjI3TEh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEUGM0NWVwMWxZdzQ1RWMxWmc0Z3RJdlJlMEZSc3VEWlQ4UUdwT05wM2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFsWFN4Y01mMXNDWm5tcWsvMkc5eFVFR3QrM2E5UU1XVGoveEJ5WVRaU1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUd5N293S2I0YVl0WGt1cUNCa0prcWo5MzJ5ci95Z3FNY2hkSk9PZi9sbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGJiWjg3ZEROVGQxa2ZHdUpManhDMDZhOU53NVdwdWZhQ04xZjZkZFhrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE1WXgvYkEzVEN6YWl1UFl6eHBkZytrQi9GcGVwWkdqQnRUWW80R01VM0tjMWt1WENMWlhsdGY0K0FiaDV1SlN1WjZlcDUySStKeGRheWpwbnlmbUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6IkFqSkc5dEJHYlBiYUU4VjNKVzUzbUIvUVd3SFZBYnQrVHUzdjlPU085V0U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDg2OTk1NTI5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMzNBQTlGMDc5MTNCMUFFRTc3NTkyRkI1MkE4RDQ0N0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkyNTU0NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg2OTk1NTI5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0U3NUUyNTU3MTFCNTA0QTkwNzhBOUU0NEQwREZCNEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkyNTU0NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg2OTk1NTI5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTA3RjUyNDk5MTMyQ0M2MTM4RkVFMkIyOTM0N0QzQ0QifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkyNTU0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg2OTk1NTI5NTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTQ4RUQwRDlBNzhFNkNBNkYxODkyNDIwMjk1NjlDRjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxOTkyNTU0N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUlhJdS1YRllUaEdTSjJ4TlY5ZGxnQSIsInBob25lSWQiOiIwMGFiY2E4NS04ZjZlLTRjMjMtYmRjNS1hNTNjNzA1MWE0ODkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpZVFVkNWNvK1JCazhzRi9QMEt0SmlVYmhFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhHM0t4dlI2OEF0Zyt1SURJNEwzM2ZPRlZ1WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQR1o4OU1ROSIsIm1lIjp7ImlkIjoiNDg2OTk1NTI5NTc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNUksgVEVBTSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTy9venVZRkVKdjJqN1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSnhPQ3k5NnI3bEVuWGxUbXArSlNmL0dOdnFNU2wrMXhUWHJHMzd4eWRoUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQ3BGUlNHN0R2QVFDaDRBWXNHb052cVg2dUMzTmVRdVozRDJtK09xRktJL3gvOGsxNU1nMFYzc0sxL3oxSXVhWDlYRVpVdHVScmMzU0d1R0hmaStIQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlFMdklVcjJLSzArMlNTaFVyK0VLTm85NXg1TllOdUtqT3YyV0pmQXdUU3d5Z3Q0TTdSd09ScXk1bk9ZVDh5cTlLR1NQOVhQaytPWXJKS1ptaEU1QkF3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNDg2OTk1NTI5NTc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTY1Rnc3ZlcSs1UkoxNVU1cWZpVW4veGpiNmpFcGZ0Y1UxNnh0KzhjbllVIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTI1NTQzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUI5VSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "MRK TEAM VIP BOT THNKS FOR USING 🇵🇰♥️",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRK TEAM",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
