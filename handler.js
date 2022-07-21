let { Presence } = require('@adiwajshing/baileys')
let { performance } = require('perf_hooks')
const simple = require('./lib/simple')
const util = require('util')
const moment = require('moment-timezone')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
global.readMore = more.repeat(4001)

module.exports = {
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)//
        if (!chatUpdate) return
        if (chatUpdate.messages.length > 1) console.log(chatUpdate.messages)
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]

        const _uptime = process.uptime() * 1000
        global.u = await conn.clockString(_uptime)
        global.ucapan = ucapan()
        global.settings = global.db.data.settings
        global.pickRandom = pickRandom
        global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
        global.img = pickRandom(global.waifu)
        global.fla = pickRandom(global.flaaa)
        global.namabot = conn.user.name
        global.packname = global.namabot
        global.author = global.data.owner
        //global.author = '𝐉𝐚𝐫𝐨𝐭'
        global.wm2 = global.data.namabot + ' ' + global.data.owner
        global.wm = '© ᴍᴀʀɪᴇ ᴀᴛᴀᴜ ɪᴋᴀᴡᴀ'
        global.colong1 = 'Ciss 📸'
        global.colong2 = '𝖀𝖟𝖚𝖎 𝕮𝖍𝖆𝖓'
        global.kontak2 = [
        ['6285795586847', '𝖀𝖟𝖚𝖎 𝕮𝖍𝖆𝖓', '𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑩𝒐𝒕', 'https://chat.whatsapp.com/LdVST4O2wcX2xvpWZNZH3F', true],
        ['62887433094409', await this.getName('6285795586847@s.whatsapp.net'), 'ɢʀᴜᴘ ᴍᴀʀɪᴇ', 'https://chat.whatsapp.com/BpuUbEx8niML0pmEqkbp8L', true], 
        ]
        global.bg = await (await fetch(img)).buffer()
        global.time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')

        if (!m) return
        //console.log(JSON.stringify(m, null, 4))
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            // console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!isNumber(user.joincount)) user.joincount = 1
                    if (!isNumber(user.healt)) user.healt = 0
                    if (!isNumber(user.level)) user.level = 1
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.limit)) user.limit = 10
                    if (!isNumber(user.lastseen)) user.lastseen = 0
                    if (!isNumber(user.usebot)) user.usebot = 0
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!isNumber(user.lastclaim2)) user.lastclaim2 = 0  
                    if (!isNumber(user.lastngojek)) user.lastngojek = 0
                    if (!isNumber(user.lastnebang)) user.lastnebang = 0
                    if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
                    if (!isNumber(user.lastowner)) user.lastowner = 0
                    if (!isNumber(user.money)) user.money = 0
                    if (!isNumber(user.diamond)) user.diamond = 0
                    if (!isNumber(user.iron)) user.iron = 0
                    if (!isNumber(user.batu)) user.batu = 0
                    if (!isNumber(user.kayu)) user.kayu = 0
                    if (!isNumber(user.string)) user.string = 0  
                    if (!isNumber(user.common)) user.common = 0
                    if (!isNumber(user.uncommon)) user.uncommon = 0
                    if (!isNumber(user.mythic)) user.mythic = 0
                    if (!isNumber(user.legendary)) user.legendary = 0
                    if (!isNumber(user.pet)) user.pet = 0
                    if (!isNumber(user.potion)) user.potion = 0
                    if (!isNumber(user.sampah)) user.sampah = 0
                    if (!isNumber(user.armor)) user.armor = 0
                    if (!isNumber(user.kucing)) user.kucing = 0
                    if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
                    if (!isNumber(user.kuda)) user.kuda = 0
                    if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
                    if (!isNumber(user.rubah)) user.rubah = 0
                    if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
                    if (!isNumber(user.anjing)) user.anjing = 0
                    if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0
                    if (!isNumber(user.area)) user.area = 0
                    if (!('banned' in user)) user.banned = false
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.warning)) user.warning = 0
                    if (!isNumber(user.lastIstigfar)) user.lastIstigfar = 0
                    if (!isNumber(user.call)) user.call = 0  

                    if (!isNumber(user.afk)) user.afk = -1
                    if (!('afkReason' in user)) user.afkReason = ''
                    if (!('pasangan' in user)) user.pasangan = ''
                    // RPG
                    if (!isNumber(user.anakkucing)) user.anakkucing = 0
                    if (!isNumber(user.anakkuda)) user.anakkuda = 0
                    if (!isNumber(user.anakrubah)) user.anakrubah = 0
                    if (!isNumber(user.anakanjing)) user.anakanjing = 0
                    if (!isNumber(user.makananpet)) user.makananpet = 0
                    if (!isNumber(user.antispam)) user.antispam = 0
                    if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0
                    if (!isNumber(user.sword)) user.sword = 0
                    if (!isNumber(user.sworddurability)) user.sworddurability = 0
                    if (!isNumber(user.pickaxe)) user.pickaxe = 0
                    if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
                    if (!isNumber(user.fishingrod)) user.fishingrod = 0
                    if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
                    if (!isNumber(user.lastadventure)) user.lastadventure = 0
                    if (!isNumber(user.lastfishing)) user.lastfishing = 0
                    if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
                    if (!isNumber(user.lastduel)) user.lastduel = 0
                    if (!isNumber(user.lastmining)) user.lastmining = 0
                    if (!isNumber(user.lasthunt)) user.lasthunt = 0
                    if (!isNumber(user.lastweekly)) user.lastweekly = 0
                    if (!isNumber(user.lastmonthly)) user.lastmontly = 0  
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                    if (!('name' in user)) user.name = this.getName(m.sender)
                    if (!('email' in user)) user.email = ''
                    if (!('label' in user)) user.label = ''
                    if (!isNumber(user.age)) user.age = -1
                    if (!isNumber(user.regTime)) user.regTime = -1
                    }
                    if (!('premium' in user)) user.premium = false
                    if (!isNumber(user.premiumTime)) user.premiumTime = 0
                    if (!user.role) user.role = ''
                    if (!('autolevelup' in user)) user.autolevelup = false
                    if (!isNumber(user.pc)) user.pc = 0
                    //mancing
                    if (!isNumber(user.as)) user.as = 0
                    if (!isNumber(user.paus)) user.paus = 0
                    if (!isNumber(user.kepiting)) user.kepiting = 0
                    if (!isNumber(user.gurita)) user.gurita = 0
                    if (!isNumber(user.cumi)) user.cumi= 0
                    if (!isNumber(user.buntal)) user.buntal = 0
                    if (!isNumber(user.dory)) user.dory = 0
                    if (!isNumber(user.lumba)) user.lumba = 0
                    if (!isNumber(user.lobster)) user.lobster = 0
                    if (!isNumber(user.hiu)) user.hiu = 0
                    if (!isNumber(user.udang)) user.udang = 0
                    if (!isNumber(user.ikan)) user.ikan = 0
                    if (!isNumber(user.orca)) user.orca = 0
                    // kerja
                    if (!isNumber(user.atm)) user.atm = 0
                    if (!('job' in user)) user.job = 'Pengangguran'
                    if (!isNumber(user.lastjob)) user.lastjob = 0
                    if (!isNumber(user.lastkerja)) user.lastkerja = 0
                    if (!('ojek' in user)) user.ojek = false
                    if (!('pedagang' in user)) user.pedagang = false
                    if (!('dokter' in user)) user.dokter = false
                    if (!('petani' in user)) user.petani = false
                    if (!('montir' in user)) user.montir = false
                    if (!('kuli' in user)) user.kuli = false
                    if (!('polisi' in user)) user.polisi = false
                } else global.db.data.users[m.sender] = {
                    joincount: 1,
                    healt: 100,
                    level: 1,
                    exp: 0,
                    limit: 10,
                    lastseen: 0,
                    usebot: 0,
                    lastclaim: 0,
                    lastclaim2: 0,
                    lastngojek: 0,
                    lastnebang: 0,
                    lastnyampah: 0,
                    lastowner: 0,
                    money: 0,
                    diamond: 0,
                    iron: 0,
                    common: 0,
                    uncommon: 0,
                    mythic: 0,
                    legendary: 0,
                    pet: 0,
                    potion: 0,
                    sampah: 0,
                    armor: 0,
                    kucing: 0,
                    kucinglastclaim: 0,
                    kuda: 0,
                    kudalastclaim: 0,
                    rubah: 0,
                    rubahlastclaim: 0,
                    anjing: 0,
                    anjinglastclaim: 0,
                    area: 0,
                    banned: false,
                    warn: 0,
                    warning: 0,
                    lastIstigfar: 0,
                    call: 0,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                    anakkucing: 0,
                    anakkuda: 0,
                    anakrubah: 0,
                    anakanjing: 0,
                    makananpet: 0,
                    antispam: 0,
                    antispamlastclaim: 0,
                    kayu: 0,
                    batu: 0,
                    string: 0,
                    sword: 0,
                    sworddurability: 0,
                    pickaxe: 0,
                    pickaxedurability: 0,
                    fishingrod: 0,
                    fishingroddurability: 0,
                    lastadventure: 0,
                    lastfishing: 0,
                    lastdungeon: 0,
                    lastduel: 0,
                    lastmining: 0,
                    lasthunt: 0,
                    lastweekly: 0,
                    lastmonthly: 0,
                    registered: false,
                    name: this.getName(m.sender),
                    email: '',
                    label: '',
                    age: -1,
                    regTime: -1,
                    premium: false,
                    premiumTime: 0,
                    role: '',
                    autolevelup: false,
                    pc: 0,
                    // Mancing cuk
                    as: 0,
                    paus: 0,
                    kepiting: 0,
                    gurita: 0,
                    cumi: 0,
                    buntal: 0,
                    dory: 0,
                    lumba: 0,
                    lobster: 0,
                    hiu: 0,
                    udang: 0,
                    ikan: 0,
                    orca: 0,
                    // Kerja Woy
                    atm: 0,
                    job: 'Pengangguran',
                    lastjob: 0,
                    lastkerja: 0,
                    ojek: false,
                    pedagang: false,
                    dokter: false,
                    petani: false,
                    montir: false,
                    kuli: false,
                    polisi: false,
                }
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('name' in chat)) chat.name = this.getName(m.chat)
                    if (!('closeGroup' in chat)) chat.closeGroup = false
                    if (!isNumber(chat.add)) chat.add = 0
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('detect' in chat)) chat.detect = true
                    if (!('sWelcome' in chat)) chat.sWelcome = ''
                    if (!('sBye' in chat)) chat.sBye = ''
                    if (!('sPromote' in chat)) chat.sPromote = ''
                    if (!('sDemote' in chat)) chat.sDemote = ''
                    if (!('desc' in chat)) chat.desc = true
                    if (!('descUpdate' in chat)) chat.descUpdate = true
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('delete' in chat)) chat.delete = false
                    if (!('antiLink' in chat)) chat.antiLink = true
                    if (!isNumber(chat.expired)) chat.expired = 0
                    if (!('antiBadword' in chat)) chat.antiBadword = true
                    if (!('antispam' in chat)) chat.antispam = true
                    if (!('antitroli' in chat)) chat.antitroli = false
                    if (!('antivirtex' in chat)) chat.antivirtex = false
                    if (!('viewonce' in chat)) chat.viewonce = true
                    if (!('nsfw' in chat)) chat.nsfw = false
                    if (!('simi' in chat)) chat.simi = false
                    if (!('clear' in chat)) chat.clear = false
                    if (!isNumber(chat.cleartime)) chat.clearTime = 0 
                } else global.db.data.chats[m.chat] = {
                    name: this.getName(m.chat),
                    closeGroup: false,
                    add: 0,
                    isBanned: false,
                    welcome: true,
                    detect: true,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '',
                    sDemote: '',
                    desc: true,
                    descUpdate: true,
                    stiker: false,
                    delete: false,
                    antiLink: true,
                    expired: 0,
                    antiBadword: true,
                    antispam: true,
                    antitroli: false,
                    antivirtex: false,
                    viewonce: true,
                    nsfw: false,
                    simi: false,
                    clear: false,
                    clearTime: 0
                }
                let settings = global.db.data.settings[this.user.jid]
                if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
                if (settings) {
                    if (!'tag' in settings) settings.tag = true
                    if (!'self' in settings) settings.self = false
                    if (!'anon' in settings) settings.anon = true
                    if (!'anticall' in settings) settings.anticall = false
                    if (!'backup' in settings) settings.backup = false
                    if (!isNumber(settings.backupDB)) settings.backupDB = 0
                    if (!'groupOnly' in settings) settings.groupOnly = false
                    if (!'jadibot' in settings) settings.jadibot = false
                    if (!isNumber(settings.status)) settings.status = 0
                    if (!'epe' in settings) settings.epe = true
                    if (!'game' in settings) settings.game = true
                } else global.db.data.settings[this.user.jid] = {
                    tag: true,
                    self: false,
                    anon: true,
                    anticall: false,
                    backup: false,
                    backupDB: 0,
                    groupOnly: false,
                    jadibot: false,
                    status: 0,
                    epe: true,
                    game: true,
                }
            } catch (e) {
                console.error(e)
            }
            if (opts['nyimak']) return
            if (!m.fromMe && opts['self']) return
            if (opts['pconly'] && m.chat.endsWith('s.whatsapp.net')) return
            if (opts['gconly'] && !m.chat.endsWith('g.us')) return
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''
            if (opts['queque'] && m.text) {
                this.msgqueque.push(m.id || m.key.id)
                await delay(this.msgqueque.length * 1000)
            }
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!plugin.all) continue
                if (typeof plugin.all !== 'function') continue
                try {
                    await plugin.all.call(this, m, chatUpdate)
                } catch (e) {
                    if (typeof e === 'string') continue
                    console.error(e)
                }
            }
            if (m.isBaileys) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            global.prems = global.db.data.users[m.sender].premium ///JSON.parse(fs.readFileSync('./data/premium.json')) // Premium user has unlimited limit
            const isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isOwner = isROwner || m.fromMe
            if (!isOwner && db.data.settings.self) return // Saat mode self diaktifkan hanya owner yang dapat menggunakannya
            const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isPrems = isROwner || db.data.users[m.sender].premium || false
            //let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            if (!isPrems && !m.isGroup && global.db.data.settings.groupOnly) return
            const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
            const participants = (m.isGroup ? groupMetadata.participants : []) || []
            const user = (m.isGroup ? participants.find(u => this.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            const bot = (m.isGroup ? participants.find(u => this.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            const isAdmin = user && user?.admin || false // Is User Admin?
            const isBotAdmin = bot && bot?.admin || false // Are you Admin?

            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if ((usedPrefix = (match[0] || '')[0])) {
                    let noPrefix = m.text.replace(usedPrefix, '')
                    let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
                    args = args || []
                    let _args = noPrefix.trim().split` `.slice(1)
                    let text = _args.join` `
                    command = (command || '').toLowerCase()
                    let fail = plugin.fail || global.dfail // When failed
                    let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
                        plugin.command.test(command) :
                        Array.isArray(plugin.command) ? // Array?
                            plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                                cmd.test(command) :
                                cmd === command
                            ) :
                            typeof plugin.command === 'string' ? // String?
                                plugin.command === command :
                                false

                    if (!isAccept) continue
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && chat && chat?.isBanned && !isPrems) return // Kecuali ini, bisa digunakan
                        if (!['unbanchat.js', 'dompet.js', 'creator.js'].includes(name) && user && user?.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Owner UserJid
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Need register?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 200) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.sendButton(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, wm, 'Buy', '.buy', m)
                        // this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        this.sendButton(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, wm, `Levelup`, `.levelup`, m)
                        // this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        command,
                        text,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        chatUpdate,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || false
                    } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            for (let key of Object.values(global.APIKeys))
                                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
                            if (e.name)
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid)) {
                                let data = (await this.onWhatsApp(jid))[0] || {}
                                if (data.exists)
                                    m.reply(`*Plugin:* ${m.plugin}\n*Sender:* @${m.sender.split`@`[0]}\n*Chat:* ${m.chat}\n*Chat Name:* ${await this.getName(m.chat)}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``.trim(), data.jid, { mentions: [m.sender] })
                            }
                            m.reply(text)
                        }
                    } finally {
                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
                        //jika risih matiin aja 
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            // conn.sendPresenceUpdate('composing', m.chat) 
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }

            try {
                require('./lib/print')(m, this)
            } catch (e) {
                console.log(m, m.quoted, e)
            }
            if (opts['autoread']) await this.chatRead(m.chat, m.isGroup ? m.sender : undefined, m.id || m.key.id).catch(() => { })
            let quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
            if (opts['queque'] && m.text && quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
        }
    },

    async participantsUpdate({ id, participants, action }) {
        if (opts['self']) return
        // if (id in conn.chats) return // First login will spam
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
                if (chat.welcome) {
                    let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                    for (let user of participants) {
                        let pp = 'https://telegra.ph/file/2d06f0936842064f6b3bb.png'
                        try {
                            pp = await this.profilePictureUrl(user, 'image')
                        } catch (e) {

                        } finally {
                            text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                                (chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace('@user', await this.getName(user))
                            let wel = API('hardianto', '/api/welcome3', {
                                profile: pp,
                                name: await this.getName(user),
                                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                namegb: await this.getName(id),
                                member: groupMetadata.participants.length
                            })
                            let lea = API('hardianto', '/api/goodbye3', {
                                profile: pp,
                                name: await this.getName(user),
                                bg: 'https://telegra.ph/file/c538a6f5b0649a7861174.png',
                                namegb: await this.getName(id),
                                member: groupMetadata.participants.length
                            })
                            await this.send3TemplateButtonImg(id, action === 'add' ? wel : lea, text, wm, action === 'add' ? 'selamat datang' : 'sampai jumpa', action === 'add' ? '.intro' : 'FokusID')
                        }
                    }
                }
                break

            case 'promote':
                text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
            case 'demote':
                if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
                text = text.replace('@user', '@' + participants[0].split('@')[0])
                if (chat.detect) this.sendMessage(id, text, {
                    contextInfo: {
                        mentionedJid: this.parseMention(text)
                    }
                })
                break
        }
    },
    async groupsUpdate(groupsUpdate, fromMe, m) {
        if (opts['self'] && m.fromMe) return
            console.log(m)
        // Ingfo tag orang yg update group
        for (let groupUpdate of groupsUpdate) {
            const id = groupUpdate.id
            const participant = groupUpdate.participants
            console.log('\n\n=============\n\n In Groups Update \n\n============\n\n'+ `Id: ${id}\nParticipants: ${participant}` + '\n\n==============================\n')
            if (!id) continue
            let chats = global.db.data.chats[id], text = ''
            if (!chats.detect) continue
            if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
            if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
            if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
            if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Group link has been changed to```\n@revoke').replace('@revoke', groupUpdate.revoke)
            if (groupUpdate.announce == true) text = (chats.sAnnounceOn || this.sAnnounceOn || conn.sAnnounceOn || '```Group has been closed!')
            if (groupUpdate.announce == false) text = (chats.sAnnounceOff || this.sAnnounceOff || conn.sAnnounceOff || '```Group has been open!')
            if (groupUpdate.restrict == true) text = (chats.sRestrictOn || this.sRestrictOn || conn.sRestrictOn || '```Group has been all participants!')
            if (groupUpdate.restrict == false) text = (chats.sRestrictOff || this.sRestrictOff || conn.sRestrictOff || '```Group has been only admin!')
            //console.log('=============\n\ngroupsUpdate \n\n============\n\n' + await groupUpdate)
            if (!text) continue
            await this.sendButton(id, text, wm, 'Matikan Fitur', `.off detect`, global.ftroli, { contextInfo: { mentionedJid: this.parseMention(text) }, mentions: await this.parseMention(text) })
        }
    },
    async delete({ remoteJid, fromMe, id, participant }) {
        if (fromMe) return
        let chats = Object.entries(conn.chats).find(([user, data]) => data.messages && data.messages[id])
        if (!chats) return
        let msg = JSON.parse(chats[1].messages[id])
        let chat = global.db.data.chats[msg.key.remoteJid] || {}
        if (chat.delete) return
        this.sendButton(msg.key.remoteJid, `
Terdeteksi @${participant.split`@`[0]} telah menghapus pesan
Untuk mematikan fitur ini, ketik
*.enable delete*
`.trim(), wm, 'Matikan Fitur ini', '.enable delete', msg, {
            mentions: [participant]
        })
        await this.delay(1000)
        this.copyNForward(msg.key.remoteJid, msg).catch(e => console.log(e, msg))
    }
}

