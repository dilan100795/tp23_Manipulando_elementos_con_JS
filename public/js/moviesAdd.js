window.addEventListener('load', () => {
    console.log('amen');
    const $ = (e) => document.querySelector(e);

    let h1 = $('h1');
    let seccion = $('section');
    let article = $('article');

    h1.innerHTMl = 'AGREGAR PELICULAS';
    h1.classList.add('titulo');

    article.classList.add('fondoTransparente');

    seccion.classList.add('fondoCRUD');



})