let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zacros.my.id/asupan/santuy', 'asupan.mp4', 'nih asupannya kak jangan lupa subscribe channel https://youtube.com/channel/UCSkb2IZTJ7RuPvrcZKFFjtg', m)
}
handler.help = ['asupansantuy']
handler.tags = ['asupan']

handler.command = /^(asupansantuy)$/i
handler.premium = true
handler.register = true
handler.limit = 5
module.exports = handler
