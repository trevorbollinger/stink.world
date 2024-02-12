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




function newCard(){
  var display = document.getElementById("randButton");


  var checkedValue = null; 
  var inputElements = document.getElementsByClassName('messageCheckbox');
  for(var i=0; inputElements[i]; ++i){
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
           break;
      }
  }


  if(checkedValue == "on"){
    // console.log("unique");

    r = randNum(lng);

    selectedWord = lns[r];

    for(i = r; i < lng; i++){
      lns[i] = lns[i + 1];
    }

    lng--;


  } else {
    selectedWord = LINES[randNum(LINES.length)];
  }



  display.innerHTML = selectedWord;


  // for(j = 0; j < lng; j++){
  //   console.log(lns[j]);
  // }


}

function randNum(max){
  return Math.floor((Math.random() * max));
}