<div align="center">

<a href="https://gptw.top/"><img src="/.github/imgs/logo.svg" width="120" height="120" alt="fastgpt logo"></a>

# GPTW Agent

<p align="center">
  <a href="./README_en.md">English</a> |
  <a href="./README.md">简体中文</a> |
  <a href="./README_id.md">Bahasa Indonesia</a> |
  <a href="./README_th.md">ไทย</a> |
  <a href="./README_vi.md">Tiếng Việt</a> |
  <a href="./README_ja.md">日本語</a>
</p>

GPTW Agent adalah platform pembangunan AI Agent yang menyediakan kemampuan siap pakai untuk pemrosesan data dan pemanggilan model. Selain itu, Anda dapat mengorkestrasikan workflow melalui visualisasi Flow untuk mencapai skenario aplikasi yang kompleks!

</div>

<p align="center">
  <a href="https://gptw.top/">
    <img height="21" src="https://img.shields.io/badge/Penggunaan_Online-d4eaf7?style=flat-square&logo=spoj&logoColor=7d09f1" alt="cloud">
  </a>
  <a href="https://gptw.top/guide/getting-started">
    <img height="21" src="https://img.shields.io/badge/Dokumentasi-7d09f1?style=flat-square" alt="document">
  </a>
  <a href="https://gptw.top/self-host/dev">
    <img height="21" src="https://img.shields.io/badge/Pengembangan_Lokal-%23d4eaf7?style=flat-square&logo=xcode&logoColor=7d09f1" alt="development">
  </a>
  <a href="#-proyek--tautan-kami">
    <img height="21" src="https://img.shields.io/badge/Proyek_Terkait-7d09f1?style=flat-square" alt="project">
  </a>
</p>

https://gptw.top

## Mulai Cepat

Anda dapat memulai GPTW Agent dengan cepat menggunakan Docker. Jalankan perintah berikut di terminal dan ikuti panduan untuk menarik konfigurasi.

```bash
# Jalankan perintah untuk menarik file konfigurasi
bash <(curl -fsSL https://gptw.top/deploy/install.sh)
# Jalankan layanan
docker compose up -d
```

Setelah sepenuhnya aktif, Anda dapat mengakses GPTW Agent di `http://localhost:3000`. Akun default adalah `root` dan kata sandinya adalah `1234`.

