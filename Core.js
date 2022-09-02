process.on('uncaughtException', console.error)
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zMiku = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { AnimeWallpaper } = require("anime-wallpaper")
 const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { MikuTiktok } = require('./lib/tiktokmikudl');
const maker = require('mumaker')
const xfarrapi = require('xfarr-api')
const { hentai } = require('./lib/scraper2.js')
let { msgFilter } = require('./lib/antispam')
const { mediafireDl } = require('./lib/mediafire.js')


const _ = require('lodash')
const yargs = require('yargs/yargs')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')

let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));

 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))


global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

let lolkey = global.lolhuman
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))


const time = moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Kolkata').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = Miku = async (Miku, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const prefix = global.prefa
const isCmd = body.startsWith(prefix)
const notCmd = body.startsWith('')
const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Miku.decodeJid(Miku.user.id)
const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const groupMetadata = m.isGroup ? await Miku.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
autoreadsw = true
const content = JSON.stringify(m.message)
const q = args.join(' ')

const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')



// DM chatbot

if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }



_sewa.expiredCheck(Miku, sewa)

const reply = (teks) => {
            Miku.sendMessage(m.chat, { text: teks},{ quoted: m})
        }
        
        const replay = (teks) => {
            Miku.sendMessage(m.chat, { text: teks}, { quoted: m})
        }
        

function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
            }
            
		
if (m.message) {
addBalance(m.sender, randomNomor(574), balance)
console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        if (isCmd && !isUser){
			pendaftar.push(m.sender)
			fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 

            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) 
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 5) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 5) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
   
                        if (m.isGroup && isLeveling && isUser && Miku.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `「 *User Level UP* 」\n\n@${m.sender.split("@")[0]} got leveled up!!\n\n*User XP*: ${getLevelingXp(m.sender)}\n*Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n*Role*: ${role} \n\n`
Miku.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}

                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }
                if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error("❌ An error occured !")
                        }
                }

if (autoreadsw) {
		if (from === 'status@broadcast') {
		Miku.chatRead(from)
	}
	}

if (global.autoreadpmngc) {
if (command) {
await Miku.sendPresenceUpdate('composing', m.chat)
Miku.sendReadReceipt(from, m.sender, [m.key.id])}
}
/*
  if (global.autoReadGc) {
  if (m.isGroup) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
}
*/

  if (global.autoReadAll) { if (m.chat) { Miku.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
  }

    if (global.autoRecord) { if (m.chat) { Miku.sendPresenceUpdate('recording', m.chat) }
}

  if (global.autoTyping) { if (m.chat) { Miku.sendPresenceUpdate('composing', m.chat) }
}

  if (global.available) { if (m.chat) { Miku.sendPresenceUpdate('available', m.chat) }
  }

const hariRaya = new Date('6 1, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`
			
async function hitungmundur(bulan, tanggal) { 
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Day " + hours + "Hour " + minutes + "Minute " + seconds + "Second"
        }
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, 
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text, 
"sellerJid": sellers, 
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
Miku.relayMessage(jid, order.message, { messageId: order.key.id})
}


const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/blood.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/exchange.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/money.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/prey.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
 

        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]

