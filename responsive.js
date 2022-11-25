const resp = document.querySelector('.menuresp')
const lineas = document.querySelector('.menuresponsive')
let cuerpo = document.querySelector('body')
const cerrarr = document.querySelector('.cerrar')
const dropdownmenus = document.querySelector('.dropdownmenu')
const dropdowncursoss = document.querySelector('.dropdownmenucursosh')

lineas.addEventListener('click',function(){
   resp.classList.toggle('menurespoToggle');
  
 
})
cerrarr.addEventListener('click',function(){
    resp.classList.toggle('menurespoToggle')
})

dropdowncursoss.addEventListener('click',function(){
    dropdownmenus.classList.toggle('activatedrop')
    dropdownmenus.style.marginTop = '10px'
})