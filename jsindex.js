window.onload = function() {
  alert("Bienvenido a Mi Tierra Vive - ¡Explora la República Dominicana!");
  
 
  const imagen = document.getElementById("imagenpalpitante");
  imagen.classList.add("palpitacion");
  

};
/*
document.querySelector('a[href="#contactar"]').addEventListener('click', function(event) {
event.preventDefault(); 


  const targetDiv = document.getElementById('contactar');

  
  targetDiv.scrollIntoView({ behavior: 'smooth' });
});
*/

const gallery = document.querySelector('.gallery');
    const lightbox = document.querySelector('#lightbox');
    const lightboxImg = document.querySelector('#lightbox-img');
    const closeBtn = document.querySelector('.close');
    const arrows = document.querySelectorAll('.arrow');
    let currentIndex = 0;
	
	
const images = Array.from(gallery.querySelectorAll('img'));

    // Mostrar la imagen en el lightbox
    function showImage(index) {
        const imgSrc = images[index].src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
        currentIndex = index;
    }
	
 // Navegar entre imágenes
    function navigate(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        showImage(currentIndex);
    }
	
	
// Cerrar el lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Eventos para flechas
    arrows[0].addEventListener('click', () => navigate(-1)); // Flecha izquierda
    arrows[1].addEventListener('click', () => navigate(1));  // Flecha derecha

    // Navegar con el teclado
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'ArrowLeft') navigate(-1);
            if (e.key === 'ArrowRight') navigate(1);
            if (e.key === 'Escape') lightbox.style.display = 'none';
        }
    });

    // Añadir evento click a las imágenes de la galería
    images.forEach((img, index) => {
        img.addEventListener('click', () => showImage(index));
    });
	
	

 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (event) {
                event.preventDefault(); // Evita el comportamiento predeterminado
                const targetId = this.getAttribute('href').substring(1); // Obtén el ID del destino
                const targetElement = document.getElementById(targetId); // Selecciona el elemento por su ID

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });



// MODAL

document.getElementById('consultaForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const consulta = document.getElementById('consulta').value;

            if (consulta) {
                // Mostrar el modal
                const modal = document.getElementById('modal');
                const modalText = document.getElementById('modalText');
                const guardarBtn = document.getElementById('guardarBtn');

                modalText.textContent = "Consulta: " + consulta;
                modal.style.display = 'flex';

                // Asignar funcionalidad al botón dentro del modal
                guardarBtn.onclick = function() {
                    // Crear el contenido del archivo
                    const contenido = "Consulta: " + consulta;

                    // Crear un Blob y la URL para descargar
                    const blob = new Blob([contenido], { type: 'text/plain' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'consulta.txt';
                    link.click();
                };
            }
        });

        // Cerrar el modal al hacer clic fuera de él
        document.getElementById('modal').addEventListener('click', function(event) {
            if (event.target === this) {
                this.style.display = 'none';
            }
        });
		
		
		
		
		
		
 // Obtener elementos del DOM " VENTANA EMERGENTE "
    const modal = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close");

    // Abrir el modal
    openModal.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "block";
    });

    // Cerrar el modal
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
	
	
	
	// SECCION RUTAS
	
	
	// Obtener elementos del DOM
    const modalTriggers = document.querySelectorAll('.open-modal');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    // Abrir el modal correspondiente
    modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'block';
      });
    });

    // Cerrar modales al hacer clic en el botón de cerrar
    closeButtons.forEach(button => {
      button.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
      });
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', function (e) {
      modals.forEach(modal => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
 