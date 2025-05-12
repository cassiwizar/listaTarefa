let tarefas = [
    { id: 1, texto: "Estudar para a prova", concluida: false },
    { id: 2, texto: "Viajar no tempo para impedir John Lenon", concluida: true },
    { id: 3, texto: "Ler um capítulo perdido", concluida: false },
    { id: 4, texto: "Twitch Ap jungle", concluida: true },
    { id: 5, texto: "Lavar a louça", concluida: false },
    { id: 6, texto: "Capturar um urso nos emirados arabes", concluida: false },
    { id: 7, texto: "Desenhar onibus no rio de janeiro", concluida: true },
    { id: 7, texto: "Combar de rammus Q R E W AA AA AA", concluida: true },

];
  
  function renderizarTarefas() {
    const lista = document.getElementById("lista");
    const filtro = document.getElementById("filtroSelect").value;
  
    lista.innerHTML = ""; 
  
    const tarefasFiltradas = tarefas.filter(tarefa => {
      if (filtro === "concluidas") return tarefa.concluida;
      if (filtro === "nao-concluidas") return !tarefa.concluida;
      return true; 
    });
  
    tarefasFiltradas.forEach(tarefa => {
      const item = document.createElement("li");
      item.className = "tarefa";
      if (tarefa.concluida) item.classList.add("concluida");
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = tarefa.concluida;
      checkbox.addEventListener("change", () => {
        tarefa.concluida = checkbox.checked;
        renderizarTarefas(); 
      });
  
      const span = document.createElement("span");
      span.textContent = tarefa.texto;
  
      item.appendChild(checkbox);
      item.appendChild(span);
      lista.appendChild(item);
    });
  }
  
  renderizarTarefas();
  