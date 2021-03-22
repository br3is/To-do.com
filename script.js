let elementoLista = document.querySelector('ul')
let elementoInput = document.querySelector('input#tarefaForm')
let elementoBotao = document.querySelector('button#button')

let tarefasArray = JSON.parse(localStorage.getItem('list_tarefas'))

function mostrarTarefas(){
    elementoLista.innerHTML = ''

    for (tarefa of tarefasArray){
        let elementotarefa = document.createElement('li')
        let textoTarefa = document.createTextNode(tarefa)

        let elementoLink = document.createElement('button')
        elementoLink.setAttribute('id', 'delete')
        let linkText = document.createTextNode('')
        elementoLink.appendChild(linkText)

        let pos = tarefasArray.indexOf(tarefa)
        elementoLink.setAttribute('onclick', `deletaTarefa(${pos})`)

        elementotarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementotarefa)
        elementotarefa.appendChild(elementoLink)
    }
}

mostrarTarefas()

elementoBotao.onclick = addTarefa

function addTarefa(){
    if(elementoInput.value == 0){
        window.alert('Adicione uma tarefa antes de continuar.')
    }else{
    let textoTarefaAdd = elementoInput.value

    tarefasArray.push(textoTarefaAdd)

    elementoInput.value = ''
    mostrarTarefas()
    salvarNoLocalStorage()
    }
}

function deletaTarefa(pos){
    tarefasArray.splice(pos, 1)
    mostrarTarefas()
    salvarNoLocalStorage()
}

function salvarNoLocalStorage(){
    localStorage.setItem('list_tarefas', JSON.stringify(tarefasArray))
}


