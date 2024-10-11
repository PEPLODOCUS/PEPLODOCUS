let increase = document.getElementById("increasebtn");
let reset = document.getElementById("resetbtn");
let decrease = document.getElementById("decreasebtn");
let label = document.getElementById("countlabel");
let count = 0;

label.textContent = count;

increase.onclick = function(){
    count ++ ;
    label.textContent = count;
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}

decrease.onclick = function(){
    count -- ;
    label.textContent = count;
}