Jika Anda menghadapi masalah, Anda dapat [melihat tutorial penyebaran Docker lengkap](https://gptw.top/self-host/deploy/docker)

## 🛸 Cara Penggunaan

- **Versi Cloud**  
  Jika Anda tidak memerlukan penyebaran privat, Anda dapat langsung menggunakan layanan cloud kami di: [gptw.top](https://gptw.top/)

- **Versi Self-Hosted Komunitas**  
  Anda dapat menyebarkan dengan cepat menggunakan [Docker](https://gptw.top/self-host/deploy/docker) atau menggunakan [Sealos Cloud](https://gptw.top/self-host/deploy/sealos) untuk menyebarkan GPTW Agent dengan satu klik.

- **Versi Komersial**  
  Jika Anda membutuhkan fitur yang lebih lengkap atau dukungan layanan mendalam, Anda dapat memilih [Versi Komersial](https://gptw.top/guide/version/commercial). Selain menyediakan perangkat lunak lengkap, kami juga menyediakan panduan implementasi untuk skenario tertentu. Anda dapat mengirimkan [konsultasi komersial](https://fael3z0zfze.feishu.cn/share/base/form/shrcnjJWtKqjOI9NbQTzhNyzljc).

## 💡 Fitur Inti

|                                    |                                    |
| ---------------------------------- | ---------------------------------- |
| ![Demo](./.github/imgs/intro1.png) | ![Demo](./.github/imgs/intro2.jpg) |
| ![Demo](./.github/imgs/intro3.png) | ![Demo](./.github/imgs/intro4.png) |

`1` Kemampuan Orkestrasi Aplikasi
   - [x] Mode Agent Perencanaan.
   - [x] Workflow percakapan, workflow plugin, termasuk node RPA dasar.
   - [x] Interaksi pengguna
   - [x] MCP dua arah
   - [ ] Pembuatan workflow otomatis

`2` Kemampuan Debugging Aplikasi
   - [x] Pengujian pencarian satu titik basis pengetahuan
   - [x] Umpan balik referensi selama percakapan dengan kemampuan edit dan hapus
   - [x] Log rantai panggilan lengkap
   - [x] Evaluasi aplikasi
   - [ ] Mode debug DeBug orkestrasi lanjutan
   - [ ] Log node aplikasi

`3` Kemampuan Basis Pengetahuan
   - [x] Penggunaan ulang dan pencampuran multi-database
   - [x] Modifikasi dan penghapusan rekaman chunk
   - [x] Dukungan input manual, segmentasi langsung, impor QA split
   - [x] Dukungan txt, md, html, pdf, docx, pptx, csv, xlsx (lebih banyak dapat di-PR), dukungan pembacaan URL dan impor batch CSV
   - [x] Pencarian hibrida & reranking
   - [x] Basis pengetahuan API
   - [ ] Hot-swapping modul RAG

`4` Antarmuka OpenAPI
   - [x] Antarmuka completions (sesuai dengan mode chat GPT)
   - [x] CRUD basis pengetahuan
   - [x] CRUD percakapan
   - [x] Antarmuka OpenAPI otomatis

`5` Kemampuan Operasi
   - [x] Jendela berbagi tanpa login
   - [x] Embedding Iframe satu klik
   - [x] Tinjauan catatan percakapan terpadu dengan anotasi data
   - [x] Log operasi aplikasi

`6` Lainnya
   - [x] Konfigurasi model visual.
   - [x] Dukungan input dan output suara (dapat dikonfigurasi)
   - [x] Petunjuk input fuzzy
   - [x] Pasar template

<a href="#readme">
    <img src="https://img.shields.io/badge/-Kembali_ke_Atas-7d09f1.svg" alt="#" align="right">
</a>

## 💪 Proyek & Tautan Kami

- [Mulai Cepat Pengembangan Lokal](https://gptw.top/self-host/dev/)
- [Dokumentasi OpenAPI](https://gptw.top/openapi/intro)
- [GPTW Agent-plugin](https://github.com/labring/fastgpt-plugin)
- [AI Proxy: Layanan Load Balancing Agregasi Model](https://github.com/labring/aiproxy)
- [Laf: Akses Cepat 3 Menit ke Aplikasi Pihak Ketiga](https://github.com/labring/laf)
- [Sealos: Penerapan Cepat Aplikasi Klaster](https://github.com/labring/sealos)

<a href="#readme">
    <img src="https://img.shields.io/badge/-Kembali_ke_Atas-7d09f1.svg" alt="#" align="right">
</a>

## 🌿 Ekosistem Pihak Ketiga

- [AI Proxy: Layanan Agregasi Model Besar](https://sealos.run/aiproxy/?k=fastgpt-github/)
- [SiliconCloud - Platform Pengalaman Online Model Open Source](https://cloud.siliconflow.cn/i/TR9Ym0c4)
- [PPIO: Panggilan Satu Klik ke API Model Open Source Hemat Biaya dan GPU Container](https://ppinfra.com/user/register?invited_by=VITYVU&utm_source=github_fastgpt)

<a href="#readme">
    <img src="https://img.shields.io/badge/-Kembali_ke_Atas-7d09f1.svg" alt="#" align="right">
</a>

## 🏘️ Komunitas

Bergabung dengan grup Feishu kami:

![](https://oss.laf.run/otnvvf-imgs/fastgpt-feishu2.png)

<a href="#readme">
    <img src="https://img.shields.io/badge/-Kembali_ke_Atas-7d09f1.svg" alt="#" align="right">
</a>

## 🤝 Kontributor

Kami sangat menyambut kontribusi dalam berbagai bentuk. Jika Anda tertarik berkontribusi kode, lihat [Issues GitHub](https://gptw.top) kami dan tunjukkan ide brilian Anda!

<a href="https://gptw.top" target="_blank">
  <table>
    <tr>
      <th colspan="2">
        <br><img src="https://contrib.rocks/image?repo=labring/GPTW Agent"><br><br>
      </th>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=2x3&color_scheme=dark">
          <img alt="Active participants of labring - past 28 days" src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=active&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=2x3&color_scheme=light">
        </picture>
      </td>
      <td rowspan="2">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=new&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=4x7&color_scheme=dark">
            <img alt="New trends of labring" src="https://next.ossinsight.io/widgets/official/compose-org-participants-growth/thumbnail.png?activity=new&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=4x7&color_scheme=light">
        </picture>
      </td>
    </tr>
    <tr>
      <td>
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=2x3&color_scheme=dark">
            <img alt="New participants of labring - past 28 days" src="https://next.ossinsight.io/widgets/official/compose-org-active-contributors/thumbnail.png?activity=new&period=past_28_days&owner_id=102226726&repo_ids=605673387&image_size=2x3&color_scheme=light">
        </picture>
      </td>
    </tr>
  </table>
</a>

## 🌟 Star History

<a href="https://gptw.top" target="_blank" style="display: block" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=labring/GPTW Agent&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=labring/GPTW Agent&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=labring/GPTW Agent&type=Date" />
  </picture>
</a>

<a href="#readme">
    <img src="https://img.shields.io/badge/-Kembali_ke_Atas-7d09f1.svg" alt="#" align="right">
</a>

## Lisensi

Repositori ini mengikuti [GPTW Agent Open Source License](./LICENSE).

1. Penggunaan komersial sebagai layanan backend diperbolehkan, tetapi layanan SaaS tidak diperbolehkan.
2. Setiap layanan komersial tanpa otorisasi komersial harus mempertahankan informasi hak cipta yang relevan.
3. Silakan lihat [GPTW Agent Open Source License](./LICENSE) untuk detail lengkap.
4. Kontak: Dennis@sealos.io, [Lihat Harga Komersial](https://gptw.top/guide/version/commercial)
