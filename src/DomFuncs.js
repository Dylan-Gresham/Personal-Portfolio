const SelfieImg = require('./images/wip.png');
const ProjectOne = require('./images/project1.png');
const ProjectTwo = require('./images/wip.png');
const ProjectThree = require('./images/wip.png');
const ProjectFour = require('./images/wip.png');

function initialize() {
    const header = document.createElement('header');
    header.classList.add('landmarkContainer');
    const main = document.createElement('main');
    main.classList.add('landmarkContainer');
    const footer = document.createElement('footer');
    footer.classList.add('landmarkContainer');

    // Create header
    const aboutMeContainer = document.createElement('div');
    aboutMeContainer.classList.add('aboutMeContainer');
    const selfie = new Image();
    selfie.src = SelfieImg;
    selfie.classList.add('mainPhoto');
    selfie.setAttribute('alt', 'Photo of me.');

    const aboutMeDiv = document.createElement('div');
    aboutMeDiv.classList.add('aboutMeDiv');
    const sectionHeader = document.createElement('h1');
    sectionHeader.textContent = 'Who Am I?';
    sectionHeader.classList.add('sectionHeader');
    const aboutMeText = document.createElement('h3');
    aboutMeText.classList.add('aboutMeText');
    aboutMeText.textContent = 'Hi! I\'m Dylan Gresham, an aspiring software developer.';
    const linksDiv = document.createElement('div');
    linksDiv.classList.add('links');
    const ghButton = document.createElement('button');
    ghButton.classList.add('linkButton');
    ghButton.setAttribute('type', 'button');
    const innerGhButtonLink = document.createElement('a');
    innerGhButtonLink.setAttribute('href', 'https://github.com/Dylan-Gresham');
    innerGhButtonLink.setAttribute('target', '_blank');
    innerGhButtonLink.textContent = 'GitHub';
    ghButton.appendChild(innerGhButtonLink);
    const liButton = document.createElement('button');
    liButton.classList.add('linkButton');
    liButton.setAttribute('type', 'button');
    const innerLiButtonLink = document.createElement('a');
    innerLiButtonLink.setAttribute('href', 'https://www.linkedin.com/in/dylan-gresham-3b3862282');
    innerLiButtonLink.setAttribute('target', '_blank');
    innerLiButtonLink.textContent = 'LinkedIn';
    liButton.appendChild(innerLiButtonLink);
    const resumeButton = document.createElement('button');
    resumeButton.classList.add('linkButton');
    resumeButton.textContent = 'Resume';
    resumeButton.addEventListener('click', (event) => {
       loadResume(main);
       // Resume Link
       // https://drive.google.com/file/d/1wh-Ihr0KovrPqKp7cMtyhefPlmaHuU6P/view?usp=sharing

       event.stopPropagation();
    });
    linksDiv.append(ghButton, liButton, resumeButton);
    aboutMeDiv.append(sectionHeader, aboutMeText, linksDiv);
    aboutMeContainer.append(selfie, aboutMeDiv);
    header.appendChild(aboutMeContainer);
    // End Create Header

    // Create Main
    const mainSectionHeader = document.createElement('h1');
    mainSectionHeader.classList.add('sectionHeader');
    mainSectionHeader.textContent = 'My Projects';
    const projectCardsContainer = document.createElement('div');
    projectCardsContainer.classList.add('projectCardsContainer');
    projectCardsContainer.append(createProjectCard(1), createProjectCard(2), createProjectCard(3), createProjectCard(4));
    main.append(mainSectionHeader, projectCardsContainer);
    // End Create Main

    // Create Footer
    const footerSectionHeader = document.createElement('h1');
    footerSectionHeader.classList.add('sectionHeader');
    footerSectionHeader.textContent = 'Contact Me!';
    const contactDivsContainer = document.createElement('div');
    contactDivsContainer.classList.add('contactDivsContainer');

    const contactLabels = document.createElement('div');
    contactLabels.classList.add('contactDiv');
    contactLabels.classList.add('contactLabels');
    const emailLabel = document.createElement('p');
    const boldEmail = document.createElement('b');
    boldEmail.textContent = 'By email:';
    emailLabel.appendChild(boldEmail);
    const linkedInLabel = document.createElement('p');
    const boldLinkedIn = document.createElement('b');
    boldLinkedIn.textContent = 'Through LinkedIn:';
    linkedInLabel.appendChild(boldLinkedIn);
    const msgLabel = document.createElement('p');
    const boldMsg = document.createElement('b');
    boldMsg.textContent = 'Or leave a message';
    msgLabel.appendChild(boldMsg);
    contactLabels.append(emailLabel, linkedInLabel, msgLabel);

    const contactLinks = document.createElement('div');
    contactLinks.classList.add('contactDiv');
    contactLinks.classList.add('contactLinks');
    const emailP = document.createElement('p');
    const primaryEmailLink = document.createElement('a');
    primaryEmailLink.classList.add('footerLinks');
    primaryEmailLink.setAttribute('href', 'mailto: dgresh724@gmail.com?subject=Contact');
    primaryEmailLink.textContent = 'dgresh724@gmail.com';
    emailP.appendChild(primaryEmailLink);
    emailP.appendChild(document.createTextNode(' (link opens a new email in a new window)'));
    const linkedInP = document.createElement('p');
    const linkedInLink = document.createElement('a');
    linkedInLink.classList.add('footerLinks');
    linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/dylan-gresham-3b3862282');
    linkedInLink.setAttribute('target', '_blank');
    linkedInLink.textContent = 'My Profile';
    linkedInP.appendChild(linkedInLink);
    linkedInP.appendChild(document.createTextNode(' (link opens in a new tab'));
    const ghP = document.createElement('p');
    const ghLink = document.createElement('a');
    ghLink.classList.add('footerLinks');
    ghLink.setAttribute('href', 'https://www.github.com/Dylan-Gresham/Personal-Portfolio');
    ghLink.setAttribute('target', '_blank');
    ghLink.textContent = 'on my GitHub!';
    ghP.appendChild(ghLink);
    ghP.appendChild(document.createTextNode(' (link opens in a new tab'));
    contactLinks.append(emailP, linkedInP, ghP);

    contactDivsContainer.append(contactLabels, contactLinks);
    footer.append(footerSectionHeader, contactDivsContainer);
    // End Create Footer

    return [header, main, footer];
}

