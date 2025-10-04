// Elements
const storyLine = document.getElementById('storyLine');
const nextBtn = document.getElementById('next');
const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTwo');
const picture = document.getElementById('image');

// Initial button setup
nextBtn.onclick = () => dio2();
buttonOne.onclick = () => takeStairs();
buttonTwo.onclick = () => takeDoor();

// -------- Functions -------- //
function typeWriter(text, elementId, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerText = ""; //clears paragraph before tying

    function typing() {
        if (i < text.length) {
            element.innerText += text.charAt(i)
            i++;
            setTimeout(typing, speed); //controls delay between characters
        }
    }
    typing();
}

typeWriter("Welcome to *world name*. In this world violence and trickery are sadly a common way of life. Brought on by eons of war, the current citizens of *world name* tragically can not recall what life was like before the endless bloodshed. Through endless war two families have risen above the rest becoming the two main players vying for control of all of *world name*. Sadly these two familes, house Syther and house Mordom both relish in the dark arts, and although they may have different customs and beliefs, their end game remains the same: COMPLETE CONTROL OVER LIFE AND FREEDOM.", "storyLine", 10)

function dio2() {
    nextBtn.onclick = () => typeSelection();
    buttonOne.style.display = "none"; 
    buttonTwo.style.display = "none";

    typeWriter("this is totally working", "storyLine", 90)
}

