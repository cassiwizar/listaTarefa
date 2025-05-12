let tarefaInput = document.getElementById('tarefaInput');

function adicionarTarefa() {
    const tarefa = document.createElement("div");
    tarefa.className = "tarefa";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    tarefa.appendChild(checkbox); 

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
            tarefaTexto.style.textDecoration = "line-through";
        } else {
            tarefaTexto.style.textDecoration = "none";
        }
    });
    
    const tarefaTexto = document.createElement("span");
    tarefaTexto.textContent = tarefaInput.value;
    tarefa.appendChild(tarefaTexto); 

    const img = document.createElement("img");
    img.src = "download-removebg-preview.png";
    img.onclick = remover;
    tarefa.appendChild(img);
    document.getElementById("lista").appendChild(tarefa); 
}

function remover(event) {
    const tarefa = event.target.parentElement;
    tarefa.remove();
}
function filtrarTarefas() {
    const filtro = document.getElementById("filtroInput").value.toLowerCase();
    const tarefas = document.querySelectorAll(".tarefa");

    tarefas.forEach(tarefa => {
        const texto = tarefa.querySelector("span").textContent.toLowerCase();
        if (texto.includes(filtro)) {
            tarefa.style.display = "block"; 
        } else {
            tarefa.style.display = "none";
        }
    });
}