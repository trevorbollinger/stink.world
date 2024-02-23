var rawtext, lns, lng, CDS, CARDS, cardsu;

class Card {
    constructor(text, part, stinky) {
        var priorities = ['P', 'R', 'I', 'O', 'R', 'I', 'T', 'I', 'E', 'S'];

        this.text = text;
        this.part = part;
        this.stinky = stinky;
        this.drawn = false;
        this.letter = priorities[randNum(priorities.length)];
    }
}

//GOOGLE SHEETS FILE
fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQHsbDxDbKjhJZiTr_0l7Khb-Tn22VOO3aTBfoVdmAgT-bzP-l_2DOAnqSWabhXDjw90AT8L9fVURrj/pub?gid=817858363&single=true&output=csv')
.then(response => response.text())
.then(data => {
    var workbook = XLSX.read(data, {type: 'binary'});
    var sheet_name_list = workbook.SheetNames;
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

    CDS = []; //original object array

    xlData.forEach(function(row) {
        //insert row.text into objects
        CDS.push(new Card(row.text, row.part, row.stinky));
    });

    shuffle(CDS);

    //clone origin array
    cardsu = CDS; //Unique cards array, deny repeats
    
    var listItems = "";
    for (var i = 0; i < cardsu.length; i++) {
        listItems += "<li><a href='#'>" + cardsu[i].text + "</a></li>";
    }

    var ul = document.getElementById('myUL');
    ul.innerHTML = "";
    ul.innerHTML += listItems;


})
.catch(error => console.error('Error:', error));
