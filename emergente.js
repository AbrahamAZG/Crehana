
        const emergente = document.querySelector('.imagencursos')
        const cajaemergente = document.querySelector('.cajaemergente')
        const cerrito = document.querySelector('.cerrito')
        emergente.addEventListener('click',function(){
                cajaemergente.classList.toggle('active')
        })
        cerrito.addEventListener('click',function(){
                cajaemergente.classList.toggle('active')
        })
        