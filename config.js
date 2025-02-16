const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
   SESSION_ID: process.env.SESSION_ID === undefined ? 'imIlnRbb#er2g2Q4d8vWVK2-wsKg67mvYhri_ma9zri6Kd7-vCEY' : process.env.SESSION_ID, 
   
};
