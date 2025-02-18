const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
   SESSION_ID: process.env.SESSION_ID === undefined ? 'nIJ1wRAS#j_7030J-3sOqoW126Q-FHXtVesfjrV5rIqpYV3ye1n4' : process.env.SESSION_ID, 
   
};
