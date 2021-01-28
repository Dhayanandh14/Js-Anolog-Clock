window.onload= function(){
    var HOUR = document.querySelector("#hours");
    var MINUTE = document.querySelector("#minutes");
    var SECONDS = document.querySelector("#seconds");
    function startClock() {
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes()
        var sec = date.getSeconds();
     
        console.log(hr,min,sec);
        var hrhand = hr*360/12 + ((min * 360/60)/12)
        var minhand= (min * 360/60) + (sec* 360/60)/60
        var sechand=  sec * 360/60;

        HOUR.style.transform="rotate("+ hrhand +"deg)";
        MINUTE.style.transform="rotate("+ minhand+"deg)";
        SECONDS.style.transform="rotate("+sechand+"deg)"
    }
    setInterval(startClock,1000)     
} 
// function moveHands() {
//     with (new Date()) {
//       h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 degrees hour
//       m = 6 * getMinutes(); // 6 degrees every minute
//       s = 6 * getSeconds(); // 6 degrees every second
//       // setting the rotate CSS attribute to those degree values -->
//       document.getElementById("seconds").style.cssText =
//         "-webkit-transform:rotate(" + s + "deg);";
//       document.getElementById("minutes").style.cssText =
//         "-webkit-transform:rotate(" + m + "deg);";
//       document.getElementById("hours").style.cssText =
//         "-webkit-transform:rotate(" + h + "deg);";
  
//       setTimeout(moveHands, 1000); // calling the function every second
//     }
//   }
  
//   window.onload = moveHands;