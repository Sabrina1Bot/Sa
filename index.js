/*============≠≠==========≠≠=============\\


NÃO PASSE O BOT PARA NINGUÉM, MUITOS VÃO FINGIR SER AMIGO. 

MUITOS DESEJAM COMPRAR PARA REVENDER E DIZER QUE FEZ.. 

EU ALEATORY NÃO FIZ TUDO, ASSUMO ISSO, PRECISEI DE AJUDA

PRA ISSO TENHO AMIGOS, PRA EVOLUIR JUNTO, ENTÃO.. 

NÃO JOGUE O ESFORÇO QUE TIVE, APESAR DE NÃO SER TANTO A 

VISTA DE QUEM JÁ CONHECE O BASTANTE DA ÁREA.. 


//=======================================*/

const { default: makeWASocket, downloadContentFromMessage, useSingleFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage,	MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, fetchLatestBaileysVersion
} = require('@adiwajshing/baileys');

//_-_-_-_-_-_-_-_-_-_-MODULOS/FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-\\

const { hx, fs, Boom, axios, chalk, yts, crypto, util, P, encodeUrl, linkfy, request, cheerio, ms, ffmpeg, imgbb, googleImage, googleIt, fetch, imageToBase64, webp2gifFile, webp_mp4, EmojiAPI, qrterminal, emoji, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, getBase64, createExif, insert, response, addLimit, getLimit, mediafireDl, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, isFiltered, addFilter, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanime, quizanimais, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, bayarLimit, limitAdd, addATM, addKoinUser, checkATMuser, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser, confirmATM, runtime, getpc, supre, WinnerX, WinnerO, Tie, IA, IAmove1, IAalter, priorityC, addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints, wait, getExtension, h2k, generateMessageID, getGroupAdmins, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, cmdadd, addMetadata, chyt, ttthelp, tttme, tttset, esp, kyun, simih } = require('./consts-func.js')

//-_-_-_-_--_-_-_-_-_--_-JSON-FUNÇÕES-_-_-_-_-_-_-_-_-_-_-_-_\\

const { adeuscara, welcome_group, welcome_group2, bye_group, bye_group2, voting, sotoy, addVote, delVote, countMessage, comandos, welkom2, modobn, nsfw, daily, nescessario, welkom, premium, limitefll, antiflood, samih, samih2, _leveling, _level, bancht, anticall, ban, afk, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, antilink, antifake, antilinkhard, autofigu, antilinkgp, antiporn, antiimg, antisticker, antinotas, antictt, anticatalogo, antidoc, antiloc, antipv, antivid, antiaudio, palavra, palavrao, store, state, saveState } = require('./consts-func.js')

//-_-_-_-_-_-_-_-_-_-_-JS-MENUS/INFORMAÇÕES-_-_-_-_-_-_-_-_-_-_\\

const { menu, menudono, adms, menulogos, efeitos, menuprem, brincadeiras ,infovotacao, infocontador, infobemvindo, infolistanegra, infopalavrao, infobancarac, infodono, gitdobot, configbot, hospedar, cmd_termux, alteradores, destrava, destrava2, tabela, conselhob, palavras } = require('./consts-func.js')

//_-_-_-_-_-_-_-_-_-_-_-_-(INFOS)_-_-_-_-_-_-_-_-_-_-_-_-_-_-_--\\

const { forwarding, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, beijocmd, chutecmd, tapacmd } = require("./dono/nescessario.json")


//====================≠≠===============\\
 
cdd = nescessario.cdd
 
crtt = nescessario.crtt
 
fundo1 = nescessario.fundo1

fundo2 = nescessario.fundo2
 
dono2 = nescessario.dono2

dono3 = nescessario.dono3
 
dono4 = nescessario.dono4

dono5 = nescessario.dono5
 
NomeDoBot = setting.NomeDoBot

NickDono = setting.NickDono

numerodono = setting.numerodono 

prefix = setting.prefix 

banChats = nescessario.banChats 

logo = logoslink.logo

limitefl = limitefll.limitefl

numbernye = '0'

blocked = [] 

hitt = []

keyale = "key-marcio/gostosa-scheyot-ofc-2.0"

//=====================================\\

try { 
  
const startAle = async() => {
// ABAIXO: INÍCIO DE CONEXÃO

const conn = makeWASocket({
logger: P({ level: 'fatal' }),
printQRInTerminal: true,
auth: state
})

store.bind(conn.ev)




const { Aki } = require('aki-api')

const region = 'pt'

jogo = {
jogador: '',
now: true
}

//===============(BEM VINDO)=============\\


conn.ev.on('group-participants.update', async (ale) => {
  
const groupMetadata = await conn.groupMetadata(ale.id) 
  
const mdata = await conn.groupMetadata(ale.id)  


// CONST DO CMD DE BANIR QUEM ESTIVER NA LISTA N

const dbackid = []
for(i=0;i<adeuscara.length;++i) dbackid.push(adeuscara[i].groupId)
console.log(ale)
if(dbackid.indexOf(ale.id) >= 0) {
if (ale.action == 'add'){ 
num = ale.participants[0]
var ind = dbackid.indexOf(ale.id)
if(adeuscara[ind].actived && adeuscara[ind].number.indexOf(num.split('@')[0]) >= 0) {
await conn.sendMessage(mdata.id,{text: '*Olha quem apareceu no nosso Reino🤬 TOMA UM BAN SEU CABAÇO😡😡*'})
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
kael = fs.readFileSync("./audios/banido.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
}
return
}
}

// FIM LISTANEGRA CONST ^





// ANTIFAKE QUE ESTÁ JUNTO COM BEM VINDO 

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && !ale.participants[0].startsWith(55)){
num = ale.participants[0]
conn.sendMessage(mdata.id, {text: '🤬SAI FORA GRINGO FDP🤬'})
await delay(1000)
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

if(antifake.includes(ale.id)) {
if (ale.action === 'add' && ale.participants[0].startsWith(55800)){
num = ale.participants[0]
conn.sendMessage(mdata.id, {text: '😡METE O PÉ GRINGO FDP😡'})
await delay(1000)
conn.groupParticipantsUpdate(mdata.id, [ale.participants[0]], 'remove')
}
}

// FIM ANTIFAKE ^

// BEM VINDO COMPLETO 


if(welkom.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {
  
// PEGAR DESCRIÇÃO DO GRUPO. 

const groupDesc = await groupMetadata.desc  
  
try {
ppimg = await conn.profilePictureUrl(ale.participants[0])
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}

try {
ppgp = await conn.profilePictureUrl(mdata.id)
} catch {
ppgp = 'https://image.flaticon.com/icons/png/512/124/124034.png'
}

shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgp}`)

const groupIdWelcomed = []
const groupIdBye = []
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)
for(let obj of bye_group) groupIdBye.push(obj.id)


const isByed = groupIdBye.indexOf(ale.id) >= 0 ? true : false

const isWelcomed = (groupIdWelcomed.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(ale.id)
teks = welcome_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}
let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
await fs.writeFileSync(ran, buff)

fs.unlinkSync(ran)
imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=BEM%20VINDO(A)&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, {image: imgbuff, 
mentions: ale.participants, caption: teks})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

try {
ppimg = await conn.profilePictureUrl(`${mem.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}


if(isByed) {
var ind = groupIdBye.indexOf(ale.id)
teks = bye_group[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)

imgbuff = await getBuffer(`https://aleatoryapi.herokuapp.com/welcome?titulo=Adeus&nome=${ale.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=SAIU DE ${encodeUrl(mdata.subject)}`)
conn.sendMessage(mdata.id, {image: imgbuff, caption: teks, 
mentions: ale.participants})
 fs.unlinkSync(ran)

}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas não precisa definir,
qualquer dúvida dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite : 
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
})
// FIM ^


// BEM VINDO 2 ( SEM FOTO )

conn.ev.on('creds.update', saveState);
conn.ev.on('group-participants.update', async (ale) => {
 

if(welkom2.includes(ale.id)) {
if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
try {

const groupMetadata = await conn.groupMetadata(ale.id) 
  
const mdata = await conn.groupMetadata(ale.id)  

// PEGAR DESCRIÇÃO DO GRUPO

const groupDesc = await groupMetadata.desc

const groupIdWelcomed2 = []
const groupIdBye2 = []
for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)
for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isByed2 = groupIdBye2.indexOf(ale.id) >= 0 ? true : false

const isWelcomed2 = (groupIdWelcomed2.indexOf(ale.id) >= 0) ? true : false

if(ale.action === 'add') {
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(ale.id)
teks = welcome_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', '@'+ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome(ale.participants[0].split('@')[0], mdata.subject)
}

conn.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})

} else if(ale.action === 'remove') {
mem = ale.participants[0]

if(isByed2) {
var ind = groupIdBye2.indexOf(ale.id)
teks = bye_group2[ind].msg
.replace('#hora#', time)
.replace('#nomedogp#', mdata.subject)
.replace('#numerodele#', ale.participants[0].split('@')[0])
.replace('#numerobot#', conn.user.id)
.replace('#prefixo#', prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye(ale.participants[0].split('@')[0])
}

conn.sendMessage(mdata.id, {text: teks}, {mentions: ale.participants})
 fs.unlinkSync(ran)
}
} catch (e) {
if(String(e).includes("bye is not defined")) {
console.log(color(
`Mensagem de saiu do bem vindo não definida, mas
não precisa definir, qualquer dúvida digita :
${prefix}infobemvindo no WhatsApp..`, "yellow"))
} else if(String(e).includes("welcome is not defined")) {
console.log(color(
`Mensagem do bem vindo não definida, qualquer dúvida digite :
${prefix}infobemvindo no WhatsApp..`, "red"))
} else {
console.log(e);
}
}
}
})
// FIM BEM VINDO (2)

conn.ev.on('messages.upsert', async ({ messages }) => {
try {
const info = messages ? messages[0]: messages[1]
if (!info.message) return 
saveState()
if (info.message.protocolMessage) return 
if(info.message > 1000) return
//await conn.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (info.key && info.key.remoteJid == 'status@broadcast') return

const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]

global.prefix

global.blocked

const content = JSON.stringify(info.message)
const speed = require('performance-now');
const from = info.key.remoteJid
const isGroup = from.endsWith('@g.us')

//==============(BODY)================\\
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''

const args = body.trim().split(/ +/).slice(1)

const q = args.join(' ')


const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null

//================(BADY)================\\
 
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''

//=======================================\\


//===============(BUDY)==================\\

var budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

//======================================\\

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//===========(ID DAS FIGUS)===========\\

const figura = Object.keys(info.message)[0] == "stickerMessage" ? info.message.stickerMessage.fileSha256.toString('base64') : ""

//=====================================\\

const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ''

const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()

const arg = body.substring(body.indexOf(' ') + 1)

const botNumber = conn.user.id.split(':')[0]+'@s.whatsapp.net'
const argss = body.split(/ +/g)
const testat = body
const ants = body
const tescuk = ["0@s.whatsapp.net"]

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

//=======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`

const numerodono = [`${nmrdn}`, `${nescessario.dono1}@s.whatsapp.net`, `${nescessario.dono2}@s.whatsapp.net`, `${nescessario.dono3}@s.whatsapp.net`, `${nescessario.dono4}@s.whatsapp.net`, `${nescessario.dono5}@s.whatsapp.net`, `${nescessario.dono6}@s.whatsapp.net`]

//============(SORTEIO-CONST)============\\

const { infosorteio } = require('./armor/js/infosorteio.js')

//===========(enviar.espere)=============\\

const { mensagens } = require('./armor/js/aleatoria.js');

const { sortear } = require('./armor/js/aleatoria.js');

var enviarmen = mensagens[Math.floor(Math.random() * mensagens.length)] 
//========================================\\

//=======(ADMS/DONO/ETC..CONST)========\\

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot

const DonoOficial = setting.numerodono.includes(sender) 

const isPremium = premium.includes(sender)

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false 

//============(FUNÇÕES)============\\

const isWelkom2 = isGroup ? welkom2.includes(from) : true

const isVote = isGroup ? voting.includes(from) : false

const isModobn =  isGroup ? modobn.includes(from) : true

const isNsfw =  isGroup ? nsfw.includes(from) : true

const isSimi = isGroup ? samih.includes(from) : false

const isSimi2 = isGroup ? samih2.includes(from) : false

const isBanned = ban.includes(sender)

//===========(ANTIS-PROTEÇÕES)===========\\

const isAntifake = isGroup ? antifake.includes(from) : false

const isAntiCtt = isGroup ? antictt.includes(from) : false

const isAnticatalogo = isGroup ? anticatalogo.includes(from) : false

const isAntiFlood = isGroup ? antiflood.includes(from) : false	

const isnit = nit.includes(sender) 

const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : false

const isAutofigu = isGroup ? autofigu.includes(from) : false

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false

const isAntiPorn = isGroup ? antiporn.includes(from) : false

const isAntiAudio = isGroup ? antiaudio.includes(from) : false	
	
const isAntiImg = isGroup ? antiimg.includes(from) : false

const isAntiSticker = isGroup ? antisticker.includes(from) : false

const isAntiNotas = isGroup ? antinotas.includes(from) : false

const Antidoc = isGroup ? antidoc.includes(from) : false

const Antiloc = isGroup ? antiloc.includes(from) : false

const isAntiVid = isGroup ? antivid.includes(from) : false	

const ischyt = chyt.includes(sender)

const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false

const isAnticall = (anticall.indexOf('Ativado') >= 0) ? true : false

const isPalavrao = isGroup ? palavrao.includes(from) : false	

const isViewOnce = (type == 'viewOnceMessage')

//=======================================\\

enviar = {
espere: `${enviarmen}`,
successo: '️❬ ✔ ❭ Sucesso 🖤',
levelon: '❬ ✔ ❭ *leveling* *ativado*',
leveloff: '❬ X ❭  *leveling* *desativado*',
levelnoton: '❬ X ❭ *leveling não ativado*',
levelnol: '*error* 0 °-°',
error: {
stick: '*falhou, tente novamente ^_^*',
Iv: 'Link invalido ☹️'
},
msg: {
grupo: 'ESSE COMANDO SÓ PODE SER USADO EM GRUPOS BURRO🤦‍♀️',
premium: 'ESSE COMANDO É ESPECIAL PARA PREMIUNS DO GRUPO🎗',
mod: `ESTE PEDIDO É ESPECÍFICO PARA USUARIO MOD ${setting.NickDono}💔`,
banido: 'VOCÊ TÁ PROIBIDO(A) DE USAR MEUS COMANDOS :( ENTRE EM CONTATO COM MEU DONO(A)💔' ,
donosmt: 'ESSE COMANDO SÓ PODE SER UTILIZADO PELO MEU DONO(A)🤦‍♀️',
donosmt2: 'ESSE RECURSO SÓ PODE SER UTILIZADO PELO MEU DONO(A)🥺',
adm: 'ESSE COMANDO SÓ PODE SER UTILIZADO PELOS ADMINISTRADORES DO GRUPO🤦‍♀️',
Badmin: 'EU SÓ POSSO ATENDER SEU PEDIDO QUANDO EU FOR ADMINISTRADORA DO GRUPO 🥺',
}
}

//=========(CONSTS-FUNÇÕES)============\\

const isWelkom = isGroup ? welkom.includes(from) : false

const issupre = supre.includes(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false

const isBanchat = isGroup ? bancht.includes(from) : false	

//=====================================\\



//==========(VERIFICADO)===============\\


var blalogoofc = getBuffer(`${logo}`)


var selo = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `${NomeDoBot}`, 'jpegThumbnail': blalogoofc}}}

//=====================================\\

const reply = (texto) => {
conn.sendMessage(from, { text: texto }, {quoted: info}).catch(e => {
console.log(e)
})
}

const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.id)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await conn.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  


const isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}	

const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada'
                                        } 
if(time2 > "05:30:00"){
var tempo = 'Bom dia'
                                        }
if(time2 > "12:00:00"){
var tempo = 'Boa tarde'
                                        }
if(time2 > "19:00:00"){
var tempo = 'Boa noite'
                                        }


const getFileBuffer = async (mediakey, MediaType) => {
  
const stream = await downloadContentFromMessage(mediakey, MediaType)

let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const sendSticker = (from, filename, info) => {
conn.sendMessage(from, {sticker: filename}, {quoted: info})
}

const sendImage = (ytb) => {
conn.sendMessage(from, {image: ytb}, {quoted:info})
}


const sendMess = (hehe, ytb) => {
conn.sendMessage(hehe, {text: ytb})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? conn.sendMessage(from, {text: teks.trim(), mentions: memberr}) : conn.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const costum = (pesan, tipe, target, target2) => {
conn.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {remoteJid: from}: {})}, message: {conversation: `${target2}` }}})
}


const groupIdWelcomed = []	
for(let obj of welcome_group) groupIdWelcomed.push(obj.id)

const groupIdBye = []
for(let obj of bye_group) groupIdBye.push(obj.id)

const isWelcomed = (groupIdWelcomed.indexOf(from) >= 0) ? true : false

const isByed = (groupIdBye.indexOf(from) >= 0) ? true : false

const groupIdWelcomed2 = []	

for(let obj of welcome_group2) groupIdWelcomed2.push(obj.id)

const groupIdBye2 = []

for(let obj of bye_group2) groupIdBye2.push(obj.id)


const isWelcomed2 = (groupIdWelcomed2.indexOf(from) >= 0) ? true : false

const isByed2 = (groupIdBye2.indexOf(from) >= 0) ? true : false	
	
	const autoresp = JSON.parse(fs.readFileSync('./datab/grupos/autoresposta.json'))
const isAutoresp = autoresp.includes(from)
//=====(FUNÇÃO-CHECAR-LIMIT)====\\
const checkLimit = (sender) => {
let found = false
for (let lmt of _limit) {
if (lmt.id === sender) {
let limitCounts = limitawal - lmt.limit
if (limitCounts <= 0) return conn.sendMessage(from,{text: `[👾] *LIMIT ESGOTADO*\n\n_Nota : para obter mais limit compre usando *${prefix}buylimit* ou suba de nível...`},{sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
found = true
}
}
if (found === false) {
let obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json', JSON.stringify(_limit))
conn.sendMessage(from, {text: jrpl.limitcount(limitCounts)}, { quoted : info})
}
} 
							
	//funtion limitado
const isLimit = (sender) =>{ 
if (issupre) {return false;}
let position = false
for (let i of _limit) {
if (i.id === sender) {
let limits = i.limit
if (limits >= limitawal ) {
position = true
conn.sendMessage(from, {text: jrpl.limitend(pushname)}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
return true
} else {
_limit
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, limit: 0 }
_limit.push(obj)
fs.writeFileSync('./datab/grupos/limit.json',JSON.stringify(_limit))
return false
}
}
	
const sendFileFromUrl = async (from, url, caption, info, men) => {
let mime = ''; 
let res = await axios.head(url)
mime = res.headers['content-type'] 
if (mime.split("/")[1] === "gif") { 
return conn.sendMessage(from, {video: await getBuffer(url),
caption: caption, gifPlayback: true, 
mentions: men ? men : []}, {quoted: info}) 
}
 
let type = mime.split("/")[0]+"Message" 
if(mime === "application/pdf"){ 
return conn.sendMessage(from, {document: await getBuffer(url), mimetype: 'application/pdf', 
caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 

if(mime.split("/")[0] === "image"){ 
return conn.sendMessage(from, {image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
}
if(mime.split("/")[0] === "video"){ 
return conn.sendMessage(from, {video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: info}) 
} 
if(mime.split("/")[0] === "audio"){ 
return conn.sendMessage(from, {audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: info}) 
}
}
	
const sendMediaURL = async(to, url, text ="", mids=[]) =>{
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
type = video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
conn.sendMessage(to, {type: media, mimetype: mime, caption: text, contextInfo: {"mentionedJid": mids}}, { quoted: info})
fs.unlinkSync(filename)
});
}   

/********** ANTI NOME MODIFICADO **********/
function isDoubleByte(str) {
for (let i = 0, n = str.length; i < n; i++) {
if (str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
if (bytes == 0) {
return "n/a"
}

const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
if (i == 0) {
return bytes + " " + sizes[i]
}

return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
}

// ENVIAR BOTÃO COM TEXTO
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// ENVIAR BOTÃO COM IMAGEM
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
conn.sendMessage(id, buttonMessage, {quoted: vr})
}

// PRA ENVIAR BOTÃO DE TEMPLATE
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
conn.sendMessage(id, templateMessage, {quoted: vr})
}

const sendlistA = async (id, txt1, txt2, title1, btext, but) => {

const sections = but

const listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
conn.sendMessage(id, listMessage)  
}

const enviarfigu = async (figu, tag) => {
bla = fs.readFileSync(figu)
conn.sendMessage(from, {sticker: bla}, {quoted: info})
}

const enviarfiguUrl = async (link) => {
ranp = getRandom('.gif')
rano = getRandom('.webp')
ini_buffer = `${link}`
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
fs.unlinkSync(ranp)
buff = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buff}, {quoted: info}).catch(e => {
})
fs.unlinkSync(rano)
})
}

if(isAutofigu && isGroup) {
if(type == "videoMessage") {
buff = await getFileBuffer(info.message.videoMessage, 'video')
ran = getRandom('.'+await getExtension(info.message.videoMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`).catch(e => {
})
fs.unlinkSync(ran, buff)
} else if(type == "imageMessage") {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
enviarfiguUrl(`${res}`).catch(e => {
})
fs.unlinkSync(ran, buff)
}
}


var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.includes(`@${nmrdnofc1}`)) {
const tabelin = JSON.parse(fs.readFileSync(`./func/afk/afk-@${nmrdnofc1}.json`));  

txt = `𝑶𝑰𝑬̂𝑬́^-^ 𝑶 ${NickDono} 𝐄𝐒𝐓𝐀́ 𝐎𝐅𝐅 🥺.\n\n - 𝑫𝑬𝑺𝑫𝑬🎴: ${tabelin.Ausente_Desde}\n\n- 💎𝑵𝒐 𝒎𝒐𝒎𝒆𝒏𝒕𝒐 𝒆𝒔𝒕𝒂́: ${tabelin.Motivo_Da_Ausência}`

conn.sendMessage(from, {text: txt}, {quoted: info})
}
}
 
if(isGroup && fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {

const sairalg = JSON.parse(fs.readFileSync(`./func/sairgp/sairgp-${from}.json`)); 

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

if(datinhaofc >= sairalg.Data_de_sair) {

group = await conn.groupMetadata(from)
member = group['participants']
mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
options = {
text: `Atenção membros, aqui quem está falando é o bot com a mensagem automática, sairei do grupo por o tempo que foi realizado no dia que alugou, completou 30 dias....`,
mentions: mem,
quoted: info
}
conn.sendMessage(from, options)

exec(`cd func && cd sairgp && rm sairgp-${from}.json`)

setTimeout(async() => {
reply(`${prefix}sairgp`)
}, 5000)
}
}
 
if(fs.existsSync("baileys_store_multi.json")) {
statsObj = fs.statSync('./baileys_store_multi.json')  

if(convertBytes(statsObj.size) >= "20 MB") {
exec("rm baileys_store_multi.json")
}
}
 
//========================================\\
//BAN CHATS/GRUPOS
if (isBanchat && !isGroupAdmins && !SoDono){
if (!isGroupAdmins && !SoDono) return
if (budy2.startsWith('unbangp')){
if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido, ou seja não estou ouvindo ninguém`)
let lfd = bancht.indexOf(from)
bancht.splice(lfd, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
}
}

//=======FUNCIONALIDADE PATENTE=========\\
const nivelAtual = getLevelingLevel(sender)
var patt = 'Bronze I🥉'
if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}
//========================================\\



//==========(FUNÇÃO DE LEVEL)=============\\
if (isGroup && isLevelingOn) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
await reply(`                🥳𝙋𝘼𝙍𝘼𝘽𝙀́𝙉𝙎!!🥳
 ━━━━━━━ ⸙ - ⸙ ━━━━━━━
  🔥𝐍𝐔́𝐌𝐄𝐑𝐎:${sender.split("@")[0]}.                  
  💎𝐏𝐀𝐓𝐄𝐍𝐓𝐄 : ${patt}\n  🤑𝐗𝐏: ${getLevelingXp(sender)}
  🏆𝙎𝙐𝘽𝙄𝙐 𝘿𝙀 𝙇𝙀𝙑𝙀𝙇: ${getLevel} -> ${getLevelingLevel(sender)}`)
}
} catch (err) {
console.error(err)
}
}
//=======================================\\



const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('enviando sticker');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
conn.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: info})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}


//===================================\\

		//JOGO DO ANAGRAM
if(isGroup && fs.existsSync(`./armor/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { conn.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra💎 : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos🔥...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `🎉🎉💎RECOMPENSA💎🎉🎉\nVocê ganhou ${xp} em *xp*`
reply(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
conn.sendMessage(from, {text:`

╭═• ೋ☆๑🥇๑☆ೋ •═╮
          🕹𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀🎮
╰═• ೋ☆๑🎁๑☆ೋ •═╯    
💎𝘿𝙀𝙎𝘾𝙐𝘽𝙍𝘼 𝘼 𝙋𝘼𝙇𝘼𝙑𝙍𝘼💎
 ╭╼━═━≺🍨≻━═━╾╮
  ⏳𝑷𝑨𝑳𝑨𝑽𝑹𝑨: ${dataAnagrama2.embaralhada}

  🧐𝐃𝐈𝐂𝐀: ${dataAnagrama2.dica}
╰╼━═━≺🍫≻━═━╾╯
`})
}, 5000)
}}


//========================================\\


		//JOGO QUIZ
if(isGroup && fs.existsSync(`./armor/quizanim-${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
conn.sendMessage(from,{text: `Parabéns ${pushname} você acertou\n${dataAnagramaa.original}\nProximo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./armor/quizanim-${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             🍭Quiz🍭`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}, 5000)
}
}

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
             

///////////ANTI-SPAM BY ITALU/////////
if (isCmd && isFiltered(sender) && !isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff = `PARAA DE FLODARR🤦‍♀️ espere 5 segundos AGORA💔`
return reply(ff)
}
if (isCmd && isFiltered(sender) && isGroup) {
console.log(color('~> [SPAM]', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
const ff1 = `MANOO NÃO FLODAA AGORA ESPERE 5 SEGUNDOS AFF🤦‍♀️`
return reply(ff1)
}

//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('comando blockeado')

////FIMMMMMMMMM/////,

if (!isGroup && isCmd) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]))

if (!isGroup && !isCmd && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]', 'do ', color(sender.split('@')[0]))

