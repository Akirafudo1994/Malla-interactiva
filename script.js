document.addEventListener('DOMContentLoaded', function() {
    // Configuración inicial
    const materias = document.querySelectorAll('.materia');
    const materiasCompletadas = JSON.parse(localStorage.getItem('materiasCompletadas')) || [];

    // Aplicar estado inicial
    materias.forEach(materia => {
        const nombreMateria = materia.textContent.split(' (')[0];
        
        if (materiasCompletadas.includes(nombreMateria)) {
            materia.classList.add('completada');
        }
    });

    // Manejar clics en materias
    materias.forEach(materia => {
        materia.addEventListener('click', function() {
            if (this.classList.contains('bloqueada')) return;
            
            const nombreMateria = this.textContent.split(' (')[0];
            
            if (this.classList.contains('completada')) {
                this.classList.remove('completada');
                const index = materiasCompletadas.indexOf(nombreMateria);
                if (index > -1) {
                    materiasCompletadas.splice(index, 1);
                }
            } else {
                this.classList.add('completada');
                if (!materiasCompletadas.includes(nombreMateria)) {
                    materiasCompletadas.push(nombreMateria);
                }
            }
            
            localStorage.setItem('materiasCompletadas', JSON.stringify(materiasCompletadas));
            actualizarRequisitos();
        });
    });

    // Función para actualizar requisitos (puedes implementar la lógica de requisitos aquí)
    function actualizarRequisitos() {
        // Implementa la lógica de requisitos según sea necesario
    }

    // Inicializar requisitos
    actualizarRequisitos();
});
