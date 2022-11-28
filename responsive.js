const resp = document.querySelector('.menuresp')
const lineas = document.querySelector('.menuresponsive')
let cuerpo = document.querySelector('body')
const cerrarr = document.querySelector('.cerrar')
const dropdownmenus = document.querySelector('.dropdownmenu')
const dropdowncursoss = document.querySelector('.dropdownmenucursosh')
const banneruno = document.querySelector('.contenedorbanner1')
const lanzamientos = document.querySelector('.lanzamientosdecrehana')
const desapareces = document.querySelector('.desaparece')
const nuevoslanzamientoss = document.querySelector('.nuevoslanzamientos')
const cajados =document.querySelector('cajadosdropdown')
const cajatres = document.querySelector('.cajatresdropdown')
const cajacuatro = document.querySelector('.cajacuatrodropdown')
const categoriasmouse = document.querySelector('.categoriaunodos')

lineas.addEventListener('click',function(){
   resp.classList.toggle('menurespoToggle');
  
 
})
cerrarr.addEventListener('click',function(){
    resp.classList.toggle('menurespoToggle')
})

dropdowncursoss.addEventListener('click',function(){
    dropdownmenus.classList.toggle('activatedrop')
   
    
   
})


