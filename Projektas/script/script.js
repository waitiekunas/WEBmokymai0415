
var fakerecipes = [
    {
        "id": 1,
        "Name": "First recipe",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    },
    {
        "id": 2,
        "Name": "Second recipe",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    },
    {
        "id": 3,
        "Name": "Third recipe",
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
        parentNode.classList.add('main-recipe');

        let pictureNode = document.createElement('IMG');
        pictureNode.setAttribute('src', 'images/'+counter+'.jpg');
        pictureNode.classList.add('img-recipe')

        let node = document.createElement("P");
        let textnode = document.createTextNode(element.Name);
        node.appendChild(textnode);

        document.getElementById("recipes").appendChild(parentNode);
        document.getElementById(counter).appendChild(pictureNode);
        document.getElementById(counter).appendChild(node);
        counter++;
    });
}

listEntries(fakerecipes);
