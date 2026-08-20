# Proje Bağlamı ve Hafıza Kartı (Architecture Portfolio & Digital Business Card)

## 📌 Proje Özeti
Bu proje, bir mimar için tasarlanmış, arkasında hiçbir veritabanı (backend) barındırmayan, tamamen statik çıktılı, ultra hızlı ve sanatsal bir Tek Sayfa Uygulamasıdır (SPA). Sitenin tasarımı brütalist/minimalist çizgilere, yoğun beyaz boşluklara (negative space) ve CAD teknik çizim efektlerine dayanmaktadır.

## 🛠️ Teknolojik Altyapı (Kritik Sürümler)
- **Framework:** Astro v5 (Output: static)
- **Styling:** Tailwind CSS v4
- **Hosting:** Netlify (GitHub entegrasyonu ile otomatik deployment)
- **Uyum Notu:** Astro v5 ile Tailwind v4 eklentisiz, yerleşik `@tailwindcss/vite` plugin'i üzerinden haberleşmektedir. Eski `@astrojs/tailwind` entegrasyon paketi peer dependency hatası verdiği için tamamen kaldırılmıştır.

## 📐 Tasarım İlkeleri
1. **Tipografi:** Başlıklarda ve teknik detaylarda `Archivo` (ince/light), gövde metinlerinde `Inter` kullanılmaktadır.
2. **Renk Paleti:** Saf Beyaz (#FFFFFF) ve Derin Antrasit/Kömür Siyahı (#111111).
3. **Görsel Yaklaşım:** Proje görselleri varsayılan olarak grayscale (siyah-beyaz) ve yüksek kontrastlı durur. `group-hover` ile CAD kılavuz çizgileri beliriş efektleriyle renklenir ve ölçeklenir.
4. **Dosya Yönetimi (Performans):** Portfolyo PDF'leri ve görselleri `public/` klasöründedir. PDF'ler site yüklenirken indirilmez; sadece client tarafında butona tıklandığında Netlify'ın `Content-Disposition = "attachment"` kuralı tetiklenerek doğrudan cihazlara indirilir.

## 🚀 Sonraki Hedefler (Agent Yol Haritası)
1. Proje verilerinin (isimler, koordinatlar, yıllar) mimarın gerçek verileriyle güncellenmesi.
2. Dijital kartvizit alanına dinamik bir QR kod komponenti yazılması.
3. Telefon rehberine tek tıkla kayıt sağlayan `vCard (.vcf)` indirme altyapısının kurulması.
