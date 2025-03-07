let song = new Audio("ath2.mp3");
let masterBtn = document.getElementById("masterBtn");
let wv = document.getElementById("wv");
let range = document.getElementById("range");
let upperAudio = document.querySelectorAll(".audio");

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
        let index = emt.target.id;
        console.log(index);
    })
})