// ----- Elements -----
const storyLine = document.getElementById("storyLine");
const nextBtn = document.getElementById("next");
const buttonOne = document.getElementById("btnOne");
const buttonTwo = document.getElementById("btnTwo");
const picture = document.getElementById("image");
let playerClass = null;

// ----- Utility Functions -----
function typeWriter(text, elementId, speed = 50, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerText = ""; // clears paragraph before typing

  function typing() {
    if (i < text.length) {
      element.innerText += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if (callback) callback();
  }
  typing();
}

function setSceneImage(imagePath = "") {
  picture.src = imagePath;
}

function hideAllButtons() {
  nextBtn.style.display = "none";
  buttonOne.style.display = "none";
  buttonTwo.style.display = "none";
}

function fadeInElements(...elements) {
  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.display = "block";
    el.style.transition = "opacity 1s ease";
  });
  setTimeout(() => elements.forEach((el) => (el.style.opacity = 1)), 10);
}

function assignButtonActions(nextAction, oneAction, twoAction) {
  nextBtn.onclick = nextAction || (() => {});
  buttonOne.onclick = oneAction || (() => {});
  buttonTwo.onclick = twoAction || (() => {});
}

function playDialogue(dialogues, callback) {
  let index = 0;

  function nextLine() {
    if (index < dialogues.length) {
      const line = dialogues[index];
      if (line.decision) {
        // If it's a choice, show buttons
        fadeInElements(buttonOne, buttonTwo);
        buttonOne.innerText = line.options[0].text;
        buttonTwo.innerText = line.options[1].text;

        assignButtonActions(
          null,
          () => {
            hideAllButtons();
            line.options[0].action();
          },
          () => {
            hideAllButtons();
            line.options[1].action();
          }
        );
      } else {
        // Normal dialogue line
        typeWriter(`${line.speaker}: ${line.text}`, "storyLine", 30, () => {
          index++;
          nextLine();
        });
      }
    } else if (callback) callback();
  }

  hideAllButtons();
  nextLine();
}


// ----- Scene 1 -----
setSceneImage("");
typeWriter(
  "Welcome to Veilmora. In this world, violence and deception are, sadly, a common way of life. Born of eons of war, the current citizens of Veilmora can no longer recall what life was like before the endless bloodshed. Through these ceaseless conflicts, two families have risen above all others, becoming the principal players vying for control of the entire land. Tragically, both House Syther and House Mordom revel in the dark arts, and though their customs and beliefs may differ, their ultimate goal remains the same: COMPLETE CONTROL OVER LIFE AND FREEDOM.",
  "storyLine",
  10,
  () => fadeInElements(nextBtn)
);

assignButtonActions(() => dio2());

// ----- Scene 2 -----
function dio2() {
  setSceneImage("");
  hideAllButtons();

  typeWriter(
    "In this dark and disturbing reality, only a few areas of hope remain guarded by fractured remnants of a force of light that used to rule over all of Veilmora before corruption, conspiracies, and greed contributed to its downfall. This force made up of Houses Steel, Raven, and Cloud were referred to as the Bright Trinity before the fall. Houses Raven and Cloud have completely been taken over by Syther and Mordom respectively, with anyone believed or even suspected of having current & previous loyalty to Raven or Cloud executed immediately. House Steel, known for their battle prowess throughout history, is the last remaining stronghold for good, but with the constant assault from both House Syther and Mordom, hope is fading fast!",
    "storyLine",
    10,
    () => {
      fadeInElements(nextBtn);
      assignButtonActions(
        () => {
          hideAllButtons();
          welcomeToVeilmora();
        },
        () => {
          hideAllButtons();
          dio2();
        },
        () => {
          hideAllButtons();
          dio2();
        }
      );
    }
  );
}

