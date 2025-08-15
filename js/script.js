const modalBackdrop = document.getElementById("modal-backdrop");
const modalContainer = document.getElementById("modal-container");
const namaForm = document.getElementById("nama-form");
const sapaanElemen = document.getElementById("sapaan");

const formMessage = document.getElementById("form-message");

function tampilkanModal() {
  modalBackdrop.style.display = "block";
  modalContainer.style.display = "block";
}

function sembunyikanModal() {
  modalBackdrop.style.display = "none";
  modalContainer.style.display = "none";
}

namaForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("input-nama").value;

  sapaanElemen.textContent = ` ${nama}`;

  sembunyikanModal();
});

function setSubmitTime() {
  const waktuSekarang = new Date();
  const day = waktuSekarang.getDay();
  const month = waktuSekarang.getUTCMonth() + 1;
  const year = waktuSekarang.getFullYear();
  const jam = waktuSekarang.getHours();
  const menit = waktuSekarang.getMinutes();
  const detik = waktuSekarang.getSeconds();

  const waktuString = `${day}-${month}-${year} ${jam}:${menit}:${detik}`;
  document.getElementById("waktu-submit-output").textContent = waktuString;
}

formMessage.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = document.getElementById("input-nama").value;
  const tanggalLahir = document.getElementById("input-tanggal-lahir").value;

  // Mendapatkan nilai radio button yang dicentang
  const jenisKelaminInput = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  );
  const jenisKelaminValue = jenisKelaminInput ? jenisKelaminInput.value : "";

  const pesanValue = document.getElementById("input-pesan").value;

  setSubmitTime();
  document.getElementById("nama-output").textContent = nama;
  document.getElementById("tl-output").textContent = tanggalLahir;
  document.getElementById("jenis-kelamin-output").textContent =
    jenisKelaminValue;
  document.getElementById("pesan-output").textContent = pesanValue;

  document.getElementById("message-list").style.display = "block";
});

window.onload = tampilkanModal;
