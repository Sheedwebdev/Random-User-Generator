// Part1: Declare varables for selecting elements on your page
const randomFolks = document.querySelector(".random-peeps"); //step1: Create variable for selecting the random-peeps class div
const selectUserNumber = document.querySelector("#users");

// Part2: Declare a variable for your asynchronous function (main function)
const getData = async function (numUsers) {
  const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
  const data = await usersRequest.json();
  const userResults = data.results; //Array of objects //  Don't understand this line of code???  Where did <results> come from???

  displayUsers(userResults);
};

getData(1);

// Part3: Create a function to display the users (supporting function)
const displayUsers = function (userResults) {
  randomFolks.innerHTML = ""; 

  for (const user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
    `;
    randomFolks.append(userDiv);
  }
};

selectUserNumber.addEventListener("change", function (e) {
  const numUsers = e.target.value;
  getData(numUsers);
}); 


