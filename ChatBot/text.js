
let message = document.getElementById("message-box-id");

let sendMsg = document.getElementById("send-btn");
let micBtn = document.getElementById("mic-btn");
let textContainer = document.getElementById("text-content");

/*
function isValue(){
  // if(message.value){
        console.log("change");
        sendMsg.style.display="block";
        micBtn.style.display="none";
   }
   isValue();
        */
       
// mic Recognition start
const reg = window.SpeechRecognition || window.webkitSpeechRecognition;
const speech = new reg();
function voiceStart() {
    speech.start();
    speech.onresult = function (e) {
        textContainer.innerHTML += `<br><p class="usercontent">${e.results[e.resultIndex][0].transcript}</p><br><br>`;
    }
}
// mic Recognition end

//Message send in chatbox start
sendMsg.addEventListener("click", () => {
    if (message.value) {
        textContainer.innerHTML += `<br><p class="usercontent">${message.value}</p><br><br>`;
       // message.value="";
    }
});
//Message send in chatbox End

//Camera capture start
const camera = document.getElementById("camera-btn");
$("#camera-btn").on("click", function () {

    const cameraIdEl = document.getElementById("camera-id");
    cameraIdEl.style.display = "block";
    const webCamElement = document.getElementById("camera");
    //const canvasEl=document.createElement("canvas");
    // canvasEl.setAttribute('id','cameraIcon')
    const canvasElement = document.getElementById("cameraIcon");
    canvasElement.style.display = "inline";
    //  console.log(canvasElement);
    const webcam = new Webcam(webCamElement, "user", canvasElement);
    webcam.start();
    const snapBtn = document.getElementById("snap-btn");
    snapBtn.addEventListener("click", () => {
        // textContainer.append(canvasEl);
        //  console.log("tooooo");
        let picture = webcam.snap();
        canvasElement.innerText = picture;
        cameraIdEl.style.display = "none";
        webcam.stop();

    })
    const closeWebCam = document.getElementById("closeCamera");
    closeWebCam.addEventListener("click", () => {
        webcam.stop();
        cameraIdEl.style.display = "none";
    })
    /*
    function takeAPicture(){
        console.log("tooooo");
        let picture=webcam.snap();
        canvasElement.innerHTML=`<img src="${picture}">`;
    }
    takeAPicture();*/
})
//Camera capture End

// Emogi start
$('#message-box-id').emojioneArea();

// setTimeout( function() {
//     $(".emojionearea").css("width", "50%")
// }, 3000)
// Emogi End