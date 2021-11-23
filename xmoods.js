/*
}--------------------[✨THANKS TO✨]--------------------{
--> Rifza_Ganz : Developer 
--> Donz : Pengembang
--> Agung : Pengembang
--> Clara_Chans : Pengembang
--> Dan pembuat case hingga sc ini berjalan
}--------------------[✨THANKS TO✨]--------------------{

Note : TQTO Jangan di hapus, Hargai pembuat Bot
HAPUS TQTO? = YATIM❗
*/
const {
        WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage,
		Browsers	    	    
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { EmojiAPI } = require("emoji-api")
const phoneNum = require('awesome-phonenumber')
const emoji = new EmojiAPI()
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const ggs = require('google-it')
const request = require('request');
const emojidl = new EmojiAPI()
const Math_js = require('mathjs')
const crypto = require('crypto')
const yts = require( 'yt-search')
const premium = require("./lib/premium");
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const fbdl = require('fb-video-downloader');

const Exif = require('./lib/exif');
const exif = new Exif();
var kuis = false
hit_today = []
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let control = JSON.parse(fs.readFileSync('./control.json'))
banChats = true;
owner = control.owner
ownerNumber = control.ownerNumber
gamewaktu = control.gamewaktu
ppbot = control.ppbot
qris = control.qris
za_api = "ApiRifzaBot"
LolApi = "DitzVIPP"
zenzapi = "LordRifza"

const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const hx = require('hxz-api')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const _sewa = require("./lib/sewa");
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const level = require("./lib/level");
const atm = require("./lib/atm");
const fake = fs.readFileSync ('./gambar/ditlogo.jpg','base64')
const afk = require("./lib/afk");
const audionye = JSON.parse(fs.readFileSync('./database/audio.json'))
const quote = fs.readFileSync("./database/result/quote.json");
const darkjoke = fs.readFileSync("./database/result/darkjokes.json");
walpapermuslim = fs.readFileSync("./database/result/muslim.json");

let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
 let _prem = require ('./lib/premium'); 
let register = JSON.parse(fs.readFileSync('./database/registered.json'))
let _uang = JSON.parse(fs.readFileSync('./database/uang.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const samih = JSON.parse(fs.readFileSync('./lib/simi.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'));
let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));
let antitelegram = JSON.parse(fs.readFileSync('./database/group/antitelegram.json'))
let antilinkig = JSON.parse(fs.readFileSync('./database/group/antilinkig.json'))
let antilinkfb = JSON.parse(fs.readFileSync('./database/group/antilinkfb.json'))
let antilinkytv = JSON.parse(fs.readFileSync('./database/group/antilinkyt.json'))
let antilinkytc = JSON.parse(fs.readFileSync('./database/group/antilinkytchannel.json'))


// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}



const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = aditt = async (aditt, ditt) => {
	try {
        if (!ditt.hasNewMessage) return
        ditt = ditt.messages.all()[0]
		if (!ditt.message) return
		if (ditt.key && ditt.key.remoteJid == 'status@broadcast') return
		if (ditt.key.id.startsWith('3EB0') && ditt.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		ditt.message = (Object.keys(ditt.message)[0] === 'ephemeralMessage') ? ditt.message.ephemeralMessage.message : ditt.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(ditt.message)
		const from = ditt.key.remoteJid
		const aditt1 = ['1','2','3','4','5','6','7','8','9']
        const aditt2 = ['1','2','3','4','5','6','7','8','9'] 
        const aditt3 = aditt1[Math.floor(Math.random() * (aditt1.length))]
        const aditt4 = aditt2[Math.floor(Math.random() * (aditt2.length))] 
		const type = Object.keys(ditt.message)[0]        
        const cmd = (type === 'conversation' && ditt.message.conversation) ? ditt.message.conversation : (type == 'imageMessage') && ditt.message.imageMessage.caption ? ditt.message.imageMessage.caption : (type == 'videoMessage') && ditt.message.videoMessage.caption ? ditt.message.videoMessage.caption : (type == 'extendedTextMessage') && ditt.message.extendedTextMessage.text ? ditt.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°!•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '#'
        var pes = (type === 'conversation' && ditt.message.conversation) ? ditt.message.conversation : (type == 'imageMessage') && ditt.message.imageMessage.caption ? ditt.message.imageMessage.caption : (type == 'videoMessage') && ditt.message.videoMessage.caption ? ditt.message.videoMessage.caption : (type == 'extendedTextMessage') && ditt.message.extendedTextMessage.text ? ditt.message.extendedTextMessage.text : ''		
        body = (type === 'conversation' && ditt.message.conversation.startsWith(prefix)) ? ditt.message.conversation : (type == 'imageMessage') && ditt.message[type].caption.startsWith(prefix) ? ditt.message[type].caption : (type == 'videoMessage') && ditt.message[type].caption.startsWith(prefix) ? ditt.message[type].caption : (type == 'extendedTextMessage') && ditt.message[type].text.startsWith(prefix) ? ditt.message[type].text : (type == 'listResponseMessage') && ditt.message[type].singleSelectReply.selectedRowId ? ditt.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && ditt.message[type].selectedButtonId ? ditt.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(ditt.message[type].fileSha256.toString('base64')) !== null && getCmd(ditt.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(ditt.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? ditt.message.conversation : (type === 'extendedTextMessage') ? ditt.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
        budy = (type === 'conversation') ? ditt.message.conversation : (type === 'extendedTextMessage') ? ditt.message.extendedTextMessage.text : ''
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
        const c = args.join(' ')
        const Rfake = fs.readFileSync ('./gambar/ditlain.jpg','base64')
  
        const botNumber = aditt.user.jid
        const ownerNumber = control.ownerNumber
		const ownerName = control.ownerName
		const botName = control.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? ditt.participant : ditt.key.remoteJid
		let senderr = ditt.key.fromMe ? aditt.user.jid : ditt.key.remoteJid.endsWith('@g.us') ? ditt.participant : ditt.key.remoteJid
		const totalchat = await aditt.chats.all()
		const groupMetadata = isGroup ? await aditt.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		let isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isAntiviewonce = isGroup ? antivo.includes(from) : false;
        const isAntidel = isGroup ? antidel.includes(from) : false;
        const conts = ditt.key.fromMe ? aditt.user.jid : aditt.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = ditt.key.fromMe ? aditt.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && ditt.message.extendedTextMessage.contextInfo != null ? ditt.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && ditt.message.extendedTextMessage.contextInfo != null ? ditt.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)           
        const isSimi = samih.includes(from)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isPremium = premium.checkPremiumUser(sender, _premium)
        
       

        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6287895808192-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 10,status: 200, thumbnail: fs.readFileSync(`./gambar/ditlain.jpg`), surface: 200, message: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, orderTitle: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`,jpegThumbnail: fs.readFileSync(`./gambar/ditlain.jpg`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287895808192-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287895808192-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, 'jpegThumbnail': fs.readFileSync(`./gambar/ditlain.jpg`)}}}
		const finv = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6287895808192-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, 'jpegThumbnail': fs.readFileSync(`./gambar/ditlain.jpg`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6287895808192-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, "h": `Hmm`,'seconds': '99999', 'caption': `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, 'jpegThumbnail': fs.readFileSync(`./gambar/ditlain.jpg`)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`,jpegThumbnail: fs.readFileSync(`./gambar/ditlain.jpg`)}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6287895808192-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;𝐃𝐲𝐭𝐳𝐕𝐈𝐏,;;;\nFN:𝐃𝐲𝐭𝐳𝐕𝐈𝐏,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./gambar/ditlain.jpg`), thumbnail: fs.readFileSync(`./gambar/ditlain.jpg`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            aditt.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6287895808192-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./gambar/ditlain.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`𝐃𝐲𝐭𝐳𝐕𝐈𝐏`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
        
        
        
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? ditt.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? ditt.message.listResponseMessage.title : ''

        const gcount = control.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = aditt.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","listType": "SINGLE_SELECT","sections": list}}, {})
            return aditt.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply2 = (teks) => {
            aditt.sendMessage(from, teks, text, {quoted:ftroli})
        }
        const reply1 = (teks) => {
			aditt.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: ditt, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"𝐃𝐲𝐭𝐳 ⃝𝐕𝐈𝐏 ",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/p/6287895808192`}}})
		}
		const reply = (teks) => {
			aditt.sendMessage(from, teks, text, { thumbnail: Rfake, sendEphemeral: true, quoted: ditt, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jmn} - ${week} ${weton} - ${calender}`,body:"𝐃𝐲𝐭𝐳 ⃝𝐕𝐈𝐏",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6287895808192?text=Hy+Ganteng`}}})
		}
		const fakestatus = (teks) => {
            aditt.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`gambar/ditlain.jpg`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const sendMess = (hehe, teks) => {
           aditt.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? aditt.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/ditlain.jpg')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : aditt.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./gambar/ditlain.jpg')}, extendedText, { sendEphemeral: true, quoted: ditt, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           aditt.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return aditt.sendMessage(from, teks, text, {quoted: ditt, thumbnail: fs.readFileSync('./gambar/ditlain.jpg')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./gambar/ditlain.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       aditt.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await aditt.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = aditt.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await aditt.groupRemove(to, [i])
        } else {
           await aditt.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       aditt.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       aditt.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})
}
      const hideTag = async function(from, text){
	       let anu = await aditt.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       aditt.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('gambar/ditlain.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  

//Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
	kma = doc1
	mhan = await aditt.prepareMessage(from, media, document, kma)
	const buttonMessages = {
	documentMessage: mhan.message.documentMessage,
	contentText: text1,
	footerText: desc1,
	buttons: but,
	headerType: "DOCUMENT"
	}
	aditt.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
	}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await aditt.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
aditt.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

// GAME
let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))
let family100 = [];

//Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await aditt.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
aditt.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           aditt.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:ditt})
           fs.unlinkSync(asw)
});
});
});
}
//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			aditt.sendMessage(hehe, ano, sticker, { quoted: fgif})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			aditt.sendMessage(hehe, ano, sticker, { quoted: fgif})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			aditt.sendMessage(hehe, ano, sticker, { quoted: fgif})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			aditt.sendMessage(hehe, ano, sticker, { quoted: fgif})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			aditt.sendMessage(hehe, ano, sticker, { quoted: fgif})
		}
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
        }
        
        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isRegistered = checkRegisteredUser(sender)
 ///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      aditt.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           aditt.sendMessage(to, media, type, {quoted: ditt, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
aditt.sendMessage(from, hasil, type, options).catch(e => {
fetchh(link).then((hasil) => {
aditt.sendMessage(from, hasil, type, options).catch(e => {
aditt.sendMessage(from, { url : link }, type, options).catch(e => {
reply('Error!')
console.log(e)
})
})
})
})
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       aditt.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       aditt.sendMessage(from, hasil, type, options).catch(e => {
	       aditt.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await aditt.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = aditt.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await aditt.groupMakeAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
var hayuk0 = '[NOT VERIFIED]'
			if (isRegistered) {
			hayuk0 = '[√ VERIFIED]'
			}
}
           const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await aditt.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = aditt.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await aditt.groupDemoteAdmin(to, [i])
           }else{
           reply("NOT PREMITED")
}
}
}
          let authorname = aditt.contacts[from] != undefined ? aditt.contacts[from].vname || aditt.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WhatsApp'; if (!author) author = 'DitzVIP';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
	try {
		pporang = await aditt.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }       
	const ofrply = await getBuffer(pporang)	       
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
         

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      
//--------------------[ANTI TOXIC]--------------------\\
if (bad.includes(messagesD)) {
if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
kntl = `${args.join(' ')}`
nama = ("TOXIC DETECTED")
impostor = ("NIH PERGI KE ARAB, TOBAT SONO\nSUPAYA GAK TOXIC")
aditt.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./gambar/ditlogo.jpg')}, MessageType.liveLocation, {quoted:floc})
}
//--------------------[ANTI TOXIC]--------------------\\
//--------------------[STIKER ANJENG]--------------------\\
const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					aditt.sendMessage(to, media, sticker)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
//--------------------[STIKER ANJENG]--------------------\\
    
//--------------------[AFK]--------------------\\
	if (isGroup) {
		if (!ditt.key.fromMe && banChats === true) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Sssttt! Orangnya lagi AFK, jangan diganggu!*
➸ *Alasan*  : ${getReason}
➸ *Sejak* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
		}
	    }
//--------------------[AFK]--------------------\\
   
//--------------------[ANTILINK]--------------------\\ 
      const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
      if (isGroup && isAntiLink && !isOwner && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
            if (isGroupAdmins) return reply("Admin mah bebas ye kan😎");
                aditt.sendMessage(from, `*「 GROUP LINK DETECTOR 」*\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`, MessageType.text)
                aditt.groupRemove(from, [sender])
            }
        }

//--------------------[ANTILINK]--------------------\\

//--------------------[SIMI]--------------------\\
if (isSimi) {		
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=ID`)
                     sami = simi.success
                        aditt.sendMessage(from, `${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:ditt, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//--------------------[SIMI]--------------------\\                      
	    
	    
//--------------------[AUTO KETIK]--------------------\\	    
	    aditt.updatePresence(from, Presence.composing)// hapus aja bang kalo risih
//--------------------[AUTO KETIK]--------------------\\

//--------------------[AUTO READ]--------------------\\		
        aditt.chatRead(from, "read")// hapus aja bang kalo risih
//--------------------[AUTO READ]--------------------\\  

//--------------------[AUTO BIO]--------------------\\
runt = process.uptime() 
           aditt.setStatus(`Aktif Selama : ${kyun(runt)} `).catch((_)=>_);

           settingstatus = new Date() * 1;            
//--------------------[AUTO BIO]--------------------\\
        
//--------------------[CMD]--------------------\\
        if (isCmd && !isGroup)
		    atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)
            atm.addKoinUser(sender, randomNomor(20), _uang)
            console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
//--------------------[CMD]--------------------\\
            
        if (budy.toLowerCase() === `5173`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/registered.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *!menu* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    aditt.sendMessage(from, teks, text, {quoted: freply })
}          if (!ditt.key.fromMe && banChats === true) return 
	              switch(command){

case 'owner':
case 'creator':
               sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')
               await sleep(1000)
               txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`
               buttons = [{buttonId: '!command',buttonText:{displayText: 'LIST MENU'},type:1},{buttonId:'!igowner',buttonText:{displayText:'INSTAGRAM'},type:1}]
               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Jangan Sungkan Chat Ya Kak',
               buttons: buttons,
               headerType: 1
}

               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{})
               aditt.relayWAMessage(prep)
               break      
               
case 'set':
	      case 'mode':
        if (!isOwner) return sticOwner(from)
        sendButMessage(from, `SELF OR PUBLIC`, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `👤 SELF `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `👥 PUBLIC`,
            },
            type: 1,
          },
        ]);
        break
        case 'yy':
        if (!ditt.key.fromMe) return sticOwner(from)
        break
case 'self':
              if (!isOwner && !ditt.key.fromMe) return sticOwner(from)
              if (banChats === true) return
        	  uptime = process.uptime()
        	  banChats = true
              reply(' ```「 SELF MODE 」``` ')
              break       
case 'public':
        	  if (!ditt.key.fromMe) return 
              if (banChats === false) return 
              banChats = false
              reply(' ```「 PUBLIC MODE 」``` ')
              break
//sendButDocument(from, menu, "𝐃𝐲𝐭𝐳𝐕𝐈𝐏", fs.readFileSync('./media/DitzzVIPPP.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/DitzzVIPPP.jpg'), filename:`DitzVIP.pdf`, pageCount: 999999999 }, [{buttonId:`!000`,buttonText:{displayText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏'},type:1}], {quoted:ftroli, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${waktu(runtime)} - ${pushname}\nDownload Script`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://youtu.be/vY8hxx--Mr8`}}})
case 'groupmenu':
        case 'menugroup':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Group Menu-----[

1. #welcome _enable/disable_
2. #pakgirl
3. #hidetag _teks_
4. #afk _alasan_
5. #add _nomor target_
6. #kick _tag/reply target_
7. #promote _tag/reply member_
8. #demote _tag/reply member_
9. #antilink
10. #cantik
11. #ganteng
12. #beban
13. #babi
14. #sadboy
15. #sadgirl
16. #wibu
17. #hebat
18. #jelek
19. #goblok
20. #bego
21. #pinter
22. #jago
23. #nolep
24. #monyet
25. #baik
26. #jahat
27. #anjing
28. #haram
29. #kontol
30. #pakboy
31. #opentime
    Example : #opentime 10 detik
32. #closetime
    Example : #closetime 10 detik
33. #jadian
34. #tag
35. #tagme    
36. #totag
37. #fitnah
  CONTOH : #fitnah @tag|Hy|Apa
	

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break  
case 'cekmenu':
        case 'menucek':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Cek Menu-----[

1.  #cantikcek
2.  #jelekcek
3.  #goblokcek
4.  #begocek
5.  #pintercek
6.  #jagocek
7.  #nolepcek
8.  #babicek
9.  #bebancek
10.  #baikcek
11.  #jahatcek
12.  #anjingcek
13.  #bapercek
14.  #kontolcek
15.  #kontolcek
16.  #sangecek
17.  #pakgirlcek
18.  #pakboycek
19.  #bapercek
20.  #cekwatak

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break               
case 'gamemenu':
        case 'menugame':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Game Menu-----[

1. #tictactoe
2. #ttt
3. #delttt
4. #suit


=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break                 
case 'downloadmenu':
        case 'menudownload':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Download Menu-----[

1. #play _query_
2. #playy _link_
3. #play2 _link_
4. #tiktoknowm _link_
5. #image _query_
6. #gimage _query_
7. #googleimage _query_
8. #facebook _link_
9. #instagram _link_
10. #pinterest _query_
11. #pinterest2 _query_
12. #pinterest3 _query_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break
case 'ownermenu':
case 'menuowner':        
groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await aditt.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Owner Menu-----[
1. #delete
2. #del
3. #d
4. #bc
5. #broadcast
6. #bc2
7. #broadcast2
8. #bc3
9. #broadcast3
10. #premium add
11. #premium del
12. #setcmd
13. #delcmd
14. #listcmd
15. #spam _teks|jumlah_
16. #upswteks


=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break 
case 'storagemenu':
case 'menustorage':        
groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await aditt.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Storage Menu-----[
               
1. #addvn _nama audionya_
2. #getvn _nama audionya_
3. #listvn

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break     
 case 'primbonmenu':
case 'menuprimbon':        
groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
uptime = process.uptime();
timestampe = speed();
totalChat = await aditt.chats.all()
latensie = speed() - timestampe
total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Primbon Menu-----[
               
1. #artikata
2. #tahilalat
3. #bisakah
4. #apakah
5. #kapankah
6. #cekmati _nama_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break                        
case 'makermenu':
        case 'menumaker':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[
`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Maker Menu-----[

1. #sticker
2. #stiker
3. #stickergif
4. #s
5. #nulis
6. #nuliskanan
7. #nuliskiri
8. #foliokanan
9. #foliokiri
10. #glitch
11. #googletxt
12. #pubg
13. #battlefield
14. #neon
14. #glow
16. #golden
17. #wooden
18. #quote
19. #textburn
20. #summer
21. #flower
22. #coffeecup
23. #coffeecup2
24. #maker
25. #maker2
26. #maker3
27. #maker4
28. #maker3d
29. #maker3d2
30. #maker3d3
31. #maker3d4
32. #ttp _teks_
33. #txtopng _teks_
34. #balik _reply audio/vn_
35. #toimg
36. #tovideo
37. #tomp4
38. #gay
39. #emoji _emoji_
    CONTOH : .emoji 🐟
40. #welcomemaker _text_
41. affect _text_
42. trash _text_
43. puppycute _text_

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break               
case 'othermenu':
        case 'menuother':
        
              groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await aditt.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
              
        
               menu =`]=====[XM-BOT]=====[`

               buttons =  [
    {buttonId: `${prefix}command`, buttonText: {displayText: '⬅️BACK TO MENU'}, type: 1},
]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlain.jpg`), 'imageMessage', { thumbnail:Rfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText:  `]-----Other Menu-----[

1. #tts _kodebahasa_
2. #kodebahasa
3. #sswebpc _link_
4. #sswebhp _link_
5. #sharelock _teks1|teks2_ 
6. #tourl
7. #imgtourl
8. #simi
9. #linkwa _query_
10. #runtime
11. #ping
12. #speed
13. #translate _teks_
14. #detikvn
15. #detikvideo   
16. #gemuk

17. #robot

18. #bass   
19. #sider
20. #waktu
21. #kalkulator
    CONTOH : 1+1
22. #googlelink _yang mau di cari_
23. #kbbi _kata_
24. #rules
25. #hit
25. #totalhit

=>[ GRUB TOTAL = ${groups.length}
=>[ PRIBADI CHAT = ${privat.length}
=>[ BATERAI : ${baterai}% ${charger}
=>[ TOTAL CHAT = ${totalChat.length}
=>[ KECEPATAN = ${latensie.toFixed(4)} _Detik_
=>[ AKTIF : ${runtime(process.uptime())}
=>[ PLATFORM = ${os.platform()}



 𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 1
}


               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[sender]}})
                          aditt.relayWAMessage(prep)
               break                                                                                                                                                    
        case 'd':
        case 'del':
        case 'delete': 
               try {
               if (ditt.message.extendedTextMessage === undefined || ditt.message.extendedTextMessage === null) return reply('Reply chat bot')
               aditt.deleteMessage(from, {id: ditt.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
      
     case 'gifstiker':
				case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':
				
					     if ((isMedia && !ditt.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ditt
            const media = await aditt.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                aditt.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && ditt.message.videoMessage.seconds < 11 || isQuotedVideo && ditt.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(ditt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : ditt
                const media = await aditt.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            aditt.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: ftroli})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break                              
       case 'take':
      case 'colong':
      if (!isOwner) return reply('Maaf Kak Fitur Ini Khusus Owner Bot')
            //  if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
		if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}colong*`)
		const encmediia = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await aditt.downloadAndSaveMediaMessage(encmediia, `./sticker/bor`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/bor -o ./sticker/bor`, async (error) => {
		    reply('Succes Masuk Ke Database Bot')
				
		    aditt.sendMessage(from, fs.readFileSync(`./sticker/bor`), MessageType.sticker, {quoted: floc})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/ditzz.exif`)
					})
				break
        case 'ghea': 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/ghea?apikey=${za_api}`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `ghea.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break  
			case 'rika': 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/rikagusriani?apikey=${za_api}`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `rikagusriani.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break  
		     	
	        case 'santuy': 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/santuy?apikey=${za_api}`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break  	
		   case 'ukhty': 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/ukty?apikey=${za_api}`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break
		 case 'bocil': 
		reply('Proses kak')  
				anu = await fetchJson(`https://za-api.herokuapp.com/api/asupan/bocil?apikey=${za_api}`)			
				///////buffer = await getBuffer(anu.result.thumbnail)
				buffer1 = await getBuffer(anu.result.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break
//=====[API aditt]=====\\        
             
case 'ytdl':
case 'play':
              if (!c) return reply('Linknya?')
              sticWait(from)
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`${prefix}play2 ${c}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${c}`,buttonText:{displayText:'🎵AUDIO'},type:1}]

imageMessage = (await aditt.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{})

aditt.relayWAMessage(prep)
break        	 	        	
        case 'playy':
case 'lagu':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
sticWait(from)
teks = args.join(' ')
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: ftroli, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botName}* 
 *Judul :* ${res.all[0].title}
 *ID Video :* ${res.all[0].videoId}
 *Diupload Pada :* ${res.all[0].ago}
 *Views :* ${res.all[0].views}
 *Durasi :* ${res.all[0].timestamp}
 *Channel :* ${res.all[0].author.name}
*Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: ditt, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: ftroli, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'play2':   

				  if (args.length < 1) return reply('*Masukan judul nya?*')
                sticWait(from)
				play = args.join(" ")
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=${za_api}`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 PLAY VIDEO 」*
				
Judul : ${anu.result.title}
Source : ${anu.result.source}
				
*[Wait] Tunggu Sebentar..*`
				buffer1 = await getBuffer(anu.result.url_video)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break               	        	 	        	 	        	

          case 'fb':
	      case 'fbdl':
	      case 'facebook':
	      case 'facebookdl':
	      case 'facebookdownload':
        
              if (!q) return reply('Linknya?')
              if (!q.includes('https://')) return reply(mess.error.Iv)
              if (!q.includes('f')) return reply(mess.error.Iv)
        sendButMessage(from, `[ FB DOWNLOAD ]`, `Silahkan pilih salah satu`, [
          {buttonId: `${prefix}fbthumb ${q}`, buttonText: {displayText: '📷THUMBNAIL'}, type: 1},
   {buttonId: `${prefix}fbvideo ${q}`, buttonText: {displayText: '️️▶️VIDEO'}, type: 1},
        ]);
        break	
					      				                   
       case 'fbthumb': 


				  if (args.length < 1) return reply('*Masukan link nya?*')
                sticWait(from)
				fb2 = args.join(" ")
				anu = await fetchJson(`https://api.chipa.xyz/api/download/fb?link=${fb2}&apikey=OUS96ZXXXIF6ODXSUUJWJ3FC`)
				sendMediaURL(from, anu.result.thumbnail)
					break
	  case 'fbvideo': 
      case 'facebookvideo':  
				  if (args.length < 1) return reply('*Masukan link nya?*')
                sticWait(from)
				fb1 = args.join(" ")
				anu = await fetchJson(`https://api.chipa.xyz/api/download/fb?link=${fb1}&apikey=OUS96ZXXXIF6ODXSUUJWJ3FC`)
				sendMediaURL(from, anu.result.streamURL)
					break
	  case 'fbsound': 
      case 'facebooksound':  
				  if (args.length < 1) return reply('*Masukan link nya?*')
                sticWait(from)
				fb3 = args.join(" ")
				anu = await fetchJson(`https://neoxr-api.herokuapp.com/api/fb2?url=${fb3}&apikey=shS8uZn0vJ`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 FACEBOOK VIDEO 」*
								
*[Wait] Tunggu Sebentar..*`				
				buffer1 = await getBuffer(anu.data.sd.url)
				aditt.sendMessage(from, buffer1, audio, {mimetype: 'Mimetype.mp4Audio', Quality: `${anu.data.sd.quality}.mp4`, quoted:ftroli, caption: 'NIH KAK😖'})
					break							
        case 'tiktoknowm':  
        case 'tiktokdownload':
        case 'tiktokdl':
	    case 'ttdl':
       case 'tiktok':
              if (!q) return reply('Linknya?')
              if (!q.includes('tiktok')) return reply(mess.error.Iv)
              sticWait(from)
              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=DitzVIPP&url=${q}`)
              result = `*Nickname*: ${data.result.author.nickname}\n*Like*: ${data.result.statistic.diggCount}\n*Komentar*: ${data.result.statistic.commentCount}\n*Share*: ${data.result.statistic.shareCount}\n*Views*: ${data.result.statistic.playCount}\n*Desc*: ${data.result.title}`
              buttons = [{buttonId: `${prefix}ttvid ${q}`,buttonText:{displayText: `VIDEO`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'AUDIO'},type:1}]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
              imageMsg = ( await aditt.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`${result}`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              aditt.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
      case 'ttvid': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             sticWait(from)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
   case 'ttaudio': 
   case 'tiktokmusic': 
   case 'tiktokaudio':
  //   if (isGame(sender,isGroupAdmins, isOwner, gcount, glimit)) return reply(`Limit kamu sudah habis`)
      sticWait(from)
           if (!q) return reply(`Example: ${prefix + command} linknya`)
           ini_link = q.split(' ')[0]
           get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=DitzVIPP&url=${ini_link}`)
           await aditt.sendMessage(from, get_audio, audio, { mimetype: 'Mimetype.mp4Audio', quoted: floc })
          gameAdd(sender, glimit)
           break
	 case 'tiktokvideo':   
				  if (args.length < 1) return reply('*Masukan judul nya?*')
                sticWait(from)
				play = args.join(" ")
				anu = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=DitzVIPP&url=${play}`)
				sendMediaURL(from, anu.result.nowatermark)
					break 
      case 'infott':
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
		 		if (!c) return fakegroup('Linknya?')
		ini_url = args[0]
		 		sticWait(from)
		            ini_urlnya = `https://hardianto-chan.herokuapp.com/api/download/tiktok?url=${ini_url}&apikey=hardianto`
                    get_result = await fetchJson(ini_urlnya)
                    ini_txt = `*DATA BERHASIL DI TEMUKAN*\n\nAuthor : ${get_result.author}\n`
                    ini_txt += `Caption : ${get_result.caption}\n`
                    ini_txt += `Views : ${get_result.views}`
                    ini_img = await getBuffer(get_result.thumbnail)
                    await aditt.sendMessage(from, ini_img , image, { quoted: ditt, caption: ini_txt })
                    ini_buffer = await getBuffer(get_result.audio)
                    aditt.sendMessage(from, ini_buffer, audio, {mimetype: 'audio/mp4', filename: `${get_result.caption}.mp3`, quoted: ditt })
            		break               	        	 	        	 	        	 	        	 	        	 	        	
      case 'igstory': 
           if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    aditt.sendMessage(from,link,video,{quoted: ditt,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    aditt.sendMessage(from,link,image,{quoted: ditt,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break    
               	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	     	        	 	        	 	        	 	        	 	        	 	        	 	        	 	        	
       case 'image':
       case 'gimage':
       case 'googleimage':
       
              if (args.length < 1) return reply('Apa Yang Mau Dicari?')
              sticWait(from)
              
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: ditt, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
             break
          

      case 'stalktiktok':
      case 'tiktokstalk':
      
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
              
             stalk_tt = args[0]
             get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tiktok-stalk?name=${stalk_tt}&apikey=ikyOgiwara`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user.avatarLarger)
             ini_txt = `「 *TIKTOK STALKER* 」

*Data Berhasil Didapatkan!*
\`\`\`🔖 ID : ${get_result.user.id}\`\`\`
\`\`\`🔖 Short id : ${get_result.user.shortId}\`\`\`
\`\`\`🔖 Username : @${get_result.user.uniqueId}\`\`\`
\`\`\`🔖 Nickname : ${get_result.user.nickname}\`\`\`
\`\`\`🔖 Pengikut : ${get_result.stats.followerCount}\`\`\`
\`\`\`🔖 Mengikuti : ${get_result.stats.followingCount}\`\`\`
\`\`\`🔖 Heart : ${get_result.stats.heart}\`\`\`
\`\`\`🔖 Video : ${get_result.stats.videoCount}\`\`\`
\`\`\`🔖 Deskripsi : ${get_result.user.signature}\`\`\`
`
              aditt.sendMessage(from, pp_tt, image, { quoted: ditt, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break


//==========[SIMI/AUTO BALAS]==========\\
case 'simi':              
              if (args[0] === 'enable'){
              if (isSimi) return reply(`Udah aktif`)
              samih.push(from)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = samih.indexOf(from)
              samih.splice(anu, 1)
              fs.writeFileSync('./database/simi.json', JSON.stringify(samih))
              reply('SIMI DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo @${senderr.split('@')[0]} klik button atau Gunakan ${prefix + command } enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!simi enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!simi disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏` ,
buttons: buttonss,
headerType: 1
}
aditt.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break
case 'igowner':
reply('https://instagram.com/adyt.vip')
break
case 'tts':
if (args.length < 1) return aditt.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: ditt })
const gtts = require('./lib/gtts')(args[0])
if (args.length < 0) return aditt.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: ditt })
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300
? reply('Teks nya terlalu panjang kak')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(dla.stikga())
aditt.sendMessage(from, buff, audio, { duration: 999999999, ptt: true, quoted: ftroli })
fs.unlinkSync(rano)
})
})
break
case 'kodebahasa':
let BAHASA = `
  'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
reply(`${BAHASA}`)
break


     case 'igvideo': 
      case 'instagramvideo':  
      case 'instavideo':
      case 'igvid':
      case 'ignstavid':


				  if (args.length < 1) return reply('*Masukan judul nya?*')
                sticWait(from)
				ig = args.join(" ")
				anu = await fetchJson(`https://neoxr-api.herokuapp.com/api/ig?url=${ig}&apikey=shS8uZn0vJ`)
				if (anu.error) return reply(anu.error)
				infomp3 = `*「 INSTAGRAM VIDEO 」*
								
*[Wait] Tunggu Sebentar..*`
				buffer1 = await getBuffer(anu.data.url)
				aditt.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', Type: `${anu.data.type}`, quoted:ftroli, caption: 'NIH KAK😖'})
					break

       case 'igdl': 
       case 'instagram':
       case 'instagramdownload':
       
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              sticWait(from)
              
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, ditt) })
             .catch((err) => { reply(String(err)) })
              break
