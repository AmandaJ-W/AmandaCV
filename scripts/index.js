document.addEventListener('DOMContentLoaded', function() {

let skills = ['Java', 'JavaScript', 'HTML', 'CSS', 
'SQL', 'Vue.js', 'Spring Boot', 'PostgreSQL', 'Web API', 'REST',
'IntelliJ', 'VS Code', 'Git', 'Responsive Design', 'Unit Testing (JUnit)', 
'E/R Diagrams', 'Integration Testing', 'Wordpress'];

function displaySkills(skills) {
    const skillsContainer = document.querySelector('.skills-item');

    const skillsText = skills.join(', ');
    // const skillsText = skills.map(skill => `• ${skill}`).join('\n');

    const skillParagraph = document.createElement('p');
    skillParagraph.textContent = skillsText;
    
    skillsContainer.appendChild(skillParagraph);
}

displaySkills(skills);

const seeMoreButtons = document.querySelectorAll('.see-more');

seeMoreButtons.forEach( button => {
    button.addEventListener('click', function() {
        const description = this.nextElementSibling;
        description.classList.toggle('show');
        this.textContent = description.classList.contains('+') ? 
        '-' : '+';
    });

});




});