function startclassify(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifyer=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KvpvxMxmF/model.json",readymodel)

}
function readymodel(){
    console.log("Model is loaded");
    classifyer.classify(gotresult);
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)

        random_r=Math.floor(Math.random()*255);
        random_g=Math.floor(Math.random()*255);
        random_b=Math.floor(Math.random()*255);
        console.log(random_r,random_g,random_b)
        document.getElementById("h2").innerHTML=result[0].label
        document.getElementById("h2").style.color="rgb("+random_r+","+random_g+","+random_b+")";
      img=document.getElementById("img");

        if(result[0].label=="Barking"){
            img.src="dog.jpg"
        }
        else if(result[0].label=="Meowing"){
            img.src="cat.jpg"
            
        }
        else if(result[0].label=="Mooing"){
            img.src="cows.jpg "
            
        }
        else {
            img.src="sound.jpg"
           
        }



    }
}