case 'hidetag':
if (!isGroupAdmins) return sticAdmin(from)
if (!isGroup) return reply('Group Only')
try {
             quotedText = ditt.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'otag':
      if (!isOwner) return reply('Owner Only')
             try {
             quotedText = ditt.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
case 'pinterest':
         
         	   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`https://api.zeks.me/api/pinimg?apikey=${za_api}&q=${query}`)
                    ini_url = ini_url.data
                    let ppk = ini_url[Math.floor(Math.random() * ini_url.length)];
                    buff = await getBuffer(ppk)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              aditt.relayWAMessage(prep)
        break	
        		          		          
case 'pinterest2':
        if (!q) return reply("gambar apa?");
        sticWait(from)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              aditt.relayWAMessage(prep)
        break
case 'pinterest3':
         
         	   if (args.length == 0) return reply(`Example: ${prefix + command} loli`)
                    query = args.join(" ")
                 reply (mess.wait)
                    ini_url = await fetchJson(`https://hardianto-chan.herokuapp.com/api/search/pinterest?query=${query}&apikey=hardianto`)
                    ini_url = ini_url
                    let ajg = ini_url[Math.floor(Math.random() * ini_url.length)];
                    buff = await getBuffer(ajg)
                    buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
              aditt.relayWAMessage(prep)
        break


case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break

case 'nulis':
        case 'tulis':
        
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               sticWait(from)
              
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               aditt.sendMessage(from, buff, image, {quoted: ditt, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
case 'foliokanan':
                                
                    if (args.length == 0) return reply(`Example: ${prefix + command} aditt bot`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        aditt.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `NIH KAK😖`, quoted : freply})
                    })
                    break  
