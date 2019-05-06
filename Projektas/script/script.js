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
        "Login": "test",
        "Password": "test"
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
    showPage(checkExisting(login, password, fakeUser));
};

function showPage(bool) {
    if (bool) {
        document.getElementById('login-container').setAttribute('style', 'display:none;');
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display:none;');
        document.getElementsByClassName('wrapper')[0].setAttribute('style', 'flex-direction:initial;');
        document.getElementById('container').setAttribute('style', 'display:block;');

    }
};

function signUp() {
    let login = document.getElementById('login-name-input').value;
    let password = document.getElementById('password-input').value;
    let id = fakeUser.length + 1;
    fakeUser.push({
        "id": id,
        "Login": login,
        "Password": password
    });
    document.getElementById('login-name-input').value = ''
    document.getElementById('password-input').value = '';

}

function checkExisting(login, password, data) {
    let isLoggedIn = false;
    data.forEach(user => {
        if (user.Login === login && user.Password === password) {
            isLoggedIn = true;
        } else {
            console.log("no match found");
        }
    })
    return isLoggedIn;
}

function listEntries(entries) {
    let counter = 1;
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

function showSignIn() {
    console.log(document.getElementsByClassName('input-fields')[0].style)
    if (document.getElementsByClassName('input-fields')[0].style === 'display: flex') {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: none');
    } else {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: flex');
        document.getElementById('ok-button').setAttribute('onclick', 'signIn()');
    }
};

function showSignUp() {
    if (document.getElementsByClassName('input-fields')[0].style === 'display: flex') {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: none');
    } else {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: flex');
        document.getElementById('ok-button').setAttribute('onclick', 'signUp()');
    }
};



listEntries(fakerecipes);
