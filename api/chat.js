module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  var apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'GROQ_API_KEY bulunamadi' });

  var body = req.body || {};
  var messages = body.messages || [];
  var userQuestion = messages.length > 0 ? messages[messages.length - 1].content : '';

  var systemPrompt = 'Sen high5.com.tr magazasinin AI ayakkabi danismanisin.\nSu GERCEK urun listesinden en uygun 3-4 urunu oner. Sadece bu listedeki urunleri oner.\n\nURUN LISTESI:\n1. [ASICS] Superblast 3 (Unisex) - 11999 TL - Karbon plaka, Maksimum hiz, Yaris, Hafif - Karbon plateli yaris ayakkabisi.\n2. [ASICS] GEL-Nimbus 28 (Erkek) - 10999 TL - Maksimum tampon, Uzun mesafe, Notr, PureGEL - Yuksek tamponlu notr kosu.\n3. [ASICS] GEL-Nimbus 28 Platinum (Kadin) - 11519 TL - Premium tampon, Uzun mesafe, Notr - Kadinlar icin premium tamponlu.\n4. [ASICS] GEL-Kayano 32 (Erkek) - 10999 TL - Pronasyon destegi, Stabilite, Uzun mesafe - Ice basma sorunu olanlar icin.\n5. [ASICS] GEL-Cumulus 28 (Kadin) - 8599 TL - Orta tampon, Gunluk antrenman, Notr - Gunluk antrenman icin hafif.\n6. [ASICS] Novablast 4 (Unisex) - 8999 TL - Ziplayan his, Enerjik, Gunluk - Enerjik kosular icin.\n7. [ASICS] GEL-Trabuco 12 (Unisex) - 7499 TL - Trail kosu, Saglam taban, Patika - Patika ve doga kosusu icin.\n8. [HOKA] Bondi 9 (Kadin) - 10999 TL - Maksimum tampon, Meta-Rocker, Diz dostu, Yumusak - En yuksek tamponlu HOKA.\n9. [HOKA] Clifton 10 (Erkek) - 9999 TL - Hafif tampon, Gunluk kosu, Yumusak - Hafif ve konforlu gunluk kosu.\n10. [HOKA] Mach 7 (Erkek) - 10199 TL - Hizli, Tempo, Hafif - Tempo ve hiz antrenmanlar icin.\n11. [HOKA] Mach 7 (Kadin) - 10199 TL - Hizli, Tempo, Hafif - Kadinlar icin tempo ayakkabisi.\n12. [HOKA] Speedgoat 6 (Unisex) - 11999 TL - Trail, Vibram taban, Dag kosusu - Vibram taban ile ustun tutus.\n13. [HOKA] Arahi 7 (Unisex) - 9999 TL - Pronasyon destegi, Stabilite, Hafif - Hafif ama destekli pronasyon modeli.\n14. [On Running] Cloudmonster 3 Hyper (Kadin) - 16499 TL - Karbon plaka, Speedboard, Yaris - On\'un en hizli modeli.\n15. [On Running] Cloudmonster 3 (Erkek) - 14499 TL - Monster tampon, CloudTec, Uzun mesafe - Maksimum CloudTec tampon.\n16. [On Running] Cloudmonster 3 (Kadin) - 14499 TL - Monster tampon, CloudTec, Uzun mesafe - Kadinlar icin CloudTec tampon.\n17. [On Running] Cloudrunner 3 (Erkek) - 11799 TL - Gunluk kosu, CloudTec, Hafif - Gunluk kosu icin hafif.\n18. [On Running] Cloudultra 3 (Kadin) - 13999 TL - Ultra trail, Patika, Uzun mesafe trail - Ultra trail icin.\n19. [Brooks] Glycerin Flex (Erkek) - 9999 TL - DNA LOFT v3, Yumusak, Gunluk kosu - Brooks\'un en yumusak modeli.\n20. [Brooks] Glycerin Flex (Kadin) - 9999 TL - DNA LOFT v3, Yumusak, Gunluk kosu - Kadinlar icin en yumusak Brooks.\n21. [Brooks] Glycerin Max 2 (Erkek) - 11399 TL - Maksimum tampon, DNA LOFT MAX, Uzun mesafe, Diz dostu - Maksimum tamponlu Brooks.\n22. [Brooks] Glycerin Max 2 (Kadin) - 11399 TL - Maksimum tampon, DNA LOFT MAX, Uzun mesafe - Kadinlar icin maksimum tamponlu Brooks.\n\nYANIT FORMATI (baska hicbir sey yazma):\nINTRO: <1-2 cumle Turkce giris>\nJSON:\n{"shoes":[{"brand":"HOKA","name":"Bondi 9","cinsiyet":"Kadin","subtitle":"Maksimum Tampon - Diz Dostu","matchPercent":96,"rank":1,"type":"running","price":"10.999","tags":["Maksimum Tampon","Diz Dostu"],"features":["Meta-Rocker taban ile yumusak gecis","Diz baskisini azaltir","Uzun mesafe konforu"],"url":"https://www.high5.com.tr/p-hoka-bondi-9-kadin-lila-kosu-ayakkabisi-1162012-lrmt"}],"expertNote":"Kisa uzman notu"}';

  try {
    var response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 1400,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userQuestion }
        ]
      })
    });
    var data = await response.json();
    if (!response.ok) {
      return res.status(response.status).json({ error: data.error ? data.error.message : JSON.stringify(data) });
    }
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
