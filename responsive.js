const resp = document.querySelector('.menuresp')
const lineas = document.querySelector('.menuresponsive')
let cuerpo = document.querySelector('body')
const cerrarr = document.querySelector('.cerrar')

lineas.addEventListener('click',function(){
   resp.classList.toggle('menurespoToggle');
  
 
})
cerrarr.addEventListener('click',function(){
    resp.classList.toggle('menurespoToggle')
})