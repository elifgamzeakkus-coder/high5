// high5.com.tr'den çekilen gerçek ürün veritabanı
// Son güncelleme: Mart 2025
const CDN = 'https://f-hfv-l.sm.mncdn.com/mnresize/400/400/livephotos/8/';

const PRODUCTS = [
  // ── ASICS ──────────────────────────────────────────
  {
    brand: 'ASICS', name: 'Superblast 3', cinsiyet: 'Unisex',
    fiyat: 11999, kategori: 'Koşu', tip: 'racing',
    ozellikler: ['Karbon plaka', 'Maksimum hız', 'Yarış ayakkabısı', 'Hafif'],
    aciklama: 'Karbon plakalı yarış ayakkabısı. Maraton ve hız antrenmanları için.',
    img: CDN + '1013a177-400/1013a177-400-01.jpg',
    url: 'https://www.high5.com.tr/p-asics-superblast-3-unisex-mor-kosu-ayakkabisi-1013a177-400'
  },
  {
    brand: 'ASICS', name: 'GEL-Nimbus 28', cinsiyet: 'Erkek',
    fiyat: 10999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Maksimum tampon', 'Uzun mesafe', 'Nötr', 'PureGEL teknoloji'],
    aciklama: 'Yüksek tamponlu nötr koşu ayakkabısı. Uzun mesafe ve günlük antrenman için.',
    img: CDN + '1011c127-400/1011c127-400-01_1.jpg',
    url: 'https://www.high5.com.tr/p-asics-gel-nimbus-28-erkek-mavi-kosu-ayakkabisi-1011c127-400'
  },
  {
    brand: 'ASICS', name: 'GEL-Nimbus 28 Platinum', cinsiyet: 'Kadın',
    fiyat: 11519, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Premium tampon', 'Uzun mesafe', 'Nötr', 'PureGEL'],
    aciklama: 'Premium versiyonu. Kadınlar için özel tasarım.',
    img: CDN + '1012b978-001/1012b978-001-01.jpg',
    url: 'https://www.high5.com.tr/p-asics-gel-nimbus-28-platinum-kadin-siyah-kosu-ayakkabisi-1012b978-001'
  },
  {
    brand: 'ASICS', name: 'GEL-Kayano 32', cinsiyet: 'Erkek',
    fiyat: 10999, kategori: 'Koşu', tip: 'stability',
    ozellikler: ['Pronasyon desteği', 'Stabilite', '4D Guidance System', 'Uzun mesafe'],
    aciklama: 'İçe basma (pronasyon) sorunu olanlar için en iyi seçenek. Maksimum destek ve stabilite.',
    img: CDN + '1011c052-405/1011c052-405-1.jpg',
    url: 'https://www.high5.com.tr/asics-c-301'
  },
  {
    brand: 'ASICS', name: 'GEL-Cumulus 28', cinsiyet: 'Kadın',
    fiyat: 8599, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Orta tampon', 'Günlük antrenman', 'Nötr', 'FF BLAST köpük'],
    aciklama: 'Günlük antrenman için ideal. Hafif ve konforlu.',
    img: CDN + '1012b916-500/1012b916-500-01.jpg',
    url: 'https://www.high5.com.tr/p-asics-gel-cumulus-28-kadin-mor-kosu-ayakkabisi-1012b916-500'
  },
  {
    brand: 'ASICS', name: 'GT-2000 13', cinsiyet: 'Erkek',
    fiyat: 7999, kategori: 'Koşu', tip: 'stability',
    ozellikler: ['Pronasyon desteği', 'Hafif stabilite', 'Günlük antrenman'],
    aciklama: 'Hafif pronasyon desteği. Günlük koşu için ideal.',
    img: CDN + '1011c127-001/1011c127-001-01.jpg',
    url: 'https://www.high5.com.tr/asics-c-301'
  },
  {
    brand: 'ASICS', name: 'Novablast 4', cinsiyet: 'Unisex',
    fiyat: 8999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Zıplayan his', 'FF BLAST MAX köpük', 'Enerjik', 'Günlük'],
    aciklama: 'Zıplayan hissiyle enerjik koşular için.',
    img: CDN + '1011c127-002/1011c127-002-01.jpg',
    url: 'https://www.high5.com.tr/asics-c-301'
  },
  {
    brand: 'ASICS', name: 'GEL-Trabuco 12', cinsiyet: 'Unisex',
    fiyat: 7499, kategori: 'Trail', tip: 'trail',
    ozellikler: ['Trail koşu', 'Sağlam taban', 'Patika', 'Dağ'],
    aciklama: 'Patika ve doğa koşusu için. Sağlam grip ve koruma.',
    img: CDN + '1013a177-800/1013a177-800-01_1.jpg',
    url: 'https://www.high5.com.tr/asics-c-301'
  },

  // ── HOKA ───────────────────────────────────────────
  {
    brand: 'HOKA', name: 'Bondi 9', cinsiyet: 'Kadın',
    fiyat: 10999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Maksimum tampon', 'Meta-Rocker', 'Yumuşak', 'Uzun mesafe', 'Diz dostu'],
    aciklama: 'En yüksek tamponlu HOKA modeli. Diz ve eklem sorunları olanlar için ideal.',
    img: CDN + '1162012-lrmt/1162012-lrmt_1.jpg',
    url: 'https://www.high5.com.tr/p-hoka-bondi-9-kadin-lila-kosu-ayakkabisi-1162012-lrmt'
  },
  {
    brand: 'HOKA', name: 'Clifton 10', cinsiyet: 'Erkek',
    fiyat: 9999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Hafif tampon', 'Günlük koşu', 'Yumuşak', 'Konforlu'],
    aciklama: 'Hafif ve konforlu günlük koşu ayakkabısı.',
    img: CDN + '1162030-aynn/1162030-aynn_1.jpg',
    url: 'https://www.high5.com.tr/p-hoka-clifton-10-erkek-gri-kosu-ayakkabisi-1162030-aynn'
  },
  {
    brand: 'HOKA', name: 'Mach 7', cinsiyet: 'Erkek',
    fiyat: 10199, kategori: 'Koşu', tip: 'racing',
    ozellikler: ['Hızlı', 'Tempo antrenmanı', 'Hafif', 'Yarı maraton'],
    aciklama: 'Tempo ve hız antrenmanları için. Hafif ve hızlı.',
    img: CDN + '1171904-fyz/1171904-fyz_1.jpg',
    url: 'https://www.high5.com.tr/p-hoka-mach-7-erkek-yesil-kosu-ayakkabisi-1171904-fyz'
  },
  {
    brand: 'HOKA', name: 'Mach 7', cinsiyet: 'Kadın',
    fiyat: 10199, kategori: 'Koşu', tip: 'racing',
    ozellikler: ['Hızlı', 'Tempo antrenmanı', 'Hafif'],
    aciklama: 'Kadınlar için tempo ve hız antrenmanı ayakkabısı.',
    img: CDN + '1171938-fyz/1171938-fyz_1.jpg',
    url: 'https://www.high5.com.tr/p-hoka-mach-7-kadin-yesil-kosu-ayakkabisi-1171938-fyz'
  },
  {
    brand: 'HOKA', name: 'Speedgoat 6', cinsiyet: 'Unisex',
    fiyat: 11999, kategori: 'Trail', tip: 'trail',
    ozellikler: ['Trail', 'Patika', 'Vibram taban', 'Dağ koşusu'],
    aciklama: 'HOKA\'nın trail koşu flagshipi. Vibram taban ile üstün tutuş.',
    img: CDN + '1147793-sos/1147793-sos_1.jpg',
    url: 'https://www.high5.com.tr/hoka-c-302'
  },
  {
    brand: 'HOKA', name: 'Arahi 7', cinsiyet: 'Unisex',
    fiyat: 9999, kategori: 'Koşu', tip: 'stability',
    ozellikler: ['Pronasyon desteği', 'J-Frame teknoloji', 'Stabilite', 'Hafif'],
    aciklama: 'HOKA\'nın pronasyon desteği modeli. Hafif ama destekli.',
    img: CDN + '1147850-vin/1147850-vin_1.jpg',
    url: 'https://www.high5.com.tr/hoka-c-302'
  },

  // ── ON RUNNING ─────────────────────────────────────
  {
    brand: 'On Running', name: 'Cloudmonster 3 Hyper', cinsiyet: 'Kadın',
    fiyat: 16499, kategori: 'Koşu', tip: 'racing',
    ozellikler: ['Karbon plaka', 'Speedboard', 'Yarış', 'Maksimum enerji'],
    aciklama: 'On\'un en hızlı modeli. Karbon plaka ve Speedboard teknolojisi.',
    img: CDN + '3wg10044906/3wg10044906-1.jpg',
    url: 'https://www.high5.com.tr/p-on-cloudmonster-3-hyper-kadin-mor-kosu-ayakkabisi-3wg10044906'
  },
  {
    brand: 'On Running', name: 'Cloudmonster 3', cinsiyet: 'Erkek',
    fiyat: 14499, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Monster tampon', 'CloudTec', 'Uzun mesafe', 'Konforlu'],
    aciklama: 'Maksimum CloudTec tampon. Uzun mesafe ve günlük için.',
    img: CDN + '3mg10054859/3mg10054859-1.jpg',
    url: 'https://www.high5.com.tr/p-on-cloudmonster-3-erkek-sari-kosu-ayakkabisi-3mg10054859'
  },
  {
    brand: 'On Running', name: 'Cloudmonster 3', cinsiyet: 'Kadın',
    fiyat: 14499, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Monster tampon', 'CloudTec', 'Uzun mesafe'],
    aciklama: 'Kadınlar için maksimum CloudTec tampon.',
    img: CDN + '3wg10034859/3wg10034859-1.jpg',
    url: 'https://www.high5.com.tr/p-on-cloudmonster-3-kadin-yesil-kosu-ayakkabisi-3wg10034859'
  },
  {
    brand: 'On Running', name: 'Cloudrunner 3', cinsiyet: 'Erkek',
    fiyat: 11799, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Günlük koşu', 'CloudTec', 'Hafif', 'Konforlu'],
    aciklama: 'Günlük koşu ve antrenman için. Hafif ve konforlu.',
    img: CDN + '3mg10071536/3mg10071536-1.jpg',
    url: 'https://www.high5.com.tr/p-on-cloudrunner-3-erkek-gri-kosu-ayakkabisi-3mg10071536'
  },
  {
    brand: 'On Running', name: 'Cloudultra 3', cinsiyet: 'Kadın',
    fiyat: 13999, kategori: 'Trail', tip: 'trail',
    ozellikler: ['Ultra trail', 'Patika', 'Uzun mesafe trail', 'Sağlam'],
    aciklama: 'Ultra trail ve uzun patika koşuları için.',
    img: CDN + '3wf30114105/3wf30114105_01.jpg',
    url: 'https://www.high5.com.tr/p-on-cloudultra-3-kadin-sari-outdoor-kosu-ayakkabisi-3wf30114105'
  },

  // ── BROOKS ─────────────────────────────────────────
  {
    brand: 'Brooks', name: 'Glycerin Flex', cinsiyet: 'Erkek',
    fiyat: 9999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['DNA LOFT v3 köpük', 'Yumuşak', 'Günlük koşu', 'Konfor'],
    aciklama: 'Brooks\'un en yumuşak modeli. Günlük koşu ve yürüyüş için.',
    img: CDN + '1104781d114/1104781d114-01_1.jpg',
    url: 'https://www.high5.com.tr/p-brooks-glycerin-flex-erkek-beyaz-kosu-ayakkabisi-1104781d114'
  },
  {
    brand: 'Brooks', name: 'Glycerin Flex', cinsiyet: 'Kadın',
    fiyat: 9999, kategori: 'Koşu', tip: 'running',
    ozellikler: ['DNA LOFT v3 köpük', 'Yumuşak', 'Günlük koşu'],
    aciklama: 'Kadınlar için en yumuşak Brooks modeli.',
    img: CDN + '1204671b136/1204671b136-01_1.jpg',
    url: 'https://www.high5.com.tr/p-brooks-glycerin-flex-kadin-pembe-kosu-ayakkabisi-1204671b136'
  },
  {
    brand: 'Brooks', name: 'Glycerin Max 2', cinsiyet: 'Erkek',
    fiyat: 11399, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Maksimum tampon', 'DNA LOFT MAX', 'Uzun mesafe', 'Diz dostu'],
    aciklama: 'Brooks\'un maksimum tamponlu modeli. Uzun mesafe ve diz sorunları için.',
    img: CDN + '1104791d091/1104791d091-01.jpg',
    url: 'https://www.high5.com.tr/p-brooks-glycerin-max-2-erkek-siyah-kosu-ayakkabisi-1104791d091'
  },
  {
    brand: 'Brooks', name: 'Glycerin Max 2', cinsiyet: 'Kadın',
    fiyat: 11399, kategori: 'Koşu', tip: 'running',
    ozellikler: ['Maksimum tampon', 'DNA LOFT MAX', 'Uzun mesafe'],
    aciklama: 'Kadınlar için maksimum tamponlu Brooks modeli.',
    img: CDN + '1204681b048/1204681b048-01.jpg',
    url: 'https://www.high5.com.tr/p-brooks-glycerin-max-2-kadin-gri-kosu-ayakkabisi-1204681b048'
  },
];

module.exports = PRODUCTS;
