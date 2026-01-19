//como usar no seu bot um exemplo 
 
const BLACKOUT_API = "https://api.blackout.toshiruz.site";
const BLACKOUT_KEY = "sua key";


//cases abaixo do swith

//downloads
case 'playvídeo2': case 'playvideo2': { // Tosh blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
try {
if (!q) return enviar(`Use: ${prefix}playvideo nome do video`);
enviar(frasePlayMp4(pushname));
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
return enviar("Nenhum resultado encontrado.");
const video = res.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) return enviar("⏱️ Vídeos acima de 1 hora não são suportados.");
const mensagem = `*_${NomeDoBot}_*
-✥------- † -------✥-
> ●❯───────────────❮●
> *Música escolhida por:* ${pushname}
> ${video.title}
> 0:35 ━❍──────── - ${video.duration?.timestamp || '??'}
> ↻ ⊲ Ⅱ ⊳ ↺ *Postado:* ${video.ago || 'Desconhecido'}

> *VOLUME: ■■■■■□□□ 100%*
> *TÍTULO:* ${video.author?.name || 'Desconhecido'}

  ▄ █ ▄ █ ▄ ▄ █ ▄ █ ▄ █
> *Min- – – – – – – – – -●Max*
> ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
╰✥------- † -------✥-
`.trim();
const canvasUrl = `${BLACKOUT_API}/api/canva/musicCard2?` +
`name=${encodeURIComponent(video.title)}` +
`&avatar=${encodeURIComponent(video.thumbnail || video.image)}` +
 `&artistName=${encodeURIComponent(video.author?.name || 'Desconhecido')}` +
`&time=${encodeURIComponent(video.duration?.timestamp || '0:00')}` + `&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { image: { url: canvasUrl },   caption: mensagem  }, { quoted: seloMeta });
const videoUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`; 
await client.sendMessage(from, { video: { url: videoUrl },mimetype: 'video/mp4', fileName: `${video.title}.mp4` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no playvideo:", e);
return enviar(mensagens.erro);
}}
break;

case 'playdoc'://Tosh blackout 
try {
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar(`Use: ${prefix}playdoc nome da música`);
enviar(frasePlay(pushname));
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0) 
return enviar("Nenhum resultado encontrado.");
const video = res.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600) 
return enviar("Vídeos acima de 1 hora não são suportados.");
const mensagem = `
> *🎵✰ Título:* ${video.title}
> *⏱️✰ Duração:* ${video.duration?.timestamp || '??'}
> *📅✰ Postado:* ${video.ago || 'Desconhecido'}
> *👤✰ Canal:* ${video.author?.name || 'Desconhecido'}

> 01:57 ───────●─── ${video.duration?.timestamp || '??'}
ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻ ♡

> *✰🎧➤ Pedido por ${pushname}✰*
`.trim();
const fundo = 'https://files.catbox.moe/1t7fmu.jpg';
const canvasUrl = `https://api.popcat.xyz/welcomecard2?background=${encodeURIComponent(fundo)}&text1=✰${encodeURIComponent(video.author?.name || 'Desconhecido')}✰&text2=${encodeURIComponent(video.author?.name || 'Desconhecido')}&text3=✰${encodeURIComponent(video.duration?.timestamp || '0:00')} ✰&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
await client.sendMessage(from, { image: { url: canvasUrl },caption: mensagem }, { quoted: seloMeta });
const audioUrl = `${BLACKOUT_API}/api/download/playv3?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { document: { url: audioUrl },mimetype: 'audio/mpeg', fileName: `${video.title}.mp3` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no play:", e);
return enviar("Erro ao processar. Tente outro nome.");
}
break;

