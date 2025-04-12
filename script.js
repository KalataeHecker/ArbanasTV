// Получаваме елементите от DOM
const playPauseBtn = document.getElementById('play-pause-btn');
const iframe = document.getElementById('btv-iframe');

// Първоначално видео потока е спрян
let isPlaying = false;

// Функция за управление на възпроизвеждането
playPauseBtn.addEventListener('click', function () {
    if (isPlaying) {
        // Спираме видео потока
        iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        playPauseBtn.innerHTML = "&#9654;"; // Променяме иконата на бутон (триъгълник)
    } else {
        // Стартираме видео потока
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        playPauseBtn.innerHTML = "&#10074;&#10074;"; // Променяме иконата на бутон (пауза)
    }
    isPlaying = !isPlaying;
});
