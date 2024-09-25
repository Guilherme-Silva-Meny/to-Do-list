//seleciona os elemtentos do DOM que serão usados
const inputTarefa = document.getElementById
('nova-tarefa');
const btnAdcionar = document.getElementById
('adicionar-tarefa');
const listaTarefas = document.getElementById
('lista-tarefas');

// Função para adcionar um nova tarefa 
btnAdcionar.addEventListener('click', function(){
    // Obtem o valor digitado no campo de entrada
    const tarefaTexto = inputTarefa.value;

    // verifica se o campo de entrada está vazio
    if (tarefaTexto === '') {
        alert('Digite uma tarefa antes de adcionar!');
        return; // sai da função se o campo estiver vazio
    }

    // criar um novo item de lista (li) para a tarefa 
    const novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefaTexto;

    // criar um botão de remover tarefa e o eanexa à nova tarefa
    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'Remover';
    btnRemover.classList.add('remover-tarefa');
    //aplica classe CSS ao botão

    //função para remover a tarefa quando o botão for clicado

    btnRemover.addEventListener('click', function () {
        listaTarefas.removeChild(novaTarefa);
    })

    //adcionar botão de remover a tarefa
    novaTarefa.appendChild(btnRemover);

    //adcionar a nova tarefa a lista de tarefas
    listaTarefas.appendChild(novaTarefa);

    //limpar o campo de entrada após adcionar a tarefa 
    inputTarefa.value ='';

    //adcionar interatividade ao pressionar entender para adcionar tarefas
    inputTarefa.addEventListener('keypress',function(e) {
        if (e.key === ' Enter ') {
            btnAdcionar.click(); //simula o clique no botão de adcionar tarefa
        }
    })
    
});