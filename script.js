document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.secao');
  
    function mostrarSecao(idSecao) {
      sections.forEach(secao => {
        secao.classList.remove('ativo');
      });
      const secaoAlvo = document.getElementById(idSecao);
      if (secaoAlvo) {
        secaoAlvo.classList.add('ativo');
      }
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const idSecao = this.getAttribute('data-section');
        mostrarSecao(idSecao);
      });
    });
  
    mostrarSecao('inicio');
  
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
  
        if (!nome || !email || !mensagem) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
  
        if (!validarEmail(email)) {
          alert('Por favor, insira um email válido.');
          return;
        }
  
        alert('Mensagem enviada com sucesso!');
        form.reset();
      });
    }
  
    const itensGaleria = document.querySelectorAll('.item-galeria');
    const modal = document.querySelector('.modal');
  
    itensGaleria.forEach(item => {
      item.addEventListener('click', function () {
        const img = this.querySelector('img').cloneNode(true);
        modal.innerHTML = '';
        modal.appendChild(img);
        modal.style.display = 'flex';
      });
    });
  
    if (modal) {
      modal.addEventListener('click', function () {
        this.style.display = 'none';
      });
    }
  });
  
  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  