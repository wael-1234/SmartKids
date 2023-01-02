var tl = new TimelineMax(); 
tl.staggerFrom(".topics", 3, {
  css:{transform:"scale(0)",top:"60%",left:"50%"},ease:Elastic.easeOut
}, 0.3);


var contact = document.getElementById("contact");
var culture = document.getElementById("culture");
var nature = document.getElementById("nature");
var maths = document.getElementById("maths");
var start = document.getElementById("start");
var topics = document.getElementsByClassName("topics");


contact.addEventListener("mouseover",contactretina,false);
contact.addEventListener("touchstart",contactretina,false);
culture.addEventListener("mouseover",cultureretina,false);
culture.addEventListener("touchstart",cultureretina,false);
nature.addEventListener("mouseover",natureretina,false);
nature.addEventListener("touchstart",natureretina,false);
maths.addEventListener("mouseover",mathsretina,false);
maths.addEventListener("touchstart",mathsretina,false);
start.addEventListener("mouseover",startretina,false);
start.addEventListener("touchstart",startretina,false);

function mathsretina(event) {
	TweenMax.to("#retina", 0.2, {left:"51%",top:"59.5%"});
}

function cultureretina(event) {
	TweenMax.to("#retina", 0.2, {left:"49%",top:"59.5%"});
}

function contactretina(event) {
	TweenMax.to("#retina", 0.2, {left:"49%",top:"60.5%"});
}

function startretina(event) {
	TweenMax.to("#retina", 0.2, {left:"51%",top:"60.5%"});
}

function natureretina(event) {
	TweenMax.to("#retina", 0.2, {left:"50%",top:"59%"});
}


for(var i=0; i< topics.length; i++){
	topics[i].addEventListener("mouseout",retinaout);
}
function retinaout(event) {
		TweenMax.to("#retina", 0.2, {left:"50%",top:"60%"});	
}


culture.addEventListener('click',function(){
	window.location='./pages/culture.html'
})

var confirmation = document.querySelector("#confirmation")
confirmation.addEventListener('click',function(event){
	var verif = window.confirm("Voulez vous vraiment nous contacter?");
	if(verif){
		window.location='/contact/contact.html'
	}else{
		event.preventDefault()
	}
})

function titre (){
	var title = document.querySelector('#header')
	title.style.color='#fffe'
}

function conteur(int){
	var score = document.querySelector('#conteur')
	score=+int;
	score.appendChild(score);
}