// ----- Scene 3 -----
function welcomeToVeilmora() {
  setSceneImage("");
  typeWriter(
    "In a small village, on the outskirts of Castle Steel, a young boy by the name of Dante is living in a dilapidated shell of a home with his grandmother, Namko. The house itself is no more than one big room with Dante's straw bed and belongings on one side and his grandmother’s on the other. In the middle of the room, on the dirt floor lies a giant cooking cauldron, where the pair sit in wait for their humble squirrel stew to finish. This, young hero, is where our story begins. How it ends is entirely up to you...Welcome to Veilmora...",
    "storyLine",
    10,
    () => fadeInElements(nextBtn)
  );

  nextBtn.innerText = "START GAME";
  assignButtonActions(
    () => {
      hideAllButtons();
      chooseBackground();
    },
    () => {
      hideAllButtons();
      dio2();
    },
    () => {
      hideAllButtons();
      dio2();
    }
  );
}

// ----- Scene 4 -----
function chooseBackground() {
  setSceneImage("");
  hideAllButtons();

  typeWriter(
    "Please SELECT your BACKGROUND. You will still have control over every decision in the game but your background may affect some outcomes. For better or worse? Well, that’s for you to find out.",
    "storyLine",
    10,
    () => {
      fadeInElements(buttonOne, buttonTwo);
      buttonOne.innerText = "Fighter";
      buttonTwo.innerText = "Survivor";

      assignButtonActions(
        null,
        () => {
          playerClass = "Fighter";
          hideAllButtons();
          chooseClass();
        },
        () => {
          playerClass = "Survivor";
          hideAllButtons();
          chooseClass();
        }
      );
    }
  );
}

// ----- Scene 5 -----
function chooseClass() {
  hideAllButtons();

  const isFighter = playerClass === "Fighter";
  const text = isFighter
    ? "Since you were born all you know is War. Living on the outskirts of Castle Steel, you have known death, famine and cruelty your whole life. Having to fight for the meager scraps you call your own to survive, you have turned into a formidable fighter in your own right. Although still green behind the ears and knowing nothing of the horrors of bloody battle, everyone in these wretched slums cannot deny that you have an air of courage and bravery about you that is hard to match. You are a FIGHTER!"
    : "Ever since you can remember survival was in your DNA. Growing up in the slums of Castle Steel, you quickly came to realize that wits and silver tongue were leagues above the rest of your peers and always came through in sticky or desperate situations. Instead of fighting over supplies, you could convince others why you needed them most. Rather than using strength to get your way, you could get others to rally around your cause. You are a SURVIVOR!";

  typeWriter(text, "storyLine", 10, () => {
    fadeInElements(nextBtn);
    nextBtn.innerText = ">";

    assignButtonActions(
      () => {
        hideAllButtons();
        kitchenDio();
      },
      () => {
        hideAllButtons();
        dio2();
      },
      () => {
        hideAllButtons();
        dio2();
      }
    );
  });
}

// ----- Scene 6 -----
function kitchenDio() {
  setSceneImage("images/kitchen.png");

  const kitchenDialogues = [
    { speaker: "Dante", text: "Grandmother, the stew smells ready!" },
    { speaker: "Namko", text: "Patience, child. A good meal takes time." },
    { speaker: "Dante", text: "But I'm starving!" },
    { speaker: "Namko", text: "Then you must learn to wait. Hunger builds character." },
    {
      decision: true,
      options: [
        { text: "Sneak a taste", action: sneakTaste },
        { text: "Wait patiently", action: waitPatiently }
      ]
    }
  ];

  playDialogue(kitchenDialogues);
}

function sneakTaste() {
  setSceneImage("images/stew.png");
  const sneakDialogues = [
    { speaker: "Dante", text: "*sneaks a spoonful when Namko isn’t looking*" },
    { speaker: "Namko", text: "Dante! I saw that!" },
    { speaker: "Dante", text: "Sorry, grandmother!" }
  ];
  playDialogue(sneakDialogues, nextScene);
}

function waitPatiently() {
  setSceneImage("images/fireplace.png");
  const waitDialogues = [
    { speaker: "Dante", text: "I'll wait, grandmother." },
    { speaker: "Namko", text: "Good. Patience is a rare virtue these days." }
  ];
  playDialogue(waitDialogues, nextScene);
}

function nextScene() {
  typeWriter("The storm outside grows louder as you finish your meal...", "storyLine", 20, () => {
    fadeInElements(nextBtn);
    nextBtn.innerText = "Continue";
    assignButtonActions(() => {
      hideAllButtons();
      // go to next scene here
    });
  });
}

