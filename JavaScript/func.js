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

  if (stinkyCheck) cardsu = cardsu.filter(card => !card.stinky);
  if (!allowRepeats) cardsu = cardsu.filter(card => !card.drawn);

  updaetDisplay();
}

function resetCards(){
  cardsu = CDS;
  updaetDisplay();
}

function newCard(){
  var display = document.getElementById("display");
  var textDisplay = document.getElementById("textDisplay");
  var letterDisplay = document.getElementById("letterDisplay");

  display.style.display = "block";

  //r = 0;
  r = randNum(cardsu.length);
  selectedCard = cardsu[r];
  selectedCard.drawn = true;

  //update display
  textDisplay.innerHTML = selectedCard.text;
  letterDisplay.innerHTML = "Letter: " + selectedCard.letter;
    console.log(cardsu[r].drawn);

  filterList();
  updaetDisplay();
}
function randNum(max){
  return Math.floor((Math.random() * max));
}
function updaetDisplay(){
    
    var listItems = "";
    for (var i = 0; i < cardsu.length; i++) {
        listItems += "<li><a href='#'>" + cardsu[i].text + "</a></li>";
    }

    var ul = document.getElementById('myUL');
    ul.innerHTML = "";
    ul.innerHTML += listItems;
 
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


function searchList() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

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