case 'playdocvideo': {//Tosh blackout 
try {
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar(`Use: ${prefix}playdocvideo nome da música`);
enviar(frasePlayMp4(pushname));
const res = await fetchJson(`${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`);
if (!res?.status || !Array.isArray(res.resultado) || res.resultado.length === 0)
return enviar("Nenhum resultado encontrado.");
const video = res.resultado.find(v => v.type === 'video');
if (!video) return enviar("Vídeo não encontrado.");
if (video?.duration?.seconds >= 3600)
return enviar("Vídeos acima de 1 hora não são suportados.");
const mensagem = `
> *🎵✰ Título:* ${video.title}
> *⏱️✰ Duração:* ${video.duration?.timestamp || '??'}
> *📅✰ Postado:* ${video.ago || 'Desconhecido'}
> *👤✰ Canal:* ${video.author?.name || 'Desconhecido'}

> 01:57 ───────●─── ${video.duration?.timestamp || '??'}
ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻ ♡

> *✰🎧➤ Buscando seu documento ${pushname}...*
`.trim();
const fundo = 'https://files.catbox.moe/1t7fmu.jpg';
const canvasUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(fundo)}&text1=✰${encodeURIComponent(video.author?.name || 'Desconhecido')}✰&text2=${encodeURIComponent(video.author?.name || 'Desconhecido')}&text3=✰${encodeURIComponent(video.duration?.timestamp || '0:00')} ✰&avatar=${encodeURIComponent(video.thumbnail || video.image)}`;
await client.sendMessage(from, { image: { url: canvasUrl },caption: mensagem }, { quoted: seloMeta });
const videoDocUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { document: { url: videoDocUrl },mimetype: 'video/mp4',fileName: `${video.title}.mp4` }, { quoted: seloMeta });
} catch (e) { console.error("Erro no playdocvideo:", e);
return enviar("Ocorreu um erro ao baixar o vídeo.");
}}
break;

case 'play': { // Tosh Blackout 
try {
if (!q) return enviar(`🎶 Exemplo: ${prefix}play nome da música`);
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key }});
const apiUrl = `${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
const res = await fetchJson(apiUrl);
if (!res?.status || !res?.resultado?.length) {
return enviar('Nenhum resultado encontrado.');
}
const video = res.resultado[0];
const texto = `*_${NomeDoBot}_*
-✥------- † -------✥-
> ●❯───────────────❮●
> 🎵 *Título:* ${video.title || 'Sem título'}
> ⏱️ *Duração:* ${video.timestamp || '00:00'}
> *VOLUME: ■■■■■□□□ 100%*
> 📺 *Canal:* ${video.author?.name || 'Desconhecido'}
> *Min- – – – – – – – – -●Max*
> *_Caso queira uma playlist ${prefix}playlist matue_*
> ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
╰✥------- † -------✥-`;
await client.sendMessage(from, { image: { url: video.image || video.thumbnail || 'https://i.imgur.com/A04o2hW.jpeg' },caption: texto }, { quoted: seloMeta });
const audioUrl = `${BLACKOUT_API}/api/download/playv3?nome=${encodeURIComponent(video.title)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: 'Blackout_Play.mp3', ptt: false }, { quoted: seloMeta });
} catch (e) {
console.error('ERRO PLAY REAL:', e);
enviar('Erro ao tocar música.');
}
}
break;

case 'playvídeo': case 'playvideo': { // Tosh Blackout 
try {
if (!q) return enviar(`🎶 Exemplo: ${prefix}play nome da música`);
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key }});
const apiUrl = `${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
const res = await fetchJson(apiUrl);
if (!res?.status || !res?.resultado?.length) {
return enviar('Nenhum resultado encontrado.');
}
const video = res.resultado[0];
const texto = `*_${NomeDoBot}_*
-✥------- † -------✥-
> ●❯───────────────❮●
> 🎵 *Título:* ${video.title || 'Sem título'}
> ⏱️ *Duração:* ${video.timestamp || '00:00'}
> *VOLUME: ■■■■■□□□ 100%*
> 📺 *Canal:* ${video.author?.name || 'Desconhecido'}
> *Min- – – – – – – – – -●Max*
> *_Caso queira uma playlist ${prefix}playlist matue_*
> ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
╰✥------- † -------✥-`;
await client.sendMessage(from, { image: { url: video.image || video.thumbnail || 'https://i.imgur.com/A04o2hW.jpeg' },caption: texto }, { quoted: seloMeta });
const vídeoUrl = `${BLACKOUT_API}/api/download/playvd?nome=${encodeURIComponent(video.title)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { video: { url: vídeoUrl }, mimetype: 'video/mp4', fileName: 'Blackout_Play.mp4', ptt: false }, { quoted: seloMeta });
} catch (e) {
console.error('ERRO PLAYVÍDEO REAL:', e);
enviar('Erro ao baixar video.');
}
}
break;

case 'playlist': {//Tosh Blackout com botão 
try {
if (!q) return enviar(`🎶 Exemplo: ${prefix}playmix nome do artista ou música`);
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
const apiUrl = `${BLACKOUT_API}/api/pesquisa/youtube?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
const res = await fetchJson(apiUrl);
if (!res || !res.status || !Array.isArray(res.resultado) || res.resultado.length === 0) {
return enviar('Nenhum resultado encontrado.');
}
const itensMix = res.resultado.slice(0, 20).map((v, i) => ({
 header: `TOP: ${i + 1}`,
title: (v.title || 'Sem título').substring(0, 45),
description: `Duração: ${v.timestamp || '00:00'} | Canal: ${v.author?.name || 'Desconhecido'}`, id: `${prefix}mixaudio ${v.url}` }));
const capaMix = (res.resultado[0]?.image || res.resultado[0]?.thumbnail || 'https://i.imgur.com/A04o2hW.jpeg');
const menuPersonalizado = `*_${NomeDoBot}_*
-✥------- † -------✥-
> ●❯───────────────❮●
> *📀BLACKOUT TUBE*
> PLAYLIST: ${q}
> *VOLUME: ■■■■■□□□ 100%*
> *TÍTULO:* ${res.resultado[0].title.substring(0, 20)}...
> *Min- – – – – – – – – -●Max*
> *_caso api caia use ${prefix}playmp3_*
> ──.·:*¨✘‿✘¨*:·.───.·:*¨✘‿✘¨*:·.─
╰✥------- † -------✥-
*CD:* ${q} *Faixa:* ${res.resultado.length}`;
botaoLista( client,  from, menuPersonalizado, capaMix, 
`Playlist ${pushname}`, "Selecione para baixar", itensMix );
} catch (e) {
console.error('ERRO PLAYMIX:', e);
enviar(`Erro ao processar busca: ${e.message}`);
}
}
break;

case 'mixaudio': { //Tosh Blackout 
try {
if (!q) return enviar('Link inválido.');
reagir('🎶');
const audioUrl = `${BLACKOUT_API}/api/download/playv3?nome=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`;
await client.sendMessage(from, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', fileName: 'Blackout_Mix.mp3', ptt: false  }, { quoted: seloMeta }); 
} catch (e) {
console.error('ERRO MIXAUDIO:', e);
enviar('Erro ao baixar o áudio. Tente novamente em instantes.');
}}
break;

//imagens 

case 'pinterest': {//Tosh Blackout 
try {
if (!args.length) {
return enviar('Digite o que deseja pesquisar.\nEx: pinterest Naruto');
}
const termo = args.join(' ');
enviar(mensagens.carregando);
const axios = require('axios');
const api = `${BLACKOUT_API}/api/pesquisa/pinterest2?nome=${encodeURIComponent(termo)}&apikey=${BLACKOUT_KEY}`;
const { data } = await axios.get(api, {
timeout: 15000, headers: { Accept: 'application/json' }});
if (!data?.status || !Array.isArray(data.resultado) || data.resultado.length === 0) {
return enviar(`Nenhum resultado encontrado para "${termo}".`);
}
const escolha = data.resultado[Math.floor(Math.random() * data.resultado.length)];
if (!escolha?.url || !escolha.url.startsWith('http')) {
return enviar('Não consegui obter uma mídia válida.');
}
const isGif = escolha.url.endsWith('.gif');
await client.sendMessage(from, isGif  ? { video: { url: escolha.url }, gifPlayback: true,  caption: `🕹️ Pesquisa: ${termo}` }: { image: { url: escolha.url }, caption: `🕹️ Pesquisa: ${termo}` }, { quoted: seloMeta });
} catch (err) {
console.error('[ERRO PINTEREST]', err);
enviar('Erro ao buscar imagem no Pinterest.');
}}
break;

case 'gerarlink': case 'upload': case 'uploads'://Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
async function uploadToshiruz(fileBuffer, fileType) {
const FormData = require('form-data');
const fetch = require('node-fetch');
const form = new FormData();
form.append('file', fileBuffer, { filename: `file.${fileType}`, contentType: `application/${fileType}` });
const response = await fetch('https://api.blackout.toshiruz.site/upload/single', {
method: 'POST', body: form, headers: form.getHeaders(), });
if (!response.ok) {
throw new Error('Falha ao enviar o arquivo para o servidor.');
}
const data = await response.json();
if (data && data.fileUrl) { return data.fileUrl;
} else { throw new Error('Não foi possível obter o URL do arquivo enviado.');
}}
let fileBuffer;
let fileType;
if (isQuotedImage) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage;
fileBuffer = await getFileBuffer(boij, 'image');
fileType = 'jpg';
} else if (isQuotedSticker) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.stickerMessage;
fileBuffer = await getFileBuffer(boij, 'sticker');
fileType = 'webp';
} else if (isQuotedDocument) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage || info.message.documentMessage;
fileBuffer = await getFileBuffer(boij, 'document');
fileType = 'doc';
} else if (isQuotedVideo) {
const boij = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage || info.message.videoMessage;
fileBuffer = await getFileBuffer(boij, 'video');
fileType = 'mp4';
} else if (isQuotedAudio) {
const boij = JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.audioMessage;
fileBuffer = await getFileBuffer(boij, 'audio');
fileType = 'mp3';
} else {
enviar('Você deve marcar uma mídia para poder transformar em um link 💭');
return;
}
enviar("Enviando o link da sua mídia...");
const ddr = await uploadToshiruz(fileBuffer, fileType);
await enviar(ddr);
break;

