document.addEventListener("DOMContentLoaded", function () {


  function handleLanguageSelection(event) {
    const selectedLanguage = event.target.value;
    let fileUrl = "";
    if (selectedLanguage === "English") {
      fileUrl = "./docs/Amanda Jean Walker - CV English.pdf";
    
    } else if (selectedLanguage === "Spanish") {
      fileUrl = "./docs/Amanda Jean Walker - CV Spanish.pdf";
  
    }
    if (fileUrl) {
      const a = document.createElement("a");
      a.href = fileUrl;
      a.download = "Amanda Jean Walker - CV " + selectedLanguage; 
      a.click();
    }
  }

  
  const languageSelector = document.getElementById("language-select");
  languageSelector.addEventListener("change", handleLanguageSelection);

  const downloadButton = document.getElementById("download");
  downloadButton.addEventListener("click", function () {
    const dropdown = document.getElementById("language-dropdown");
    dropdown.style.display = "block";
  });



  let skills = [
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Vue.js",
    "Spring Boot",
    "PostgreSQL",
    "Web API",
    "REST",
    "IntelliJ",
    "VS Code",
    "Git",
    "Responsive Design",
    "Unit Testing (JUnit)",
    "E/R Diagrams",
    "Integration Testing",
    "WordPress",
  ];

  function displaySkills(skills) {
    const skillsContainer = document.querySelector(".skills-item");

    const skillsText = skills.join(", ");
    // const skillsText = skills.map(skill => `• ${skill}`).join('\n');

    const skillParagraph = document.createElement("p");
    skillParagraph.textContent = skillsText;

    skillsContainer.appendChild(skillParagraph);
  }

  displaySkills(skills);

  const seeMoreButtons = document.querySelectorAll(".see-more");

  seeMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const description = this.nextElementSibling;
      description.classList.toggle("show");
      this.textContent = description.classList.contains("show") ? "-" : "+";
    });
  });

  const seeDescriptionButtons = document.querySelectorAll(".show-desc");

  seeDescriptionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const duties = this.nextElementSibling;
      duties.classList.toggle("show");
      this.textContent = duties.classList.contains("show") ? "-" : "+";
    });
  });

  const translations = {
    'Junior Software Developer': 'Desarrolladora de Software Junior',
    'Skills': 'Habilidades',
    'Experience': 'Experiencia',
    'Email:': 'Correo electrónico:',
    'Phone:': 'Teléfono:',
    'Download PDF': 'Descargar PDF',
    'Full Name': 'Nombre Completo',
    'Position': 'Posición',
    'About': 'Acerca de',
    'Contact Information': 'Información de Contacto',
    'Name': 'Nombre',
    'Email': 'Correo electrónico',
    'Phone': 'Teléfono',
    'Experience': 'Experiencia',
    'Education': 'Educación',
    'Projects': 'Proyectos',
    'Languages': 'Idiomas',
    'English': 'Inglés',
    'Spanish': 'Español',
    'Native': 'Nativo',
    'C1/Full proficiency': 'C1/Proficiencia completa',
    'Web Shop': 'Tienda en línea',
    'Pet Meds Tracker': 'Rastreador de Medicamentos para Mascotas',
    'Mini E-Commerce App': 'Mini Aplicación de Comercio Electrónico',
    'Ostrander, OH Website': 'Página Web Oficial de Ostrander, OH',
    'Show Less': 'Mostrar menos',
    'Volunteer Website Developer, Village of Ostrander': 'Desarrolladora de Sitios Web Voluntario, Villa de Ostrander',
    'Team up with Ostrander IT Committee to overhaul the municipal website.': 'Colaborar con el Comité de TI de Ostrander para renovar el sitio web municipal.',
    'Improve visual appeal, organization, accessibility, and usability.': 'Mejorar el atractivo visual, la organización, la accesibilidad y la usabilidad.',
    'Organize and correct website data and display it in an intuitive, user-friendly manner.': 'Organizar y corregir datos del sitio web y mostrarlos de manera intuitiva y amigable para el usuario.',
    'Lead Teacher, YMCA of Central Ohio': 'Maestra Principal, YMCA of Central Ohio',
    'Ensure social, physical, & mental well-being of 50+ students': 'Garantizar el bienestar social, físico y mental de más de 50 estudiantes',
    'Plan, develop, and implement stimulating weekly lesson plans that incorporate fitness, emotional/social development, STEM activities, and creativity through the arts': 'Planificar, desarrollar e implementar planes de lecciones semanales estimulantes que incorporen actividades de acondicionamiento físico, desarrollo emocional/social, actividades STEM y creatividad a través de las artes',
    'Collaborate with site directors, assistant teachers & staff': 'Colaborar con directores de sitios, maestros asistentes y personal',
    'English Teacher, M.B. Cossío School': 'Profesora de Inglés, Escuela M.B. Cossío',
    'Formulated and led lessons in English and Science with students (3rd-6th grade) in groups of 30+ students': 'Formulé e impartí lecciones en inglés y ciencias con estudiantes (3º a 6º grado) en grupos de más de 30 estudiantes',
    'Worked with colleagues to develop and improve lessons and materials': 'Trabajé con colegas para desarrollar y mejorar lecciones y materiales',
    'Designed and executed enrichment projects with international schools': 'Diseñé y ejecuté proyectos de enriquecimiento con escuelas internacionales',
    'Extracurricular Teacher, Fast English': 'Maestro Extracurricular, Fast English',
    'Orchestrated activities for groups of 10-15 children (ages 8-17) spanning arts, science, & cooking': 'Orquesté actividades para grupos de 10-15 niños (de 8 a 17 años) que abarcan artes, ciencias y cocina',
    'Coordinated language-immersion holiday & summer camps': 'Coordiné campamentos de inmersión lingüística durante las vacaciones y el verano',
    'Provided quarterly progress reports, increasing student/parent satisfaction and leading to 100% student retention and increased enrollment': 'Proporcioné informes de progreso trimestrales, aumentando la satisfacción de los estudiantes/padres y llevando a una retención del 100% de los estudiantes y un aumento de la inscripción',
    'Teaching Assistant, NALCAP/BEDA': 'Auxiliar de Conversación, NALCAP/BEDA',
    'Increased student proficiency by implementing engaging lessons for 200+ students spanning K-6th grade': 'Aumenté la competencia de los estudiantes mediante la implementación de lecciones atractivas para más de 200 estudiantes que abarcan desde preescolar hasta sexto grado',
    'Created interesting lessons with a focus on oral and listening skills': 'Creé lecciones interesantes con un enfoque en habilidades orales y de escucha',
    'Served as a coordinator for lesson planning/material creation for the English department': 'Serví como coordinador para la planificación de lecciones y la creación de materiales para el departamento de inglés',
    'Management Trainee, Streator Dependable': 'Aprendiz de Gerencia, Streator Dependable',
    'Partnered with the production manager to optimize workflow using project management software': 'Me asocié con el gerente de producción para optimizar el flujo de trabajo utilizando software de gestión de proyectos',
    'Improved productivity by conducting 2-5 time studies per day using time tracking & study software': 'Mejoré la productividad realizando 2-5 estudios de tiempo por día utilizando software de seguimiento y estudio de tiempo',
    'Assisted the sales department with sales prospecting to gain knowledge of the field': 'Asistí al departamento de ventas con la prospección de ventas para adquirir conocimientos del campo',
    'Summers 2015 - 2017': 'Veranos de 2015 a 2017',
    'Fast English': 'Fast English',
    'Madrid, Spain': 'Madrid, España',
    'Sept 2020 - Sept 2022': 'Septiembre de 2020 - Septiembre de 2022',
    'Streator, IL': 'Streator, IL',
    'August 2012 - May 2015': 'Agosto de 2012 - Mayo de 2015',
    'West Lafayette, IN': 'West Lafayette, IN',
    'Tech Elevator': 'Tech Elevator',
    'Full-stack, Java-based coding bootcamp': 'Bootcamp de codificación de pila completa basado en Java',
    'A full-stack Java coding bootcamp to learn how to develop dynamic web-based software systems using the Java programming language and platform with 800+ hours of lecture and application. I\'ve completed various individual projects, as well as numerous team projects.': 'Un bootcamp de codificación Java de pila completa para aprender a desarrollar sistemas de software basados en web dinámicos utilizando el lenguaje de programación y la plataforma Java con más de 800 horas de conferencias y aplicaciones. He completado varios proyectos individuales, así como numerosos proyectos en equipo.',
    'Comillas Pontifical University': 'Universidad Pontificia Comillas',
    'Foreign Language Teaching': 'Enseñanza de Idiomas Extranjeros',
    'I earned a 4-year, post-graduate ESL teaching certificate after attending biweekly education training sessions in addition to several seminars through the Universidad Pontificia de Comillas. I also conducted workshops related to teaching in a bilingual setting to first and second-year students and program coordinators at Madrid-area bilingual schools on top of my classroom teaching hours in several subjects, including English, Science, and Arts.': 'Obtuve un certificado de enseñanza de ESL de posgrado de 4 años después de asistir a sesiones de capacitación educativa quincenales, además de varios seminarios a través de la Universidad Pontificia Comillas. También impartí talleres relacionados con la enseñanza en un entorno bilingüe para estudiantes de primer y segundo año y coordinadores de programas en escuelas bilingües del área de Madrid, además de mis horas de enseñanza en el aula en varias materias, incluyendo inglés, ciencias y artes.',
    'Purdue University': 'Universidad de Purdue',
    'Bachelor\'s of Science, Psychological Sciences': 'Grado en Ciencias, Ciencias Psicológicas',
    'Minor in Spanish': 'Minor en Español',
    'The Department of Psychological Sciences at Purdue University - West Lafayette not only trains students with an understanding of Psychology, but also combines it with other sciences. The department offers research and education opportunities across a wide range of Psychology topics. As an undergraduate Psychology student, I assisted in research in the laboratory at Purdue University.': 'El Departamento de Ciencias Psicológicas de la Universidad de Purdue - West Lafayette no solo forma a los estudiantes con una comprensión de la Psicología, sino que también la combina con otras ciencias. El departamento ofrece oportunidades de investigación y educación en una amplia gama de temas de Psicología. Como estudiante de Psicología, participé en investigaciones en el laboratorio de la Universidad de Purdue.',
    'Biweekly': 'Quincenalmente',
    'In addition to several seminars': 'Además de varios seminarios',
    'As an undergraduate Psychology student': 'Como estudiante de Psicología de pregrado',
    'Assistant in research in the laboratory': 'Asistente en la investigación en el laboratorio',
    'Web Shop': 'Tienda Online',
    'Pet Meds Tracker': 'Rastreador de Medicamentos para Mascotas',
    'Mini E-Commerce App': 'Mini Aplicación de Comercio Electrónico',
    'Ostrander, OH Website': 'Página Web Oficial de Ostrander, OH',
    'Show Less': 'Mostrar menos',
    'English': 'Inglés',
    'Spanish': 'Español',
    'Native': 'Nativo',
    'C1/Full proficiency': 'C1/Proficiencia completa',
    'Web Shop': 'Tienda online',
    'Pet Meds Tracker': 'Rastreador de Medicamentos para Mascotas',
    'Mini E-Commerce App': 'Mini Aplicación de Comercio Electrónico',
    'Ostrander, OH Website': 'Sitio web de Ostrander, OH',
    'Java/JavaScript/SQL': 'Java/JavaScript/SQL',
    'Java/SQL': 'Java/SQL',
    'HTML/CSS/WordPress': 'HTML/CSS/WordPress',
    'Java': 'Java',
    'JavaScript': 'JavaScript',
    'SQL': 'SQL',
  };

  

});
