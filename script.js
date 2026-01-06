/**
 * ST PIERRE OPTIQUE - Scripts principaux complets
 * Inclut : AOS, Menu Mobile, Modale RDV et Header Scroll
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. INITIALISATION DES ANIMATIONS (AOS)
       ========================================================================== */
    // Initialisation pour que les éléments s'animent dès l'actualisation
    AOS.init({
        duration: 1200,      // Vitesse d'apparition
        once: true,          // L'animation ne se joue qu'une fois
        offset: 0,           // Déclenchement immédiat au sommet de la page
        easing: 'ease-out-cubic',
        startEvent: 'DOMContentLoaded'
    });

    // Rafraîchir AOS une fois que tout le contenu (images, styles) est prêt
    window.addEventListener('load', () => {
        AOS.refresh();
    });


    /* ==========================================================================
       2. GESTION DU MENU MOBILE (BURGER)
       ========================================================================== */
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            // Basculer l'affichage du menu et l'animation du burger
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        // Fermeture automatique du menu au clic sur un lien
        document.querySelectorAll('#nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                burger.classList.remove('toggle');
            });
        });
    }


    /* ==========================================================================
       3. GESTION DE LA MODALE DE RENDEZ-VOUS
       ========================================================================== */
    const modal = document.getElementById('rdv-modal');
    const openBtns = document.querySelectorAll('.open-modal');
    const closeBtn = document.querySelector('.close-modal');
    const rdvForm = document.getElementById('rdv-form');

    // Fonction pour ouvrir la modale
    const openModal = () => {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Empêche le scroll en arrière-plan
        }
    };

    // Fonction pour fermer la modale
    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactive le scroll
        }
    };

    // Écouteurs d'événements pour les boutons d'ouverture et fermeture
    openBtns.forEach(btn => btn.addEventListener('click', openModal));
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Fermer la modale si l'utilisateur clique en dehors de la fenêtre blanche
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });


    /* ==========================================================================
       4. GESTION DU FORMULAIRE DE RENDEZ-VOUS
       ========================================================================== */
    if (rdvForm) {
        const dateInput = document.getElementById('date-select');
        
        // Sécurité : Empêcher la sélection d'une date passée
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.setAttribute('min', today);
        }

        // Gestion de la soumission du formulaire
        rdvForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page

            // Ici vous pouvez ajouter un envoi de données via Fetch ou EmailJS
            alert(' Merci ! Votre demande de rendez-vous a bien été enregistrée.');
            
            closeModal();   // Ferme la modale
            rdvForm.reset(); // Vide les champs du formulaire
        });
    }


    /* ==========================================================================
       5. EFFETS AU SCROLL (HEADER)
       ========================================================================== */
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
        if (header) {
            // Ajoute la classe 'scrolled' après 50px de défilement
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

});