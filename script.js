function changebkgColor(color){
let section = document.getElementById('coding-journey');
section.style.backgroundColor = color;
}
document.getElementById('intro').addEventListener('click', () => changebkgColor("rgba(3, 3, 35, 1)"));
document.getElementById("react").addEventListener('click', () => changebkgColor(" #1D1D1F"));
document.getElementById("backend").addEventListener('click', () => changebkgColor(" rgba(27, 27, 151, 1)"));


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Attach event listeners to navbar items
document.getElementById('abo').addEventListener('click', function() {
  scrollToSection('about');
});

document.getElementById('jou').addEventListener('click', function() {
  scrollToSection('coding-journey');
});

document.getElementById('goa').addEventListener('click', function() {
  scrollToSection('goal');
});

//year thingy
document.getElementById("year").textContent= new Date().getFullYear();


