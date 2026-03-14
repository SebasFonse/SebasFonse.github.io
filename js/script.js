const Container = document.querySelector('.Container');
const registrobtn = document.querySelector('.registro-btn');
const Iniciobtn = document.querySelector('.Inicio-btn');

registrobtn.addEventListener('click', () =>{
    Container.classList.add('active');
});

Iniciobtn.addEventListener('click', () =>{
    Container.classList.remove('active');
});