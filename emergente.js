        const emergente = document.querySelector('.imagencursos')
        const cajaemergente = document.querySelector('.cajaemergente')
        const cerrito = document.querySelector('.cerrito')
        const todo = document.querySelector('body')
        emergente.addEventListener('click', function () {
                cajaemergente.classList.toggle('active')
                todo.classList.add('color')

                cajaemergente.classList.add('quitar')
                emergente.classList.add('colores')
        })
        cerrito.addEventListener('click', function () {
                cajaemergente.classList.toggle('active')
                todo.classList.remove('color')
                cajaemergente.classList.remove('quitar')
                emergente.classList.remove('colores')

        })