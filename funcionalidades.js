function registrar(){
    var hove = document.querySelector('.hove')
    var texto1 = document.querySelector('.text-1')
    var texto2 = document.querySelector('.text-2')

    hove.style.left = '0%'
    hove.style.transition = '0.5s'
    hove.style.transform = 'scaleX(-1)'

    texto1.style.transform = 'scaleX(-1)'
    texto2.style.transform = 'scaleX(-1)'

   
}

function login(){
    var hove = document.querySelector('.hove')
    var texto1 = document.querySelector('.text-1')
    var texto2 = document.querySelector('.text-2')

    hove.style.left = '50%'
    hove.style.transition = '0.5s'
    hove.style.transform = 'scaleX(1)'

    texto1.style.transform = 'scaleX(1)'
    texto2.style.transform = 'scaleX(1)'

}