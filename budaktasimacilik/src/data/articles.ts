export type GuideSection = { id: string; title: string; paragraphs: string[]; bullets?: string[] };
export type GuideArticle = {
  slug: string; title: string; seoTitle: string; description: string;
  category: string; region: string; icon: string; published: string;
  introduction: string; sections: GuideSection[];
  questions: { question: string; answer: string }[];
};
// Yeni bir yazı için bu diziye kayıt eklemek yeterlidir. Sayfa, kart ve sitemap
// build sırasında oluşur. Tarihler gerçek yayın/güncelleme tarihini yansıtmalıdır.
export const articles: GuideArticle[] = [
  {
    slug: 'kocaeli-nakliyat-ticari-yuk-tasimaciligi',
    title: 'Kocaeli nakliyat: ticari yük için doğru taşıma planı',
    seoTitle: 'Kocaeli Nakliyat ve Ticari Yük Taşımacılığı | Budak Lojistik',
    description: 'Kocaeli nakliyat ihtiyacında konteyner, rulo sac, levha ve paletli yük için araç seçimi, yükleme bilgileri ve sevkiyat planlama rehberi.',
    category: 'TAŞIMA PLANLAMASI', region: 'Kocaeli', icon: 'freight', published: '2026-11-02',
    introduction: 'Kocaeli’de bir ticari yükün taşınmasını planlarken ilk soru yalnızca hangi aracın bulunacağı değildir. Yükün ne olduğu, nasıl yükleneceği ve teslim noktasında nasıl karşılanacağı birlikte ele alınmalıdır. Bu rehber, konteyner, sac ve paletli ürünler için nakliye talebini daha anlaşılır hâle getirmek isteyen işletmelere yöneliktir.',
    sections: [
      {
        id: 'yuku-tanimlama', title: 'Önce taşınacak yükü tanımlayın',
        paragraphs: ['“Bir araç yükümüz var” ifadesi, uygun taşıma çözümünü belirlemek için yeterli olmayabilir. Aynı ağırlıktaki bir rulo sac ile paletlere yerleştirilmiş ürünün araç ve yükleme ihtiyacı farklı olabilir. Ürünün türü, parça sayısı, toplam ağırlığı ve ölçüleri başlangıç bilgisidir.', 'Kocaeli nakliyat talebinizi iletirken ambalajın veya paletlerin ölçülere ve ağırlığa dâhil olup olmadığını belirtin. Yükün güncel fotoğrafları da ürünün biçimini ve yüklemeye hazır durumunu anlatmaya yardımcı olur. Ölçü veya ağırlık henüz kesinleşmediyse bunu tahmin olarak paylaşın; kesin bilgi gibi aktarmayın.'],
      },
      {
        id: 'arac-secimi', title: 'Yük türü ile araç ihtiyacını birlikte değerlendirin',
        paragraphs: ['Konteyner taşımacılığı, açık veya kapalı dorse nakliyesi ve damperli taşıma birbirinin yerine gelişigüzel kullanılacak seçenekler değildir. Taşınacak ürün, dış etkilere karşı korunma ihtiyacı ve yükleme yöntemi araç seçimini etkiler. Rulo sac ve levha yüklerinde de ürünün biçimi ve teslim koşulları baştan paylaşılmalıdır.', 'Tam araç gerektirmeyen bir yük için parsiyel organizasyon değerlendirilebilir. Ancak yalnızca yükün küçük olması yeterli bir değerlendirme değildir: güzergâh, yükleme biçimi ve teslim beklentisi de birlikte konuşulmalıdır. Uygun araç ve sevkiyat biçimi operasyon görüşmesinde netleştirilir.'],
      },
      {
        id: 'yukleme-teslimat', title: 'Yükleme ve teslim koşullarını aynı planda toplayın',
        paragraphs: ['Çıkış ve varış adresinin yanında tesisin giriş bilgileri, yükleme saati ve alıcı irtibatı da önem taşır. Tesise araç kabulü için randevu gerekiyorsa, talep oluştururken bu bilgiyi ekleyin. Yükleme ve boşaltmada hangi ekipmanın kullanılacağı iki tarafla da önceden görüşülmelidir.'],
        bullets: ['Çıkış ve teslim noktasının açık adresi ile tesis girişini paylaşın.', 'Yükün hazır olacağı zamanı ve alıcının kabul saatini belirtin.', 'Yükleme ve boşaltmayı koordine edecek kişilerin irtibatını ekleyin.', 'Bekleme, ek durak veya özel kabul koşullarını baştan açıklayın.'],
      },
      {
        id: 'koordinasyon', title: 'Tekliften önce eksikleri netleştirin',
        paragraphs: ['Teklif karşılaştırırken yalnızca toplam tutarı değil, tarif edilen işin kapsamını da kontrol edin. Araç türü, güzergâh, yükleme zamanı ve teslim beklentisi aynı şekilde tanımlanmamışsa iki teklif doğrudan karşılaştırılamayabilir. Kesinleşmeyen detayları ayrı not olarak tutmak, sonradan yapılacak değişiklikleri takip etmeyi kolaylaştırır.', 'Budak Lojistik’in merkezi Dilovası / Kocaeli’dedir. Konteyner, rulo sac, levha, paletli yük, damperli TIR ve nakliye organizasyonu ihtiyaçlarınızı görüşmek için yük bilgilerinizi paylaşabilirsiniz. Güzergâh, araç uygunluğu ve zamanlama görüşme sırasında değerlendirilir.'],
      },
    ],
    questions: [
      { question: 'Kocaeli’de nakliye talebi için ilk hangi bilgiler gerekir?', answer: 'Yük türü, parça veya palet sayısı, ağırlık, ölçüler, çıkış ve teslim adresleri ile istenen tarih iyi bir başlangıçtır. Yükleme ve boşaltma koşulları da bu bilgilere eklenmelidir.' },
      { question: 'Her yük için tam araç ayırmak gerekir mi?', answer: 'Bu karar yükün özelliklerine, güzergâha ve teslim beklentisine bağlıdır. Tam araç gerektirmeyen yükler için parsiyel organizasyonun uygunluğu ayrıca değerlendirilir.' },
    ],
  },
  {
    slug: 'gebze-nakliyat-teklif-hazirligi',
    title: 'Gebze nakliyat: teklif almadan önce hazırlanacak bilgiler',
    seoTitle: 'Gebze Nakliyat Teklifi Hazırlık Rehberi | Budak Lojistik',
    description: 'Gebze nakliyat teklifi için hangi bilgiler gerekli? Palet, levha ve ticari yük sevkiyatında adres, ölçü, zamanlama ve teklif karşılaştırma rehberi.',
    category: 'TEKLİF HAZIRLIĞI', region: 'Gebze', icon: 'pallet', published: '2026-11-02',
    introduction: 'Gebze çıkışlı veya Gebze teslimli bir ticari sevkiyat için teklif isterken bilgileri tek bir kısa talepte toplamak görüşmeyi kolaylaştırır. Açık bir yük tanımı, taşıma seçeneklerinin ve teklif kapsamının daha sağlıklı değerlendirilmesine yardımcı olur. Aşağıdaki hazırlık listesi, paletli ürün, levha ve benzeri ticari yükler için kullanılabilir.',
    sections: [
      {
        id: 'talep-ozeti', title: 'İki adres ve bir yük özetiyle başlayın',
        paragraphs: ['İlçe adı tek başına yeterli bir çıkış veya varış tarifi değildir. Firma ya da tesis adı, açık adres ve araç girişine ilişkin bilgiler birlikte paylaşılmalıdır. Özellikle teslim noktasının depo, üretim tesisi veya başka bir kabul alanı olması, hangi kişiyle ve hangi saatte koordinasyon kurulacağını etkiler.', 'Yük özetinde ürünün adı, parça veya palet adedi, her parçanın ölçüsü ve toplam ağırlık yer almalıdır. Birden fazla yük kalemi varsa bunları ayrı satırlarda yazın. Ölçülere ambalajın dâhil olup olmadığını belirtmek, yükün araçta kaplayacağı alanın değerlendirilmesini kolaylaştırır.'],
      },
      {
        id: 'zaman-ekipman', title: 'Hazır olma zamanı ile teslim beklentisini ayırın',
        paragraphs: ['“Yarın taşınacak” ifadesini iki ayrı bilgiye dönüştürün: Yük yarın saat kaçta hazır olacak ve alıcı yükü hangi zaman aralığında kabul edebilecek? Hazırlık saati ile teslim beklentisi aynı şey değildir. Esnek bir tarih aralığı varsa bunu da açıkça yazın.', 'Palet veya levha yüklemesinde kullanılacak ekipmanı, ekipmanı kimin sağlayacağını ve teslim noktasındaki boşaltma imkânını önceden görüşün. Yükün korunması, araç kabulü veya ek durak gibi özel koşulları talebin sonunda ayrı bir not olarak belirtin.'],
      },
      {
        id: 'talep-listesi', title: 'Tek mesajda paylaşılabilecek talep listesi',
        paragraphs: ['Gebze nakliyat talebinizi aşağıdaki sırayla hazırlayabilirsiniz. Bilmediğiniz alanları boş bırakmak yerine “henüz kesinleşmedi” şeklinde işaretlemek, hangi konuların görüşülmesi gerektiğini gösterir.'],
        bullets: ['Güzergâh: çıkış tesisi, açık adres ve teslim tesisi.', 'Yük: ürün türü, adet, ölçüler ve toplam ağırlık.', 'Zaman: yükün hazır olacağı saat ve alıcının kabul aralığı.', 'Operasyon: yükleme / boşaltma ekipmanı, irtibat kişileri ve ek duraklar.', 'Özel notlar: korunma ihtiyacı, randevu veya diğer kabul koşulları.'],
      },
      {
        id: 'teklif-karsilastirma', title: 'Tekliflerin aynı işi kapsadığını kontrol edin',
        paragraphs: ['Bir teklif araç ve güzergâh bilgisini içerirken başka bir teklif farklı bir taşıma biçimini esas alabilir. Karşılaştırmadan önce hangi araç türünün, hangi tarihin ve hangi teslim koşullarının değerlendirildiğini kontrol edin. Bekleme veya kapsam değişikliği gibi durumların nasıl ele alınacağını da görüşün.', 'Düzenli sevkiyat düşünüyorsanız ilk talepte tahmini sıklığı ve yüklerin birbirinden farklı olup olmadığını belirtin. Her sevkiyat için ölçü ve hazır olma bilgilerini yeniden teyit etmek, eski bir talebin yanlışlıkla esas alınmasını önler.', 'Budak Lojistik’in Dilovası / Kocaeli merkezine Gebze çıkışlı veya teslimli nakliye talebinizin detaylarını iletebilirsiniz. Taşıma uygunluğu ve zamanlama, yük ve güzergâh bilgileri üzerinden değerlendirilir.'],
      },
    ],
    questions: [
      { question: 'Gebze nakliyat fiyatı yalnızca mesafeye göre mi belirlenir?', answer: 'Mesafe değerlendirmedeki unsurlardan biridir. Yükün ölçüsü ve ağırlığı, araç ihtiyacı, yükleme koşulları, tarih ve teslim kapsamı da görüşülmelidir. Bu bilgiler olmadan kesin fiyat vermek sağlıklı değildir.' },
      { question: 'Yük fotoğrafı ölçü bilgisinin yerine geçer mi?', answer: 'Fotoğraf yükün biçimini anlamaya yardımcı olur. Ölçü, ağırlık ve adet bilgisinin ayrıca paylaşılması gerekir.' },
    ],
  },
  {
    slug: 'dilovasi-konteyner-tasimaciligi',
    title: 'Dilovası konteyner taşımacılığı: teslim alma ve sevkiyat planı',
    seoTitle: 'Dilovası Konteyner Taşımacılığı Rehberi | Budak Lojistik',
    description: 'Dilovası konteyner taşımacılığında konteyner bilgisi, teslim alma noktası, dolu veya boş durumu ve alıcı koordinasyonu için hazırlık rehberi.',
    category: 'KONTEYNER REHBERİ', region: 'Dilovası', icon: 'container', published: '2026-11-02',
    introduction: 'Konteyner sevkiyatında konteynerin tanımı kadar nereden teslim alınacağı ve hangi koşullarda teslim edileceği de önemlidir. Dilovası’nda konteyner taşımacılığı planlayan bir işletme, bu bilgileri tek bir sevkiyat notunda bir araya getirerek operasyon görüşmesini daha anlaşılır hâle getirebilir.',
    sections: [
      {
        id: 'konteyner-bilgisi', title: 'Konteynerin durumunu ve kimliğini belirtin',
        paragraphs: ['Talebin başında konteynerin türü ve ölçüsü ile dolu mu boş mu olduğu belirtilmelidir. Bir konteyner numarası veya sevkiyat referansı varsa ilgili irtibat kişileriyle birlikte paylaşın. Dolu bir konteyner için yük ve ağırlık bilgilerinin hangi kayda dayandığı da görüşülmelidir.', 'Henüz kesinleşmemiş bir konteyner veya yükleme bilgisi varsa bunu özellikle işaretleyin. İlk görüşmede verilen bilgi ile sevkiyat günü kullanılacak bilgi farklıysa, değişikliği aynı iletişim zincirinde teyit etmek karışıklığı azaltır.'],
      },
      {
        id: 'teslim-alma', title: 'Teslim alma noktasını yalnızca adres olarak düşünmeyin',
        paragraphs: ['Konteynerin alınacağı tesisin açık adresine ek olarak araç giriş noktası, ilgili birim ve kabul zamanı da paylaşılmalıdır. Tesisin bir randevu veya referansla işlem yapıp yapmadığını, talebi oluşturan taraf ilgili noktayla önceden netleştirmelidir.', 'Teslim alma sırasında konteyneri araca alacak ekipmanın ve saha koordinasyonunun kim tarafından sağlanacağı konuşulmalıdır. Buradaki amaç her tesise aynı işlemi varsaymak değil, çıkış ve teslim noktasının kendi koşullarını sevkiyat planına taşımaktır.'],
      },
      {
        id: 'alici-plani', title: 'Alıcı hazırlığını çıkıştan önce görüşün',
        paragraphs: ['Konteynerin varacağı adresin hazır olması tek başına yeterli olmayabilir. Alıcının kabul aralığı, saha irtibatı ve planlanan işlem de netleştirilmelidir. Konteynerin teslimden sonraki hareketi veya boş dönüşü talebin parçasıysa bu aşamayı ayrıca tanımlayın.'],
        bullets: ['Konteyner bilgisi ve dolu / boş durumu.', 'Çıkış ve teslim tesisi, araç girişleri ve irtibat kişileri.', 'Randevu veya referans gerekip gerekmediği.', 'Teslimde yapılacak işlem ve kullanılacak ekipmanın koordinasyonu.', 'Talebe dâhilse sonraki hareket veya boş dönüş planı.'],
      },
      {
        id: 'degisiklik-takibi', title: 'Plan değişikliklerini aynı kayıt üzerinde takip edin',
        paragraphs: ['Konteynerin hazır olma saati, teslim noktası veya alıcı irtibatı değişebilir. Her yeni bilgiyi farklı bir kısa mesajda bırakmak yerine, güncel sevkiyat özetini yeniden paylaşmak yararlıdır. Böylece eski adres veya eski saat bilgisinin kullanılma ihtimali azalır.', 'Konteyner sevkiyatını başka bir ticari yük taşımasıyla karıştırmamak için talebin kapsamını açıkça yazın. Konteyner dışında rulo sac, levha, paletli ürün veya damperli taşıma ihtiyacınız da varsa her yükü ayrı tanımlayın.', 'Budak Lojistik, Dilovası / Kocaeli merkezinden konteyner taşımacılığı ve diğer nakliye organizasyonları için iletişim sağlar. Talebinize ilişkin konteyner, güzergâh ve tarih bilgilerini paylaşarak uygun taşıma planını görüşebilirsiniz.'],
      },
    ],
    questions: [
      { question: 'Dolu ve boş konteyner için aynı bilgileri paylaşmak yeterli mi?', answer: 'İki durumda da konteyner tanımı, teslim alma ve varış bilgileri gerekir. Dolu konteynerde yük ve ağırlık bilgileri de görüşülmelidir; teslim koşulları talebe göre netleştirilir.' },
      { question: 'Konteyner tesliminden sonraki hareket de talebe eklenmeli mi?', answer: 'Sonraki hareket veya boş dönüş planlanıyorsa ilk talepte belirtilmelidir. Böylece teklifin ve operasyon görüşmesinin hangi aşamaları kapsadığı açık olur.' },
    ],
  },
];
export const guideUrl = (slug: string) => `/nakliye-rehberi/${slug}/`;
export function readMinutes(article: GuideArticle) {
  const words = [article.introduction, ...article.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.bullets || [])]), ...article.questions.flatMap(q => [q.question, q.answer])].join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
}
export const formatGuideDate = (date: string) => new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Istanbul' }).format(new Date(`${date}T12:00:00+03:00`));
