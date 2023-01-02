
function prononcer(nom){
    responsiveVoice.speak(nom, "French Female", {volume: 5});
}
function talk(name){
    responsiveVoice.speak(name, "UK English Male", {volume: 5});
}

function ecouter(){
    var speech = true;
        window.SpeechRecognition = window.SpeechRecognition
                        || window.webkitSpeechRecognition;
  
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        const words = document.querySelector('.words');
        words.appendChild(p);
  
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
  
            document.getElementById("p").innerHTML = transcript;
            console.log(transcript);
        });
          
        if (speech == true) {
            recognition.start();
            recognition.addEventListener('end', recognition.end);
            speech=false;
        }  
}

function comparer(nom){ 
      setTimeout(()=>{
        var my_p=document.getElementById("p").innerHTML.toLowerCase();
        if(my_p==nom){
            swal({
                title: "Bravo!",
                text: "Vous avez bien pononcé!",
                icon: "success",
                button: "Fermer",
              });
        }
        else{
            swal({
                title: "Désolé!",
                text: "Vous ne l'avez pas bien prononcé, essayez de nouveau!",
                icon: "error",
                button: "Fermer",
              });}

    },5000)
   
}

function compare(name){
    setTimeout(()=>{
        var my_p=document.getElementById("p").innerHTML.toLowerCase();
        if(my_p==name){
            swal({
                title: "You Win!",
                text: "You have correctly pronounced the name of this object!",
                icon: "success",
                button: "Close",

            });
        }else
        swal({
            title: "Sorry!",
            text: "You have not pronounced correctly the name of this object, try again!",
            icon: "error",
            button: "Close",

        })
    },3000)

}

var myDate = document.querySelector("#date span")
var currentDate = new Date()
myDate.innerHTML=currentDate.getFullYear()
