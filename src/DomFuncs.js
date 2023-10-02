const SelfieImg = require('./images/photo.jpg');
const ProjectOne = require('./images/project1.png');
const ProjectTwo = require('./images/wip.png');
const ProjectThree = require('./images/project3.png');
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
    const aboutMeTextCont = document.createElement('h4');
    aboutMeTextCont.classList.add('aboutMeText');
    aboutMeTextCont.classList.add('aboutMeTextCont');
    aboutMeTextCont.textContent = "Striving to develop technology that utilizes AI in order to improve peoples' day-to-day lives.";
    const aboutMeTextContTwo = document.createElement('h4');
    aboutMeTextContTwo.classList.add('aboutMeText');
    aboutMeTextContTwo.classList.add('aboutMeTextCont');
    aboutMeTextContTwo.textContent = "I'm also an avid reader & baker and am also known to enjoy watching anime in my free time alongside working on my personal projects. Of which you can find some of them below!";
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

       event.stopPropagation();
    });
    linksDiv.append(ghButton, liButton, resumeButton);
    aboutMeDiv.append(sectionHeader, aboutMeText, aboutMeTextCont, aboutMeTextContTwo, linksDiv);
    aboutMeContainer.append(selfie, aboutMeDiv);

    header.appendChild(aboutMeContainer);
    // End Create Header

    // Create Main
    loadMain(main);
    // End Create Main

    // Create Footer
    const footerSectionHeader = document.createElement('h1');
    footerSectionHeader.classList.add('sectionHeader');
    footerSectionHeader.textContent = 'Contact Me!';
    const contactDivsContainer = document.createElement('div');
    contactDivsContainer.classList.add('contactDivsContainer');

    const contactLinks = document.createElement('div');
    contactLinks.classList.add('contactDiv');
    contactLinks.classList.add('contactLinks');
    const emailP = document.createElement('p');
    const primaryEmailLink = document.createElement('a');
    primaryEmailLink.classList.add('footerLinks');
    primaryEmailLink.setAttribute('href', 'mailto: dgresh724@gmail.com?subject=Contact');
    primaryEmailLink.textContent = 'dgresh724@gmail.com';
    emailP.appendChild(document.createTextNode('By email: '));
    emailP.appendChild(primaryEmailLink);
    emailP.appendChild(document.createTextNode(' (link opens a new email in a new window)'));
    const linkedInP = document.createElement('p');
    const linkedInLink = document.createElement('a');
    linkedInLink.classList.add('footerLinks');
    linkedInLink.setAttribute('href', 'https://www.linkedin.com/in/dylan-gresham-3b3862282');
    linkedInLink.setAttribute('target', '_blank');
    linkedInLink.textContent = 'My Profile';
    linkedInP.appendChild(document.createTextNode('Through LinkedIn: '));
    linkedInP.appendChild(linkedInLink);
    linkedInP.appendChild(document.createTextNode(' (link opens in a new tab)'));
    const ghP = document.createElement('p');
    const ghLink = document.createElement('a');
    ghLink.classList.add('footerLinks');
    ghLink.setAttribute('href', 'https://www.github.com/Dylan-Gresham/Personal-Portfolio');
    ghLink.setAttribute('target', '_blank');
    ghLink.textContent = 'on my GitHub!';
    ghP.appendChild(document.createTextNode('Or leave a message '));
    ghP.appendChild(ghLink);
    ghP.appendChild(document.createTextNode(' (link opens in a new tab)'));
    contactLinks.append(emailP, linkedInP, ghP);

    contactDivsContainer.appendChild(contactLinks);
    footer.append(footerSectionHeader, contactDivsContainer);
    // End Create Footer

    return [header, main, footer];
}

