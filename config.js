const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XjAQ2LSC#arMylQrImW4vngYNnmCccxBFSVCZ_Hr-FX8GQcSkhEs",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
