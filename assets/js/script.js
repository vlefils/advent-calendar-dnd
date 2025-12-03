document.addEventListener('DOMContentLoaded', () => {
    console.log("Calendrier de l'Avent D&D chargé !");

    const grid = document.getElementById('calendar-grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    // Gestion de la date via URL pour le debug (ex: ?date=2025-12-25)
    const urlParams = new URLSearchParams(window.location.search);
    const debugDate = urlParams.get('date');

    let today = debugDate ? new Date(debugDate) : new Date();
    // Fallback si la date est invalide
    if (isNaN(today.getTime())) {
        console.warn("Date invalide, retour à la date du jour.");
        today = new Date();
    }

    const currentMonth = today.getMonth(); // 0-11, Décembre est 11
    const currentDay = today.getDate();

    if (debugDate) {
        console.log(`🔧 Mode Debug activé : Date simulée au ${today.toLocaleDateString()}`);
    }

    // Récupérer l'état des portes ouvertes depuis le localStorage
    let openedDoors = JSON.parse(localStorage.getItem('dndAdventCalendarOpened')) || [];

    // Génération des portes
    if (typeof calendarData !== 'undefined') {
        calendarData.forEach(item => {
            const door = document.createElement('div');
            door.classList.add('door');
            door.dataset.day = item.day;

            const doorNumber = document.createElement('span');
            doorNumber.textContent = item.day;
            door.appendChild(doorNumber);

            // Vérifier si la porte est déjà ouverte
            if (openedDoors.includes(item.day)) {
                door.classList.add('opened');
                door.innerHTML = ''; // Enlever le numéro
            }

            door.addEventListener('click', () => handleDoorClick(item, door));
            grid.appendChild(door);
        });
    } else {
        console.error("calendarData n'est pas défini. Vérifiez que data.js est bien chargé.");
    }

    function handleDoorClick(item, doorElement) {
        // Logique de verrouillage
        let isLocked = false;

        // Si on est en Décembre et que le jour n'est pas encore arrivé
        if (currentMonth === 11 && item.day > currentDay) {
            isLocked = true;
        }
        // Pour tester en dehors de décembre, on peut décommenter :
        // else if (currentMonth < 10) { isLocked = true; }

        if (isLocked) {
            showMessage("Scellé Magique", `Patience ! Cette porte ne s'ouvrira que le ${item.day} décembre.`);
            return; // IMPORTANT : On arrête ici, donc la porte ne s'ouvre pas visuellement
        }

        // Ouvrir la porte (Modal)
        openModal(item);

        // Changer l'aspect visuel de la porte (Cassée)
        if (!doorElement.classList.contains('opened')) {
            doorElement.classList.add('opened');
            doorElement.innerHTML = ''; // Enlever le numéro
            saveOpenedDoor(item.day);
        }
    }

    function showMessage(title, message) {
        modalBody.innerHTML = `
            <h2>${title}</h2>
            <p class="modal-text">${message}</p>
        `;
        modal.classList.remove('hidden');
    }

    function openModal(item) {
        let contentHtml = '';
        if (item.type === 'image') {
            contentHtml = `<img src="${item.content}" alt="${item.title}" class="modal-image">`;
        } else if (item.type === 'music') {
            contentHtml = `
                <img src="${item.image}" alt="${item.title}" class="modal-image">
                <audio controls autoplay style="width: 100%; margin-bottom: 1rem;">
                    <source src="${item.content}" type="audio/mpeg">
                    Votre navigateur ne supporte pas l'élément audio.
                </audio>
            `;
        } else if (item.type === 'video') {
            contentHtml = `
                <video autoplay loop playsinline style="width: 100%; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                    <source src="${item.content}" type="video/mp4">
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            `;
        } else if (item.type === 'video_music') {
            contentHtml = `
                <video autoplay loop muted playsinline style="width: 100%; border-radius: 10px; box-shadow: 0 0 15px rgba(0,0,0,0.5); margin-bottom: 1rem;">
                    <source src="${item.video}" type="video/mp4">
                    Votre navigateur ne supporte pas la vidéo.
                </video>
                <audio controls autoplay style="width: 100%; margin-bottom: 1rem;">
                    <source src="${item.audio}" type="audio/mpeg">
                    Votre navigateur ne supporte pas l'élément audio.
                </audio>
            `;
        } else {
            contentHtml = `<div class="modal-text">${item.content}</div>`;
        }

        modalBody.innerHTML = `
            <h2>${item.title}</h2>
            ${contentHtml}
            <p>${item.description}</p>
        `;
        modal.classList.remove('hidden');
    }

    function saveOpenedDoor(day) {
        if (!openedDoors.includes(day)) {
            openedDoors.push(day);
            localStorage.setItem('dndAdventCalendarOpened', JSON.stringify(openedDoors));
        }
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
