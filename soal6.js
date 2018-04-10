//Tampilkan custom tahun lahir
var tahunlahir = [1989,1992,1995,2002,2010,2015];
console.log(tahunlahir);

//Buat tahun sekarang
var d = new Date();
var tahunsekarang = d.getFullYear();
var nows = parseInt(tahunsekarang);
console.log(nows);

//Siapkan array penampung tahun sekarang
tahunsekarangs=[];

//Tampilkan array tahun sekarang
for(var i=0; i<tahunlahir.length; i++){
  tahunsekarangs.push(nows);
}

console.log(tahunsekarangs);

cekumur =[];

for(var i = 0;i<tahunlahir.length;i++)
  cekumur.push(tahunsekarangs[i] - tahunlahir[i]);
  console.log(cekumur);

hasil = [];
final = [];



function printFullAge(tahun){
  for(var i = 0;i<tahun.length;i++)
      hasil.push(tahunsekarangs[i]-tahun[i]);
      //console.log(hasil);
      for (var y = 0; y < hasil.length; y++) {
          var x = hasil[y];
          if(x >= 18){
            x= true;
          }else {
            x= false;
          }
          final.push(x);
      }

      console.log(final);

}

//inputan pertama
var full_1 = [1988,1990,2001,2008,2015,2018];
var full_2 = [1978,1980,2005,2009,2012,2014];

printFullAge(full_1);