if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/CheemsBot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/CheemsBot${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`
السلام عليكم، انا البوت
الشخص الذي منشنته مختفي  ${reason ? 'بسبب : ' + reason : 'بيرجع قريب'}
ذهب قبل : ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
منور لقد عدت  ${user.afkReason ? ' من ' + user.afkReason : ''}
مدة الغياب : ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}


if (m.mtype === 'groupInviteMessage') {
teks = `السلام عليكم ، مقدر ادخل الا بموافقة مطوري`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./Assets/pic10.jpg'), `${watermark}`, `${BotName}`, "34612538080@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}


if (AntiLink) {
    linkgce = await Miku.groupInviteCode(from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
    reply(`\`\`\`「  مضاد الروابط  」\`\`\`\n\nارسلت رابط هذه المجموعة ، لن يتم الطرد`)
    } else if (isUrl(m.text)) {
    bvl = `\`\`\`「  *مضاد الروابط*  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
    if (isAdmins) return reply(bvl)
    if (m.key.fromMe) return reply(bvl)
    if (isCreator) return reply(bvl)
    kice = m.sender
    await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
    Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
    } else {
    }
    }
 
    if (antiWame)
    if (budy.includes(`wa.me`)) {
  if (!isBotAdmins) return
  bvl = `\`\`\`「 _مضاد الروابط _  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
  if (isAdmins) return reply(bvl)
  if (m.key.fromMe) return reply(bvl)
  if (isCreator) return reply(bvl)
  kice = m.sender
  await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
  Miku.sendMessage(from, {text:`\`\`\`「 مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر ! `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
  } else {
  }
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
Miku.sendMessage(from, {text:`\`\`\`「 مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]}  بااكاا ، مسوي ينشر ! `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
    if (budy.length > 3500) {
    reply(`*اوب !*\n\n`.repeat(300))
    reply(`\`\`\`رسالة لاج`)
    if (!isBotAdmins) return reply(mess.botAdmin)
    Miku.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
    }


    if (AntiLink) {
        if (!isBotAdmins) return
        linkgce = await Miku.groupInviteCode(from)
        if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(`\`\`\`「  مضاد الروابط  」\`\`\`\n\nارسلت رابط هذه المجموعة ، لن يتم الطرد`)
        } else if (isUrl(m.text)) {
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر ! `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        }

        
        if (AntiLinkYoutubeVid)
        if (budy.includes("https://youtu.be/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkYoutubeChannel)
           if (budy.includes("https://youtube.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkInstagram)
           if (budy.includes("https://www.instagram.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر ! `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkFacebook)
           if (budy.includes("https://facebook.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTelegram)
           if (budy.includes("https://t.me/")){
        if (AntiLinkTelegram)
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTiktok)
           if (budy.includes("https://www.tiktok.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkTwitter)
           if (budy.includes("https://twitter.com/")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        
        if (AntiLinkAll)
           if (budy.includes("https://")){
        if (!isBotAdmins) return
        bvl = `\`\`\`「  مضاد الروابط  」\`\`\`\n\nانت مشرف ،لن يتم الطرد`
        if (isAdmins) return reply(bvl)
        if (m.key.fromMe) return reply(bvl)
        if (isCreator) return reply(bvl)
        kice = m.sender
        await Miku.groupParticipantsUpdate(m.chat, [kice], 'remove')
        Miku.sendMessage(from, {text:`\`\`\`「  مضاد الروابط  」\`\`\`\n\n@${kice.split("@")[0]} بااكاا ، مسوي ينشر !`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
        } else {
        }
        

if (m.mtype == 'viewOnceMessage') {
	if (!db.data.chats[m.chat].antionce) return
 teks = `「 *مضاد مرة واحدة* 」
${themeemoji} الاسم : ${m.pushName}
${themeemoji} المستخدم : @${m.sender.split("@")[0]}
${themeemoji} الساعة : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} 
${themeemoji} التاريخ : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}
${themeemoji} الرسالة : ${m.mtype}`
Miku.sendTextWithMentions(m.chat, teks, m)
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => reply(`ربما تم فتحه بواسطة بوت`))
}


if (!Miku.public) {
if (!m.key.fromMe) return
}


setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
    cron.schedule('00 12 * * *', () => {
    let user = Object.keys(global.db.users)
    let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
    for (let jid of user) global.db.users[jid].limit = limitUser
    console.log('Reseted Limit')
    }, {
    scheduled: true,
    timezone: "Asia/Kolkata"
    })

    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
      kuis = true
      jawaban = tebaklagu[m.sender.split('@')[0]]
      if (budy.toLowerCase() == jawaban) {
      await Miku.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Song 🎮\n\nCorrect answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
      delete tebaklagu[m.sender.split('@')[0]]
      } else reply('*خطأ*')
      }

      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
        kuis = true
        jawaban = tebakgambar[m.sender.split('@')[0]]
        if (budy.toLowerCase() == jawaban) {
        await Miku.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
        delete tebakgambar[m.sender.split('@')[0]]
        } else reply('*خطأ*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkata[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkata[m.sender.split('@')[0]]
          } else reply('*خطأ*')
          }
          
          if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = caklontong[m.sender.split('@')[0]]
          deskripsi = caklontong_desk[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `🎮 Guess The Saying 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete caklontong[m.sender.split('@')[0]]
          delete caklontong_desk[m.sender.split('@')[0]]
          } else reply('*خطأ*')
          }
          
          if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebakkalimat[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebakkalimat[m.sender.split('@')[0]]
          } else reply('*خطأ*')
          }
          
          if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaklirik[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaklirik[m.sender.split('@')[0]]
          } else reply('*خطأ*')
          }
          
          if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
          kuis = true
          jawaban = tebaktebakan[m.sender.split('@')[0]]
          if (budy.toLowerCase() == jawaban) {
          await Miku.sendButtonText(m.chat, [{ buttonId: 'riddles', buttonText: { displayText: 'Riddles' }, type: 1 }], `🎮 Riddles 🎮\n\nCorrect Answer 🎉\n\nWant to play again? press the button below`, `${global.BotName}`, m)
          delete tebaktebakan[m.sender.split('@')[0]]
          } else reply('*خطأ*')
          }
          
          
          this.suit = this.suit ? this.suit : {}
          let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
          if (roof) {
          let win = ''
          let tie = false
          if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|oke?|reject|dont want|later|no(pe)?can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
          if (/^(reject|dont want|later|n|no(pe)?can)/i.test(m.text)) {
          Miku.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
          delete this.suit[roof.id]
          return !0
          }
          roof.status = 'play'
          roof.asal = m.chat
          clearTimeout(roof.waktu)
          
          Miku.sendText(m.chat, `Suit has been sent to chat
          @${roof.p.split`@`[0]} dan 
          @${roof.p2.split`@`[0]}

          Please choose a suit in the respective chat"
          Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
          if (!roof.pilih) Miku.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          if (!roof.pilih2) Miku.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
          roof.waktu_milih = setTimeout(() => {
          if (!roof.pilih && !roof.pilih2) Miku.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
          else if (!roof.pilih || !roof.pilih2) {
          win = !roof.pilih ? roof.p2 : roof.p
          Miku.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} don't choose suit, game over`, m)
          }
          delete this.suit[roof.id]
          return !0
          }, roof.timeout)
          }
          let jwb = m.sender == roof.p
          let jwb2 = m.sender == roof.p2
          let g = /scissors/i
          let b = /rock/i
          let k = /paper/i
          let reg = /^(scissors|rock|paper)/i
          if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
          roof.pilih = reg.exec(m.text.toLowerCase())[0]
          roof.text = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih2) Miku.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
          roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
          roof.text2 = m.text
          reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
          if (!roof.pilih) Miku.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
          }
          let stage = roof.pilih
          let stage2 = roof.pilih2
          
          if (roof.pilih && roof.pilih2) {
            clearTimeout(roof.waktu_milih)
            if (b.test(stage) && g.test(stage2)) win = roof.p
            else if (b.test(stage) && k.test(stage2)) win = roof.p2
            else if (g.test(stage) && k.test(stage2)) win = roof.p
            else if (g.test(stage) && b.test(stage2)) win = roof.p2
            else if (k.test(stage) && b.test(stage2)) win = roof.p
            else if (k.test(stage) && g.test(stage2)) win = roof.p2
            else if (stage == stage2) tie = true
            Miku.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}
            @${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
            @${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
            `.trim(), m, { mentions: [roof.p, roof.p2] })
            delete this.suit[roof.id]
            }
            }

            async function cerpen (category) {
              return new Promise((resolve, reject) => {
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
                              author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                              kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                              lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                              cerita: $$('#content > article > p').text()
                          }
                          resolve(hasil)
                      })
                  })
              })
          }

          if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
            await reply(`「 *Math Quiz* 」\n\n 🎉 Correct Answer 🎉\n\nWant to play again? send ${prefix}math mode`)
            delete kuismath[m.sender.split('@')[0]]
            } else reply('*خطأ*')
            }

            if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
              let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
              let { text, mentionedJid } = hash
              let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
              userJid: Miku.user.id,
              quoted: m.quoted && m.quoted.fakeObj
              })
              messages.key.fromMe = areJidsSameUser(m.sender, Miku.user.id)
              messages.key.id = m.key.id
              messages.pushName = m.pushName
              if (m.isGroup) messages.participant = m.sender
              let msg = {
              ...chatUpdate,
              messages: [proto.WebMessageInfo.fromObject(messages)],
              type: 'append'
              }
              Miku.ev.emit('messages.upsert', msg)
              }
          


              const textImg = (teks) => {
                Miku.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./Assets/pic4.jpg')}) 
                }
                
               
             
                const ftoko = {
                key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
                },
                message: {
                "productMessage": {
                "product": {
                "productImage":{
                "mimetype": "image/jpeg",
                "jpegThumbnail": BotLogo
                },
                "title": `${global.OwnerName}`, 
                "description": `${global.BotName}`, 
                "currencyCode": "USD",
                "priceAmount1000": "2000",
                "retailerId": `${global.WaterMark}`,
                "productImageCount": 1
                },
                "businessOwnerJid": `0@s.whatsapp.net`
                }
                }
                }

                const fgi = {
                  key: { 
                        fromMe: false,
                       participant: `0@s.whatsapp.net`, ...(from ? 
                  { remoteJid: "34612538080-1613049930@g.us" } : {}) 
                               },
                  message: { 
                                "videoMessage": { 
                                "title": `Miku`,
                                "h": `Miku`,
                                'duration': '99999', 
                                'gifPlayback': 'true', 
                                'caption': `Fantox`,
                                'jpegThumbnail': fs.readFileSync('./Assets/miku.mp4')
                                       }
                                      }
                                   } 
//FAKEREPLY TROLI
const ftroli = {
  key : {
  participant : '0@s.whatsapp.net'
  },
  message: {
  orderMessage: {
  itemCount : 1,
  status: 1,
  surface : 1,
  message: `${global.OwnerName}`, 
  orderTitle: `${global.BotName}`,
  thumbnail: BotLogo, //Pic
  sellerJid: '0@s.whatsapp.net'
  
  }
  }
  }
  //FAKEREPLY LOCATION
  const flokasi = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  locationMessage: {
  name: `${global.location}`,
  jpegThumbnail: BotLogo
  }
  }
  }
  //FAKEREPLY DOCUMENT
  const fdocs = {
  key : {
   participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: `${global.BotName}`, 
  jpegThumbnail: BotLogo
  }
  }
  }

   //TicTacToe\\
   this.game = this.game ? this.game : {}
   let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
   if (room) {
   let ok
   let isWin = !1
   let isTie = !1
   let issurrender = !1
   //reply(`[DEBUG]\n${parseInt(m.text)}`)
   if (!/^([1-9]|(me)?give up|surr?ender|استسلم|skip)$/i.test(m.text)) return
   issurrender = !/^[1-9]$/.test(m.text)
   if (m.sender !== room.game.currentTurn) { 
   if (!issurrender) return !0
   }
   if (!issurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
   reply({
   '-3': 'اللعبة انتهت',
   '-2': 'خطأ',
   '-1': 'تم اختيار هذا الرقم',
   0: 'تم اختيار هذا الرقم',
   }[ok])
   return !0
   }
   if (m.sender === room.game.winner) isWin = true
   else if (room.game.board === 511) isTie = true
   let arr = room.game.render().map(v => {
   return {
   X: '❌',
   O: '⭕',
   1: '1️⃣',
   2: '2️⃣',
   3: '3️⃣',
   4: '4️⃣',
   5: '5️⃣',
   6: '6️⃣',
   7: '7️⃣',
   8: '8️⃣',
   9: '9️⃣',
   }[v]
   })
   if (issurrender) {
   room.game._currentTurn = m.sender === room.game.playerX
   isWin = true
   }
   let winner = issurrender ? room.game.currentTurn : room.game.winner
   let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} فاز / ت` : isTie ? `انتهت` : `دورك ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

اكتب *استسلم* للاستسلام`
   if ((room.game._currentTurn ^ issurrender ? room.x : room.o) !== m.chat)
   room[room.game._currentTurn ^ issurrender ? 'x' : 'o'] = m.chat
   if (room.x !== room.o) await Miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
   await Miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
   if (isTie || isWin) {
   delete this.game[room.id]
   }
   }
  //FAKEREPLY VIDEO
  const fvideo = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "34612538080-1613049930@g.us" } : {}) 
  },
  message: { 
  "videoMessage": { 
  "title": `${global.BotName}`,
  "h": `${global.OwnerName}`,
  'seconds': '30', 
  'caption': `${global.WaterMark}`,
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GROUPINVITE
  const fgclink = {
  "key": {
  "fromMe": false,
  "participant": "0@s.whatsapp.net",
  "remoteJid": "0@s.whatsapp.net"
  },
  "message": {
  "groupInviteMessage": {
  "groupJid": "34612538080-1616169743@g.us",
  "inviteCode": `${global.OwnerName}`,
  "groupName": `${global.BotName}`, 
  "caption":`${global.WaterMark}`, 
  'jpegThumbnail': BotLogo
  }
  }
  }
  //FAKEREPLY GIF
  const fgif = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "34612538080-1613049930@g.us" } : {}) 
  },
  message: { 
   "videoMessage": { 
   "title":`${global.BotName}`,
   "h": `${global.OwnerName}`,
   'seconds': "30", 
   'gifPlayback': 'true', 
   'caption': `${global.WaterMark}`,
   'jpegThumbnail': BotLogo
  }
  }
  } 
  //FAKEREPLY TEXT WITH THUMBNAIL
  const ftextt = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "34612538080-1613049930@g.us" } : {}) 
  },
  message: { 
  "extendedTextMessage": {
   "text":`${global.OwnerName}`,
  "title": `${global.BotName}`,
   'jpegThumbnail': BotLogo
  }
  } 
  }
  //FAKEREPLY VN
  const fvn = {
  key: { 
  fromMe: false,
  participant: `0@s.whatsapp.net`, ...(from ? 
  { remoteJid: "34612538080-1613049930@g.us" } : {}) 
  },
  message: { 
  "audioMessage": {
  "mimetype":"audio/ogg; codecs=opus",
  "seconds": "9999999999999999",
  "ptt": "true"
  }
  } 
  }
  l = 1
  monospace = '```'
  const timestampe = speed();
  const latensie = speed() - timestampe
  const levelMenu = getLevelingLevel(m.sender)
  const xpMenu = getLevelingXp(m.sender)
  const uangku = getBalance(m.sender, balance)
  const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
  const jumlahUser = pendaftar.length
    if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
    if (!isInventory){ addInventori(m.sender) }
    if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }


    const menulist = `
    السلام عليكم ${pushname} انرت/ي
        
       「 معلومات البوت 」
    
       اسم البوت : ${global.BotName}
       المطور : ${global.OwnerName}
       عدد المستخدمين : ${Object.keys(global.db.users).length}
    
    
       「 معلومات المستخدم 」
    
       لفل : ${levelMenu}
       اكس بي : ${xpMenu} \ ${reqXp}
    دور المستخدم : ${role}
    
    
       「 بنك المستخدم 」
    
       رصيد المستخدم : ${uangku}
       حديد : ${getBesi(m.sender)}
    ذهب : ${getEmas(m.sender)}
    زمرد : ${getEmerald(m.sender)}
    جرعة : ${getPotion(m.sender)}
    
    
    اكتب -اوامر للاستخدام *${global.BotName}*
    
    `
        const qtod = m.quoted? "true":"false"
        
        

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

           