case 'foliokiri':
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        aditt.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `NIH KAK😖`, quoted : freply})
                    })
                    break                                  
case 'nuliskanan':
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        aditt.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `NIH KAK😖`, quoted : freply})
                    })
                    break
                  
case 'nuliskiri':
                           
                    if (args.length == 0) return reply(`Example: ${prefix + command} XMOODS`)
                    fakestatus(' ```Proses kak....``` ')
                    ini_txt = args.join(" ")
                    getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${ini_txt}&apikey=4ioFQZbq`).then((gambar) => {
                        aditt.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `NIH KAK😖`, quoted : freply})
                    })
                    break

case 'glitch':
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_`)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
sticWait(from)
photooxy = await fetchJson(`https://za-api.herokuapp.com/api/textmaker?text=${gl1}&text2=${gl2}&theme=${command}&apikey=${za_api}`)
photooxy2 = await getBuffer(photooxy.result.url)
aditt.sendMessage(from, photooxy2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'googletxt':
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_|_text3_`)
ggl1 = q.split('|')[0]
ggl2 = q.split('|')[1]
ggl3 = q.split('|')[2]
sticWait(from)
googletxt = await fetchJson(`https://za-api.herokuapp.com/api/textmaker?text=${ggl1}&text2=${ggl2}&text3=${ggl3}&theme=google-suggestion&apikey=${za_api}`)
googletxt2 = await getBuffer(googletxt.result.url)
aditt.sendMessage(from, googletxt2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'pubg':
case 'battlefield':
if(!q)return reply(`Example : ${prefix + command} _text1_|_text2_`)
gmmkl = q.split('|')[0]
gmmkl2 = q.split('|')[1]
sticWait(from)
game = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/game?text=${gmmkl}&text2=${gmmkl2}&theme=${command}&apikey=${za_api}`)
game2 = await getBuffer(game.result.url)
aditt.sendMessage(from, game2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'neon':
case 'glow':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
metalic = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/metallic?text=${q}&theme=${command}&apikey=${za_api}`)
metalic2 = await getBuffer(metalic.result.url)
aditt.sendMessage(from, metalic2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'golden':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
roses = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/roses?text=${q}&theme=golden&apikey=${za_api}`)
roses2 = await getBuffer(roses.result.url)
aditt.sendMessage(from, roses2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'wooden':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
roses = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/roses?text=${q}&theme=wooden-boarch&apikey=${za_api}`)
roses2 = await getBuffer(roses.result.url)
aditt.sendMessage(from, roses2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'quote':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
random = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/random?text=${q}&theme=art-quote&apikey=${za_api}`)
random2 = await getBuffer(random.result.url)
aditt.sendMessage(from, random2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'textburn':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
random = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/random?text=${q}&theme=text-burn&apikey=${za_api}`)
random2 = await getBuffer(random.result.url)
aditt.sendMessage(from, random2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'summer':
case 'flower':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/alam?text=${q}&theme=${command}&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
aditt.sendMessage(from, alam2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'coffeecup':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/senja?text=${q}&theme=coffee-cup&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
aditt.sendMessage(from, alam2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'coffeecup2':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
alam = await fetchJson(`https://za-api.herokuapp.com/api/textmaker/senja?text=${q}&theme=coffee-cup2&apikey=${za_api}`)
alam2 = await getBuffer(alam.result.url)
aditt.sendMessage(from, alam2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
// Text Maker 2d
case 'maker':
case 'maker2':
case 'maker3':
case 'maker4':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
makell = await fetchJson(`https://za-api.herokuapp.com/api/${command}?text=${q}&apikey=${za_api}`)
makell2 = await getBuffer(makell.result.results)
aditt.sendMessage(from, makell2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
// Text Maker 3d
case 'maker3d':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
maker3d = await fetchJson(`https://za-api.herokuapp.com/api/maker3d?text=${q}&apikey=${za_api}`)
maker3d2 = await getBuffer(maker3d.result.results)
aditt.sendMessage(from, makell2, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d2':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
maker3d2 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no2?text=${q}&apikey=${za_api}`)
maker3d22 = await getBuffer(maker3d2.result.results)
aditt.sendMessage(from, maker3d22, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d3':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
maker3d3 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no3?text=${q}&apikey=${za_api}`)
maker3d32 = await getBuffer(maker3d3.result.results)
aditt.sendMessage(from, maker3d32, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'maker3d4':
if(!q)return reply(`Example : ${prefix + command} XMOODS`)
sticWait(from)
maker3d4 = await fetchJson(`https://za-api.herokuapp.com/api/maker3d/no4?text=${q}&apikey=${za_api}`)
maker3d42 = await getBuffer(maker3d4.result.results)
aditt.sendMessage(from, maker3d42, image, {quoted:ditt,caption:`${q}`,thumbnail:Rfake})
break
case 'kick':
if (!isGroup) return reply("Khusus di grup");
if (!isBotGroupAdmins) return sticNotAdmin(from)
if (!isGroupAdmins && !ditt.key.fromMe) return sticAdmin(from)
kick(from, mentionUser)
break
case 'add':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !ditt.key.fromMe) return reply("Khusus admin");
if (ditt.message.extendedTextMessage === null || ditt.message.extendedTextMessage === undefined) {
entah = arg.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
aditt.groupAdd(from, [entah])
} else {
entah = ditt.message.extendedTextMessage.contextInfo.participant
aditt.groupAdd(from, [entah])
}
break
case "demote":
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
aditt.groupDemoteAdmin(from, mentionUser)
break
case "promote":
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
aditt.groupMakeAdmin(from, mentionUser)
break
case 'bc':
case 'broadcast':
             if (!isOwner) return sticOwner(from)
             if (args.length < 1) return reply('teks?')
             anu = await aditt.chats.all()
             if (isMedia && !ditt.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
             bc = await aditt.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	aditt.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `_*𝐃𝐲𝐭𝐳𝐕𝐈𝐏 BROADCAST*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'OKE KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./gambar/ditlogo.jpg`), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             aditt.sendMessage(_.jid, { contentText: `${textt}`, footerText: `_*𝐃𝐲𝐭𝐳𝐕𝐈𝐏 Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'OKE KAK'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./gambar/ditlogo.jpg`), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bc4':
case 'broadcast4':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await aditt.chats.all()
if (isMedia && !ditt.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
bc = await aditt.downloadMediaMessage(encmedia)
for (let _ of anu) {
aditt.sendMessage(_.jid, bc, image, {quoted:ftroli,caption: `*「 BROADCAST '𝐃𝐲𝐭𝐳𝐕𝐈𝐏 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 XMOODS BROADCAST 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'bc2':
case 'broadcast2':
             if (!isOwner) return sticOwner(from)
             if (args.length < 1) return reply('teks?')
             sticWait(from)
             anu = await aditt.chats.all()
             if (isMedia && !ditt.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
             bc = await aditt.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             aditt.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 BROADCAST '𝐃𝐲𝐭𝐳𝐕𝐈𝐏 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
aditt.sendMessage(_.jid, 
	    {"contentText": `*「 BROADCAST '𝐃𝐲𝐭𝐳𝐕𝐈𝐏 」*\n\n${body.slice(4)}`,
	    "footerText": '𝐃𝐲𝐭𝐳𝐕𝐈𝐏',
	    "buttons": [
	    {"buttonId": `!owner`,
	    "buttonText": {"displayText": "OWNER"
	    },"type": "RESPONSE"}
	    ], "headerType": 1,
	    }, MessageType.buttonsMessage, {quoted:freply})
}
             reply('Suksess broadcast')
}
             break
case 'bc3':
case 'broadcast3':
             if (!isOwner) return sticOwner(from)
            if (args.length < 1) return reply('teks?')
             anu = await aditt.chats.all()
             if (isMedia && !ditt.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
             bc2 = await aditt.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             aditt.sendMessage(_.jid, { contentText: `*🔖 BROADCAST '𝐃𝐲𝐭𝐳𝐕𝐈𝐏 🔖*\n\n${body.slice(4)}`, footerText: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏', buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'kontag':
            if (!isOwner) return sticOwner(from)
            if (!isGroupAdmins) return sticAdmin(from)
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            aditt.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
case 'sharelock': 
tama = `${args.join(' ')}`
nama = tama.split("|")[0];
impostor = tama.split("|")[1];
aditt.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'ttt':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (ditt.message.extendedTextMessage === undefined || ditt.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = ditt.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
aditt.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
case 't':
     
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
          break
                case 'delttt':
                case 'delttc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
     case 't':
       titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
          
                   sendButMessage(from, titid, `𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, [
          {
            buttonId: `Y`,
            buttonText: {
              displayText: `Y`,
            },
            type: 1,
            
            
    },
          {
            buttonId: `N`,
            buttonText: {
              displayText: `N`,
            },
            type: 1,
          },
        ]);
          break
case 'ttp':
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
case 'txtopng':
sticWait(from)
if (args.length == 0) return reply(`Teksnya mana?...`)
ini_txt = args.join(" ")
getBuffer(`https://leyscoders-api.herokuapp.com/api/textto-image?text=${ini_txt}`).then((gambar) => {
aditt.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `NIH KAK😖`, quoted : freply})
})
break   
case 'meme':
buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyOgiwara')
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️LANJUT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
aditt.relayWAMessage(prep)    
break
case 'balik':
encmediau = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await aditt.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aditt.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ditt})
fs.unlinkSync(ran)
})
break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
              if (args[0] === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI AKTIFKAN')
              } else if (args[0] === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
              reply('ANTILINK DI NONAKTIFKAN')
              } else if (!q) {
              	var ini_gopayy =`Halo ${pushname} klik button atau Gunakan ${prefix + command }antilink enable / disable jika button tidak merespon`
var buttonss = [
{buttonId: `!antilink enable`, buttonText:{displayText: 'ENABLE'}, type: 1},
{buttonId: `!antilin disable`, buttonText:{displayText: 'DISABLE'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏` ,
buttons: buttonss,
headerType: 1
}
aditt.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
			}
          break

case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pinter': 
case 'jago': 
case 'nolep': 
case 'monyet':                 	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':       
if (!isGroup) return reply('Khusus group kak') 
jds = []
const A1 = groupMembers
const B1 = groupMembers
const C1 = A1[Math.floor(Math.random() * A1.length)]
D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
jds.push(C1.jid)
mentions(D1, jds, true)
break
case 'gantengcek':                      	  
                    
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😎`
                    reply(N)
                    break 
      case 'cantikcek':                      	  
                    
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}% 😁*`
                    reply(N)
                    break
       case 'jelekcek':  
                                          	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🤢`
                    reply(N)
                    break 
      case 'goblokcek':                      	  
                    
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🤣`
                    reply(N)
                    break 
      case 'begocek':                      	  
                    
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😂`
                    reply(N)
                    break 
      case 'pintercek':                      	  
                     
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😗`
                    reply(N)
                    break 
     case 'jagocek':                      	  
                     
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 💪`
                    reply(N)
                    break 
     case 'nolepcek':                      	  
                     
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🧐`
                    reply(N)
                    break 
     case 'babicek':                      	  
                     
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🤪`
                    reply(N)
                    break 
     case 'bebancek':                      	  
                    
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🤬`
                    reply(N)
                    break 
      case 'baikcek':                      	  
                     
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😇`
                    reply(N)
                    break 
      case 'jahatcek':                      	  
                     
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😈`
                    reply(N)
                    break 
      case 'anjingcek':                      	  
                     
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 👀`
                    reply(N)
                    break                      
      case 'haramcek':                      	  
                    
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🥴`
                    reply(N)
                    break  
      case 'kontolcek':                      	  
                     
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🙂`
                    reply(N)
                    break 
       case 'pakboycek':                      	  
                     
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😏`
                    reply(N)
                    break 
       case 'pakgirlcek':                      	  
                    	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😏`
                    reply(N)
                    break             
       case 'sangecek':                      	                      
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 🤤`
                    reply(N)
                    break
       case 'bapercek':                      	                      
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${aditt3}${aditt4}%* 😘`
                    reply(N)
                    break                  
       case 'cekwatak':       
              var namao = pushname
              var prfx = await aditt.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Coldas','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':       
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              aditt.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: ditt })
              break
case 'waifuhd':                      
v = await fetchJson(`https://waifu.pics/api/sfw/waifu`)
sticWait(from)              
buff = sendMediaURL(from, v.url, )
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
aditt.relayWAMessage(prep)
break
case 'tourl':              
if ((isMedia && !ditt.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
sticWait(from)              
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
owgi = await aditt.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'imgtourl':
case 'img2url':              
sticWait(from)
var imgbb = require('imgbb-uploader')
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
var media = await  aditt.downloadAndSaveMediaMessage(encmedia)       
imgbb('39d895963468b814fad0514bd28787e2', media)
.then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
aditt.sendMessage(from, ibb, image, { quoted: ditt, caption: caps})
})
.catch(err => {
throw err
})
break
case 'menu2':
        case 'help2':
        case 'adit':  
        sticWait(from)
        aditt.updatePresence(from, Presence.recording)
        const date = fs.readFileSync('mp3/onichan.mp3')
aditt.sendMessage(from, date, MessageType.audio, {quoted: ditt, mimetype: 'audio/mp4', ptt:true})
               const boy = "6287895808192@s.whatsapp.net"     
               const filename = `@${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               const nomoruser = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
               parseMention = (text = '') => {
               return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
               totalChat = await aditt.chats.all()
               groups = aditt.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = aditt.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               total = math(`${groups.length}*${privat.length}`)
               timestampe = speed();
               latensie = speed() - timestampe             
               menu =`     *☰ BOT INFO ☰*
               
❏ *CLICK THE BUTTON BELOW TO SEE OTHER FEATURES*
❏ *IF THE BOTT IS NOT RUNNING MEANS THE BOTT IS IN SELF MODE*
❏ *WHEN ANY BOT FEATURE ERRORS, CONTACT THE OWNER*
❏ *SORRY IF THERE ARE MANY ERRORS ABOUT THE BOTS*
❏ *DO NOT SPAM BOTS IF YOU KNOW THE BOTTLE WILL BLOCK YOU*
❏ *USE THE BOTS WISE AND DON'T LIGHT UP THE BOTS BY VIOLENCE*

`                        
               buttons = [{buttonId: `${prefix}command`,buttonText:{displayText: '🧾 LIST MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText: 'SEWA BOT'},type:1},]
               imageMsg = (await aditt.prepareMessageMedia(fs.readFileSync(`./gambar/ditlogo.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./gambar/ditlain.jpg`)})).imageMessage
               buttonsMessage = {
               contentText: `${menu}`,
               footerText: ` ⃝𝐃𝐲𝐭𝐳𝐕𝐈𝐏`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
               prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ditt, contextInfo:{ mentionedJid: parseMention(menu), externalAdReply: {
							title: `Hai ${pushname} 👋`,
							body: `${jmn}`,
							previewType: 2,
							thumbnailUrl: "https://youtu.be/vY8hxx--Mr8",
							thumbnail: fs.readFileSync('./gambar/ditlogo.jpg'), }, forwardingScore:508, isForwarded:true, mentionedJid:[nomoruser + '@s.whatsapp.net', senderr]}})
                            aditt.relayWAMessage(prep)
                            break
        	case 'menuuu':
        case 'helppp':
        sticWait(from)
  stod = `${sender}`
			fill =` *☰ BOT INFO ☰*
               
❏ *CLICK THE BUTTON BELOW TO SEE OTHER FEATURES*
❏ *IF THE BOTT IS NOT RUNNING MEANS THE BOTT IS IN SELF MODE*
❏ *WHEN ANY BOT FEATURE ERRORS, CONTACT THE OWNER*
❏ *SORRY IF THERE ARE MANY ERRORS ABOUT THE BOTS*
❏ *DO NOT SPAM BOTS IF YOU KNOW THE BOTTLE WILL BLOCK YOU*
❏ *USE THE BOTS WISE AND DON'T LIGHT UP THE BOTS BY VIOLENCE*
`
menu =`𝐃𝐲𝐭𝐳𝐕𝐈𝐏 - BOTZ`
gbutsan = [
{buttonId:`!cmd`,buttonText:{displayText:'🧾 LIST MENU'},type:1},
{buttonId:`!sewabot`,buttonText:{displayText: '🛒 SEWA BOT'},type:1},
]
mhan = await aditt.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
aditt.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"mediaUrl": "https://youtu.be/JN_Gw2GzuqQ",
"thumbnail": fs.readFileSync('./gambar/ditlogo.jpg'), }
,mentionedJid:[stod]}, quoted : freply})
break
case 'menuuuu':
thu = await aditt.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `_*• Contact Owner*_\n_🪀Whatsapp_ : *http://wa.me/6287895808192*\n_💌Email_ : *adityachannel567@gmail.com*\n\n*USER INFO*\n_Name_ : *${pushname}*\n_Bio_ : *${thu.status}*\n_Creator_ : *https://wa.me/${sender.split("@")[0]}*\n\n*BOT INFO*\n_Name_ : *${botName}*\n_Owner_ : *${ownerName}*\n_Lib_ : *Baileys*\n_Prefix_ : *Multiprefix*`
aditt.sendMessage(from, { contentText: `${menuh}`, footerText: `𝐃𝐲𝐭𝐳𝐕𝐈𝐏 - BOTZ`, 
buttons: [
{buttonId:`.command`,buttonText:{displayText:'🧾 LIST MENU'},type:1}
], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync(`./gambar/dett.jpg`), contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'addvn':
			if (!isOwner) return reply(`Kamu bukan owner say:v`)
				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(ditt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await aditt.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./database/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./database/audio.json', JSON.stringify(audionye))
				aditt.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self '𝐃𝐲𝐭𝐳𝐕𝐈𝐏_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/ditlain.jpg')} }} }) 
				break
case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./database/audio/${namastc}.mp3`)
				aditt.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self '𝐃𝐲𝐭𝐳𝐕𝐈𝐏_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/ditlain.jpg')} }}, ptt: true })
				break
case 'listvn':
case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				aditt.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_Self '𝐃𝐲𝐭𝐳𝐕𝐈𝐏_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('gambar/ditlain.jpg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
case 'artikata':
                if (args.length < 1) return reply('Apa Yang Mau di artikan?')
              sticWait(from)
              
                    teks = args.join(' ')
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/arti-kata?q=${teks}&apikey=IkyOgiwara`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik lagi jika suka Ilham`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ LANJUT `,
            },
            type: 1,
          },]);
        break
        case 'tahilalat':
                    get_result = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tahi-lalat?apikey=IkyOgiwara`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik lanjut untuk lagi...`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ LANJUT `,
            },
            type: 1,
          },]);
        break
//===========[ Premium ]==========\\
       case 'premium': 
              if (!isOwner && !ditt.key.fromMe) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (ditt.message.extendedTextMessage != undefined) {
              mentioned = ditt.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
              } else {
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (ditt.message.extendedTextMessage != undefined) {
              mentioned = ditt.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
case 'toimg':      
              if (!isQuotedSticker) return reply('reply stickernya')
              sticWait(from)              
              encmedia = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await aditt.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(ran)
              aditt.sendMessage(from, buffer, image, {quoted: ditt, caption: 'Nih'})
              fs.unlinkSync(ran)
})
              break
case 'togif':        
               if ((isMedia && !ditt.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)              
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
               mediaaa = await aditt.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               aditt.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: ditt, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
case 'tovideo':
case 'tomp4':        
               if ((isMedia && !ditt.message.videoMessage || isQuotedSticker) && args.length == 0) {
               sticWait(from)              
               encmedia = JSON.parse(JSON.stringify(ditt).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               mediaaa = await aditt.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               aditt.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: ditt, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
case 'gay':		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !ditt.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  aditt.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					aditt.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: ditt})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break                              
case 'closetime'://====Dari Pena bot=====\\
      if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return reply("Khusus di grup");		 
        reply("AKSES WAKTU DIPROSES")   	
                aditt.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"0000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = ditt.participant
				const close = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				aditt.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
case 'opentime'://====Dari Pena bot=====\\  
		     	if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticNotAdmin(from)
        if (!isGroup) return reply("Khusus di grup");		    
                reply("AKSES WAKTU DIPROSES")   
                aditt.updatePresence(from, Presence.composing) 
                if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"00000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
				var nomor = ditt.participant
				const open = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split("@s.whatsapp.net")[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				aditt.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break
case 'linkwa': 
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case "tes":
        sendButMessage(from, `Siap Lapor!, Bot Aktif!`, `Nah kak silahkan pilih salah satu tombol di bawah`, [
          {
            buttonId: `${prefix}runtime`,
            buttonText: {
              displayText: `⬡ RUNTIME `,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}menu`,
            buttonText: {
              displayText: `⬡ MENU`,
            },
            type: 1,
          },
        ]);
        break
