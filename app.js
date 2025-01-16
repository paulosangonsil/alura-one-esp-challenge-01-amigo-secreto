// El objetivo principal de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
const listaAmigos = [];

function sortearAmigo() {
    // Verifica si hay suficientes amigos en la lista
    if (listaAmigos.length === 0) {
        alert('¡Añade al menos un amigo para sortear!');
        return;
    }

    // Selecciona un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Obtiene la lista de resultado y actualiza
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}

function actualizarLista() {
    // Obtiene la referencia de la lista ul
    const lista = document.getElementById('listaAmigos');
    
    // Limpia la lista actual
    lista.innerHTML = '';
    
    // Si la lista está vacía, retorna
    if (listaAmigos.length === 0) {
        return;
    }
    
    // Crea un elemento li para cada amigo
    for (let i = 0; i < listaAmigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    // Obtiene el valor del campo de texto, limpiando espacios en blanco
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    // Verifica si el campo está vacío
    if (nombreAmigo === '') {
        alert('¡Por favor, ingresa el nombre del amigo!');
        return;
    }

    // Añade el nombre a la lista
    listaAmigos.push(nombreAmigo);
    
    // Limpia el campo de texto
    inputAmigo.value = '';
    
    // Actualiza la visualización de la lista
    actualizarLista();
}
