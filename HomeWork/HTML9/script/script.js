var ourArray = ['audi', 'bmw', 'lada'];
var text = '';
var i = 0;
var insertedValue = '';
var color = 'style=\"color:red\">'
var counter=0;

function add() {
    var overOrderedColor = 'black';
    insertedValue = prompt('Please enter car model');

    if (counter < 4) {
        ourArray.push(insertedValue + ' ' + counter);
        counter++;
    }



    text += '<ul>';

    for (i = 0; i < ourArray.length; i++) {
        //        if(i>4){
        //             text += '<li ' + color + ourArray[i] + '</li>';
        //        } else {
        //             text += '<li>' + ourArray[i] + '</li>';
        //        }

        if (i > 4) {
            overOrderedColor = 'red';
        }
        text += '<li style=\"color: ' + overOrderedColor + ';\"' +
            '>' + ourArray[i] + '</li>';
    }

    text += '</ul>';
    document.getElementById('info').innerHTML = text;
    text = '';
};