function loadResume(container) {
    return;
}

function createProjectCard(num) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('projectCard');
    const projImg = new Image();
    projImg.classList.add('projectSS');
    const projectHeader = document.createElement('h2');
    projectHeader.classList.add('projectHeader');
    const projectDesc = document.createElement('p');
    projectDesc.classList.add('projectDesc');

    switch (num) {
        case 1:
            projImg.src = ProjectOne;
            projImg.alt = 'Weather App screenshot';
            projectHeader.textContent = 'Weather App';
            projectDesc.textContent = 'A simple weather app to show current, hourly, and 2-day forecasts.';
            break;
        case 2:
            projImg.src = ProjectTwo;
            projImg.alt = 'My Library App screenshot';
            projectHeader.textContent = 'My Library App';
            projectDesc.textContent = 'A library tracking app for all your books and comics. This project is currently a Work In Progress.';
            break;
        case 3:
            projImg.src = ProjectThree;
            projImg.alt = 'Clicker App screenshot';
            projectHeader.textContent = 'Clicker';
            projectDesc.textContent = 'A user-programmable auto-clicker.';
            break;
        case 4:
            projImg.src = ProjectFour;
            projImg.alt = 'Nottah App screenshot';
            projectHeader.textContent = 'Nottah';
            projectDesc.textContent = 'Nottah, a note-taking app that\'s Nottah lot.';
            break;
        default:
            throw new Error(`Error: Couldn't create project card #${num}.`);
    }
    projectDiv.append(projImg, projectHeader, projectDesc);

    return projectDiv;
}

module.exports = {initialize};
