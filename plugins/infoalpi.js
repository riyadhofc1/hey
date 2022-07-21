let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
 *「ɪɴꜰᴏʀᴍᴀꜱɪ ᴍᴀʀɪᴇ ᴀᴛᴀᴜ ɪᴋᴀᴡᴀ 」*
❧ ɴᴀᴍᴀ : ɪᴋᴀᴡᴀ
❧ ꜱᴇᴋᴏʟᴀʜ : ʟᴜʟᴜꜱ ᴋᴜʟɪᴀʜ
❧ ᴜᴍᴜʀ : 19+
❧ ᴜʟᴀɴɢ ᴛᴀʜᴜɴ : 10  ᴊᴀɴᴜᴀʀɪ
❧ ᴀꜱᴀʟ : ʙᴇᴋᴀꜱɪ
ɴᴏᴍᴏʀ ᴡᴀ : https://wa.me/62887433094409
`.trim(), m)
}

handler.help = ['infoalpi']
handler.tags = ['main', 'utama']
handler.command = /^(infoalpi)$/i

handler.exp = 150

module.exports = handler
