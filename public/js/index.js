window.addEventListener('load', () => {
    console.log('listo');

    const $ = (e) => document.querySelector(e);

    let main = $('main');
    let h2 = $('h2');
    let a = $('a');
    let p = document.querySelectorAll('p');

    let msg = prompt('Ingrese su nombre');

    if (msg.toLocaleLowerCase().length > 0) {
        h2.innerHTML += msg
    }else {
        h2.innerHTML += 'invitado'
    }
    
    h2.style.textTransform = 'uppercase';
    a.style.color = '#E51B3E'

    let  fondo = confirm('Desea colocar un fondo de pantalla?');

    if (fondo == true) {
        document.body.classList.add('fondo')
    }
    
    for(let i = 0 ; i < p.length; i++){
        if(i % 2 == 0){
            p[i].classList.add('destacadoPar');
        }else{
            p[i].classList.add('destacadoImpar');
        }
    }
    main.style.display = 'block'
})