if (isCmd && isGroup) console.log('\033[0;35m~\x1b[1;37m>', '[\x1b[1;32mCOMANDO\x1b[1;37m]', time, color(command), 'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))

if (!isCmd && isGroup && !info.key.fromMe) console.log('\033[0;35m~\x1b[1;37m>', '[\033[0;35mMENSAGEM\x1b[1;37m]',  'do ', color(sender.split('@')[0]), 'no gp: ', color(groupName))
//======(JOGO-DA-VELHA)=======(Função)===\\

//////////_FUNÇÕES DO JOGO DA VELHA_//////
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "sss" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatAccept}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net", 
],
},
});
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`O jogo já começou!`);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
 conn.sendMessage(from, {text:
 `@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`}, {quoted: info,
 contextInfo: {
 mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo termina empatado 😐
`;
reply(chatEqual);
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Vencido por @${winnerJID} 😎👑
`;
addLevelingXp(winnerJID + "@s.whatsapp.net", abt)

conn.sendMessage(from, {text: chatWon}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
setTimeout( () => {
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
 fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
 reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
 } else {
console.log(color(time, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
 }
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`_*🥳Parabéns @${winnerJID} Você ganhou "${abt}" em xp por ter ganhado o jogo da velha🎉...*_`)      
fs.unlinkSync(`./armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
❌ : @${moving.X}
⭕ : @${moving.O}

Sua vez : @${moving.turn == "X" ? moving.X : moving.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
} 
} 
}


//=================================\\

async function AntilinkHardF() {
if(isUrl(budy2) && isAntiLinkHard && isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(!isUrl(budy2)) return 
if(budy2.includes(`${linkgpp}`)) return 
if(isBot) return 
reply('💎Link detectado, porém usuário é admin💎')
}

if(isUrl(budy2) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins) {
linkgpp = await conn.groupInviteCode(from)
if(budy2.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover🔥.. ')  
if(!isUrl(budy2)) return 
reply('MANDOU LINK? BANIDOO🤬..')
conn.groupParticipantsUpdate(from, [sender], 'remove')
kael = fs.readFileSync("./audios/banido.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
}
} 
AntilinkHardF()
joguinhodavelha()

if(isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
if(!isAntilinkgp) return
if(!isUrl(body)) return 
if(isGroupAdmins) return reply("Você é adm, não removerei você..") 
if(budy2.includes("chat.whatsapp.com/")){
if(!budy2.includes("chat.whatsapp.com/")) return
if(isBot) return 
linkgpp = await conn.groupInviteCode(from)
if(budy.match(`${linkgpp}`)) return reply('Link do nosso grupo, não irei remover.. ')  
reply('*Link de grupo detectado, irei banir imediatamente🤬...*')
conn.groupParticipantsUpdate(from, [sender], 'remove')
kael = fs.readFileSync("./audios/banido.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true}) 
}
}

//========(CONTADOR-DE-MENSAGENS)========\\

const groupIdscount = []
const numbersIds = []
for(let obj of countMessage) {
groupIdscount.push(obj.groupId)
}
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
countMessage[ind].numbers[indnum].messages += 1
countMessage[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = 1
const cmd_messages = isCmd ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
cmd_messages: isCmd ? 1 : 0
}]
})
fs.writeFileSync('./datab/grupos/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
//======================================\\

//===============(AUTO-BAN)=============\\
const dbids = []
for(i=0;i<adeuscara.length;++i) {
dbids.push(adeuscara[i].groupId)
}
const isAdeusCara = (isGroup && dbids.indexOf(from) >= 0) ? true : false

//======================================\\




//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if (info.key.fromMe) return
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = bady.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && bady.length < 100) return  
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return conn.sendMessage(from,{text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text:'*mensagem proibida detectada, porém é admin logo a punição será anulada*'}, {quoted: info})
await conn.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
//=======================================\\

if ((isAntiPorn && isBotGroupAdmins)) {
if (type === 'imageMessage') {
buff = await getFileBuffer(info.message.imageMessage, 'image')
ran = getRandom('.'+await getExtension(info.message.imageMessage.mimetype))
fs.writeFileSync(ran, buff)
res = await upload(buff)
anu = await fetchJson(`https://nsfw-demo.sashido.io/api/image/classify?url=${res}`)
if(anu[0].className === 'Sexy' && isGroupAdmins)  {
await conn.sendMessage(from,{text: `Você é adm, não banirei você por isto..`}, {quoted: info})
fs.unlinkSync(ran)
return
} else if(anu[0].className === 'Sexy' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `PORNO DETECTADO, VOCÊ SERÁ BANIDO🤬🤬..`}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
fs.unlinkSync(ran)
}, 2000)
return
}
if(anu[0].className === 'Hentai' && isGroupAdmins) {
await conn.sendMessage(from,{text: `Você é adm, não banirei você...`},{quoted: info})
fs.unlinkSync(ran)
return
}  else if(anu[0].className === 'Hentai' && !isGroupAdmins) {
await conn.sendMessage(from,{text: `PORNO DETECTADO, VOCÊ SERÁ BANIDO🤬..`}, {quoted: info})
setTimeout(async function () {
conn.groupParticipantsUpdate(from, [sender], 'remove')
fs.unlinkSync(ran)
}, 2000)
return
}
}
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\
if(isAntiPv && !isGroup && !SoDono && !isnit && !isPremium){ 
	reply('olá^-^ no  momento não posso receber mensagem no pv! Contate meu "Dono"')
delay(4000)
conn.updateBlockStatus(sender, 'block')
return
}
//======================================\\


//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && banChats === true) return reply(`Oiê^-^ Desculpa, mais No momento não estou respondendo no pv. Volte mais tarde🥺☕ .....`)
const atibot = info.isBaileys
if (atibot === true) return 


//======================================\\

// ANTI_LIGAR \\

if(isAnticall) {
conn.ws.on('CB:call', async (B) => {
if (B.content[0].tag == 'offer') {
conn.sendMessage(B.content[0].attrs['call-creator'], { text: "Não pode ligar para o bot🤬 Você será bloqueado:(." }).then(() => { 
delay(4000)
conn.updateBlockStatus(B.content[0].attrs['call-creator'], "block") })
}
})
}

//==SISTEMA DE VOTAÇÃO: CRÉDITOS: KAUAN==\\
if(isGroup) {
if (budy.toLowerCase() === 'voto'){
let vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel votar duas vezes', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Votos\n*Duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
        }  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devoto'){
const vote = JSON.parse(fs.readFileSync(`./armor/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./armor/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '0@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' não é possivel anular um voto', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./armor/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*para*: ${_votes[0].reason}\n*total Votos* : ${vote.length} Vote\n*duração* : ${_votes[0].durasi} minutos\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	
//======================================\\


//_CONTAGEM DE COMANDOS
if (isCmd) cmdadd()
            
if (isBanned) return
BannedExpired(ban)

if (isCmd && !SoDono && !isnit && !issupre && !ischyt) addFilter(sender)


switch (figura) {
  
case 'PhBL0PtpQ7pESrESQNgLuXpPJfhblay8ykTUfOH3xpRXYw=':
bla = fs.readFileSync('./audios/qviado.m4a')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
break

}

//INICIO DE COMANDO DE PREFIXO
switch(command) {
  
//=========(-MENUS-DE-CMDS-)========\\



case 'menupacks':
case 'packs':
botaoale = [
{title: "Select1",
rows: [
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙎𝘼𝙆𝙐𝙍𝘼𝙅𝙄𝙈𝘼💎", rowId: `${prefix}jima`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙉𝘼𝙍𝙐𝙏𝙊🧧", rowId: `${prefix}naruto`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝘼𝙉𝙔𝘼🍫", rowId: `${prefix}anya`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝘼𝙆𝘼𝙈𝙀🩸", rowId: `${prefix}akame`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙕𝙊𝙍𝙊💝", rowId: `${prefix}zoro`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙃𝙄𝙉𝘼𝙏𝘼🀄", rowId: `${prefix}hinata`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝘾𝙃𝙄𝙕𝙐𝙍𝙊💜", rowId: `${prefix}chizuru`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙈𝙀𝙂𝙐𝙈𝙄𝙉💘", rowId: `${prefix}megumin`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙄𝙏𝙎𝙐𝙆𝙄⛩", rowId: `${prefix}itsuki`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙆𝙐𝙂𝙐𝙔𝘼💞", rowId: `${prefix}kuguya`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙕𝙀𝙍𝙊❣", rowId: `${prefix}zero`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙆𝙊𝙈𝙄💌", rowId: `${prefix}komi`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙎𝘼𝙆𝙐𝙍𝘼🎴", rowId: `${prefix}sacura`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙎𝘼𝙔-𝘾𝘼𝙏💙", rowId: `${prefix}saycat`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙇𝙊𝙇𝙄💖", rowId: `${prefix}loli`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙒𝘼𝙄𝙁𝙐💢", rowId: `${prefix}waifu`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝘼𝙎𝙐𝙉𝘼🎀", rowId: `${prefix}asuna`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙉𝙀𝙕𝙐𝘾𝙊🏮", rowId: `${prefix}nezuco`},
{title: "✮ۣۜۜ͜͡𝙋𝘼𝘾𝙆-𝙎𝙃𝙊𝙏𝘼🥡", rowId: `${prefix}shota`}]
}]
sendlistA(from, "⛩𝐋𝐈𝐒𝐓-𝐏𝐀𝐂𝐊𝐒⛩", `${NomeDoBot}`, "🥂𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶🥂", "💢𝑴𝒐𝒔𝒕𝒓𝒂𝒓 𝑳𝒊𝒔𝒕𝒂💢", botaoale)
break







case 'menupacks18':
case 'packs+18':
case 'packs18':  
case 'hentai':
if (!isNsfw) return reply(`ESSA LISTA DE PACKS SÓ PODE SER UTILIZADA COM MODO (+18) ATIVO!: ${prefix}`)
botaoale = [
{title: "Select1",
rows: [
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐇𝐄𝐍𝐓𝐀𝐈🌶", rowId: `${prefix}h18`},
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐋𝐎𝐋𝐈🔥", rowId: `${prefix}loli+18`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐁𝐃𝐒𝐌🍒", rowId: `${prefix}bdsm`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐁𝐋𝐎𝐖𝐉𝐎𝐁🍆", rowId: `${prefix}blowjob`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐂𝐔𝐂𝐊𝐎𝐋𝐃🍼", rowId: `${prefix}cuckold`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐂𝐔𝐌🌽", rowId: `${prefix}cum`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐄𝐑𝐎🍑", rowId: `${prefix}ero`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐙𝐄𝐓𝐓𝐀𝐈🔞", rowId: `${prefix}zettai`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐅𝐄𝐌𝐃𝐎𝐌🍇", rowId: `${prefix}femdom`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐆𝐀𝐍𝐆😏", rowId: `${prefix}gang`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐎𝐑𝐆𝐘🥵", rowId: `${prefix}orgy`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐓𝐄𝐍𝐓𝐀𝐂𝐋𝐄𝐒🦋", rowId: `${prefix}tentacles`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐓𝐇𝐈𝐆𝐇𝐒💄", rowId: `${prefix}thighs`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐀𝐒𝐒🍌", rowId: `${prefix}ass`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐘𝐔𝐑𝐈𝐇👠", rowId: `${prefix}yurih`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐅𝐎𝐎𝐓🥒", rowId: `${prefix}foot`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐍𝐄𝐊𝐎😈", rowId: `${prefix}neko18`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐆𝐋𝐀𝐒𝐒𝐄𝐒🪵", rowId: `${prefix}glasses`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐌𝐀𝐒𝐓𝐔𝐑**💦", rowId: `${prefix}mastur`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐉𝐀𝐇𝐘🥕", rowId: `${prefix}jahy`}, 
{title: "✮ۣۜۜ͜͡𝐏𝐀𝐂𝐊-𝐎𝐍𝐋𝐘𝐅𝐀𝐍𝐒 💋", rowId: `${prefix}only`}]
}]
sendlistA(from, "🍼𝐋𝐈𝐒𝐓-𝐏𝐀𝐂𝐊𝐒+18🍼", `${NomeDoBot}`, "🥂𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶🥂", "💋𝑴𝒐𝒔𝒕𝒓𝒂𝒓 𝑳𝒊𝒔𝒕𝒂💋", botaoale)
break



case 'edits':
case 'menuedits':
botaoale = [
{title: "Select1",
rows: [
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐍𝐀𝐑𝐔𝐓𝐎🉐️", rowId: `${prefix}edit-naruto`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐈𝐒𝐄𝐊𝐀𝐈🧧", rowId: `${prefix}edit-isekai`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐇𝐔𝐍𝐓𝐄𝐑🗡", rowId: `${prefix}edit-hunter1`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐋𝐄𝐕𝐄𝐋𝐈𝐍𝐆🌋", rowId: `${prefix}edit-sololeveling`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐓𝐑𝐀𝐏🛹", rowId: `${prefix}edit-trap`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐁𝐋𝐄𝐀𝐂𝐇🍾", rowId: `${prefix}edit-bleach`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐒𝐇𝐈𝐍𝐆𝐄𝐊𝐈🩸", rowId: `${prefix}edit-shingeki`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐊𝐈𝐌𝐄𝐓𝐒𝐔🀄", rowId: `${prefix}edit-kimetsu`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐍𝐀𝐍𝐀𝐓𝐒𝐔🍷", rowId: `${prefix}edit-nanatsu`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐉𝐔𝐉𝐔𝐓𝐒𝐔🎴", rowId: `${prefix}edit-jujutsu`},
{title: "✮ۣۜۜ͜͡𝐄𝐃𝐈𝐓-𝐒𝐏𝐘×𝐅𝐀𝐌𝐈𝐋𝐘🪀", rowId: `${prefix}edit-spyxfamily`}]
}]
sendlistA(from, "🃏𝐋𝐈𝐒𝐓-𝐄𝐃𝐈𝐓𝐒🃏", `${NomeDoBot}`, "🥂𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶🥂", "🧧𝑴𝒐𝒔𝒕𝒓𝒂𝒓 𝑳𝒊𝒔𝒕𝒂🧧", botaoale)
break

case 'bla':
blarsp = args.join(" ")
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/akinator?minharesposta=${blarsp}`)
blatxt = `Questão : ${bla.qst}\n\nPerguntas :\n 1 - ${bla.rsp}`
reply(blatxt) 
break




case 'play':
  case 'ytb':
  const srchh = (q)
               try {
               var aramas = await yts(srchh);
               } catch {
               return await conn.sendMessage(from, {text: '𝙋𝙚𝙨𝙦𝙪𝙞𝙨𝙖 𝙣𝙖̃𝙤 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙖 🥺'}, {quoted: info})
               }
					const objs = []
					for (let x of aramas.all) {
						let data = {
							rowId: `${prefix}p2 `+ x.title,
							title: x.title,
							description: x.description
						}
						objs.push(data)
					}
const msc = {
  text: `️✮ۣۜۜ͜͡𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶𝑺 𝑫𝑨 𝑷𝑬𝑺𝑸𝑼𝑰𝑺𝑨> ${q}`,
  footer: '💎𝑺𝒆𝒍𝒆𝒄𝒊𝒐𝒏𝒆 𝒖𝒎𝒂 𝒅𝒂𝒔 𝒐𝒑𝒄̧𝒐̃𝒆𝒔 𝒆 𝒂𝒑𝒆𝒓𝒕𝒆 𝒆𝒎 𝒆𝒏𝒗𝒊𝒂𝒓💎',
  buttonText: "♨️𝙈𝙊𝙎𝙏𝙍𝘼𝙍-𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎♨️",
  sections: [
								{
									title: "𝑴𝑼́𝑺𝑰𝑪𝑨𝑺-𝑹𝑬𝑳𝑨𝑪𝑰𝑶𝑵𝑨𝑫𝑨𝑺 ",
									rows: objs
								}
							]
}
sendMsg = await conn.sendMessage(from, msc, {quoted: selo})
break

case 'menu':
botaoale = [
{title: "Select1",
rows: [
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇🔥", rowId: `${prefix}menu2`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎 🍰", rowId: `${prefix}brincadeiras`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙋𝙍𝙀𝙈𝙄𝙐𝙈🎗", rowId: `${prefix}menuprem`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎♨️", rowId: `${prefix}baixar`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙇𝙊𝙂𝙊𝙎🎃", 
rowId: `${prefix}menulogos`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘼𝙇𝙏𝙀𝙍𝘼𝘿𝙊𝙍𝙀𝙎🌒", rowId: `${prefix}alteradores`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙀𝙁𝙀𝙄𝙏𝙊𝙎🛹", rowId: `${prefix}efeitos`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘼𝘿𝙈🍧", rowId: `${prefix}menuadm`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎💖", rowId: `${prefix}figurinhas`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-(+18)💋", rowId: `${prefix}menu+18`},
{title: "✮ۣۜۜ͜͡ 𝙈𝙀𝙉𝙐-𝘿𝙊𝙉𝙊🌙", rowId: `${prefix}menudono`},
{title: "✮ۣۜۜ͜͡ 𝙇𝙄𝙎𝙏-𝙀𝘿𝙄𝙏𝙎🧧", 
rowId: `${prefix}menuedits`},
{title: "✮ۣۜۜ͜͡𝙇𝙄𝙎𝙏-𝙋𝘼𝘾𝙆𝙎⛩", 
rowId: `${prefix}menupacks`},
{title: "✮ۣۜۜ͜͡𝙄𝙉𝙁𝙊-𝙈𝙀𝙎𝙏𝙍𝙀🥋", rowId: `${prefix}infodono`},
{title: "✮ۣۜۜ͜͡𝘼𝙆𝙄𝙉𝘼𝙏𝙊𝙍🔮", rowId: `${prefix}akinator`},
{title: "✮ۣۜۜ͜͡𝙌𝙐𝙀𝙈 𝙀́ 𝙑𝙊𝘾𝙀̂ 𝘽𝙊𝙏?😮", rowId: `${prefix}infobot`, description: "𝑨́𝒖𝒅𝒊𝒐 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐.."}]
}]
sendlistA(from, "💎𝐌𝐄𝐍𝐔-𝐋𝐈𝐒𝐓💎", `${NomeDoBot}`,"🥂𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶🥂", "🎗𝑴𝒐𝒔𝒕𝒓𝒂𝒓-𝒍𝒊𝒔𝒕𝒂🎗", botaoale)
break

case 'menu2': case 'comandos': case 'help':
if(!isGroup) return reply('comando apenas para grupos')
bla = fs.readFileSync('./audios/menu.m4a')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
sendBimgT(from, `${logo}`, menu(prefix, NomeDoBot), "𝑪𝒍𝒊𝒒𝒖𝒆 𝒆𝒎 𝒍𝒆𝒓 𝒎𝒂𝒊𝒔 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒎𝒆𝒖𝒔 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔^-^🍫", [{index: 1, urlButton: {displayText: '💎𝙉𝙚𝙩𝙛𝙡𝙞𝙭^-^𝙂𝙧𝙖́𝙩𝙞𝙨🔥', url: 'https://topflix.one/'}},
{index: 2, quickReplyButton: {displayText: '✮ۣۜۜ͜͡𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎♨️', id: `${prefix}baixar`}},
{index: 2, quickReplyButton: {displayText: '✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘼𝘿𝙈🍩', id: `${prefix}menuadm`}}, 
{index: 3, quickReplyButton: {displayText: '✮ۣۜۜ͜͡𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎🍰'
, id: `${prefix}brincadeiras`}}], selo)
break

case 'logos':
case 'menulogo':
case 'menulogos':  
sendBimg(from, `${logo}`, menulogos(prefix), "Leia com atenção", [
{buttonId: `${prefix}brincadeiras`, buttonText: {displayText: `✮ۣۜۜ͜͡𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎🍰`}, type: 1},  {buttonId: `${prefix}efeitosimg`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙀𝙁𝙀𝙄𝙏𝙊𝙎🛹`}, type: 1}], selo)
break 


case 'menuadm':
case 'menuadms':
case 'adms':  
if (!isGroup) return reply('Só pode ser utilizado em Grupo')  
sendBimg(from, `${logo}` , adms(prefix), `🌒`, [
{buttonId: `${prefix}premium`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙋𝙍𝙀𝙈𝙄𝙐𝙈🎗`}, type: 1}, {buttonId: `${prefix}alteradores`, buttonText: {displayText: `✮ۣۜۜ͜͡𝘼𝙇𝙏𝙀𝙍𝘼𝘿𝙊𝙍𝙀𝙎🌒`}, type: 1},], selo) 
break 

case 'menudono':
case 'donomenu':  
if(!SoDono) return reply('Só Dono pode utilizar este comando rsrs') 
sendBimg(from, `${logo}`, menudono(prefix), `🥋`, [
{buttonId: `${prefix}infobot`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙌𝙐𝙀𝙈 𝙀́ 𝙑𝘾 𝘽𝙊𝙏?😶`}, type: 1}, 
 {buttonId: `${prefix}infodono`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙄𝙉𝙁𝙊-𝙈𝙀𝙎𝙏𝙍𝙀🥋`}, type: 1}], selo) 
break 


case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
sendBimg(from, `${logo}`, efeitos(prefix), `🎉`, [
{buttonId: `${prefix}gostoso`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙎𝙊𝙐-𝙂𝙊𝙎𝙏𝙊𝙎𝙊🔥?`}, type: 1}, {buttonId: `${prefix}gostosa`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙎𝙊𝙐-𝙂𝙊𝙎𝙏𝙊𝙎𝘼🌶?`}, type: 1},], selo)
break


case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
wew = await getBuffer(`${logo}`) 
await conn.sendMessage(from, {image: wew, caption: infodono(prefix, numerodn, NomeDoBot)}, {quoted: selo})
break 

case 'odono':
case 'dono': 
case 'infodono':  
numerodn = setting.numerodono 
wew = await getBuffer(`${logo}`) 
await conn.sendMessage(from, {image: wew, caption: infodono(prefix, numerodn, NomeDoBot)}, {quoted: selo})

break 

case 'alteradores':  
sendBimg(from, `${logo}` , alteradores(prefix), `🎧`, [
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎💖`}, type: 1}, {buttonId: `${prefix}logos`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙇𝙊𝙂𝙊𝙎🎃`}, type: 1}], selo) 
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com o modobrincadeira ativo fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 💎`) 
sendBimg(from, `${logo}` , brincadeiras(prefix), `😎`, [
{buttonId: `${prefix}perfil`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙈𝙀𝙐-𝙋𝙀𝙍𝙁𝙄𝙇😎`}, type: 1}, {buttonId: `${prefix}corno`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙉𝙄𝙑𝙀𝙇-𝘾𝙊𝙍𝙉𝙊🐃`}, type: 1}], selo)
break

case 'menuprem':
case 'premium':
case 'menupremium':
if (!isGroup) return reply('Só pode ser utilizado em Grupo')  
sendBimg(from, `${logo}` , menuprem(prefix), `🎗`, [
{buttonId: `${prefix}baixar`, buttonText: {displayText: `✮ۣۜۜ͜͡𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎♨️`}, type: 1}, {buttonId: `${prefix}infodono`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙄𝙉𝙁𝙊-𝙈𝙀𝙎𝙏𝙍𝙀🥋`}, type: 1}], selo)
break

case 'downloads':
case 'baixar':
case 'menubaixar':
 if (!isGroup) return reply('Só pode ser utilizado em Grupo') 
sendBimg(from, `${logo}` , configbot(prefix), `🌒`, [
{buttonId: `${prefix}figurinhas`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎💖`}, type: 1}, {buttonId: `${prefix}efeitosimg`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙀𝙁𝙀𝙄𝙏𝙊𝙎🛹`}, type: 1},], selo) 
break 