case 'pinterestgif': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!args[0]) return enviar('Envie o nome ou termo para pesquisar GIF no Pinterest.');
enviar(mensagens.carregando);
const termo = args.join(' ').trim();
const api = `${BLACKOUT_API}/api/pesquisa/pinterestgif?nome=${encodeURIComponent(termo)}&apikey=${BLACKOUT_KEY}`;
const axios = require("axios");
try {
await client.sendMessage(from, { react: { text: '🌀', key: info.key } });
const { data } = await axios.get(api, { timeout: 15000 });
const resultados = data?.resultado || data?.data?.resultado;
if (!resultados || resultados.length === 0) {
return enviar(`Nenhum GIF encontrado para *${termo}*.`);
}
const primeiro = resultados.find(r => r.url_mp4 && r.url_mp4.startsWith('http'));
if (!primeiro) return enviar('Nenhum link de vídeo válido encontrado.');
const titulo = primeiro.titulo?.trim() || termo;
const gifUrl = primeiro.url_mp4.replace(/\s/g, '');
await client.sendMessage(from, { video: { url: gifUrl },gifPlayback: true, caption: `🎞️ Pinterest GIF: *${titulo}*` });
} catch (e) {
console.error('Erro PinterestGIF:', e);
enviar('Erro ao buscar GIF no Pinterest.');
}}
break;

