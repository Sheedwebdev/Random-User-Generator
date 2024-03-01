// Part1: Declare varables for selecting elements on your page
const selectUserNumber = document.querySelector("#users"); //step1: Create variable for selecting the element the causes the change 
const randomFolks = document.querySelector(".random-peeps"); //step2: Create a variable for selecting the element that displays the change 

// Part2: Create an asyncronous function (main function) for retrieving, interpreting, and making use of data
const getData = async function (numUsers) { //step3: Declare a variable for your asyncronous fucntion
  const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`); //step4: Retrieve the data from the json file
  const data = await usersRequest.json(); //step5: Interpret the json data into js data
  const userResults = data.results; //step6: Declare a variable to repesent an array of objects 

  displayUsers(userResults); // step16: Call or run the display function using the array of objects as an argument
};

getData(1); //step20:  Call the async funtion using 1 as the argument as a default value

// Part3: Create a function that displays the data you want displayed (supporting function)
const displayUsers = function (userResults) { //step7: Create a function expression using the array of objects as a parameter
  randomFolks.innerHTML = ""; //step8: Clear all html elements before the program in ran or called

  for (const user of userResults) { //step9: Loop through each object in the array of objects
    const country = user.location.country;  //step10: Declare a variable for the user's country
    const name = user.name.first; //step11: Declare a variable for the user's name
    const imageUrl = user.picture.medium; //step12: Declare a variable for user's image
    const userDiv = document.createElement("div"); //step13: Declare a variable for creating a div element
    userDiv.innerHTML = ` 
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `; //step14: Write the name, country, and image inside that userDiv division 
    randomFolks.append(userDiv); //step15: Add the userDiv division to the parent randomFolks div
  }
};

// Part 4: Add an event listener to change the drop down menu options when the async function is called
selectUserNumber.addEventListener("change", function (e) {  //step:17 Apply an event listener function to change the drop-down options
  const numUsers = e.target.value; //step18: Declare a variable allows users to target the option value they want 
  getData(numUsers); //step19: Call or run the async funtion using the number of users as the parameter
}); 


