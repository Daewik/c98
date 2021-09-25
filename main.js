var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML=" ";
    Recognition.start();
}

Recognition.onresult=function run(event){console.log(event);
var info =event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=info;
speak();
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : "png",
    png_quality : 90
});
var cam=document.getElementById("camera");


Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img src="+data_uri+">";
});

function speak()
{
    var synth= window.speechSynthesis;
    var speak_data=document.getElementById("textbox").value;
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    Webcam.attach(cam);
}
