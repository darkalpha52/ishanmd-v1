const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "v7QGXTrT#ehli8n-tnGWf4PYuPhcvCmPQaxBR5aheweXqhDMZ89M",
  MONGODB: process.env.MONGODB || "mongodb://mongo:XDcKILNbQFpGqKdEXlcRYelMufekBiJD@junction.proxy.rlwy.net:17040",
  OWNER_NUM: process.env.OWNER_NUM || "94761279619",
};
