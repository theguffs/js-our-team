// MILESTONE 000000 Creare un array di oggetti con le informazioni fornite

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

//MILESTONE 1 stampare su console le informazioni di nome, ruolo e la stringa della foto

team.forEach(member => {
    console.log(`Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`);
});

//MILESTONE 2 Stampare le stesse informazioni su DOM sottoforma di stringhe

const teamContainer = document.getElementById('team-container');

team.forEach(member => {
    const memberInfo = document.createElement('p');
    memberInfo.textContent = `Name: ${member.name}, Role: ${member.role}, Image: ${member.image}`;
    teamContainer.append(memberInfo);
});