const video = document.getElementById('videoback');

const buttons = document.querySelectorAll('.botao-ler');

buttons.forEach(button => {
    button.addEventListener('click', function () {

        const card = button.parentElement;

        card.classList.toggle('active');

        if (card.classList.contains('active')) {
            button.textContent = 'Saber menos';
        } else {
            button.textContent = 'Saber mais';
        }
    });
});
function resetarVideo(){
    video.currentTime = 0;
    video.play();
}