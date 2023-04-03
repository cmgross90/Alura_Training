function playSound(audioSelector) {
    const element = document.querySelector(audioSelector);

    if ((element != null) && (element.localName == 'audio')) {        
        element.play();
    } 
    else {
        console.log('Element not found!');
    }
}

const keyList = document.querySelectorAll('.tecla');
let i = 0;

for (let i = 0; i < keyList.length; i++ ){
    const key = keyList[i];
    const instrument = key.classList[1];

    //template string
    const idAudio = `#som_${instrument}`;

    console.log(idAudio);

    key.onclick = function() {
        playSound(idAudio);
    } 

    key.onkeydown = function(e) {
        if ((e.code == 'Enter') || (e.code == 'Space')) {
            key.classList.add('ativa');
        }        
    }

    key.onkeyup = function(e) {
        if ((e.code == 'Enter') || (e.code == 'Space')) {
            key.classList.remove('ativa');
        }
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