global.dfail = async (type, m, conn) => {
    let msg = {
        rowner: `Perintah ini hanya dapat digunakan oleh _*Team Bot Discussion!1!1!*_`,
        owner: `Perintah ini hanya dapat digunakan oleh _*Team Bot Discussion!1!1!*_`,
        mods: `Perintah ini hanya dapat digunakan oleh *Moderator*`,
        premium: 'Perintah ini hanya untuk member _*Premium*_ !',
        group: `Perintah ini hanya dapat digunakan di grup!`,
        private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',
        admin: 'Perintah ini hanya untuk *Admin* grup!',
        botAdmin: 'Jadikan bot sebagai *Admin* untuk menggunakan perintah ini!',
        unreg: 'Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar Uzui.20*',
        nsfw: `NSFW tidak aktif, Silahkan hubungi Team Bot Discussion untuk mengaktifkan fitur ini!`,
        rpg: `RPG tidak aktif, Silahkan hubungi Team Bot Discussion Untuk mengaktifkan fitur ini!`,
        restrict: 'Fitur ini di *disable*!'
    }[type]
    if (msg) return conn.reply(m.chat, msg, m, { mentions: conn.parseMention(msg) })
}

let fs = require('fs')
let chalk = require('chalk')
const { default: fetch } = require('node-fetch')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.thumb = 'https://telegra.ph/file/a4ab572988c30bc0fb923.jpg'

