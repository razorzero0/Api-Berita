const express = require('express')
const app = express()
const port = 3000


$data = [{
  "Pembuat" : " Muh. Ainun",
  "id":"0",
  "author": "CNN Indonesia",
"title": "Teleskop James Webb Sempat Dihantam Masalah Software, Kondisi Bahaya? - CNN Indonesia",
"description": "Teleskop James Webb sudah pulih, setelah sebelumnya mengalami gangguan perangkat lunak. Semesta siap dipantau kembali.",
},
{
  "Pembuat" : " Muh. Ainun",
  "id":"1",
  "author": "Okezone.com",
"title": "Apa yang Terjadi Jika Tidak Ada Pohon di Bumi? Ini Jawabannya - Okezone.com",
"description": "Pohon menawarkan banyak manfaat bagi Bumi dan seisinya. Mereka adalah bagian penting dari siklus ekologi alam.",
},
{
  "Pembuat" : " Muh. Ainun",
  "id":"2",
  "author": "Detik.com",
"title": "Jokowi Akan Setop PPKM Akhir Tahun, Gibran: Kenapa Nggak dari Dulu? - detikNews",
"description": "Wali Kota Solo Gibran Rakabuming Raka sepakat dengan keputusan Presiden Joko Widodo (Jokowi) yang akan mencabut kebijakan PPKM dan PSBB.",
},
{
  "Pembuat" : " Muh. Ainun",
  "id":"3",
  "author": "CNN Indonesia",
"title": "InSight di Mars Hilang Kontak, Cek Gambar Terakhirnya Sebelum Pensiun - CNN Indonesia",
"description": "Wahana antariksa InSight hilang kontak di Mars dengan memberi gambar terakhir berupa daratan kering. Mungkin sudah waktunya dia pensiun.",
},
{
  "Pembuat" : "Muh. Ainun",
  "id":"4",
  "author": "Cnbcindonesia.com",
"title": "Tok! Naik Lagi 25 Bps, Suku Bunga Acuan BI Kini 5,50% - CNBC Indonesia",
"description": "Bank Indonesia (BI) menaikkan suku bunga acuan sebesar 25 bps menjadi 5,50% pada Rapat Dewan Gubernur (RDG) yang berlangsung 21-22 Desember 2022.",

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