var counter = 0;
var counterPlay = true;
    function pad ( value ) { return value > 9 ? value : "0" + value; }
    setInterval( function(){
        document.getElementById("counter").innerHTML=pad(++counter%60);
    }, 1000);

function incrementCount() {
    updateDisplay(++counter);
}

function updateDisplay(value) {
    document.getElementById("counter").innerHTML = value;
}

function decrementCount() {
    updateDisplay(--counter);
}

function updateDisplay(value) {
    document.getElementById("counter").innerHTML = value;
}

function handleCounter() {
  updateDisplay(counterPlay = false);
}

function updateDisplay(value) {
    document.getElementById("counter").innerHTML = value;
}

/*document.addEventListener("click", e =>{
    if(document.getElementById("plus")){
        updateDisplay(++counter)
    }else if(document.getElementById("minus")){
        updateDisplay(--counter)
    }else if(document.getElementById("pause")){
        updatePause()
    }
})

function updateDisplay(value) {
    document.getElementById("counter").innerHTML = value;
}

function updatePause(){
    counterPlay = false 
    document.querySelectorAll("button").forEach(button, function(){
        if(button.id !== "pause"){
            button.disabled = true;
        }
    })
}*/









let submit= document.getElementById("submit");
submit.addEventListener("click", function(){
    let commentSection= document.getElementById("comment-input").value;
 
    let p = document.createElement("p");
    let message = document.createTextNode(commentSection);
    p.appendChild(message);
    document.getElementById("input").appendChild(p);
 
});