case 'runtime':
textImg(`${runtime(process.uptime())}`)
break       
case 'ping':
case 'speed':              
timestampe = speed();
latensie = speed() - timestampe
reply(`「 *'𝐃𝐲𝐭𝐳𝐕𝐈𝐏* 」\n ⏳ ${latensie.toFixed(4)} detik ⏳`)
break
case 'gachacecan':
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          
                           {
                              "title": ")-----[INDONESIA]-----(",
                              "description": `Cecan 1`,
                              "rowId": "#indonesia"
                           },                                                                                                            
                           {
                              "title": ")-----[THAILAND]-----(",
                              "description": `Cecan 2`,
                              "rowId": "#thailand"
                           },
                           {
                              "title": ")-----[VIETNAM]-----(",
                              "description": `Cecan 3`,
                              "rowId": "#vietnam"
                           },
                           {
                              "title": ")-----[MALAYSIA]-----(",
                              "description": `Cecan 4`,
                              "rowId": "#malaysia"
                           },
                           {
                              "title": ")-----[KOREA]-----(",
                              "description": `Cecan 5`,
                              "rowId": "#korea"
                           }, 
                           {
                              "title": ")-----[JEPANG]-----(",
                              "description": `Cecan 6`,
                              "rowId": "#jepang"
                           },
                           {
                              "title": ")-----[CHINA]-----(",
                              "description": `Cecan 7`,
                              "rowId": "#china"
                           }                           
                           
                        ]
                     }],
 listType: 1
}
aditt.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftroli})
break
case 'vietnam':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/vietnam?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'china':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/china?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'malaysia':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/malaysia?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'korea':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/korea?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'indonesia':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/indonesia?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'thailand':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/thailand?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'japan':
author = await fetchJson(`https://za-api.herokuapp.com/api/cewe/japan?apikey=${za_api}`)
buff = await getBuffer(author.result.url)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break
case 'translate':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://za-api.herokuapp.com/api/translate?kata=${q}&apikey=${za_api}`, {method: 'get'})
teks = `Translate : ${anu.result.text}\n\nFrom : ${anu.result.from}`                   
reply(teks)
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','YO NDAK TAU KOK TANYA SAYA']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
aditt.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ditt })
break
case 'kapankah':       
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
aditt.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ditt })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
aditt.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ditt })
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !ditt.key.fromMe) return reply(mess.only.owner)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = ditt.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg("Done!")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !ditt.key.fromMe) return reply(mess.only.owner)        
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = ditt.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
textImg("Done!")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
mentions(teksnyee, cemde, true)
break
case 'detikvn':
if (!isQuotedAudio) return reply('Reply audionya!')			
encmediam = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await aditt.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
aditt.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
fs.unlinkSync(mediam)
break	
case 'detikvideo':
if (!isQuotedVideo) return reply('Reply videonya blokk!')
encmedian = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await aditt.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
aditt.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvideo})
fs.unlinkSync(median)
break 
case 'robot':
encmedial = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await aditt.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
aditt.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: ditt})
fs.unlinkSync(ran)
})
break
case 'gemuk':
encmediaz = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await aditt.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
aditt.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:ditt})
fs.unlinkSync(ran)
})
break
case 'bass':                 
encmediao = JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await aditt.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
aditt.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:ditt})
fs.unlinkSync(ran)
})
break
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await aditt.messageInfo(from, ditt.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'jadian':       
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian@${akuu.jid.split('@')[0]}  (♥️) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid) 
mentions(teks, jds, true)            
sendButMessage(from, `SEMOGA NIKAH😂`, `klik tombol di bawah untuk menjodohkan lagi`, [
{
buttonId: `${prefix}jadian`,
buttonText: {
displayText: `PASANGAN SELANJUTNYA ➡️ `,
},
type: 1,
},          
]);
break
case 'wangy':
if (!q) return
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
case 'waktu':
reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)
break
case 'cekmati':
if (!q) return reply(mess.wrongFormat)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
case 'spam':
if (!isOwner && !ditt.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
aditt.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'tag':
if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
aditt.sendMessage(from, tagq, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftroli})
var nomqm = ditt.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
aditt.sendMessage(from, tagu, text, { quoted: ftroli, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break    	
case 'upswteks':
if (!isOwner && !ditt.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
aditt.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break
case 'kalkulator':
var mtk = body.slice(12)
teks = `${mtk} = ${Math_js.evaluate(mtk)}`
reply(teks)
break
case "totag":
       if (!isGroupAdmins && !isOwner && !ditt.key.fromMe) return reply(mess.only.admin)
        if (
          ((isMedia && !ditt.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(ditt).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : ditt;
          file = await aditt.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await aditt.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: ditt,
          };
          ini_buffer = fs.readFileSync(file);
          aditt.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !ditt.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(ditt).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : ditt;
          file = await aditt.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await aditt.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: ditt,
          };
          ini_buffer = fs.readFileSync(file);
          aditt.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !ditt.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(ditt).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : ditt;
          file = await aditt.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await aditt.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: ditt,
          };
          ini_buffer = fs.readFileSync(file);
          aditt.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !ditt.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(ditt).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : ditt;
          file = await aditt.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await aditt.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: ditt,
          };
          ini_buffer = fs.readFileSync(file);
          aditt.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply gambar/sticker/audio/video dengan caption ${prefix}totag`
          );
        }
        break
case 'googlelink':                             
anu = await fetchJson(`http://hadi-api.herokuapp.com/api/googlesearch?q=${q}&length=10`)
itu = anu.hasil
let ini = itu[Math.floor(Math.random() * (itu.length))]
ini_hasil = `Hasil : ${ini.title}\n`
ini_hasil += `Link : ${ini.link}`
sendButMessage(from, ini_hasil, `Klik Untuk Ke Quotes Selanjutnya`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `➡️ LANJUT `,
},
type: 1,
},]);
break