global.flaaa = [
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
]

global.waifu = [
'https://i.pinimg.com/originals/f2/86/e6/f286e6871b95c33d4f9b0b543a0d3538.jpg',
'https://i.pinimg.com/originals/4a/b4/6a/4ab46a26a196b8efb317e019636ced3c.jpg',
'https://i.pinimg.com/originals/86/f0/0c/86f00ca9130528304180d47799406f3f.jpg',
'https://i.pinimg.com/originals/60/11/5e/60115ea527fc8eccd374ef5a6adfc2a2.jpg',
'https://i.pinimg.com/originals/a2/e6/de/a2e6dedc92d46c302d0b4d447133f0b3.jpg',
'https://i.pinimg.com/originals/41/05/fe/4105fe704e617e52e37dfa7cb7422a1f.jpg',
'https://i.pinimg.com/originals/7c/6d/c4/7c6dc43307aebacea418b853538b990e.jpg',
'https://i.pinimg.com/originals/1c/63/36/1c6336ce2e5b63c5dbb2acb3cdd6d22a.jpg',
'https://i.pinimg.com/originals/94/a1/67/94a167b3a7706b9e24b7a0f41dab4c01.jpg',
'https://i.pinimg.com/originals/16/e6/d0/16e6d0ef9e471bc064d03d51a1b58778.jpg',
'https://i.pinimg.com/originals/20/84/c3/2084c3642ddb5045a75b67e3a4dc6631.jpg',
'https://i.pinimg.com/originals/66/0f/c6/660fc63af74e1a037957cce587a4d384.jpg',
'https://i.pinimg.com/originals/d4/07/1f/d4071f2b2d308af0d6219bd3968e24ab.jpg',
'https://i.pinimg.com/originals/fb/33/8c/fb338c9d17ed799966da77a9f3d044f5.jpg',
'https://i.pinimg.com/originals/5e/a6/8d/5ea68db50edcc021334c06a75c9bd349.jpg',
'https://i.pinimg.com/originals/bb/90/fc/bb90fc9fb14d312c2c4ecde301d57729.jpg',
'https://i.pinimg.com/originals/28/58/ba/2858ba0bc0bdb18b7095a65a07b37bee.jpg',
'https://i.pinimg.com/originals/41/9f/8e/419f8e73156df48bd0a9be1612fc23dc.jpg',
'https://i.pinimg.com/originals/46/5c/a2/465ca27108d0aaaf9ef9552d84f29167.jpg',
'https://i.pinimg.com/originals/97/0e/6d/970e6d9fa93a1d7a64af475de27c792e.jpg',
'https://i.pinimg.com/originals/c7/75/72/c775727ca44575647a0f80c9b69ca538.jpg',
'https://i.pinimg.com/originals/5f/87/26/5f8726347c504aefeadd5575714034fd.jpg',
'https://i.pinimg.com/originals/a9/5c/d2/a95cd21056587f60143417e244283152.jpg',
'https://i.pinimg.com/originals/8e/e4/13/8ee413547c1562bb7f1bd8cf34dff8b5.jpg',
'https://i.pinimg.com/originals/88/dd/24/88dd2494fb5b1d53071c6c77ded1b9b8.jpg',
'https://i.pinimg.com/originals/1e/91/f0/1e91f0e2746aa990aedf0a1ec737fe7b.jpg',
'https://i.pinimg.com/originals/a6/21/5c/a6215c72690e898b8d58429926895173.jpg',
'https://i.pinimg.com/originals/4f/b6/6f/4fb66f40654e590f54704a90591f57f5.jpg',
'https://i.pinimg.com/originals/4a/00/3a/4a003aa526da8e9fd927f66b8a30c439.jpg',
'https://i.pinimg.com/originals/5f/1f/89/5f1f89b3020f0c85f82d5ca8b3d59e1a.jpg',
'https://i.pinimg.com/originals/b5/bc/d2/b5bcd216f1f5238ca234297f80af1e47.jpg',
'https://i.pinimg.com/originals/81/e9/68/81e968530eed3f7284d3ca2057deae66.jpg',
'https://i.pinimg.com/originals/bd/f3/0c/bdf30c2ef45c3cc473d051a89e2dc75f.jpg',
'https://i.pinimg.com/originals/76/1b/c6/761bc6896c12c3c72587423d8e21c2dc.jpg',
'https://i.pinimg.com/originals/12/c2/6c/12c26cdadcea575d6237b49e0c1ce3f5.jpg',
'https://i.pinimg.com/originals/90/b6/52/90b65298d13a18a485324f02ed34e09a.jpg',
'https://i.pinimg.com/originals/d6/ce/35/d6ce3570c50137572f8c8fbc3dbf239a.jpg',
'https://i.pinimg.com/originals/21/4b/84/214b848b0e98b06a2138e1db3b995a46.jpg',
'https://i.pinimg.com/originals/a0/62/e9/a062e91dde8bad77935f91a57b361a2c.jpg',
'https://i.pinimg.com/originals/f6/13/ef/f613ef0172b52d1a25538429d68f411e.jpg',
'https://i.pinimg.com/originals/92/9f/12/929f12aab684a63cedc9bcb6f2099c3d.jpg',
'https://i.pinimg.com/originals/0b/6c/18/0b6c18e1d78b8a21f5265068a7069db7.jpg',
'https://i.pinimg.com/originals/66/2a/82/662a82a986df49f1d5650e9948a2f250.jpg',
'https://i.pinimg.com/originals/13/1f/76/131f76a81e9c4d6a70c11d487b909650.jpg'
'https://i.pinimg.com/originals/4a/e3/e5/4ae3e5592cd40ffa741e128eee83329d.jpg',
'https://i.pinimg.com/originals/75/6d/84/756d84c77e09c5db67056894d1fef5cc.jpg',
'https://i.pinimg.com/originals/49/a1/10/49a1105d65c530e7077ed13f48d74986.jpg',
'https://i.pinimg.com/originals/af/6e/e3/af6ee35839d4d1c354f90b78de4f2b0d.jpg',
'https://i.pinimg.com/originals/0b/13/56/0b1356febc001383f8d83a9767964f79.jpg',
'https://i.pinimg.com/originals/e8/17/86/e81786507d1cc946ea26f05a8f93ac5e.jpg',
'https://i.pinimg.com/originals/e8/17/86/e81786507d1cc946ea26f05a8f93ac5e.jpg',
'https://i.pinimg.com/originals/0c/5c/19/0c5c197af1894315bdb3cdab742c3286.jpg',
'https://i.pinimg.com/originals/1e/a7/ad/1ea7adc5f943ecea21bd09bee6b5efe4.jpg',
'https://i.pinimg.com/originals/ab/44/e1/ab44e1120b7e5493629ef487cfc2faff.jpg',
'https://i.pinimg.com/originals/89/1c/a0/891ca0fd821cb54008ab8547421e559b.jpg',
'https://i.pinimg.com/originals/1e/c4/89/1ec489449ded4a1fe5693fdbe6db83a2.jpg',
'https://i.pinimg.com/originals/69/4c/cc/694ccc98a7bfa6f5dfbd5a15298dca88.jpg',
'https://i.pinimg.com/originals/3b/e0/e7/3be0e77f0da37dd4319de30aba7807cf.jpg',
'https://i.pinimg.com/originals/e1/af/ae/e1afae7d37bdfc692123d8afbf9030b3.jpg',
'https://i.pinimg.com/originals/da/aa/5a/daaa5a8dc14b76e9ff8c2595651109d9.jpg',
'https://i.pinimg.com/originals/06/70/a6/0670a674b6e7535c4c35b235f28e8f06.jpg',
'https://i.pinimg.com/originals/fe/4e/01/fe4e01d12f2a8e8d2b98e0cdb516ca1f.jpg',
'https://i.pinimg.com/originals/6f/d9/e1/6fd9e182dc2caeabbb0cff35e2c9fdbd.jpg',
'https://i.pinimg.com/originals/ba/1c/cc/ba1cccfeaece2cc1bdbeccfe850d7bc5.png',
'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',
'https://i.pinimg.com/originals/df/3e/8a/df3e8a658a44f7e7ce3ed50603f41204.jpg',
'https://i.pinimg.com/originals/47/a5/eb/47a5ebc55d1558965731e89932c0ca52.jpg',
'https://i.pinimg.com/originals/e9/d9/ae/e9d9aeac9ab2da18b3e85e26c0be52b1.jpg',
'https://i.pinimg.com/originals/c2/d4/68/c2d4682a31a8fa6b086326ef14b99503.png',
'https://i.pinimg.com/originals/6b/dc/f1/6bdcf12024b38de2d6f44d5f5f0d2733.jpg',
'https://i.pinimg.com/originals/04/15/4e/04154e7adad50e25bc123d0a2ac2fa1b.jpg',
'https://i.pinimg.com/originals/5e/cf/fb/5ecffb2c8edc61abafb82007b5470675.jpg',
'https://i.pinimg.com/originals/37/cc/f5/37ccf5afead6a071a8f3d62d6cc97f78.jpg',
'https://i.pinimg.com/originals/59/c2/3c/59c23cea8215475df6443b5ae3232c4a.jpg',
'https://i.pinimg.com/originals/28/1b/b6/281bb6eb416525cf83cf495e27e21267.jpg',
'https://i.pinimg.com/originals/e8/65/95/e86595936f784c7507f3774e72d230f7.jpg',
'https://i.pinimg.com/originals/78/bd/a8/78bda89128b79935a16b6c9f96b78b7f.jpg',
'https://i.pinimg.com/originals/b4/77/73/b47773bfe9bc4424e4202bc644160f58.jpg',
'https://i.pinimg.com/originals/96/a6/f7/96a6f73702d97c6e834b9d3ba1075406.jpg',
'https://i.pinimg.com/originals/9b/60/89/9b608901d3866ce7f0eb77993cd7f604.png',
'https://i.pinimg.com/originals/f6/c0/59/f6c05936de58471c9b089ca9abacd343.jpg',
'https://i.pinimg.com/originals/61/9d/e9/619de9422ed5d111e5b382d90218276e.jpg',
'https://i.pinimg.com/originals/7e/4a/b3/7e4ab3f7dcd4982b8674b3168a7c556f.jpg',
'https://i.pinimg.com/originals/73/96/54/739654a8356ecfb59d4538779ddd9dfa.jpg',
'https://i.pinimg.com/originals/74/96/b1/7496b10ed594f0a9e1a85279e123abdc.jpg',
'https://i.pinimg.com/originals/6b/88/75/6b8875d1875dbfa29eca3ea0da9e4d06.jpg',
'https://i.pinimg.com/originals/05/6a/f8/056af853b93bf74a0143d9748e10335c.jpg',
'https://i.pinimg.com/originals/0c/83/58/0c83588e7940cd4168645bf466f28c7c.jpg',
'https://i.pinimg.com/originals/eb/17/20/eb17203cb1cc791f82ccf3c20fae60f2.jpg'
]
