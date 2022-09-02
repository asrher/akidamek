const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['34612538080']
global.OwnerNumber = ['34612538080']
global.ownertag = ['34612538080']
global.BotName = "جرجير"
global.packname = "ＢＫ９ 💙"
global.author = "bot"
global.OwnerName = "jiraya"
global.BotSourceCode = "https://chat.whatsapp.com/Ccu4raDkkKI3Ro2dUpqgCo"
global.SupportGroupLink = "https://chat.whatsapp.com/KLPZQqWM8fs6UCwpYCRVNs"
global.sessionName = "session"

// Prefix //
// If you want to change the prefix, change it and also change all switch's button id from Core.js  otherwise buttons will not work //
global.prefa = ['-'] 


global.location = "Night Moon"
global.reactmoji = "❤️"
global.themeemoji = "💖"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "..."
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = [true]
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: 'تم',
    useradmin: 'هذا الامر خاص بالمشرفين.',
    botadmin: 'شسمه، جيب اشراف اول.',
    botowner: 'هذا الامر خاص بالمطور.',
    grouponly: 'هذا الامر خاص بالمجموعات.',
    privateonly: 'هذا الامر للخاص.',
    botonly: 'هذا الامر خاص بالبوت.',
    waiting: 'تتحمل . . .',
    nolink: 'من فضلك زودني * الرابط * ، باكا!',
    error: 'يبدو في خطأ !',
    banned: 'أنت * محضور * من استخدام الأوامر!',
    bangc: 'هذه المجموعة * محضورة * من استخدام الأوامر!',
    nonsfw: '...'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2000,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 10000
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
