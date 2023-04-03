function playSound(idAudioElement) {
    document.querySelector(idAudioElement).play();
}

const keyList = document.querySelectorAll('.tecla');
let i = 0;

for (let i = 0; i < keyList.length; i++ ){
    const key = keyList[i];
    const instrument = key.classList[1];

    //template string
    const idAudio = `#som_${instrument}`;

    console.log(idAudio);

    keyList[i].onclick = function () {
        playSound(idAudio);
    } 
}

/*
function playSoundPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = playSoundPom;
*/

/*
while (i < keyList.length){
    const key = keyList[i];
    const instrument = key.classList[1];

    //template string
    const idAudio = `#som_${instrument}`;

    console.log(idAudio);

    keyList[i].onclick = function () {
        playSound(idAudio);
    } 
    
    i++;

    console.log(i);
}
*/

