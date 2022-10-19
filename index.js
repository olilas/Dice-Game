var randomNumber=Math.floor(Math.random()*6 +1);
var randomImage1="images/dice"+randomNumber+".png";
var name1=document.querySelectorAll("img")[0];
var imageSource=name1.setAttribute("src",randomImage1);


var randomNumber=Math.floor(Math.random()*6 +1);
var randomImage2="images/dice"+randomNumber+".png";
var name2=document.querySelectorAll("img")[1];
var imageSource=name2.setAttribute("src",randomImage2);

if (randomImage1<randomImage2){
   
    document.querySelector("h1").innerHTML="Niki is the winner!!!"
   
}else if(randomImage1>randomImage2){
    
    document.querySelector("h1").innerHTML="Olimbia is the winner!!!"
}else{
    document.querySelector("h1").innerHTML="DRAW!!!"
}