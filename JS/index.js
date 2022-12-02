


const tittle = document.getElementById('tittle');
const author = document.getElementById('author');
const imgs = document.getElementById('imgs');
const play = document.getElementById('play');
const audio_control = document.getElementById('audio_control');

const backward = document.getElementById('backward');
const forward = document.getElementById('forward');

let play_pause = true;


const play_music = () => {
    
    play_pause = false;
    audio_control.play();
    imgs.classList.add('circular_move');
    play.classList.replace('fa-circle-play', 'fa-circle-pause');
    
}

const pause_music = () => {
    play_pause = true;
    audio_control.pause();
    imgs.classList.remove('circular_move');
    play.classList.replace('fa-circle-pause', 'fa-circle-play');
 
}



play.addEventListener('click', () => {

    play_pause ? play_music() : pause_music();

   

});



const songs = [{ tittle: 'Tu mera koi', image: '/images/image1.jpeg', author: 'Apna Arijit' },
{ tittle: 'jedah nasha', image: '/images/image2.jpeg', author: 'Apka Norah' },
{ tittle: 'Teri mitti', image: '/images/image3.jpeg', author: 'B parak' }];




let songIndex = 0


const forwardSong = () => {
    
    audio_control.src = '/audio/' + songs[songIndex].tittle + '.mp3';
    tittle.innerHTML = songs[songIndex].tittle;
    author.innerHTML = songs[songIndex].author;
    imgs.src = songs[songIndex].image;
    play_music();
    console.log(audio_control);
    songIndex = (songIndex + 1) % songs.length;
}

forwardSong();

forward.addEventListener('click', forwardSong);




backward.addEventListener('click', () => {
    
    audio_control.src = '/audio/' + songs[songIndex].tittle + '.mp3';
    tittle.innerHTML = songs[songIndex].tittle;
    author.innerHTML = songs[songIndex].author;
    imgs.src = songs[songIndex].image;
    play_music();
    songIndex = (songIndex - 1 + songs.length) % songs.length;


});




pause_music();