const tarefa = document.getElementById('texto-tarefa');
const botao = document.getElementById('criar-tarefa');
const listadeTarefa = document.getElementById('lista-tarefas');

function criarTarefa() {
  if (tarefa.value !== '') {
    const criaLista = document.createElement('li');
    criaLista.innerText = tarefa.value;
    tarefa.value = '';
    listadeTarefa.appendChild(crisLista);
    criaLista.addEventListener('click', selectedItem);
  }
}
botao.addEventListener('click', criarTarefa);
