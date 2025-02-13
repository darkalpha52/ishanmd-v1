const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*《☫ 𝐈 𝐒 𝐇 𝐀 𝐍  𝐌 𝐃 ☫》*
┃★╭──────────────
┃★│ Owner : *𝙸𝚂𝙷𝙰𝙽 𝙼𝙳*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Mode : *[${config.MODE}]*
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *1.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fb
┃◈┃• mediafire
┃◈┃• tiktok
┃◈┃• twitter
┃◈┃• img
┃◈┃• video
┃◈┃• ytmp3
┃◈┃• ytmp4
┃◈┃• song
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• add
┃◈┃• kick
┃◈┃• promote
┃◈┃• mute
┃◈┃• unmute
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• menu
┃◈┃• menu2
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• block
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• alive
┃◈┃• ping
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• hack
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃•
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• ping2
┃◈┃• alive
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• 
┃◈┃• 
┃◈┃•
┃◈┃• 
┃◈┃• 
┃◈┃• 
┃◈┃•
┃◈└───────────┈⊷
╰──────────────┈⊷
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɪsʜᴀɴ-ᴍᴅ*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/Jj2rvrt8/6979.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391262285507@newsletter',
                        newsletterName: 'ishanmd',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
