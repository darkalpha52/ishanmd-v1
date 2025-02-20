const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
 SESSION_ID: process.env.SESSION_ID ||"𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=a7hEgaaT#sR0O1aFk7_4tV37omgBAB_lfNU5wFFWveZB0D-T9HPQ",
 OWNER_NUM: process.env.OWNER_NUM || "94761279619",   
    
};