case 'emoji':
if (!q) return fakegroup('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'fitnah':
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = ditt.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				aditt.sendMessage(from, cs[2], MessageType.text, target)
				break      
case 'kbbi':               
if (args.length < 1) return reply('Apa Yang Mau di artikan?')
sticWait(from)             
kbbi = args.join(' ')
memeks = await fetchJson(`https://zenzapi.xyz/api/kbbi?query=${kbbi}&apikey=${zenzapi}`)
kontol  = `Title : ${memeks.result.title}\n\n`
kontol += `Caption : ${memeks.result.arti}`
sendButMessage(from, kontol, `Tuh artinya, klik tombol di bawah untuk kembali ke menu`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `⬅️️ BACK TO MENU `,
},
type: 1,
},]);
break
case 'rules':               
anjeng = `
)-----[RULES BOT]-----(

1.teks dan nama pengguna whatsapp
anda akan kami simpan di dalam
server selama bot aktif
2.data akan di hapus ketika bot offline
3.kami tidak menyimpan
gambar,video,file,audio,dan dokumen
yang anda kirim
4.kami tidak akan pernah meminta
anda untuk memberikan informasi
pribadi
5.jika menemukan bug/error silahkan
langsung lapor ke owner bot
6.jangan spam bot,sangsi block
7.jangan telepon bot,sangsi block
permanen
8.apapun yang anda perintahkan
pada bot ini,KAMI TIDAK AKAN
BERTANGGUNG JAWAB!
TERIMAKASIH TELAH
MENGGUNAKAN BOT KAMI
Owner 𝐃𝐲𝐭𝐳𝐕𝐈𝐏:

wa.me/6287895808192`
sendButMessage(from, anjeng, `Baca rulesnya!, Jangan di baca doang, Patuhi juga ajg❗`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break

case 'hit':  
case 'totalhit':             
babi = totalhit
sendButMessage(from, babi, `Hit Hari ini`, [
{
buttonId: `${prefix} command`,
buttonText: {
displayText: `💾MENU `,
},
type: 1,
},]);
break
case 'walpapermuslim':			
sticWait(from)
data = walpapermuslim
jsonData = JSON.parse(data);
xm1 = Math.floor(Math.random() * jsonData.length);
xm2 = jsonData[xm1];
hasil = await getBuffer(xm2.result)
buttons = [{buttonId: `#walpapermuslim`,buttonText:{displayText: ` ➡️LANJUT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(hasil, "imageMessage", { thumbnail: hasil, })).imageMessage
buttonsMessage = {footerText:'crated by aditt ganz', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftroli})
aditt.relayWAMessage(prep)
break

//=======================================================================

//=======================================================================
case "caklontong":
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text)
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   aditt.sendMessage(from, cak, text, {quoted: ditt }) // ur cods
   }, 0) // 1000 = 1s,
   
   break
//=======================================================================
case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt
	           		sticWait(from)
	                 owgi = await aditt.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					aditt.sendMessage(from, buffer, image, {quoted: ditt})
                   }
              break       
//=======================================================================
case 'culik':
if (!isOwner && !ditt.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
aditt.groupAdd(args[0], pantek)
break
//=======================================================================
case 'pem':{
const buttons = [{buttonId: `!000`, buttonText: {displayText: '\nLopyu tuuuu :D'}, type: 1},{buttonId: `!0000`, buttonText: {displayText: '\nIdihhh'}, type: 1}]
const buttonMessage = {
  headerType: "IMAGE",
  contentText: `Lopyu kakk :D`,
  footerText: `Mwehehehehehe`,
  buttons: buttons,
  headerType: 1
  }  
  aditt.sendMessage(from, buttonMessage, MessageType.buttonsMessage)
  }
  break
///============ BASIC BUTTON ========\\\\
case 'suit': //nyolong dari zenz
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
//=======================================================================
case 'slot':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🔔 : ?? : 🔔') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
              } else {
              reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
}
              break
//=======================================================================
case 'join': 
             if (!q) return reply('Linknya?')
             if (!isOwner) return reply(mess.only.owner)
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = aditt.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Berhasil Masuk Grup')
             break
//=======================================================================
case 'feed2':
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/feed?apikey=DitzVIPP`)
aditt.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: fgif})
break  
//=======================================================================
case 'dance':
reply('Proses kak')  
				anu = await getBuffer(`https://api.lolhuman.xyz/api/random/dance?apikey=DitzVIPP`)			
			    
				aditt.sendMessage(from, anu, video, {quoted:freply, caption: 'NIH KAK😖'})
break
//=======================================================================
case 'feed3':
sticWait(from)
         anu = await getBuffer(`https://api.lolhuman.xyz/api/random2/feed?apikey=DitzVIPP`)
              aditt.sendMessage(from, anu, video, {thumbnail: Buffer.alloc(1), quoted: floc})
break
//=======================================================================
case 'welcomemaker':
if(!q)return reply(`Example : ${prefix + command} https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg|https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg|https://i.ibb.co/8B6Q84n/LTqHsfYS.jpg|DitzVIP|1000|Group%Bokep`)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1] 
gl3 = q.split('|')[2]
gl4 = q.split('|')[3]
gl5 = q.split('|')[4]
gl6 = q.split('|')[5]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/base/welcome?apikey=DitzVIPP&img1=${gl1}&img2=${gl2}&background=${gl3}&username=${gl4}&member=${gl5}&groupname=${gl6}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'removebg':
case 'removebackground':
case 'rb':
if(!q)return reply(`Example : ${prefix + command} linknya\n\nContoh : ${prefix + command} https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
linkweb = q.split('|')[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/removebg?apikey=DitzVIPP&img=${linkweb}`)
aditt.sendMessage(from, buffer, image, { quoted: floc })
break
//=======================================================================
case 'affect':
if(!q)return reply(`Example : ${prefix + command} linknya\n\nContoh : ${prefix + command} https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
linkweb = q.split('|')[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator1/affect?apikey=DitzVIPP&img=${linkweb}`)
aditt.sendMessage(from, buffer, image, { quoted: floc })
break
//=======================================================================
case 'trash':
if(!q)return reply(`Example : ${prefix + command} linknya\n\nContoh : ${prefix + command} https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg`)
linkweb = q.split('|')[0]
buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator1/trash?apikey=DitzVIPP&img=${linkweb}`)
aditt.sendMessage(from, buffer, image, { quoted: floc })
break
//=======================================================================
case 'puppycute':
if(!q)return reply(`Example : ${prefix + command} Namanya\n\nContoh : ${prefix + command} DitzVIP`)
text1 = q.split(' ')
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/puppycute?apikey=DitzVIPP&text=${text1}`)
aditt.sendMessage(from, buffer, video, { quoted: floc })
break
//=======================================================================
case 'dadu':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/dadu?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
//=======================================================================
case 'patrick':
case 'patrik':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
//=======================================================================
case 'doge':
case 'anjing':
case 'anj':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/anjing?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
//=======================================================================
case 'amongus':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
case 'gawrgura':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
case 'stickerbucin':
buffer = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=DitzVIPP`)
aditt.sendMessage(from, buffer, sticker, { quoted: floc })
break
case 'stickermenu':
case 'menusticker':
               list = []
               listmenu = [`patrick`,`dadu`,`gawrgura`,`stickerbucin`,`amongus`,`anj`]
               listmenuu = [`STICKER PATRICK`,`STICKER DADU`,`STICKER GAWRGURA`,`STICKER BUCIN`,`STICKER AMONGUS`,`STICKER DOGE`]
              // listmenuuu = [``]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
       // description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH MENU NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
case 'menu5':
aditt.sendMessage(from, {"contentText": `*☰ BOT INFO ☰*
               
