 let input = document.getElementById ("input-principal")
 let button= document.getElementById ("botao-adicionar")
 let tarefa= document.getElementById("nome-tarefa-id")
let listacompleta= document.getElementById("tarefas")

let arraydetarefas =[]
recarregartarefas()


function mostrartarefas(){
let novali = ""

arraydetarefas.forEach ( (tarefa,index) => {


    novali = novali + `
<li class="iten-tarefa ${tarefa.concluida == true ? "concluido" : "" } ">
    <button class="botao-foguete" onclick="concluirtarefa(${index})">
        <i class="fas fa-rocket"></i>
    </button>

    <p class="nome-tarefa  ${tarefa.concluida == true ? "concluido" : "" }" id="nome-tarefa-id">${tarefa.tarefa}</p>

    <button class="botao-delete" onclick="deletartarefa(${index})">
        <i class="fas fa-trash"></i>
    </button>
</li>
`
})

listacompleta.innerHTML = novali

localStorage.setItem("lista", JSON.stringify(arraydetarefas) )


}

function deletartarefa(index){

    arraydetarefas.splice(index,1)

    mostrartarefas()
}


 function adicionarTarefa(){

if(input.value){

    arraydetarefas.push({
        tarefa:input.value,
        concluida:false
     })

}
else{
alert("Digite uma tarefa")
}

  
input.value=""
 mostrartarefas()
 
 } 

 function concluirtarefa(index){
arraydetarefas[index].concluida = !arraydetarefas[index].concluida
mostrartarefas()
 }


 function recarregartarefas(){
let minhastarefas = localStorage.getItem ("lista")

if(minhastarefas){
    arraydetarefas = JSON.parse(minhastarefas)

   mostrartarefas()
}

 }

function adicionarpeloEnter(teclas){
 if(teclas.key=== "Enter"){
    adicionarTarefa()
 }

}

 button.addEventListener("click",adicionarTarefa)
 document.addEventListener("keypress",adicionarpeloEnter)

 