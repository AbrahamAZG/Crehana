const resp = document.querySelector('.menuresp')
const linea = document.querySelector('.menuresponsive')
let cuerpo = document.querySelector('body')
const cerrarr = document.querySelector('.cerrar')

linea.addEventListener('click',function(){
    resp.style.display = 'block';
    cuerpo.style.overflow = 'hidden'
   
})

cerrarr.addEventListener('click',function(){
    resp.style.display = 'none'
})