❏ *CLICK THE BUTTON BELOW TO SEE OTHER FEATURES*
❏ *IF THE BOTT IS NOT RUNNING MEANS THE BOTT IS IN SELF MODE*
❏ *WHEN ANY BOT FEATURE ERRORS, CONTACT THE OWNER*
❏ *SORRY IF THERE ARE MANY ERRORS ABOUT THE BOTS*
❏ *DO NOT SPAM BOTS IF YOU KNOW THE BOTTLE WILL BLOCK YOU*
❏ *USE THE BOTS WISE AND DON'T LIGHT UP THE BOTS BY VIOLENCE*

*──────" Info Owner "──────*
 👤OWNER : *https://wa.me/6287895808192*
 💌EMAIL : *adityachannel567@gmail.com*
 ☕DONATE : *https://saweria.co/GyroBotz*
 🔎YT : *https://www.youtube.com/channel/UC83SpWrbySjh4UStaAvnDZw*
`,"footerText": `*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝘿𝙞𝙩𝙯𝙑𝙄𝙋 𝙓𝙈 ཻུ۪۪ꦽꦼ̷⸙*`,
"buttons": [
{buttonId: `.cmd`, buttonText: {displayText: '🧾 LIST MENU'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '🤴 OWNER'}, type: 1},
{buttonId: `.sewabot`, buttonText: {displayText: '🛒 SEWA BOT'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "DitzVIP.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "DitzVIP Bot WhatsApp",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": "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"
  }}, MessageType.buttonsMessage,{ quoted: freply, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Hai Kak ${pushname}`, "body": `how are you?`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/2185f3bad2a354455bd8f.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/vY8hxx--Mr8`}}})
  break
//=======================================================================
   case 'menu':
               list = []
               listmenu = [`menuuu`,`menu5`,`menu2`,`menuuuu`]
               listmenuu = [`MENU 1`,`MENU 2`,`MENU 3`,`MENU 4`]
               listmenuuu = [`MENU YOUTUBE`,`MENU PDF`,`MENU IMAGE`,`MENU LOCATION`]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH MENU NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
case 'command':
case 'cmd':
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MENU',
 footerText: '𝐃𝐲𝐭𝐳𝐕𝐈𝐏',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          
                           {
                              "title": "❏ GROUP MENU",
                              "description": ``,
                              "rowId": "#groupmenu"
                           },                                                                                                            
                           {
                              "title": "❏ DOWNLOAD MENU",
                              "description": ``,
                              "rowId": "#downloadmenu"
                           },
                           {
                              "title": "❏ OWNER MENU",
                              "description": ``,
                              "rowId": "#ownermenu"
                           },
                           {
                              "title": "❏ OTHER MENU",
                              "description": ``,
                              "rowId": "#othermenu"
                           },
                           {
                              "title": "❏ STICKER MENU",
                              "description": ``,
                              "rowId": "#stickermenu"
                           },               
                           {
                              "title": "❏ ASUPAN MENU",
                              "description": ``,
                              "rowId": "#asupanmenu"
                           }, 
                           {
                              "title": "❏ SOUND MENU",
                              "description": ``,
                              "rowId": "#soundmenu"
                           }, 
                           {
                              "title": "❏ ANIME MENU",
                              "description": ``,
                              "rowId": "#animemenu"
                           },
                           {
                              "title": "❏ NSFW MENU",
                              "description": ``,
                              "rowId": "#nsfwmenu"
                           },
                           {
                              "title": "❏ NSFW2 MENU",
                              "description": ``,
                              "rowId": "#nsfwmenu2"
                           },
                           {
                              "title": "❏ QUOTES MENU",
                              "description": ``,
                              "rowId": "#quotesmenu"
                           },
                           {
                              "title": "❏ KATA-KATA MENU",
                              "description": ``,
                              "rowId": "#katamenu"
                           },
                           {
                              "title": "❏ MAKER MENU",
                              "description": ``,
                              "rowId": "#makermenu"
                           },
                           {
                              "title": "❏ FUN MENU",
                              "description": ``,
                              "rowId": "#funmenu"
                           },
                           {
                              "title": "❏ GAME MENU",
                              "description": ``,
                              "rowId": "#gamemenu"
                           },
                           {
                              "title": "❏ CEK MENU",
                              "description": ``,
                              "rowId": "#cekmenu"
                           },
                           {
                              "title": "❏ STORAGE MENU",
                              "description": ``,
                              "rowId": "#storagemenu"
                           },
                           {
                              "title": "❏ PRIMBON MENU",
                              "description": ``,
                              "rowId": "#primbonmenu"
                           },
                           {
                              "title": "❏ GACHA CEWE",
                              "description": ``,
                              "rowId": "#gachacecan"
                           },
                           {
                              "title": "❏ MY PARTNER",
                              "description": ``,
                              "rowId": "#mypartner"
                           },
                           {
                              "title": "❏ SEWA BOT",
                              "description": ``,
                              "rowId": "#sewabot"
                           }  
                           
                        ]
                     }],
 listType: 1
}
aditt.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftroli})
break
//=======================================================================
case 'elf':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'shota2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'neko2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'husbu2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'sagiri2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'elaina2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/elaina?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'shinobu2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/shinobu?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'kanna2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/kanna?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'megumin2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'art2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/art?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'waifu2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
case 'wallnime2':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
//=======================================================================
        case 'animemenu':
        case 'menuanime':
               list = []
               listmenu = [`elf2`,`shota2`,`waifu`,`neko2`,`husbu2`,`sagiri2`,`elaina2`,`shinobu2`,`kanna2`,`megumin2`,`art2`,`wallnime2`]
               listmenuu = [`ELF`,`SHOTA`,`WAIFU`,`NEKO`,`HUSBU`,`SAGIRI`,`ELAINA`,`SHINOBU`,`KANNA`,`MEGUMIN`,`ART`,`WALLNIME`]
               //listmenuuu = []
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        //description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋
`,`PILIH MENU ANIME NYA`, list, { quoted: freply})
               break               
