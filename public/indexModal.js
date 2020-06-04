//Constantes
const buttonSearch = document.querySelector('#page-home main a')

buttonSearch.addEventListener('click', 
    () =>{
        //Seleciona as tags
        const modal = document.getElementById('modal')
        const close = document.getElementById('close')

        //Adiciona e remove a class hide
        modal.classList.remove('hide')
        close.onclick = () => {
            modal.classList.add('hide')
        }
    }
)