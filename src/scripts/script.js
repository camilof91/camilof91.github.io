document.addEventListener("DOMContentLoaded", () => {
    const emailItem = document.getElementById('copyEmail');
    if (emailItem) {
        emailItem.addEventListener('click', copiarEmail);
    } else {
        console.error('Email icon not found.');
    }

    const navResponsive = document.querySelector('.nav-responsive');
    if (navResponsive) {
        navResponsive.addEventListener('click', mostrarOcultarMenu);
    }

    // window.onscroll = efectoHabilidades; // Assuming efectoHabilidades is defined somewhere
});

function copiarEmail() {
    const email = 'camilofetecua2011@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el email:', err);
    });
}

let menuVisible = false;

function seleccionar() {
    const nav = document.getElementById("nav");
    if (nav) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        console.error('Element with id "nav" not found.');
    }
}

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    if (nav) {
        if (menuVisible) {
            nav.classList.remove("responsive");
        } else {
            nav.classList.add("responsive");
        }
        menuVisible = !menuVisible;
    } else {
        console.error('Element with id "nav" not found.');
    }
}
