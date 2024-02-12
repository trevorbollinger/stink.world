
var ll;

var lns;

fetch('data/cards.txt')
.then(response => response.text())
.then(data => {
    var ll = data.split(/\r?\n/);
    var listItems = "";

    for (var i = 0; i < ll.length; i++) {
        listItems += "<li><a href='#'>" + ll[i] + "</a></li>";
    }

    // Get the unordered list element by its id
    var ul = document.getElementById('myUL');

    // Add the new list items to the existing unordered list


    LINES = ll;
    lns = ll;

    lng = lns.length;

    ul.innerHTML += listItems;
    console.log(ll[4]);
})
.catch(error => console.error('Error:', error));

