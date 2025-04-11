// script.js

document.addEventListener('DOMContentLoaded', function() {

    // --- Téléchargement du CV ---
    const cvButton = document.getElementById('CV_D');
    if (cvButton) {
        const googleDriveLink = 'https://drive.google.com/drive/folders/1NkUlY9PuLCCuVewtOgmYpv2KaIePB5uH?usp=sharing'; // Lien vers le DOSSIER contenant le CV

        cvButton.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            // Ouvre le lien Google Drive dans un nouvel onglet
            window.open(googleDriveLink, '_blank');
            // Ou si c'est un lien de téléchargement direct:
            // window.location.href = directDownloadLink;
            console.log("Tentative d'ouverture du lien CV:", googleDriveLink);
        });
    } else {
        console.log("Bouton CV non trouvé.");
    }


    // --- ScrollReveal Animations ---
    // Vérifier si ScrollReveal est chargé
    if (typeof ScrollReveal === 'function') {
        const sr = ScrollReveal({
            reset: false, // Ne réinitialise pas l'animation à chaque fois
            distance: '60px',
            duration: 1500, // Durée plus courte pour plus de dynamisme
            delay: 200,
            easing: 'ease-out', // Animation plus douce en sortie
            viewFactor: 0.2 // Déclenche l'animation quand 20% de l'élément est visible
        });

        // Animations générales (peut être ajusté)
        sr.reveal('.hero-text h1, .hero-text p', { origin: 'left' });
        sr.reveal('.hero-text .btn', { origin: 'bottom', delay: 400 });
        sr.reveal('.hero-image-container', { origin: 'right', delay: 300 });

        sr.reveal('.project-section, .background-section, .intro-works', { interval: 150, origin: 'bottom' }); // Anime les sections une par une

        // Animations spécifiques pour listes dans background.html
        sr.reveal('#education li, #certifications li, #awards li', {
            origin: 'left',
            distance: '30px',
            interval: 100,
            delay: 300 // Petit délai pour que la section apparaisse d'abord
        });

         sr.reveal('.site-footer h4, .social-links, .footer-contact, .footer-bottom', {
             origin: 'bottom',
             interval: 150,
             delay: 200
         });


    } else {
        console.log("ScrollReveal n'est pas chargé.");
    }

     // --- Menu Mobile Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.site-header nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            // Changer l'icône burger en croix (optionnel)
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Fermer le menu si on clique sur un lien (pour les ancres surtout)
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                     if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }


}); // Fin de DOMContentLoaded