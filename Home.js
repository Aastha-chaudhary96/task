const video = document.querySelector('#video');
const playpause = document.querySelector('.play');
const actionOnvideo = document.querySelector('.video');

playpause.addEventListener('click',function(){
        video.play();
        playpause.classList.add('hidden');
        playpause.classList.remove('play');
});

actionOnvideo.addEventListener('click',function(){
    video.pause();
    playpause.classList.remove('hidden');
    playpause.classList.add('play');
});
