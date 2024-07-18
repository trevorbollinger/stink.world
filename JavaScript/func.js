function toggleCollapsibleSection() {
  var section = document.getElementById("myCollapsibleSection");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

function filterList() {
  cardsu = CDS;
  allowRepeats = repeatCB.checked;
  stinkyCheck = stinkyCB.checked;

  if (stinkyCheck) cardsu = cardsu.filter((card) => !card.stinky);
  if (!allowRepeats) cardsu = cardsu.filter((card) => !card.drawn);

  updaetDisplay();
}

function resetCards() {
  cardsu = CDS;
  updaetDisplay();
}

function drawCards() {
  var display = document.getElementById("display");
  var numDivs = parseInt(document.getElementById("numDivs").value);

  display.style.display = "block";
  display.innerHTML = ""; // Clear previous divs

  for (var i = 1; i <= numDivs; i++) {
    // Dynamically create card elements
    var card = document.createElement("div");
    var arrowContainer = document.createElement("div");
    var rsContainer = document.createElement("div");
    var upArrow = document.createElement("span");
    var downArrow = document.createElement("span");
    var refreshButton = document.createElement("button"); // New refresh button
    var displayContainer = document.createElement("div");
    var textDisplay = document.createElement("h3");
    var letterDisplay = document.createElement("h5");

    // Set class names for elements
    card.className = "card";
    arrowContainer.className = "arrow-container";
    rsContainer.className = "rs-container";
    upArrow.className = "arrow";
    downArrow.className = "arrow";
    refreshButton.className = "refresh"; // New refresh button class
    displayContainer.className = "display-container";
    textDisplay.className = "textDisplay";
    letterDisplay.className = "letterDisplay";

    // Set arrow and refresh button text content
    upArrow.textContent = "↑";
    downArrow.textContent = "↓";
    refreshButton.textContent = "↻"; // New refresh button text

    // Set arrow and refresh button onclick handlers
    upArrow.onclick = createMoveUpFunction(card);
    downArrow.onclick = createMoveDownFunction(card);
    refreshButton.onclick = createRefreshFunction(
      card,
      textDisplay,
      letterDisplay,
    ); // New refresh button onclick handler

    // Select card
    var r = randNum(cardsu.length);
    var selectedCard = cardsu[r];
    selectedCard.drawn = true;
    filterList();

    // Set text display content
    textDisplay.innerHTML = selectedCard.text;

    // Set letter display content
    letterDisplay.innerHTML = "Letter: " + selectedCard.letter;

    // Append elements to their containers
    arrowContainer.appendChild(upArrow);
    arrowContainer.appendChild(downArrow);
    rsContainer.appendChild(refreshButton); // Append refresh button to arrow container
    displayContainer.appendChild(textDisplay);
    displayContainer.appendChild(letterDisplay);

    // Append containers to card
    card.appendChild(arrowContainer);
    card.appendChild(displayContainer);
    card.appendChild(rsContainer);

    // Append card to display
    display.appendChild(card);
  }

  updaetDisplay();
}

function createRefreshFunction(card, textDisplay, letterDisplay) {
  return function () {
    var r = randNum(cardsu.length);
    var selectedCard = cardsu[r];
    selectedCard.drawn = true;
    filterList();

    // Update text display content
    textDisplay.innerHTML = selectedCard.text;

    // Update letter display content
    letterDisplay.innerHTML = "Letter: " + selectedCard.letter;
  };
}

function createMoveUpFunction(item) {
  return function () {
    if (item.previousElementSibling) {
      item.parentNode.insertBefore(item, item.previousElementSibling);
    }
  };
}

function createMoveDownFunction(item) {
  return function () {
    if (item.nextElementSibling) {
      item.parentNode.insertBefore(item.nextElementSibling, item);
    }
  };
}

function randNum(max) {
  return Math.floor(Math.random() * max);
}

function updaetDisplay() {
  var listItems = "";
  for (var i = 0; i < cardsu.length; i++) {
    listItems += "<li><a href='#'>" + cardsu[i].text + "</a></li>";
  }

  var ul = document.getElementById("myUL");
  ul.innerHTML = "";
  ul.innerHTML += listItems;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function searchList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
