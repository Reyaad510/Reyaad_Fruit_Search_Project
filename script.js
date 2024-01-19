const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  // Filter through fruits array
  fruits.filter((fruit) => {
    // Set user input and fruits to lowercase for easy comparision
    const lowerCaseFruit = fruit.toLowerCase();
    const lowerCaseString = str.toLowerCase();

    // if fruit includes any letters with what the user types it will push the results in the results array to be displayed
    if (lowerCaseFruit.includes(lowerCaseString)) {
      results.push(fruit);
    }
  });
  return results;
}

// Store input value and results from search function to pass into showSuggestions function
function searchHandler(e) {
  let inputVal = e.target.value;
  let results = search(inputVal);
  showSuggestions(results, inputVal);
}

// Display filtered fruits in the UI
function showSuggestions(results, inputVal) {
  suggestions.innerHTML = "";

  results.forEach((result) => {
    const fruitUI = document.createElement("li");
    //  This results in a string where the matching part is visually highlighted (bolded) when displayed in the suggestions list.
    // .replace() replaces matching part of "result" with bolded version
    const boldedResult = result.replace(
      // creates reg expression based on inputVal. "G" for global, "i" for case-insensitive
      new RegExp(inputVal, "gi"),
      // wraps matched inputVal with strong tag to bold it
      (match) => `<strong>${match}</strong>`
    );
    fruitUI.innerHTML = boldedResult;
    suggestions.append(fruitUI);
  });
  // if inputVal is empty then make sure no fruits are displayed in the UI
  if (!inputVal) {
    suggestions.innerHTML = "";
  }
}

// When user clicks on a fruit from the dropdown it fills the search bar with the fruit name and clears the dropdown menu
function useSuggestion(e) {
  input.value = e.target.innerText;
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