case 'figurinhas':
case 'menufigurinhas':
if (!isGroup) return reply('Só pode ser utilizado em Grupo') 
sendBimg(from, `${logo}` , cmd_termux(prefix), `🎗`, [
{buttonId: `${prefix}logos`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙇𝙊𝙂𝙊𝙎🎃`}, 
type: 1}, {buttonId: `${prefix}alteradores`, buttonText: {displayText: `✮ۣۜۜ͜͡𝘼𝙇𝙏𝙀𝙍𝘼𝘿𝙊𝙍𝙀𝙎🌒`}, type: 1}], selo)
break

case 'menu18':
case 'menu+18':
if (!isNsfw) return reply(`ESSE MENU SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO!`)
if (!isGroup) return reply('Só pode ser utilizado em Grupo') 
sendBimg(from, `${logo}` , hospedar(prefix), `😈`, [
{buttonId: `${prefix}menupacks`, buttonText: {displayText: `✮ۣۜۜ͜͡𝐋𝐈𝐒𝐓-𝐏𝐀𝐂𝐊𝐒🎀`}, 
type: 1}, {buttonId: `${prefix}menuedits`, buttonText: {displayText: `✮ۣۜۜ͜͡𝐋𝐈𝐒𝐓-𝐄𝐃𝐈𝐓𝐒㊗️`}, type: 1}], selo)
break




case 'destrava':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: info})
break 

case 'perfil':
try {
bla = fs.readFileSync('./audios/criatura.m4a')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(sender)
const ssXp = getLevelingXp(sender)
const dptr = `         🥂𝙋𝙀𝙍𝙁𝙄𝙇 𝘿𝘼 𝙍𝙀𝘼𝙇𝙀𝙕𝘼🥂

🥋𝙉𝙄𝘾𝙆 : *${pushname}*
😏𝙉𝙐𝙈𝙀𝙍𝙊 : @${sender.split("@")[0]}
🐂𝙉𝙄𝙑𝙀𝙇 𝙂𝘼𝘿𝙊 : *${nivelgador}${nivelgado2r}%*
📱𝙎𝙀𝙐 𝘾𝙀𝙇𝙐𝙇𝘼𝙍 : ${info.key.id.length > 21 ? '𝘼𝙉𝘿𝙍𝙊𝙄𝘿😻 ' : info.key.id.substring(0, 2) == '3A' ? '𝙄𝙊𝙎🤑' : '𝐳𝐚𝐩 𝐰𝐞𝐛 𝐤𝐤𝐤 😅'}
😈𝙉𝙄𝙑𝙀𝙇 𝙋𝙐𝙏𝘼 : *${putar}${putar2}%*
🔥𝙉𝙄𝙑𝙀𝙇 𝙂𝙊𝙎𝙏𝙊𝙎𝙐𝙍𝘼 : *${gostosurar}${gostosurar2}%*
🍼𝙑𝘼𝙇𝙊𝙍 𝘿𝙊 𝙋𝙍𝙊𝙂𝙍𝘼𝙈𝘼: *R$${programa}*

💖𝑪𝑶𝑵𝑺𝑬𝑳𝑯𝑶💖
${conselho}`
daftarimg = await getBuffer(ppimg)
conn.sendMessage(from, {image: daftarimg, caption: dptr}, {quoted: selo})
break


case 'frases':
case 'frase':
try {
ppimg = await conn.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

hehe = await fetchJson(`https://www.luc4rio-rest-api.tk/api/aleatorios/frases`)
if (hehe.error) return reply(hehe.error)
ccg =
`
  ☕ Author: ${hehe.Author}
 
  🎗 Criador: ${hehe.Criador}
 
  💎 Frase: 
 
  ${hehe.Frase}\n`
daftarimg = await getBuffer(ppimg)
await conn.sendMessage(from, {image: daftarimg, caption: ccg}, {quoted:info})
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]   
jr = `${tempo} ${pushname} 

Conselhos Bíblico para você: 

- ${conselhosb} 

💎 Bot: ${NomeDoBot}
🎗 Grupo: ${groupName}`
await conn.sendMessage(from, {text: jr}, {quoted:info, contextInfo: {"mentionedJid": jr}})
break

case 'tabela':
await conn.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
if (!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
await conn.sendMessage(from, {text: destrava2 (prefix)}, {quoted: info})
break 

case 'infovotação':
case 'infovotacao':  
await conn.sendMessage(from, {text: infovotacao(prefix, pushname)}, {quoted: selo})
break

case 'infobemvindo':
case 'infobv':  
await conn.sendMessage(from, {text: infobemvindo(prefix)}, {quoted: selo})
break


case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo : ${prefix}tradutor dog`)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/tradutor?text=${args.join(" ")}&idioma=pt&apikey=${keyale}`)
blatxt = `Olá ${pushname} sua palavra/texto foi traduzida(o) com sucesso ->\n\n ${bla.bla}`
blalogo = await getBuffer(`${logo}`)
conn.sendMessage(from, {text: blatxt, contextInfo: { externalAdReply:{title: `Traduzido com sucesso`,body:"", previewType:"PHOTO",thumbnail: blalogo}}}, {quoted: info}).catch(e => {
reply("ERROR!!")
console.log(e)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'idiomas':
case 'idioma':
txt = `  
IDIOMAS DO GTTS OU DO TRADUTOR

EXEMPLO :

>> ${prefix}gtts pt (texto)

o PT que coloquei, é a linguagem, então pode por no lugar as 2 letras que define a linguagem, iguais os exemplos e os idiomas abaixo.

'af': 'Afrikaans',
'sq': 'Albanian',
'ar': 'Arabic',
'hy': 'Armenian',
'ca': 'Catalan',
'hr': 'Croatian',
'cs': 'Czech',
'da': 'Danish',
'nl': 'Dutch',
'en': 'English',
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
'pt': 'Portugues',
'ro': 'Romanian',
'ru': 'Russian',
'sr': 'Serbian',
'sk': 'Slovak',
'es': 'Spanish',
'sw': 'Swahili',
'sv': 'Swedish',
'ta': 'Tamil',
'th': 'Thai',
'tr': 'Turkish',
'vi': 'Vietnamese',
'cy': 'Welsh'
 
🔥${setting.NomeDoBot}🔥`

conn.sendMessage(from, {text: txt}, {quoted: selo})
break

case 'infocontador':
await conn.sendMessage(from, {text: infocontador(prefix, pushname)}, {quoted: selo})
break

case 'databoton':
await conn.sendMessage(from, {text: databoton(prefix)}, {quoted: selo})
break

case 'infolistanegra':
await conn.sendMessage(from, {text: infolistanegra(prefix, pushname)}, {quoted: selo})
break

case 'infopalavrão':
case 'infopalavrao':
await conn.sendMessage(from, {text: infopalavrao(prefix, pushname)}, {quoted: selo})
break

case 'infobancarac':
await conn.sendMessage(from, {text: infobancarac(prefix, pushname)}, {quoted: selo})
break

case 'git-bot':  
case 'gitdobot':
case 'gitbot':   
await conn.sendMessage(from, {text: gitdobot(prefix)}, {quoted: selo})
break

case 'qr':
if (!SoDono && !info.key.fromMe) return reply(enviar.msg.donosmt)
bla = fs.readFileSync("auth_info_multi.json")
conn.sendMessage(from, {document: bla, mimetype: 'document/json', fileName: 'auth_info_multi.json'})
break




//========(FUNÇÕES-PREMIUM-AQUI)=======\\

case 'mediafire':
try {
txt = args.join(" ")
if(!txt) return reply('Cade o Link?')
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/mediafire?url=${txt}&&apikey=${keyale}`)
reply(`*Enviando o Arquivo: ${bla.resultado[0].nama}\nPeso: ${bla.resultado[0].size}`)
blabla = await getBuffer(bla.resultado[0].link)
blabla1 = await getBuffer(bla.resultado[0].mime)
blabla2 = await getBuffer(bla.resultado[0].nama)
conn.sendMessage(from, {document:  blabla, mimetype: blabla1, fileName: blabla2}, {quoted: info}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'ler': 
case 'ocr':   
case 'lerfoto':  
if(!isPremium) return reply(enviar.msg.premium)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane 
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Somente fotos!')
}
break


case 'check':
if(!isPremium) {
reply(`Desculpe ${pushname}, Você ainda não possui nosso premium😔 saiba mais digitando "-planos"`)
} else {
reply(`Eba parabéns🎉💎 vc tem premium\nEstou orgulhosa`)
}
break





case 'premiumlist':
if(!isPremium) return reply(enviar.msg.premium)   
members_id = []
tkks = '      🤴𝑳𝑰𝑺𝑻𝑨 𝑫𝑨𝑺 𝑹𝑬𝑨𝑳𝑬𝒁𝑨𝑺👸\n'
for (let V of premium) {
tkks += `╎🎗  @${V.split('@')[0]}\n`
members_id.push(V)
}
tkks += `     💎 𝐓𝐎𝐓𝐀𝐋 : ${premium.length}\n
   
           ${setting.NomeDoBot} `
mentions(tkks.trim(), members_id, true)
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'id':
case 'figuid':
if (!SoDono && !info.key.fromMe) return 
if (isQuotedSticker) {
var figu = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString("base64");
reply(figu)
}
break

case 'gerarcpf':
if(!isPremium) return reply(enviar.msg.premium)
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await conn.sendMessage(from, {text: `𝐂𝐏𝐅 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎💻🔥 : ${cpf}`}, {quoted: info})
break


case 'cnpj':
if(!isPremium) return reply(enviar.msg.premium) 
if (args.length < 1) return reply("*exemplo* -cnpj 49291534000167")
reply(`*Ei ${pushname} já estou consultando...* Enquanto isso tome um cafézinho☕\nCaso não retorne nada, nao foi encontrado.`)
query = args.join(" ")
hehee = await fetchJson(`https://www.receitaws.com.br/v1/cnpj/${query}`)
if (hehee.tipo != undefined) {
consulta = `═════════════════════
💎  CONSULTA-REALIZADA  💎
═════════════════════

🖊 CNPJ: *• *${hehee.cnpj} 

📝 ATIVIDADE PRINCIPAL:

- TIPO: *${hehee.tipo}*

🧾 DADOS INFORMATIVOS:
DATA: *${hehee.data_situacao}*
COMPLEMENTO: *${hehee.complemento}*
TIPO: *${hehee.tipo}*
NOME: *${hehee.nome}*
UF: *${hehee.uf}*
TELEFONE: *${hehee.telefone}*
EMAIL: *${hehee.email}*

💳 ATIVIDADES SECUDARIAS:
- TIPO: ${hehee.tipo}

👑 SÓCIOS ADMINISTRATIVOS:


💻 DADOS & LOCALIZAÇÃO
SITUAÇÃO: ${hehee.situacao}
BAIRRO: *${hehee.bairro}*
LOGRADOURO: ${hehee.logradouro}
NÚMERO: ${hehee.numero}
CEP: ${hehee.cep}
MUNICIPIO: *${hehee.municipio}*
ABERTURA: ${hehee.abertura}
NATUREZA *${hehee.natureza_juridica}*
ULTIMA ATUALIZAÇÃO: *${hehee.ultima_atualizacao}*
STATUS: ${hehee.status}
FANTASIA: *${hehee.fantasia}*
EFR:  *${hehee.efr}*
SITUAÇÃO: *${hehee.situacao}*
SITUAÇÃO ESPECIAL: *${hehee.situacao_especial}*
DATA DA SITUAÇÃO ESPECIAL: *${hehee.data_situacao}*
CAPITAL SOCIAL: *${hehee.capital_social}*

☕ Usuario: ${pushname}

💎 Bot: ${NomeDoBot}

━━━━━━━━━━━━━━━━━━`
reply(consulta)
} else {
reply(`⚠️ CNPJ NÃO ENCONTRADO!`)
}
break








case 'cep':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/tools/cep?apikey=apiteam&cep=${query}`)
x = get_result.resultado
k = `💎CEP : ${x.cep}
⛩LOGRADOURO: ${x.logradouro}
⛩BAIRRO: ${x.bairro}
⛩LOCALIDADE : ${x.localidade}
⛩UF: ${x.uf}
⛩IBGE: ${x.ibge}
⛩GIA: ${x.gia}
⛩DDD: ${x.ddd}
⛩SIAFI: ${x.siafi}`
reply(k)
break

case 'placa':
if(!isPremium) return reply(enviar.msg.premium)  
if (args.length == 0) return reply(`Exemplo: ${prefix + command} 54330235`)
query = args.join(" ")
get_result = await fetchJson(`http://api.ifindconsultas.tk/?token=2d6de38e-6c92-485e-bacb-db64139f8a02&placa=${query}`)
x = get_result
k = `CPF : ${x.cpf}
NOME: ${x.nome}
PLACA : ${x.placa}
CHASSI : ${x.chassi}
RENAVAM : ${x.renavam}
CIDADE : ${x.cidade}
UF : ${x.uf}
CATEGORIA : ${x.categoria}
COMBUSTÍVEL : ${x.combustivel}`
reply(k)
break 

case 'ddd':
if(!isPremium) return reply(enviar.msg.premium)
if (args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
conn.sendMessage(from, {text: dddlist}, {quoted: info})	
break

case 'encurtalink':
if(!isPremium) return reply(enviar.msg.premium)
if(args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://youtube.com/c/M.scheyot`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
await limitAdd(sender)
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'repetir':
rsp = q.replace(new RegExp("[()+-/ +a/b/c/d/e/fghijklmnopqrstwuvxyz/]", "gi"), "")
reply(rsp)
break

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
console.log('[', color('EVAL', 'silver'),']', color(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(rsp))
return reply(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 


case 'status':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
statuszada =

`
╭══• ೋ•✧๑🥂๑✧•ೋ •══╮ 
               ${NomeDoBot} 
                   🚨𝐒𝐓𝐀𝐓𝐔𝐒🚨
╰══• ೋ•✧๑🥂๑✧•ೋ •══╯   
╭─╼━══━━≺💎≻━━══━╾─╮
╎✮ۣۜۜ͜͡🍫 Autoban: ${isAdeusCara ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Bemvindo: ${isWelkom ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Jogos: ${isModobn ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Autofigu: ${isAutofigu ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antiimg: ${isAntiImg ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antivideo: ${isAntiVid ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antiaudio: ${isAntiAudio ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antisticker: ${isAntiSticker ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antilink: ${isAntiLinkHard ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antifake: ${isAntifake ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antinotas: ${isAntiNotas ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Anticontato: ${isAntiCtt ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Anticatalogo: ${isAnticatalogo ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Limitecaracteres: ${isAntiFlood ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Leveling: ${isLevelingOn ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Simih: ${isSimi ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Simih2: ${isSimi2 ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antipv: ${isAntiPv ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antiligar: ${isAnticall ? '✓' : '✕'}
╎✮ۣۜۜ͜͡🍫 Antipalavrão: ${isPalavrao ? '✓' : '✕'}
╰─╼━══━━≺💎≻━━══━╾─╯`
wew = await getBuffer(`${logo}`)
conn.sendMessage(from, {image: wew, caption: statuszada, thumbnail: null}) 
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
conn.groupUpdateSubject(from, `${blat}`)
conn.sendMessage(from, {text: '💎Sucesso, alterou o nome do grupo💎'}, {quoted: info})
break

case 'descgp':
case 'descriçãogp':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
conn.groupUpdateDescription(from, `${blabla}`)
conn.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: info})
break

case 'setfotogp':
case 'fotogp':  
addFilter(from)
if (!isGroup) return reply('Só pode ser utilizado em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser ADM')
if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
await conn.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'atividade':
case 'atividades':  
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
teks = `*Atividade dos membros do grupo:*\n\n`
mem = []
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) {
var indnum = numbersIds.indexOf(obj.id)
teks += `*• Membro:* @${countMessage[ind].numbers[indnum].id.split('@')[0]}\n*• Comandos:* ${countMessage[ind].numbers[indnum].cmd_messages}\n*• Mensagens:* ${countMessage[ind].numbers[indnum].messages}\n\n----------------------------------\n\n`
} else {
teks += `*• Membro:* @${obj.id.split('@')[0]}\n*• Comandos:* 0\n*• Mensagens:* 0\n\n----------------------------------\n\n`
}
mem.push(obj.id)
}
conn.sendMessage(from, {text: teks, contextInfo:{mentionedJid: mem}}, {quoted: info})
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'linkgp':
case 'linkgroup':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await conn.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'grupo': 
if (!isGroup) return reply(`SÓ EM GRUPO`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
reply(`*💎GRUPO ABERTO COM SUCESSO💎*`)
await conn.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'f') {
reply(`*🔥GRUPO FECHADO COM SUCESSO🔥*`)
await conn.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
ppUrl = await conn.profilePictureUrl(from, 'image')
buffer = await getBuffer(ppUrl)
const metadata = await conn.groupMetadata(from) 
conn.sendMessage(from, {image: buffer, caption: `*NOME* : ${groupName}\n*MEMBRO* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n*DESCRIÇÃO* : ${metadata.desc}`, thumbnail: null}, {quoted: info})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
membros = (groupId, membros1) => {
array = []
for (let i = 0; i < membros1.length; i++) {
array.push(membros1[i].id)
}
return array
}
var yd = membros(from, groupMembers)
if((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'sticker')
fs.writeFileSync(rane,img)
fig = fs.readFileSync(rane)
var options = {
sticker: fig,  
mentions: yd
}
conn.sendMessage(from, options)
} else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(media.mimetype))
img = await getFileBuffer(media, 'image')
fs.writeFileSync(rane,img)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {image: buff, mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(media.mimetype))
vid = await getFileBuffer(media, 'video')
fs.writeFileSync(rane,vid)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {video: buff, mimetype: 'video/mp4',mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(media.mimetype))
aud = await getFileBuffer(media, 'audio')
fs.writeFileSync(rane,aud)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {audio: buff, mimetype: 'audio/mp4', ptt:true,mentions: yd}, {quoted: info})
} else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(rane,doc)
buff = fs.readFileSync(rane)
conn.sendMessage(from, {document: buff, mimetype : 'text/plain',mentions: yd},{quoted: info})
} else if(budy){
if(q.length < 1) return reply('Citar oq?')
conn.sendMessage(from, {text: body.slice(command.length + 2), mentions: yd})
} else {
reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
}
break

case 'marcar':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
kael = fs.readFileSync("./audios/marcar.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})  
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!') 
}
break

case 'marcar2':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `✮ۣۜۜ͜͡➥  @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
} catch {
reply('ERROR!!')
}
break

case 'marcarwa':
try {
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')  
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
conn.sendMessage(from, {text: teks}, {quoted: info})
} catch {
reply('ERROR!!')
}
break

case 'kick':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
if(numerodono.includes(mentioned)) return reply("Não pode remover meu dono 😡")
if(botNumber.includes(mentioned)) return reply("Você acha que vou banir eu mesmo??, troxa você em..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque a')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'SEU DESEJO É UMA ORDEM ADMIN! ALVO REMOVIDO😡 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
} else {
mentions(`SEU DESEJO É UMA ORDEM! ALVO REMOVIDO COM SUCESSO🥰🔥 : @${mentioned[0].split('@')[0]}`, mentioned, true)
conn.groupParticipantsUpdate(from, mentioned, 'remove')
}
kael = fs.readFileSync("./audios/ban.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
break

case 'reviver':
if (!isGroup) return reply('Esse comando so funciona em grupo, sinto muito')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
add = info.message.extendedTextMessage.contextInfo.participant
sleep(5000)
const response2 = await conn.groupParticipantsUpdate(from, [add], "add" )
reply('A criatura foi adicionado de volta ao grupo Fml😒.')
break

case 'add':
if(!SoDono) return reply('Comando Desativado por questões de segurança, estava ocasionandoo Ban do número do bot.')
if(!isGroupAdmins) return reply('❌ VOCÊ NÃO É ADM PRA UTILIZAR ESTE COMANDO, DESCULPE, QUEM SABE UM DIA 😂')  
if(!isBotGroupAdmins) return reply("Não sou adm pra executar esta ação..")
if(q.length < 1) return reply('Quer adicionar uma alma?')  
try {
tdt = args[0]
if(tdt.length < 1) return reply(`Digita o número que deseja add, exemplo: ${prefix}add 5512978986457`)
if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) {
adduser = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
if(groupMetadata.participants.includes(adduser)) return reply('Esse membro já está no grupo, como você vai adicionar??? ')
reply('Adicionando em, 3 2 1🥂...')  
setTimeout(async() => {
responser = await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) return reply('Erro, conta privada do usuário')
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
if(groupMetadata.participants.includes(adduser)) return reply('já tá no grupo. como eu vou adicionar alguém quê já tá aqui??🤔')  
reply('Adicionando em, 3 2 1🥂...')  
adduser = info.message.extendedTextMessage.contextInfo.participant
setTimeout(async() => {
responser =  await conn.groupParticipantsUpdate(from, [adduser], "add")
}, 5000)
o = responser.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) return reply('Falhou, porque em privado ')
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo')
}
} catch {
reply('Izi, se não for adicionado provavelmente ele privou só para contatos adicionar ele em grupo.')
}
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
conn.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'ban': case 'banir':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('você acha que eu vou banir eu mesma?😂, estou decepcionada com você😔💔')
if(numerodono.includes(num)) return reply('Não posso remover meu dono idiota💁‍♀️')
menc = [`${num.split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `SEU DESEJO É UMA ORDEM ADMIN🥰 O ALVO @${num.split('@')[0]} FOI REMOVIDO COM SUCESSO!!🥂`, mentions: menc}, {quoted: info})
conn.groupParticipantsUpdate(from, [num], 'remove')
kael = fs.readFileSync("./audios/banido.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true}
)
} else { 
reply('Responda a mensagem da pessoa💁‍♀️')
}
break


case 'ban2': case 'banir2':
if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')

texto = args.join(" ")
.replace("10s", "10000")
.replace("20s", "20000")
.replace("30s", "30000")
.replace("40s", "40000")
.replace("50s", "50000")
.replace("1m", "60000")

if(!Number(texto)) return reply(`Determine o tempo que você quer que eu remova o membro que cometeu a infração..\nExemplo : ${prefix}ban 60000\n 60 mil é igual a 60 segundos == 1 minuto..`)
if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
num = info.message.extendedTextMessage.contextInfo.participant
if(botNumber.includes(num)) return reply('Não sou beste de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(num)) return reply('Não posso remover meu dono 🤧')
conn.sendMessage(from, {text: `Olá ${num.split('@')[0]}, você será banido em ${texto}s/m/h por descumprimento das regras ou justiça por algo fora do conteúdo do grupo, se for uma mensagem ou imagem/foto ilegal apague imediatamente..`, mentions: [num]}, {quoted: info})
setTimeout(async() => {
num = info.message.extendedTextMessage.contextInfo.participant
if(!num) return reply("A mensagem foi apagada...")
conn.groupParticipantsUpdate(from, [num], 'remove')
}, `${texto}`)
} else { 
reply('Responda a mensagem da pessoa')
}
break


//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'apresentar':
case 'apr':  
inff = `Bem♤vindo(a) ao grupo : ${groupName}


💎•𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
conn.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply('Qual foi membro comum?')
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🥋ɴᴏᴍᴇ:
𒋨·࣭࣪̇💎ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 𝐁𝐄𝐌 𝐕𝐈𝐍𝐃𝐎 𝐒𝐄𝐔𝐒 𝐅𝐈𝐋𝐇𝐎𝐒 𝐃𝐀 𝐏𝐔𝐓𝐀🔥`
conn.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
                  💎𝑩𝒆𝒎🔥𝑽𝒊𝒏𝒅𝒐💎
       »»————- ★ - ★ ————-««         
🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🥋◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
conn.sendMessage(from, {text: bla}, {quoted: selo})
break

case 'autobangg':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
var ind = dbids.indexOf(from)
if(isAdeusCara) {
adeuscara[ind].actived = true
} else {
adeuscara.push({
groupId: from,
actived: true,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Ativou com sucesso o recurso de autoban neste grupo✔️`)
} else if (Number(args[0]) === 0) {
var ind = dbids.indexOf(from)						
if(isAdeusCara) {
adeuscara[ind].actived = false
} else {
adeuscara.push({
groupId: from,
actived: false,
number: []
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`Desativou com sucesso o recurso de autoban neste grupo✔️`)
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'listaban':
case 'listban':
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('Nenhum Número não foi adicionado😒')
teks = '*Números que vou moer na porrada se voltar 😡:*\n'
for(i=0;i<adeuscara[ind].number.length;++i) {
teks += `➤ *${adeuscara[ind].number[i]}*\n`
}
teks += '*Esses ai vou da umas pauladas🤬'
reply(teks)
break  

case 'listagp': //case by: Bielzinho-Bot
if (!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU MESTRE ^-^```')
tdufg = await store.chats.all()
ingfoo = await getGroup(tdufg)
teks1 = `🔰L I S T A  D E  G R U P O S🔰\n*Total de Grupos : ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• *Nome do Grupo* : ${ingfoo[i].subject}\n• *Id do Grupo* : ${ingfoo[i].id}\n• *Criado* : ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n• *Total de Membros* : ${ingfoo[i].participants.length}\n\n`
}
reply(teks1)
break

case 'addautorm':
case 'addautoban':
case 'listanegra':  
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Cade o número?')
var ind = dbids.indexOf(from)
if(isAdeusCara) {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")  
var numind = adeuscara[ind].number.indexOf(listng)
if(numind >= 0) return reply('*Esse Número ja esta incluso*')
adeuscara[ind].number.push(listng)
} else {
listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")    
adeuscara.push({
groupId: from,
actived: false,
number: [listng]
})
}
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número adicionado a lista de autoban*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins && !SoDono) return reply('Precisa ser Dono')
if (args.length < 1) return reply('Diga o numero sem espaço, + ou traço')
if (isNaN(args[0])) return reply('Diga o numero sem espaço, + ou traço')
var ind = dbids.indexOf(from)
if(!isAdeusCara) return reply('*Nenhum Número não foi adicionado*')
var numind = adeuscara[ind].number.indexOf(args[0])
if(numind < 0) return reply('*Esse número não está incluso*')
adeuscara[ind].number.splice(numind, 1)
fs.writeFileSync('./datab/grupos/adeuscara.json', JSON.stringify(adeuscara, null, 2) + '\n')
reply(`*Número removido a lista de autoban*`)
break

case 'banghost':
case 'banghosts':  
if(!SoDono && !isnit) return reply("ESSE COMANDO SÓ PODE SER USADO POR MEU MESTRE!.")
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) >= 0) {
for(let obj of groupMembers) {
if(numbersIds.indexOf(obj.id) >=0) { 
var indnum = numbersIds.indexOf(obj.id)
if(countMessage[ind].numbers[indnum].messages <= args[0]) {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
} else {
if(groupAdmins.includes(obj.id)) {
mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
} else {
conn.groupParticipantsUpdate(from, [obj.id], 'remove')
}
}
}
}
break

case 'correio':
txt = body.slice(10)
txtt = args.join(" ")
txt1 = txt.split("/")[0];
txt2 = txtt.split("/")[1];
if(!txt) return reply('Cade o número da pessoa?')
if(!txtt) return reply('Cade a mensagem do correio??')
if(txt.includes("-")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(txtt.includes("+")) return reply('Tem que ser o número junto sem +, e não pode tá separado da /')
if(!txtt.includes("/")) return reply(`Exemplo: ${prefix}correio n5512978986457/Oi Amor, sdds`)
bla = 
`╭┄━┄━┄━┄━┄━╮
┞┧ 𝐕𝐎𝐂𝐄̂ 𝐑𝐄𝐂𝐄𝐁𝐄𝐔 𝐔𝐌
┞┧𝑪𝑶𝑹𝑹𝑬𝑰𝑶 𝑨𝑵𝑶̂𝑵𝑰𝑴𝑶🤫.
┞┧Msg💌: ${txt2}
┞┧
╰┄━┄━┄━┄━┄━╮`
conn.sendMessage(`${txt1}@s.whatsapp.net`, {text: bla})
break

case 'nome-bot':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = args.join(" ") 
setting.NomeDoBot = NomeDoBot
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O nome do seu bot foi alterado com sucesso para : ${setting.NomeDoBot}`)
break

case 'nick-dono':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NickDono = args.join(" ")
setting.NickDono = NickDono
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O Nick Do Dono foi configurado para : ${setting.NickDono}`)
break

case 'numero-dono':
if (!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
reply(`O número dono foi configurado com sucesso para : ${q}\n\n_ REINICIANDO EM 3. 2 . 1🔥`)
numerodonoofc = setting.numerodono 
numerodonoofc = args.join(" ")
setting.numerodono = numerodonoofc
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
break

case 'prefixo-bot': case 'setprefix':
if (args.length < 1) return
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem 2 vez com esse comando..')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
logoslink.logo = logo
logo = res
fs.writeFileSync('./logos/logos.json', JSON.stringify(logoslink, null, '\t'))
reply(`A foto do menu foi alterada com sucesso para: ${logo}`)
} else {
reply(`Mande uma imagem/vídeo com a legenda ${prefix + command}`)
}
break

case 'setprefixs':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./dono/settings.json', JSON.stringify(setting, null, '\t'))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
await conn.groupUpdateSubject(from, `${body.slice(9)}`)
await conn.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: info})
break

case 'fotobot':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
await conn.updateProfilePicture(botNumber, buff)
reply('Obrigado pelo novo perfil😗')
break

case 'clonar':
if (!SoDono  && !isnit && !issupre && !ischyt) return reply('Você quem é o proprietário?')
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Marque a pessoa que você quer clonar\n\n*EXEMPLO:* clone @')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.id === mentioned)
try {
pp = await conn.profilePictureUrl(id)
buffer = await getBuffer(pp)
conn.updateProfilePicture(botNumber, buffer)
mentions(`Foto do perfil atualizada com sucesso, usando a foto do perfil @${id.split('@')[0]}`, [id], true)
} catch (e) {
reply('Putz, deu erro, a pessoa deve estar sem foto 😔')
}
break

case 'leveling':
if (!isGroup) return reply('Só em Grupo')
if (!isGroupAdmins) return reply('Você precisa ser adm')
if (args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if (Number(args[0]) === 1) {
if (isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
_leveling.push(from)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.levelon) 
} else if (Number(args[0]) === 0) {
if (!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
_leveling.splice(from, 1)
fs.writeFileSync('./datab/usuarios/leveling.json', JSON.stringify(_leveling))
reply(enviar.leveloff)
} else {
reply('「* Adicionar parâmetro 1 ou 0 ')
}
break

case 'ganharlevel':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
addLevelingLevel(sender, 10)
reply("Olá chefe, foi adicionado 10 Level para você 🙂")
break

case 'ganharxp':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")  
addLevelingXp(sender, 5000)
reply("Foi adicionado 5000 mil de XP para você 🙂")
break

case 'level':
if (!isLevelingOn) return reply(`*O recurso de level está Desativado, para ativar consulte algum adm e mande ele digitar : ${prefix}leveling 1`)
if (!isGroup) return reply(enviar.msg.grupo)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(enviar.levelnol)
sem = sender.replace('@s.whatsapp.net','')
                resul = `     
               💎𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊💎  
╭─╼━══━≺🎠≻━━══━╾╮           
      🥋 𝑵𝑰𝑪𝑲: ${pushname}
      🔥𝐍𝐔́𝐌𝐄𝐑𝐎: ${sender.split("@")[0]} 
      💎𝐏𝐀𝐓𝐄𝐍𝐓𝐄: ${patt}             
      🤑𝐗𝐏: ${userXp} 
      🏆𝐋𝐄𝐕𝐄𝐋: ${userLevel}
╰╼━══━━≺🍭≻━━══━╾╯`
await conn.sendMessage(from, {text: resul}, {quoted: info})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break

case 'bcgp':
case 'bcgc':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('.......')
fgp = await groupMembers
var nomor = info.participant
if (isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (let _ of fgp) {
conn.sendMessage(_.id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n\nGrupo: ${groupName}\n Número: wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`})
}
reply('')
} else {
for (let _ of fgp) {
sendMess(_.id, `🎗TRANSMISSÃO🎗\n\nGrupo : ${groupName}\n Número : wa.me/${(sender.split('@')[0])}\nMensagem : ${body.slice(6)}`)
}
reply('💎Grupo de transmissão bem-sucedido💎')
} 
break


case 'dono1':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
dono1 = body.slice(8)
nescessario.dono1 = dono1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`🔥Agora contem um segundo dono(a) alterado com sucesso para: ${dono1}`)
break

case 'dono2':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono2 = body.slice(8)
nescessario.dono2 = dono2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono3 = body.slice(8)
nescessario.dono3 = dono3
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono4 = body.slice(8)
nescessario.dono4 = dono4
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono5 = body.slice(8)
nescessario.dono5 = dono5
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if (args.length < 1) return
if (!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
dono6 = body.slice(8)
nescessario.dono6 = dono6
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
p = `☕LISTA DOS MEUS DONOS☕
      ${setting.NomeDoBot} 

MEU DONO OFICIAL💎: ${setting.numerodono}

- [ 1 ] ${nescessario.dono1}\n- [ 2 ] ${nescessario.dono2}\n- [ 3 ] ${nescessario.dono3}\n- [ 4 ] ${nescessario.dono4}\n- [ 5 ] ${nescessario.dono5}\n- [ 6 ] ${nescessario.dono6} `
reply(p)
break

case 'online':   
case 'onlines':  //case by: ᬊ͜͡𝑩𝑰𝑬𝑳𝒁𝑰𝑵𝑯𝑶.𝑬𝑿𝑬ᵒᶠᶜ
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[ido]), conn.user.id]
conn.sendMessage(from, {text: 'Pessoas online do gp:\n\n' + online.map(v => '• @' + v.replace(/@.+/, '')).join`\n`}, {quoted: info})
break

case 'admins':
case 'adms':
case 'listaadmins':   
if (!isGroup) return reply(enviar.msg.grupo)
ytb = `ESSE SÃO OS ADMINS DO GRUPO:${groupMetadata.subject}*\nTOTAL: ${groupAdmins.length}\n\n^-^`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break








case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins || !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
msgz = args.join(" ")

msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Horario: msgtmpol, 
Data: datinhaofc, 
Tabela: msgz
}

if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/tabela/tabela-" + from + ".json")) {
fs.unlinkSync("./func/tabela/tabela-" + from + ".json");
fs.writeFileSync(`./func/tabela/tabela-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo : ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./func/tabela/tabela-${from}.json`)); 

blity = `- ⏰ Horário que criou a Tabela : ${tabelagpofc.Horario}\n\n- 🗓️ Data que criou a Tabela : ${tabelagpofc.Data}\n\n - Tabela : ${tabelagpofc.Tabela}`

conn.sendMessage(from, {text: blity}, {quoted: info})
break

case 'alugado': case 'tempodesair': case 'tempo-aluguel': case 'aluguel': 
if(!SoDono && !info.key.fromMe) return 
txt = args.join(" ")
if(!txt.includes("/")) return reply(`O formato da data é assim : 03/04/22`)
msgz = args.join(" ").replace(" ", "")

datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');

var blarpty = {
Data_que_alugou: datinhaofc, 
Data_de_sair: msgz
}

if(!fs.existsSync(`./func/sairgp/sairgp-${from}.json`)) {
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
} else {
if (fs.existsSync("./func/sairgp/sairgp-" + from + ".json")) {
fs.unlinkSync("./func/sairgp/sairgp-" + from + ".json");
fs.writeFileSync(`./func/sairgp/sairgp-${from}.json`,
JSON.stringify(blarpty, null, 2));
}
}
reply(`Tempo de quando vai expirar o aluguel do bot e irei sair na data exata..`)
break

case 'ausente': case 'off': case 'afk':
if(!SoDono) return reply("Comando especial para o dono.")
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
msgz = args.join(" ")

var catmsgaus = {
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: msgz
}

if(!fs.existsSync(`./func/afk/afk-@${nmrdnofc}.json`)) {
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
} else {
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
fs.writeFileSync(`./func/afk/afk-@${nmrdnofc}.json`,
JSON.stringify(catmsgaus, null, 2));
}
}
reply(`Menssagem de ausência criada com sucesso mestre! até mais 💎^-^...`)
break

case 'ativo': case 'on': case 'voltei':
if(!SoDono) return reply("Comando especial para o dono.")
nmrdnofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")
if (fs.existsSync("./func/afk/afk-@" + nmrdnofc + ".json")) {  
fs.unlinkSync("./func/afk/afk-@" + nmrdnofc + ".json");
reply("Bem vindo de volta, agora você está online💎🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência🙄💎...")
}
break

case 'serpremium':
case 'serprem':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(`${setting.numerodono}@s.whatsapp.net`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
reply(`Pronto ${setting.numerodono} você foi adicionado na lista premium🔥😏.`)
break



case 'addpremium': case 'darpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
if (!budy.includes("@55")) {
mentioned = info.message.extendedTextMessage.contextInfo.participant
menca = [`${mentioned.split("@")[0]}@s.whatsapp.net`]
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
conn.sendMessage(from, {text: `@${mentioned.split("@")[0]} PARABÉNS!!🥳 VOCÊ ACABA DE RECEBER A COROA DE USUÁRIO PREMIUM DO GRUPO. AGORA VOCÊ PODE USAR O MENU PREMIUM🎗🥳`, mentions: menca}, {quoted: info})  
} else { 
mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net"
bla = premium.includes(mentioned)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/premium.json', JSON.stringify(premium))
tedtp = args.join(" ").replace("@", "")
menc = [`${tedtp}@s.whatsapp.net`]
conn.sendMessage(from, {text: `@${tedtp} PARABÉNS!!🥳 VOCÊ ACABA DE RECEBER A COROA DE USUÁRIO PREMIUM DO GRUPO. AGORA VOCÊ PODE USAR O MENU PREMIUM🎗🥳`, mentions: menc}, {quoted: info})
}
break 

case 'delpremium':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
teks = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
bla = premium.includes(teks)
if(!bla) return reply("*Esse número não tem a coroa premium :( como vou remover?💁‍♀️*")
processo = premium.indexOf(teks)
premium.splice(processo, 1)
fs.writeFileSync('./datab/usuarios/premium.json',JSON.stringify(premium))
conn.sendMessage(from, {text: `*@${mentioned[0].split('@')[0]} ACABA DE PERDER A COROA PREMIUM! SINTO MUITO💔😔...*`, mentions: menc}, {quoted: info})
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲🎠❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ*🔥`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
break
case 'clearchat':
case 'limparchat':  
case 'limparmsg':  
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
await conn.chatModify({ clear: { message: { id: String, fromMe: true } } }, from, [])
reply("💎CHAT-LIMPO🔥")
break

//=============BOTÕES DE ADM=============\\



case 'autoban':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *AUTO BAN*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}autobangg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}autobangg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'bemvindo':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *BEM VINDO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}bemvindogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}bemvindogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'bemvindo2':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *BEM VINDO2*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}bemvindo2gg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}bemvindo2gg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break



