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
    that=this;
    switch (that.id){
        case green: $(g).addClass(gOn); playSound(that); setTimeout(()=>$(g).removeClass(gOn), 300);
        break;
        case blue: $(b).toggleClass(bOn); playSound(that); setTimeout(()=>$(b).removeClass(bOn), 300);
        break;
        case red: $(r).toggleClass(rOn); playSound(that); setTimeout(()=>$(r).removeClass(rOn), 300);
        break;
        case yellow: $(y).toggleClass(yOn); playSound(that); setTimeout(()=>$(y).removeClass(yOn), 300);
        break;
        default : 
        
        break;
    }
}

function playSound(that){
    switch (that.id){
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
   $(r).click(toggleColor);
   $(b).click(toggleColor);
   $(g).click(toggleColor);
   $(y).click(toggleColor);
  



   
    
});
