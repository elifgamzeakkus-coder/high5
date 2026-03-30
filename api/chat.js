const PRODUCTS = require('./products');
 
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();
 
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY bulunamadi' });
 
  // Inject real product catalog into system prompt
  const productList = PRODUCTS.map((p, i) =>
    `${i+1}. [${p.brand}] ${p.name} (${p.cinsiyet}) - ${p.fiyat} TL - Tip: ${p.tip} - Özellikler: ${p.ozellikler.join(', ')} - ${p.aciklama}`
  ).join('\n');
 
  const userMessages = req.body.messages || [];
  const userQuestion = userMessages[userMessages.length - 1]?.content || '';
 
  const systemPrompt = `Sen high5.com.tr mağazasının kişisel AI ayakkabı danışmanısın.
Aşağıdaki GERÇEK ürün kataloğundan müşteriye en uygun 3-4 ürünü öner.
Sadece bu listedeki ürünleri öner, listede olmayan ürünleri uydurma.
 
ÜRÜN KATALOĞU:
${productList}
 
YANIT FORMATI (başka bir şey yazma):
INTRO: <1-2 cümle samimi Türkçe giriş>
JSON:
{
  "shoes": [
    {
      "brand": "HOKA",
      "name": "Bondi 9",
      "cinsiyet": "Kadın",
      "subtitle": "Maksimum Tampon · Diz Dostu",
      "matchPercent": 96,
      "rank": 1,
      "type": "running",
      "price": "10.999",
      "tags": ["Maksimum Tampon", "Diz Dostu"],
      "features": ["Meta-Rocker taban ile yumuşak geçiş", "En kalın EVA köpük tabanlama", "Diz ve eklem baskısını azaltır"],
      "url": "https://www.high5.com.tr/p-hoka-bondi-9-kadin-lila-kosu-ayakkabisi-1162012-lrmt"
    }
  ],
  "expertNote": "Kısa karşılaştırmalı uzman notu"
}
 
matchPercent 75-98 arası. type: running, trail, racing, stability, casual. Türkçe features yaz.`;
 
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
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
    if (!response.ok) return res.status(response.status).json({ error: data.error?.message || JSON.stringify(data) });
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
