//Array
const listSiswa = ['Kanjeng', 'Ujang', 'Saipul', 'Mukidi', 'Zeus'];
const siswa1 = listSiswa[0];
const siswa2 = listSiswa[1];
const siswa3 = listSiswa[2];
console.log(siswa1, siswa2, siswa3);

const [pertama, kedua, ketiga, ...dll] = listSiswa;
console.log(pertama, kedua, ketiga, dll);

//Object
const silverqueen = {
    rasa: "kacang mede",
    harga: 25000,
    berat: 62,
    produksi: {
        oleh: "PT. Petra",
        Asal: "Indonesia",
    },
};

const rasaSilverqueen = silverqueen.rasa;
const hargaSilverqueen = silverqueen.harga;
const olehProduksi = silverqueen.produksi.oleh;
console.log(rasaSilverqueen, hargaSilverqueen, olehProduksi);

const {rasa, harga, ...lainnya} = silverqueen;
console.log(rasa, harga, lainnya);

//function, alias, default
function printInfoProduk({rasa, harga, berat:gr, dibuat="Delfi"}) {
console.log(rasa, harga, gr, dibuat);
}
printInfoProduk(silverqueen);
