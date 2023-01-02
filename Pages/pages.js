
// scroll button

window.addEventListener('scroll', e => {
    var el = document.getElementById('jsScroll');
    var nav = document.getElementById('navbar');
    if(window.scrollY > 200) {
      el.classList.add('visible');
      nav.classList.add('visible_nav');
    } else {
      el.classList.remove('visible');
      nav.classList.remove('visible_nav');
    }
  });
  
    //   Mise à jour du score & Sweat Alert

  var score= document.querySelector("#score")
  var myScore=0;

  function incrementScore(){
    myScore+=10;
    score.innerHTML=myScore;
  }
  
  var bonne_reponse=document.querySelectorAll("#correcte")
  var fausse_reponse=document.querySelectorAll("#faut")
    bonne_reponse.forEach(element => { element.addEventListener('click',()=>{
    element.disabled=true
    vrai();
  })
  });

  fausse_reponse.forEach(element=>{element.addEventListener('click',faut)})

function vrai(){
  incrementScore();
  swal("Bravo !! Vous avez bien répondu à cette question!", {
    buttons: {
      catch: {
        text: "Score",
        value: "catch",
      },
      defeat: "continuer",
    },
  })
  .then((value) => {
    switch (value) {
   
      case "defeat":
        swal("Bonne chance");
        break;
   
      case "catch":
        swal(`Votre score est ${myScore}` );
        break;
   
      default:
        swal("Bonne chance");
    }
  });
}

function faut(){
    swal({
        title: "Désolé!",
        text: "Essayer de réflechir encore, vous pouvez répondre correctement!",
        icon: "error",
        button: "Fermer",
      });
    }


// conteur  

var question =document.querySelectorAll("#question")
var joker =document.querySelectorAll("#joker")
var counter =document.querySelectorAll("#counter strong")
var repondre =document.querySelectorAll("#repondre")
var verif=false;
var myInterval;
var jokerClicked=0;
var repondu=[]

  for(let i=0; i<question.length;i++){
    question[i].addEventListener('mouseover',countDown)
     function countDown(){
       question[i].removeEventListener('mouseover',countDown)
       counter[i].innerHTML=15;
          myInterval=setInterval(() => {
          if(counter[i].innerHTML>0){
          counter[i].innerHTML--;
          }
        },1000); 
        setTimeout(()=>{if(counter[i].innerHTML==0 && !repondu[i]){
          verifReponse()
          repondre[i].disabled=true;
        }},11000)     
    }

    repondre[i].addEventListener('click',()=>{
      verifReponse()
      counter[i].innerHTML=0;
      repondre[i].disabled=true;
    })

    function verifReponse(){
      var answers= question[i].querySelectorAll(".form-check-input")
      var verifier=1
      for(let j=0;j<answers.length;j++){
        if((answers[j].checked && answers[j].id=='reponseCorrecte')||(!answers[j].checked && answers[j].id=='fausseReponse')){
          verifier=1*verifier;
        }else{
          verifier=0*verifier;
          }
      }
      if(verifier){
        vrai();
        joker[i].disabled=true;
      }else{
        faut()
      }
      repondu[i]=true
    }
    
    
    
  
    joker[i].addEventListener('click',function(){
      if(jokerClicked < 2){
        clearInterval(myInterval)
      counter[i].innerHTML=10;
      countDown()
      jokerClicked ++
      repondre[i].disabled=false;
      repondu[i]=false
      }else{
        joker[i].disabled=true;
        alert('Vous avez utilisé vos Jokers') 
      }
    })
     
    
      
  }   
// copy right Date mise à jour

var myDate = document.querySelector("#date span")
var currentDate = new Date()
myDate.innerHTML=currentDate.getFullYear()