switch(command) {

    case 'اكس_او': {
        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
        reply('وجدنا اللاعب')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
        return {
        X: '❌',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
        }[v]
        })
        let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

دورك @${room.game.currentTurn.split('@')[0]}

 `
        if (room.x !== room.o) await Miku.sendText(room.x, str, m, { mentions: parseMention(str) } )
        await Miku.sendText(room.o, str, m, { mentions: parseMention(str) } )
        } else {
        room = {
        id: 'tictactoe-' + (+new Date),
        x: m.chat,
        o: '',
        game: new TicTacToe(m.sender, 'o'),
        state: 'WAITING'
        }
        if (text) room.name = text
        reply('ننتضر يجي لاعب' + (text ? ` . ${prefix}${command} ${text}` : ''))
        this.game[room.id] = room
        }
        }
        break
        
case 'بروفايل':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await Miku.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "نعم":"لا"
     
     try {
        
        pfp=await Miku.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://i.ibb.co/4WH9MHJ/th.jpg'
    }

     const profilexx = `*「  معلومات البروفايل  」*\n\n*المنشن* : ${pushname}\n*البايو* : ${bioo}\n*مشرف فالقروب؟* : ${adn}\n*لفل* : ${levelMenu}\n*اكس بي* : ${xpMenu} مستمر ل ${reqXp}\n*مستوى* : ${role}`
 


let buttonspro = [
    {buttonId: `-اوامر`, buttonText: {displayText: 'الاوامر'}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${BotName}`,
                buttons: buttonspro,
                headerType: 4
            }
        Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break


            case 'حضر_القروب': case 'bangroup':{
                if (isBan) return reply(mess.banned)	 			
                if (!isCreator) return replay(mess.botowner)
                if (args[0] === "on") {
                if (isBanChat) return replay('هذا القروب محضور مسبقا')
                banchat.push(from)
                replay('تم حضر القروب من استخدام البوت')
                var groupe = await Miku.groupMetadata(from)
                var members = groupe['participants']
                var mems = []
                members.map(async adm => {
                mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                Miku.sendMessage(from, {text: `\`\`\`「 ملاحضة 」\`\`\`\n\nلا يمكن لاحد استخدام اوامر البوت ، كلم جيرايا لرفع الحضر`, contextInfo: { mentionedJid : mems }}, {quoted:m})
                } else if (args[0] === "off") {
                if (!isBanChat) return replay('هذا القروب محضور مسبقا')
                let off = banchat.indexOf(from)
                banchat.splice(off, 1)
                replay('يمكنك استخدام اوامر البوت الان')
                } else {
                  let buttonsntnsfw = [
                  { buttonId: `-bangroup on`, buttonText: { displayText: 'حضر' }, type: 1 },
                  { buttonId: `-bangroup off`, buttonText: { displayText: 'فك الحضر' }, type: 1 }
                  ]
                  await Miku.sendButtonText(m.chat, buttonsntnsfw, `حضر = لا يمكن استخدام البوت\n\n فك الحضر = اشتغال البوت فالقروب`, `${global.BotName }`, m)
                  }
                  }
                  break


case 'قروباتي':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(` يمكنك/ي الدخول لاي قروب يعجبك/ي

*قروب البوت*
https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs

*قروب الانمي مون*
https://chat.whatsapp.com/Ccu4raDkkKI3Ro2dUpqgCo

*قروب الانمي ريڤن*
https://chat.whatsapp.com/BFYbcZxeF2A2FmF3ijtNG3`)
break


case 'مساعدة':
    
    reply(`*ادخل قروب البوت للمساعدة:* https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs`)
    break

case 'رياكشنات':
        if (isBan) return reply(mess.banned)	 			
        if (isBanChat) return reply(mess.bangc)
            reply(` *━━━━━━〈  📍 الـريـاكـشـنـات 📍  〉━━━━━━*\n\nاتفق - كف - عناق - رقص - قتل - ضرب - بكاء - توبيخ`)
        break   



case 'مقطع': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
            if (!args.join(" ")) return reply(`اكتب الاسم بالانجليزي ، مثال : ${prefix}مقطع Ramadan`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		Miku.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break


case 'فلم':
if (isBan) return reply(mess.banned)
	if (isBanChat) return reply(mess.bangc)
if (!q) return reply(`رجاءا اكتب اسم الفلم بالانجليزية\n مثال : ${prefix}فلم Spiderman`)
xfarrapi.Film(q)
    .then(data => {console.log(data)
    let krl = `*Search Term:* ${q}\n\n`
			    for (let i of data) {
                krl += (`-----------------------------------------------------------------------------\n\n\n*الاسم:* ${i.judul}\n *الجودة :* ${i.quality}\n *النوع : ${i.type}*\n *تم التنزيل في :* ${i.upload}\n *الرابط :* ${i.link}\n\n\n`)
                }
               Miku.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break


case 'خلفية': {
if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply("اكتب اسم انمي او شخصية بالانجليزي")
const { AnimeWallpaper } =require("anime-wallpaper")
const wall = new AnimeWallpaper();
const pages = [1,2,3,4];
const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
		
let buttons = [
            {buttonId: `-خلفية ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
        ]
        let buttonMessage = {
            image: {url:wallpaper[i].image},
            caption: `*الاسم:* ${q}`,
            footer: `${BotName}`,
            buttons: buttons,
            headerType: 4
        }
        Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break

    case 'groupsetting1':{
        if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
            let sections = []
            let com = [`group open`,`leveling on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`]
            let comm = [`group close`,`leveling off`,`welcome off`,`antilinkgc off`,`antilinktg off`,`antilinktt off`,`antilinkytch off`,`antilinkytvid off`,`antilinkig on`,`antilinkfb off`,`antilinktwit off`,`antilinkall off`,`antiwame off`]
            let listnya = [`Group open/close`,`Leveling on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`]
            let suruh = [`Enable`, `Disable`]
            let fiturname = [`Group`,`Leveling`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Auto Revoke`,`Auto Reply`]
            let startnum = 0; let startnu = 0; let startn = 0;let start = 0
            let startnumm = 1
            for (let x of com) {
                const yy = {title: `${listnya[startnum++]}`,
            rows: [
               {
                title: `${suruh[0]}`,
                description: `Activate ${fiturname[startnu++]}`,
                rowId: `${prefix}${x}`
              },{
                title: `${suruh[1]}`,
                description: `Deactivate ${fiturname[startn++]}`,
                rowId: `${prefix}${comm[start++]}`
              }
            ]
           }
                sections.push(yy)
            }
            const sendm =  Miku.sendMessage(
from, 
{
text: "Group Settings",
footer: BotName,
title: "Set your group settings here...",
buttonText: "Click Button",
sections
}, { quoted : m }
)  
}
break

       case 'قروبات': {
        if (!isCreator) return replay(mess.botowner)
        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = `مجموع القروبات : ${anu.length} \n\n`
        for (let i of anu) {
            let metadata = await Miku.groupMetadata(i)
            teks += `💫 الاسم : ${metadata.subject}\n💫 مؤسس القروب : @${metadata.owner.split('@')[0]}\n💫 ايدي القروب : ${metadata.id}\n💫 تاريخ التاسيس : ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n💫 الاعضاء : ${metadata.participants.length}\n\n────────────────────────\n\n`
        }
        Miku.sendTextWithMentions(m.chat, teks, m)
    }
    break

case 'coffee': {
        if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
                let buttons = [
                        {buttonId: `-coffee`, buttonText: {displayText: '>>'}, type: 1}
                    ]
                    let buttonMessage = {
                        image: { url: 'https://coffee.alexflipnote.dev/random' },
                        caption: `Here is your Coffee...`,
                        footer: `${BotName}`,
                        buttons: buttons,
                        headerType: 4
                    }
                    Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break

 

case 'دمج': {
	   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!q) reply(`*مثال :* ${prefix + command} 🦉+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await Miku.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break

case 'جيب_امر':
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (m.isGroup) reply(mess.privateonly)
if (!isCreator) return reply(mess.botowner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Core.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replay(`${getCase(q)}`)
break


 case 'ايموجي': {
    if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply('وين الايموجي ؟')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await Miku.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `تمم`}, {quoted:m})
})
}
break

 case 'احذف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('بااكاا وين الرسالة ؟')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await Miku.sendMessage(m.chat, { delete: key })
 }
 break



 case 'listpc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
 let teks = ` 「  Miku's pm user list  」\n\nTotal ${anu.length} users are using Miku in personal chat.`
 for (let i of anu) {
  teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'listgc': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Miku's group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
 for (let i of anu) {
  let metadata = await Miku.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 Miku.sendTextWithMentions(m.chat, teks, m)
 }
 break

 case 'اختفاء': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 replay(`${m.pushName} انه في وضع الاختفاء\nبسبب : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break


 case 'عكس': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (args.length < 1) return replay(`مثال:\n${prefix}عكس جيرايا`)
 quere = args.join(" ")
 flipe = quere.split('').reverse().join('')
 replay(`\`\`\`「  عكس الكلمات  」\`\`\`\n*الاصلي :*\n${quere}\n*المعكوس :*\n${flipe}`)
 }
 break

case 'منشني': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Miku.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break


case 'متصلين':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (isCreator) return reply(bvl)
 if (!m.isGroup) return replay(mess.grouponly)
 let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
 let online = [...Object.keys(store.presences[id]), botNumber]
 let liston = 1
 Miku.sendText(m.chat, '  「 *قائمة المتصلين* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
 
case 'هابي_مود': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return replay(`مثال : ${prefix + command} clash royale`)
 yogipw.happymod(args.join(" ")).then(async(res) => {
 teks = '```「 نتائج البحث 」```'
 for (let i of res) {
 teks += `\n\n${i.name}\n`
 teks += `${i.link}`
 }
 let buttons = [
 {buttonId: `-اوامر`, buttonText: {displayText: '✨الاوامر✨'}, type: 1}
 ]
 let buttonMessage = {
 image: {url:res[0].icon},
 jpegThumbnail: Thumb,
 caption: teks,
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 })
 }
 break

 case 'اسم': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب الاسم')
 await Miku.groupUpdateSubject(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'وصف': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!text) return replay('اكتب الوصف الي بدك احطه')
 await Miku.groupUpdateDescription(m.chat, text).then((res) => replay(mess.jobdone)).catch((err) => replay(jsonformat(err)))
 }
 break

 case 'صورة_قروب': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!quoted) return replay(`رد عالصورة`)
 if (!/image/.test(mime)) return replay(`رد عالصورة`)
 if (/webp/.test(mime)) return replay(`رد عالصورة`)
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 await Miku.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
 replay(mess.jobdone)
 }
 break

 case 'منشن':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 let teks = `
  
 *: ${args.join(" ") ? args.join(" ") : 'اسفين على الازعاج'}*\n\n`
 for (let mem of participants) {
 teks += `» @${mem.id.split('@')[0]}\n`
 }
 Miku.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
 }
 break

 case 'بينج':
  
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
if(q) { var Text =`${q}\n*${groupName}*` } else {  var Text = `*${groupName}*`}

let menText = `${Text}\n*منشن من طرف - ${pushname}*\n\n`
for (let memNum of participants) {
    
    if( groupAdmins.includes(memNum.id) === true ) { var emo = '👑'} else { var emo = '❄️'} 
    menText += `${emo} *@${memNum.id.split('@')[0]}*\n`
    //members_id.push(memNum.jid)
}
Miku.sendMessage(m.chat,{text:menText,mentions: participants.map(a => a.id)},{quoted:m})
break

 case 'مخفي': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 Miku.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break


 case 'رابط': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.isGroup) return replay(mess.grouponly)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!isBotAdmins) return replay(mess.botadmin)
 let response = await Miku.groupInviteCode(m.chat)
 Miku.sendMessage(m.chat, {text:` *${groupMetadata.subject}* \n\n*الرابط :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
 mimetype: "image/jpeg",
 text: `${global.OwnerName}`,
 "forwardingScore": 1000000000,
 isForwarded: true,
 sendEphemeral: true,
 "externalAdReply": {
 "title": `${global.BotName}`,
 "body": `${global.WaterMark}`,
 "previewType": "PHOTO",
 "thumbnailUrl": Thumb,
 "thumbnail": Thumb,
 "sourceUrl": `${global.websitex}`
 }}}, { quoted: m, detectLink: true })
 }
 break


 case 'اعادة': {
       if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
    if (!isBotAdmins) return replay(mess.botadmin)
    if (!isAdmins && !isCreator) return replay(mess.useradmin)
    Miku.groupRevokeInvite(m.chat)
    }
    break


    case 'group': case 'قروب': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     if (args[0] === 'close'){
     await Miku.groupSettingUpdate(m.chat, 'announcement').then((res) => replay(`تم غلق المجموعة`)).catch((err) => replay(jsonformat(err)))
     } else if (args[0] === 'open'){
     await Miku.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replay(`تم فتح المجموعة`)).catch((err) => replay(jsonformat(err)))
     } else {
     let buttons = [
     { buttonId: '-group open', buttonText: { displayText: 'فتح' }, type: 1 },
     { buttonId: '-group close', buttonText: { displayText: 'غلق' }, type: 1 }
     ]
     let buttonMessage = {
     image: BotLogo,
     jpegThumbnail: Thumb,
     caption: `*「 ${global.BotName} 」*\n\nغلق = فقط المشرفون يمكنهم التحدث\n\nفتح = يمكن للكل التحدث`,
     footer: `${BotName}`,
     buttons: buttons,
     headerType: 4
     }
     Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
     }
     }
     break

     case 'ترقية': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'promote')
     }
     break

     case 'تخفيض': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'demote')
     }
     break

     case 'طرد':{
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!m.isGroup) return replay(mess.grouponly)
     if (!isBotAdmins) return replay(mess.botadmin)
     if (!isAdmins && !isCreator) return replay(mess.useradmin)
     let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
     await Miku.groupParticipantsUpdate(m.chat, [users], 'remove')
     }
     break

     case 'دخل': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await Miku.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break


     case 'ادخل': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!isCreator) return replay(mess.botowner)
     if (!args[0]) return replay(`وين الرابط`)
     vdd = args[0]
     let vcc = vdd.split("https://chat.whatsapp.com/")[1]
     if (!vcc) return replay("رابط غير صالح")
     if (isCreator) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("تم")
     } else {
     Miku.query({
     tag: "iq",
     attrs: {
     type: "get",
     xmlns: "w:g2",
     to: "@g.us"
     },
     content: [{ tag: "invite", attrs: { code: vcc } }]
     }).then(async(res) => {
     sizny = res.content[0].attrs.size
     if (sizny < 20) {
     teks = `يجب ان تتوفر المجموعة على 50 عضو للدخول`
     sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "34612538080@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
     } else if (sizny > 50) {
     await Miku.groupAcceptInvite(vcc).then(async(res) => replay(jsonformat(res))).catch(_ => _)
     replay("تم")
     } else {
     replay("خطأ")
     }
     }).catch(_ => _)
     }
     }
     break

  
     case 'صوت': {
        if (isBan) return reply(mess.banned)	 			
     if (isBanChat) return reply(mess.bangc)
     if (!args.join(" ")) return reply(`مثال: ${prefix + command} 10`)
     media = await Miku.downloadAndSaveMediaMessage(quoted, "volume")
     if (isQuotedAudio) {
     rname = getRandom('.mp3')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('خطأ')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else if (isQuotedVideo) {
     rname = getRandom('.mp4')
     exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
     fs.unlinkSync(media)
     if (err) return reply('Error!')
     jadie = fs.readFileSync(rname)
     Miku.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
     fs.unlinkSync(rname)
     })
     } else {
     reply("ارسل فيديو ولا صوتية")
     }
     }
     break


case 'احسب':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (args.length < 1) return reply(`*مثال :*\n${prefix}احسب 2*5\n\n`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
reply('خطأ')
} else {
reply(`\`\`\`「 نتائج الحساب 」\`\`\`\n\n*العملية :* ${qsd}\n*الجواب :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break

case 'عام': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.owner)
 Miku.public = true
 reply('تم')
 Miku.setStatus(`Mode : Public`)
 }
 break
 
 case 'خاص': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isCreator) return reply(mess.botowner)
 Miku.public = false
 reply('البوت نايم 😴')
 Miku.setStatus(`Mode : Self`)
 }
 break


case 'لصورة': {
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!m.quoted) return reply('رد عملصق')
if (!/webp/.test(mime)) return reply(`رد عملصق`)
let media = await Miku.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Miku.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break

case 'لفيديو': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('رد عملصق')
 if (!/webp/.test(mime)) return reply(`رد عملصق`)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break

case 'لصوتية': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`رد على فيديو`)
 if (!m.quoted) return reply(`رد على فيديو`)
 let media = await quoted.download()
 let { toAudio } = require('./lib/converter')
 let audio = await toAudio(media, 'mp4')
 Miku.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
 }
break


case 'غيف':{
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!m.quoted) return reply('رد عملصق')
 if (!/webp/.test(mime)) return reply(`رد عملصق`)
 reply(mess.wait)
 let { webp2mp4File } = require('./lib/uploader')
 let media = await Miku.downloadAndSaveMediaMessage(quoted)
 let webpToMp4 = await webp2mp4File(media)
 await Miku.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'تمم' }, gifPlayback: true }, { quoted: m })
 await fs.unlinkSync(media)
 }
 break


 case 'المطور':{
    Miku.sendContact(m.chat, global.Owner, m)
    }
    break


case 'صورة':{
   if (isBan) return reply(mess.banned)	 			
if (isBanChat) return reply(mess.bangc)
if (!args[0]) return reply("عن اي صورة تريد ان ابحث")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `-صورة ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `
الاسم : ${text}`,
footer: `${global.BotName}`,
buttons: buttons,
headerType: 4,

}
Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break

 //FAKEREPLY GROUPINVITE
case 'هل':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
					const apa = ['نعم','لا','شرايك انت ؟','اذلف مدري 🗿','هو شوف على حسب 🐧','يمكن','مدري صراحة','اتوقعععع يب 🐧🤣']
					const kah = apa[Math.floor(Math.random() * apa.length)]
Miku.sendMessage(from, { text: `السؤال : هل ${q}\nالجواب  : ${kah}` }, { quoted: m })

					break

case 'اقدر':
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
					const bisa = ['اجل يمكنك ذالك', 'لا كنسل', ' ما في مستحيل','اذا واثق من نفسك يب','ممممم حسب الوضع']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
Miku.sendMessage(from, { text: `السؤال :اقدر ${q}\nالجواب : ${ga}` }, { quoted: m })

					break
case 'تشبيك':
    if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`منشن شخصين`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100','1000 🤯']
					const te = ra[Math.floor(Math.random() * ra.length)]
Miku.sendMessage(from, { text: `تشبيك : ${q}\n نسبة الحب : *${te}%*` }, { quoted: m })

					break

                    case 'رياضيات': {
                        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`لا تزال هناك جلسات غير منتهية!`)
                        let { genMath, modes } = require('./lib/math')
                        if (!text) return replay(`المستويات: ${Object.keys(modes).join(' | ')}\nمثال: ${prefix}.رياضيات متوسط`)
                        let result = await genMath(text.toLowerCase())
                        Miku.sendText(m.chat, `*كم تساوي : ${result.soal.toLowerCase()}*\n\nالوقت: ${(result.waktu / 1000).toFixed(2)} ثانية`, m).then(() => {
                            kuismath[m.sender.split('@')[0]] = result.jawaban
                        })
                        await sleep(result.waktu)
                        if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                            console.log("الجواب: " + result.jawaban)
                            reply("انتهى الوقت\nالجواب: " + kuismath[m.sender.split('@')[0]])
                            delete kuismath[m.sender.split('@')[0]]
                        }
                    }
                    break
    //FAKEREPLY GROUPINVITE


case 'تطقيم': {
if (isBan) return reply(mess.banned)
if (isBanChat) return reply(mess.bangc)
         let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
         let random = anu[Math.floor(Math.random() * anu.length)]
         Miku.sendMessage(m.chat, { image: { url: random.male }, caption: `للولد` }, { quoted: m })
         Miku.sendMessage(m.chat, { image: { url: random.female }, caption: `للبنت` }, { quoted: m })
     }
 break


case 'بنتر': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (!args.join(" ")) return reply("اكتب اسم")
 try {
 hx.pinterest(args.join(" ")).then(async(res) => {
 imgnyee = res[Math.floor(Math.random() * res.length)]
 let buttons = [
 {buttonId: `-بنتر ${args.join(" ")}`, buttonText: {displayText: 'التالي'}, type: 1}
 ]
 let buttonMessage = {
 image: { url: imgnyee },
 caption:  `الاسم : ` + args.join(" "),
 footer: `${global.BotName}`,
 buttons: buttons,
 headerType: 4,
 
 }
 Miku.sendMessage(m.chat, buttonMessage, { quoted: m })
 }).catch(_ => _)
 } catch {
 reply("خطأ")
 }
 }
 break



case 'ملصقي':{
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
if (!args.join(" ")) return reply(`مثال : ملصقي جيرايا`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
Miku.downloadAndSaveMediaMessage(quoted, "gifee")
Miku.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('الحد الاقصى 9 ثواني')
let media = await quoted.download()
let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`رد على صورة او فيديو لا يتعدى 9 ثواني`)
}
}
break