case 'jogos':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *JOGOS*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}jogosgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}jogosgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'autofigu':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *AUTO FIGURINHA*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}autofigugg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}autofigugg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antiimg':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI IMAGEM*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antiimggg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antiimggg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antivideo':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI VÍDEO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antivideogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antivideogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antiaudio':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI ÁUDIO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antiaudiogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antiaudiogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antidocumento':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI DOCUMENTO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antidocumentogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antidocumentogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antisticker':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI STICKER*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        }
`, ` `, [{buttonId: `${prefix}antistickergg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antistickergg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break


case 'antilinkgp':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI LINK GP*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antilinkgpgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antilinkgpgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break


case 'antipalavrao':
case 'antipalavrão':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI PALAVRÃO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antipalavrãogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antipalavrãogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break




case 'antiligar':
case 'anticall':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI LIGAR*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antiligargg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antiligargg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break




case 'autoresposta':
if (!isGroup) return reply('*Comando usado apenas em grupo.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `
   *AUTO RESPOSTA*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                       
`, ` `, [{buttonId: `${prefix}autorespg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}autorespg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'autorespg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!q) return reply('1 pra ligar / 0 pra desligar')
if (q === '1'){
if (!isAutoresp) return reply ('Já está ativo💁‍♀️')
processo = autoresp.indexOf(from)
autoresp.splice(processo, 1)
fs.writeFileSync('./datab/grupos/autoresposta.json',JSON.stringify(autoresp, null, 2))
reply('Ativou com sucesso, o recurso de Auto Resposta neste grupo💎')
}
if (q === '0'){
if (isAutoresp) return reply ('Já está desativado💁‍♀️')
autoresp.push(from)
fs.writeFileSync('./datab/grupos/autoresposta.json', JSON.stringify(autoresp, null, 2))
reply('Desativou com sucesso o recurso de Auto Resposta neste grupo🔥')
}
break



case 'modobrincadeiras':
case 'modobrincadeira':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *MODO BRINCADEIRA🥳*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}modobrincadeiragg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}modobrincadeiragg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break






case 'antiporno':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI PORNO😡*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antipornogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antipornogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'nsfw':
case '+18':
case '18':  
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *MODO +18😈*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}+18gg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}+18gg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break




case 'antifake':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI FAKE*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antifakegg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antifakegg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antinotas':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI NOTAS💸*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antinotasgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antinotasgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antipv':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
sendBimg(from, `${logo}`, `

             *ANTI PV*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}antipvgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antipvgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break




case 'anticontato':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI CONTATO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}anticontatogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}anticontatogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'anticatalogo':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANTI CATÁLOGO*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}anticatalogogg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}anticatalogogg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'limitecaracteres':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

   *LIMITE DE CARACTERES*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}limitecaracteresgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}limitecaracteresgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'anagrama':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *ANAGRAMA*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}anagramagg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}anagramagg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'quizanimais':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *QUIZ DE ANIMAIS*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}quizanimaisgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}quizanimaisgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'leveling':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *LEVEL DE MEMBROS*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}levelinggg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}levelinggg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'simih':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *SIMI*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}simihgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}simihgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'simih2':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
sendBimg(from, `${logo}`, `

   *SIMI 2*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}                                        
`, ` `, [{buttonId: `${prefix}simih2gg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}simih2gg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

case 'antilink':
if (!isGroup) return reply('*Comando usado apenas em 𝑮𝒓𝒖𝒑𝒐.*')
if (!isGroupAdmins) return reply('*Somente adm pode usar este comando.*')
if (!isBotGroupAdmins) return reply('*Bot precisa ser adm, para usar este comando.*')
sendBimg(from, `${logo}`, `

                 *ANTI LINK*

✮ۣۜۜ͜͡𝑷𝒆𝒅𝒊𝒖 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  ${pushname}

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐: ${groupName}           ${NomeDoBot}`, ` `, [{buttonId: `${prefix}antilinkgg 1`, buttonText: {displayText: `𝘼𝙏𝙄𝙑𝘼𝙍💎`}, type: 1},
{buttonId: `${prefix}antilinkgg 0`, buttonText: {displayText: `𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝙍🔥`}, type: 1}])
break

//=======================================\\

case 'addpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
const bw = body.slice(12)
palavra.push(bw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão adicionado com sucesso!')
await limitAdd(sender)
break

case 'delpalavra':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
let dbw = body.slice(12)
palavra.splice(dbw)
fs.writeFileSync('./datab/grupos/palavras.json', JSON.stringify(palavra))
reply('Palavrão removido da lista com sucesso!')
await limitAdd(sender)
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
let lbw = `Esta é a lista de palavrão\nTotal : ${palavra.length}\n`
for (let i of palavra) {
lbw += `➸ ${i.replace(palavra)}\n`
}
await reply(lbw)
await limitAdd(sender)
break 

case 'legendabv':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelcomed) {
var ind = groupIdWelcomed.indexOf(from)
welcome_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*Mensagem de boas vindas alteradas com sucesso!🍭*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group.push(json)
fs.writeFileSync('./datab/grupos/welcomegp.json', JSON.stringify(welcome_group, null, 2) + '\n')
reply('*💎Mensagem de boas vindas criada com sucesso!🔥*')
}

break

case 'legendasaiu':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*🔥Mensagem de saída alteradas com sucesso!💎*')
} else {
var json = {
id: from,
msg: teks
}
bye_group.push(json)
fs.writeFileSync('./datab/grupos/byegp.json', JSON.stringify(bye_group, null, 2) + '\n')
reply('*Mensagem de saída criada com sucesso!*')
}
break

case 'legendabv2':  
if(!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelcomed2) {
var ind = groupIdWelcomed2.indexOf(from)
welcome_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
welcome_group2.push(json)
fs.writeFileSync('./datab/grupos/welcomegp2.json', JSON.stringify(welcome_group2, null, 2) + '\n')
reply('*Mensagem de boas vindas2 criada com sucesso!*')
}
break

case 'legendasaiu2':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só ADM pode utilizar este tipo de Comando.`)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isByed) {
var ind = groupIdBye.indexOf(from)
bye_group2[ind].msg = teks
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 alteradas com sucesso!*')
} else {
var json = {
id: from,
msg: teks
}
bye_group2.push(json)
fs.writeFileSync('./datab/grupos/byegp2.json', JSON.stringify(bye_group2, null, 2) + '\n')
reply('*Mensagem de saída2 criada com sucesso!*')
}
break

case 'deletar':  case 'apagar':  case 'delete':   case 'del':  case 'd':
if (!isGroup)return reply(enviar.msg.grupo)
if (!SoDono && !isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender }})
.catch((err) => { 
console.log(err)
reply('A mensagem não foi enviado pelo bot...')
})
break

case 'fundobemvindo':
case 'fundobv':  
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligargg':
case 'antiligacaogg':  
case 'antiligaçãogg':  
try {
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAnticall) return reply('Ja esta ativo')
anticall.push('Ativado')
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify(anticall))
reply('Ativou com sucesso o recurso de antiligação no bot✔️')
} else if (Number(args[0]) === 0) {
if (!isAnticall) return reply('Ja esta Desativado')  
fs.writeFileSync('./datab/usuarios/anticall.json', JSON.stringify([]))
reply('🔥Desativou com sucesso o recurso de antiligação no bot️🔥')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Falha ao ativar')
}
break

case 'antipvgg':
if (!SoDono) return reply(`Apenas dono pode ativar/desativar essa função🥲..`)
if (args.length < 1) return reply('🔒1 pra ligar / 0 pra desligar🔒')
if (Number(args[0]) === 1) {
if (isAntiPv) return reply('🔒Ja esta ativo🔒')
antipv.push('Ativado')
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(antipv))
reply('💎 Ativou com sucesso o recurso de Anti Privado 💎')
} else if (Number(args[0]) === 0) {
if (!isAntiPv) return reply('🔓Ja esta Desativado🔓')
pesquisar = 'Ativado'
processo = antipv.indexOf(pesquisar)
while(processo >= 0){
antipv.splice(processo, 1)
processo = antipv.indexOf(pesquisar)
}
fs.writeFileSync('./datab/usuarios/antipv.json', JSON.stringify(welkom))
reply('🔓Desativou com sucesso o recurso De ANTIPV️🔓')
} else {
reply('🔓1 para ativar, 0 para desativar🔓')
}
break

case 'antipvon':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe ) return reply('Apenas Meu Dono')
if (banChats) return await reply('já está ativo o modo antipv')
banChats = true
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "🔒Sucesso alterado para modo antipv, pv não poderá ser utilizado🔒"})
break

case 'antipvoff':
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return await reply('Apenas meu dono o owner')
if (!banChats) return await reply('Nao estava ativado ainda')
banChats = false
nescessario.banChats = banChats
fs.writeFileSync('./dono/nescessario.json', JSON.stringify(nescessario, null, '\t'))
await conn.sendMessage(from, {text: "tá bom mestre o modo antipv foi desligado, o pv tá liberado fml🥂."})
break

case 'block':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `@${mentioned[0].split('@')[0]} FOI PROIBIDO DE USAR MEUS COMANDOS! AGORA VOCÊ NÃO PODERÁ MAIS USAR MEUS COMANDOS IDIOTA🤬`
mentions(`${susp}`, mentioned, true)   
kael = fs.readFileSync("./audios/block.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
break

case 'unblock':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return  reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./datab/usuarios/banned.json', JSON.stringify(ban))
susp = `CERTO.MESTRE! O @${mentioned[0].split('@')[0]} FOI DESBANIDO E PODERÁ USAR MEUS COMANDOS NOVAMENTE!😒`
mentions(`${susp}`, mentioned, true)   
break

case 'blocklist':
jrc = 'ESSES SÃO OS ELEMENTOS QUÊ FORAM BLOQUEADOS DE USAR MEUS CMD😡 :\n'
for (let benn of ban) {
jrc += `~> @${benn.split('@')[0]}\n`
}
jrc += `Total : ${ban.length}`
reply(jrc.trim())
break


case 'bangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (isBanchat) return reply(`Este grupo ja está banido🤦‍♀️`)
bancht.push(from)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo banido com sucesso💎`)
break

case 'unbangp':
if (!isGroup) return reply(enviar.msg.grupo)
if (!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
let cur = bancht.indexOf(from)
bancht.splice(cur, 1)
fs.writeFileSync('./datab/grupos/banchat.json', JSON.stringify(bancht))
reply(`Grupo desbanido...`)
break

case 'limitec':
if(!SoDono  && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if (args.length < 1) return
if (!setTimeout && !info.key.fromMe) return reply(enviar.msg.donosmt)
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./datab/usuarios/flood.json', JSON.stringify(limitefll, null, '\t'))
reply(`${limitefl} foi adicionado como limite de antiflood🔥 `)
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
return eval(`(async() => { ${args.join(' ')}})()`)
}catch (e) {
reply(`${e}`)
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break




case 'speed':
case 'ping':
  if (!isGroup) return reply(enviar.msg.grupo)
if(!isPremium) return reply(enviar.msg.premium)
const varping = speed();
const ping = speed() - varping
uptime = process.uptime()
buttons = [
  {buttonId: `${prefix}menu`, buttonText: {displayText: '✮ۣۜۜ͜͡ 𝙈𝙀𝙉𝙐☆𝙇𝙄𝙎𝙏💎'}, type: 1}]
buttonMessage = {
    image: {url: `https://rafinha043-api.herokuapp.com/api/maker/texto?ping=${ping.toFixed(4)}&apikey=zpd4rLQy`},
   caption:`🌒𝑻𝑬𝑴𝑷𝑶 𝑨𝑻𝑰𝑽𝑶: ${kyun(uptime)}\n\n🎠𝑮𝑹𝑼𝑷𝑶: ${groupName}\n\n🥂𝑨𝑫𝑴𝑰𝑵𝑺:  ${groupAdmins.length}\n\n🥋𝑴𝑬𝑴𝑩𝑹𝑶𝑺: ${groupMembers.length}\n\n🎗𝑺𝑶𝑳𝑰𝑪𝑰𝑻𝑨𝑫𝑶 𝑷𝑶𝑹 : ${pushname}*\n\n🔥𝑵𝑼́𝑴𝑬𝑹𝑶 : ${sender.split("@")[0]}`,
    footerText: 'Hello World',
    buttons: buttons,
    headerType: 4
}
sendMsg = await conn.sendMessage(from, buttonMessage)
break





case 'novolink':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isGroup) return reply(enviar.msg.grupo)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
await conn.groupRevokeInvite(from)
enviar('(🔥𝑳𝑰𝑵𝑲 𝑫𝑶 𝑮𝑹𝑼𝑷𝑶 𝑭𝑶𝑰 𝑹𝑬𝑫𝑬𝑭𝑰𝑵𝑰𝑫𝑶 💎)')
} catch(e) {
console.log(e)
enviar(resposta.erro)
}
break

case 'falar':
case 'gtts':
if (args.length < 1) return conn.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: info})
const gtts = require('./armor/funcoes/gtts')(args[0])
if (args.length < 2) return conn.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: info})
dtt = body.slice(8)
ranm = getRandom('.m4a')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {audio: buffer, ptt:true}, {quoted: info})
fs.unlinkSync(rano)
})
})
break

case 'tagme':
members_id = []  
const tagme = `@${sender.split("@")[0]} ✔️`
members_id.push(sender.split("@s.whatsapp.net"))
await mentions(tagme, members_id, true)
break

case 'blockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está blockeado')
addComandos(from, args[0])
reply(`O comando ${args[0]} Foi blockeado`)
break

case 'unblockcmd':
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está  desbloqueado')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} Foi desblockeado`)
break

case 'listacomandos':
tkks = '╭─*「 *COMANDOS BLOCK* 」\n'
for (let V of getComandoBlock(from)) {
tkks += `│+  ${V}\n`
}
tkks += `│+ Total : ${getComandoBlock(from).length}\n╰──────*「 *${NomeDoBot}* 」*────`
await conn.sendMessage(from, tkks.trim(), extendedText, {quoted: info})
break

case 'avalie':
const avalie = body.slice(8)
if (args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if (args.length >= 400) return conn.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: info})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: tdptls }, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if (args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: teks1}, {quoted: info})
reply("mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if (args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if (args.length >= 800) return conn.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: info})
var nomor = info.participant
sug = `[ Sugestões ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${sugestao}`
await conn.sendMessage(`${setting.numerodono}@s.whatsapp.net`, {text: sug}, {quoted: info})
reply("mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'pesquisar': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat💎`)
reply(enviar.espere)
blap = await getBuffer(`http://aleatoryapi.herokuapp.com/api/pinterest?text=${q}&apikey=${keyale}`)
await conn.sendMessage(from, {image: blap, thumbnail: null}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'gerarlink':  
case 'imgpralink':    
try {
if (isQuotedImage) {
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande uma imagem com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'videourl':
case 'videopralink':
try {
if ((isQuotedVideo) && args.length == 0) {
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply(`Mande vídeo com a legenda ${prefix + command}`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔/ O limite do tamanho de vídeo que gero o link, é 30 segundos.')
}
break

case 'printsite':
case 'print':
try {
txt = args.join(" ")
if(txt.length < 8) return reply(`Digite qual site você deseja tirar o print, por Exemplo: ${prefix}printsite Google.com`)
reply(enviar.espere)
printimg = await getBuffer(`http://aleatoryapi.herokuapp.com/api/print?url1=${txt}&apikey=${keyale}`)
conn.sendMessage(from, {image: printimg}, {quoted: info}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'ytsearch2':
try {
psq = args.join(' ')
if(psq.length < 2) return reply(`O que você deseja encontrar?, diga o nome do vídeo ou da música, e irei informar os links que correspondem.`)
blar = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${psq}&apikey=${keyale}`)
pla = '==============\n\n'
for (let x of blar.resultado) {
pla += `Titulo: ${x.title}\n`
pla += `Link: ${x.url}`
pla += '\n\n=============\n\n'
}
reply(pla.trim())
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'instagram':
case 'instadw': 
try {  
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video/foto do instagram.')
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/instagram?url=${link}&apikey=${keyale}`)
s_video = await getBuffer(post.resultado[0].downloadUrl)
conn.sendMessage(from, {video: s_video}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'porno':
try {  
if(!isGroup) return reply(enviar.msg.isGroup)
if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
try {
var porno = await fetchJson(`https://mnazria.herokuapp.com/api/porn?search=${encodeURIComponent(q)}`, {method: 'get'})
} catch {
return await conn.sendMessage(from, {text: '𝐏𝐞𝐬𝐪𝐮𝐢𝐬𝐚 𝐧𝐚̃𝐨 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐝𝐚! 𝐓𝐞𝐬𝐭𝐞 𝐧𝐨𝐯𝐚𝐦𝐞𝐧𝐭𝐞 𝐜𝐨𝐦 𝐨𝐮𝐭𝐫𝐚𝐬 𝐩𝐚𝐥𝐚𝐯𝐫𝐚𝐬🌚.'}, {quoted: info})
}
const xvideos = []
for (let x of porno.result) {
let data = {
rowId: `${prefix}xvideo  `+ x.url,
title: x.title,
description: `𝑫𝒖𝒓𝒂𝒄̧𝒂̃𝒐: ${x.duration}`
}
xvideos.push(data)
}

const listMessageXvideos = {
  text: `𝑻𝒊́𝒕𝒖𝒍𝒐: ${q}`,
  footer: '🔥𝑺𝒆𝒍𝒆𝒄𝒊𝒐𝒏𝒆 𝒖𝒎𝒂 𝒅𝒂𝒔 𝒐𝒑𝒄̧𝒐̃𝒆𝒔 𝒆 𝒂𝒑𝒆𝒓𝒕𝒆 𝒆𝒎 𝒆𝒏𝒗𝒊𝒂𝒓🔥',
  title: "🔞𝐏𝐎𝐑𝐍𝐎 𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎🔞",
  buttonText: "😈𝙇𝙄𝙎𝙏𝘼 𝙋𝙊𝙍𝙉𝙊😈",
  sections: [
								{
									title: "Vídeos",
									rows: xvideos
								}
							]
}
sendMsg = await conn.sendMessage(from, listMessageXvideos, {quoted: selo})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break



case 'xvd':			
case 'xvds':
case 'xvideos':
case 'xvideo':
try {  
if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
try {
if (args.length < 1) return reply(`𝑽𝒐𝒄𝒆̂ 𝒑𝒓𝒆𝒄𝒊𝒔𝒂 𝒄𝒐𝒍𝒐𝒄𝒂𝒓 𝒖𝒎 𝒍𝒊𝒏𝒌🌚`)
if (!isUrl(args[0]) && !args[0].includes('https://xvideos.com/')) return reply(ind.error.Iv)
reply(`𝑬𝒏𝒗𝒊𝒂𝒅𝒐 𝒏𝒐 𝑺𝒆𝒖 𝒑𝒗 𝑫𝒍𝒄̧😈🌶`)
res = await fetchJson(`https://mnazria.herokuapp.com/api/porndownloadxvideos?url=${args[0]}`, {method: 'get'})
buffer = await getBuffer(res.mp4)
conn.sendMessage(sender, {video: buffer, mimetype: 'video/mp4'}, {quoted: info})
} catch (e) {
console.log(`Erro:`, color(e,'red'))
reply(`${e}`)
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break





///////////////////  INICIO PACKS //////////////


case 'saycat': case 'packsaycat': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}saycat`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/say?apikey=key24557'},
                    caption: "𝐒𝐀𝐘 𝐂𝐀𝐓💙",             
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'waifu': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}waifu`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/waifu?apikey=key24557'},
                    caption: "𝑾𝑨𝑰𝑭𝑼⛩",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'anya': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}anya`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🦄'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/anya?apikey=key24557'},
                    caption: "𝑨𝑵𝒀𝑨🍫",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'komi': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}komi`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/komi?apikey=key24557'},
                    caption: "𝑲𝑶𝑴𝑰💌",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'kuguya': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}kuguya`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/kaguya?apikey=key24557'},
                    caption: "𝑲𝑨𝑮𝑼𝒀𝑨💞",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'loli': case 'packloli': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}loli`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/loli?apikey=key24557' },
                    caption: "𝑳𝑶𝑳𝑰𝑰𝑰𝑰💖",
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'zero': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}zero`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/zero?apikey=key24557'},
                    caption: "𝒁𝑬𝑹𝑶❣",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break



case 'shota': case 'menushota': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}shota`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/shota?apikey=key24557'},
                    caption: "𝑺𝑯𝑶𝑻𝑨𝑨🥰",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'itsuki': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}itsuki`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/itsuki?apikey=key24557'},
                    caption: "𝑰𝑻𝑺𝑼𝑲𝑰🖤",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'chizuru': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}chizuru`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/chizuru?apikey=key24557'},
                    caption: "𝑪𝑯𝑰𝒁𝑼𝑹𝑼💜",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break








case 'hinata': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}hinata`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/hinata?apikey=key24557'},
                    caption: "𝑯𝑰𝑵𝑨𝑻𝑨🤎",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'sacura': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}sacura`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/sakura?apikey=key24557'},
                    caption: "𝑺𝑨𝑲𝑼𝑹𝑨💗",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'jima': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}jima`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/sakurajima?apikey=key24557'},
                    caption: "𝑺𝑨𝑲𝑼𝑹𝑨𝑱𝑰𝑴𝑨💎",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break









case 'zoro': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}zoro`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/zoro?apikey=key24557'},
                    caption: "𝒁𝑶𝑹𝑶💝",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break








case 'asuna': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}asuna`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/asuna?apikey=key24557'},
                    caption: "𝑨𝑺𝑼𝑵𝑨☺",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'akame': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}akame`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/akame?apikey=key24557'},
                    caption: "𝑨𝑲𝑨𝑴𝑬🩸",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'megumin': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}megumin`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/megumin?apikey=key24557'},
                    caption: "𝑴𝑬𝑮𝑼𝑴𝑰𝑵💘",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break









case 'naruto': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}naruto`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/naruto?apikey=key24557'},
                    caption: "𝑵𝑨𝑹𝑼𝑻𝑶🧧",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'nezuco': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}nezuco`, buttonText: {displayText: '✮ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤🍫'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/nezuko?apikey=key24557'},
                    caption: "𝑵𝑬𝒁𝑼𝑪𝑶🏮",                           buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break











///FIMMMM PACKs/////









////INICIO PACKS ±18//////

case 'h18': 
  try {
  if (!isNsfw) return reply(`Pra usar esse comando o modo +18 deve está ativo! se você for adm basta usar o CMD: ${prefix}+18 e clicar no botão ativar!`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}h18`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/hentai?apikey=zpd4rLQy'},
                    caption: "𝑯𝑬𝑵𝑻𝑨𝑰🌶",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'loli+18': case 'packloli+18': 
  try {
if (!isNsfw) return reply(`Esse comendo só pode ser utilizado quando o "MODO +18" estiver ativo! Se você for adm basta usar o comando ${prefix}+18 e clicar em "ATIVAR💎"`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}loli+18`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'http://rafinha043-api.herokuapp.com/api/hentai/nsfwloli?apikey=zpd4rLQy' },
                    caption: "𝑳𝑶𝑳𝑰𝑰𝑰🔥 +18",
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'Neko18': 
  try {
  if (!isNsfw) return reply(`Pra usar esse comando o modo +18 deve está ativo! se você for adm basta usar o CMD: ${prefix}+18 e clicar no botão ativar!`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}Neko`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/neko?apikey=key24557'},
                    caption: "𝑵𝑬𝑲𝑶😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break



case 'trap +18': case 'trap18': 
  try {
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}trap18`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://komippapi.herokuapp.com/trap?apikey=key24557' },
                    caption: "𝑻𝑹𝑨𝑷 +18🔥",
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break





case 'only': case 'onlyfans': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}only`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'https://komippapi.herokuapp.com/onlyfans?apikey=key24557'},
                    caption: "𝑶𝑵𝑳𝒀𝑭𝑨𝑵𝑺💋",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'ass':
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}ass`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/ass?apikey=zpd4rLQy'},
                    caption: "𝑨𝑺𝑺😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'bdsm': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}bdsm`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/bdsm?apikey=zpd4rLQy'},
                    caption: "𝑩𝑫𝑺𝑴🔥",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'blowjob': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}blowjob`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/blowjob?apikey=zpd4rLQy'},
                    caption: "𝑩𝑳𝑶𝑾𝑱𝑶𝑩😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'cuckold': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}cuckold`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/cuckold?apikey=zpd4rLQy'},
                    caption: "𝑪𝑼𝑪𝑲𝑶𝑳𝑫🔞",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'cum': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}cum`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/cum?apikey=zpd4rLQy'},
                    caption: "𝑪𝑼𝑴🔥",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break





case 'ero': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}ero`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/ero?apikey=zpd4rLQy'},
                    caption: "𝑬𝑹𝑶😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'femdom': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}femdom`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/femdom?apikey=zpd4rLQy'},
                    caption: "𝑭𝑬𝑴𝑫𝑶𝑴🤤",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'gang': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}gang`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/gangbang?apikey=VBpxGoqs'},
                    caption: "𝑮𝑨𝑵𝑮😏",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'foot': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}foot`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/foot?apikey=zpd4rLQy'},
                    caption: "𝑭𝑶𝑶𝑻🔥",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break








case 'glasses': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}glasses`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/glasses?apikey=zpd4rLQy'},
                    caption: "𝑮𝑳𝑨𝑺𝑺𝑬𝑺😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break





case 'jahy': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}jahy`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/jahy?apikey=zpd4rLQy'},
                    caption: "𝑱𝑨𝑯𝒀🔥",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break




