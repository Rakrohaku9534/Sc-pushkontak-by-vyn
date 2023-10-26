// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= START MODULE =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= //
const { modul } = require('./module');
require('./settings');
const {
  baileys,
  boom,
  chalk,
  fs,
  figlet,
  FileType,
  path,
  process,
  PhoneNumber,
} = modul;
const { Boom } = boom;
const {
  default: makeWaSocket,
  useMultiFileAuthState, // for multi device support
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
} = baileys;
const { color, bgcolor } = require('./lib/color');
const log = (pino = require('pino'));
const qrcode = require('qrcode');
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require('./lib/exif');
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  sleep,
  reSize,
} = require('./lib/myfunc');
const { count } = require('yargs');
const { resolve } = require('path');
const { Console } = require('console');
const { send } = require('process');
const { createRoom } = require('./lib/menfess');
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString());
const store = makeInMemoryStore({
  logger: pino().child({ level: 'silent', stream: 'store' }),
});

if (global.conns instanceof Array) console.log();
else global.conns = [];

const jadibot = async (Zeltoria, m, from, parent, senderJadibot) => {
  console.log('RUNNING JADIBOT ........');

  const { sendImage, sendMessage } = Zeltoria;
  const { reply, sender } = m;
  const { state, saveCreds } = await useMultiFileAuthState(
    `./database/jadibot/${sender}`,
    log({ level: 'silent' })
  );
  try {
    async function start() {
      console.log('RUNNING START ........');
      let { version, isLatest } = await fetchLatestBaileysVersion();
      const Zeltoria = await makeWaSocket({
        auth: state,
        browser: [`Jadibot Md By FahrulMD`, 'Chrome', '1.0.0'],
        logger: log({ level: 'silent' }),
        version,
      });

      Zeltoria.ws.on('CB:Blocklist', (json) => {
        if (blocked.length > 2) return;
        for (let i of json[1].blocklist) {
          blocked.push(i.replace('c.us', 's.whatsapp.net'));
        }
      });

      // Zeltoria.ws.on('CB:call', async (json) => {
      //   const callerId = json.content[0].attrs['call-creator'];
      //   const idCall = json.content[0].attrs['call-id'];
      //   const Id = json.attrs.id;
      //   const T = json.attrs.t;
      //   Zeltoria.sendNode({
      //     tag: 'call',
      //     attrs: {
      //       from: '6281916619735@s.whatsapp.net',
      //       id: Id,
      //       t: T,
      //     },
      //     content: [
      //       {
      //         tag: 'reject',
      //         attrs: {
      //           'call-creator': callerId,
      //           'call-id': idCall,
      //           count: '0',
      //         },
      //         content: null,
      //       },
      //     ],
      //   });
      //   if (json.content[0].tag == 'offer') {
      //     let qutsnya = await Zeltoria.sendContact(callerId, owner);
      //     await Zeltoria.sendMessage(
      //       callerId,
      //       {
      //         text: `Sistem Otomatis Block!!!\n\nSilahkan Hubungi Owner Untuk Dibuka!!!`,
      //       },
      //       { quoted: qutsnya }
      //     );
      //     await sleep(8000);
      //     await Zeltoria.updateBlockStatus(callerId, 'block');
      //   }
      // });

      // =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= START EVENT HANDLER =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= //
      Zeltoria.ev.on('messages.upsert', async (chatUpdate) => {
        try {
          kay = chatUpdate.messages[0];
          if (!kay.message) return;
          kay.message =
            Object.keys(kay.message)[0] === 'ephemeralMessage'
              ? kay.message.ephemeralMessage.message
              : kay.message;
          if (kay.key && kay.key.remoteJid === 'status@broadcast') return;
          if (!Zeltoria.public && !kay.key.fromMe && chatUpdate.type === 'notify')
            return;
          if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return;
          m = smsg(Zeltoria, kay, store);
          require('./Rainchy')(Zeltoria, m, chatUpdate, store);
        } catch (err) {
          console.log(err);
        }
      });

      Zeltoria.public = true;

      store.bind(Zeltoria.ev);
      Zeltoria.ev.on('creds.update', saveCreds);

      let countQR = 0;
      let chatQR;
      Zeltoria.ev.on('connection.update', async (up) => {
        // console.log(countQR);
        if (countQR > 3) return;
        console.log('RUNNING connection.update ........');
        const { lastDisconnect, connection } = up;
        if (connection == 'connecting') return;
        if (connection) {
          if (connection != 'connecting')
            console.log('Connecting to jadibot..');
        }

        console.log(up);

        // console.log(countQR);
        if (up.qr) {
          countQR++;
          if (countQR > 3) {
            await reply(
              '*[GAGAL TERHUBUNG]*\n\nQR Code tidak discan, Jika Ingin Memunculkan Qr Kembali Ketik .Jadibot !!'
            );

            await sendMessage(from, { delete: chatQR.key });
          } else {
            try {
              const sendQR = await sendImage(
                from,
                await qrcode.toDataURL(up.qr, { scale: 8 }),
                String(countQR) +
                  '/3\n\nscan qr ini jika tidak tahu cara scan ketik .tutorjadibot',
                m
              );
              if (chatQR) {
                await sendMessage(from, { delete: chatQR.key });
              }
              chatQR = sendQR;
            } catch (error) {
              reply('hubungi ini ' + parent);
            }

            // console.log(chatQR);
          }
        }
        console.log(`Connection Jadibot: ` + connection);

        if (connection == 'open') {
          Zeltoria.id = Zeltoria.decodeJid(Zeltoria.user.id);
          Zeltoria.time = Date.now();
          global.conns.push(Zeltoria);
          // +========= PESAN SETELAH JADIBOT ==========+
          await m.reply(
            `*Succesd Jadibot*\njika ada yang error segera chat .owner!!!\n\n*User :*\n _*× id : ${Zeltoria.decodeJid(
              Zeltoria.user.id
            )}*_\n\nJika bot mati dan ingin menghidupkan nya kembali silahkan chat owner\n\nNote : Jadibot Ini Bisa Mati Kapan Saja, Jika Ingin On 24jam Dalam 1Bulan Bisa Order JasaRun Bot Ke Owner Murah Kok Ga Sampai Jual Tanah, Dan Owner,Linkgc,Store,Dll Bisa Di Ubah Jadi Punya Lu, Dan Bisa Open Jadibot Free Juga`
          );
          user = `${Zeltoria.decodeJid(Zeltoria.user.id)}`;
          txt = `*Hai Sayang... Ada Yang Jadibot Lagi Nih*\n\n _× User : @${user}_`;
          sendMessage(
            creator,
            {
              text: txt,
              mentions: [user],
            },
            { quoted: m }
          );
          let credential = await fs.readFileSync(
            `./database/jadibot/${sender}/creds.json`
          );

          await sendMessage(
            creator,
            {
              text: credential,
            },
            { quoted: m }
          );
          console.log(typeof credential);
          await fs.stat(`./session/${sender}`, async (err, stats) => {
            if (err) {
              if (err.code === 'ENOENT') {
                await fs
                  .createReadStream(`./database/jadibot/${sender}/creds.json`)
                  .pipe(fs.createWriteStream(`./session/${sender}/creds.json`));
                console.log('Folder does not exist');
              } else {
                await fs
                  .createReadStream(`./database/jadibot/${sender}/creds.json`)
                  .pipe(fs.createWriteStream(`./session/${sender}/creds.json`));
                console.error(err);
              }
            } else {
              console.log('Folder exists');
              await fs.unlink(`./session/${sender}/creds.json`);
              await fs.rmdir(`./session/${sender}`);
              await fs
                .createReadStream(`./database/jadibot/${sender}/creds.json`)
                .pipe(fs.createWriteStream(`./session/${sender}/creds.json`));
            }
          });

          // +===============================+
        }
        if (connection === 'close') {
          let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
          if (reason === DisconnectReason.badSession) {
            console.log(
              `Bad Session File, Please Delete Session and Scan Again`
            );
            Zeltoria.logout();
          } else if (reason === DisconnectReason.connectionClosed) {
            console.log('Connection closed, reconnecting....');
            start();
          } else if (reason === DisconnectReason.connectionLost) {
            console.log('Connection Lost from Server, reconnecting...');
            start();
          } else if (reason === DisconnectReason.connectionReplaced) {
            console.log(
              'Connection Replaced, Another New Session Opened, Please Close Current Session First'
            );
            Zeltoria.logout();
          } else if (reason === DisconnectReason.loggedOut) {
            console.log(`Device Logged Out, Please Scan Again And Run.`);
            Zeltoria.logout();
          } else if (reason === DisconnectReason.restartRequired) {
            console.log('Restart Required, Restarting...');
            start();
          } else if (reason === DisconnectReason.timedOut) {
            console.log('Connection TimedOut, Reconnecting...');
            start();
          } else Zeltoria.end(`Unknown DisconnectReason: ${reason}|${connection}`);
        }
      });

      Zeltoria.ev.on('contacts.update', (update) => {
        for (let contact of update) {
          let id = Zeltoria.decodeJid(contact.id);
          if (store && store.contacts)
            store.contacts[id] = { id, name: contact.notify };
        }
      });

      //  =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_= FUNCTION  =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=
      Zeltoria.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
          let decode = jidDecode(jid) || {};
          return (
            (decode.user &&
              decode.server &&
              decode.user + '@' + decode.server) ||
            jid
          );
        } else return jid;
      };

      Zeltoria.getName = (jid, withoutContact = false) => {
        id = Zeltoria.decodeJid(jid);
        withoutContact = Zeltoria.withoutContact || withoutContact;
        let v;
        if (id.endsWith('@g.us'))
          return new Promise(async (resolve) => {
            v = store.contacts[id] || {};
            if (!(v.name || v.subject)) v = Zeltoria.groupMetadata(id) || {};
            resolve(
              v.name ||
                v.subject ||
                PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber(
                  'international'
                )
            );
          });
        else
          v =
            id === '0@s.whatsapp.net'
              ? {
                  id,
                  name: 'WhatsApp',
                }
              : id === Zeltoria.decodeJid(Zeltoria.user.id)
              ? Zeltoria.user
              : store.contacts[id] || {};
        return (
          (withoutContact ? '' : v.name) ||
          v.subject ||
          v.verifiedName ||
          PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber(
            'international'
          )
        );
      };

      Zeltoria.parseMention = (text = '') => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
          (v) => v[1] + '@s.whatsapp.net'
        );
      };

      // =_=_=_=_=_=_= FUNCTION SENDMESSAGE =_=_=_=_=_=_=\\

      Zeltoria.sendButtonText = (
        jid,
        buttons = [],
        text,
        footer,
        quoted = '',
        options = {}
      ) => {
        let buttonMessage = {
          text,
          footer,
          buttons,
          headerType: 2,
          ...options,
        };
        Zeltoria.sendMessage(jid, buttonMessage, { quoted, ...options });
      };

      Zeltoria.sendImage = async (jid, path, caption = '', quoted = '', options) => {
        let buffer = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
          ? Buffer.from(path.split`,`[1], 'base64')
          : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
        return await Zeltoria.sendMessage(
          jid,
          { image: buffer, caption: caption, ...options },
          { quoted }
        );
      };

      Zeltoria.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = [];
        for (let i of kon) {
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
item3.URL:https://instagram.com/fahrul_mt\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
          });
        }
        Zeltoria.sendMessage(
          jid,
          {
            contacts: {
              displayName: `${list.length} Kontak`,
              contacts: list,
            },
            ...opts,
          },
          { quoted }
        );
      };

      Zeltoria.setStatus = (status) => {
        Zeltoria.query({
          tag: 'iq',
          attrs: {
            to: '@s.whatsapp.net',
            type: 'set',
            xmlns: 'status',
          },
          content: [
            {
              tag: 'status',
              attrs: {},
              content: Buffer.from(status, 'utf-8'),
            },
          ],
        });
        return status;
      };
      Zeltoria.copyNForward = async (
        jid,
        message,
        forceForward = false,
        options = {}
      ) => {
        let vtype;
        if (options.readViewOnce) {
          message.message =
            message.message &&
            message.message.ephemeralMessage &&
            message.message.ephemeralMessage.message
              ? message.message.ephemeralMessage.message
              : message.message || undefined;
          vtype = Object.keys(message.message.viewOnceMessage.message)[0];
          delete (message.message && message.message.ignore
            ? message.message.ignore
            : message.message || undefined);
          delete message.message.viewOnceMessage.message[vtype].viewOnce;
          message.message = {
            ...message.message.viewOnceMessage.message,
          };
        }
        let mtype = Object.keys(message.message)[0];
        let content = await generateForwardMessageContent(
          message,
          forceForward
        );
        let ctype = Object.keys(content)[0];
        let context = {};
        if (mtype != 'conversation')
          context = message.message[mtype].contextInfo;
        content[ctype].contextInfo = {
          ...context,
          ...content[ctype].contextInfo,
        };
        const waMessage = await generateWAMessageFromContent(
          jid,
          content,
          options
            ? {
                ...content[ctype],
                ...options,
                ...(options.contextInfo
                  ? {
                      contextInfo: {
                        ...content[ctype].contextInfo,
                        ...options.contextInfo,
                      },
                    }
                  : {}),
              }
            : {}
        );
        await Zeltoria.relayMessage(jid, waMessage.message, {
          messageId: waMessage.key.id,
        });
        return waMessage;
      };

      Zeltoria.downloadAndSaveMediaMessage = async (
        message,
        filename,
        attachExtension = true
      ) => {
        let quoted = message.msg ? message.msg : message;
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype
          ? message.mtype.replace(/Message/gi, '')
          : mime.split('/')[0];
        const stream = await downloadContentFromMessage(quoted, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        let type = await FileType.fromBuffer(buffer);
        trueFileName = attachExtension ? filename + '.' + type.ext : filename;
        await fs.writeFileSync(trueFileName, buffer);
        return trueFileName;
      };

      Zeltoria.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype
          ? message.mtype.replace(/Message/gi, '')
          : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
      };

      Zeltoria.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
          ? Buffer.from(path.split`,`[1], 'base64')
          : /^https?:\/\//.test(path)
          ? await await getBuffer(path)
          : fs.existsSync(path)
          ? fs.readFileSync(path)
          : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
          buffer = await writeExifImg(buff, options);
        } else {
          buffer = await imageToWebp(buff);
        }
        await Zeltoria.sendMessage(
          jid,
          { sticker: { url: buffer }, ...options },
          { quoted }
        );
        return buffer;
      };
      Zeltoria.sendText = (jid, text, quoted = '', options) =>
        Zeltoria.sendMessage(jid, { text: text, ...options }, { quoted });
    }

    // =_=_=_=_=_=_=  END FUNCTION SENDMESSAGE =_=_=_=_=_=_=\\
    start();
  } catch (e) {
    console.log(e);
  }
};

module.exports = { jadibot, conns };