case 'ملصق': {
    if (isBan) return reply(mess.banned)
    if (isBanChat) return reply(mess.bangc)
 if (/image/.test(mime)) {
 let media = await quoted.download()
 let encmedia = await Miku.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
 if ((quoted.msg || quoted).seconds > 11) return reply('الحد الاقصى 9 ثواني')
 let media = await quoted.download()
 let encmedia = await Miku.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
 await fs.unlinkSync(encmedia)
 } else {
 reply(`رد على صورة او فيديو لا يتعدى 9 ثواني`)
 }
 }
 break


 case 'وظيفتي':
    if (isBan) return reply(mess.ban)	 			
    if (isBanChat) return reply(mess.banChat)
                        const gimana = [`طباخ`, `شرطي`, `مربي`, `فأر تجارب`,`حارس`,`باطل`,`شحاذ`,`معلم`,`استاذ`,`طبيب اسنان`,`رائد فضاء`,`فلكي`,`طبيب`,`مهندس`,`مؤذن`]
                        const ya = gimana[Math.floor(Math.random() * gimana.length)]
    Miku.sendMessage(from, { text: `وظيفتك هي ${ya}` }, { quoted: m })
    
                        break

case 'akida1': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://pastebin.com/raw/w1an0pEd')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await Miku.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break

