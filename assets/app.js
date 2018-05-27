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
    
function toggleColor(element){
   
    switch (element){
        case 0: $(g).addClass(gOn); playSound(element); setTimeout(()=>$(g).removeClass(gOn), 300);
        break;
        case 3: $(b).addClass(bOn); playSound(element); setTimeout(()=>$(b).removeClass(bOn), 300);
        break;
        case 1: $(r).addClass(rOn); playSound(element); setTimeout(()=>$(r).removeClass(rOn), 300);
        break;
        case 2: $(y).addClass(yOn); playSound(element); setTimeout(()=>$(y).removeClass(yOn), 300);
        break;
            }
}

function playSound(element){
    switch (element){
        case 0: audiogreen.play().then(() => { 
        }).catch((err) => {
            console.log(error);
        });;
        break;
        case 3: audioblue.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;
        case 1: audiored.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;
        case 2: audioyellow.play().then(() => {
            }).catch((err) => {
                console.log(error);
            });
        break;}
}

function addToSequence(){
   sequence.push(Math.floor(Math.random()*4));
   return sequence;
}

function selectedColor() {
    switch (this.id) {
        case green: return color=0;
            break;
        case red: return color=1;
            break;
        case yellow: return color=2;
            break;
        case blue: return color=3;
        break;
    }
}

function playSequence(){

        sequence.forEach(function(i,b){
          setTimeout(toggleColor,1000*b,i)
          console.log(i);
        }); 
   ;
}
   $(r).click(selectedColor);
   $(b).click(selectedColor);
   $(g).click(selectedColor);
   $(y).click(selectedColor);
   $(r).click(function(){toggleColor(1)});
   $(b).click(function(){toggleColor(3)});
   $(g).click(function(){toggleColor(0)});
   $(y).click(function(){toggleColor(2)});
    $("button").click(function(){
        addToSequence();
        playSequence();
    });

   
    
});
