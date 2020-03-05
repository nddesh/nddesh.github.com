"use strict";

// listen for the submission of the form
var madlibs = document.getElementById("myform");
madlibs.addEventListener("submit", function(event){
    // prevent the default behavior
    event.preventDefault();

    // get all the text fields from the form
    const formData = document.querySelectorAll("input[type=text]");
    // create an array to hold values from the form
    const ingredients = [];

    //loop through the fields and add the words to the array, one at a time.
    for( let i=0; i<formData.length; i++){
        ingredients.push(formData[i].value);
    }
    //You can see the array in the console, if you want...
    console.log(ingredients);

    //run a function to put the words into the madlib... Function below...
    //Pass the array of words the user typed into the function
    makeMadLib(ingredients);

});

//This function takes an array input, then constructs the madlib, peppering
//in the user's words where necessary.
function makeMadLib(theWords){
    "use strict";

    const madlib = `I'm eating a sub with ${theWords[0]} bread, ${theWords[1]} cheese, ${theWords[2]}, ${theWords[3]}, ${theWords[4]}, with ${theWords[5]}, ${theWords[6]}, ${theWords[7]} sauce! It's so yummy!`;

    //Get the madlib container
    const mlContainer = document.getElementById('sandwich');

    //Change the guts of the container to your madlib
    mlContainer.innerHTML = `<p>${madlib}</p>`;

    //change the class on the madlib container so you can see it.
    mlContainer.setAttribute("class", "visible");
    document.getElementById("submit").value = `Scroll down!`;
    // var mlbutton = document.createElement("p");
    // var textnode = document.createTextNode("Scroll Down!");
    // mlbutton.appendChild(textnode);
    // madlibs.appendChild(mlbutton);
  }
