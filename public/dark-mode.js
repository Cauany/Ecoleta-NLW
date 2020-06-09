const btnDarkMode = document.querySelector('div.dark-mode')

btnDarkMode.onclick = () => {
    const ball = document.querySelector('div.dark-mode span')
    const body = document.getElementById('body')
    const title = document.querySelector('h1')
    const par = document.querySelector('p')
    const a = document.querySelector(' header a')
    const img = document.querySelector('div.content header img')
    btnDarkMode.classList.toggle('dark')
    

    if( btnDarkMode.classList == 'dark-mode dark'){
        body.style.backgroundColor = 'rgba(0, 0, 0, 0.74)'
        ball.style.backgroundColor = 'white'
        ball.style.left = '30px'
        title.style.color = 'white'
        par.style.color = 'grey'
        a.style.color = 'white'
        img.setAttribute('src', 'assets/logo2.svg')
    }else{
        ball.style.left = '3px'
        ball.style.backgroundColor = 'rgba(0, 0, 0, 0.74)'
        body.style.backgroundColor = '#f0f0f5'
        title.style.color = '#322153'
        par.style.color = 'rgba(14, 4, 4, 0.747)'
        a.style.color = '#322153'
        img.setAttribute('src', 'assets/logo.svg')

    }
}

