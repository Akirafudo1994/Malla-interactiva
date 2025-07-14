// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const mallaData = [
        {
            semester: 1,
            courses: [
                { name: "ORIENTACIÓN FARMACÉUTICA I", credits: 2, requires: [] },
                { name: "FÍSICA APLICADA II", credits: 3, requires: [] },
                { name: "MATEMÁTICA APLICADA I", credits: 3, requires: [] },
                { name: "BIOLOGÍA I", credits: 3, requires: [] },
                { name: "QUÍMICA BÁSICA", credits: 6, requires: [] },
                { name: "BOTÁNICA APLICADA I", credits: 2, requires: [] }
            ]
        },
        {
            semester: 2,
            courses: [
                { name: "ORIENTACIÓN FARMACÉUTICA II", credits: 2, requires: ["ORIENTACIÓN FARMACÉUTICA I"] },
                { name: "FÍSICA APLICADA II", credits: 3, requires: ["FÍSICA APLICADA II (Semestre 1)"] },
                { name: "MATEMÁTICA APLICADA II", credits: 3, requires: ["MATEMÁTICA APLICADA I"] },
                { name: "BIOLOGÍA II", credits: 3, requires: ["BIOLOGÍA I"] },
                { name: "QUÍMICA BÁSICA II", credits: 6, requires: ["QUÍMICA BÁSICA"] },
                { name: "BOTÁNICA APLICADA II", credits: 2, requires: ["BOTÁNICA APLICADA I"] }
            ]
        },
        {
            semester: 3,
            courses: [
                { name: "Estudio y Comprensión del Hombre", credits: 2, requires: [] },
                { name: "Química Inorgánica I", credits: 3, requires: ["QUÍMICA BÁSICA II"] },
                { name: "Química Orgánica I", credits: 4, requires: ["QUÍMICA BÁSICA II"] },
                { name: "Análisis Químico I", credits: 5, requires: ["QUÍMICA BÁSICA II"] },
                { name: "Fisicoquímica I", credits: 3, requires: ["FÍSICA APLICADA II (Semestre 2)"] },
                { name: "FISIOLOGÍA y ANATOMÍA I", credits: 3, requires: ["BIOLOGÍA II"] },
                { name: "Parasitología", credits: 2, requires: ["BIOLOGÍA II"] },
                { name: "Estadística I", credits: 2, requires: ["MATEMÁTICA APLICADA II"] },
                { name: "Atención Farmacéutica I", credits: 2, requires: ["ORIENTACIÓN FARMACÉUTICA II"] }
            ]
        },
        {
            semester: 4,
            courses: [
                { name: "Química Inorgánica II", credits: 3, requires: ["Química Inorgánica I"] },
                { name: "Química Orgánica II", credits: 5, requires: ["Química Orgánica I"] },
                { name: "Análisis Químico II", credits: 6, requires: ["Análisis Químico I"] },
                { name: "Fisicoquímica II", credits: 3, requires: ["Fisicoquímica I"] },
                { name: "Fisiología y Anatomía II", credits: 3, requires: ["FISIOLOGÍA y ANATOMÍA I"] },
                { name: "Estadística II", credits: 2, requires: ["Estadística I"] },
                { name: "Metodología de la Investigación", credits: 2, requires: ["Estadística I"] },
                { name: "Atención Farmacéutica II", credits: 2, requires: ["Atención Farmacéutica I"] }
            ]
        },
        {
            semester: 5,
            courses: [
                { name: "Química Medicinal I", credits: 3, requires: ["Química Orgánica II"] },
                { name: "Análisis Instrumental I", credits: 3, requires: ["Análisis Químico II"] },
                { name: "Fisiopatología I", credits: 3, requires: ["Fisiología y Anatomía II"] },
                { name: "Salud Pública I", credits: 2, requires: ["Parasitología"] },
                { name: "Bioquímica I", credits: 3, requires: ["Fisicoquímica II"] },
                { name: "Farmacotecnia I", credits: 3, requires: ["Atención Farmacéutica II"] },
                { name: "Legislación Farmacéutica I", credits: 2, requires: [] },
                { name: "Diseño de Proyectos I", credits: 2, requires: ["Estadística II"] }
            ]
        },
        {
            semester: 6,
            courses: [
                { name: "Química Medicinal II", credits: 3, requires: ["Química Medicinal I"] },
                { name: "Análisis Instrumental II", credits: 3, requires: ["Análisis Instrumental I"] },
                { name: "Fisiopatología II", credits: 3, requires: ["Fisiopatología I"] },
                { name: "Salud Pública II", credits: 2, requires: ["Salud Pública I"] },
                { name: "Bioquímica II", credits: 3, requires: ["Bioquímica I"] },
                { name: "Farmacotecnia II", credits: 3, requires: ["Farmacotecnia I"] },
                { name: "Legislación Farmacéutica II", credits: 2, requires: ["Legislación Farmacéutica I"] },
                { name: "Diseño de Proyectos II", credits: 2, requires: ["Diseño de Proyectos I"] }
            ]
        },
        {
            semester: 7,
            courses: [
                { name: "Microbiología I", credits: 3, requires: ["Salud Pública II"] },
                { name: "Farmacología I", credits: 3, requires: ["Fisiopatología II"] },
                { name: "Toxicología I", credits: 3, requires: ["Bioquímica II"] },
                { name: "Farmacognosis I", credits: 3, requires: ["Química Medicinal II"] },
                { name: "Biofarmacia I", credits: 3, requires: ["Análisis Instrumental II"] },
                { name: "Procesos Unitarios I", credits: 3, requires: ["Análisis Instrumental II"] },
                { name: "Higiene y Seguridad Industrial I", credits: 2, requires: [] },
                { name: "Economía Aplicada", credits: 2, requires: [] },
                { name: "Orientación Pasantías Oficina de Farmacia", credits: 2, requires: ["Farmacotecnia II"] }
            ]
        },
        {
            semester: 8,
            courses: [
                { name: "Microbiología II", credits: 3, requires: ["Microbiología I"] },
                { name: "Farmacología II", credits: 3, requires: ["Farmacología I"] },
                { name: "Toxicología II", credits: 3, requires: ["Toxicología I"] },
                { name: "Farmacognosis II", credits: 3, requires: ["Farmacognosis I"] },
                { name: "Biofarmacia II", credits: 3, requires: ["Biofarmacia I"] },
                { name: "Procesos Unitarios II", credits: 3, requires: ["Procesos Unitarios I"] },
                { name: "Higiene y Seguridad Industrial II", credits: 2, requires: ["Higiene y Seguridad Industrial I"] },
                { name: "Administración Aplicada", credits: 2, requires: ["Economía Aplicada"] },
                { name: "Pasantías I Oficina de Farmacia", credits: 2, requires: ["Orientación Pasantías Oficina de Farmacia"] }
            ]
        },
        {
            semester: 9,
            courses: [
                { name: "Primeros Auxilios I", credits: 3, requires: ["Toxicología II"] },
                { name: "Farmacoterapéutica I", credits: 2, requires: ["Farmacología II"] },
                { name: "Bromatología", credits: 3, requires: ["Microbiología II"] },
                { name: "Farmacotecnia III", credits: 3, requires: ["Procesos Unitarios II"] },
                { name: "Dermocosmética I", credits: 3, requires: ["Farmacognosis II"] },
                { name: "Mercadotecnia I", credits: 2, requires: [] },
                { name: "Técnicas Gerenciales I", credits: 2, requires: ["Administración Aplicada"] },
                { name: "Seminario Trabajo Especial de Grado I", credits: 2, requires: ["Diseño de Proyectos II"] },
                { name: "Orientación Pasantías Industriales-Empresas", credits: 2, requires: ["Pasantías I Oficina de Farmacia"] },
                { name: "Farmacia Hospitalaria I", credits: 2, requires: ["Farmacología II"] }
            ]
        },
        {
            semester: 10,
            courses: [
                { name: "Primeros Auxilios II", credits: 3, requires: ["Primeros Auxilios I"] },
                { name: "Farmacoterapéutica II", credits: 2, requires: ["Farmacoterapéutica I"] },
                { name: "Bromatología II", credits: 3, requires: ["Bromatología"] },
                { name: "Farmacotecnia IV", credits: 3, requires: ["Farmacotecnia III"] },
                { name: "Dermocosmética II", credits: 3, requires: ["Dermocosmética I"] },
                { name: "Mercadotecnia II", credits: 2, requires: ["Mercadotecnia I"] },
                { name: "Técnicas Gerenciales II", credits: 2, requires: [] },
                { name: "Seminario Trabajo Especial de Grado II", credits: 2, requires: ["Seminario Trabajo Especial de Grado I"] },
                { name: "Trabajo Especial de Grado", credits: 2, requires: ["Seminario Trabajo Especial de Grado II"] },
                { name: "Pasantías II Industriales-Empresas", credits: 2, requires: ["Orientación Pasantías Industriales-Empresas"] },
                { name: "Farmacia Hospitalaria II", credits: 2, requires: ["Farmacia Hospitalaria I"] }
            ]
        }
    ];

    // Generar la malla curricular
    const mallaContainer = document.getElementById('malla-container');
    
    mallaData.forEach(semesterData => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        const semesterHeader = document.createElement('div');
        semesterHeader.className = 'semester-header';
        
        const semesterTitle = document.createElement('h2');
        semesterTitle.className = 'semester-title';
        semesterTitle.textContent = `Semestre ${semesterData.semester}`;
        
        semesterHeader.appendChild(semesterTitle);
        semesterElement.appendChild(semesterHeader);
        
        const coursesContainer = document.createElement('div');
        coursesContainer.className = 'courses-container';
        
        semesterData.courses.forEach(course => {
            const courseElement = document.createElement('div');
            courseElement.className = 'course';
            
            const courseName = document.createElement('div');
            courseName.className = 'course-name';
            courseName.textContent = course.name;
            
            const courseCredits = document.createElement('div');
            courseCredits.className = 'course-credits';
            courseCredits.textContent = `${course.credits} créditos`;
            
            const courseRequires = document.createElement('div');
            courseRequires.className = 'course-requires';
            
            if (course.requires.length > 0) {
                courseRequires.textContent = `Requisitos: ${course.requires.join(', ')}`;
            } else {
                courseRequires.textContent = 'No tiene requisitos';
            }
            
            courseElement.appendChild(courseName);
            courseElement.appendChild(courseCredits);
            courseElement.appendChild(courseRequires);
            
            // Agregar evento click para mostrar modal
            courseElement.addEventListener('click', () => {
                showCourseModal(course, semesterData.semester);
            });
            
            coursesContainer.appendChild(courseElement);
        });
        
        semesterElement.appendChild(coursesContainer);
        mallaContainer.appendChild(semesterElement);
    });

    // Funcionalidad del modal
    const modal = document.getElementById('course-modal');
    const closeModal = document.querySelector('.close-modal');
    
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    function showCourseModal(course, semester) {
        document.getElementById('modal-course-name').textContent = course.name;
        document.getElementById('modal-semester').textContent = semester;
        document.getElementById('modal-credits').textContent = `${course.credits} créditos`;
        
        const prerequisitesList = document.getElementById('prerequisites-list');
        prerequisitesList.innerHTML = '';
        
        if (course.requires.length > 0) {
            course.requires.forEach(req => {
                const li = document.createElement('li');
                li.textContent = req;
                prerequisitesList.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = 'No tiene requisitos';
            prerequisitesList.appendChild(li);
        }
        
        modal.style.display = 'flex';
    }
});
