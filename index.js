// Elements
const storyLine = document.getElementById('storyLine');
const nextBtn = document.getElementById('next');
const buttonOne = document.getElementById('btnOne');
const buttonTwo = document.getElementById('btnTwo');
const picture = document.getElementById('image');

// Initial button setup


// -------- Functions -------- //
function typeWriter(text, elementId, speed = 50, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerText = ""; //clears paragraph before tying

    function typing() {
        if (i < text.length) {
            element.innerText += text.charAt(i)
            i++;
            setTimeout(typing, speed); //controls delay between characters
        } else {
            if (callback) callback() //runs callback when done
        }
    }
    typing();
}

typeWriter("Welcome to Veilmora. In this world, violence and deception are, sadly, a common way of life. Born of eons of war, the current citizens of Veilmora can no longer recall what life was like before the endless bloodshed. Through these ceaseless conflicts, two families have risen above all others, becoming the principal players vying for control of the entire land. Tragically, both House Syther and House Mordom revel in the dark arts, and though their customs and beliefs may differ, their ultimate goal remains the same: COMPLETE CONTROL OVER LIFE AND FREEDOM.", "storyLine", 10, () => {
    nextBtn.style.display = "block";
    nextBtn.style.opacity = 0;

    nextBtn.style.transition = "opacity 11s ease";

    setTimeout(() => {
        nextBtn.style.opacity = 1;
    }, 10)
})
    nextBtn.onclick = () => {
        dio2();
    };

function dio2() {
    nextBtn.style.display = "none";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    
    typeWriter(
        "In this dark and new disturbing world, only a few areas of hope remain guarded by fractured remnants of a force of light that used to rule over all of Veilmora before corruption, conspiracies, and greed contributed to its downfall. This force made up of Houses Steel, Raven, and Cloud were referred to as the Bright Trinity before the fall. Houses Raven and Cloud have completely been taken over by Syther and Mordom respectively, with anyone believed or even suspected of having current & previous loyalty to Raven or Cloud executed immediately. House Steel, known for their battle prowess throughout history, is the last remaining stronghold for good, but with the constant assault from both House Syther and Mordom, hope is fading fast!",
        "storyLine",
        10,
        () => {
            // Show next button and fade it in
            nextBtn.style.display = "block";
            nextBtn.style.opacity = 0;

            // Use CSS transition for the fade
            setTimeout(() => {
                nextBtn.style.opacity = 1;
            }, 10);

            // Reassign button functions AFTER fade starts
            buttonOne.innerText = "";
            buttonTwo.innerText = "";

            nextBtn.onclick = () => {
                nextBtn.style.display = "none";
                buttonOne.style.display = "none";
                buttonTwo.style.display = "none";
                welcomeToVeilmora();
            };
            buttonOne.onclick = () => {
                nextBtn.style.display = "none";
                buttonOne.style.display = "none";
                buttonTwo.style.display = "none";
                dio2();
            };
            buttonTwo.onclick = () => {
                nextBtn.style.display = "none";
                buttonOne.style.display = "none";
                buttonTwo.style.display = "none";
                dio2();
            };
        }
    );
}


function welcomeToVeilmora() {
    typeWriter("This, young hero, is where our story begins....Welcome to Veilmora...", 70, () => {
        //buttons fade in
        nextBtn.style.opacity = 0;
        buttonOne.style.opacity = 0;
        buttonTwo.style.opacity = 0;

        nextBtn.style.display = "block";
        buttonOne.style.display = "none";
        buttonTwo.style.display = "none";

        nextBtn.style.transition = "opacity 11s ease"
        buttonOne.style.transition = "opacity 11s ease"
        buttonTwo.style.transition = "opacity 11s ease"

        setTimeout(() => {
            nextBtn.style.opacity = 1;
            buttonOne.style.opacity = 1;
            buttonTwo.style.opacity = 1;
        }, 10);
    });

    buttonOne.innerText = "";
    buttonTwo.innerText = "";
    nextBtn.onclick = () => {
        nextBtn.style.display = "none"
    buttonOne.style.display = "none"
    buttonTwo.style.display = "none"
    chooseBackground();
    };
    buttonOne.onclick = () => {
        nextBtn.style.display = "none"
    buttonOne.style.display = "none"
    buttonTwo.style.display = "none"
    dio2();
    };
    buttonTwo.onclick = () => {
        nextBtn.style.display = "none"
    buttonOne.style.display = "none"
    buttonTwo.style.display = "none"
    dio2();
    };
}


