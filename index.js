var value = document.querySelectorAll("button").length;
for (var i = 0; i < value; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {
    
    var buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML){

      case "W":
        var audio = new Audio("/drumKit/sounds/tom-1.mp3")
        audio.play();

        case "A":
        var audio = new Audio("/drumKit/sounds/tom-2.mp3")
        audio.play();

        case "S":
        var audio = new Audio("/drumKit/sounds/tom-3.mp3")
        audio.play();

        case "D":
        var audio = new Audio("/drumKit/sounds/tom-4.mp3")
        audio.play();

        case "J":
        var audio = new Audio("/drumKit/sounds/snare.mp3")
        audio.play();

        case "K":
        var audio = new Audio("/drumKit/sounds/crash.mp3")
        audio.play();

        case "L":
        var audio = new Audio("/drumKit/sounds/kick-bass.mp3")
        audio.play();

       
    }
  }
}