//=======================================================================
case 'neko':
case 'waifu':
case 'loli':
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
//=======================================================================
case 'nsfwmenu':
        case 'menunsfw':
               list = []
               listmenu = [`neko`,`waifu2`,`loli`,`chiisaihentai`,`trap`,`blowjob`,`yaoi`,`ecchi`,`hentai`,`ahegao`,`hololewd`,`sideoppai`,`animefeets`,`animebooty`,`animethighss`,`hentaiparadise`,`animearmpits`,`hentaifemdom`,`lewdanimegirls`,`biganimetiddies`,`hentai4everyone`]
               listmenuu = [`NEKO`,`WAIFU2`,`LOLI`,`CHIISAI HENTAI`,`TRAP`,`BLOWJOB`,`YAOI`,`ECCHI`,`HENTAI`,`AHEGAO`,`HOLOLEWD`,`SIDE OPPAI`,`ANIME FEETS`,`ANIME BOOTY`,`ANIME THIGHSS`,`HENTAI PARADISE`,`ANIME ARMPITS`,`HENTAI FEMDOM`,`LWD ANIME GIRL`,`BIG ANIME TIDDIES`,`HENTAI FOR EVERIONE`]
               //listmenuuu = []
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        //description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋
`,`PILIH MENU NSFW NYA`, list, { quoted: freply})
               break               
//=======================================================================
case 'bj':
case 'ero':
case 'cum':
case 'les':
case 'neko':
case 'feet':
case 'yuri':
case 'trap':
case 'ngif':
case 'lewd':
case 'eron':
case 'solo':
case 'anal':
case 'keta':
case 'tits':
case 'kuni':
case 'erok':
case 'solog':
case 'feetg':
case 'lewdk':
case 'pussy':
case 'femdom':
case 'hentai':
case 'eroyuri':
case 'cum_jpg':
case 'blowjob':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'futanari':
case 'hololewd':
case 'lewdkemo':
case 'pussy_jpg':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=DitzVIPP`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
contentText:`NIH KAK😖`,buttons,headerType:4}
prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
aditt.relayWAMessage(prep)
break 
//=======================================================================
case 'nsfwmenu2':
        case 'menunsfw2':
               list = []
               listmenu = [`bj`,`ero`,`cum`,`les`,`neko`,`feet`,`yuri`,`trap`,`ngif`,`lewd`,`eron`,`solo`,`anal`,`keta`,`tits`,`kuni`,`erok`,`solog`,`feetg`,`lewdk`,`pussy`,`femdom`,`hentai`,`eroyuri`,`cum_jpg`,`blowjob`,`erofeet`,`holoero`,`classic`,`erokemo`,`futanari`,`hololewd`,`lewdkemo`,`pussy_jpg`]
               listmenuu = [`BJ`,`ERO`,`CUM`,`LES`,`NEKO`,`FEET`,`YURI`,`TRAP`,`NGIF`,`LEWD`,`ERON`,`SOLO`,`ANAL`,`KETA`,`TITS`,`KUNI`,`EROK`,`SOLOG`,`FEETG`,`LEWDK`,`PUSSY`,`FEMDOM`,`HENTAI`,`ERO YURI`,`CUM JPG`,`BLOWJOB`,`ERO FEET`,`HOLO ERO`,`CLASSIC`,`ERO KEMO`,`FUTA NARI`,`HOLO LEWD`,`LEWD KEMO`,`PUSSY JPG`]
               //listmenuuu = []
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        //description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋
`,`PILIH MENU NSFW2 NYA`, list, { quoted: freply})
               break               
//=======================================================================
case 'ppcp':
case 'ppcouple':
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=DitzVIPP`)
						buff1 = await getBuffer(anu.result.male)
						buttons = [{buttonId: `${prefix}menu2`,buttonText:{displayText: `MENU`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`COWOK`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              aditt.relayWAMessage(prep)
            buff2 = await getBuffer(anu.result.female)
              buttons = [{buttonId: `${prefix}menu2`,buttonText:{displayText: `MENU`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText:`CEWEK`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
             setTimeout( async () => {
 aditt.relayWAMessage(prep)
}, 5000)
break
//=======================================================================
case 'katamenu':
case 'menukata':
               list = []
               listmenu = [`faktaunik`,`katabijak`,`pantun`,`bucin`]
               listmenuu = [`FAKTA UNIK`,`KATA BIJAK`,`KATA PANTUN`,`KATA BUCIN`]
             //  listmenuuu = [``]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
  //      description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH KATA-KATA NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
case 'quotesmenu':
case 'menuquotes':
               list = []
               listmenu = [`quotes1`,`quotesanime`,`quotesdilan`,`quotesimage`]
               listmenuu = [`QUOTES RANDOM`,`QUOTES ANIME`,`QUOTES DILAN`,`QUOTES IMAGE`]
             //  listmenuuu = [``]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
  //      description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH QUOTES NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
case 'quotes1':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=DitzVIPP`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*${author}*`)
    break
case 'quotesanime':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=DitzVIPP`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    anime = quotes.anime
    episode = quotes.episode
    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)
    break
case 'quotesdilan':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=DitzVIPP`)
     reply(get_result.result)
    break
case 'quotesimage':
    buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=DitzVIPP`)
    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText: `NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              aditt.relayWAMessage(prep)
 break
case 'faktaunik':
case 'katabijak':
case 'pantun':
case 'bucin':
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=DitzVIPP`)
   titid = get_result.result
   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
case 'randomnama':
    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=DitzVIPP`)
    kyyi = anu.result
   sendButMessage(from, kyyi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break
//=======================================================================
case 'memeindo':
sticWait(from)
    buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=DitzVIPP`)
    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText: `NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              aditt.relayWAMessage(prep)
 break
//=======================================================================
case 'memegen':
if(!q)return reply(`Example : ${prefix + command} Ditz|VIP|https://static.wikia.nocookie.net/dogelore/images/9/97/Doge.jpg/revision/latest/top-crop/width/360/height/450|20190205113053`)
sticWait(from)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1] 
gl3 = q.split('|')[2]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/memegen?apikey=DitzVIPP&texttop=${gl1}&textbottom=${gl2}&img=${gl3}?cb=${gl3}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'meme5':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP`)
    sticWait(from)
gl1 = q.split('')[0]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme5?apikey=DitzVIPP&text=${gl1}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'meme6':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP|DitzVIP|DitzVIP`)
    sticWait(from)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
gl3 = q.split('|')[2]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme6?apikey=DitzVIPP&text1=${gl1}&text2=${gl2}&text3=${gl3}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'meme7':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP|DitzVIP`)
    sticWait(from)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme7?apikey=DitzVIPP&text1=${gl1}&text2=${gl2}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'meme8':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP|DitzVIP`)
    sticWait(from)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme8?apikey=DitzVIPP&text1=${gl1}&text2=${gl2}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'changemymind':
case 'cmm':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP`)
    sticWait(from)
gl1 = q.split('|')[0]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/changemymind?apikey=DitzVIPP&text=${gl1}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'ohno':
    if(!q)return reply(`Example : ${prefix + command} DitzVIP`)
    sticWait(from)
gl1 = q.split('|')[0]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/creator/ohno?apikey=DitzVIPP&text=${gl1}`)
              aditt.sendMessage(from, buffer, image, { quoted: fgif })
              break
//=======================================================================
case 'darkjoke':
sticWait(from)
    buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=DitzVIPP`)
    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️NEXT`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText: `NIH KAK😖`,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              aditt.relayWAMessage(prep)
 break
//=======================================================================
case 'asupann':
              sticWait(from)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=DitzVIPP`)
              buffer = await getBuffer(anu.result)
              aditt.sendMessage(from, buffer, video, { quoted: fgif })
              break
//=======================================================================
case 'storyanime':
              sticWait(from)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/storynime?apikey=DitzVIPP`)
              buffer = await getBuffer(anu.result)
              aditt.sendMessage(from, buffer, video, { quoted: floc })
              break
//=======================================================================
case 'asupanmenu':
case 'menuasupan':
               list = []
               listmenu = [`asupann`,`ghea`,`rika`,`bocil`,`santuy`,`ukhty`]
               listmenuu = [`ASUPAN RANDOM`,` ASUPAN GHEA`,`ASUPAN RIKA`,`ASUPAN BOCIL`,`ASUPAN SANTUY`,`ASUPAN UKHTY`]
             //  listmenuuu = [`]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
     //   description: `${listmenuuu[startnumm++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH ASUPAN NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
case 'quotesmaker':
case 'qm':
sticWait(from)
    if(!q)return reply(`Example : ${prefix + command} MUNGKIN PEKERJAANKU YANG PALING DIAKUI, TAPI AKU TAKKAN BISA MEMBUATNYA SENDIRIAN.|DitzVIP`)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/quotemaker2?apikey=DitzVIPP&text=${gl1}&author=${gl2}`)
              aditt.sendMessage(from, buffer, image, { quoted: freply })
              break
//=======================================================================
case 'shortlink':
       case 'sh':
              if (!q) return reply(`Ketik ${prefix + command} http://google.com/`) 
              gl1 = q.split[0]
              anu = await fetchJson(`https://api.lolhuman.xyz/api/shortlink?apikey=DitzVIPP&url=${gl1}`)
              teks = `➸ Link =* ${anu.result}`
              aditt.sendMessage(from, teks, text, {quoted: freply})
              break
//=======================================================================
case 'tebakgender':
       case 'tg':
              if (!q) return reply(`Ketik ${prefix + command} DitzVIP`) 
              gl1 = q.split('|')[0]
              anu = await fetchJson(`https://api.lolhuman.xyz/api/tebakgender?apikey=DitzVIPP&name=${gl1}`)
              teks = `*TEBAK GENDER*\n\n*➸ Username =* ${anu.result.name}\n*➸ Gender =* ${anu.result.gender}`
              aditt.sendMessage(from, teks, text, {quoted: freply})
              break
//=======================================================================
case 'cekapikey':
case 'lolkey':
              if (!q) return reply(`Ketik ${prefix + command} Apikey Lu`) 
              gl1 = q.split('|')[0]
              anu = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${gl1}`)
              teks = `*🔥CHECK YOUR APIKEY🔥*\n\n*➸ Username =* _${anu.result.username}_\n*➸ Request =* _${anu.result.requests}_\n*➸ Today =* _${anu.result.today}_\n*➸ Type =* _${anu.result.account_type}_\n*➸ Expired =* _${anu.result.expired}_`
              aditt.sendMessage(from, teks, text, {quoted: freply})
              break
//=======================================================================
case 'meme4':
if(!q)return reply(`Example : ${prefix + command} DitzVIP Jelek|DitzVIP Ganteng|DitzVIP Ganteng Bngetttt`)
sticWait(from)
gl1 = q.split('|')[0]
gl2 = q.split('|')[1]
gl3 = q.split('|')[2]
              buffer = await getBuffer(`https://api.lolhuman.xyz/api/meme3?apikey=DitzVIPP&text1=${gl1}&text2=${gl2}&text3=${gl3}`)
              aditt.sendMessage(from, buffer, image, { quoted: floc })
              break
//=======================================================================
case 'welcome':
if (!isGroup) return reply(mess.only.group)
gopeynya = `https://telegra.ph/file/e07b2f145bc822ea657f8.jpg`
            buff = await getBuffer(gopeynya)
            teksnya =`
  *PILIH WELCOME BUTTON NYA KAK*`
  buttons = [{buttonId: `${prefix}welcomek enable`,buttonText:{displayText: `WELCOME ENABLE`},type:1},{buttonId: `${prefix}welcomek disable`,buttonText:{displayText: `WELCOME DISABLE`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc})
              aditt.relayWAMessage(prep)
      break
      case 'welcomek':
       if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
//=======================================================================
case 'smeme': 
sticWait(from)
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !ditt.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(ditt).replace('quotedM','m')).message.extendedTextMessage.contextInfo : ditt 
owgi = await  aditt.downloadAndSaveMediaMessage(ger)
anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
//=======================================================================
case 'tebakanime': case 'ta':{
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakAnime(from, tebakanime)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=DitzVIPP`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  sendMediaURL(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`), ditt)
  let nurulsayank = anu.data.result.name.toLowerCase()
  game.addanime(from, nurulsayank, gamewaktu, tebakanime)
  gameAdd(sender, glimit)
  }
  break
//=========================================================
case 'tebakgambar':{
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
let tbg = await axios.get(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=DitzVIPP`)
let petunjuk = tbg.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendMediaURL(from, tbg.data.result.image, monospace(`Silahkan jawab soal berikut ini\n\nPetunjuk : ${petunjuk}\nWaktu : ${gamewaktu}s`), ditt)
let anih = tbg.data.result.jawaban.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
gameAdd(sender, glimit)
    }
break  	 
//=========================================================
case 'tebakkata': case 'tk':{
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKata(from, tebakkata)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=DitzVIPP`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.pertanyaan}\n\nWaktu : ${gamewaktu}s`)
  let ahhh = anu.data.result.jawaban.toLowerCase()
  game.addkata(from, ahhh, gamewaktu, tebakkata)
  gameAdd(sender, glimit)
  }
  break
//=========================================================
case 'tebakkimia': case 'tuk':{
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakKimia(from, tebakkimia)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=DitzVIPP`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Lambang unsur ${anu.data.result.nama} adalah?\n\nWaktu : ${gamewaktu}s`)
  let revasayank = anu.data.result.lambang.toLowerCase()
  game.addkimia(from, revasayank, gamewaktu, tebakkimia)
  gameAdd(sender, glimit)
  }
  break
//=========================================================
case 'tebakbendera': case 'tb':{
  if (!isGroup) return reply(mess.only.group)
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (game.isTebakBendera(from, tebakbendera)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=DitzVIPP`)
  let petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* Bendera negara manakah itu ${anu.data.result.flag}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let ikasayank = anu.data.result.name.toLowerCase()
  game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
  gameAdd(sender, glimit)
  }
  break