case 'metadinha': {//Tosh blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
enviar(mensagens.carregando);
try {
const res = await fetchJson(`${BLACKOUT_API}/api/imagem/metadinha?apikey=${BLACKOUT_KEY}`);
if (!res.masculina || !res.feminina) return enviar("Não foi possível gerar as metadinhas no momento.");
await client.sendMessage(from, { image: { url: res.masculina },caption: `🧔 Metadinha Masculina` }, { quoted: seloMeta });
await client.sendMessage(from, { image: { url: res.feminina },caption: `👩 Metadinha Feminina` }, { quoted: seloMeta });
} catch (e) { console.error("Erro ao gerar metadinha:", e);
return enviar(mensagens.erro);
}}
break;

case 'animes': case 'anime': {
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!args.length) 
return client.sendMessage(from, { text: `🎮 Exemplo: ${prefix}anime Naruto` });
const nomeAnime = args.join(" ");
try {
const response = await fetch(`${BLACKOUT_API}/api/pesquisa/anime?nome=${encodeURIComponent(nomeAnime)}&apikey=${BLACKOUT_KEY}`);
const data = await response.json();
if (!data.status || !data.resultado?.length) 
return client.sendMessage(from, { text: "🎮 Anime não encontrado!" });
const anime = data.resultado[0]; // pega o primeiro resultado
const mensagem = `╔═════════════════════
║      *_🎮 ANIMES 🎮_*
╚═════════════════════

🕹️ *Nome:* ${anime.nome}
🕹️ *Gênero:* ${anime.genero}
🕹️ *Episódios:* ${anime.episodios}
🕹️ *Lançamento:* ${anime.lancamento}
🕹️ *[Mais informações]* (${anime.url})`;
await client.sendMessage(from, { image: { url: anime.imagem }, caption: mensagem });
} catch (err) {
console.error(err);
await client.sendMessage(from, { text: "🎮 Ocorreu um erro ao buscar o anime." });
}}
break;

//figurinhas 

