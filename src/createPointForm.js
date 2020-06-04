//Funções 
const selectUf = document.querySelector('select[name=uf]')
const itemsToCollect = document.querySelectorAll('.items-grid li')
const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []



for(item of itemsToCollect){
    item.addEventListener('click', handleSelectedItem)
}

populateUFs()
selectUf.addEventListener('change', getCities) 

function populateUFs(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for(state of states){
                selectUf.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
            }
        }
    )
}

function getCities(event){
    const selectCity = document.querySelector('select[name=city]')
    const inputState = document.querySelector('input[name=state]')
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    inputState.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    selectCity.innerHTML = 'option value> Selecione a Cidade</option>'
    selectCity.disabled = true

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for(city of cities){
                selectCity.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`
            }

            selectCity.disabled = false
        }
    )
}

function handleSelectedItem(event){
    const itemLi = event.target

    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(
        item => {
            const itemFound = item == itemId
            return itemFound
        })

    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(
            item =>{
                const itemIsDifferent = item != itemId
                
                return itemIsDifferent
            })

        selectedItems = filteredItems

    }else{
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}



