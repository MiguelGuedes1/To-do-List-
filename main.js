/* main code */

const localStorageKey = "to-do-list-gn"

function novatarefa() {
  var novatarefa = document.getElementById("novatarefa");
  // validar se o usuario escreve algo

  if (!novatarefa.value) {
    alert("Por favor digite algo na tarefa");
  } else {
    var values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    values.push({
      name: novatarefa.value
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values));
    mostrartarefas(); // chamando a função para mostrar as tarefas adicionadas
    novatarefa.value = ""; // limpa o valor do input
  }
}

function mostrartarefas() {
  var values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  var lista = document.getElementById("to-do-list");
  lista.innerHTML = "";

  for (let i = 0; i < values.length; i++) {
    lista.innerHTML += `<li>${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/> </svg></button></li>`;
  }
}

/* Função para remover itens das tarefas */

function removeItem(data) {
  var values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  var index = values.findIndex(x => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  mostrartarefas();
}

mostrartarefas();

/* tipos de modo da pagina*/

  var mudartitulo=document.getElementById("h1")
  var placeholder=document.getElementById("novatarefa")
  

  function modoportugues(){
    mudartitulo.innerHTML=`Lista de Tarefas | MG`
    mudartitulo.style.fontSize = "2.5rem";
    placeholder.setAttribute("placeholder", "Digite aqui a nova tarefa");

  }

  function modoingles(){
    mudartitulo.innerHTML=`To do List | MG`
    placeholder.setAttribute("placeholder", "Enter a new task");
  }



/* Adiconar tarefa ao carregar no Enter*/

  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      novatarefa();
    }
  });
  
  botao.addEventListener("click", novatarefa);
