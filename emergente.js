        const emergente = document.querySelector('.imagencursos')
        const cajaemergente = document.querySelector('.cajaemergente')
        const cerrito = document.querySelector('.cerrito')
        const todo = document.querySelector('body')
        const cursonumerouno = document.querySelector('.cursonumerouno')
       

        cursonumerouno.addEventListener('click', function () {
                cajaemergente.classList.toggle('active')
                todo.classList.add('color')
                cajaemergente.classList.add('quitar')
                emergente.classList.add('colores')
                todo.style.overflow = 'hidden'
                cerrito.classList.add('arribamenu')
        })


        cerrito.addEventListener('click', function () {
                cajaemergente.classList.toggle('active')
                todo.classList.remove('color')
                cajaemergente.classList.remove('quitar')
                emergente.classList.remove('colores')
                todo.style.overflow = 'visible'
        })


    