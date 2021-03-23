let submit = document.getElementById('submit');
submit.onclick= calc;
let radius= document.getElementById('radius');
let volume= document.getElementById('volume');
function calc(event){
    volume.value =4/3*Math.PI*Math.pow(radius.value,3);
        event.preventDefault(

        )
}