var tinggiJohn = 170;
var tinggiTony = 165;

var usiaJohn = 25;
var usiaTony = 20;

var hasilJohn = tinggiJohn + (5*usiaJohn);
var hasilTony = tinggiTony + (5*usiaTony);

if(hasilJohn > hasilTony){
  console.log("John memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony);
}else {
  console.log("Tony memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony);
}

//Samakan tinggi antara John dan Tony
var tinggiJohn = 170;
var tinggiTony = 170;

var usiaJohn = 25;
var usiaTony = 25;

var hasilJohn = tinggiJohn + (5*usiaJohn);
var hasilTony = tinggiTony + (5*usiaTony);

if(hasilJohn === hasilTony){
  console.log("John dan Tony memiliki skor yang sama");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony);
}else if(hasilJohn > hasilTony){
  console.log("John memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony);
}else {
  console.log("Tony memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony);
}

var tinggiAlex = 180;
var usiaAlex=24;
var hasilAlex= tinggiAlex + (5*usiaAlex);

//Bandingkan dengan orang baru bernama Alex
if(hasilJohn > hasilTony && hasilJohn > hasilAlex){
  console.log("John memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony + " dan Tinggi Alex : "+ tinggiAlex);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony + " dan Usia Alex : "+ usiaAlex);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony + " dan Hasil Skor Alex : "+ hasilAlex);
}else if(hasilTony > hasilJohn && hasilTony > hasilAlex){
  console.log("Tony memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony + " dan Tinggi Alex : "+ tinggiAlex);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony + " dan Usia Alex : "+ usiaAlex);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony + " dan Hasil Skor Alex : "+ hasilAlex);
}
else if(hasilAlex > hasilJohn && hasilAlex > hasilTony){
  console.log("Alex memiliki skor lebih tinggi");
  console.log("Tinggi John: " + tinggiJohn + " dan Tinggi Tony : "+ tinggiTony + " dan Tinggi Alex : "+ tinggiAlex);
  console.log("Usia John: " + usiaJohn + " dan Usia Tony : "+ usiaTony + " dan Usia Alex : "+ usiaAlex);
  console.log("hasil skor Joni: " + hasilJohn + " dan Hasil Skor Tony : "+ hasilTony + " dan Hasil Skor Alex : "+ hasilAlex);
}else {
  console.log("NULL");
}
