function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

$('bubble').each(function(){
    $('bubble').css('background-color', getRandomColor());
})

function startPop(){
    var title = document.getElementById("title");
    title.style.display = 'none';
    var start = document.getElementById("startButton");
    start.style.display = 'none';
    var instructions = document.getElementById("container");
    instructions.style.display = 'block';

    //bubble machines
    const bm = document.querySelector('#bubble_machine'), bubble_rate = 700;

    function addBubble() {
        var text = newBubblesText;
        var b = document.createElement('div');
        b.className = 'bubble';
        b.style.width = (Math.random()*100) + 50 + 'px'; //randomizes sizes
        b.style.left = Math.random()*100 + '%'; //randomizes placement
        b.style.animationDuration = Math.floor(Math.random()*10) + 8 + 's'; //randomizes showing up
        b.style.backgroundColor = getRandomColor();
        b.style.outline = getRandomColor();
        b.textContent = text;

        b.onclick = function(){
            this.classList.add('pop_bubble')
        }
        b.onanimationend = function(){
            this.remove();
        }
        bm.appendChild(b)

        setTimeout(addBubble, bubble_rate)
    }
    addBubble();
}

var newBubblesText = "";
//adds text to new bubbles
function addText(){
    var text = document.getElementById("textInput").value;
    newBubblesText = text; //store text to newly created bubbles
    var b = document.createElement('div');
    b.className = 'bubble';
    b.style.width = (Math.random()*100) + 50 + 'px'; //randomizes sizes
    b.style.left = Math.random()*100 + '%'; //randomizes placement
    b.style.animationDuration = Math.floor(Math.random()*10) + 8 + 's'; //randomizes showing up
    b.style.backgroundColor = getRandomColor();
    b.style.outline = getRandomColor();
    b.textContent = text;

    b.onclick = function(){
        this.classList.add('pop_bubble');
    }
    b.onanimationend = function(){
        this.remove();
    }
    document.getElementById('bubble_machine').appendChild(b);
}

//changes background img depending on the time
document.addEventListener("DOMContentLoaded", function() {
    var backgrounds = {
        "day" : "cloudy_bg.jpg",
        "night" : "cloudynight_bg.jpg"
    }
    const hour = new Date().getHours();
    let time;

    if (hour >= 5 && hour < 18) {
        time = "day";
    } else {
        time = "night";
    }

    var bgImg = document.getElementById("background");
    bgImg.style.backgroundImage = "url('" + backgrounds[time] + "')";

})