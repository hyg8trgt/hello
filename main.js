var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content =="take my selfie")
    {
        console.log("taking selfie");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Chad Wild Clay, is an American YouTuber known for his YouTube comedy videos, parody songs, chopping fruit ninja videos, and later his Spy Ninjas videos, which has a combo of everything he has done over the past years of his YouTube career. He is also the founder and creator of the Spy Ninja team.";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
Webcam.attach(camera);

setTimeout(function()
{
    take_snapshot();
    save();
}, 500);

camera = document.getElementById("camera");
    Webcam.set({
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90,
    });
}
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    });
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}