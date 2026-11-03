# Budak Lojistik

Astro + Tailwind CSS ile geliştirilen, tamamen statik Türkçe kurumsal web sitesi. Ana sayfada Hakkımızda, Hizmetlerimiz, Galeri, Nakliye Rehberi ve İletişim bölümleri bulunur. Üç bağımsız rehber yazısı ve rehber listesi ayrı statik sayfalardır. React veya sunucu gerektirmez.

## Başlatma

Node.js 22.23.4 veya üzeri (Node 24 önerilir):

```sh
npm install
npm run dev
```

Tarayıcı: `http://127.0.0.1:4321`

```sh
npm run check
npm run build
npm run preview
```

Üretim dosyaları `dist/` klasöründedir. `package-lock.json` sabitlenmiş bağımlılıklar için projeye dahildir. Temiz ve tekrarlanabilir kurulumda `npm ci` kullanılabilir.

## İçerikleri tek yerden düzenleme

**`src/data/site.ts`** dosyası içerik merkezidir:

| Alan | İçerik |
| --- | --- |
| `company` | Firma adı, telefon, e-postalar, adres, çalışma saatleri, hakkımızda metni |
| `company.logo` | Logo dosyasının public köküne göre yolu |
| `services` | Altı hizmetin başlıkları, açıklamaları ve ikonları |
| `media.hero` | Ana büyük görselin yolu, alt metni ve geçici görsel durumu |
| `media.about` | Hakkımızda görseli |
| `gallery` | Tüm galeri görselleri, başlıkları ve alt metinleri |
| `navigation` | Menü etiketleri ve bölüm bağlantıları |

Telefonu değiştirirken `phone`, `phoneHref` ve `whatsapp` alanlarını birlikte güncelleyin. WhatsApp bağlantısı ve başlangıç mesajı otomatik oluşturulur. Harita bağlantısı ve harita alanı `company.map` içindeki paylaşılan bağlantı ve Google Maps işletme kimliğini (CID) kullanır. Pin koordinatları `latitude` ve `longitude` ile aynı alanda tutulur. Yapılandırılmış veriler için `streetAddress`, `city`, `region` alanlarını da güncelleyin. Çalışma saatleri değiştirilirse aynı veri dosyasındaki `openingHours` alanını da güncelleyin; işletme yapılandırılmış verisi bu alandan otomatik üretilir.

## Gerçek fotoğrafları ekleme

Güncel sitede gönderilen saha fotoğrafı ve iki video kullanılır. Hakkımızda bölümünde kullanıcı isteğiyle önceki sade konteyner illüstrasyonuna dönülmüştür; burada galeri fotoğrafları veya video kareleri tekrarlanmaz. Diğer eski SVG geçici görseller kaynak klasöründe yedek olarak durur. Görseller dış sunuculara bağımlı değildir.

1. Fotoğrafları `public/images/` veya `public/images/gallery/` içine ekleyin.
2. `src/data/site.ts` içindeki ilgili `src`, `alt` ve varsa `title` alanlarını düzenleyin.
3. İlgili görselde `placeholder: false` yapın. Geçici görsel etiketi otomatik kalkar.

Örnek galeri kaydı:

```ts
{ type: 'image', src: '/images/konteyner.webp', thumbnail: '/images/gallery/konteyner.webp', title: 'Konteyner taşımacılığı', alt: 'Konteyner yüklü araç', placeholder: false }
```

Yalnızca gerçek fotoğrafın gösterdiği bilgileri alt metne yazın. Yatay, yaklaşık 1200 × 810 piksel WebP/AVIF veya optimize JPEG önerilir; her fotoğraf için yaklaşık 100–200 KB hedefleyin. Hero için 1800 × 1000 piksel ve yaklaşık 250 KB uygundur. Hero metni soldadır; ana nesnesi sağ tarafta olan fotoğraf tercih edin. Galeri ve hero `object-fit: cover`, fotoğraf ve video lightbox `object-fit: contain` kullanır; fotoğraflar esnetilmez. Lightbox tam resmi gösterir. Ekleme/çıkarma `gallery` dizisinden yapılır; sayaç ve ileri/geri gezinme otomatik güncellenir.

## Logo değişimi

1. Gerçek logoyu `public/images/logo.svg` veya `logo.webp` olarak ekleyin.
2. `src/data/site.ts` içinde `company.logo` değerini `'/images/logo.svg'` yapın.
3. Header ve footer birlikte güncellenir. İki arka planda da okunabilen, tercihen saydam arka planlı logo kullanın.

Güncel logo `public/images/budak-logo.jpeg` dosyasıdır. Kullanıcının gönderdiği JPEG dosyası hiçbir kırpma, yeniden çizim veya rötuş yapılmadan birebir kopyalanmıştır. Header ve footer aynı orijinal dosyayı kullanır. CSS ile gösterim boyutu ayarlanır ve görselin dış çerçevesi gizlenir; yazı, amblem ve renkler orijinal dosyadan aynen gösterilir. Tarayıcı simgesi `public/favicon.svg` dosyasındadır. Sosyal paylaşım görseli `public/images/social-card.png` dosyasından değiştirilebilir (1200 × 630).

## Eklenen videolar

