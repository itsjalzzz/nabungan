const target = 2000000;
let tabungan = 0;
let bulan = 0;

tabungan += 4000000; bulan++;
tabungan += 4000000; bulan++;

const sisa = target - tabungan;
console.log(`Bulan ke ${bulan} Total Sudah Rp${tabungan}. Kurang ${sisa}Rp lagi`);
// if(tabungan < target){
//     console.log(`okehh ijal tabungan kamu kurang ${sisa}Rp`);
// }else{
//     console.log(`ijaalll tabungan udahhh melebihi target ${target}Rp`);
// }