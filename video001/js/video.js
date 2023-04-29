//DOM
var btn = document.querySelector('#btn');
const vid = document.querySelector('#videoBg');

btn.addEventListener('click', ()=>{
    if(vid.paused){
        vid.play();
        btn.innerHTML = ' <i class="fa fa-pause"></i> Pause'
    }else{
        vid.pause(),
        btn.innerHTML = ' <i class="fa fa-play"></i> Play';
    }
    
})