case 'mastur': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}mastur`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/masturbation?apikey=zpd4rLQy'},
                    caption: "𝑴𝑨𝑺𝑻𝑼𝑹**💦",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'neko18': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}neko18`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/nsfwNeko?apikey=zpd4rLQy'},
                    caption: "𝑵𝑬𝑲𝑶😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break






case 'orgy': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}orgy`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/orgy?apikey=zpd4rLQy'},
                    caption: "𝑶𝑹𝑮𝒀🔞",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break







case 'tentacles': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}tentacles`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/tentacles?apikey=zpd4rLQy'},
                    caption: "𝑻𝑬𝑵𝑻𝑨𝑪𝑳𝑬𝑺😏",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break








case 'thighs': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}thighs`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/thighs?apikey=zpd4rLQy'},
                    caption: "𝑻𝑯𝑰𝑮𝑯𝑺🔥",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break








case 'yurih': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO " ATIVAR💎 "`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}yurih`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/yuri?apikey=zpd4rLQy'},
                    caption: "𝒀𝑼𝑹𝑰𝑯😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break









case 'zettai': 
  try {
  if (!isNsfw) return reply(`ESSE COMANDO SÓ PODE SER UTILIZADO COM O MODO (+18) ATIVO! CASO VOCÊ SEJA UM ADM, BASTA USAR O COMANDO   ${prefix}+18  E CLICAR NO BOTÃO "ATIVAR💎"`)
if (isBanned) return 
   reply(enviar.espere)
            let buttons = [
                    {buttonId: `${prefix}zettai`, buttonText: {displayText: '☆ۣۜۜ͜͡𝙋𝙧𝙤𝙭𝙞𝙢𝙤💋'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url:'http://rafinha043-api.herokuapp.com/api/hentai/zettaiRyouiki?apikey=zpd4rLQy'},
                    caption: "𝒁𝑬𝑻𝑻𝑨𝑰😈",                                     
                    buttons: buttons,
                    headerType: 4
                }
                conn.sendMessage(from, buttonMessage, { quoted: selo 
            })
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break











   //%%%/%%/%%%/%%%%  FIM PACKS 18  ////////////







case 'twitter':
try {
link = args.join(' ')
if (!link) return reply('Ops, insira o link de um video do twitter')
reply(enviar.espere)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/api/twitter?link=${link}&apikey=${keyale}`)
descc = post.resultado.desc
video_hd = await getBuffer(post.resultado.HD)
conn.sendMessage(from, {video: video_hd, caption: descc}, {quoted: info}).catch(e => {
reply('Error!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'facebook':
case 'facemp4':  
case 'fb':
teks = args[0]
reply(enviar.espere)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」
• *Título:* ${a.judul}
• *Fonte :* ${a.source}
• *Tamanho :* ${a.size}
• *Qualidade :* ${a.quality}
• *Modelo :* ${a.type}
• *Nome do arquivo :* ${a.judul}.${a.type}`
sendFileFromUrl({image: a.thumb, caption: result}, {quoted: info})
sendFileFromUrl({video: a.link, mimetype: 'video/mp4'}, {quoted: info})
await limitAdd(sender)
break

case 'ytmp4':
try {
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu video / música de video')
reply(enviar.espere)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
blapr = await fetchJson(`http://aleatoryapi.herokuapp.com/api/ytmp4-ofc?url=${qd}&apikey=${keyale}`)
blabla = await getBuffer(blapr.resultado.dl_link)
conn.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break



case 'ytmp3':
try {
qd = args.join(" ")
if(qd.length < 7) return reply('Você deve pegar o link do YouTube gerado pelo ytsearch ou do próprio YouTube mesmo, e usar com esse comando, e ele enviará seu áudio / música')
reply(enviar.espere)
res = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytsrc?q=${qd}&apikey=${keyale}`)

blaimg = await getBuffer(res.resultado[0].image)

bla = `Titulo: ${res.resultado[0].title}\nVisualizações: ${res.resultado[0].views}\nTempo: ${res.resultado[0].duration.timestamp}\nCanal: ${res.resultado[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
blapr = await fetchJson(`http://aleatoryapi.herokuapp.com/api/ytmp3-ofc?url=${qd}&apikey=${keyale}`)
audbla = await getBuffer(blapr.resultado.dl_link)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tiktok':
try {
link = args.join(" ")
if (!link) return reply('Ops, insira o link de um video do tiktok.')
reply(enviar.espere)
blap = await fetchJson(`http://aleatoryapi.herokuapp.com/api/tiktok?url=${link}&apikey=${keyale}`)
blavideo = await getBuffer(blap.resultado.nowm)
conn.sendMessage(from, {video: blavideo, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tiktok2':
qp = args.join(" ")
if (!qp) return reply('Ops, insira o link.')
sendBtext(from, "✔️ Download De Vídeo / Audio [ TIKTOK ]\nEscolha uma opção que deseja🙄.", `☂️`, [
{buttonId: `${prefix}tiktokvideo ${qp}`, buttonText: {displayText: `🎥𝐕𝐈𝐃𝐄𝐎🔥`}, type: 1},
{buttonId: `${prefix}tiktokaudio ${qp}`, buttonText: {displayText: `🎶𝐀𝐔𝐃𝐈𝐎💎`}, type: 1}], selo)
break 

case 'tiktokvideo': 
try {
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/tiktok-2?url=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.server1.video)
conn.sendMessage(from, {video: blabla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'tiktokaudio': 
try {
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/tiktok-2?url=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.server1.music)
conn.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => { 
reply('ERROR')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if (!SoDono && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!q) return reply( `Texto onde?\n\nExemplo : ${prefix + command} BOA VISTA `)
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (let i of anu) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
conn.sendMessage(i, txt, conn.user.name,  btn)
}
reply(`Enviando com sucesso `)
}
break

case 'playstore':
if(!q) return reply('Digite um nome de um app que deseja pesquisar.')
let play = await hx.playstore(q);
let stor = "❉─────────────────────❉\n"
for (let i of play) {
stor += `\n*「 _PLAY STORE_ 」*\n
- 📄 *Nome* : ${i.name}
- 💎 *Link* : ${i.link}\n
- 🤵🏻 *desenvolvedor* : ${i.developer}
- 📤 *Desenvolvedor link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(stor)
break

case 'igstalk':
if(args.length < 1) return reply('Cadê o nome?')
usur = args.join(" ")
teste = await fetchJson(`https://pencarikode.xyz/stalk/instagram?username=${usur}&apikey=pais`)
teste = teste.result.user
corno = `Nome : ${teste.username}\n`
corno += `PK : ${teste.pk}\n`
testebf = await getBuffer(`${teste.profile_pic_url}`)
await conn.sendMessage(from, {image: testebf, caption: `${corno}`}, {quoted:info})
break

case 'celular':
if (!q) return reply(`Qual celular você está procurando?`)
teks = args.join(' ')
anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
const busca_celular = 
`
💎𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪̧𝑶̃𝑬𝑺 𝑫𝑶 𝑺𝑬𝑼 𝑪𝑬𝑳𝑼𝑳𝑨𝑹🔥

✒ Titulo: ${anu.judul}
💻Última atualização: ${anu.rilis}
📱 Tamanho do celular: ${anu.ukuran}
⚡ Tipo: ${anu.type}
🗃️ Armazenamento: ${anu.storage}
📴 Tela: ${anu.display}
📳 Polegada: ${anu.inchi}
🔰 Resolução da câmera: ${anu.pixel}
📲 Resolução do video: ${anu.videoPixel}
💭 Ram do celular: ${anu.ram}
🚀 Hardware do celular: ${anu.chipset}
⚠️ Bateria: ${anu.batrai}
🔋 Tipo da bateria: ${anu.merek_batre}`
await conn.sendMessage(from, {image: blalogoofc, thumbnail:null, caption: `${busca_celular}`}, {quoted: info})
break

case 'gimage':
try {
blar = Math.floor(Math.random() * 5)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/gimage?txt=${q}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.result[`${blar}`].url) 
conn.sendMessage(from, {image: blabla}).catch(e => {
reply("ERROR, não foi encontrado, tente novamente...")
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'p2':
qp = args.join(" ")
res = await yts(qp)
blaimg = await getBuffer(res.all[0].image)
bla = `                      🥂𝑩𝑬𝑴-𝑽𝑰𝑵𝑫𝑶🥂          

✮ۣۜۜ͜͡🎗 𝑻𝒊́𝒕𝒖𝒍𝒐 : ${res.all[0].title}\n✮ۣۜۜ͜͡📱 𝑽𝒊𝒔𝒖𝒂𝒍𝒊𝒛𝒂𝒄̧𝒐̃𝒆𝒔 : ${res.all[0].views}\n✮ۣۜۜ͜͡⏳ 𝑻𝒆𝒎𝒑𝒐: ${res.all[0].timestamp}\n✮ۣۜۜ͜͡♨️ 𝑪𝒂𝒏𝒂𝒍: ${res.all[0].author.name}\n 0:35 ━❍──────── -5:32 ↻ ⊲ Ⅱ ⊳ ↺ VOLUME: ▁▂▃▄▅▆▇ 100%`
sendBimg(from, `${res.all[0].image}`, bla, NomeDoBot, [
{buttonId: `${prefix}audioplay ${qp}`, buttonText: {displayText: `✮ۣۜۜ͜͡𝘼́𝙐𝘿𝙄𝙊 💎`}, type: 1}, {buttonId: `${prefix}videoplay ${qp}`, buttonText: {displayText: `✮ۣۜۜ͜͡𝙑𝙄́𝘿𝙀𝙊🔥`}, type: 1}], info)
break

case 'audioplay':
try {
reply(enviar.espere)
res = await yts(q)
ytdl = require('ytdl-core')
wew = getRandom('.mp3')
bx = await ytdl(res.all[0].url, { quality: '249' }).pipe(fs.createWriteStream(wew))
bx.on("finish", function () {
conn.sendMessage(from, { audio: fs.readFileSync(wew), mimetype: "audio/mp4" }, {quoted: info}).then(() => fs.unlinkSync(wew) )
})
} catch {
reply('Não foi possível baixar este áudio 😔')
}
break

case 'videoplay':
try {
reply(enviar.espere)
res = await yts(q)
ytdl = require('ytdl-core')
rafa = getRandom('.mp4')
bx = await ytdl(res.all[0].url, { quality: '18' }).pipe(fs.createWriteStream(rafa))
bx.on("finish", function () {
conn.sendMessage(from, { video: fs.readFileSync(rafa), mimetype: "video/mp4" }, {quoted: info}).then(() => fs.unlinkSync(rafa) )
})
} catch {
reply('Não foi possível baixar este vídeo 😔')
}
break
case 'play2':
try {
playzin = args.join(" ") 
if(!playzin) return reply('Cade o nome da música🤔?')
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
bla = bla.resultado
pla = `Titulo: ${bla.titulo}\n`
pla += `Visualizações: ${bla.visu}\n`
pla += `Publicado : ${bla.publicado}\n\n`
pla += `Enviando o áudio, vai demorar pra caramba, OK?`
img = await getBuffer(bla.thumb)
conn.sendMessage(from, {image: img, caption: `${pla}`}, {quoted: info})
audbla = await getBuffer(bla.url)
conn.sendMessage(from, {audio: audbla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply(`desculpe mas não achei o que você quer.`)
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'play3':
try {
qp = args.join(" ")
if(!qp) return reply(`Cade o nome da música😶?`)
reply(enviar.espere)
res = await yts(qp)

blaimg = await getBuffer(res.all[0].image)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/ytmp3-2?q=${res.all[0].url}&apikey=${keyale}`)
blabla = await getBuffer(bla[0].link)
conn.sendMessage(from, {audio: blabla, mimetype: 'audio/mp4'}, {quoted: info}).catch(e => {
reply('Error')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break


case 'playmp4':
try {
qp = args.join(" ")
if(!qp) return reply(`Cade o nome da música?/Video🙃?`)
reply(enviar.espere)
res = await yts(qp)

blaimg = await getBuffer(res.all[0].image)

bla = `Titulo: ${res.all[0].title}\nVisualizações: ${res.all[0].views}\nTempo: ${res.all[0].duration.timestamp}\nCanal: ${res.all[0].author.name}\n`

conn.sendMessage(from, {image: blaimg, caption: bla}, {quoted: info})
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/playmp4?q=${q}&apikey=${keyale}`) 
audbla = await getBuffer(bla.resultado.url)
conn.sendMessage(from, {video: audbla, mimetype: 'video/mp4'}, {quoted: info}).catch(e => {
reply('ERROR!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//============(CASE-BEM-VINDO/E ETC..)=========\\

case 'bemvindogg':
case 'welcomegg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar🔥')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('Ja esta ativo💎')
welkom.push(from)
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('🔥 Ativou com sucesso o recurso de bem vindo neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Ja esta Desativado🔥')
pesquisar = from
processo = welkom.indexOf(pesquisar)
while(processo >= 0){
welkom.splice(processo, 1)
processo = welkom.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/welkom.json', JSON.stringify(welkom))
reply('‼️ Desativou com sucesso o recurso de bemvindo neste grupo️💎')
} else {
reply('1 para ativar, 0 para desativar🔥')
}
break

//=====================================\\

//inícios das edists



case 'edit-nanatsu':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu1`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b8f989284ba4d8905c66c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu1':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/30ebfe6af4f734026b022.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/603ae259ae3e907b59977.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1af0a9fcf9ef0d3ec772d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/61da7c30a757191ae93be.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c4917cfd495fa7eac2aee.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cc1e5617adfba9104f3ec.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'nanatsu7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3f03807f1b1ed744affca.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7ebcb3236bd260105017e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ac6f6e57b7e81840e6fdb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'nanatsu10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b445c8e6e10fd93268d9c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'nanatsu11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f6c97628e30d08e81362f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1f3e74a926bab14863464.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/25db32a3076269834542d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/be2a47a6854549b738357.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5027fc05b9544f5cd8144.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3bbf6f8b79b932113027c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9378ce1194da9c6f6803f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e72fd0e59eb2e5bc0605d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1dfb4973a7f8fdc6c6055.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/127dcd56bbf5e803dad82.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5cb239ab6bc946751cae3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0f2b4a90e6cb6dcc05658.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/21677b37c8f9a34270428.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d29f0e14fb1aa24613ff9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b078dbc4c2f0fedc32648.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4f13f1548d03ed1db24c5.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/180e90eec972c031ec95f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/21815ef33f05a64a619a3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0d09ebca99f874fe652fa.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'nanatsu29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4720468cb8978ad81541c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/22b0505a830b92f9b9e09.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'nanatsu31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/147e47b8b312435125e1e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1a99262ddf886d6f98641.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'nanatsu33':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu34`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/77b92d3dd04cae0b485cc.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'nanatsu34':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu35`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f341bc0fe94dcf32be8c5.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'nanatsu35':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}nanatsu`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/60d6abedf59eadd03583f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗡𝗔𝗡𝗔𝗧𝗦𝗨💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'edit-bleach':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach1`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8ad67d0cf249b0be1cc2a.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach1':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e39f9abc981abb98edc0c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/68c170e9522c21892e6f7.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/99db6a34d2024b5a7d56d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6825dfc4aba4654a8bf94.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1d86396565a736ab7338e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f53aab6a89abccbf86c48.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a31c9105fa4d2bc259a10.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7ff7002ce8aeab21b0425.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a7af996737e95d169e856.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4750ef2f3e7f768931956.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92ac6d5d9875d0053e0bc.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dba9d21bd734f8a53dbb1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/692ab6e930898f2f5fd70.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/692ab6e930898f2f5fd70.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b05f6431dcc258c20c09e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4de9d9a6e70a71a9305f8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'hhttps://telegra.ph/file/2157e3eaa1f569c3321e1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a8f958439af02caa2830d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4d251bfa372e59346c464.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/61d6375be8a20dd7f4870.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/41c5271d379f366b92c13.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/203198b09ae3fa5a98faf.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a12c3120efc193ca0a945.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/42afdea8d19f012fa8e11.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6d3a023bee3793b98cf19.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/afa561856854a38fae288.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/afa561856854a38fae288.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/949297fdea59df868ca52.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/87ef6d703618311f0b53f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'bleach30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/77032070187f605dea9a8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2a34a566ed9c7ff6658af.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/222f44201d7e8dae1054a.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach33':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach34`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3e985cfb7e35147729184.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach34':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach35`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/58defc1e53484a4f81294.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach35':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach36`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/049be56bb64b3499ac658.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach36':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach37`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ecd7ca35d1cd4198e61a6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach37':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach38`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6d37e789ea927117ee487.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach38':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach39`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4bf9a0cf97693bcb7ae71.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach39':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach40`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5a1c31712cced0823d0fc.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach40':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach41`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2ade9dc90ac95fa35ad8f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach41':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach42`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/219e293b737195503a7b9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach42':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach43`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6101f3551bf3313782daa.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'bleach43':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach44`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1c9ab4196998986eec3fe.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach44':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach45`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/82b6a3f3053c47f747160.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'bleach45':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach46`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0473f380c1c5c2e7ca29e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach46':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach47`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/be92bc691522018e22cbc.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'bleach47':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach48`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7edc2031ff2f7be2b2b31.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach48':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach49`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b91e36d220737b180682c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach49':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach50`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f42827353b52cc4babdaa.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach50':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach51`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5aaa204a47c5a9e3305a9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'bleach51':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}bleach`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a7eecfc04d6ac239bf564.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗕𝗟𝗘𝗔𝗖𝗛💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break





case 'edit-hunter1':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/05b469b0f38da5fe0beeb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
  footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8595a85e98de61f63a90d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ceae8176d272a419caff3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/181c780922a7eeadc8387.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b0a1ed938a9856b283ff8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/212ae28f83544aaf4b7e6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9e04e87d3addb26e16b02.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'hunter8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0c7c7e910ef999429b5c2.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/abb7cb7f54103e2eedb85.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7c2e9ac9746b3fa56c49d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/08c8f11b70af4e087600e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a5bd2088dbba309891087.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/262e638bbeb5d5df5d502.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fb5c5d2381dc298c7b291.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5b22b410008dcf675ee26.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cd41d1e77ccdd4a0aa116.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3b618253b7ffb04b16954.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/16c8759141a944cc37f67.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0e2e492e267b411b976f3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a471e4967ed850d9a9b6c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c262c896f307416676223.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1622de6061561ecfe573b.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ad3dbc2496374989fb926.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/55ff3b01b7292cca4a469.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e0d229db18d572df3cc05.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f6763f6b9d1b1bd42a1dc.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/93cb749ef733db76410cf.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'hunter28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1df5b22c7ab766e66652d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'hunter29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b3d3d8207bf9baa73f2a4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'hunter30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/165f1024ac41961f6b68c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ddc9934b06efea848e6be.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/867136d681864729e3c77.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2db096fb33107ad259c21.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter33':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter34`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/de5d6327a273feb5f8dc1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter34':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter35`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e47027827b69796661e1f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'hunter35':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter36`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d0167ea746a92f067c912.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter36':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter37`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8bf841526207658bef96c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter37':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter38`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b396d1607264e2bf5d686.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter38':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter39`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6b6837e2d3c8ac9641c18.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter39':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter40`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c990b1754c5efca1abbd8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'hunter40':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter41`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b3211b8104f7ec1c1a624.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter41':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter42`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3b98fa6eaa3255843e5be.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter42':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter43`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ffd12e9ad587889c3f31c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter43':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter44`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/97aeea6ec134b226cfe42.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'hunter44':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter45`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/39c9bf4949b62d4c06eda.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter45':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter46`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0ffa1dffaf2913aae7534.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'hunter46':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter47`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/eba9a8cd990bf3c150689.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'hunter47':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}hunter48`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6a01cf7176a2bfc0e9bdf.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗛𝗨𝗡𝗧𝗘𝗥𝘅𝗛𝗨𝗡𝗧𝗘𝗥💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break







//==========( NARUTO - EDIT )==============\\


case 'edit-naruto':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1fb74e1a43989618e675a.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c47a25d5d52e8b652d750.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d823deee82beac321adee.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/94de00fb5a3311cf7bfaa.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/46c1d2590dcf1c7a4a1b1.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/48b6ef746b9f8cbe81a29.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/eac543a0cfa59e145c297.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/838adf9b07b8aff255e5c.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5dd851fec3548aadded44.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9ce3a8c7cf77a1aca8429.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b68d76437ad1b1b6a5aa9.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1261e35b8e6ddca8edf45.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f6262b11239411e354fe4.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9651b379ad3437acaae45.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fb74db7a4fe0fbcfda835.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fd373824c32c606a91569.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/771b04e4b768ce19b880f.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0ea4a0b7dfa4a087c1794.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/837ef03db614d01a519a8.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d062af705758f36c411ec.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/03b0b73587f07afa270f1.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/228edc4ba503c4cba0699.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0038548b6c1e6f0aa7f5a.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d078c943c82e775322625.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b98f2f3dbb3dd9905c735.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/39de1498b782ea1d28d6e.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fc0466d5a6841a8559c56.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5bf8a913e9d2463bdeb3e.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/16b28eb742f3cdd1d5ed5.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f520ec9e13a46fdb2c5c1.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/40b57b37c4eaa16ec444b.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e59b4c8cdda0d9f318ee8.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'naruto32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}naruto7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7d4eb49c14eaef26e17ef.mp4'},
caption: "💎𝗡𝗔𝗥𝗨𝗧𝗢☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'edit-shingeki':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki1`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3d3e82751b5de08fb4827.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki1':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki2`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c321e5164146971d73ab2.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki2':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki3`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/db4593befcdc5a9c9eba3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki3':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki4`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3ff79a213a4df55262770.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki4':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki5`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0bff703e863c5cbb2aa34.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki5':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki6`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c02e078c8d93fb8f094a5.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki6':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki7`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/85215c9783dba33f292d1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki7':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki8`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6f816460bc59b74fd689f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki8':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki9`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3711b954fe9d80b398004.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki9':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki10`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7c7b08de43fe1baae155d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki10':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki11`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/26147bcf4032df919b7c9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki11':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki12`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/996660fe26e4d91de86df.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki12':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki13`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/029e5f4c385dfe170345f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki13':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki14`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8cd001ec5bb993a138d7c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki14':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki15`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5bd0197269c60e00fc9c6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki15':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki16`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6f45709a5829b1fbbfc62.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki16':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki17`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/35dcece99af1b195b9c78.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki17':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki18`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0623eb56d40b383184d10.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki18':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki19`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/870a6694a62df593ae35a.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki19':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki20`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3c13f63895e96e0d0b9db.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki20':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki21`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3888082a805f254aa9799.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki21':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki22`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0eb23aa660147269d1e33.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki22':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki23`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/49a702cf53882f25869a3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki23':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki24`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ecf531025babf1afcfda7.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki24':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki25`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/412c067eabab8cb33679c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki25':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki26`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/de66d95591ba1b26cf8b7.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki26':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki27`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2fbdf8fa6af41b520eeb0.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-shingeki27':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki28`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8c0225debcdd6e31224a3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'edit-shingeki28':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-shingeki29`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2c0c5a112944d9705af89.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗔𝗧𝗔𝗖𝗞☆𝗢𝗡☆𝗧𝗜𝗧𝗔𝗡💎",
footerText: '⚫',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


////FIMMM/////

//==========( SOLO LEVELING EDIT )==============\\
case 'edit-sololeveling':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/bd9d2b4996c965eb7a1a9.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'leveling2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6e98311763e210b7f4190.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b86e3792459a1b709c3bb.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4e100f5e6a5557b15cd51.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/06199a33789750fd6d3e1.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/aaa4ec45b598c43a596b0.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7baa5cdf6a2f38ea04342.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b1886a157a3baa1c254b6.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4581209dc2aca9030cd69.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8ea28edd8152a85011b79.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6c3459ee6386f5ac880bd.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8df6bed99e9e9bf16ad5f.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e8b60d4630c11a2d3ec30.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3a71abd3bd780518c28ea.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5b9e89e10d3cbf1a11b7c.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/aebd32d707fea4ac32a6a.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d013948179dab3897c74b.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6445997586637800cb7a2.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'leveling19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/49e59feab38d65db8804e.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b07bcfaaf83e89a470c92.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b339ceb5d1bef96c75f51.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/af880f4641d44dae205a9.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/af7573e59757fff050546.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/944e8185e7f3676df5803.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/583e6ed7f3d4b1ce98999.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7d036616a51ed9b9d53c3.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fb749857f985c23bbd0e4.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c14c5e93016154e5d079b.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ed93e6e7fece5f6e7f3d5.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}leveling31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a26f19ce250c8f9a61c8c.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'leveling31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}edit-sololeveling`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/997d3f5fe3dbe6d74b75b.mp4'},
caption: "💎𝗦𝗢𝗟𝗢☆𝗟𝗘𝗩𝗘𝗟𝗜𝗡𝗚☆𝗘𝗗𝗜𝗧💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

/////FIMMM////
case 'edit-isekai':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai1`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c44f11e2fb77ba7eab866.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai1':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e8fd4631ebee6e60a8924.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4eb83ace3ba863e0b75f3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b1c55f6fcdf3d8a0c04ab.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/468d95cf24f827d687b17.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b3d34ba717e7ca917c560.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/77fa9838fe46851d5b28f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/56b44f48b2bd23fbfb32d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d88fb6e1728d01c56cdbb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9433381ebf1284b96b400.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/aaaa2df782b04cf67d810.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/30ff8c13b8cf297db92db.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3442f9d7173d77f24434e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3d7fe22ca625180e29486.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5d225e59cf9da7a9c156f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/62c75e20c0f8433894cbb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4a9e227503c5a117c3003.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/75ff6539db923ff5de64e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/13df62bdedabde6677698.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/853429b60529cb274b475.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3f097315b2feeeb298f64.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9183bee2c04523627f20c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/73ed450b9ac7842f921d4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fb5c971ff10c9c7f85b8e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8604d6b175a768b76f13c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/de167bad1f3bba3126ffe.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/55f92b7050e2a03a6a977.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3e54e0172c74c72717a65.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/07e6062add581713212c8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d887f062dfe0715d1f71f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8504aa6db3f2e9f3058f6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8e164da557a746ed783b1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ba53de8aec3d85e952e2c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai33':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai34`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/04d70d2f549d5cf6010b9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai34':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai35`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ac70976aa2f159df86d63.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai35':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai36`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ba05f4dbb9015efb8b7af.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai36':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai37`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3b35ab4344bba8c9ea71f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai37':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai38`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b9c9884dac6fe63a9697b.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai38':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai39`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dcb00323130c84afcd83c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai39':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai40`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cbb28b284b1cef5621de4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai40':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai41`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dcda0a5cacbf3da2a0fb6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai41':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai42`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cd10ef1067a9e02e2f03d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai42':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/20d040f21f1f469c462f0.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

//==========(EDIT - KIMETSU )==============\\


case 'edit-kimetsu':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cad3a816e7791c35d5bbf.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu2':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2d7726517a36d51d18826.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu4':
reply(`🥂 𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2baefcbf93abbeb78f1f5.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu5':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6263e34f1d2c2c5414033.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu6':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9e3d1b84b22eaf6f6600c.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu7':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu8`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/76d1491f515157f341e6c.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu8':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/872d3d525c181b884d8b7.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu9':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5710ae49df2efc61863b2.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu10':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e63227a9c374eae031243.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu11':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ecdc39e7f4660d9ebbc8a.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu12':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e46ea5dcf633015ef4b05.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu13':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8c3f17e8edc1c0ae6b650.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu14':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f20457f2723316d3cefc9.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu15':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b0e3faa81f078b575d77f.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu16':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/03c8adb31835e3f803fff.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu17':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/110db1f76c17ed7280ab4.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu18':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/95987cf1dfcf190406f3e.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'kimetsu19':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}kimetsu20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/2d7726517a36d51d18826.mp4'},
caption: "💎𝗞𝗜𝗠𝗘𝗧𝗦𝗨☆𝗡𝗢☆𝗬𝗔𝗜𝗕𝗔☆𝗘𝗗𝗜𝗧💎 ",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


//==========( JUJUTSU KAISEN EDIT )==============\\


case 'edit-jujutsu':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu2`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92afe5fe9c7e44c621919.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu4`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d11ba2dd222c2eb99d977.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu5`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/62c1220ec89d51e1bff5d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu6`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ca475f9d23a757c97bde4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu8`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/489ee86ab050bfbb102dd.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu9`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a4037ef28ec148bea19fd.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujusu10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu11`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92afe5fe9c7e44c621919.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu13`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/433dee78cfc2b762bbe29.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu13`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7f0d1613e574ef9813fc6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu15`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8a8e4d1b7e06e816c2e3f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu16`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/68c057f6317f3ca2b660f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu17`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92afe5fe9c7e44c621919.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu18`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d9889463a06b177344a55.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu19`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1f1dfaafda6b32508e01e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu21`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d9889463a06b177344a55.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu22`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d3552b277c30f9d459b84.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu23`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ff9710d171fb910affe78.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu24`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/47c60d0c7385a01cbdea4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu25`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6db0bb87385bd4ad239a8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu26`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/61904a0f67c3a9f5bda28.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu27`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d05fe143ffa5ade8da19d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'jujutsu27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}jujutsu2`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3a75418673f4d8c98fe1a.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗝𝗨𝗝𝗨𝗧𝗦𝗨☆𝗞𝗔𝗜𝗦𝗘𝗡💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break
//==========( NARUTO - EDIT )==============\\











case 'edit-trap':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap2`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/46716b9d74a9a8d8e0a4c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap3`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7ab1ed0e8eb33aa014557.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap4`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/31513191c68a8e2112115.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap5`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1e0e7bd43e1ef9f7de752.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap6`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1c0adcd555801a377e712.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'xtrap6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap7`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/bf590c5544c01c4b40810.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap8`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e7c413ccea369839aa3d4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap9`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/255b50b7ea3dc66d7833a.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap10`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7a74ac1b3f3646e21015c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap11`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/811b9aa5bf0c50400179e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap12`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/38e9ee516d97cb1904ec2.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap13`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92c5f9199a06362c60b07.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap14`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/92c5f9199a06362c60b07.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'xtrap14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap15`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4944e26108ffc2f7bbcd7.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap16`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b8da1d14f89c0bdd98972.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap17`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/f819642cd6057f0aa87ec.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap18`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/945919710ec2a9eaca98b.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'xtrap18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap19`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c36d1cb9cda483453d144.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap20`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a59208d43cfcd89d27c3d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap21`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9154167ee4e574b16ba16.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap22`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/1333a74d64bdc5504e9b2.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'xtrap22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}xtrap23`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ce752744f2e31deba5497.mp4'},
caption: "💎𝗘𝗗𝗜𝗧☆𝗧𝗥𝗔𝗣💎",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



//==========( SPY X FAMILY EDIT )==============\\

case 'edit-spyxfamily':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx2`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/7b7618ba6d3c3367dd712.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx2':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx3`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/24f4701c394df74e0c6bd.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx3':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx4`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/34b4381a9ffd20a27763e.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx4':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx5`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9ea68bef6bb21c0f50a7b.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx5':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx6`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8ed0f68d18cc038d77197.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx6':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx7`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5c6f943373d285fe078bc.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx7':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx8`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/353f1cdcf289fdf605081.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx8':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx9`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cf7e444caf271cac132cd.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx9':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx10`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/a92a4cc53257ea3182e17.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx10':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx11`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4e55d46ba65b99f662fe9.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx11':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx12`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c45bb0ea8acb5c4a5193a.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx12':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx13`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8a1e87acca4496091fc66.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx13':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx14`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e6f93aead0a0af1d5a0ca.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'spyx14':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx15`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/36853387f6ffd47aa953e.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx15':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx16`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dca14af172dbbd0eaee32.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx16':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx17`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ab6b38c824bec18dbef22.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx17':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx18`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/270e2b0915094ebcc2645.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx18':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx19`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/721fbf7e5e671db5b75de.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx19':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx20`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/721fbf7e5e671db5b75de.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'spyx20':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx21`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/0429487f2c49366e450e9.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx21':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx22`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6d6037ff699b8b22bc111.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'spyx22':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx23`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/6bbf5de11f19c8388a23e.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'spyx23':
reply(`🥂𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}spyx24`, buttonText: {displayText: '🍭𝗣𝗥𝗢𝗫𝗜𝗠𝗢🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d9a2bc28a1f230e1415f6.mp4'},
caption: "🔥𝗘𝗗𝗜𝗧 𝗦𝗣𝗬 ☆ 𝗙𝗔𝗠𝗜𝗟𝗬🔥",
footerText: '𝑶𝒊𝒆̂𝒆̂^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break

case 'edit-isekai':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai1`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/c44f11e2fb77ba7eab866.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai1':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai2`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/e8fd4631ebee6e60a8924.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai2':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai3`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4eb83ace3ba863e0b75f3.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai3':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai4`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b1c55f6fcdf3d8a0c04ab.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai4':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai5`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/468d95cf24f827d687b17.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai5':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai6`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b3d34ba717e7ca917c560.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai6':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai7`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/77fa9838fe46851d5b28f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai7':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/56b44f48b2bd23fbfb32d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai8':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai9`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d88fb6e1728d01c56cdbb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai9':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai10`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9433381ebf1284b96b400.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai10':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai11`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/aaaa2df782b04cf67d810.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai11':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai12`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/30ff8c13b8cf297db92db.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai12':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai13`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3442f9d7173d77f24434e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai13':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai14`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3d7fe22ca625180e29486.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai14':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai15`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/5d225e59cf9da7a9c156f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai15':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai16`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/62c75e20c0f8433894cbb.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai16':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai17`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/4a9e227503c5a117c3003.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai17':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai18`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/75ff6539db923ff5de64e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai18':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai19`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/13df62bdedabde6677698.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai19':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai20`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/853429b60529cb274b475.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai20':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai21`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3f097315b2feeeb298f64.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai21':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai22`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/9183bee2c04523627f20c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai22':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai23`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/73ed450b9ac7842f921d4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai23':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai24`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/fb5c971ff10c9c7f85b8e.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




case 'isekai24':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai25`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8604d6b175a768b76f13c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai25':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai26`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/de167bad1f3bba3126ffe.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai26':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai27`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/55f92b7050e2a03a6a977.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai27':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai28`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3e54e0172c74c72717a65.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai28':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai29`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/07e6062add581713212c8.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai29':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai30`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/d887f062dfe0715d1f71f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai30':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai31`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8504aa6db3f2e9f3058f6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai31':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai32`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/8e164da557a746ed783b1.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai32':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai33`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ba53de8aec3d85e952e2c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai33':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai34`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/04d70d2f549d5cf6010b9.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai34':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai35`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ac70976aa2f159df86d63.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai35':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai36`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/ba05f4dbb9015efb8b7af.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break


case 'isekai36':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai37`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/3b35ab4344bba8c9ea71f.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai37':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai38`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/b9c9884dac6fe63a9697b.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai38':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai39`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dcb00323130c84afcd83c.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai39':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai40`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cbb28b284b1cef5621de4.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai40':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai41`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/dcda0a5cacbf3da2a0fb6.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai41':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai42`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/cd10ef1067a9e02e2f03d.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break



case 'isekai42':
reply(`🔥𝗔𝗴𝘂𝗮𝗿𝗱𝗲 𝘂𝗺 𝗣𝗼𝘂𝗰𝗼...`)
buttons = [
{buttonId: `${prefix}isekai`, buttonText: {displayText: '🍭𝗣𝗥𝗢́𝗫𝗜𝗠𝗔🍭'}, type: 1}]

buttonMessage = {
video: {url: 'https://telegra.ph/file/20d040f21f1f469c462f0.mp4'},
caption: "💎𝗘𝗗𝗜𝗧 𝗜𝗦𝗘𝗞𝗔𝗜💎",
footerText: '^-^',
buttons: buttons,

headerType: 4
}
sendMsg = conn.sendMessage(from, buttonMessage, {quoted: selo})
break




//=================(ANTS)=================\\

case 'anticttgg':
case 'anticontatogg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiCtt) return reply('Ja esta ativo')
antictt.push(from)
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('💎 Ativou com sucesso o recurso de anticontato neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isAntiCtt) return reply('Ja esta Desativado')
pesquisar = from
processo = antictt.indexOf(pesquisar)
while(processo >= 0){
antictt.splice(processo, 1)
processo = antictt.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antictt.json', JSON.stringify(antictt))
reply('‼️ Desativou com sucesso o recurso de anticontato neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'listfake': case 'listafake':
if(!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(`O BOT PRECISA SER ADMINISTRADOR DO GRUPO 🍫`)
if(!isGroupAdmins) return reply(mess.only.admin)
teks = '️🥡 Números fakes no grupo: ️🥡\n'
men = []
for(let mem of groupMembers) {
if(!mem.id.startsWith(55)) {
teks += `⧽  @${mem.id.split('@')[0]}\n`
men.push(mem.id)}}
if(teks.indexOf('➤') < 0) return reply('*Nenhum numero Gringo foi encontrado 😌*')
conn.sendMessage(from, {text: teks, mentions: men})
break


case 'filme':
if(!q) return reply("_Coloque o nome do filme *após o comando*_.")
if(!isPremium) return reply(enviar.msg.premium)
axios.get(`http://isyubii.herokuapp.com/api/filme?nome=${q}&apikey=key-free`)
.then(e => {
try{
d = e.data.resultado;
txt = '💎𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼𝘿𝙊💎\n\n';
no = 0;
for (let i of d) {
no += 1;
txt += `
✮ۣۜۜ͜͡FILME☕: ${no}\n
✮ۣۜۜ͜͡Titulo✒: ${i.titulo}\n
✮ۣۜۜ͜͡Link🍫: ${i.link}\n
✮ۣۜۜ͜͡Descrição🔥: ${i.sinopse}\n`;
}
console.log(txt);
conn.sendMessage(from, {image:{url: d[0].img}, caption:txt})
}catch(err){
reply(`Resultado do filme ${q} não foi encontrado💁‍♀️.`)
}
}).catch(err => {
console.log('Ops, eu acho que a api caiu 😢');
});
break

case 'idgp':
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
conn.sendMessage(sender, {text: `AQUI ESTÁ O ID DO GRUPO😈!`}, {quoted: info})
conn.sendMessage(sender, {text: `${from}`})
break

case 'clonegp':
if (!isGroup) return
if (!q) return reply("CADÊ O ID DO GRUPO?🤡") 
const oxi = isGroup ? await conn.groupMetadata(`${q}`): ''
const pessoas = isGroup ? oxi.participants: ''
const nomegp = isGroup ? oxi.subject: ''
const descgp = isGroup ? oxi.desc: ''
conn.groupUpdateSubject(from, `${nomegp}`)
conn.groupUpdateDescription(from, `${descgp}`)

setTimeout( () => {
for (let bctinha of pessoas) {
members_id = []
if (bctinha.jid === conn.user.id) return
members_id.push(bctinha.id)
conn.groupParticipantsUpdate(from, [bctinha.id], "add")
}
}, 10);
break





case 'akinator':
if (q === "reset"){
if (isGroupAdmins || SoDono){
jogo.now = true
}
}
let startAki = async () => {
global.aki = new Aki({ region })
await aki.start()
}
if (jogo.now) {
await startAki()
jogo.now = false
jogo.jogador = sender
} else return reply("Alguem está jogando💁‍♀️")
sections = [
{
title: " ",
rows: [
{ title: "✮ۣۜۜ͜͡ SIM", rowId: prefix + 'resp 0' },
{ title: "✮ۣۜۜ͜͡ NAO", rowId: prefix + 'resp 1' },
{ title: "✮ۣۜۜ͜͡ SEI LÁ", rowId: prefix + 'resp 2' },
{ title: "✮ۣۜۜ͜͡ ACHO QUÊ SIM", rowId: prefix + 'resp 3' },
{ title: "✮ۣۜۜ͜͡ ACHO QUÊ NÃO", rowId: prefix + 'resp 4' },
]
}
]
conn.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\n𝑷𝒓𝒐𝒈𝒓𝒆𝒔𝒔𝒐: " + aki.progress + '%',
title: "𝑸𝑼𝑬𝑺𝑻𝑨̃𝑶 ",
buttonText: "🍫𝑺𝑬𝑳𝑬𝑪𝑰𝑶𝑵𝑨𝑹🍫",
sections
})
break

case 'resp':
if (jogo.jogador !== sender) return conn.sendMessage(from, { text: 'Não é você que está jogando.' }, { quoted: info })
await aki.step(args)
if (aki.progress >= 90 || aki.currentStep >= 90) {
await aki.win()
jogo.now = true
buttons = [{ buttonId: prefix + 'fimaki', buttonText: { displayText: '✮ۣۜۜ͜͡ 𝗦𝗜𝗠💎' }, type: 1 }, { buttonId: prefix + 'fimaki' + ' nao', buttonText: { displayText: '✮ۣۜۜ͜͡ 𝗡𝗔̃𝗢🔥' }, type: 1 }]
conn.sendMessage(from, { image: { url: aki.answers[0].absolute_picture_path },
caption: aki.answers[0].name + ": " + aki.answers[0].description + '\nPOR ACASO ESSE É SEU PERSONAGEM💁‍♀️?',
buttons: buttons,
headerType: 4
})
} else {
sections = [
{
title: " ",
rows: [
{ title: "✮ۣۜۜ͜͡ SIM", rowId: prefix + 'resp 0' },
{ title: "✮ۣۜۜ͜͡ NÃO", rowId: prefix + 'resp 1' },
{ title: "✮ۣۜۜ͜͡ SEI LÁ", rowId: prefix + 'resp 2' },
{ title: "✮ۣۜۜ͜͡ ACHO QUÊ SIM", rowId: prefix + 'resp 3' },
{ title: "✮ۣۜۜ͜͡ ACHO QUÊ NÃO", rowId: prefix + 'resp 4' },
]
}
]
conn.sendMessage(from, { 
text: aki.question + "\nEscolha uma opção.\n𝑷𝒓𝒐𝒈𝒓𝒆𝒔𝒔𝒐: " + aki.progress.toFixed(0) + '%',
title: "𝑸𝑼𝑬𝑺𝑻𝑨̃𝑶 ",
buttonText: "🔮𝑺𝑬𝑳𝑬𝑪𝑰𝑶𝑵𝑨𝑹🔮",
sections
})
}
break

case 'fimaki':
if (q === 'nao') return reply('Ahhh desculpaa na próxima eu consigo🥺') 
reply('HIIII EU SABIAA VENCIII🥳🥳🥳💎')
break

case 'reset':
if (isGroupAdmins || SoDono){
jogo.now = true
reply("Akinator, resetado com sucesso!!")
} else {
reply("Somente admin e o dono, podem usar este comando")
}
break













case 'anticatalogogg':
case 'anticatalggg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAnticatalogo) return reply('Ja esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('💎 Ativou com sucesso o recurso de anticatalogo neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isAnticatalogo) return reply('Ja esta Desativado')
pesquisar = from
processo = anticatalogo.indexOf(pesquisar)
while(processo >= 0){
anticatalogo.splice(processo, 1)
processo = anticatalogo.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/anticatalogo.json', JSON.stringify(anticatalogo))
reply('‼️ Desativou com sucesso o recurso de anticatalogo neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifakegg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntifake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('💎 Ativou com sucesso o recurso de antifake neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isAntifake) return reply('Ja esta Desativado')
pesquisar = from
processo = antifake.indexOf(pesquisar)
while(processo >= 0){
antifake.splice(processo, 1)
processo = antifake.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antifake.json', JSON.stringify(antifake))
reply('‼️ Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilocgg':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
if(Antiloc) return reply('Já está Ativo.')
antiloc.push(from)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Ativou com sucesso o recurso de anti loc neste grupo✔️')
} else if (Number(args[0]) === 0) {
if(!Antiloc) return reply('Já está Desativado.')
antiloc.splice(from, 1)
fs.writeFileSync('./datab/ants/antiloc.json', JSON.stringify(antiloc))
reply('Desativou com sucesso o recurso de anti loc neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antidocumentogg':
if (!isGroup) return reply(` SOMENTE EM GRUPOS`)
if (!isGroupAdmins) return reply(`PRECISA SER ADMIN`)
if (!isBotGroupAdmins) return reply(` O BOT PRECISA SER ADMIN`)
try {														 
if (args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if (Number(args[0]) === 1) {
antidoc.push(from)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
antidoc.splice(from, 1)
fs.writeFileSync('./datab/ants/antidoc.json', JSON.stringify(antidoc))
reply('Desativou com sucesso o recurso de antidocumento neste grupo✔️')
 } else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antiimggg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiImg) return reply('Já Esta ativo')
antiimg.push(from)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('💎Ativou com sucesso o recurso de anti imagem neste grupo💎')
} else if (Number(args[0]) === 0) {
if (!isAntiImg) return reply('Ja esta Desativado.')
antiimg.splice(from, 1)
fs.writeFileSync('./datab/ants/antiimg.json', JSON.stringify(antiimg))
reply('Desativou com sucesso o recurso de anti imagem neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antistickergg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiSticker) return reply('Já Esta ativo')
antisticker.push(from)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('💎Ativou com sucesso o recurso de anti sticker neste grupo💎')
} else if (Number(args[0]) === 0) {
if (!isAntiSticker) return reply('Ja esta Desativado.')
antisticker.splice(from, 1)
fs.writeFileSync('./datab/ants/antisticker.json', JSON.stringify(antisticker))
reply('Desativou com sucesso o recurso de anti sticker neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antinotasgg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiNotas) return reply('Já Esta ativo💎')
antinotas.push(from)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('💎Ativou com sucesso o recurso de anti notas neste grupo️💎')
} else if (Number(args[0]) === 0) {
if (!isAntiNotas) return reply('Ja esta Desativado🙄.')
antinotas.splice(from, 1)
fs.writeFileSync('./datab/ants/antinotas.json', JSON.stringify(antinotas))
reply('🔥Desativou com sucesso o recurso de anti notas neste grupo️🔥')
} else {
reply('💎1 para ativar, 0 para desativar🔥')
}
break

case 'antivideogg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiVid) return reply('Ja esta ativo')
antivid.push(from)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Ativou com sucesso o recurso de anti video neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiVid) return reply('Ja esta Desativado')
antivid.splice(from, 1)
fs.writeFileSync('./datab/ants/antivideo.json', JSON.stringify(antivid))
reply('Desativou com sucesso o recurso de anti video neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudiogg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiAudio) return reply('Ja esta ativo😶')
antiaudio.push(from)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Ativou com sucesso o recurso de anti audio neste grupo✔️')
} else if (Number(args[0]) === 0) {
if (!isAntiAudio) return reply('Ja esta Desativado')  
antiaudio.splice(from, 1)
fs.writeFileSync('./datab/ants/antiaudio.json', JSON.stringify(antiaudio))
reply('Desativou com sucesso o recurso de anti audio neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'limitecaracteresgg':
case 'limiteflood':  
if (!isGroup) return reply(enviar.msg.adm)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar. info.Badmin)
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if (Number(args[0]) === 1) {
if (isAntiFlood) return reply(`💎 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 💎`)
antiflood.push(from)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
reply(`️🥋 O recurso limite de caracteres ${limitefl} foi ativado nesse grupo🔥`)
} else if (Number(args[0]) === 0) {
 if (!isAntiFlood) return reply('✔️ O recurso limite de caracteres não está ativado no grupo 💎')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./datab/usuarios/antiflood.json', JSON.stringify(antiflood))
}
reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'resetarttt':
case 'rvttt':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
daily.splice([])
fs.writeFileSync('./datab/usuarios/diario.json', JSON.stringify(daily))
reply('‼️O jogo da velha TTT foi resetado com sucesso..✔️')
reply(`${prefix}reiniciar`)
break

case 'reiniciar':
if(!SoDono) return
rp = (Date.now() / 1000) - info.messageTimestamp
blar = process.uptime()
reply(process.exit())
reply(`Reiniciei em ${String(rp.toFixed(3))}m\n\nTempo Ativo🔥 : ${kyun(blar)}`)
break

case 'antipornogg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiPorn) return reply('😈Ja esta ativo😈')
antiporn.push(from)
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('💎 Ativou com sucesso o recurso de antiporn neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isAntiPorn) return reply('Ja esta Desativado')
pesquisar = from
processo = antiporn.indexOf(pesquisar)
while(processo >= 0){
antiporn.splice(processo, 1)
processo = antiporn.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antiporn.json', JSON.stringify(antiporn))
reply('️🤧 Desativou com sucesso o recurso de antiporn neste grupo️😑')
} else {
reply('1 para ativar, 0 para desativar')
}
break


case 'antipalavrãogg':
case 'antipalavraogg':  
case 'antipalavragg':    
if (!isGroup) return reply(`[❗] SOMENTE EM GRUPOS`)
if (!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if (!isBotGroupAdmins) return reply(`[❗] O BOT PRECISA SER ADMIN`)
if (args.length < 1) return reply(`[❗] 1 / 0, Exemplo ${prefix + command} 1`)
if (Number(args[0]) === 1) {
if (isPalavrao) return reply('Ja esta ativo.')
palavrao.push(from)
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('💎 Ativou com sucesso o recurso de Anti Palavras hardcore neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isPalavrao) return reply('Ja esta Desativado')
pesquisar = from
processo = palavrao.indexOf(pesquisar)
while(processo >= 0){
palavrao.splice(processo, 1)
processo = palavrao.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/palavrao.json', JSON.stringify(palavrao))
reply('️🔥Desativou com sucesso o recurso de Anti Palavra harcore neste grupo️🔥')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'fechargp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qtt = args.join(' ').split(' ');
let qaa = parseInt(qtt[0]);
let qbb = qtt[1];
if (isNaN(qaa)) return reply (`Precisa ser um número!!!\n\nexemplo🙃:\n${prefix}frchargp 30 s`)

if (qbb === 's') {
let calc = parseInt(qaa + '000')
await reply (`O grupo será fechado em ${qaa} segundos🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} segundos💎!`)
}
if (qbb === 'm') {
calc = parseInt(qaa * 60 + '000')
await reply (`O grupo será fechado em ${qaa} minutos🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} minutos!💎`)
}
if (qbb === 'h') {
calc = parseInt(qaa * 3600 + '000')
await reply (`O grupo será fechado em ${qaa} horas🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'announcement')
return reply (`O grupo foi fechado pelo administrador *${pushname}* após ${qaa} horas!💎`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo:\n${prefix}fechargp 5 m`)
}
break


case 'desbanir':
case 'desban':
if(!isPremium) return reply("Só pode usar esse comando quem tem a coroa premium do grupo🎗🤴")
if(!budy.includes("/")) return reply(`Exemplo: ${prefix}desbanir Número banido injustamente/Meu número +55 12 xxx-xxxx foi banido injustamente desbana por favor`)
var [qsp, qsp2] = q.split("/")
await fetchJson(`http://aleatoryapi.herokuapp.com/api/EnviarEmail?titulo=${qsp}&texto=${qsp2}&apikey=${keyale}`)
reply(`Oiê^-^ : ${pushname} Pedido de desban enviado para o suporte com sucesso💎🍫...`) 
break





case 'abrirgp':
if (!SoDono && !isGroupAdmins) return reply (`${say.only.admin}`)
var nomor = info.participant;
let qxx = args.join(' ').split(' ');
let qxt = parseInt(q[0]);
let tqb = qxx[1];
if (isNaN(qxt)) return reply (`Precisa ser um número!!!\n\nexemplo🙄:\n${prefix}abrirgp 30 s`)

if (tqb === 's') {
let calc = parseInt(qxt + '000')
await reply (`O grupo será aberto em ${qxt} segundos🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} segundos!💎`)
}
if (tqb === 'm') {
calc = parseInt(qxt * 60 + '000')
await reply (`O grupo será aberto em ${qxt} minutos🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} minutos!💎`)
}
if (tqb === 'h') {
calc = parseInt(qxt * 3600 + '000')
await reply (`O grupo será aberto em ${qxt} horas🔥`)
await sleep(calc);
await conn.groupSettingUpdate(from, 'not_announcement')
return reply (`O grupo foi aberto pelo administrador *${pushname}* após ${qxt} horas!💎`)
}
else {
return reply (`s = segundos\nm = minutos\nh = horas\n\nexemplo🙄:\n${prefix}opentime 5 m`)
}
break

case 'antilinkhardgg':
case 'antilinkgg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('💎1 pra ligar / 0 pra desligar🔥')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return reply('Ja esta ativo💎')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('💎 Ativou com sucesso o recurso de antilink hardcore neste grupo 🔥')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return reply('Ja esta Desativado🔥')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo️💎')
} else {
reply('1 para ativar, 0 para desativar🔥')
}
break

case 'autofigugg': case 'autostickergg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('💎1 pra ligar / 0 pra desligar🔥')
if (Number(args[0]) === 1) {
if (isAutofigu) return reply('💎Ja esta ativo💎')
autofigu.push(from)
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('💎 Ativou com sucesso o recurso de auto figurinhas neste grupo 💎')
} else if (Number(args[0]) === 0) {
if (!isAutofigu) return reply('J🔥a esta Desativado🔥')
pesquisar = from
processo = autofigu.indexOf(pesquisar)
while(processo >= 0){
autofigu.splice(processo, 1)
processo = autofigu.indexOf(pesquisar)
}
fs.writeFileSync('./datab/grupos/autofigu.json', JSON.stringify(autofigu))
reply('‼️ Desativou com sucesso o recurso de auto figurinhas neste grupo✔️')
} else {
reply('💎1 para ativar, 0 para desativar🔥')
}
break

case 'antilinkgpgg':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntilinkgp) return reply('Ja esta ativo')
antilinkgp.push(from)
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('💎Ativou com sucesso o recurso de antilinkgp💎')
} else if (Number(args[0]) === 0) {
if (!isAntilinkgp) return reply('Ja esta Desativado💁‍♀️')
pesquisar = from
processo = antilinkgp.indexOf(pesquisar)
while(processo >= 0){
antilinkgp.splice(processo, 1)
processo = antilinkgp.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkgp.json', JSON.stringify(antilinkgp))
reply('‼️ Desativou com sucesso o recurso de antilink de grupo ✔️')
} else {
reply('💎ativar,desativar🔥')
}
break

case 'bemvindo2gg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if (Number(args[0]) === 1) {
reply(`Devo Lembrar que você deve determinar a legenda desse grupo, após ativar essa função, a legenda funciona por grupo, se deseja saber mais informações sobre, digite ${prefix}infobemvindo`)  
if (isWelkom2) return reply('❎O recurso já está ativado no grupo❎')
welkom2.push(from)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
reply('✅O recurso foi ativado✅')
} else if (Number(args[0]) === 0) {
if (!isWelkom2) return reply('❎O recurso não está ativado no grupo❎')
let position = false
Object.keys(welkom2).forEach((i) => {
if (welkom2[i] === from) {
position = i
}
})
if (position !== false) {
welkom2.splice(position, 1)
fs.writeFileSync('./datab/usuarios/vacilo.json', JSON.stringify(welkom2))
}
reply('❌O recurso foi desativado❌')
} else {
reply(`Digite da forma correta:\nComando: ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

//==========(Sticker-Stickers)===========\\

case 'emoji':
case 'semoji':
if(!q) return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){
idemot = 0
}
else if(jemot == 'google'){
idemot = 1
}
else if(jemot == 'samsung'){
idemot = 2
}
else if(jemot == 'microsoft'){
idemot = 3
}
else if(jemot == 'whatsapp'){
idemot = 4
}
else if(jemot == 'twitter'){
idemot = 5
}
else if(jemot == 'facebook'){
idemot = 6
}
else if(jemot == 'joypixels'){
idemot = 7
}
else if(jemot == 'openmoji'){
idemot = 8
}
else if(jemot == 'emojidex'){
idemot = 9
}
else if(jemot == 'lg'){
idemot = 10
}
else if(jemot == 'htc'){
idemot = 11
}
else if(!jemot){
idemot = 4
}
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
console.log(emoji.images[idemot]);
sendStickerFromUrl(from, emoji.images[idemot].url, info)
}).catch(e => {
reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI..")
})
break

case 'sc':
case 'c':  
case 'csticker':  
case 'cstiker':  
case 'stcirculo':
case 'circlesticker':  
if ((isMedia && info.message.imageMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
media = rane
getpunt = getRandom('.png')
inpunt = getRandom('.webp')
exec(`convert ${media} -resize 512x512^ -gravity center -extent 512x512 ${getpunt} && magick ${getpunt} -quality 50 -define webp:lossless=true ${inpunt}`, async (error) => {
fs.unlinkSync(getpunt)
fs.unlinkSync(media)
if (error) return reply("Error!")
await conn.sendMessage(from, {sticker: fs.readFileSync(inpunt)}, {quoted: info})
fs.unlinkSync(inpunt)
})
} else {
reply("Apenas image!")
}
break

case 'fstiker': 
case 'fsticker':
case 'f':
await limitAdd(sender)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && info.message.videoMessage.seconds < 10 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
ran = getRandom('.webp')
reply(enviar.espere) 
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(enviar.stikga)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 9 segundos)`)
}
break 

case 'emoji2':
case 'emojimix':
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `M.Scheyot🔥`, `CANAL`)
imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')
} catch {
try {
textoo = args.join(' ')
textoo1 = textoo.split('+')[0]
textoo2 = textoo.split('+')[1]
bau = require('./armor/funcoes/emoji.js')
sitee = bau.Semoji(textoo1, textoo2)
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
bass64 = `data:image/jpeg;base64,${site.toString('base64')}`
mantap = await convertSticker(bass64, `M.Scheyot💎`, `CANAL`)
imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: imageBuffer}, {quoted: info})
fs.unlinkSync('./imagem.webp')  
} catch {
reply('AHHH NÃO FOI POSSÍVEL FAZER ESSE EMOJIMIX🥺 TENTA COMBINAR OS EMOJIS💎...')
}
}
break



case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if(!isQuotedImage) return reply(`Marque uma imagem🙄`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${pushname}`
sd = `💖Criado por↓        ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti}, {quoted: info})
} else {
return reply(`So imagem lerdo(a) '-'`)
}
break

case 'st':
case 'st':
case 'sticker':
case 's':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot','ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('bot', 'ale')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
conn.sendMessage(from, {sticker: buffer}, {quoted: info})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch {
reply('Ocorreu algum Error, desculpe 😔')
}
break

case 'toimg':
if (!isQuotedSticker) return reply('❌ adesivo de resposta um ❌')
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
conn.sendMessage(from, {image: buff}, {quoted: info}).catch(e => {
console.log(e);
reply('ERROR!!')
})
break

//=============(LOGOS)=============\\



//==========(PLAQUINHAS-LOGOS)===========\\

case 'plaq': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`)
if (args.length < 1) return reply(`${prefix}plaq e digite o seu nome`)
teks = body.slice(6)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 😈Plaquinha feita 😈 '}, {quoted: selo})
break

case 'plaq2': //by zanga 
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`)
if (args.length < 1) return reply(`${prefix}plaq2 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${teks}`)
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 🔥Plaquinha feita🔥 '}, {quoted: selo})
break

case 'plaq3': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`)
if (args.length < 1) return reply(`${prefix}plaq3 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${teks}&text.0.outline.blur=63`)
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 😈Plaquinha feita😈 '}, {quoted: selo})
break


case 'plaq4':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`) 
if (args.length < 1) return reply(`${prefix}plaq7 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 😈Plaquinha feita sfd😈'}, {quoted: selo})
break

case 'plaq5':
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`)
if (args.length < 1) return reply(`${prefix}plaq10 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 🔥Plaquinha feita🔥 '}, {quoted: selo})
break
case 'plaq4off': //by zanga
if (!isNsfw) return reply(`É necessário que o comando seja ativado por um adm\nExemplo: ${prefix}+18`)
if (args.length < 1) return reply(`${prefix}plaq4 e digite o seu nome`)
teks = body.slice(7)
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres') //maximo de caracteres
reply(enviar.espere) //mensagem
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(2).jpeg?profile=Zanga%204.0&text.0.text=${teks}`)
conn.sendMessage(from, {image: buffer, sendEphemeral: true, thumbnail: null, caption: ' 😈Plaquinha feita😈 '}, {quoted: selo})
break

case 'placaloli':
if (!q) return reply(enviar.wrongFormat)
reply('Aguarde dlç🥰..')
lod = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${q}`)
sendStickerFromUrl(from, lod.message, enviar.success)
await limitAdd(sender)
break 

//=======================================\\


// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
try {
textin = args.join(" ")
if(!textin) return reply("Cade o texto?")
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${textin}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

case 'gameplay':
case 'ffbanner':
case 'mascoteavatar':  
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(`https://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'googlesg':
try {
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply("Cade o texto?")
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado.imageUrl)
conn.sendMessage(from, {image: blabla}, {quoted: info}).catch(rs =>{
reply("ERROR!!")  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
conn.sendMessage(from, {image: blabla}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case 'break':  
try {
reply(enviar.espere)
texto = args.join(" ") || 'Indefinido'
if(!texto) return reply('Cade o texto?')
bla = await fetchJson(`http://aleatoryapi.herokuapp.com/api/${command}?texto=${texto}&apikey=${keyale}`)
blabla = await getBuffer(bla.resultado)
conn.sendMessage(from, {image: blabla}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'delvote':
case 'delvoto':  
if(!info.key.remoteJid) return
delVote(from)
reply('votação deletada com sucesso')
break

case 'votar':
case 'votacao': 
case 'votação': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isGroup) return reply(enviar.msg.grupo)
if(!budy.includes("/")) return reply(`Cade a /, exemplo ${prefix}votação @marca/Ele é total gay/ 1`)
if(!q) return reply('*Votação*\n\n'+ prefix+ 'votar @tag marcar / pergunta  / 1 (1 = 1 Minuto)')
if (info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || info.message.extendedTextMessage.contextInfo == null) {
let id = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
split = args.join(' ').replace('@', '').split('/')
if(!Number(split[2])) return reply('cade os minutos eim?\n\n1 = 1 Minuto')
await mentions('Vote ' +'@'+ id.split('@')[0]+' para' +'\n\n' + `voto = ✅\ndevoto = ❌\n\npergunta: ${split[1]}`,[id],true)
addVote(from,split[1],split[0],split[2],reply)
}
break

case 'infosorteio':
case 'helpsorteio':  
await conn.sendMessage(from, {text:  infosorteio(prefix, pushname)}, {quoted: selo})
break

case 'seradm':
if (!SoDono) return reply (`𝑺𝑶𝑴𝑬𝑵𝑻𝑬 𝑴𝑬𝑼 𝑴𝑬𝑺𝑻𝑹𝑬🥺....`)
await sleep (2000)
reply (`TÁ BOM MESTRE! AGORA VOCÊ É ADM💎 ^-^.`)
conn.groupParticipantsUpdate(from, [`${setting.numerodono}@s.whatsapp.net`], "promote")
break

case 'entrar': {
if (!SoDono) return reply(enviar.msg.donosmt)
                if (!q) return reply( 'Digite link de grupo!') 
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply( 'Link Invalid!') 
                reply('*🎠CERTO MESTRE! VOU ENTRAR NO GRUPO ^-^🍭*')
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await conn.groupAcceptInvite(result) 
            }
            break
            case 'sair': {
                if (!SoDono) return reply(enviar.msg.donosmt)
                await conn.groupLeave(from) 
            }
            break
            
case 'promover': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode promover uma pessoa por vez..')
await sleep(2000)
menc = [`${teks}@s.whatsapp.net`]
conn.sendMessage(from, {text: `@${teks} PARABÉNS!🥳 VOCÊ ACABA DE SER PROMOVIDO A ADM DO GRUPO, AGORA VOCÊ PODE USAR O MENU ADM^-^ ESPERO QUÊ HONRE SEU CARGO.`, mentions: menc})
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "promote")
kael = fs.readFileSync("./audios/promovido.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true})
break

case 'rebaixar': 
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')
if(!isBotGroupAdmins) return reply('O Bot Precisa ser ADM pra executar essa ação.')
teks = body.slice(11)
if(teks.length > 15) return reply('Só pode rebaixar uma pessoa por vez..')
await sleep(2000)
menc = [`${teks}@s.whatsapp.net`]
conn.sendMessage(from, {text: `@${teks} SINTO MUITO. VOCÊ ACABA DE PERDER O CARGO DE ADMINISTRADOR DO GRUPO🥺! AGORA VOCÊ ESTÁ PROIBIDO DE USAR O MENU ADM💔..`, mentions: menc})
conn.groupParticipantsUpdate(from, [`${teks}@s.whatsapp.net`], "demote")
break

case 'sorteio':
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando mds🙄.')
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$🐇`)
d = []
teks = `🥳PARABÉNS SORTUDO(A) VOCÊ ACABA DE GANHAR O SORTEIO🎉${q}:\n\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `🔥፝⃟  ➣ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply('Só ADM pode utilizar este comando.')  
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `💎🥳🥳Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n\n`
for(i = 0; i < 1; i++) {
teks += `🔥፝⃟  ➣ ${numerossrt}\n`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break
//======================================\\



//==========(TTPS/ATTP/TTM)============\\

case 'attp':
if (args.length == 0) return reply(`Exemplo: ${prefix + command} Sad`)
reply(enviar.espere)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: buffer}, {quoted: info}).catch(e => {
reply('ERROR, ALGUM PROBLEMA NA API, EU ACHO.. ')  
})
break

case 'ttp':
try {
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = `http://aleatoryapi.herokuapp.com/api/ttp?texto=${string}&apikey=${keyale}`
sendStickerFromUrl(from, post, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
try {
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(enviar.espere)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=brizaloka&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: url}, {quoted: info})
} catch {
reply('ERROR')
}
break	


//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case '+18gg':
case 'nsfwgg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm sfd😈')
if (Number(args[0]) === 1) {
if (isNsfw) return reply('O modo +18 já está ativo🌶')
nsfw.push(from)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`😈Ativado com sucesso o modo +18 no grupo😈\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isNsfw) return reply('🤦‍♀️O modo +18 já está Desativado🤦‍♀️')  
nsfw.splice(from, 1)
fs.writeFileSync('./datab/grupos/nsfw.json', JSON.stringify(nsfw))
reply(`\`\`\`😑Modo +18 desativado com sucesso no grupo😑\`\`\` *${groupMetadata.subject}*`)
} else {
reply('💎1 para ativar, 0 para desligar🔥')
}
break 

case 'modobrincadeiragg':
case 'modobrincadeirasgg':  
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isModobn) return reply('o modobrincadeira já está ativo💖')
modobn.push(from)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`🎡Ativado com sucesso o modobrincadeiras no grupo🥳\`\`\` *${groupMetadata.subject}*`)
} else if (Number(args[0]) === 0) {
if (!isModobn) return reply('o modobrincadeira já está Desativado')  
modobn.splice(from, 1)
fs.writeFileSync('./datab/grupos/brincadeiras.json', JSON.stringify(modobn))
reply(`\`\`\`💎Modo brincadeiras desativado com sucesso no grupo🔥\`\`\` *${groupMetadata.subject}*`)
} else {
reply('💎1 para ativar, 0 para desligar🔥')
}
break 

case 'nick':
case 'gerarnick':
case 'fazernick':
try {
nick = args.join(' ')
if(!nick) return reply('Escreva o Nick ou nome que você quer personalizar.')
axios.get(`https://aleatoryapi.herokuapp.com/api/fazernick?nome=${nick}&apikey=${keyale}`)
.then(dados => {
var emoji = `🧧`
nicks = dados.data
txt = '🔥𝐍𝐈𝐂𝐊𝐒 𝐆𝐄𝐑𝐀𝐃𝐎𝐒 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎🔥\n\n'
for (let i = 0; i < nicks.length; i++) {
txt += `${emoji} ${nicks[i]}\n`
}
txt += `\n\n
   ༻✦༺༒༻💎༺༒༻✦༺
┊┊┊┊                     🎠           ☃️
┊┊┊☆         🎉
┊┊🌙 *                                   🐇
┊┊           💫             🎡
┊☆ °
🌙*                         💖            🌈`

reply(`${txt.trim()}`)
}).catch(e => {
reply('Não pode incluir letras modificadas nem emojis, ou pode ser que a api caiu, mas volta logo logo...')  
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'pl':
anu = await getBuffer('https://telegra.ph/file/0855427ea91c9c74eb290.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
break

case 'chance':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)  
var avb = body.slice(7)
if (args.length < 1) return conn.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: info})
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance @${mentioned[0].split('@')[0]}\n\né de... ${random}%`
await conn.sendMessage(from, {text: hasil, mentions: menc}, {quoted: info})
break

case 'gay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imggay}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 2 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 3 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 4 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'}
await conn.sendMessage(from, {image: wew, caption: `O quanto você é gay? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Gay 🏳️‍🌈\n\n ${bo} `, mentions: menc}, {quoted: info})
break

case 'feio':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imgfeio}`)
random = `${Math.floor(Math.random() * 110)}`
feio = random
if (feio < 20 ) {bo = 'É não é feio'} else if (feio == 21 ) {bo = '+/- feio'} else if (feio == 23 ) {bo = '+/- feio'} else if (feio == 24 ) {bo = '+/- feio'} else if (feio == 25 ) {bo = '+/- feio'} else if (feio == 26 ) {bo = '+/- feio'} else if (feio == 27 ) {bo = '+/- feio'} else if (feio == 2 ) {bo = '+/- feio'} else if (feio == 29 ) {bo = '+/- feio'} else if (feio == 30 ) {bo = '+/- feio'} else if (feio == 31 ) {bo = 'Ainda tá na média'} else if (feio == 32 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 33 ) {bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if (feio == 34 ) {bo = 'É fein, mas tem baum coração'} else if (feio == 35 ) {bo = 'Tá na média, mas não deixa de ser feii'} else if (feio == 36 ) {bo = 'Bonitin mas é feio com orgulho'} else if (feio == 37 ) {bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if (feio == 3 ) {bo = 'tenho '} else if (feio == 39 ) {bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if (feio == 40 ) {bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if (feio == 41 ) {bo = 'você é Feio, mas é legal, continue assim'} else if (feio == 42 ) {bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if (feio == 43 ) {bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if (feio == 44 ) {bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if (feio == 45 ) {bo = 'você é feio, mas tem bom gosto'} else if (feio == 46 ) {bo = 'Feio mas tem muitos amigos'} else if (feio == 47 ) {bo = 'Feio mas tem lábia pra pegar várias novinha'} else if (feio == 4 ) {bo = 'Feio e ainda não sabe se vestir, vixi'} else if (feio == 49 ) {bo = 'Feiooo'} else if (feio == 50 ) {bo = 'você é Feio, mas não se encherga 🧐'} else if (feio > 51) {bo = 'você é Feio demais 🙈'} 
await conn.sendMessage(from, {image: wew, caption: `O quanto você é feio? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Feio \n\n ${bo} `, mentions: menc}, {quoted: info})
break 

case 'matar':
case 'mata':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer matar')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você acabou de matar o(a) @${mentioned[0].split('@')[0]} 😈👹` 
jrpp = await getBuffer(`${matarcmd}`)
await conn.sendMessage(from, {video: jrpp, gifPlayback: true, caption: susp, mentions: menc}, {quoted: info})
break 

case 'corno':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de corno : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imgcorno}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é corno? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Corno 🐃`, mentions: menc}, {quoted: info})
break

case 'nazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de nazista : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imgnazista}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é nazista? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Nazista 卐`, mentions: menc}, {quoted: info})
break 

case 'vesgo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de vesgo : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imgvesgo}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é vesgo? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Vesgo 🙄😆`, mentions: menc}, {quoted: info})
break 

case 'bebado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de bêbado : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imgbebado}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é bêbado? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: menc}, {quoted: info})
break 

case 'gado':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gado : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imggado}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é gado? \n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Gado 🐂`, mentions: menc}, {quoted: info})
break 

case 'gostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gostoso : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imggostoso}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é gostoso? 😏\n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Gostoso 😝`, mentions: menc}, {quoted: info})
break 

case 'gostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
conn.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gostosa : @${mentioned[0].split('@')[0]} aguarde... ❱`, mentions: menc}, {quoted: info})
await sleep(5000)
wew = await getBuffer(`${imggostosa}`)
random = `${Math.floor(Math.random() * 110)}`
await conn.sendMessage(from, {image: wew, caption: `O quanto você é gostosa? 😏\n\n 「@${mentioned[0].split('@')[0]}」Você é: ❰ ${random}% ❱ Gostosa 😳`, mentions: menc}, {quoted: info})
break

case 'beijo':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque alguém que vc quer da um beijo')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você deu um beijo gostoso na(o) @${mentioned[0].split('@')[0]} 😁👉👈❤` 
wew = await getBuffer(`${beijocmd}`)
await conn.sendMessage(from, {video: wew, gifPlayback: true, caption: susp, mentions: menc}, {quoted: info})
break

case 'tapa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for, apenas digite ${prefix}jogos`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá o tapa')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você acabou de dar um tapa em @${mentioned[0].split('@')[0]} 🔥` 
jrq = await getBuffer(`${tapacmd}`)
await conn.sendMessage(from, {video: jrq, gifPlayback: true, caption: susp, mentions: menc}, {quoted: info})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('marque o alvo que você quer dá um chute')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
susp = `Você acabou de da um chute em @${mentioned[0].split('@')[0]} 🤡` 
jry = await getBuffer(`${chutecmd}`)
await conn.sendMessage(from, {video: jry, gifPlayback: true, caption: susp, mentions: menc}, {quoted: info})
break 

case 'dogolpe':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
if (args.length < 1) return await conn.sendMessage(from, {text: 'coloca um nome'}, {quoted: info})
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
menc = [`${mentioned[0].split('@')[0]}@s.whatsapp.net`]
random = `${Math.floor(Math.random() * 100)}`
jpr = `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${mentioned[0].split('@')[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`
await conn.sendMessage(from, {text: jpr, mentions: menc}, {quoted: info})
break

case 'shipo':
teks = args.join(" ")
if(teks.length < 10) return reply('Marque uma pessoa do grupo para encontrar o par dela')
membrr = []
const suamae111 = groupMembers
const suamae211 = groupMembers
const teupai111 = suamae111[Math.floor(Math.random() * suamae111.length)]
const teupai211 = suamae211[Math.floor(Math.random() * suamae211.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shiptedd = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n @${teupai111.id.split('@')[0]} && ${teks}\n\n Com uma porcentagem de: ${shiptedd}`
membrr.push(teupai111.id)
membrr.push(teupai211.id)
mentions(jet, membrr, true)
break

case 'casal':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
membr = []
const suamae11 = groupMembers
const suamae21 = groupMembers
const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `100%`]
const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.id.split('@')[0]}\ne esse\n2= @${teupai21.id.split('@')[0]}\n\nCom uma porcentagem de: ${shipted}`
membr.push(teupai11.id)
membr.push(teupai21.id)
mentions(jet, membr, true)
break

case 'rankativo':
case 'rankativos':  
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(countMessage[ind].numbers.length < 3) return reply('Necessita do registro de 3 usuarios')
countMessage[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
mentioned_jid = []
boardi = '🔥፝⃟    Ranking dos membros mais ativos:\n\n'
try {
for (let i = 0; i < 5; i++) {
if (i == 0) boardi += `${i + 1}º 🥇 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 1) boardi += `${i + 1}º 🥈 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 2) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`
else if (i == 3) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`	
else if (i == 4) boardi += `${i + 1}º 🥉 : @${countMessage[ind].numbers[i].id.split('@')[0]}\nMensagens: ${countMessage[ind].numbers[i].messages}\nComandos dados: ${countMessage[ind].numbers[i].cmd_messages}\n\n`			
				
mentioned_jid.push(countMessage[ind].numbers[i].id)
} 
mentions(boardi, mentioned_jid, true)
} catch (err) {
			console.log(err)
await conn.sendMessage(from, {text: `É necessário 5 jogadores para se construir um ranking`}, {quoted: info})
}
break

case 'checkativo':
if (!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja puxar a atividade')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(numbersIds.indexOf(mentioned[0]) >= 0) {
var indnum = numbersIds.indexOf(mentioned[0])
mentions(`𖣘⃟ᗒ Consulta das atividade de\n𖣘⃟ᗒ @${mentioned[0].split('@')[0]} no grupo\n𖣘⃟ᗒ Mensagens: ${countMessage[ind].numbers[indnum].messages}\n𖣘⃟ᗒ Comandos dados: ${countMessage[ind].numbers[indnum].cmd_messages}`, mentioned, true)
}
else {
mentions(`⋆⃟ۣۜ᭪➣ Consulta da atividade de ⋆⃟ۣۜ᭪➣ @${mentioned[0].split('@')[0]} no grupo\n⋆⃟ۣۜ᭪➣ Mensagens: 0\n⋆⃟ۣۜ᭪➣ Comandos dados: 0`, mentioned, true)
}
break

case 'ranklevel':
case 'rl':
case 'rank':
members_id = []
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
let nom = 0
try {
for (let i = 0; i < 10; i++) {
members_id.push(_level[i].id)
nom++
leaderboardlvl += `
┏ ✘⛩ ${setting.NomeDoBot} ⛩✘┓
┃•────•───────•───•
┣❲🀄❳ [${nom}] ϟ➠ @${_level[i].id.replace('@s.whatsapp.net', '')}
┣❲💎❳「xp」: ϟ${_level[i].xp}
┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
┗ ──────「★」──────┚\n`

}
leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
mentions(leaderboardlvl, members_id, true)
} catch (err) {
console.error(err)
await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
}
break

case 'rankgay':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
try{
d = []
ret = '🏳️‍🌈 Rank dos mais gays\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🏳️‍🌈❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankgado':
case 'rankgados':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
try{
d = []
ret = '🐂🐂 Rank dos mais gados do grupo \n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
ret += `🐂❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(ret, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankcorno':
case 'rankcornos':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
membr = []
const corno1 = groupMembers
const corno2 = groupMembers
const corno3 = groupMembers
const corno4 = groupMembers
const corno5 = groupMembers
const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `1%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `2%`, `27%`, `2%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `3%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `4%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `5%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `6%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `7%`, `79%`, `0%`, `1%`, `2%`, `5%`, `4%`, `5%`, `6%`, `7%`, `%`, `9%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `9%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcentag = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcent = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porcl = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const porg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
const prg = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
ytb = `
Esses são os cornos do grupo ${groupName}\n@${cornos1.id.split('@')[0]}\nCom uma porcentagem de ${porcent}\n@${cornos2.id.split('@')[0]}\nCom uma porcentagem de ${porcentag}\n@${cornos3.id.split('@')[0]}\nCom uma porcentagem de ${porcl}\n@${cornos4.id.split('@')[0]}\nCom uma porcentagem de ${porg}\n@${cornos5.id.split('@')[0]}\nCom uma porcentagem de ${prg}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(cornos1.id)
membr.push(cornos2.id)
membr.push(cornos3.id)
membr.push(cornos4.id)
membr.push(cornos5.id)
mentions(ytb, membr, true)
break

case 'rankgostosos':
case 'rankgostoso':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
member = []
const p01 = groupMembers
const p02 = groupMembers
const p03 = groupMembers
const p04 = groupMembers
const p05 = groupMembers
const o01 = p01[Math.floor(Math.random() * p01.length)]
const o02 = p02[Math.floor(Math.random() * p02.length)]
const o03 = p03[Math.floor(Math.random() * p03.length)]
const o04 = p04[Math.floor(Math.random() * p04.length)]
const o05 = p05[Math.floor(Math.random() * p05.length)]
luy = `
Parados!🤚🤚\n\n1=🤚🤭@${o01.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o02.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o03.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o04.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o05.id.split('@')[0]}🤚🤭\n\n\nMulta por serem gostosos dms😳 pague pena trabalhando em nossa agência de modelos 😊 by: ${NomeDoBot}`
member.push(o01.id)
member.push(o02.id)
member.push(o03.id)
member.push(o04.id)
member.push(o05.id)
mentions(luy, member, true)
break

case 'rankgostosas':
case 'rankgostosa':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
member = []
const p1 = groupMembers
const p2 = groupMembers
const p3 = groupMembers
const p4 = groupMembers
const p5 = groupMembers
const o1 = p1[Math.floor(Math.random() * p1.length)]
const o2 = p2[Math.floor(Math.random() * p2.length)]
const o3 = p3[Math.floor(Math.random() * p3.length)]
const o4 = p4[Math.floor(Math.random() * p4.length)]
const o5 = p5[Math.floor(Math.random() * p5.length)]
luy = `
Paradas!🤚🤚\n\n1=🤚🤭@${o1.id.split('@')[0]}🤚🤭\n\n\n2=🤚🤭@${o2.id.split('@')[0]}🤚🤭\n\n\n3=🤚🤭@${o3.id.split('@')[0]}🤚🤭\n\n\n4=🤚🤭@${o4.id.split('@')[0]}🤚🤭\n\n\n5=🤚🤭@${o5.id.split('@')[0]}🤚🤭\n\n\nMultas por serem gostosas dms😳 pague pena enviando nud no PV do dono😊 by Bot`
member.push(o1.id)
member.push(o2.id)
member.push(o3.id)
member.push(o4.id)
member.push(o5.id)
mentions(luy, member, true)
break

case 'ranknazista':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
try{
if(!isGroup) return reply(enviar.msg.grupo)
d = []
teks = '💂‍♂️Rank dos mais nazistas do gp\n'
for(i = 0; i < 5; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `💂‍♂️❧ @${groupMembers[r].id.split('@')[0]}\n`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'rankotakus':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
membr = []
const otaku1 = groupMembers
const otaku2 = groupMembers
const otaku3 = groupMembers
const otaku4 = groupMembers
const otaku5 = groupMembers
const otaku6 = groupMembers
const otaku7 = groupMembers
const otaku = groupMembers
const otaku9 = groupMembers
const otaku10 = groupMembers
const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
const otakus = otaku[Math.floor(Math.random() * otaku.length)]
const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
ytb = `esses são os otakus fedidos do grupo\n@${otakus1.id.split('@')[0]}\n@${otakus2.id.split('@')[0]}\n@${otakus3.id.split('@')[0]}\n@${otakus4.id.split('@')[0]}\n@${otakus5.id.split('@')[0]}\n@${otakus6.id.split('@')[0]}\n@${otakus7.id.split('@')[0]}\n@${otakus.id.split('@')[0]}\n@${otakus9.id.split('@')[0]}\n@${otakus10.id.split('@')[0]}\n\n⚡ ${setting.NomeDoBot} ⚡`
membr.push(otakus1.id)
membr.push(otakus2.id)
membr.push(otakus3.id)
membr.push(otakus4.id)
membr.push(otakus5.id)
membr.push(otakus6.id)
membr.push(otakus7.id)
membr.push(otakus.id)
membr.push(otakus9.id)
membr.push(otakus10.id)
mentions(ytb, membr, true)
break

case 'rankpau':
if(!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
if(!isModobn) return reply(`Este tipo de comando só pode ser utilizado com os Jogos ativo, fale com um adm ou se você for um, apenas digite ${prefix}jogos`)
membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${setting.NomeDoBot}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

case 'jogodavelha':
if(!isGroup) return reply('comando apenas para grupos')
joguinhodavelhajs.push(sender)
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if (fs.existsSync(`./armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
     
[❗] Alguém está jogando no momento...\n\n@${boardnow.X} VS @${boardnow.O}
     
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
     
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
     
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
conn.sendMessage(from, {text: chatMove}, {quoted: info,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(`*⟅❗⟆ Jogue com Alguem!!!!*
*para inicar a partida : ${prefix + command} @membro do gp*`);
const boardnow = setGame(`${from}`);
console.log(`Start No jogodavelha ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『📌ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ⚔️』*
     
@${sender.replace("@s.whatsapp.net",
"")} _está te desafiando para uma partida de jogo da velha..._
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._
     `;
conn.sendMessage(from, {text: strChat}, {quoted: info,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if (!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum ADM`)
if (fs.existsSync("./armor/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./datab/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento :(...`);
}
break


case "ppt":
if (args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if ((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "🥳VITÓRIA DO JOGADOR🥳"
}
if (vit == "derrota") {
var tes = "💎A vitória é do BOT💎"
}
if (vit == "empate") {
var tes = "🥂O jogo terminou em empate🥂"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "🥳VITÓRIA DO JOGADOR🥳") {
reply(pph)
}
break

case 'cassino':
addFilter(from)  
const soto = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : 🍊',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🔔',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : ??',		
'🍐 : 🍒 : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🍇',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		  

const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "🥳PARABÉNS VOCÊ GANHOU🥳!"
} else {
var Vitória = "VOCÊ PERDEU🥺..."
}

const cassino = `
┏━━━━❪🎰❫━━━━
┣► ${somtoy2}◄┛
┗━━━━❪💎❫━━━━

*${Vitória}*`
  
sendBtext(from, `${cassino}`, `${Vitória}`, [
{buttonId: `${prefix}cassino`, buttonText: {displayText: `Proximo`}, type: 1}], selo)
break

case 'quizanimaisgg':
if(!isGroup) return reply('Comando apenas para grupos')
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(!isGroupAdmins) return reply('Comando apenas para admins')
if(args.length == 0) return reply('clique no botão "ativar" Ou "desativar"')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/quizanim-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
imagemtexto =`                             🤔Quiz🤔`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
} else {
fs.writeFileSync(`./armor/quizanim-${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto =`                              ☕Quiz☕`
wew = await getBuffer(`${dataAnagrama2.foto}`)  
await conn.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: selo})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/quizanim-${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./armor/quizanim-${from}.json`)
reply("Desativado com sucesso")
}
await limitAdd(sender)
break

case 'anagramagg':
if(!isGroup) return reply('comando apenas para grupos')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isGroupAdmins) return reply('comando apenas para admins')
if(args.length == 0) return reply('clique em ativar ou desativar🥂')
if (args.join(' ') === '1') {
if(fs.existsSync(`./armor/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./armor/anagrama-${from}.json`))
reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./armor/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
conn.sendMessage(from, {text: `
╭═• ೋ☆๑🥇๑☆ೋ •═╮
           🕹𝐀𝐍𝐀𝐆𝐑𝐀𝐌𝐀🎮
╰═• ೋ☆๑🎁๑☆ೋ •═╯    
💎𝘿𝙀𝙎𝘾𝙐𝘽𝙍𝘼 𝘼 𝙋𝘼𝙇𝘼𝙑𝙍𝘼💎
 ╭╼━═━≺🍩≻━═━╾╮
  🔥𝑷𝑨𝑳𝑨𝑽𝑹𝑨: ${palavrasANA[anaaleatorio].embaralhada}

 🧐𝐃𝐈𝐂𝐀: ${palavrasANA[anaaleatorio].dica}
╰╼━═━≺💎≻━═━╾╯
`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./armor/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./armor/anagrama-${from}.json`)
reply("desativado com sucesso")
}
await limitAdd(sender)
break

case 'revelaranime':
case 'revelaanime':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagrama = JSON.parse(fs.readFileSync(`./armor/quizanime-${from}.json`))
reply (`${dataAnagrama.original}`)
break

case 'revelaranimal':
case 'revelaanimal':  
if (!isGroupAdmins) return reply('somente adms')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./armor/quizanim-${from}.json`))
reply (`${dataAnagramaa.original}`)
break

//=======(FIM-BRINCADEIRAS-JOGOS)========\\



//=(CASE-SIMIH-INTELIGÊNCIA-ARTIFICIAL)=\\

case 'sakura':
if(isSimi) return reply('Desativado')
sduy = args.join(" ")
data = await fetchJson(`https://api.simsimi.net/v2/?text=${sduy}&lc=pt`, {method: 'get'})
simi = `${data.success}`  
reply(simi)
break

case 'simihgg':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativo')
samih.push(from)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo 😗')
} else if (Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
samih.splice(from, 1)
fs.writeFileSync('./datab/usuarios/simi.json', JSON.stringify(samih))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break

case 'simih2gg':
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi2) return reply('O modo Simi está ativo')
samih2.push(from)
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
} else if (Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
samih2.splice(from, 1)
fs.writeFileSync('./armor/funcoes/simi.json', JSON.stringify(samih2))
reply('Desativado modo simi com sucesso neste grupo 😡️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
}
break




//========================================\\


//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = fs.readFileSync('audios/qviado.m4a')
await conn.sendMessage(from, {audio: soundft, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break

case 'infobot':
const cmdoo = fs.readFileSync('audios/infobot.m4a')
await conn.sendMessage(from, {audio: cmdoo, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
break 


//=======================================\\


//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\



case 'tupai':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.5,asetrate=65100"' ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'reverse':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'fat':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'deep':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=44500*2/3" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'earrape':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af "volume=12'" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar2':
case 'blown':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af "acrusher=.1:1:64:0:log" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'videocontrario':
case 'reversevid':
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break 

case 'videolento':
case 'slowvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})
break

case 'videorapido':
case 'fastvid':  
if (!isQuotedVideo) return reply('Marque um vídeo')
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: info })
fs.unlinkSync(ran)
})		
break

case 'grave2':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'grave':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'adolesc':
case 'vozmenino':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break  

case 'viraraudio':
if (!isQuotedVideo) return reply('Marque o video pfv')
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
fs.unlinkSync(media)
if (err) return reply('❌ Falha ao converter vídeo para mp3 ❌')
buffer = fs.readFileSync(ran)
conn.sendMessage(from, {audio: buffer, mimetype: 'audio/mp4'}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass3':
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'bass2': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'fast':
case 'audiorapido':  
if (!isQuotedAudio) return reply('Marque um áudio')
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

case 'robot':
if (!isQuotedAudio) return reply('Marque um áudio💎')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})

break


case 'audiolento': 
case 'slow':
if (!isQuotedAudio) return reply('Marque um áudio')
sendBtext(from, enviar.espere, ` `, [{buttonId: `boa`, buttonText: {displayText: `Obrigado`}, type: 1}])
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.m4a')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
conn.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
fs.unlinkSync(ran)
})
break

//=========(FIM-ALTERAR-AUDIO)===========\\


//=======(JOGO-DA-VELHA-COM-MAQUINA)=======\\

case 'tttme':
if (!isGroup) return reply('SÓ EM GRUPO')
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
conn.sendMessage(from, {text: tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender))}, {quoted: info})
break

case 'rankplay':
if (!isGroup) return reply(enviar.msg.grupo)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '🔥Ranking dos melhores players🔥\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`

} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].id.split('@')[0]}\n➻❥ *Ganhou: ${tictactoe[i].wins}*\n➻❥ *Perdeu: ${tictactoe[i].defeats}*\n➻❥ *Empates: ${tictactoe[i].ties}*\n*➻❥ Pontuação: ${tictactoe[i].points}*\n\n`
  
}
mentioned_jid.push(tictactoe[i].id)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await conn.sendMessage(from, {text: `*É necessário 3 jogadores para se construir um ranking*`}, {quoted: info})
}
break

case 'jogar':
tttset.playertest = sender
if (!isGroup) {
reply(ptbr.group())
} else if (tttset.tttstatus == "off") {
reply(`*O jogo não foi iniciado*\n*Digite ${prefix}ttt <dificukdade> para iniciar*`)
} else if (tttset.player != tttset.playertest) {
reply(`*O jogo já foi iniciado por outro player, aguarde ele terminar...*`)
  
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)

} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' && coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`*Diga a cordenada*\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
  
switch (args[0]) {
  
case 'a1':
if (esp.a1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a2':
if (esp.a2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'a3':
if (esp.a3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

case 'b1':
if (esp.b1 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b2':
if (esp.b2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'b3':
if (esp.b3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c1':
if (esp.c1 != "🔲") {
 reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c2':
if (esp.c2 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
                
case 'c3':
if (esp.c3 != "🔲") {
reply('*Esse espaço ja foi marcado, tente outro')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break

}
tttset.reActivate1 = "on"
reply(`💎1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
            
if (WinnerX()) {
if (isCmd) {
switch (tttset.tttdifficulty) {
              
case "EASY":
randomTTTXP = Math.floor(Math.random() * 25) + 25
addLevelingXp(tttset.player, randomTTTXP)
break

case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 75) + 75
addLevelingXp(tttset.player, randomTTTXP)
break

case "HARD":
randomTTTXP = Math.floor(Math.random() * 200) + 200
addLevelingXp(tttset.player, randomTTTXP)
break
                
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 1000) + 1000
addLevelingXp(tttset.player, randomTTTXP)
break
}
conn.sendMessage(from, {text: `*VOCÊ VENCEU, PARABENS*\n\n *VOCÊ GANHOU ${randomTTTXP}XP*`})
} else {
conn.sendMessage(from,{text: `*VOCÊ VENCEU, PARABENS*`},)
}

const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
				  
if (isCmd) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = 0 - (Math.floor(Math.random() * 200) + 200)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "NORMAL":
randomTTTXP = 0 - (Math.floor(Math.random() * 75) + 75)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "HARD":
randomTTTXP = 0 - (Math.floor(Math.random() * 25) + 25)
addLevelingXp(tttset.player, randomTTTXP)
break
					
case "IMPOSSIBLE":
randomTTTXP = 0
addLevelingXp(tttset.player, randomTTTXP)
break

}	
conn.sendMessage(from, {text: `*Você perdeu*\n\n AGORA VC PAGARÁ: ${randomTTTXP}XP`})
	
} else {
conn.sendMessage(from, {text: `*Você perdeu*`})
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
				
} else if (Tie()) {
if (isCmd) {
conn.sendMessage(from, {text: `*JOGO EMPATADO, NÃO HOUVE PERDAR*`})
} else {
conn.sendMessage(from, {text: `*JOGO, EMPATADO, TENHA UM BOM DIA*`})
}

const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
				
case 'ttt':
const limitrl = getLimit(sender, daily)
if (!isGroup) {
reply(enviar.espere)
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}ttt easy\n\nDificuldades: easy, normal, hard e impossible`)

} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = info
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
blat =  `💎1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`
conn.sendMessage(from, {text: `${blat}\n\nCaso não saiba como jogar digite: ${prefix}ttthelp`})
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
addLimit(sender, daily)
}
break

case 'ttthelp':
conn.sendMessage(from, {text: ttthelp(prefix)})
break
//==========(EFEITOS-MARCAR)==========\\

case 'triggered':
try {
if(!isQuotedImage) return reply("Marque uma imagem")
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
imagem = await downloadContentFromMessage(boij, 'image')
owgi = Buffer.from([])
for await(const send of imagem) { owgi = Buffer.concat( [ owgi, send ] ) }
res = await upload(owgi)
post = await fetchJson(`https://aleatoryapi.herokuapp.com/canvas/trigger?url=${res}&apikey=${keyale}`)
sendStickerFromUrl(from, {sticker: post}, {quoted:info})
} else {
reply('error')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'togif':
if (!isQuotedSticker) return reply('MARQUE UMA FIGURINHA ANIMADA🦄')
if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('AGUARDE UM POUCO JÁ TÔ FAZENDO🦄')
a = await webp_mp4(buff)
mp4 = await getBuffer(a)
conn.sendMessage(from, {video: mp4, gifPlayback: true, filename: `stick.gif`}, {quoted: info})
fs.unlinkSync(buff)
}
break

case 'rename':
case 'roubar':  
if(!isPremium) return reply(enviar.msg.premium)  
if (!isQuotedSticker) return reply('Marque uma figurinha🦄...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if (!q) return reply('*E o autor e o nome do pacote?*')
if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, {sticker: sti, contextInfo: { externalAdReply:{title: `${pack}|${author2}`,body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: info})
.catch((err) => {
reply(`❎ Error, tenta mais tarde`); 
})
break

case 'rip':  
case 'morto':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/rip?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'lgbt':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/lgbt?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'trash':
case 'lixo':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/trash?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'comporn':
try {
txt = body.slice(9)
jrr = txt.split("/")[0];
jrr1 = txt.split("/")[1];
if(!txt.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} Sad/demais`)
reply(enviar.espere)
buffer = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/phub?nome=${jrr}&msg=${jrr1}&foto=https://telegra.ph/file/954832554bf2b2e40f932.jpg&apikey=${keyale}`)
await conn.sendMessage(from, {image: buffer}, {quoted: info})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break 

case 'preso':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/jail?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case'carafeia':
bla = fs.readFileSync('./audios/carafeia.m4a')
conn.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt:true}, {quoted:info})
break

case 'legenda':
try {
gh = args.join(" ")        
txt1 = gh.split('/')[0] || ''
txt2 = gh.split('/')[1] || ''
if(!gh.includes("/")) return reply(`Cade a / mano?\nExemplo: ${prefix + command} Sad/Demais`)  
if ((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedSticker)) {
base64 = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/api/legenda?url=${link}&texto1=${encodeUrl(txt1)}&texto2=${encodeUrl(txt2)}&apikey=${keyale}`) 
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'zombie':
case 'zumbi':  
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
jrd = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${link}`)
zumb = await getBuffer(jrd.result)
conn.sendMessage(from, {image: zumb}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch {
reply('ERROR, DESCULPE.')
}
break

case 'borrar':
case 'borrada':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`https://aleatoryapi.herokuapp.com/canvas/blur?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'hitler':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/hitler?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'deletef':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/delete?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'wanted':
case 'procurado':
try {
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
reply(enviar.espere)
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
link = await upload(base64)
postt = await getBuffer(`http://aleatoryapi.herokuapp.com/canvas/procurado?url=${link}&apikey=${keyale}`)
conn.sendMessage(from, {image: postt}, {quoted: info}).catch(e => {
reply("Error!!")  
})
} else {
reply('Selecione uma imagem...!')
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel baixar essa música, espere retornar")   
} else {
reply('ERROR!!')
}
}
break

case 'acess':
if (!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if (err) return conn.sendMessage(from, {text: `root@ALEATORY-BOT:~ ${err}`}, {quoted: info})
if (stdout) {
conn.sendMessage(from, {text: stdout})
}
})
break


//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : ALEATORY CONTEÚDOS)==\\

if(isBotGroupAdmins && isAntiCtt && type === 'contactMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contato ou vcard, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAntiCtt && type === 'contactsArrayMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Contato detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot detectado trava contatos'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && Antiloc && type === 'locationMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Localização detectada, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Localização ou localização comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if(isBotGroupAdmins && isAnticatalogo && type === 'productMessage') {
if(isGroupAdmins) return conn.sendMessage(from, {text: 'Catalogo detectado, você é adm, então não irei ti remover'}, {quoted: info})
await conn.sendMessage(from, {text: 'opa fechado pelo bot, detectado trava Catalogo ou Catalogo comum, caso for um engano, fale com algum adm.'}, {quoted: selo})
await conn.groupSettingUpdate(from, 'announcement')
await sleep(2000);
Kic = `${sender.split("@")[0]}@s.whatsapp.net`
conn.groupParticipantsUpdate(from, [sender], 'remove')
await sleep(2000);
await conn.sendMessage(from, { text: 'o grupo sera limpado para evitar fazer efeito da trava'}, {quoted:selo})
await sleep(3000);
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
conn.sendMessage(from, {text: clear}, {quoted: selo, contextInfo : { forwardingScore: 500, isForwarded:true}})
await sleep(3000);
await conn.sendMessage(from, { text: 'agora enviarei destrava aguarde '}, {quoted:selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
await sleep(2000);
await conn.sendMessage(from, { text: 'reporte ao adm o ocorrido '}, {quoted:selo})
await sleep(5000);
await conn.groupSettingUpdate(from, 'not_announcement')
await sleep(2000);
await conn.sendMessage(from, { text: 'Aberto nao marque a trava ou levara ban✅'}, {quoted:selo})
}

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isGroupAdmins && isBotGroupAdmins && isPremium) {
if(isBot) return 
reply('*Link detectado, porém usuário é admin*')
} else {
if(SoDono) return
if(isGroupAdmins) return
if(isPremium) return
var Kic = `${sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe && !isGroupAdmins) return reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}


if(messagesC.includes('exec')) {
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

if(budy.toLowerCase().includes("sakura")){
if (info.key.fromMe) return
const reactionMessage = {
react: {
text: "💎",
key: info.key
}
}
sendMsg = await conn.sendMessage(from, reactionMessage)
}

if (!isAutoresp){
  
if (budy2.includes("pl video") || budy2.includes("video do pl")){
anu = await getBuffer('https://telegra.ph/file/0855427ea91c9c74eb290.mp4')
conn.sendMessage(from, {video: anu, mimetype: 'video/mp4'}, {quoted: info})
}

if (messagesC == "bot corno"){
  if (info.key.fromMe) return
reply("Corno é seu pai idiota😤")
}



if (messagesC == "lipe"){
if (info.key.fromMe) return
reply("O irmão do meu Criador o mineiro mais fofoh e lindo Mundo🥰💎")
}


if (messagesC == "'-'"){
if (info.key.fromMe) return
reply("Q Foi vidah?🙄")
}


if (messagesC == "tudo bem?"){
if (info.key.fromMe) return
reply("Estou super BEM e você?😊❤")
}


if(budy.toLowerCase().includes(":)")){
if (info.key.fromMe) return
reply("iihhh ^-^")
}


if (messagesC == "retardada"){
if (info.key.fromMe) return
reply("Retardado é você Praga ruim🤬")
}



if (messagesC == "f"){
if (info.key.fromMe) return
reply("TECLE (F) FAMILÍA😪")
}

if (messagesC == "ladrão"){
if (info.key.fromMe) return
reply("Se lugar de ladrão é na cadeia, pq o Lula tá solto?🤔")
}

if (messagesC == "te amo sakura"){
if (info.key.fromMe) return
reply("Também te amo gadinhu🥰💎")
}

if (messagesC == "droga"){
if (info.key.fromMe) return
reply("DROGA É U BRAYA😳")
}



if (messagesC == "boa madrugada"){
if (info.key.fromMe) return
reply("BOA MADRUGADA ZUMBI, Dorme não é😂?")
}



if (messagesC == "dr.enéas"){
if (info.key.fromMe) return
reply("Doutor Enéas o melhor presidente quê o Brasil não teve! O maior ícone patriota da História do Brasil🥺 Infelizmente Falesceu de leucemia em 2007 um verdadeiro herói quê deixou seu Legado Na história do Brasil!")
}



if (messagesC == "márcio"){
if (info.key.fromMe) return
reply("Meu Criador😍🥺 Aproveita e se inscreve no canal dele (M.scheyot)🥰💎 https://youtube.com/c/M%C3%A1rcioScheyot2004")
}


if (messagesC == "rafael"){
if (info.key.fromMe) return
reply("O RAFAEL🥰 O amigo do Meu criador quê ajudou a me criar Scheyot é muito grato a ele💎❤!!!")
}


if (budy2.includes("adivinha meu celular") || budy2.includes("meu celular")){
adivinha = info.key.id.length > 21 ? 'Android😻💎' : info.key.id.substring(0, 2) == '3A' ? 'IOS🤑😏' : 'Zap zap web💻🤣🤣';
await conn.sendMessage(from, {text: adivinha}, {quoted: info})
}


if(budy.toLowerCase().includes("bom dia")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/bomdia.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("boa noite")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/boanoite.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("boa tarde")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/boatarde.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if(budy.toLowerCase().includes("corno")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/corno.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if (messagesC == "feio"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/carafeia.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("xandão")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/xandao.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("pato")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/pegaopato.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "sextou"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/desgraça.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "hahahaha"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/risada.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("Meu pau")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/pomba.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("fofa")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/fofa.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "foda"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/foda.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "gostosa"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/beijo.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("fofo")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/fofomasn.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if(budy.toLowerCase().includes("gato")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/miau.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("free fire")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/freefire.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "alagoano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/alagoano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "amazôniense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/amazoniense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "paraibano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/paraibano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "santista"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/santista.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "flamenguista"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/flamenguista.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "corinthiano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/corinthiano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "palmeirense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/palmeirense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}




if (messagesC == "flamengo"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/flamengo.mp3');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "vascaino"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/vascaino.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "saopaulino"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/saopaulino.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if (messagesC == "acreano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/acreano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "brasiliense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/brasiliense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}




if (messagesC == "paulista"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/paulista.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "mineiro"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/mineiro.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "matogrossense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/matogrossense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "sergipano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/sergipano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "paranaense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/paranaense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "português"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/português.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if (messagesC == "piauiense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/piauiense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "rondoniense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/rondoniense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if (messagesC == "sulista"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/sulista.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if (messagesC == "tocantinense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/tocantinense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if (messagesC == "goiano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/goiano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}




if(budy.toLowerCase().includes("bang")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/bang.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("luva de pedreiro")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/pedreiro.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "gado"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/gado.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("acordei")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/acorda.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "linda"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/love.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "baiano"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/baiano.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "capixaba"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/capixaba.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if(budy.toLowerCase().includes("karalho")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/poze.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("gay")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/tuegay.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("parceiro")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/parceiro.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "cearense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/cearense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("legal")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/interessante.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "catarinense"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/catarinense.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("hack")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/hack.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("kkkkkkkkkkkkkkkkkkkkkkk")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/rsrsrs.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("carioca")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/carioca.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("tenso")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/tenso.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("sério")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/emesmo.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("bah")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/bah.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("otario")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/ridiculo.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if(budy.toLowerCase().includes("triste")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/reflexao.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("cachorro")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/dog.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("lixo")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/inseto.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("depressão")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/depressao.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("buceta")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/filosofo.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "porra"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/queporra.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "fodase"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/vaimorrer.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("bot bugada")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/bugada.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "malnoite"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/malnoite.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "maldia"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/maldia.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("rola")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/glub.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if(budy.toLowerCase().includes("cantar")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/lalala.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("auau")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/auau.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if (messagesC == "onechan"){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/onechan.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}

if(budy.toLowerCase().includes("loli")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/loli.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if(budy.toLowerCase().includes("jesus")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/comoousa.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}



if(budy.toLowerCase().includes("sexo")){
if(info.key.fromMe) return 
tujuh = fs.readFileSync('./audios/yamete.m4a');
await conn.sendMessage(from, {audio: tujuh, mimetype: 'audio/mp4', ptt:true}, {quoted: info})
}


if(budy.toLowerCase().includes("xandão")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu12.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if (messagesC == "hum"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu2.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if (messagesC == "sakura"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu1.webp")
conn.sendMessage(from, {sticker: figuofc})
}



if(budy.toLowerCase().includes("triste")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu4.webp")
conn.sendMessage(from, {sticker: figuofc})
}



if (messagesC == "chata"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu5.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("difícil")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu6.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("gato")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu11.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if (messagesC == "bot"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu3.webp")
conn.sendMessage(from, {sticker: figuofc})
}



if(budy.toLowerCase().includes("pato")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu9.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if (messagesC == "lipe"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu13.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("flamenguista")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu14.webp")
conn.sendMessage(from, {sticker: figuofc})
}



if (messagesC == "márcio"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu10.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("boa noite")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu16.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("banho")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu22.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("ódio")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu26.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("tudo bem?")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu41.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if (messagesC == "não"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu42.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("wtf")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu30.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("tédio")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu31.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("karay")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu32.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("sexo")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu33.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("pfv")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu34.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("gay")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu35.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("sakurajima")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu36.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if (messagesC == "oi"){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu37.webp")
conn.sendMessage(from, {sticker: figuofc})
}



if(budy.toLowerCase().includes("ban")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu38.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("raiva")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu39.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("te amo")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu23.webp")
conn.sendMessage(from, {sticker: figuofc})
}

if(budy.toLowerCase().includes("depressão")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu29.webp")
conn.sendMessage(from, {sticker: figuofc})
}


if(budy.toLowerCase().includes("cafuné")){
if (info.key.fromMe) return
figuofc = fs.readFileSync("./logos/figu19.webp")
conn.sendMessage(from, {sticker: figuofc})
}

//==============(ANTILINK)===============\\
}
switch(ants){
} 

//=========[--ANTI PALAVRÃO --]==========\\
if (isGroup && isPalavrao) { //CREDITOS TIAGO
 if (palavra.includes(budy)) {
 if (!isGroupAdmins) {
 conn.sendMessage(from, {text: `SEM PALAVRÃO!! 😠!!`}, {quoted : info})       
setTimeout( () => {
conn.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
reply("2")
setTimeout( () => {
reply("1")
}, 1000)
setTimeout( () => {
conn.sendMessage(from, {text: `*「😡️ANTI PALAVRÃO️🤬 」*\nVocê será banido do gp, Na proxima tenha ética ao falar!!`}, {quoted : info}).catch(e => {
conn.sendMessage(from, {text: `InFelizmente, não sou um administrador, entt não posso te banir🥲!!`}, {quoted : info})
})       							
}, 0)
} else {
return reply(`VOCÊ PODE REALEZA ${pushname} 🥰`)
}
}
}


//================(SIMIH-2)=================\\

if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)

if (sami) conn.sendMessage(from, {text: sami, thumbnail: blalogoofc}, {quoted: info});
}
}


 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
console.log(budy)
muehe = await simih(budy)
console.log(muehe)
reply(muehe)
}


//========================================\\



hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if (isCmd) {
kael = fs.readFileSync("./audios/cmdnaoexiste.m4a")
conn.sendMessage(from, {audio: kael, mimetype: 'audio/mp4', ptt:true}, {quoted:info})

await sleep(3000)

uptime = process.uptime()  
sections = [
{title: " ",
rows: [
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇🔥", rowId: `${prefix}menu2`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘽𝙍𝙄𝙉𝘾𝘼𝘿𝙀𝙄𝙍𝘼𝙎 🍰", rowId: `${prefix}brincadeiras`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙋𝙍𝙀𝙈𝙄𝙐𝙈🎗", rowId: `${prefix}menuprem`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎♨️", rowId: `${prefix}baixar`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙇𝙊𝙂𝙊𝙎🎃", 
rowId: `${prefix}menulogos`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘼𝙇𝙏𝙀𝙍𝘼𝘿𝙊𝙍𝙀𝙎🌒", rowId: `${prefix}alteradores`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙀𝙁𝙀𝙄𝙏𝙊𝙎🛹", rowId: `${prefix}efeitos`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝘼𝘿𝙈🍧", rowId: `${prefix}menuadm`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎💖", rowId: `${prefix}figurinhas`},
{title: "✮ۣۜۜ͜͡𝙈𝙀𝙉𝙐-(+18)💋", rowId: `${prefix}menu+18`},
{title: "✮ۣۜۜ͜͡ 𝙈𝙀𝙉𝙐-𝘿𝙊𝙉𝙊🌙", rowId: `${prefix}menudono`},
{title: "✮ۣۜۜ͜͡ 𝙇𝙄𝙎𝙏-𝙀𝘿𝙄𝙏𝙎🧧", 
rowId: `${prefix}menuedits`},
{title: "✮ۣۜۜ͜͡𝙇𝙄𝙎𝙏-𝙋𝘼𝘾𝙆𝙎⛩", 
rowId: `${prefix}menupacks`},
{title: "✮ۣۜۜ͜͡𝙄𝙉𝙁𝙊-𝙈𝙀𝙎𝙏𝙍𝙀🥋", rowId: `${prefix}infodono`},
{title: "✮ۣۜۜ͜͡𝘼𝙆𝙄𝙉𝘼𝙏𝙊𝙍🔮", rowId: `${prefix}akinator`},
{title: "✮ۣۜۜ͜͡𝙌𝙐𝙀𝙈 𝙀́ 𝙑𝙊𝘾𝙀̂ 𝘽𝙊𝙏?😮", rowId: `${prefix}infobot`, description: "𝑨́𝒖𝒅𝒊𝒐 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒏𝒅𝒐.."}]
}]
listMessage2 = {
text: ` 🀄𝑪𝑶𝑴𝑨𝑵𝑫𝑶-𝑰𝑵𝑬𝑿𝑰𝑺𝑻𝑬𝑵𝑻𝑬🀄

✮ۣۜۜ͜͡𝑮𝒓𝒖𝒑𝒐⧽ ${groupName}
✮ۣۜۜ͜͡𝑫𝒂𝒕𝒂⧽ ${date}
✮ۣۜۜ͜͡𝑯𝒐𝒓𝒂⧽ ${hora2}
       
✮ۣۜۜ͜͡${NomeDoBot}`,
  footer: `╰╼━══━━≺🎠≻━━══━╾╯`,
  title: "╭╼━══━━≺🎠≻━━══━╾╮",
  buttonText: "🎗𝐌𝐎𝐒𝐓𝐑𝐀𝐑-𝐋𝐈𝐒𝐓𝐀🎗",
  sections
}
sendMsg = await conn.sendMessage(from, listMessage2)
}
                           
//========================================\\

}

} catch (e) {
if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("at async groupMetadata")) {
console.log(color("Ignore esta mensagem..", "gray"))  
} else {
console.log(e)
}
}

})

conn.ev.on('connection.update', (update) => {
require("./conect.js")(conn, update)
}) 
 
fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('A index foi editada, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./dono/settings.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('settings.json foi editado, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./dono/nescessario.json', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('nescessario.json foi editado, irei reiniciar..'));
process.exit()
}
})

fs.watchFile('./conect.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('conect.js foi editado, irei reiniciar..'));
process.exit()
}
})
 
fs.watchFile('./consts-func.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color('consts-func.js foi editado, irei reiniciar..'));
process.exit()
}
}) 
 
}
  
startAle().catch(e => {console.log(e)})

module.exports = {
startAle
}

} catch (e) {
if(String(e).includes("Session error")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("rate-overlimit")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Bad MAC Error")){
console.log(color("Ignore esta mensagem..", "gray"))
} else if(String(e).includes("Key used already or never")) {
console.log(color("Ignore esta mensagem..", "gray"))
} else {
console.log(color(e, "red"))  
}
}