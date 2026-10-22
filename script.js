
var TANGGAL_ACARA = new Date('2027-01-16T08:00:00+07:00');
var JUDUL_ACARA   = 'Pernikahan Agnez & Neymar';
var LOKASI_ACARA  = 'Masjid Al-Falah, Jl.dukuh kupang  No. 10, Surabaya';

var params = new URLSearchParams(window.location.search);
var namaTamu = params.get('to');
if (namaTamu) document.getElementById('tamu').textContent = namaTamu;

function formatUTC(d) {
  return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}
var akhir = new Date(TANGGAL_ACARA.getTime() + 6 * 3600000);
document.getElementById('btn-kalender').href =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent(JUDUL_ACARA) +
  '&dates=' + formatUTC(TANGGAL_ACARA) + '/' + formatUTC(akhir) +
  '&location=' + encodeURIComponent(LOKASI_ACARA);


var elemen = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var pengamat = new IntersectionObserver(function (entri) {
    entri.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('tampil'); pengamat.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  elemen.forEach(function (el) { pengamat.observe(el); });
} else {
  elemen.forEach(function (el) { el.classList.add('tampil'); });
}

var modalEl = document.getElementById('modalFoto');
var modalFoto = window.bootstrap ? new bootstrap.Modal(modalEl) : null;
var lbImg = document.getElementById('lb-img');
document.querySelectorAll('.galeri-img').forEach(function (img) {
  img.addEventListener('click', function () {
    lbImg.src = img.src.replace(/\/\d+\/\d+$/, '/1200/1200');
    lbImg.alt = img.alt;
    if (modalFoto) modalFoto.show();
  });
});
