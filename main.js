const box = document.querySelector('div');

let moveBy = 0;

function move(e){
    if(e.keyCode === 40)
    {
        moveBy += 5;
        box.style.marginTop = (parseInt (moveBy) + moveBy) + 'px';
    }
    if(e.keyCode === 39)
    {
        moveBy += 5;
        box.style.marginLeft = (parseInt (moveBy) + moveBy) + 'px';
    }
    if(e.keyCode === 37)
    {
        moveBy += -5;
        box.style.marginLeft = (parseInt (moveBy) + moveBy) + 'px';
    }
    if(e.keyCode === 38)
    {
        moveBy -= 5;
        box.style.marginTop = (parseInt (moveBy) + moveBy) + 'px';
    }
}


document.onkeydown = move;