const storyLine = document.getElementById('storyLine');
const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTwo');
const picture = document.getElementById('image');

    buttonOne.onclick = () => takeStairs();
    buttonTwo.onclick = () => takeDoor();

function takeStairs() {
    picture.src = "pexels-photo-2556788.webp";
    storyLine.innerText = "You decide to take your chances with the stairs. As you make your way up the short staircase, every step feels like a eternity as you try your best to not alert anyone who may be up there. When you get to the top of the stairs, you extend your clamy hand and grasp the doorknob. Slowly opening the door, you find yourself in the middle of a dimly lit hallway. To your left the hallway goes on for sometime before breaking off to the right. To your left, you are confronted with another door just 10 feet from where you stand. Listening closely you think you can make out what sounds like whimpering coming from the other side. What path will you take?.";

    buttonOne.innerText = "Head down the long hallway and see whats around the corner.";
    buttonTwo.innerText = "Turn right to the nearest door and investigate.";

    buttonOne.onclick = () => turnCorner();
    buttonTwo.onclick = () => whimpering();
} 

function takeDoor() {
    picture.src = "Everything-you-need-to-know-about-the-Amazon-Rainforest-thumbnail-fa90818.jpg";
    storyLine.innerText = "You realize the door most likely leads outside and because you dont know where you are, you decide going throught that door might help you get your bearings. As you stumble towards the door and push it open, you are immediatly confronted with complete jungle below you as you stand at the edge of a small stone balcony. In the distance you see the vast blue ocean and realize that you either near the coast or on an unknown island. Either way your gut tells you are in danger if you stay exposed up on this balcony for too much longer. To your left you notice two seperate stair ways. One seems to go up to an upper floor. Your not sure if anyones up there and maybe there could be a phone you could use to call for help. On the other hand you have no idea why you were brought here and based on how you woke up, one can assume these people are not friendly. The other set of stairs seems to go down and trail of into the jungle. This could be your chance to escape undetected. Although your unsure why your here, your gut is telling you its not for any good whatsoever. Which path will you take?"

    buttonOne.innerText = "Take the spiral staicase upstairs and see if you can find a phone.";
    buttonTwo.innerText = "Make a dash for the jungle. Rather take your chance in nature then with unknown strangers.";

    buttonOne.onclick = () => spiralStaicase();
    buttonTwo.onclick = () => junglerun();
}

function turnCorner() {
    storyLine.innerText = "As you walk down the hallway, you cant help but notice how immaculate the walls";
}


