// Elements
const storyLine = document.getElementById('storyLine');
const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTwo');
const picture = document.getElementById('image');

// Initial button setup
buttonOne.onclick = () => takeStairs();
buttonTwo.onclick = () => takeDoor();

// -------- Functions -------- //

function takeStairs() {
    picture.src = "pexels-photo-2556788.webp";
    storyLine.innerText = `You decide to take your chances with the stairs. As you make your way up the short staircase, 
every step feels like a eternity as you try your best not to alert anyone who may be up there. When you get to the top of the stairs, 
you extend your clammy hand and grasp the doorknob. Slowly opening the door, you find yourself in a dimly lit hallway. 
To your left, the hallway goes on for some time before breaking off to the right. To your left, you see another door just 10 feet from where you stand. 
Listening closely, you think you can hear whimpering from the other side. What path will you take?`;

    buttonOne.innerText = "Head down the long hallway and see what's around the corner.";
    buttonTwo.innerText = "Turn right to the nearest door and investigate.";

    buttonOne.onclick = () => turnCorner();
    buttonTwo.onclick = () => whimpering();
}

function takeDoor() {
    picture.src = "Everything-you-need-to-know-about-the-Amazon-Rainforest-thumbnail-fa90818.jpg";
    storyLine.innerText = `You realize the door most likely leads outside. Because you don't know where you are, you decide 
going through that door might help you get your bearings. As you push it open, you are confronted with a vast jungle below. 
In the distance, you see the blue ocean. To your left, you notice two separate stairways: one goes up, the other goes down into the jungle. 
Which path will you take?`;

    buttonOne.innerText = "Take the spiral staircase upstairs and see if you can find a phone.";
    buttonTwo.innerText = "Make a dash for the jungle and try to escape.";

    buttonOne.onclick = () => spiralStaircase();
    buttonTwo.onclick = () => jungleRun();
}

// -------- Placeholder functions for safe testing -------- //

function turnCorner() {
    storyLine.innerText = "As you walk down the hallway, you notice how immaculate the walls are. (More story coming soon!)";
}

function whimpering() {
    storyLine.innerText = "You approach the door and hear whimpering inside. (More story coming soon!)";
}

function spiralStaircase() {
    storyLine.innerText = "You climb the spiral staircase, looking for a phone. (More story coming soon!)";
}

function jungleRun() {
    storyLine.innerText = "You dash into the jungle, hoping to escape undetected. (More story coming soon!)";
}
