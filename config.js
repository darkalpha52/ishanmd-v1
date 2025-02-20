const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
 SESSION_ID: process.env.SESSION_ID ||"a7hEgaaT#sR0O1aFk7_4tV37omgBAB_lfNU5wFFWveZB0D-T9HPQ",
    
    
};
