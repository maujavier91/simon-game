let red    = document.getElementById("red"),
    green  = document.getElementById("green"),
    yellow = document.getElementById("yellow"),
    blue   = document.getElementById("blue");

function pressedColor(){
    alert(this.id);
}

function lightUpColor(colorOfSimon) {
    
}
    blue.addEventListener("click", pressedColor);
    green.addEventListener("click", pressedColor);
    yellow.addEventListener("click", pressedColor);
    red.addEventListener("click", pressedColor);
    blue.addEventListener("onmouseover",lightUpColor);
    green.addEventListener("onmouseover",lightUpColor);
    yellow.addEventListener("onmouseover",lightUpColor);
    red.addEventListener("onmouseover",lightUpColor);

