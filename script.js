function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior:'smooth' });
}

function handleSubmit(e){
  e.preventDefault();
  alert('Terima kasih! Pesan Anda telah dikirim.');
  e.target.reset();
}