case "attp": { // Tosh Blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key }})
if (!q) {
return enviar("Cadê o texto da figurinha?")}
try {
enviar(`*✨ Opa ${pushname}, tô criando sua figurinha...*`)
const numero = comando === "attp" ? "0" : comando.replace("attp", "")
const url = `${BLACKOUT_API}/api/sticker/attp/text?texto=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`
const response = await axios.get(url, { responseType: "arraybuffer" })
const imgTemp = getRandom(".png")
const webpTemp = getRandom(".webp")
fs.writeFileSync(imgTemp, response.data)
exec(`ffmpeg -i ${imgTemp} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${webpTemp}`,
(err) => {
if (err) {
fs.unlinkSync(imgTemp)
return enviar("Erro ao converter figurinha")
}
fs.unlinkSync(imgTemp)
const json = {"sticker-pack-name": "Blackout Api", "sticker-pack-publisher": pushname }
const exifAttr = Buffer.from([
0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,
0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,
0x00,0x00,0x16,0x00,0x00,0x00 ])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
const exifFile = getRandom(".exif")
fs.writeFileSync(exifFile, exif)
exec(`webpmux -set exif ${exifFile} ${webpTemp} -o ${webpTemp}`, async () => {
await client.sendMessage( from, { sticker: fs.readFileSync(webpTemp) }, { quoted: info })
fs.unlinkSync(webpTemp)
fs.unlinkSync(exifFile)})
}
)
} catch (e) {
enviar("Erro ao criar a figurinha ATTP 😢")}
}
break

case "attp2":
case "attp3":
case "attp4":
case "attp5":
case "attp6":
case "attp7":
case "attp8":
case "attp9":
case "attp10": { // Tosh Blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key }})
if (!q) {
return enviar("Cadê o texto da figurinha?")}
try {
enviar(`*✨ Opa ${pushname}, tô criando sua figurinha...*`)
const numero = comando === "attp" ? "0" : comando.replace("attp", "")
const url = `${BLACKOUT_API}/api/sticker/attp${numero}/text?texto=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`
const response = await axios.get(url, { responseType: "arraybuffer" })
const imgTemp = getRandom(".png")
const webpTemp = getRandom(".webp")
fs.writeFileSync(imgTemp, response.data)
exec(`ffmpeg -i ${imgTemp} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${webpTemp}`,
(err) => {
if (err) {
fs.unlinkSync(imgTemp)
return enviar("Erro ao converter figurinha")
}
fs.unlinkSync(imgTemp)
const json = {"sticker-pack-name": "Blackout Api", "sticker-pack-publisher": pushname }
const exifAttr = Buffer.from([
0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,
0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,
0x00,0x00,0x16,0x00,0x00,0x00 ])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
const exifFile = getRandom(".exif")
fs.writeFileSync(exifFile, exif)
exec(`webpmux -set exif ${exifFile} ${webpTemp} -o ${webpTemp}`, async () => {
await client.sendMessage( from, { sticker: fs.readFileSync(webpTemp) }, { quoted: info })
fs.unlinkSync(webpTemp)
fs.unlinkSync(exifFile)})
}
)
} catch (e) {
enviar("Erro ao criar a figurinha ATTP 😢")}
}
break

case "brait": { // Tosh Blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } })
if (!q) {
return enviar("Cadê o texto do Brait?")
}
try {
enviar(`*🖤 Opa ${pushname}, criando seu Brait...*`)
const url = `${BLACKOUT_API}/api/sticker/brait/text?texto=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`
const response = await axios.get(url, { responseType: "arraybuffer" })
const imgTemp = getRandom(".png")
const webpTemp = getRandom(".webp")
fs.writeFileSync(imgTemp, response.data)
exec( `ffmpeg -i ${imgTemp} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${webpTemp}`,
(err) => {
if (err) {
fs.unlinkSync(imgTemp)
return enviar("Erro ao converter figurinha Brait")
}
fs.unlinkSync(imgTemp)
const json = { "sticker-pack-name": "Blackout Api", "sticker-pack-publisher": pushname }
const exifAttr = Buffer.from([
0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,
0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,
0x00,0x00,0x16,0x00,0x00,0x00 ])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
const exifFile = getRandom(".exif")
fs.writeFileSync(exifFile, exif)
exec(`webpmux -set exif ${exifFile} ${webpTemp} -o ${webpTemp}`, async () => {
await client.sendMessage( from, { sticker: fs.readFileSync(webpTemp) }, { quoted: info })
fs.unlinkSync(webpTemp)
fs.unlinkSync(exifFile)})
}
)
} catch (e) {
console.error("[BRAIT] ERRO GERAL:", e)
enviar("Erro ao criar a figurinha Brait 😢")
}
}
break

