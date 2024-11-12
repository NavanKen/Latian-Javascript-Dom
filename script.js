// Dom Coba Coba
// Javascript Dom
var paragraph = document.getElementsByClassName("paragraph");
if (paragraph[1]) {
  console.log(paragraph[1].textContent);
  paragraph[0].style.backgroundColor = "red";
}

var button = document.getElementById("btn-hg");
var data = document.getElementsByName("data");
if (button && data[0]) {
  button.addEventListener("click", () => {
    data[0].classList.add("highlight");
  });
}

var tag = document.getElementsByTagName("h2");
// var i = 0;
Array.from(tag).forEach((element) => {
  element.style.backgroundColor = "tomato";
});
//
// for (let i = 0; i < tag.length; i++) {
//   tag[i].style.backgroundColor = "tomato";
// }
//
// while (i < tag.length) {
//   tag[i].style.backgroundColor = "tomato";
//   i++;
// }

const item = document.querySelectorAll(".item");
let divHighlightedBtn = document.getElementById("divHighlighted");
if (divHighlightedBtn) {
  divHighlightedBtn.addEventListener("click", () => {
    item.forEach((item) => {
      item.classList.add("highlighted");
    });
  });
}

// Dom Api
var paragraphBaru = document.createElement("p");
paragraphBaru.textContent =
  "Ini adalah paragraph baru yang dibuat di textContent";
paragraphBaru.innerHTML +=
  "<strong> Ini adalah teks tebal yang ditambahkan dengan InnerHtml </strong>";
paragraphBaru.className = "domhighlight";
var container = document.querySelector(".container");
if (container) {
  container.appendChild(paragraphBaru);
}

hapus = () => {
  var hapusPara2 = document.getElementById("para2");
  hapusPara2.remove();
};

var bgColor = document.getElementById("bg-color");
var textColor = document.getElementById("text-color");
if (bgColor) {
  bgColor.addEventListener("change", () => {
    document.body.style.backgroundColor = bgColor.value;
  });
}
if (textColor) {
  textColor.addEventListener("change", () => {
    document.body.style.color = textColor.value;
  });
}

// studi kasus 1
function ubahTeks() {
  document.getElementById("judul1").innerHTML =
    "Selamat Datang di Pemrograman Web!";
}

// Studi kasus 2
function ubahWarna() {
  document.body.style.backgroundColor = "blue";
}

// Studi kasus 3
function ubahElemen3() {
  document.getElementById("judul3").innerHTML = "Judul Baru";
  document.getElementsByClassName("deskripsi3")[0].style.color = "red";
  document.getElementsByTagName("p")[1].innerHTML = "Paragraf telah diubah";
}

// Studi kasus 4
function ubahElemen4() {
  document.getElementById("judul4").innerHTML = "Judul Baru";
  document.getElementsByClassName("deskripsi4")[0].style.color = "blue";
}

// Studi kasus 5
function ubahElemen5() {
  document.getElementsByClassName("konten5")[0].style.backgroundColor =
    "yellow";
  document.getElementById("judul5").innerHTML = "Judul Baru";
}

// Studi kasus 6
function ubahElemen6() {
  document.getElementsByTagName("h1")[0].innerHTML = "Judul Baru";

  var box = document.getElementsByClassName("box");
  for (var i = 0; i < box.length; i++) {
    box[i].style.backgroundColor = "green";
  }
}

// Studi kasus 7
function ubahElemen7() {
  let paragraf = document.getElementsByTagName("p");
  Array.from(paragraf).forEach((e) => {
    e.innerHTML = "Paragraf Telah diubah";
  });
  if (paragraf[5] && paragraf[6]) {
    paragraf[5].innerHTML = "Paragraf keenam telah diubah";
    paragraf[6].innerHTML = "Paragraf ketujuh telah diubah";
  }
}

// Tugas 1
let btn1 = document.getElementById("btn-tgs1");
let welcome = document.getElementById("welcome");
let param = document.getElementsByName("param");
let li = document.getElementsByClassName("li");
if (btn1) {
  btn1.addEventListener("click", () => {
    welcome.classList.add("tugas1bg");
    for (let i = 0; i < param.length; i++) {
      param[i].classList.add("tugas1bg");
    }
    Array.from(li).forEach((e) => {
      e.style.color = "tomato";
    });
  });
}

// Tugas 2
let tambah = document.getElementById("tambah");
let hilang = document.getElementById("remove");
var elementDiv = document.getElementById("elementBaru");
let count = 0;

tambah.addEventListener("click", () => {
  count++;
  var newElem = document.createElement("h3");
  newElem.textContent = `Menambahkan elemen ke ${count}`;
  elementDiv.appendChild(newElem);
});

hilang.addEventListener("click", () => {
  let semuaElement = elementDiv.querySelectorAll("h3");
  if (semuaElement.length > 0) {
    semuaElement[semuaElement.length - 1].remove();
    count--;
  }
  if (semuaElement === 0) {
    count = 0;
  }
});
