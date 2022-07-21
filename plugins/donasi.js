let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 Donasi Marie 」─⬣
│ • Pulsa : 085795586847
│ • Dana : 0887433094409
╰────────⬣
┏──「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6285795586847
│ > yanga mau bot free atau run di sya chat owner
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
