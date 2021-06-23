let menuTgl = document.querySelector('.toggle'),
    showcase = document.querySelector('.showcase');

menuTgl.addEventListener('click',function() {
  showcase.classList.toggle('active');
  menuTgl.classList.toggle('active');
})