`public/videos/depo-yukleme.mp4` ve `public/videos/depo-sahasi.mp4`, gönderilen iki yaklaşık 23 saniyelik videonun web için optimize edilmiş sürümleridir. Dikey 464 × 832 kadraj korunur; 30 fps H.264 ve MP4 faststart kullanılır. Site sürümleri sessizdir; kaynak dosyalar değiştirilmemiştir. İlk video orijinalinde bulunan ses web sürümüne eklenmemiştir.

Kapak görselleri `public/images/gallery/*-poster.webp` dosyalarıdır. Videolardan alınmıştır. `src/data/site.ts` içindeki `gallery` kaydında `type: 'video'`, `src`, `thumbnail`, `duration`, `title` ve `alt` alanları bulunur. Sayfa açılışında videolara `src` bağlanmaz. Video yalnızca galeri kartı açıldığında yüklenebilir; oynatma ziyaretçinin kontrolündedir. Kapanınca veya başka karta geçince video durur ve kaynak bağlantısı kaldırılır. Otomatik oynatma yapılmaz. Klavye ile video kontrolü için oynatıcıya Tab ile geçilebilir; sol/sağ tuşları oynatıcı odaktayken videoda ileri/geri sarar.

## Cloudflare Pages

Cloudflare hesabındaki **Workers & Pages → Create → Pages → Git deposunu bağla** üzerinden:

- Framework: **Astro**
- Proje kökü: Bu klasör (`budak-lojistik` üst klasörü depoya eklenirse root directory olarak `budak-lojistik` seçin)
- Build command: **`npm run build`**
- Build output directory: **`dist`**
- Node sürümü: **24** (`NODE_VERSION=24` ortam değişkeni veya `.node-version`)
- `SITE_URL`: Canonical site adresi. Varsayılanı `https://budaklojistik.com` olarak ayarlanmıştır. Önce geçici `pages.dev` adresinde yayınlayacaksanız Cloudflare ortam değişkeninde geçici adresi kullanın; özel alan adını bağladıktan sonra `https://budaklojistik.com` değerine geri alın.

`astro.config.mjs` içindeki `site` ayarı `SITE_URL` değerini okur. Canonical, Open Graph adresleri, JSON-LD, robots.txt ve sitemap aynı kökten üretilir. Cloudflare adapter, Functions veya Worker gerekli değildir. `public/_headers` statik güvenlik ve önbellek başlıklarını sağlar.

İsterseniz `npm run build` sonrası yalnızca `dist` klasörünü Pages Direct Upload ile yükleyebilirsiniz.

`.openai/hosting.json` özel Sites önizlemesinin kimliğini içerir. Cloudflare Pages yayınını etkilemez. Burada hiçbir şifre veya erişim anahtarı tutulmaz.

## Erişilebilirlik ve etkileşim

- Sayfa içi bağlantılar, aktif bölüm göstergesi ve kompaktlaşan sabit başlık.
- Mobil menü: gerçek düğme, `aria-expanded`, Escape ile kapatma ve odak dönüşü.
- Galeri: yerel `<dialog>` ile odak sınırı, Escape ile kapatma, sağ/sol okları ve dokunarak kaydırma. Kapandığında odak başlangıç görseline döner.
- `prefers-reduced-motion` desteği; JavaScript olmadan içerikler görünür kalır.
- Telefon, e-posta ve WhatsApp doğrudan ilgili uygulamayı açar. Gerçek gönderim servisi olmadan çalışan izlenimi veren iletişim formu bulunmaz.
- Harita, kullanıcının paylaştığı `https://maps.app.goo.gl/JpuEnUw8qAuLFk4u8` bağlantısındaki Budak Lojistik işletme kaydını gösterir. Konum: 40.7860172, 29.5389486. Harita Google'a bağlanır; dış bağlantı yüklenemezse adres ve yol tarifi bağlantısı kullanılabilir.

## Performans

Statik HTML, yerel fontlar, küçük SVG geçici görseller, tek küçük etkileşim dosyası; hero dışında görseller ve harita tembel yüklenir. Lighthouse hedefi 90+ için tasarlanmıştır; gerçek fotoğraflar eklendikten sonra üretim URL'sinde yeniden ölçün. Üçüncü taraf harita ve ağ koşulları sonuçları etkileyebilir. Ölçülmeyen skorlar doğrulanmış gibi sunulmaz.

## Dosya düzeni

- `src/components/`: Tekrar kullanılabilir bölüm ve arayüz bileşenleri
- `src/data/site.ts`: Merkezî firma içeriği ve görseller
- `src/data/articles.ts`: Nakliye rehberi yazıları ve yayın bilgileri
- `src/pages/nakliye-rehberi/`: Rehber listesi ve otomatik üretilen makale sayfaları
- `SEO-REHBERI.md`: Yerel SEO yapısı ve herkese açık yayın için gereken adımlar
- `src/layouts/Layout.astro`: Türkçe dil, SEO, Open Graph ve işletme yapılandırılmış verileri
- `src/pages/`: Ana sayfa, 404 ve build sırasında üretilen robots.txt
- `src/styles/global.css`: Tailwind, kurumsal tasarım ve responsive kuralları
- `src/scripts/site.ts`: Menü, bölüm göstergesi, görünme animasyonları, galeri
- `public/images/`: Değiştirilebilir görseller

Kuruluş yılı, filo büyüklüğü, sertifikalar, referanslar ve başarı sayıları uydurulmamıştır.
