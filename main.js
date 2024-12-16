"use strict";
document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    // this will get the values from the form elements
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const degreeElement = document.getElementById('degree');
    const institutionElement = document.getElementById('institution');
    const jobTitleElement = document.getElementById('jobTitle');
    const companyElement = document.getElementById('company');
    const skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && degreeElement && institutionElement && jobTitleElement && companyElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const jobTitle = jobTitleElement.value;
        const company = companyElement.value;
        const skills = skillsElement.value;
        // this code will  collect details from form 
        const resumeContainer = document.createElement('div');
        resumeContainer.innerHTML = `
        <br>
            <p><strong>Name:</strong> ${name}</p> <br>
            <p><strong>Email:</strong> ${email}</p> <br>
            <p><strong>Education:</strong> ${degree} at ${institution}</p> <br>
            <p><strong>Work Experience:</strong> ${jobTitle} at ${company}</p> <br>
            <p><strong>Skills:</strong> ${skills}</p> <br> `;
        const resumeOutput = document.getElementById('resumeOutput');
        if (resumeOutput) {
            resumeOutput.appendChild(resumeContainer);
        }
        else {
            console.error('Resume output container not found.');
        }
    }
});
