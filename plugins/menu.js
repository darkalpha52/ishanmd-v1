const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    desc: "menu the bot",
    category: "menu",
    react: "📃",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `*《☫ 𝐈 𝐒 𝐇 𝐀 𝐍  𝐌 𝐃 ☫》*
        
┃★╭──────────────
┃★│ Owner : *𝙸𝚂𝙷𝙰𝙽 𝙼𝙳*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Mode : * *
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *1.0.0 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Menu List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• aimenu
┃◈┃• anmiemenu
┃◈┃• convertmenu
┃◈┃• funmenu
┃◈┃• dlmenu
┃◈┃• listcmd
┃◈┃• mainmenu
┃◈┃• groupmenu
┃◈┃• allmenu
┃◈┃• ownermenu
┃◈┃• othermenu
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


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Download Menu* 〕━━┈⊷
        
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

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `╭━━〔 *Group Menu* 〕━━┈⊷
           
┃◈╭─────────────·๏
┃◈┃• add
┃◈┃• kick
┃◈┃• promote
┃◈┃• mute
┃◈┃• unmute
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

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `╭━━〔 *Fun Menu* 〕━━┈
        
┃◈╭─────────────·๏
┃◈┃• hack
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

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
        
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

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
        
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• ping2
┃◈┃• alive
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
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

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
        
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

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
        
┃◈╭─────────────·๏
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


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
        
┃◈╭─────────────·๏
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


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
        
┃◈╭─────────────·๏
┃◈┃• ai
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