case 'akida6':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = `Here you go!`
buffer = `https://pastebin.com/raw/w1an0pEd`
Miku.sendMessage(from, {image:{url}, caption:"Here you go!"}, {quoted:m})
break

case 'اوامر': {
    if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
listMessage :{
 title: `منور / ة ${pushname}`,
 description: `📚 كل الاوامر مصنفة حسب خدمتها 📚\n\n`,
 buttonText: "الاوامر",
 listType: "SINGLE_SELECT",
 sections: [
         {
             "title": "قائمة الاوامر",
             "rows": [
                 {
                     "title": "❄️ قـائـمـة الـمـشـرفـيـن ❄️",
                     "rowId": `${prefix}قائمة_المشرفين`
                 },
                 {
                     "title": "❄️ قـائـمـة الـتـحـويـل ❄️",
                     "rowId": `${prefix}قائمة_تحويل`
                     },
                 {
                     "title": "❄️ قـائـمـة الـمـتـعـة ❄️",
                     "rowId": `${prefix}قائمة_المتعة`
                     },
                     {
                     "title": "❄️ قـائـمـة الالـعـاب ❄️",
                     "rowId": `${prefix}قائمة_الالعاب`
                 },
                 {
                     "title": "❄️ قـائـمـة الانـمـي ❄️",
                     "rowId": `${prefix}قائمة_الانمي`
                 },
                 {
                    "title": "❄️ كـل الاوامـر ❄️",
                    "rowId": `${prefix}الاوامر`
                },
             ]
         },

     ],
listType: 1
}
}), {})
Miku.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

