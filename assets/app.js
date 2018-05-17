let red    = "red",
    green  = "green",
    yellow = "yellow",
    blue   = "blue",
    g="#"+green,
    b="#"+blue,
    r="#"+red,
    y="#"+yellow,
    gOn="greenOn",
    bOn="blueOn",
    rOn="redOn",
    yOn="yellowOn",
    sg="greenSound",
    sr="redSound",
    sb="blueSound",
    sy="yellowSound"
    audiogreen=document.getElementById(sg),
    audioyellow=document.getElementById(sy),
    audioblue=document.getElementById(sb),
    audiored=document.getElementById(sr);
let sequence = []; 
$(function () {
    
function toggleColor(){
    switch (this.id){
        case green: $(g).toggleClass(gOn); console.log("toque");
        break;
        case blue: $(b).toggleClass(bOn);
        break;
        case red: $(r).toggleClass(rOn);
        break;
        case yellow: $(y).toggleClass(yOn);
        break;
        default : 
        $(g).removeClass(gOn);
        $(b).removeClass(bOn);
        $(r).removeClass(rOn);
        $(y).removeClass(yOn);
        break;
    }
}

function playSound(){
    switch (this.id){
        case green: audiogreen.play().then(() => { 
        }).catch((err) => {
            console.log(error);
        });;
        break;
        case blue: audioblue.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;
        case red: audiored.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;
        case yellow: audioyellow.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;}
}

function addToSequence(){

}
/** 
 * This function takes a number coming from the sequence array and returns the string of the color 
 * @param {number} elementOfSequence 
 */
function numberColor(elementOfSequence){

    switch (elementOfSequence) {
        case 0: return green;
            break;
        case 1: return red;
            break;
        case 2: return yellow;
            break;
        case 3: return blue;
            break;
        default:
            break;
    }
}
   $(r).mouseup(toggleColor);
   $(b).mouseup(toggleColor);
   $(g).mouseup(toggleColor);
   $(y).mouseup(toggleColor);
   $(r).mousedown(toggleColor);
   $(b).mousedown(toggleColor);
   $(g).mousedown(toggleColor);
   $(y).mousedown(toggleColor);
   $(r).mousedown(playSound);
   $(b).mousedown(playSound);
   $(g).mousedown(playSound);
   $(y).mousedown(playSound);
   
   


   
    
});
