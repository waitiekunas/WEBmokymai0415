var fakerecipes = [
    {
        "id": 1,
        "Name": "First recipe",
        "Ingredients": ["salt", "pepper", "sugar", "meat"],
        "Flow": "Some random text"
    },
    {
        "id": 2,
        "Name": "Second recipe",
        "Ingredients": ["salt", "pepper", "sugar", "fish"],
        "Flow": "Some random text"
    },
    {
        "id": 3,
        "Name": "Third recipe",
        "Ingredients": ["salt", "pepper", "sugar"],
        "Flow": "Some random text"
    }
];

var fakeUser = [
    {
        "id": 1,
        "Login": "login1",
        "Password": "Password1"
    },
    {
        "id": 2,
        "Login": "login2",
        "Password": "Password2"
    },
    {
        "id": 3,
        "Login": "login3",
        "Password": "Password3"
    }

];



function signIn() {
    let login = document.getElementById('login-name-input').value;
    let password = document.getElementById('password-input').value;
    checkExisting(login, password, fakeUser);
};

function checkExisting(login, password, data) {
    data.forEach(user => {
        if (user.Login === login && user.Password === password) {
            console.log("match found");
        } else {
            console.log("no match found");
        }
    })
}

function listEntries(entries) {
    var counter = 1;
    entries.forEach(element => {
        console.log(element);

        let parentNode = document.createElement('DIV');
        parentNode.setAttribute('id', counter);
        parentNode.classList.add('main-recipe');

        let pictureNode = document.createElement('IMG');
        pictureNode.setAttribute('src', 'images/' + counter + '.jpg');
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
