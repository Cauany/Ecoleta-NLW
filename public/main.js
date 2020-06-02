const selectUf = document.querySelector('select[name=uf]')

function populateUFs(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for(state of states){
                selectUf.innerHTML += `<option value=${state.id}> ${state.nome} </option>`
            }
        }
    )
}

populateUFs()

function getCities(event){
    const selectCity = document.querySelector('select[name=city]')
    const inputState = document.querySelector('input[name=state]')
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    inputState.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for(city of cities){
                selectCity.innerHTML += `<option value=${city.id}> ${city.nome} </option>`
            }

            selectCity.disabled = false
        }
    )
}


selectUf.addEventListener('change', getCities)