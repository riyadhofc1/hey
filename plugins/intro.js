let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
❧ ɴᴀᴍᴀ :
❧ ᴋᴇʟᴀꜱ :
❧ ᴀꜱᴋᴏᴛ :
❧ ᴜᴍᴜʀ : 
ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ :
• ꜱɪʟᴀᴋᴀɴ ɪɴᴛʀᴏ ʏᴏ
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

module.exports = handler
