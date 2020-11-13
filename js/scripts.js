const initConferences = conferences => {

    const conferencesContainer = document.getElementById('conferences-list');

    for (let index = 0; index < conferences.length; index++) {

        const conference = conferences[index];

        const listItem = document.createElement('li');
        listItem.innerHTML = `<div class="row"><div class="col-lg-2">${conference.talk.schedule}</div></div>`; 
        
        const container = document.createElement('div');
        container.classList.add('col-lg-9');
        container.innerHTML = `<h5>${conference.talk.title}</h5>
        <p><i>Por: ${conference.name}</i></p>
        <p>${conference.talk.abstract}</p>`;
        // TODO: view more button
        listItem.children[0].appendChild(container);
        conferencesContainer.appendChild(listItem);
    }
}

const initSpeakers = speakers => {

    const speakersContainer = document.getElementById('speakers-container');

    for (let index = 0; index < speakers.length; index++) {

        const speaker = speakers[index];

        const speakerInfo = document.createElement('div');
        speakerInfo.classList.add('info');
        speakerInfo.innerHTML += `<h5>${speaker.name}</h5>`;

        const socials = document.createElement('div');
        socials.classList.add('social');

        for (let i = 0; i < speaker.socials.length; i++) {

            socials.innerHTML += `<a href="${speaker.socials[i].link}" target="_blank"><span><i class="${speaker.socials[i].icon}"></i></span></a>`;
        }
        speakerInfo.appendChild(socials);

        if (speaker.bio.trim().length > 0) {
            const viewMore = document.createElement('a');
            viewMore.classList.add('more');
            viewMore.innerText = 'Biografía';
            viewMore.addEventListener('click', e => {
                const modalContainer = document.getElementById(`modal_biography_${index + 1}`);
                modalContainer.classList.add('open');
            });
            speakerInfo.appendChild(viewMore);
        }

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('charlista');
        imageContainer.style.backgroundImage = `url(${speaker.avatar})`;
        imageContainer.appendChild(speakerInfo);

        const card = document.createElement('div');
        card.classList.add('col-xl-3', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-xs-8');
        card.appendChild(imageContainer);
        speakersContainer.appendChild(card);

        if (speaker.bio.trim().length === 0) {
            continue;
        }

        const modal = document.createElement('div');
        modal.id = `modal_biography_${index + 1}`;
        modal.classList.add('modal-biography');

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.innerHTML += `<div class="modal-header"><div class="row"><div class="col-lg-5 col-md-6 col-sm-6">
            <img src="${speaker.avatar}" class="img-fluid"></div><div class="col-lg-6 col-md-6 col-sm-6 pt-4">
            <h5>${speaker.name}</h5>${socials.outerHTML}</div></div></div></div><div class="modal-body">
            <p>${speaker.bio}</p></div></div>`;

        const closeButton = document.createElement('a');
        closeButton.href = 'javascript:void(0)';
        closeButton.innerText = 'Cerrar';
        closeButton.addEventListener('click', e => {
            const modalContainer = document.getElementById(`modal_biography_${index + 1}`);
            modalContainer.classList.remove('open');
        });
        const modalBody = modalContent.getElementsByClassName('modal-body')[0];
        modalBody.appendChild(closeButton);

        modal.appendChild(modalContent);
        speakersContainer.appendChild(modal);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    initConferences(submissions);
    initSpeakers(submissions);
});