function loadResume(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    container.classList.toggle('resume');

    const resumeViewContainer = document.createElement('div');
    resumeViewContainer.id = 'resumeViewContainer';

    const topContainer = document.createElement('div');
    topContainer.classList.add('btnContainer');
    const goBackBtn = document.createElement('button');
    goBackBtn.classList.add('goBack');
    goBackBtn.textContent = 'Return to Portfolio';
    goBackBtn.setAttribute('type', 'button');
    goBackBtn.addEventListener('click', (event) => {
        container.classList.toggle('resume');
        loadMain(container);

        event.stopPropagation();
    });

    const openLinkP = document.createElement('p');
    const openInGDrive = document.createElement('a');
    openInGDrive.classList.add('footerLinks');
    openInGDrive.setAttribute('href', 'https://drive.google.com/file/d/1wh-Ihr0KovrPqKp7cMtyhefPlmaHuU6P/view?usp=sharing');
    openInGDrive.setAttribute('target', '_blank');
    openInGDrive.textContent = 'Open in Google Drive';
    openLinkP.appendChild(openInGDrive);
    openLinkP.appendChild(document.createTextNode(' (link opens in new tab)'));
    topContainer.append(goBackBtn, openLinkP);

    const pdfDiv = document.createElement('div');
    pdfDiv.id = 'pdfDiv';
    const object = document.createElement('object');
    object.setAttribute('data', './Resume.pdf');
    object.setAttribute('type', 'application/pdf');
    object.setAttribute('width', '75%');
    object.setAttribute('height', '1000px');
    const fallBack = document.createElement('p');
    const externalLink = document.createElement('a');
    externalLink.classList.add('footerLinks');
    externalLink.setAttribute('href', 'https://drive.google.com/file/d/1wh-Ihr0KovrPqKp7cMtyhefPlmaHuU6P/view?usp=sharing');
    externalLink.setAttribute('target', '_blank');
    externalLink.textContent = 'Open in Google Drive';
    fallBack.append(document.createTextNode('Unable to display PDF: '),
        externalLink,
        document.createTextNode(' (link opens in a new tab)'));
    object.appendChild(fallBack);
    pdfDiv.appendChild(object);

    resumeViewContainer.append(topContainer, pdfDiv);
    container.appendChild(resumeViewContainer);
}

function loadMain(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const mainSectionHeader = document.createElement('h1');
    mainSectionHeader.classList.add('sectionHeader');
    mainSectionHeader.textContent = 'My Projects';
    const projectCardsContainer = document.createElement('div');
    projectCardsContainer.classList.add('projectCardsContainer');
    projectCardsContainer.append(createProjectCard(1), createProjectCard(2), createProjectCard(3), createProjectCard(4));
    container.append(mainSectionHeader, projectCardsContainer);
}

function createProjectCard(num) {
    const linkA = document.createElement('a');
    linkA.classList.add('hiddenLink');
    linkA.setAttribute('target', '_blank');
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
            linkA.setAttribute('href', 'https://github.com/Dylan-Gresham/TOP-WeatherApp');
            projImg.src = ProjectOne;
            projImg.alt = 'Weather App screenshot';
            projectHeader.textContent = 'Weather App';
            projectDesc.textContent = 'A simple weather app to show current, hourly, and 2-day forecasts';
            break;
        case 2:
            linkA.setAttribute('href', 'https://github.com/Dylan-Gresham/MyLibraryApp');
            projImg.src = ProjectTwo;
            projImg.alt = 'My Library App screenshot';
            projectHeader.textContent = 'My Library App';
            projectDesc.textContent = 'A library tracking app for all your books and comics. This project is currently a Work In Progress';
            break;
        case 3:
            linkA.setAttribute('href', 'https://github.com/Dylan-Gresham/Clicker');
            projImg.src = ProjectThree;
            projImg.alt = 'Clicker App screenshot';
            projectHeader.textContent = 'Clicker';
            projectDesc.textContent = 'A user-programmable auto-clicker';
            break;
        case 4:
            linkA.setAttribute('href', 'https://github.com/Dylan-Gresham/Nottah');
            projImg.src = ProjectFour;
            projImg.alt = 'Nottah App screenshot';
            projectHeader.textContent = 'Nottah';
            projectDesc.textContent = 'Nottah, a note-taking app that\'s Nottah lot';
            break;
        default:
            throw new Error(`Error: Couldn't create project card #${num}.`);
    }
    projectDiv.append(projImg, projectHeader, projectDesc);
    linkA.appendChild(projectDiv);

    return linkA;
}

module.exports = {initialize};
