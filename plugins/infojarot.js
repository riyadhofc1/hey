let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
*──「ɪɴꜰᴏʀᴍᴀꜱɪ ᴜᴢᴜɪ」──*
❧ ɴᴀᴍᴀ : ᴜᴢᴜɪ ɪᴋᴀᴡᴀ ɪʏᴀɴ
❧ ᴜᴍᴜʀ 20+
❧ ᴀꜱᴀʟ : ʙᴇᴋᴀꜱɪ
❧ ᴜʟᴀɴɢ ᴛᴀʜᴜɴ : 1 ᴊᴜʟɪ
❧ ɢʀᴜᴘ 1 : https://bit.ly/3yRe70Y
❧ ɢʀᴜᴘ 2 : https://bit.ly/3aKTsnt
❧ ɢɪᴛʜᴜʙ ᴜᴢᴜɪ : https://github.com/LionSuzune
❧ ɢɪᴛʜᴜʙ ɪᴋᴀᴡᴀ ᴛᴇᴀᴍ : https://github.com/IkawaTeam
❧ ɢɪᴛʜᴜʙ ꜱᴀꜱʜᴀ : https://github.com/LyliaSasha
`.trim(), m)
}

handler.help = ['infojarot']
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
