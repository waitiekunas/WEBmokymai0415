
var fakeReceips = [
    {
        "id": 1,
        "Name": "First receip",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    },
    {
        "id": 2,
        "Name": "Second receip",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    },
    {
        "id": 3,
        "Name": "Third receip",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    }
];

function listEntries(entries) {
    var counter = 1;
    entries.forEach(element => {
        console.log(element);

        let parentNode = document.createElement('DIV');
        parentNode.setAttribute('id', counter);
        parentNode.classList.add('main-receip');

        let pictureNode = document.createElement('IMG');
        pictureNode.setAttribute('src', 'images/1.jpg');
        pictureNode.classList.add('img-receip')

        let node = document.createElement("P");
        let textnode = document.createTextNode(element.Name);
        node.appendChild(textnode);

        document.getElementById("receips").appendChild(parentNode);
        document.getElementById(counter).appendChild(pictureNode);
        document.getElementById(counter).appendChild(node);
        counter++;
    });
}

listEntries(fakeReceips);
