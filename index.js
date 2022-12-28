const express = require('express')
const app = express()
const port = 3000


$data = [{
 
  "id":"0",
  "sumber": "Viva.co.id",
"judul": "Lawan Thailand, Shin Tae-yong Ungkap Kerugian Besar Timnas Indonesia - VIVA - VIVA.co.id",
"url":"https://www.viva.co.id/bola/liga-indonesia/1559916-lawan-thailand-shin-tae-yong-ungkap-kerugian-besar-timnas-indonesia"
},
{
 
  "id":"1",
  "sumber": "news.detik.com",
"judul": "Prediksi Cuaca Ekstrem, Begini Kondisi Langit Jakarta Siang Ini - detikNews",
"url":"https://news.detik.com/berita/d-6485293/prediksi-cuaca-ekstrem-begini-kondisi-langit-jakarta-siang-ini"
},
{
 
  "id":"2",
  "sumber": "Okezone.com",
"judul": "Disebut Dicurangi Wasit di Piala AFF 2022, Timnas Malaysia Didorong Tinggalkan AFF dan Gabung EAFF - Okezone Bola",
"url": "https://bola.okezone.com/read/2022/12/28/51/2735650/disebut-dicurangi-wasit-di-piala-aff-2022-timnas-malaysia-didorong-tinggalkan-aff-dan-gabung-eaff",
},
{
 
  "id":"3",
  "sumber": "Tribunnews.com",
"judul": "Harga Hp Samsung A13 5G Terbaru Desember 2022, Baterai Jumbo Tahan Pemakaian 2 Hari Cuma Rp 2 Jutaan - Bangkapos.com",
"url": "https://bangka.tribunnews.com/2022/12/28/harga-hp-samsung-a13-5g-terbaru-desember-2022-baterai-jumbo-tahan-pemakaian-2-hari-cuma-rp-2-jutaan",
},
{
  "id":"4",
  "sumber": "Detik.com",
"judul": "Pembunuh Wanita Open BO di Sidoarjo Jual 2 HP Korban untuk Kabur - detikNews",
"url": "https://news.detik.com/berita/d-6485159/pembunuh-wanita-open-bo-di-sidoarjo-jual-2-hp-korban-untuk-kabur",

}
]
app.get('/', (req, res) => {
    res.send($data[Math.floor(Math.random() * 5)]);
    // res.json($data);
})

app.get('/news/:Id', (req, res) => {
    res.send($data[req.params.Id])
    
    
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})