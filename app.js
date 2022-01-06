var nativeVoice = 1,
  voices,
  speechSpeed = 1,
  info;

var setInput = function () {
  var a = document.getElementById("input1").value;
  if (a !== "") {
    info = a;
  } else {
    info = "Selam";
  }
};

var setSpeed = function (x) {
  var b = document.getElementById("select-speed").value;
  speechSpeed = b;
  console.log(b);
};

var startSpeech = function () {
  setInput();
  voices = document.getElementById("select-voice");
  nativeVoice = voices.options[voices.selectedIndex].value;
  setSpeed();
  switch (nativeVoice) {
    case "1":
      responsiveVoice.speak(info, "Turkish Male", { rate: speechSpeed });
      break;
    case "2":
      responsiveVoice.speak(info, "Turkish Female", { rate: speechSpeed });
      break;
  }

  var stopSpeech = function () {
    responsiveVoice.cancel();
  };
};

/** 

// code to control the speech speed using keyboard combinations

Mousetrap.bind(['ctrl+,'], function(e) {
    if(speechSpeed >= 0){
        speechSpeed -= 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed <= 0){
        speechSpeed = 0;
        alert("This is the minimum speed of speech available !");
    }
    console.log(speechSpeed);
});

Mousetrap.bind(['ctrl+.'], function(e) {
    if(speechSpeed !== 0 && speechSpeed <= 1.4){
        speechSpeed += 0.2;    
        document.getElementById("select-speed").value = speechSpeed;
    } if(speechSpeed > 1.4){
        speechSpeed = 1.5;
        alert("This is the maximum speed of speech available !");
    }
    console.log(speechSpeed);
});

**/
