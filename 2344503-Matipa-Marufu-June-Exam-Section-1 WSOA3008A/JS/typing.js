var i = 0;
var txt = ["Electric switches can cause bit rotting.", "Bit rotting occurs when a 0 is switched to a 1 or vice versa"];
var speed = 50; 

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("p-BitRottingExplanation").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}