case 'اتفق':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/highfive`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يتفق مع @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'كف':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يعطي كف ل @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'عناق':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يعانق @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


case 'رقص':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} يرقص واحدا`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يرقص مع @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'قتل':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص`
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يقتل  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

//FAKEREPLY TEXT WITH THUMBNAIL

case 'ضرب':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يضرب  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'بكاء':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يبكي بسبب  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break

case 'توبيخ':{

    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)	
	var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)
	try {
		let messsender = m.sender
let musers=``
try {
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

 ment=[messsender,users]
} catch {
	users == "none"
	 ment=[messsender,m.sender]
}
if(users == "none"){
     musers =`@${m.sender.split("@")[0]} منشن شخص `
     console.log(musers)

} else {
const rcpp =`@${users.split("@"[0])}`
 musers= `@${m.sender.split("@")[0]} يوبخ  @${users.split("@")[0]} `

console.log(musers)
}
        const response = await axios.get(pat.url,  { responseType: 'arraybuffer' })
        const buffer = Buffer.from(response.data, "utf-8")
		var fetchedgif = await GIFBufferToVideoBuffer(buffer)
		Miku.sendMessage(m.chat,{video: fetchedgif, gifPlayback:true,mentions:ment,caption:musers},{quoted:m})
    } catch (error) {
        console.log(error);
    }
}
break


//FAKEREPLY TEXT WITH THUMBNAIL

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



case 'ليريكس': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
if (!text) return reply(`اكتب اسم اغنية`)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
reply(`
*العنوان :* ${result.title}
*كاتب الاغنية :* ${result.author}
*الرابط :* ${result.link}

