# Teslimat doğrulaması

Tarih: 27 Ekim 2026

- `npm install`: Başarılı; kilit dosyası oluşturuldu.
- `npm run dev`: Yerel önizleme açıldı, HTTP 200 yanıtı alındı.
- `npm run check`: 17 dosyada 0 hata, 0 uyarı.
- `npm run build`: Statik `dist/` çıktısı başarıyla üretildi.
- Bağımlılık taraması: 0 bilinen güvenlik açığı (kurulum anında).
- 320, 390, 768, 1024 ve 1440 piksel tarayıcı genişliklerinde yatay taşma görülmedi.
- Galeri düzeni: masaüstünde 3, mobilde 1 veya 2 sütun.
- Sayfa içi bağlantıların tamamı mevcut bölüm kimliklerine gidiyor.
- Yerel görsel ve stil dosyalarında eksik yol bulunmadı.
- Mobil menü açma, Escape ile kapatma, odağın düğmeye dönmesi ve iletişime geçiş doğrulandı.
- Galeri açma, sonraki görsel, sol ok tuşu, Escape ile kapatma ve odağın başlangıç görseline dönmesi doğrulandı.
- Aktif bölüm göstergesi galeri ve hizmetler bölümlerinde doğrulandı.
- Telefon, üç e-posta ve WhatsApp bağlantıları verilen bilgilerle oluşturuldu. Mesaj veya arama gönderilmedi.
- Google Maps haritası, kullanıcının paylaştığı işletme kaydıyla eşleştirildi. Harita açma ve yol tarifi bağlantıları verilen kısa bağlantıyı kullanır.
- Türkçe dil, canonical, Open Graph, LocalBusiness JSON-LD, robots.txt, sitemap ve 404 çıktıları kontrol edildi.
- Animasyonlar reduced-motion tercihini destekler. Bu tercih için ayrı cihaz emülasyonu yapılmadı.
- Lighthouse skoru ölçülmedi. 90+ performans hedefi için statik çıktı, yerel fontlar, küçük görseller ve tembel yükleme kullanıldı. Gerçek fotoğraflardan sonra üretim ortamında yeniden ölçülmelidir.
- Cloudflare Pages yapılandırması: `npm run build`, `dist`, Node 24, gerçek alan adı için `SITE_URL`. Cloudflare hesabına yayın bu çalışma kapsamında yapılmadı; özel Sites önizlemesi ayrı olarak sağlanır.

Referans bağlantısı inceleme aracı tarafından açılamadığı için tasarım verilen marka gereksinimleri esas alınarak özgün olarak geliştirildi.

## Gönderilen medya güncellemesi

- Orijinal logo JPEG dosyası header ve footer'a eklendi. Kaynak dosya ile SHA-256 eşitliği doğrulandı; kırpılmadı ve rötuş yapılmadı.
- Gönderilen saha fotoğrafı hero ve galeriye yerleştirildi. Hakkımızda bölümü kullanıcı isteğiyle önceki sade konteyner illüstrasyonuna döndürüldü; düşük çözünürlüklü video karesi bu bölümden kaldırıldı.
- İki yaklaşık 23 saniyelik video, dikey kadraj korunarak sessiz H.264/MP4 ve 30 fps olarak hazırlandı. Toplam boyut yaklaşık 8,6 MB'den 3,9 MB'ye düştü.
- İlk yüklemede video `src` alanı boş. Her iki videonun tarayıcıda gerçekten oynadığı (`readyState: 4` ve ilerleyen süre) doğrulandı.
- Başka videoya geçince önceki oynatma duruyor; kapatma sonrası video duruyor ve kaynak kaldırılıyor.
- Fotoğraf/video galerisinde Escape ve odak dönüşü doğrulandı.
- 320, 390, 768, 1024 ve 1440 piksel genişliklerde yeni logo ile yatay taşma görülmedi.
- Kod kontrolü ve üretim derlemesi hatasız tamamlandı.

## 2 Kasım 2026 — yerel arama ve makaleler

- Kocaeli, Gebze ve Dilovası için farklı konularda üç rehber yazısı eklendi; rehber listesi ve ana sayfa kartları oluşturuldu.
- `npm run check`: 22 dosyada 0 hata, 0 uyarı. `npm run build`: 6 HTML sayfası başarıyla üretildi (404 dahil).
- Üretilen bütün HTML sayfalarında tek H1, meta açıklaması, canonical ve geçerli JSON-LD doğrulandı.
- Üç yazının Article ve BreadcrumbList verileri, gerçek yayın tarihi, kendine işaret eden canonical adresi ve farklı başlıkları kontrol edildi.
- Sitemap'teki 5 adres doğrulandı; üç makale ve rehber listesi dahil, 404 hariç.
- Sayfalar arası bütün yerel bağlantılar, bölüm bağlantıları ve yerel dosyalar kontrol edildi.
- Makale sayfası 320, 390, 768, 1024 ve 1440 piksel genişlikte yatay taşma göstermedi.
- Mobil menüden rehbere, rehberden makaleye, makaleden ana sayfa hizmetlerine geçiş doğrulandı.
- İçindekiler bağlantısı ve Rehber aktif menü göstergesi kontrol edildi.
- Hakkımızda bölümünün eski konteyner görseli ve önceden belirlenen Maps konumu korundu.
- Google sıralaması veya indekslenme iddiasında bulunulmadı. Mevcut önizleme özel erişimlidir; kamuya açık yayın ve Search Console adımları SEO-REHBERI.md içinde açıklandı.
