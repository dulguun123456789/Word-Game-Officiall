alert("You are really hungry.");

var st = prompt("What do you want to do?\n1. Look at the fridge\n2. Do something else");

if (st === "1") {
  alert("You walk over to the fridge...");
  alert("You open the fridge and see a chicken and cake.");

  var fridgeChoice = prompt("What will you do?\n1. Eat the chicken\n2. Eat the cake");

  if (fridgeChoice === "1") {
    alert("You ate the chicken! It was delicious. 😋");
    alert("Wait a minute!!");
    alert("IT WAS ROTTEN CHICKEN?!");
    alert("Holy shit, my stomach 🥴");

    var stomach = prompt("What will you do?\n1. Go to the pharmacy 🏥\n2. Find something in your house 💊");

    if (stomach === "1") {
      alert("You went outside.");
      alert("Your stomach is still hurting.");
      var outside = prompt("What will you do?\n1. Nearest pharmacy\n2. Expensive pharmacy");

      if (outside === "1") {
        alert("You went to the nearest pharmacy.");
        alert("You asked the pharmacist.");
        alert("YOU: Pharmacist, please help me, my stomach is killing me 😵");
        alert("Pharmacist: We are moving out, we don't have ANY medicine.");
        alert("You cried really bad.");
        alert("You are dying.");

        var death = prompt("What will you do?\n1. Go to the next pharmacy as fast as you can\n2. Beg for God");

        if (death === "1") {
          alert("You are running really fast but...");
          alert("You died from stomachache 💀");
        }

        if (death === "2") {
          alert("Pharmacist: Wait a second, I found something in my pocket.");
          alert("But that is a special drink. It is not a medicine.");
          alert("It is Unicorn pee 🦄.");

          var pee = prompt("Would you drink it?\n1. Drink\n2. Don't drink");

          if (pee === "1") {
            alert("You drank it.");
            alert("Now you are immortal.");
            alert("BUT!!");
            alert("YOU ARE A UNICORN NOW 🤣");
            alert("Normal Ending 1");
          }

          if (pee === "2") {
            alert("You didn't drink because of your arrogance.");
            alert("Hey?");
            alert("Your stomach is not hurting now?");
            alert("Naah, something happening to your stomach...");
            alert("BOOM!!");
            alert("Big explosion.");
            alert("You died 💀");
          }
        }
      }

      if (outside === "2") {
        alert("You went to the expensive pharmacy.");
        alert("You went inside.");
        alert("It is just so big and clean.");

        alert("You saw a man standing in front of you.");
        alert("YOU: I NEED ONLY ONE STOMACH MEDICINE!");

        alert("Pharmacist: What type are you looking for?");
        alert("Big or small or medium or strong one or weak one or...");
        alert("BROO, just give me a stomach medicine, whatever you want 😭");

        alert("Pharmacist: Alright.");

        var medicine = prompt("What would you choose?\n1. The strong one\n2. The cheap one");

        if (medicine === "1") {
          alert("Pharmacist: This one will be $1000.");
          alert("Whaat?!");
          alert("I can't afford that, I'm broke AF 😭");
          alert("Pharmacist: THEN GET OUT OF HERE!!");
          alert("Your stomach is still hurting so bad and you just left the pharmacy.");

          var leftthepharmacy = prompt("While leaving the pharmacy, you saw something on the dirt. What will you do?\n1. Dig that thing out\n2. Ignore it");

          if (leftthepharmacy === "1") {
            alert("You dig that shiny thing.");
            alert("And you finally finished digging.");
            alert("Then you saw the thing that was...");
            alert("WAIT?!");
            alert("That is stomach medicine!");

            var findthestomach = prompt("What will you do?\n1. Use that pill\n2. Other option");

            if (findthestomach === "1") {
              alert("You took that pill and used it.");
              alert("BUT!");
              alert("It was dirty, so...");
              alert("You died 💀");
            }

            if (findthestomach === "2") {
              alert("That pill was a little dirty, so...");
              alert("You wanted to wash the pill first.");

              var washpill = prompt("What will you do?\n1. Wash it in the river\n2. Wash it at your home");

              if (washpill === "1") {
                alert("You washed that pill in the river.");
                alert("Guess what?");
                alert("That river was Tuul River.");
                alert("That river was really polluted.");
                alert("And you died 💀 because of pollution.");
              }//wash pill 1

              if (washpill === "2") {
                alert("With great patience,");
                alert("You finally came home.");
                alert("Then you washed the pill.");
                alert("And used it.");
                alert("You are now cured!");
                alert("Happy Ending 2 🎉");
              }//wash pill 2
            }
          }

          if (leftthepharmacy === "2") {
            alert("You ignored it and kept suffering...");
            alert("Your stomach pain got worse.");
            alert("You sat down under the nice big apartment")
            alert("You cried really hard and tell it ")
            alert("Why Life Is So Hard")
            alert("At that moment: Something coming from sky ")
            alert("You look up and tells what is that ?")
            alert("It was plant pot")
            alert("Maybe someone pushed accidently  ")
            alert("Maybe it was God's gift")
            alert("You collapsed and died 💀");
          }
        }

        if (medicine === "2") {
          alert("Pharmacist: Here is the cheap one.");
          alert("You bought it and drank it.");
          alert("Now your stomach is fine 🎉");
          alert("Happy Ending 1!");
        }
      }
    }

    if (stomach === "2") {
      alert("You decided to find something from your house");
      var side = prompt("What will you choose \n1. Pharmacy side  \n2. Food  ")
      if(side==="1"){

      }//room1
    }//stomach2

  } else if (fridgeChoice === "2") {
    alert("You ate the cake instead.");
    alert("It was so sweet and nice! 🎂");
    alert("You are full and happy!");
    alert("Good Ending!");
  }

} else {
  alert("You decided to do something else... but you're still super hungry! 🥴");
}
