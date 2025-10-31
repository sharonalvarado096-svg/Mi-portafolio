// Espera a que el DOM esté completamente cargado para ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    const botonQuienSoy = document.getElementById('btn-quien-soy');
    const seccionHabilidades = document.getElementById('seccion-habilidades');

    function toggleHabilidades() {
        
        if (seccionHabilidades.classList.contains('habilidades-mostradas')) {
            // Ocultar
            seccionHabilidades.classList.remove('habilidades-mostradas');
            seccionHabilidades.classList.add('habilidades-ocultas');
            botonQuienSoy.textContent = '¿Quién Soy? 👑'; 
        } else {
            // Mostrar
            seccionHabilidades.classList.remove('habilidades-ocultas');
            seccionHabilidades.classList.add('habilidades-mostradas');
            botonQuienSoy.textContent = 'Ocultar Habilidades 🙈'; 
        }
    }

    botonQuienSoy.addEventListener('click', toggleHabilidades);
});