// JavaScript

const btn = document.querySelector("#ReelBtn");
const videoContainer = document.querySelector(".reel-container");
const close = document.querySelector(".close");
const reel = document.querySelector(".reel")

btn.addEventListener('click',()=>{
    console.log('press')
    videoContainer.classList.add('show');
    reel.play();
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
    
    reel.pause();
    reel.currentTime = 0;
    
})