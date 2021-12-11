function startClassification () {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/IZhBhiHtS/model.json", modelLoaded)

    
}

function modelLoaded (){

classifier.classify(gotresults);
}

function gotresults (error,results) {
 
if  (error){
console.error(error);

}

else {
console.log(results);
random_number_r = Math.floor(Math.random() * 255 ) + 1;
random_number_g = Math.floor(Math.random() * 255 ) + 1;
random_number_b = Math.floor(Math.random() * 255 ) + 1;

document.getElementById("answer_label").innerHTML + 'I can hear the voice of -  ' + 
results[0].label; 

document.getElementById('answer_label').style.color="rgb("
+random_number_r+" , " +random_number_g + "," +random_number_b + ")"


img= document.getElementById('animal')


if (results[0].label== 'Cat'){
img.src = "cat.png" 
}
else if (results[0].label== 'Dog'){
    img.src = "dog.png"
 }

 else if (results[0].label== 'Crow'){
    img.src = "crow.png"
 }
 else if (results[0].label== 'Duck'){
    img.src = "duck.png"
 }

 else {
    img.src = "ear.png"
 }


}



}