case "brait2":
case "brait3":
case "brait4":
case "brait5":
case "brait6":
case "brait7":
case "brait8":
case "brait9":
case "brait10": { // Tosh Blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } })
if (!q) {
return enviar("Cadê o texto do Brait?")
}
try {
enviar(`*🖤 Opa ${pushname}, criando seu Brait...*`)
const numero = comando === "brait" ? "0" : comando.replace("brait", "")
const url = `${BLACKOUT_API}/api/sticker/brait${numero}/text?texto=${encodeURIComponent(q)}&apikey=${BLACKOUT_KEY}`
const response = await axios.get(url, { responseType: "arraybuffer" })
const imgTemp = getRandom(".png")
const webpTemp = getRandom(".webp")
fs.writeFileSync(imgTemp, response.data)
exec( `ffmpeg -i ${imgTemp} -vcodec libwebp -filter:v fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${webpTemp}`,
(err) => {
if (err) {
fs.unlinkSync(imgTemp)
return enviar("Erro ao converter figurinha Brait")
}
fs.unlinkSync(imgTemp)
const json = { "sticker-pack-name": "Blackout Api", "sticker-pack-publisher": pushname }
const exifAttr = Buffer.from([
0x49,0x49,0x2A,0x00,0x08,0x00,0x00,0x00,
0x01,0x00,0x41,0x57,0x07,0x00,0x00,0x00,
0x00,0x00,0x16,0x00,0x00,0x00 ])
const jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
const exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
const exifFile = getRandom(".exif")
fs.writeFileSync(exifFile, exif)
exec(`webpmux -set exif ${exifFile} ${webpTemp} -o ${webpTemp}`, async () => {
await client.sendMessage( from, { sticker: fs.readFileSync(webpTemp) }, { quoted: info })
fs.unlinkSync(webpTemp)
fs.unlinkSync(exifFile)})
}
)
} catch (e) {
console.error("[BRAIT] ERRO GERAL:", e)
enviar("Erro ao criar a figurinha Brait 😢")
}
}
break

case 'figuemoji': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_emoji?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruz();
await sleep(680);}}
break;

case 'figumemes': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzfig() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_memes2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzfig();
await sleep(680);}}
break;

case 'figubebe': { // Tosh Blackout
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key }});
if (!q) return enviar("Insira a quantidade de figurinhas de bebê que deseja (máx 10).");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite um número válido (máximo 10).");
}
const jsonPath = path.resolve('./arquivos/sticker/pack_bebe.json');
if (!fs.existsSync(jsonPath)) {
return enviar("Pack de figurinhas de bebê não encontrado.");
}
const data = JSON.parse(fs.readFileSync(jsonPath));
const figurinhas = data.figurinhas;
if (!Array.isArray(figurinhas) || figurinhas.length === 0) {
return enviar("Pack de bebê está vazio.");
}
for (let i = 0; i < quantidade; i++) {
const url = figurinhas[Math.floor(Math.random() * figurinhas.length)];
try {
const res = await axios.get(url, { responseType: 'arraybuffer' });
await client.sendMessage(from, { sticker: Buffer.from(res.data)}, { quoted: seloMeta });
await sleep(700);
} catch (err) {
console.log('[ERRO FIGUBEBE]', err.message);
}}
}
break;

case 'figucoreana': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreana?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figucoreana2': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function lovetoshiruz() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_coreanas2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await lovetoshiruz();
await sleep(680);}}
break;

case 'figuanime': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzprasempre() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_anime2?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzprasempre();
await sleep(680);}}
break;

case 'figudesenho': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversar() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_desenho?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversar();
await sleep(680);}}
break;

case 'figurinhas': {//Tosh Blackout 
await client.sendMessage(from, { react: { text: emojiEscolhido, key: info.key } });
if (!q) return enviar("Insira a quantidade de figurinhas que deseja que eu envie!");
const quantidade = Number(q.trim());
if (!quantidade || quantidade > 10) {
return enviar("Digite a quantidade de figurinhas que deseja que eu envie (máximo 10).");}
async function toshiruzaniversa() {
await client.sendMessage(from, {
sticker: { url: `${BLACKOUT_API}/sticker/figu_aleatori?apikey=${BLACKOUT_KEY}` }}, { quoted: seloMeta });}
for (let i = 0; i < quantidade; i++) { 
await toshiruzaniversa();
await sleep(680);}}
break;

//feito por mim Tosh Blackout 