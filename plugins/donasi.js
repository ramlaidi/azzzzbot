let handler = async m => m.reply(`
            .✵.Donasi Buat Bot.✵.

            Dana : 089691183687
            Pulsa : 089691183687
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
