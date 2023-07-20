// Mendapatkan referensi ke elemen-elemen HTML yang diperlukan
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

// Mendapatkan referensi ke elemen-elemen HTML yang digunakan untuk modal
modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Fungsi yang dijalankan saat tombol "Hitung BMI" diklik
function calculate(){
// Memeriksa apakah ada field yang kosong atau gender tidak dipilih 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    // Jika ada field yang kosong atau gender tidak dipilih, tampilkan modal dengan pesan kesalahan
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
// Jika semua field telah diisi, lanjutkan ke perhitungan BMI
  }else{
    countBmi();
  }

}

// Fungsi untuk menghitung BMI berdasarkan nilai input yang diberikan oleh pengguna
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  // Menghitung BMI menggunakan rumus: beratBadan(kg) / (tinggiBadan(m) * tinggiBadan(m))
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
  
  // Menentukan keterangan berat badan berdasarkan nilai BMI yang dihitung
  var result = '';
  if(bmi<18.5){
    result = 'Anda Kekurangan Berat Badan';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Berat Badan Anda Ideal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Anda Kelebihan Berat Badan';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Anda Kegemukan';
     }else if(35<=bmi){
    result = 'Anda Terlalu Gemuk';
     }


// Menampilkan hasil BMI dan keterangan berat badan di elemen HTML
resultArea.style.display = "block";// Menampilkan area hasil BMI
document.querySelector(".comment").innerHTML = `<span id="comment">${result}</span>`;// Menampilkan keterangan berat badan
document.querySelector("#result").innerHTML = bmi.toFixed(2); // Menampilkan hasil BMI dengan dua angka desimal


}


// Fungsi untuk mereset nilai-nilai formulir dan hasil BMI
function resetForm() {
  age.value = '';                // Mengosongkan nilai input untuk usia
  height.value = '';             // Mengosongkan nilai input untuk tinggi badan
  weight.value = '';             // Mengosongkan nilai input untuk berat badan
  male.checked = false;         // Tidak memilih opsi gender "Pria"
  female.checked = false;      // Tidak memilih opsi gender "Wanita"
  resultArea.style.display = "none"; // Menyembunyikan area hasil BMI
  document.querySelector("#result").innerHTML = '00.00'; // Mengatur hasil BMI ke nilai awal yaitu '00.00'
}







// Fungsi untuk menutup modal saat tombol "x" diklik
span.onclick = function() {
  modal.style.display = "none";
}

// Fungsi untuk menutup modal saat klik di luar modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
