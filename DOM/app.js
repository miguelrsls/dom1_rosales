// 1. Selección de elementos del DOM
const emailInput = document.getElementById('emailInput');
const btnGenerar = document.getElementById('btnGenerar');
const resultadoContenedor = document.getElementById('resultadoContenedor');
const tokenOutput = document.getElementById('tokenOutput');

const nombre_alumno = "SOY JUAN PEREZ SOSA Y MI PROGRAMA TERMINO A LAS: ";
const fecha = new Date();

// 2. Escuchar el evento de clic en el botón
btnGenerar.addEventListener('click', () => {
    const correo = emailInput.value.trim();

    // Validación simple mediante el DOM
    if (correo === "" || !correo.includes('@')) {
        alert("Por favor, introduce un correo electrónico válido.");
        console.error("NO PUSISTE EL ARROBA PONTE PILAS!!!")
        return;
    }

    // 3. Lógica para generar el token equivalente
    // Usamos btoa() para convertir el string a Base64 e imitar un token (ej. JWT simulado)
    const salt = "TOKEN_KEY_2026_";
    const timestamp = Date.now();
    const tokenSimulado = btoa(`${salt}${correo}_${timestamp}`);

    // 4. Manipulación del DOM para mostrar el resultado
    // Insertamos el texto del token dentro del div correspondiente
    tokenOutput.textContent = tokenSimulado;

    // Removemos la clase 'hidden' para que el contenedor sea visible en la pantalla
    resultadoContenedor.classList.remove('hidden');
    console.log("La accion de conversion de cifrado de token ha sido correcta.")
    // Opcional: Cambiamos el estilo dinámicamente mediante el DOM para dar feedback visual
    tokenOutput.style.backgroundColor = "#e8f8f5"; 
    tokenOutput.style.borderLeftColor = "#2ecc71"; // Cambia a verde al completarse

    console.info(nombre_alumno+fecha);
});