<h1> Jamstack 
  <a href="https://gitter.im/jamstackid" target="_blank"> 
    <img src="https://img.shields.io/gitter/room/jamstackid/jamstackid.svg?style=round-square" /> 
  </a>
</h1>
Ini adalah awal kecil dari sesuatu. Situs web JAMstack dengan beberapa baris tentang konsep dan filosofi.

Seiring waktu, ini diharapkan akan tumbuh menjadi titik masuk yang berguna untuk mempelajari tentang *stack* baru ini, *sharing tools*, kiat, dan praktik terbaik serta penyebaran berita.

## Penggunaan

Pastikan Anda memiliki Node.js terbaru, Yarn, dan [Hugo](https://gohugo.io/) terpasang. Jika Anda perlu memasang Hugo, jalankan:

```bash
brew install hugo
```

Lalu, clone repositori ini dan jalankan:

```bash
yarn
yarn start
```

Lalu kunjungi http://localhost:3000/ - BrowserSync akan secara otomatis memuat ulang CSS atau
segarkan halaman saat stylesheet atau konten berubah.

Untuk membangun output statis Anda ke folder `/dist`, gunakan:

```bash
yarn build
```

## Kontribusi Sumber Daya (Video & Artikel)

Untuk berkontribusi sumber daya ke komunitas JAMstack, cukup mengkloning *branch* ini dan edit `resources.yaml` di direktori `/site/data`. Cukup tambahkan item lain (mengikuti sintaks yang sudah ada) dan kirimkan *pull request*. Jika Anda menambahkan sumber daya video, harap unggah thumbnail video ke direktori `/img/videos` (gambar harus berukuran jpeg 600px lebar dan 400px tinggi) sebelum mengirimkan *pull request* Anda. Kami akan meninjau ini secara berkala dan kemungkinan akan segera menambahkannya.

## Kontribusi Contoh

Untuk berkontribusi contoh ke komunitas JAMstack, cukup mengkloning *branch* ini dan edit `examples.yaml` di direktori `/site/data`. Cukup tambahkan item lain (mengikuti sintaks yang sudah ada), dan kirimkan *pull request*. Kami akan meninjau ini secara berkala dan kemungkinan akan segera menambahkannya.

## Kontribusi Acara

Untuk berkontribusi acara ke komunitas JAMstack, kami sarankan hanya menambahkan acara ke pertemuan Anda dan biarkan logika kami melakukan sisanya. Jika acara di luar pertemuan (seperti konferensi), silakan kirimkan secara manual menggunakan panduan singkat di bawah ini:

1. Kloning cabang ini dan edit `events.yaml` di direktori `/site/data`
2. Tambahkan acara Anda (mengikuti sintaks yang sudah ada sebelumnya)
3. Kirimkan *pull request*

*Kami akan meninjau ini secara berkala dan kemungkinan akan segera menambahkannya.
