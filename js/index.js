// Lógica simple para el acordeón de FAQ
document.querySelectorAll('.faq-quest button').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('activo');
    });
});
// Logica similar para Etapas
document.querySelectorAll('.module-item button').forEach(btn => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle('activo');
    });
});