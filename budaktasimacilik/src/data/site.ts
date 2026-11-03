// Firma bilgileri, metinler ve bütün görsel yolları buradan yönetilir.
export const company = {
  name: 'Budak Lojistik',
  fullName: 'Budak Lojistik – Damperli TIR Konteyner Nakliye Taşımacılığı',
  phone: '0546 847 04 41',
  phoneHref: '+905468470441',
  whatsapp: '905468470441',
  whatsappMessage: 'Merhaba, Budak Lojistik hizmetleri hakkında bilgi almak istiyorum.',
  emails: [
    { label: 'Genel bilgi', address: 'info@budaktasimacilik.com' },
    { label: 'Muhasebe', address: 'muhasebe@budaktasimacilik.com' },
    { label: 'İletişim', address: 'ALI@BUDAKTASIMACILIK.COM' },
  ],
  address: 'Mimar Sinan Mahallesi, 508. Sokak, No: 1, Kat: 3, Dilovası / Kocaeli',
  streetAddress: 'Mimar Sinan Mahallesi, 508. Sokak, No: 1, Kat: 3',
  city: 'Dilovası', region: 'Kocaeli',
  map: {
    url: 'https://maps.app.goo.gl/JpuEnUw8qAuLFk4u8',
    // Paylaşılan Google Maps işletme kaydındaki pin; kamera merkezinden farklıdır.
    latitude: 40.7860172,
    longitude: 29.5389486,
    cid: '16897340788575653883',
  },
  hours: 'Hafta içi 09.00–15.00',
  openingHours: { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '15:00' },
  // Gönderilen orijinal logo, dosya içeriği değiştirilmeden kullanılır.
  logo: '/images/budak-logo.jpeg',
  description: 'Dilovası / Kocaeli merkezli Budak Lojistik. Konteyner, rulo sac, paletli yük ve damperli TIR taşımacılığı; Gebze nakliyat talepleri için iletişim.',
  about: [
    'Her yükün kendine özgü bir yolculuğu var. Budak Lojistik olarak, yükün niteliğine uygun taşıma çözümünü doğru planlama ve açık iletişimle bir araya getiriyoruz.',
    'Dilovası / Kocaeli merkezimizden konteyner, rulo sac, levha ve paletli yük taşımacılığı ile damperli TIR hizmetleri sunuyor; açık ve kapalı dorse ile parsiyel nakliye organizasyonlarını koordine ediyoruz.',
  ],
};
export const navigation = [
  { href: '#hakkimizda', label: 'Hakkımızda' },
  { href: '#hizmetlerimiz', label: 'Hizmetlerimiz' },
  { href: '#galeri', label: 'Galeri' },
  { href: '/nakliye-rehberi/', label: 'Rehber' },
  { href: '#iletisim', label: 'İletişim' },
];
export const media = {
  social: '/images/social-card.png',
  hero: { src: '/images/damperli-tir-sahasi.webp', alt: 'Endüstriyel sahada yan yana duran damperli TIR araçları', placeholder: false },
  about: { src: '/images/gallery/container.svg', alt: 'Konteyner için geçici görsel alanı', placeholder: true },
};
export const services = [
  { title: 'Konteyner Taşımacılığı', icon: 'container', category: 'KONTEYNER', description: 'Konteyner yükleriniz için teslim alma ve sevkiyat süreçlerini ihtiyacınıza göre planlıyoruz.' },
  { title: 'Rulo Sac Taşımacılığı', icon: 'coil', category: 'ENDÜSTRİYEL YÜK', description: 'Rulo sac yüklerinin niteliğine uygun araç ve taşıma organizasyonunu koordine ediyoruz.' },
  { title: 'Levha ve Paletli Yük Taşımacılığı', icon: 'pallet', category: 'YÜK TAŞIMACILIĞI', description: 'Levha ve paletli ürünlerinizi yük özelliklerine uygun taşıma çözümleriyle buluşturuyoruz.' },
  { title: 'Damperli TIR Taşımacılığı', icon: 'dump', category: 'DAMPERLİ TAŞIMA', description: 'Damperli araç gerektiren yükleriniz için yükleme, sevkiyat ve boşaltma planını birlikte oluşturuyoruz.' },
  { title: 'Açık ve Kapalı Dorse Nakliye', icon: 'freight', category: 'DORSE ÇÖZÜMLERİ', description: 'Yükün ölçülerine ve korunma ihtiyacına göre açık veya kapalı dorse nakliyesini organize ediyoruz.' },
  { title: 'Parsiyel Nakliye Organizasyonu', icon: 'partial', category: 'PARSİYEL NAKLİYE', description: 'Tam araç gerektirmeyen yükleriniz için güzergâh ve teslimat ihtiyacına uygun sevkiyatı planlıyoruz.' },
];
export type GalleryItem = {
  type: 'image' | 'video'; src: string; title: string; alt: string;
  thumbnail: string; placeholder: boolean; duration?: string;
};
// Fotoğraflar public/images/, videolar public/videos/ içindedir.
// Video kapağı thumbnail ile belirlenir; video yalnızca ziyaretçi açınca yüklenir.
export const gallery: GalleryItem[] = [
  { type: 'image', src: '/images/damperli-tir-sahasi.webp', thumbnail: '/images/gallery/damperli-tir-sahasi.webp', title: 'Sahadan bir kare', alt: 'Endüstriyel sahada sıralanan damperli TIR araçları', placeholder: false },
  { type: 'video', src: '/videos/depo-yukleme.mp4', thumbnail: '/images/gallery/depo-yukleme-poster.webp', title: 'Depoda yükleme hazırlığı', alt: 'Depo içinde TIR araçları ve iş makinesinin görüldüğü sessiz video', duration: '00:23', placeholder: false },
  { type: 'video', src: '/videos/depo-sahasi.mp4', thumbnail: '/images/gallery/depo-sahasi-poster.webp', title: 'Depo içi taşıma alanı', alt: 'Depo içindeki araçların ve yük alanının görüldüğü sessiz video', duration: '00:23', placeholder: false },
];
export const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(company.whatsappMessage)}`;
export const mapsUrl = company.map.url;
export const mapsEmbed = `https://www.google.com/maps?cid=${company.map.cid}&output=embed&hl=tr`;
