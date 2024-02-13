
function newCard(){
  var textDisplay = document.getElementById("textDisplay");
  var letterDisplay = document.getElementById("letterDisplay");

  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('messageCheckbox');

  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }

  if(checkedValue == "on"){

    //Allow Repeat Cards
    r = randNum(CARDS.length);
    selectedCard = CARDS[r];

    displayText = selectedCard.text;
    displayLetter = "Letter: " + selectedCard.letter;

  } else {
    //Deny Repeat Cards

    r = randNum(lng);

    //update display
    if(lng > 0){
      selectedCard = cardsu[r];

      displayText = selectedCard.text;
      displayLetter = selectedCard.letter;

    } else displayText = "Out of Cards!";

    //remove selected card and shift remaining forward
    for(i = r; i < lng; i++){
      cardsu[i] = cardsu[i + 1];
    }
    lng--;
  }

  textDisplay.innerHTML = displayText;
  letterDisplay.innerHTML = displayLetter;
  
}

function randNum(max){
  return Math.floor((Math.random() * max));
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
