<h1> Jamstack 
  <a href="https://gitter.im/jamstackid" target="_blank"> 
    <img src="https://img.shields.io/gitter/room/jamstackid/jamstackid.svg?style=round-square" /> 
  </a>
</h1>

Ini adalah sebuah titik awal. Situs web JAMstack dengan sedikit patah kata mengenai konsep dan filosofinya.

Seiring waktu, kami berharap agar situs ini dapat berkembang menjadi titik awal untuk mempelajari tentang *stack* baru ini, berbagi *tools*, kiat-kiat, dan praktik terbaik serta penyebaran informasi dan sumber daya.

## Penggunaan

Pastikan Node.js versi terbaru, Yarn, dan [Hugo](https://gohugo.io/) telah terinstal di komputer Anda. Jika Anda perlu menginstal Hugo, jalankan:

```bash
brew install hugo
```

Lalu, *clone* repositori ini dan jalankan:

```bash
yarn
yarn start
```

Lalu kunjungi http://localhost:3000/ - BrowserSync akan secara otomatis memuat ulang CSS atau halaman saat *stylesheet* atau konten berubah.

Untuk membangun output statis Anda ke direktori `/dist`, gunakan:

```bash
yarn build
```

## Kontribusi Sumber Daya (Video & Artikel)

Untuk berkontribusi sumber daya ke komunitas JAMstack, cukup mengkloning *branch* ini dan sunting `resources.yaml` di direktori `/site/data`. Cukup tambahkan item baru (mengikuti sintaksis yang sudah ada) dan kirimkan *pull request*. Jika Anda menambahkan sumber daya video, harap unggah *thumbnail* video ke direktori `/img/videos` (gambar harus berukuran jpeg 600px lebar dan 400px tinggi) sebelum mengirimkan *pull request* Anda. Kami akan meninjau kontribusi sumber daya secara berkala dan kemungkinan akan segera menambahkannya.

## Kontribusi Contoh

Untuk berkontribusi proyek-proyek contoh ke komunitas JAMstack, cukup mengkloning *branch* ini dan sunting `examples.yaml` di direktori `/site/data`. Cukup tambahkan item baru (mengikuti sintaksis yang sudah ada), dan kirimkan *pull request*. Kami akan meninjau kontribusi secara berkala dan kemungkinan akan segera menambahkannya.

## Kontribusi Acara

Untuk berkontribusi acara ke komunitas JAMstack, kami sarankan hanya menambahkan acara ke pertemuan Anda dan biarkan logika kami melakukan sisanya. Jika acara di luar pertemuan (seperti konferensi), silakan kirimkan secara manual menggunakan panduan singkat di bawah ini:

1. Kloning *branch* ini dan sunting `events.yaml` di direktori `/site/data`
2. Tambahkan acara Anda (mengikuti sintaksis yang sudah ada sebelumnya)
3. Kirimkan *pull request*

*Kami akan meninjau kontribusi secara berkala dan kemungkinan akan segera menambahkannya.
