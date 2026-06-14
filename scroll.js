const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément est visible
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 // L'élément doit être visible à 50% pour déclencher l'animation
});

// Sélectionner tous les éléments à observer
document.querySelectorAll('.text-frame').forEach(element => {
    observer.observe(element);
});

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'élément est visible
        if (entry.isIntersecting) {
            entry.target.classList.add('visible2');
        } else {
            entry.target.classList.remove('visible2');
        }
    });
}, {
    threshold: 0.5 // L'élément doit être visible à 50% pour déclencher l'animation
});

// Sélectionner tous les éléments à observer
document.querySelectorAll('.text-frame2, .about-img').forEach(element => {
    observer2.observe(element);
});