const CDN = 'https://f-hfv-l.sm.mncdn.com/mnresize/400/400/livephotos/8/';
const PRODUCTS = [
  { brand:'ASICS', name:'Superblast 3', cinsiyet:'Unisex', fiyat:11999, tip:'racing', ozellikler:['Karbon plaka','Maksimum hız','Yarış','Hafif'], aciklama:'Karbon plakalı yarış ayakkabısı.', url:'https://www.high5.com.tr/p-asics-superblast-3-unisex-mor-kosu-ayakkabisi-1013a177-400' },
  { brand:'ASICS', name:'GEL-Nimbus 28', cinsiyet:'Erkek', fiyat:10999, tip:'running', ozellikler:['Maksimum tampon','Uzun mesafe','Nötr','PureGEL'], aciklama:'Yüksek tamponlu nötr koşu.', url:'https://www.high5.com.tr/p-asics-gel-nimbus-28-erkek-mavi-kosu-ayakkabisi-1011c127-400' },
  { brand:'ASICS', name:'GEL-Nimbus 28 Platinum', cinsiyet:'Kadın', fiyat:11519, tip:'running', ozellikler:['Premium tampon','Uzun mesafe','Nötr'], aciklama:'Kadınlar için premium tamponlu model.', url:'https://www.high5.com.tr/p-asics-gel-nimbus-28-platinum-kadin-siyah-kosu-ayakkabisi-1012b978-001' },
  { brand:'ASICS', name:'GEL-Kayano 32', cinsiyet:'Erkek', fiyat:10999, tip:'stability', ozellikler:['Pronasyon desteği','Stabilite','Uzun mesafe'], aciklama:'İçe basma sorunu olanlar için maksimum destek.', url:'https://www.high5.com.tr/asics-c-301' },
  { brand:'ASICS', name:'GEL-Cumulus 28', cinsiyet:'Kadın', fiyat:8599, tip:'running', ozellikler:['Orta tampon','Günlük antrenman','Nötr'], aciklama:'Günlük antrenman için hafif ve konforlu.', url:'https://www.high5.com.tr/p-asics-gel-cumulus-28-kadin-mor-kosu-ayakkabisi-1012b916-500' },
  { brand:'ASICS', name:'Novablast 4', cinsiyet:'Unisex', fiyat:8999, tip:'running', ozellikler:['Zıplayan his','Enerjik','Günlük'], aciklama:'Zıplayan hissiyle enerjik koşular için.', url:'https://www.high5.com.tr/asics-c-301' },
  { brand:'ASICS', name:'GEL-Trabuco 12', cinsiyet:'Unisex', fiyat:7499, tip:'trail', ozellikler:['Trail koşu','Sağlam taban','Patika'], aciklama:'Patika ve doğa koşusu için.', url:'https://www.high5.com.tr/asics-c-301' },
  { brand:'HOKA', name:'Bondi 9', cinsiyet:'Kadın', fiyat:10999, tip:'running', ozellikler:['Maksimum tampon','Meta-Rocker','Diz dostu','Yumuşak'], aciklama:'En yüksek tamponlu HOKA. Diz sorunları için ideal.', url:'https://www.high5.com.tr/p-hoka-bondi-9-kadin-lila-kosu-ayakkabisi-1162012-lrmt' },
  { brand:'HOKA', name:'Clifton 10', cinsiyet:'Erkek', fiyat:9999, tip:'running', ozellikler:['Hafif tampon','Günlük koşu','Yumuşak'], aciklama:'Hafif ve konforlu günlük koşu.', url:'https://www.high5.com.tr/p-hoka-clifton-10-erkek-gri-kosu-ayakkabisi-1162030-aynn' },
  { brand:'HOKA', name:'Mach 7', cinsiyet:'Erkek', fiyat:10199, tip:'racing', ozellikler:['Hızlı','Tempo','Hafif'], aciklama:'Tempo ve hız antrenmanları için.', url:'https://www.high5.com.tr/p-hoka-mach-7-erkek-yesil-kosu-ayakkabisi-1171904-fyz' },
  { brand:'HOKA', name:'Mach 7', cinsiyet:'Kadın', fiyat:10199, tip:'racing', ozellikler:['Hızlı','Tempo','Hafif'], aciklama:'Kadınlar için tempo ayakkabısı.', url:'https://www.high5.com.tr/p-hoka-mach-7-kadin-yesil-kosu-ayakkabisi-1171938-fyz' },
  { brand:'HOKA', name:'Speedgoat 6', cinsiyet:'Unisex', fiyat:11999, tip:'trail', ozellikler:['Trail','Vibram taban','Dağ koşusu'], aciklama:'Vibram taban ile üstün tutuş.', url:'https://www.high5.com.tr/hoka-c-302' },
  { brand:'HOKA', name:'Arahi 7', cinsiyet:'Unisex', fiyat:9999, tip:'stability', ozellikler:['Pronasyon desteği','Stabilite','Hafif'], aciklama:'Hafif ama destekli pronasyon modeli.', url:'https://www.high5.com.tr/hoka-c-302' },
  { brand:'On Running', name:'Cloudmonster 3 Hyper', cinsiyet:'Kadın', fiyat:16499, tip:'racing', ozellikler:['Karbon plaka','Speedboard','Yarış'], aciklama:"On'un en hızlı modeli.", url:'https://www.high5.com.tr/p-on-cloudmonster-3-hyper-kadin-mor-kosu-ayakkabisi-3wg10044906' },
  { brand:'On Running', name:'Cloudmonster 3', cinsiyet:'Erkek', fiyat:14499, tip:'running', ozellikler:['Monster tampon','CloudTec','Uzun mesafe'], aciklama:'Maksimum CloudTec tampon.', url:'https://www.high5.com.tr/p-on-cloudmonster-3-erkek-sari-kosu-ayakkabisi-3mg10054859' },
  { brand:'On Running', name:'Cloudmonster 3', cinsiyet:'Kadın', fiyat:14499, tip:'running', ozellikler:['Monster tampon','CloudTec','Uzun mesafe'], aciklama:'Kadınlar için CloudTec tampon.', url:'https://www.high5.com.tr/p-on-cloudmonster-3-kadin-yesil-kosu-ayakkabisi-3wg10034859' },
  { brand:'On Running', name:'Cloudrunner 3', cinsiyet:'Erkek', fiyat:11799, tip:'running', ozellikler:['Günlük koşu','CloudTec','Hafif'], aciklama:'Günlük koşu için hafif ve konforlu.', url:'https://www.high5.com.tr/p-on-cloudrunner-3-erkek-gri-kosu-ayakkabisi-3mg10071536' },
  { brand:'On Running', name:'Cloudultra 3', cinsiyet:'Kadın', fiyat:13999, tip:'trail', ozellikler:['Ultra trail','Patika','Uzun mesafe trail'], aciklama:'Ultra trail ve uzun patika için.', url:'https://www.high5.com.tr/p-on-cloudultra-3-kadin-sari-outdoor-kosu-ayakkabisi-3wf30114105' },
  { brand:'Brooks', name:'Glycerin Flex', cinsiyet:'Erkek', fiyat:9999, tip:'running', ozellikler:['DNA LOFT v3','Yumuşak','Günlük koşu'], aciklama:"Brooks'un en yumuşak modeli.", url:'https://www.high5.com.tr/p-brooks-glycerin-flex-erkek-beyaz-kosu-ayakkabisi-1104781d114' },
  { brand:'Brooks', name:'Glycerin Flex', cinsiyet:'Kadın', fiyat:9999, tip:'running', ozellikler:['DNA LOFT v3','Yumuşak','Günlük koşu'], aciklama:'Kadınlar için en yumuşak Brooks.', url:'https://www.high5.com.tr/p-brooks-glycerin-flex-kadin-pembe-kosu-ayakkabisi-1204671b136' },
  { brand:'Brooks', name:'Glycerin Max 2', cinsiyet:'Erkek', fiyat:11399, tip:'running', ozellikler:['Maksimum tampon','DNA LOFT MAX','Uzun mesafe','Diz dostu'], aciklama:'Maksimum tamponlu Brooks. Diz sorunları için.', url:'https://www.high5.com.tr/p-brooks-glycerin-max-2-erkek-siyah-kosu-ayakkabisi-1104791d091' },
  { brand:'Brooks', name:'Glycerin Max 2', cinsiyet:'Kadın', fiyat:11399, tip:'running', ozellikler:['Maksimum tampon','DNA LOFT MAX','Uzun mesafe'], aciklama:'Kadınlar için maksimum tamponlu Brooks.', url:'https://www.high5.com.tr/p-brooks-glycerin-max-2-kadin-gri-kosu-ayakkabisi-1204681b048' },
];

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY bulunamadi' });

  const productList = PRODUCTS.map((p, i) =>
    `${i+1}. [${p.brand}] ${p.name} (${p.cinsiyet}) - ${p.fiyat} TL - ${p.ozellikler.join(', ')} - ${p.aciklama}`
  ).join('\n');

  const body = req.body || {};
  const messages = body.messages || [];
  const userQuestion = messages[messages.length - 1]?.content || '';

  const systemPrompt = `Sen high5.com.tr magazasinin AI ayakkabi danismanisin.
Su GERCEK urun listesinden musteri icin en uygun 3-4 urunu oner. Sadece bu listedeki urunleri oner.

URUN LISTESI:
${productList}

YANIT FORMATI (baska hicbir sey yazma):
INTRO: <1-2 cumle Turkce giris>
JSON:
{
  "shoes": [
    {
      "brand": "HOKA",
      "name": "Bondi 9",
      "cinsiyet": "Kadin",
      "subtitle": "Maksimum Tampon - Diz Dostu",
      "matchPercent": 96,
      "rank": 1,
      "type": "running",
      "price": "10.999",
      "tags": ["Maksimum Tampon", "Diz Dostu"],
      "features": ["Meta-Rocker taban ile yumusak gecis", "Diz baskisini azaltir", "Uzun mesafe konforu"],
      "url": "https://www.high5.com.tr/p-hoka-bondi-9-kadin-lila-kosu-ayakkabisi-1162012-lrmt"
    }
  ],
  "expertNote": "Kisa karsilastirmali uzman notu"
}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1400,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userQuestion }
        ],
      }),
    });
    const data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error ? data.error.message : JSON.stringify(data) });
    }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
