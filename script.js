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

//BONUS

// Creare le card per ogni membro del team e aggiungerle al DOM

team.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('col-md-4', 'team-card');
    memberCard.innerHTML = `
        <div class="card">
            <img src="${member.image}" class="card-img-top" alt="${member.name}">
            <div class="card-body text-center">
                <h5 class="card-title">${member.name}</h5>
                <p class="card-text">${member.role}</p>
            </div>
        </div>
    `;
    teamContainer.append(memberCard);
});