//=========================================================
case 'tebaklirik': case 'tl':{
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakLirik(from, tebaklirik)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=DitzVIPP`)
  let petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nPetunjuk : ${petunjuk}\n\nWaktu : ${gamewaktu}s`)
  let anal = anu.data.result.answer.toLowerCase()
  game.addtebaklirik(from, anal, gamewaktu, tebaklirik)
  gameAdd(sender, glimit)
  }
  break
//=========================================================
case 'math':{
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}&apikey=qrKPhpoC`)
//	let petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*Soal :*\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} :_\nWaktu : ${gamewaktu}`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
    }
break
//=========================================================
case 'family100':{
  if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=DitzVIPP`)
reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n*Total Jawaban :* ${anu.data.result.aswer.length}\n\nWaktu : ${gamewaktu}s`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
  }
game.addfam(from, rgfds, gamewaktu, family100)
gameAdd(sender, glimit)
  }
break
//=========================================================
case 'siapaaku': case 'siapakahaku': case 'sa':{
  if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
  if (!isGroup) return reply(mess.only.group)
  if (game.isTebakGambar(from, tebakgambar)) return reply(`Masih ada soal yang belum di selesaikan`)
  let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=DitzVIPP`)
  reply(`*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\n\nWaktu : ${gamewaktu}s`)
  let anau = anu.data.result.answer.toLowerCase()
  game.addsyiko(from, anau, gamewaktu, siapaaku)
  gameAdd(sender, glimit)
  }
  break
//=======================================================================

//=======================================================================
case 'soundmenu':
case 'menusound':
               list = []
               listmenu = [`numa`,`wilfex`,`gani`,`mfz`,`bam`,`merindu`,`nwantiti`]
               listmenuu = [`SOUND DJ`,`SOUND DJ`,`SOUND DJ`,`SOUND DJ`,`SOUND DJ`,`SOUND DJ`,`SOUND DJ`]
               listmenuuu = [`DJ NUMA NUMA YE FULL BASS VIRAL TIKTOK 2021`,`DJ JEDAG JEDUG WILFEX BOR FULL BASS TERBARU VIRAL TIKTOK 2021`,`DJ GANI GANI SLOW VIRAL TIKTOK 2021`,`DJ JEDAG JEDUG MFZ STYLE REMIX 3 WILFEX BOR FULL BASS VIRAL TIKTOK 2021`,`DJ BAMBAM TAMTAM FULL BASS VIRAL TIKTOK 2021`,`DJ OLD HATE SABE SLOW VIRAL TIKTOK 2021`,`DJ LOVE NWANTITI FULL BASS VIRAL TIKTOK 2021`]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: `${listmenuuu[startnumm++]}`,
      rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname} 👋\n${jmn}
      

`,`PILIH SOUND NYA KAK`, list, { quoted: freply})
               break
//=======================================================================
        case 'numa':
		aditt.updatePresence(from, Presence.composing)
		loli = fs.readFileSync('./assets/numa')
        aditt.sendMessage(from, loli, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ NUMA NUMA YEI FULL BASS VIRAL TIKTOK 2021", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'wilfex':
		aditt.updatePresence(from, Presence.composing)
		tyd = fs.readFileSync('./assets/wilfex.mp3')
        aditt.sendMessage(from, tyd, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ JEDAG JEDUG WILFEX BOR FULL BASS TERBARU VIRAL TIKTOK 2021", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'bam':
		aditt.updatePresence(from, Presence.composing)
		tyd = fs.readFileSync('./assets/bumbum.mp3')
        aditt.sendMessage(from, tyd, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ JEDAG JEDUG BUMBUM TAMTAM FULL BASS TERBARU VIRAL TIKTOK 2021", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'mfz':
		aditt.updatePresence(from, Presence.composing)
		tyd = fs.readFileSync('./assets/mfz.mp3')
        aditt.sendMessage(from, tyd, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ JEDAG JEDUG MFZ STYLE FULL BASS TERBARU VIRAL TIKTOK 2021", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'merindu':
		aditt.updatePresence(from, Presence.composing)
		tyd = fs.readFileSync('./assets/maton.mp3')
        aditt.sendMessage(from, tyd, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ OLD HATE SABE MERINDU SLOW VIRAL TIKTOK 2021", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'gani':
		aditt.updatePresence(from, Presence.composing)
	    loli = fs.readFileSync('./assets/gani.mp3')
        aditt.sendMessage(from, loli, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ GANI GANI X HUJAN LEBAT ANGIN RIBUT", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
        
        case 'nwantiti':
		aditt.updatePresence(from, Presence.composing)
		loli = fs.readFileSync('./assets/love.mp3')
        aditt.sendMessage(from, loli, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
        d = fs.readFileSync('./sticker/jget.webp');
        aditt.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Song : DJ VIRAL TIKTOK LOVE NWANTITI DJ SLOW BASS", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
        break
//=======================================================================
case 'creategroup':
			case 'creategrup':
           //   if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	   //if (!isGroup) return reply(mess.only.group)
				if (!q) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				sticWait(from)
				argz = q.split('|')
				if (ditt.message.extendedTextMessage != undefined){
                    mentioned = ditt.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					aditt.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
//=======================================================================
case 'antilinkyoutube-c':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
                                             antilinkytc.push(from)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
                                             aditt.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
                                             antilinkytc.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkytchannel.json', JSON.stringify(antilinkytc))
                                             reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinkinstagram':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
                                      if (Number(args[0]) === 1) {
                                             if (isAntiLinkig) return reply('UDAH NYALA KAK')
                                             antilinkig.push(from)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MENGAKTIFKAN ANTI LINK INSTAGRAM')
                                             aditt.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link IG`, text)
                                      } else if (Number(args[0]) === 0) {
                                             if (!isAntiLinkig) return reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                             antilinkig.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkig.json', JSON.stringify(antilinkig))
                                             reply('SUKSES MEMATIKAN ANTI LINK IG DI GROUP')
                                      } else {
                                             reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antilinktelegram':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                     if (args[0] === '1') {
                                     if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                            antitelegram.push(from)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
                                            aditt.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                     } else if (args[0] === '0') {
                                            antitelegram.splice(from, 1)
                                            fs.writeFileSync('./database/group/antilinktelegram.json', JSON.stringify(antitelegram))
                                            reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
                                     } else {
                                            reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                     }
                                     break
//==================================================================================
case 'antilinkfacebook':
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
                                      if (args[0] === '1') {
                                      if (isAntiLinkfb) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                      antilinkfb.push(from)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK Facebook SUDAH ENABLE!')
                                             aditt.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === '0') {
                                             antilinkfb.splice(from, 1)
                                             fs.writeFileSync('./database/group/antilinkfb.json', JSON.stringify(antilinkfb))
                                             reply('「 *Facebook DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK Facebook SUDAH DISABLE!')
                                      } else {
                                             reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break    
//=======================================================================
case 'leveling':
gopeynya = `https://telegra.ph/file/e07b2f145bc822ea657f8.jpg`
            buff = await getBuffer(gopeynya)
            teksnya =`
  *PILIH LEVELING BUTTON NYA KAK*`
  buttons = [{buttonId: `${prefix}levelink enable`,buttonText:{displayText: `LEVELING ENABLE`},type:1},{buttonId: `${prefix}levelink disable`,buttonText:{displayText: `LEVELING DISABLE`},type:1}]
              imageMsg = (await aditt.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝐃𝐲𝐭𝐳𝐕𝐈𝐏', imageMessage: imageMsg,
              contentText: teksnya,buttons,headerType:4}
              prep = await aditt.prepareMessageFromContent(from,{buttonsMessage},{quoted: floc})
              aditt.relayWAMessage(prep)
      break
case 'levelink':
          if (!isGroup) return reply('Khusus di grup');
          if (!isGroupAdmins && !ditt.key.fromMe) return reply('Khusus admin');
            if ((args[0]) === 'enable') {
               if (isLevelingOn) return reply('Udah aktif')
               _leveling.push(from)
               fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
               reply('Sukses mengaktifkan fitur leveling di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               _leveling.splice(from, 1)
               fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
               reply('Sukses menonaktifkan fitur leveling di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
//=======================================================================
   case 'antiviewonce':
  case 'antivo':
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntiviewonce) return reply(`Udah aktif`)
      antivo.push(from)
      fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
      reply('Antiview Once grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antivo.indexOf(from)
      antivo.splice(anu, 1)
      fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
    case 'antidelete':
    case 'antidel':
    if (!isOwner) return sticOwner(from)
    if (!isGroupAdmins) return sticAdmin(from)
    if (!q) return reply(`Pilih enable atau disable`)
    if (q.toLowerCase() === 'enable') {
      if (isAntidel) return reply(`Udah aktif`)
      antidel.push(from)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('anti delete grup aktif')
    } else if (q.toLowerCase() === 'disable') {
      let anu = antidel.indexOf(from)
      antidel.splice(anu, 1)
      fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))
      reply('antiviewonce grup nonaktif')
    } else {
      testqq(from, `antiviewonce`)
    }
    break
//=======================================================================

//=======================================================================
case 'mypartner':
               list = []
               listmenu = [`rifza`,`ditzvip`]
               listmenuu = [`𝙍𝙞𝙛𝙯𝙖 𝙓𝙈`,`𝘿𝙞𝙩𝙯𝙑𝙄𝙋 𝙓𝙈`]
               nombor = 1
               startnum = 0
               startnumm = 0
               for (let x of listmenu) {
               const yy = {title: 'COMMAND KE' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `Hai Kak ${pushname}
`,`𝗟𝗜𝗦𝗧 𝗣𝗔𝗥𝗧𝗡𝗘𝗥 𝗫𝗠𝗢𝗢𝗗𝗦 - 𝗧𝗘𝗔𝗠 *>//<*`, list, { quoted: freply})
               break
//=======================================================================
case 'rifza':
sendKontak(from, `6287708357324`, `𝙍𝙞𝙛𝙯𝙖 𝙓𝙈`, 'Team 𝙓𝙈 𝘽𝙊𝙏')
await sleep(1000)
break
//=======================================================================
case 'ditzvip':
sendKontak(from, `6287895808192`, `𝘿𝙞𝙩𝙯𝙑𝙄𝙋 𝙓𝙈`, 'Team 𝙓𝙈 𝘽𝙊𝙏')
await sleep(1000)
break
//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================

//=======================================================================





//kasi case di atas⬆️⬆️⬆️










default:
if (budy.includes(`assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
		if (budy.includes(`Assalamualaikum`)) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy.includes(`syalom`)) {
                  reply(`waalaikumsalam`)
                  }
if (budy.includes('kok')) {
por = fs.readFileSync(`./stiker/lohh.webp`)
aditt.sendMessage(from, por, sticker, {quoted: fgif})			
}
if (budy.includes('Kok')) {
por = fs.readFileSync(`./stiker/lohh.webp`)
aditt.sendMessage(from, por, sticker, {quoted: fgif})			
}

//=======================================================================
if (budy.includes('#button === help')) {
       koti = `Button Tidak Muncul Karena Anda Menggunakan WhatsApp Mod, Tapi Tidak Masalah Karena Kami Tahu Solusinya\n\n Caranya :
1. Buka GBWhatsApp Anda [Gambar Diatas]
2. Buka Tampilan Mod nya, terus ketik *layar percakapan* [#lihatgambar2]
3. lalu, matikan tombol *gambar peserta*  [#lihatgambar3]

selesai ^_^`
kisoy = await getBuffer(`https://i.ibb.co/mRb8Nsr/Screenshot-2021-09-27-19-07-14-75.jpg`)
sendButImage(from, koti, `${watermark}`, kisoy, [                      
          {
            buttonId: '#ywyw',
            buttonText: {
              displayText: `DONE`,
            },
            type: 1,
          },
        ]);         
};
//=======================================================================

if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   aditt.sendMessage(from, starGame, text, {quoted: ditt, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		aditt.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: ditt, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  aditt.sendMessage(from, ucapan, text, {quoted: ditt, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
aditt.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:ditt,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
aditt.sendMessage(from, ucapan1, text, {quoted: ditt, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
aditt.sendMessage(from, ucapan, text, {quoted: ditt, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
aditt.sendMessage(from, ucapan1, text, {quoted:ditt, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🎟️👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 aditt.sendMessage(from, ucapan, text, {quoted: ditt, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (!isOwner || ditt.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (isCmd) {
return sendButMessage(from, `Maaf kak @${senderr.split('@')[0]} command ${command} tidak terdaftar dalam menu`, '𝐃𝐲𝐭𝐳𝐕𝐈𝐏', [
{
"buttonId": ".menu",
"buttonText": {
"displayText": "MENU"
},
"type": "RESPONSE"
}
], {quoted:ftroli})
}
}
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'cyan'))
        }
	}
}