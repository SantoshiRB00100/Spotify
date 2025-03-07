let song = new Audio("ath2.mp3");
let masterBtn = document.getElementById("masterBtn");
let wv = document.getElementById("wv");
let range = document.getElementById("range");
let upperAudio = document.querySelectorAll(".audio");
let songName = document.getElementById("songName");

masterBtn.addEventListener("click",function (){
    if (song.paused  || song.currentTime<=0){
    song.play();
    masterBtn.classList.remove("fa-circle-play");
    masterBtn.classList.add("fa-circle-pause");
    wv.style.opacity = "1";


    setInterval(function(){
        let percent = (song.currentTime/song.duration)*100;
        range.value = percent;
        console.log(percent);
    },1000)

    }else{
        song.pause();
        masterBtn.classList.add("fa-circle-play");
        masterBtn.classList.remove("fa-circle-pause");
        wv.style.opacity = "0"; 
    }
});

range.addEventListener ("click", function(){
    song.currentTime = (range.value*song.duration)/100;
});    

upperAudio.forEach(function(element){
    element.addEventListener("click", function(emt){

        if (element.classList[2] == "fa-circle-play" ) {
        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause");

        songName.innerText = element.parentElement.previousElementSibling.innerText;
        let index = emt.target.id;
        console.log(index);
        song.src = `songs/${index}.mp3`;
        song.play();
        range.value = 0;
        song.currentTime = 0;
        console.log(song);
        wv.style.opacity = "1";
        masterBtn.classList.remove("fa-circle-play");
        masterBtn.classList.add("fa-circle-pause");
        } else {
            song.pause();
            element.classList.add("fa-circle-play");
            element.classList.remove("fa-circle-pause");
            masterBtn.classList.add("fa-circle-play");
            masterBtn.classList.remove("fa-circle-pause");
            wv.style.opacity = "0"; 
        }
    })
})