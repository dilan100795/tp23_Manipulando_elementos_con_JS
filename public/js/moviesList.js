window.addEventListener('load', () => {
    console.log('yesi');

    const $ = (e) => document.querySelector(e);

    let body = $('body');
    let h1 = $('h1');

    let msg = confirm('¿Desea modo oscuro?');

    if (msg === true) {
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList')
    }

    h1.innerHTML = 'LISTADO DE PELÍCULAS'
    h1.style.backgroundColor = 'tea';
    h1.style.color = 'white';
    h1.style.padding = '20px';

    
})