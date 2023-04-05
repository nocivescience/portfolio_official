const projectosString='Proyectos';
const proyectosEl= document.getElementById('proyectos');
proyectosEl.classList.add('proyectos');
function separarLetras(){
    projectosString.split('').map((letra, i) => {
        proyectosEl.innerHTML += `<div class="letter">${letra}</div>`;
    })
}
separarLetras();