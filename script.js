document.addEventListener('DOMContentLoaded', function() {
    // Datos de la malla curricular
    const curriculum = [
        {
            semester: 1,
            courses: [
                { name: "ORIENTACIÓN FARMACÉUTICA I", credits: 2, requirements: [] },
                { name: "FÍSICA APLICADA II", credits: 3, requirements: [] },
                { name: "MATEMÁTICA APLICADA I", credits: 3, requirements: [] },
                { name: "BIOLOGÍA I", credits: 3, requirements: [] },
                { name: "QUÍMICA BÁSICA", credits: 6, requirements: [] },
                { name: "BOTÁNICA APLICADA I", credits: 2, requirements: [] }
            ]
        },
        {
            semester: 2,
            courses: [
                { name: "ORIENTACIÓN FARMACÉUTICA II", credits: 2, requirements: ["ORIENTACIÓN FARMACÉUTICA I"] },
                { name: "FÍSICA APLICADA II", credits: 3, requirements: ["FÍSICA APLICADA II"] },
                { name: "MATEMÁTICA APLICADA II", credits: 3, requirements: ["MATEMÁTICA APLICADA I"] },
                { name: "BIOLOGÍA II", credits: 3, requirements: ["BIOLOGÍA I"] },
                { name: "QUÍMICA BÁSICA II", credits: 6, requirements: ["QUÍMICA BÁSICA"] },
                { name: "BOTÁNICA APLICADA II", credits: 2, requirements: ["BOTÁNICA APLICADA I"] }
            ]
        },
        {
            semester: 3,
            courses: [
                { name: "Estudio y Comprensión del Hombre", credits: 2, requirements: [] },
                { name: "Química Inorgánica I", credits: 3, requirements: ["QUÍMICA BÁSICA II"] },
                { name: "Química Orgánica I", credits: 4, requirements: ["QUÍMICA BÁSICA II"] },
                { name: "Análisis Químico I", credits: 5, requirements: ["QUÍMICA BÁSICA II"] },
                { name: "Fisicoquímica I", credits: 3, requirements: ["FÍSICA APLICADA II"] },
                { name: "FISIOLOGÍA y ANATOMÍA I", credits: 3, requirements: ["BIOLOGÍA II"] },
                { name: "Parasitología", credits: 2, requirements: ["BIOLOGÍA II"] },
                { name: "Estadística I", credits: 2, requirements: ["MATEMÁTICA APLICADA II"] },
                { name: "Atención Farmacéutica I", credits: 2, requirements: ["ORIENTACIÓN FARMACÉUTICA II"] }
            ]
        },
        {
            semester: 4,
            courses: [
                { name: "Química Inorgánica II", credits: 3, requirements: ["Química Inorgánica I"] },
                { name: "Química Orgánica II", credits: 5, requirements: ["Química Orgánica I"] },
                { name: "Análisis Químico II", credits: 6, requirements: ["Análisis Químico I"] },
                { name: "Fisicoquímica II", credits: 3, requirements: ["Fisicoquímica I"] },
                { name: "Fisiología y Anatomía II", credits: 3, requirements: ["FISIOLOGÍA y ANATOMÍA I"] },
                { name: "Estadística II", credits: 2, requirements: ["Estadística I"] },
                { name: "Metodología de la Investigación", credits: 2, requirements: ["Estadística I"] },
                { name: "Atención Farmacéutica II", credits: 2, requirements: ["Atención Farmacéutica I"] }
            ]
        },
        {
            semester: 5,
            courses: [
                { name: "Química Medicinal I", credits: 3, requirements: ["Química Orgánica II"] },
                { name: "Análisis Instrumental I", credits: 3, requirements: ["Análisis Químico II"] },
                { name: "Fisiopatología I", credits: 3, requirements: ["Fisiología y Anatomía II"] },
                { name: "Salud Pública I", credits: 2, requirements: ["Parasitología"] },
                { name: "Bioquímica I", credits: 3, requirements: ["Fisicoquímica II"] },
                { name: "Farmacotecnia I", credits: 3, requirements: ["Atención Farmacéutica II"] },
                { name: "Legislación Farmacéutica I", credits: 2, requirements: [] },
                { name: "Diseño de Proyectos I", credits: 2, requirements: ["Estadística II"] }
            ]
        },
        {
            semester: 6,
            courses: [
                { name: "Química Medicinal II", credits: 3, requirements: ["Química Medicinal I"] },
                { name: "Análisis Instrumental II", credits: 3, requirements: ["Análisis Instrumental I"] },
                { name: "Fisiopatología II", credits: 3, requirements: ["Fisiopatología I"] },
                { name: "Salud Pública II", credits: 2, requirements: ["Salud Pública I"] },
                { name: "Bioquímica II", credits: 3, requirements: ["Bioquímica I"] },
                { name: "Farmacotecnia II", credits: 3, requirements: ["Farmacotecnia I"] },
                { name: "Legislación Farmacéutica II", credits: 2, requirements: ["Legislación Farmacéutica I"] },
                { name: "Diseño de Proyectos II", credits: 2, requirements: ["Diseño de Proyectos I"] }
            ]
        },
        {
            semester: 7,
            courses: [
                { name: "Microbiología I", credits: 3, requirements: ["Salud Pública II"] },
                { name: "Farmacología I", credits: 3, requirements: ["Fisiopatología II"] },
                { name: "Toxicología I", credits: 3, requirements: ["Bioquímica II"] },
                { name: "Farmacognosis I", credits: 3, requirements: ["Química Medicinal II"] },
                { name: "Biofarmacia I", credits: 3, requirements: ["Análisis Instrumental II"] },
                { name: "Procesos Unitarios I", credits: 3, requirements: ["Análisis Instrumental II"] },
                { name: "Higiene y Seguridad Industrial I", credits: 2, requirements: [] },
                { name: "Economía Aplicada", credits: 2, requirements: [] },
                { name: "Orientación Pasantías Oficina de Farmacia", credits: 2, requirements: ["Farmacotecnia II"] }
            ]
        },
        {
            semester: 8,
            courses: [
                { name: "Microbiología II", credits: 3, requirements: ["Microbiología I"] },
                { name: "Farmacología II", credits: 3, requirements: ["Farmacología I"] },
                { name: "Toxicología II", credits: 3, requirements: ["Toxicología I"] },
                { name: "Farmacognosis II", credits: 3, requirements: ["Farmacognosis I"] },
                { name: "Biofarmacia II", credits: 3, requirements: ["Biofarmacia I"] },
                { name: "Procesos Unitarios II", credits: 3, requirements: ["Procesos Unitarios I"] },
                { name: "Higiene y Seguridad Industrial II", credits: 2, requirements: ["Higiene y Seguridad Industrial I"] },
                { name: "Administración Aplicada", credits: 2, requirements: ["Economía Aplicada"] },
                { name: "Pasantías I Oficina de Farmacia", credits: 2, requirements: ["Orientación Pasantías Oficina de Farmacia"] }
            ]
        },
        {
            semester: 9,
            courses: [
                { name: "Primeros Auxilios I", credits: 3, requirements: ["Toxicología II"] },
                { name: "Farmacoterapéutica I", credits: 2, requirements: ["Farmacología II"] },
                { name: "Bromatología", credits: 3, requirements: ["Microbiología II"] },
                { name: "Farmacotecnia III", credits: 3, requirements: ["Procesos Unitarios II"] },
                { name: "Dermocosmética I", credits: 3, requirements: ["Farmacognosis II"] },
                { name: "Mercadotecnia I", credits: 2, requirements: [] },
                { name: "Técnicas Gerenciales I", credits: 2, requirements: ["Administración Aplicada"] },
                { name: "Seminario Trabajo Especial de Grado I", credits: 2, requirements: ["Diseño de Proyectos II"] },
                { name: "Orientación Pasantías Industriales-Empresas", credits: 2, requirements: ["Pasantías I Oficina de Farmacia"] },
                { name: "Farmacia Hospitalaria I", credits: 2, requirements: ["Farmacología II"] }
            ]
        },
        {
            semester: 10,
            courses: [
                { name: "Primeros Auxilios II", credits: 3, requirements: ["Primeros Auxilios I"] },
                { name: "Farmacoterapéutica II", credits: 2, requirements: ["Farmacoterapéutica I"] },
                { name: "Bromatología II", credits: 3, requirements: ["Bromatología"] },
                { name: "Farmacotecnia IV", credits: 3, requirements: ["Farmacotecnia III"] },
                { name: "Dermocosmética II", credits: 3, requirements: ["Dermocosmética I"] },
                { name: "Mercadotecnia II", credits: 2, requirements: ["Mercadotecnia I"] },
                { name: "Técnicas Gerenciales II", credits: 2, requirements: [] },
                { name: "Seminario Trabajo Especial de Grado II", credits: 2, requirements: ["Seminario Trabajo Especial de Grado I"] },
                { name: "Trabajo Especial de Grado", credits: 2, requirements: ["Seminario Trabajo Especial de Grado II"] },
                { name: "Pasantías II Industriales-Empresas", credits: 2, requirements: ["Orientación Pasantías Industriales-Empresas"] },
                { name: "Farmacia Hospitalaria II", credits: 2, requirements: ["Farmacia Hospitalaria I"] }
            ]
        }
    ];

    // Estado de los cursos aprobados
    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];
    let totalCredits = parseInt(localStorage.getItem('totalCredits')) || 0;

    // Elementos del DOM
    const semesterContainer = document.getElementById('semester-container');
    const totalCreditsElement = document.getElementById('total-credits');
    const resetButton = document.getElementById('reset-btn');

    // Renderizar la malla curricular
    function renderCurriculum() {
        semesterContainer.innerHTML = '';
        
        curriculum.forEach(semester => {
            const semesterElement = document.createElement('div');
            semesterElement.className = 'semester';
            
            const semesterTitle = document.createElement('h2');
            semesterTitle.className = 'semester-title';
            semesterTitle.textContent = `Semestre ${semester.semester}`;
            
            const coursesContainer = document.createElement('div');
            coursesContainer.className = 'courses-container';
            
            semester.courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.className = 'course';
                
                // Verificar si el curso está aprobado
                const isApproved = approvedCourses.includes(course.name);
                if (isApproved) {
                    courseElement.classList.add('completed');
                }
                
                // Verificar requisitos para cursos no aprobados
                if (!isApproved) {
                    const requirementsMet = course.requirements.every(req => approvedCourses.includes(req));
                    if (!requirementsMet && course.requirements.length > 0) {
                        courseElement.classList.add('locked');
                        courseElement.title = `Requisitos: ${course.requirements.join(', ')}`;
                    }
                }
                
                const courseName = document.createElement('div');
                courseName.className = 'course-name';
                courseName.textContent = course.name;
                
                const courseCredits = document.createElement('div');
                courseCredits.className = 'course-credits';
                courseCredits.textContent = `${course.credits} créditos`;
                
                if (course.requirements.length > 0 && !isApproved) {
                    const courseRequirements = document.createElement('div');
                    courseRequirements.className = 'course-requirements tooltip';
                    courseRequirements.textContent = 'Requisitos';
                    
                    const tooltipText = document.createElement('span');
                    tooltipText.className = 'tooltiptext';
                    tooltipText.textContent = course.requirements.join(', ');
                    
                    courseRequirements.appendChild(tooltipText);
                    courseElement.appendChild(courseRequirements);
                }
                
                courseElement.appendChild(courseName);
                courseElement.appendChild(courseCredits);
                
                // Agregar evento de clic solo si no está bloqueado
                if (!courseElement.classList.contains('locked')) {
                    courseElement.addEventListener('click', () => toggleCourse(course));
                }
                
                coursesContainer.appendChild(courseElement);
            });
            
            semesterElement.appendChild(semesterTitle);
            semesterElement.appendChild(coursesContainer);
            semesterContainer.appendChild(semesterElement);
        });
        
        totalCreditsElement.textContent = totalCredits;
    }

    // Alternar estado de aprobación de un curso
    function toggleCourse(course) {
        const index = approvedCourses.indexOf(course.name);
        
        if (index === -1) {
            // Aprobar curso
            approvedCourses.push(course.name);
            totalCredits += course.credits;
        } else {
            // Desaprobar curso
            approvedCourses.splice(index, 1);
            totalCredits -= course.credits;
        }
        
        // Guardar en localStorage
        localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
        localStorage.setItem('totalCredits', totalCredits.toString());
        
        // Volver a renderizar
        renderCurriculum();
    }

    // Reiniciar progreso
    resetButton.addEventListener('click', () => {
        approvedCourses = [];
        totalCredits = 0;
        localStorage.removeItem('approvedCourses');
        localStorage.removeItem('totalCredits');
        renderCurriculum();
    });

    // Renderizar inicialmente
    renderCurriculum();
});
