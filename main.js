const box = document.getElementById('ball');

let xAxis = 0;
let yAxis = 0;

function move(e){
    if(e.keyCode === 40)
    {
        yAxis += 5;
        box.style.marginTop = (parseInt (yAxis) + yAxis) + 'px';
    }
    if(e.keyCode === 39)
    {
        xAxis += 5;
        box.style.marginLeft = (parseInt (xAxis) + xAxis) + 'px';
    }
    if(e.keyCode === 37)
    {
        xAxis += -5;
        box.style.marginLeft = (parseInt (xAxis) + xAxis) + 'px';
    }
    if(e.keyCode === 38)
    {
        yAxis -= 5;
        box.style.marginTop = (parseInt (yAxis) + yAxis) + 'px';
    }
    if(yAxis>100) {
        yAxis = 99;
    }
    if(yAxis<-175) {
        yAxis = -174;
    }
    if(xAxis<4) {
        xAxis = 5;
    }
    if(xAxis>728) {
        xAxis = 727;
    }
}


 document.onkeydown = move;