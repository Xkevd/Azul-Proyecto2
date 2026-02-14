// Lógica simple para el acordeón de FAQ
document.querySelectorAll('.faq-quest').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.faq-ans');
        answer.classList.toggle('activo');
    });
});
// Logica similar para Etapas
document.querySelectorAll('.module-item').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.querySelector('.module-detail');
        if (answer) {
            answer.classList.toggle('activo');
        }
    });
});