*ليريكس :* ${result.lyrics}

`.trim())
}
break


case 'اطلع': {
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
                    if (!isCreator) return replay(`${mess.botowner}`)
                    await Miku.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
                break

case 'الاوامر':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

🔰 استخدم :  -  للاوامر


⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄

⧉ -منشن
⧉ منشن جماعي لكل الاعضاء

⧉ -بينج
⧉ منشن جماعي مختلف
 
⧉ -مخفي
⧉ منشن مخفي لكل الاعضاء 
 
⧉ -احذف
⧉ حذف رسالة عضو و البوت 
 
⧉ -رابط
⧉ جلب رابط القروب 

⧉ -اعادة
⧉ حذف رابط القروب 
 
⧉ -ترقية
⧉ ترقية عضو لمشرف 
 
⧉ -تخفيض
⧉ تخفيض مشرف لعضو 

⧉ -اسم
⧉ تغيير اسم القروب 
 
⧉ -وصف
⧉ تغيير وصف القروب 

⧉ -صورة_قروب
⧉ تغيير صورة قروب 

⧉ -قروب
⧉ غلق وفتح قروب 
 
⧉ -طرد
⧉ طرد شخص من القروب 
 
⧉ -دخل
⧉ ادخال شخص للقروب 

⧉ -اطلع
⧉ خروج البوت 


⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄

⧉ -مـلـصـق
⧉ انشاء ملصقات عادية ومتحركة 
 
⧉ -ملصقي
⧉ انشاء ملصق بحقوقك 
⧉ مـلاحـظـه ، احيانا لايعمل الامر 
 
⧉ -ايموجي
⧉ تحويل ايموجي لصورة 
 
⧉ -دمج
⧉ دمج اثنين من الاموجي 

⧉ -صوت
⧉ رفع وتخفيض مستوى صوت 
 
⧉ -لصورة
⧉ تحويل ملصق عادي لصورة 
 
⧉ -لفيديو
⧉ تحويل ملصق متحرك لفيديو 
 
⧉ -لصوتية
⧉ تحويل فيديو لصوتية 
 
⧉ -غيف
⧉ تحويل ملصق لغيف 
 

⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄

⧉ -هل
⧉ سؤال للبوت
⧉ مثال : هل انا محنك؟ 
 
⧉ -اقدر
⧉ سؤال للبوت 
⧉ مثال :  اقدر اصير مشرف؟ 
 
⧉ -تشبيك
⧉ منشن ثنين وشف نسبة الحب بينهم (مزح) 
 
⧉ -وظيفتي
⧉ اعرف وظيفتك مستقبلا 

⧉ -منشني
⧉ البوت يمنشنك 
 

⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄

⧉ -اكس_او
⧉ العب مع صديقك اكس او 
 
⧉ -رياضيات
⧉ حل عمليات حسابية 
 
⧉ -احسب
⧉ البوت يحل عملية حسابية 
 
⧉ -عكس
⧉ عكس كلمة او جملة 

⧉ -احزر
⧉ لا تتوفر بعد 
 
⧉ -كت
⧉ لا تتوفر بعد 


⋄═──═◞🔍 قائمة البحث 🔎◟━──━⋄

⧉ -مقطع
⧉ البحث عن مقطع أغنية 
 
⧉ -فلم
⧉ البحث عن معلومات فلم 
 
⧉ -خلفية
⧉ البحث عن خلفية انمي 
 
⧉ -صورة
⧉ البحث عن صور عشوائية 
⧉ اكتب اسم بالانجليزي عشان ميجيب العيد 

⧉ -تطقيم
⧉ جلب تطقيمات 
 
⧉ -بنتر
⧉ بحث عن صور بنتريست 
 
⧉ -ليريكس
⧉ جلب كتابة اي اغنية 
 

⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄

⧉ -بروفايل
⧉ معرفة معلوماتك 
 
⧉ -اختفاء
⧉ اترك سبب ذاهبك 
 
⧉ -قروباتي
⧉ روابط قروبات الانمي 
 
⧉ -مساعدة
⧉ رابط قروب البوت للمساعدة 

⧉ -المطور
⧉ معرفة مطور البوت 
 

⋄═──═◞🤖 بوت جيرايا 🤖◟━──━⋄

 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

 case 'قائمة_المشرفين':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄

⧉ -منشن
⧉ منشن جماعي لكل الاعضاء 
 
⧉ -مخفي
⧉ منشن مخفي لكل الاعضاء 
 
⧉ -احذف
⧉ حذف رسالة عضو و البوت 
 
⧉ -رابط
⧉ جلب رابط القروب 

⧉ -اعادة
⧉ حذف رابط القروب 
 
⧉ -ترقية
⧉ ترقية عضو لمشرف 
 
⧉ -تخفيض
⧉ تخفيض مشرف لعضو 

⧉ -اسم
⧉ تغيير اسم القروب 
 
⧉ -وصف
⧉ تغيير وصف القروب 

⧉ -صورة_قروب
⧉ تغيير صورة قروب 

⧉ -قروب
⧉ غلق وفتح قروب 
 
⧉ -طرد
⧉ طرد شخص من القروب 
 
⧉ -دخل
⧉ ادخال شخص للقروب 

⧉ -اطلع
⧉ خروج البوت 
 
⋄═──═◞🛡️ قائمة المشرفين 🛡️◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_تحويل':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄

 ⧉ -مـلـصـق
 ⧉ انشاء ملصقات عادية ومتحركة 
  
 ⧉ -ملصقي
 ⧉ انشاء ملصق بحقوقك 
 ⧉ مـلاحـظـه ، احيانا لايعمل الامر 
  
 ⧉ -ايموجي
 ⧉ تحويل ايموجي لصورة 
  
 ⧉ -دمج
 ⧉ دمج اثنين من الاموجي 
 
 ⧉ -صوت
 ⧉ رفع وتخفيض مستوى صوت 
  
 ⧉ -لصورة
 ⧉ تحويل ملصق عادي لصورة 
  
 ⧉ -لفيديو
 ⧉ تحويل ملصق متحرك لفيديو 
  
 ⧉ -لصوتية
 ⧉ تحويل فيديو لصوتية 
  
 ⧉ -غيف
 ⧉ تحويل ملصق لغيف 
  
 ⋄═──═◞🎆 قائمة التحويل 🎆◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_المتعة':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

 🔰 الاوامر كلها مزح نرجو عدم التقلق

 ⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄
 ⧉ -هل
 ⧉ سؤال للبوت
 ⧉ مثال : هل انا محنك؟ 
  
 ⧉ -اقدر
 ⧉ سؤال للبوت 
 ⧉ مثال :  اقدر اصير مشرف؟ 
  
 ⧉ -تشبيك
 ⧉ منشن ثنين وشف نسبة الحب بينهم (مزح)
 
 ⧉ -رياكشنات
 ⧉ منشن شخص
  
 ⧉ -وظيفتي
 ⧉ اعرف وظيفتك مستقبلا 
 
 ⧉ -منشني
 ⧉ البوت يمنشنك 
  
 ⋄═──═◞☃️ قائمة المتعة ☃️◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

 case 'قائمة_الالعاب':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄

 ⧉ -اكس_او
 ⧉ العب مع صديقك اكس او 
  
 ⧉ -رياضيات
 ⧉ حل عمليات حسابية 
  
 ⧉ -احسب
 ⧉ البوت يحل عملية حسابية 
  
 ⧉ -عكس
 ⧉ عكس كلمة او جملة 
 
 ⧉ -احزر
 ⧉ لا تتوفر بعد 
  
 ⧉ -كت
 ⧉ لا تتوفر بعد 
  
 ⋄═──═◞🎮 قائمة الالعاب 🎮◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_الانمي':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,

 🔰 ملاحضة : 
 مقطع ، فلم ، خلفية - هذه الاوامر اكتب الاسم بالانجليزي
 مثال : -خلفية jiraya  ، -فلم spiderman  ، -مقطع ost Naruto

 ⋄═──═◞🌀 قائمة الانمي 🌀◟━──━⋄

 ⧉ -مقطع
 ⧉ البحث عن مقطع أغنية 
  
 ⧉ -فلم
 ⧉ البحث عن معلومات فلم 
  
 ⧉ -خلفية
 ⧉ البحث عن خلفية انمي 
  
 ⧉ -صورة
 ⧉ البحث عن صور عشوائية 
 ⧉ اكتب اسم بالانجليزي عشان ميجيب العيد 
 
 ⧉ -تطقيم
 ⧉ جلب تطقيمات 
  
 ⧉ -بنتر
 ⧉ بحث عن صور بنتريست 
  
 ⧉ -ليريكس
 ⧉ جلب كتابة اي اغنية 
  
 
 ⋄═──═◞🌀 قائمة الانمي 🌀◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break

case 'قائمة_العضو':{
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
      
 const helpmenu = `السلام عليكم *${pushname}* انرت/ي,


 ⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄

 ⧉ -بروفايل
 ⧉ معرفة معلوماتك 
  
 ⧉ -اختفاء
 ⧉ اترك سبب ذاهبك 
  
 ⧉ -قروباتي
 ⧉ روابط قروبات الانمي 
  
 ⧉ -مساعدة
 ⧉ رابط قروب البوت للمساعدة 
 
 ⧉ -المطور
 ⧉ معرفة مطور البوت 
  
 
 ⋄═──═◞🔰 قائمة العضو 🔰◟━──━⋄


 🔰 اذا هناك أخطاء فالاوامر كلم  -المطور`
     
 let buttonshelpm = [
    {buttonId: `-المطور`, buttonText: {displayText: '🤖 مطور البوت 🤖'}, type: 1}
    ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:helpmenu},{quoted:m}),
                    caption: helpmenu,
                    footer: `${BotName}`,
                    buttons: buttonshelpm,
                    headerType: 4
                }
            Miku.sendMessage(m.chat, buttonMessage,{ quoted:m })
                }
break



case '': case 'help': case 'menu':
    if(isCmd){
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)

      mikupic ='https://i.ibb.co/4WH9MHJ/th.jpg'
    
        
      const needhelpmenu = `السلام عليكم ${pushname} تريد الاوامر ؟ اذا لديك واتساب عادي اكتب -الاوامر  ،  واذا عندك واتساب بلس او معدل اكتب -اوامر  للحصول على الاوامر وشرحها`
     
         let butRun = [
                {buttonId: `-اوامر`, buttonText: {displayText: 'اوامر'}, type: 1}
                ]
                let buttonMessage = {
                    file: Miku.sendMessage(m.chat,{video:fs.readFileSync('./system/miku.mp4'),gifPlayback:true,caption:needhelpmenu},{quoted:m}),
                    caption: needhelpmenu,
                    footer: `${global.BotName}`,
                    buttons: butRun,
                    headerType: 4
                }
            Miku.sendMessage(m.chat,buttonMessage,{quoted:m})
                }
break




default:

/*
    if (!isCmd && !isGroup){
        const botreply = await axios.get(`http://api.brainshop.ai/get?bid=165801&key=1ftAuFL7Fhj21Fyp&uid=[uid]&msg=${budy}]`)
       txt = `${botreply.data.cnt}`
       m.reply(txt)



await axios.get(`http://api.brainshop.ai/get?bid=165801&key=1ftAuFL7Fhj21Fyp&uid=[uid]&msg=${budy}]`)
.then((response) => {
        txt = `${response.data.cnt}`

       m.reply(txt);http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[msg]
  }

*/

  if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168758&key=Ci7eNhtxpxxDB5FQ&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }



    
if (budy.startsWith('=>')) {
if (!isCreator) return reply(mess.botowner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
Miku.sendMessage(from, {image:ErrorPic, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return reply(mess.botowner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
await Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
}
}


                
if (budy.startsWith('$')) {
if (!isCreator) return replay(mess.botowner)
exec(budy.slice(2), (err, stdout) => {
if(err) return Miku.sendMessage(from, {image:ErrorPic, caption:String(err)}, {quoted:m})
if (stdout) return replay(stdout)
})
}


if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
Miku.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
}catch (err) {
Miku.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
