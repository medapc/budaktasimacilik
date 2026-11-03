# Yerel arama görünürlüğü ve nakliye rehberi

## Eklenen sayfalar

- `/nakliye-rehberi/`: Tüm yazılara erişim.
- `/nakliye-rehberi/kocaeli-nakliyat-ticari-yuk-tasimaciligi/`: Kocaeli’de ticari yük için taşıma planı.
- `/nakliye-rehberi/gebze-nakliyat-teklif-hazirligi/`: Gebze çıkışlı veya teslimli ticari yük için teklif hazırlığı.
- `/nakliye-rehberi/dilovasi-konteyner-tasimaciligi/`: Konteyner teslim alma ve sevkiyat koordinasyonu.

Yazılar yalnızca ilçe isimleri değiştirilmiş kopyalar değildir. Her biri farklı bir ihtiyacı ele alır. Uydurma şube, fiyat, müşteri sayısı, sertifika, güzergâh garantisi veya başarı istatistiği eklenmemiştir. Gerçek merkez bilgisi Dilovası / Kocaeli olarak korunur. Metinler ticari ve endüstriyel yük taşımacılığına odaklanır.

## Hazırlanan teknik yapı

- Ana sayfada rehber kartları; header ve footer’da Rehber bağlantısı.
- Her sayfa için açıklayıcı başlık, meta açıklaması, canonical ve Open Graph etiketleri.
- Yazılarda Article ve BreadcrumbList yapılandırılmış verileri; gerçek yayın tarihi.
- Rehber listesinde CollectionPage ve ItemList verileri.
- İşletme bilgileri bütün sayfalarda aynı LocalBusiness kaydı üzerinden verilir.
- Yazılar arasında ilgili yazı bağlantıları, ana hizmetler ve iletişime erişim.
- Yazı URL’leri build sırasında sitemap’e otomatik eklenir.
- İçeriğin tamamı statik HTML olarak üretilir; metinleri okumak için JavaScript gerekmez.

## Google’da görünmek için yayın koşulu

Mevcut Sites önizlemesi yalnızca sahibine açıktır. Oturum açma gerektiren bu önizleme Google tarafından taranamaz. Yerel SEO altyapısının arama sonuçlarında işe yarayabilmesi için son sitenin herkese açık bir adreste yayımlanması gerekir. Bu çalışmada erişim ayarları değiştirilmez ve bir alan adı sahipliği varsayılmaz.

Cloudflare Pages veya gerçek alan adındaki yayında:

1. `SITE_URL` değerini herkese açık gerçek yayın adresi olarak ayarlayın ve yeniden build alın. Böylece bütün canonical, sitemap ve yapılandırılmış veri adresleri aynı kökü kullanır.
2. Ana sayfa, rehber listesi ve üç makalenin oturum açmadan HTTP 200 ile açıldığını kontrol edin.
3. `robots.txt` ve `sitemap-index.xml` dosyalarının erişilebilir olduğunu doğrulayın.
4. Alan adı sahibinin Google Search Console hesabında siteyi doğrulayıp sitemap’i göndermesi gerekir. Yeni yazılar için URL Denetimi kullanılabilir.
5. Google İşletme Profili’ndeki web sitesi adresini aynı gerçek yayın adresiyle tutarlı hâle getirin.

Bu adımlar birinci sıra veya kesin indekslenme garantisi vermez. Google’ın dizine alması ve sıralaması kendi değerlendirmesine bağlıdır. Site sahipliğini doğrulama, Search Console’a gönderim ve işletme profili değişikliği bu çalışma kapsamında yapılmamıştır.

## Yazı ekleme ve düzenleme

İçerik kaynağı: `src/data/articles.ts`.

Her kayıtta `slug`, `title`, `seoTitle`, `description`, `category`, `region`, `icon`, `published`, `introduction`, `sections` ve `questions` bulunur. Yeni bir kayıt eklendiğinde sayfası ve kartları bir sonraki build’de oluşturulur. Başlıklar ve açıklamalar konuya özgü olmalıdır. `published` alanına gerçek yayın tarihini yazın. Yalnızca yeniymiş gibi görünmek için tarihi değiştirmeyin.

Metinleri firmanın gerçek operasyon bilgileriyle güncel tutun. Yük türü, güzergâh ve araç uygunluğu gibi değişken koşulları kesin taahhüt olarak yazmayın. Teknik veya mevzuatla ilgili yeni bilgi eklenirse güncel ve yetkili kaynaklarla doğrulayın.

## Kaynaklar

- Google’ın faydalı içerik yaklaşımı: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Kamuya açık erişim ve indeksleme koşulları: https://developers.google.com/search/docs/essentials/technical
