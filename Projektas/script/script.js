var fakerecipes = [
    {
        "id": 1,
        "Name": "First recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon",
            "meat": "200 g."
        },
        "Flow": "Some random text"
    },
    {
        "id": 2,
        "Name": "Second recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon",
            "fish": "200 g."
        },
        "Flow": "Some random text"
    },
    {
        "id": 3,
        "Name": "Third recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon"
        },
        "Flow": "Some random text"
    },
    {
        "id": 4,
        "Name": "First recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon",
            "meat": "200 g."
        },
        "Flow": "Some random text"
    },
    {
        "id": 5,
        "Name": "Second recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon",
            "fish": "200 g."
        },
        "Flow": "Some random text"
    },
    {
        "id": 6,
        "Name": "Third recipe",
        "Quantities": {
            "salt": "2 tea spoons",
            "pepper": "1 tea spoon",
            "sugar": "1 spoon"
        },
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
var currentUserId = 0;

function signInDB() {
    let result;
    $.ajax({
        url: "db-connections/signIn.php",
        type: 'get',
        async: false,
        success: function (output) {
            console.log(output);
            result = returnJson(output)
        }
    });
    console.log(result);
    return result;
};

function getRecepies() {
    let result;
    $.ajax({
        url: "db-connections/getRecepies.php",
        type: 'get',
        async: false,
        success: function (output) {
            console.log(output);
            result = returnJson(output)
        }
    });
    console.log(result);
    return result;
};

function getIngredients() {
    let result;
    $.ajax({
        url: "db-connections/getIngredients.php",
        type: 'get',
        async: false,
        success: function (output) {
            console.log(output);
            result = returnJson(output)
        }
    });
    console.log(result);
    return result;
};

function returnJson(res) {
    let response = res;
    response = response.substr(1);
    response = response.substr(0, response.length - 1);
    console.log(response);
    return JSON.parse(response);
}

function signIn() {
    let login = document.getElementById('login-name-input').value;
    let password = document.getElementById('password-input').value;
    showPage(checkExisting(login, password, signInDB()));
    listEntries(getRecepies());
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
        if (user.LOGIN === login && user.PASSWORD === password) {
            isLoggedIn = true;
            currentUserId = user.ID;
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
        if (element) {
            let parentNode = document.createElement('DIV');
            parentNode.setAttribute('id', counter);
            parentNode.classList.add('main-recipe');

            let pictureNode = document.createElement('IMG');
            pictureNode.setAttribute('src', 'images/' + 1 + '.jpg');
            pictureNode.classList.add('img-recipe')

            let contentNode = document.createElement("DIV");
            contentNode.setAttribute('class', 'main-recipe-child-div');

            let recipeName = document.createElement("P");
            let textnode = document.createTextNode(element["Name"]);

            let authorName = document.createElement("P");
            let authorNode = document.createTextNode("Author");

            let buttonDiv = document.createElement("DIV");
            buttonDiv.setAttribute('class', 'recipe-button-div');

            let likeButton = document.createElement("A");
            likeButton.setAttribute('href', '#');
            likeButton.setAttribute('class', 'myButton likeButton');
            likeButton.setAttribute('id', 'likeButton: ' + counter);
            likeButton.setAttribute('onclick', 'like()');

            let likeText = document.createTextNode("Like");
            likeButton.appendChild(likeText);

            let disLikeButton = document.createElement("A");
            disLikeButton.setAttribute('href', '#');
            disLikeButton.setAttribute('class', 'myButton disLikeButton');
            disLikeButton.setAttribute('id', 'disLikeButton: ' + counter);
            disLikeButton.setAttribute('onclick', 'disLike()');

            let disLikeText = document.createTextNode("Dislike");
            disLikeButton.appendChild(disLikeText);

            buttonDiv.appendChild(likeButton);
            buttonDiv.appendChild(disLikeButton);

            contentNode.appendChild(recipeName);
            recipeName.appendChild(textnode);

            contentNode.appendChild(authorName);
            authorName.appendChild(authorNode);

            contentNode.appendChild(buttonDiv);

            contentNode.appendChild(returnAccordion(element, getIngredients()));


            document.getElementById("recipes").appendChild(parentNode);
            document.getElementById(counter).appendChild(pictureNode);
            document.getElementById(counter).appendChild(contentNode);
            counter++;
        }
    });
}

function returnAccordion(obj, ingredients) {
    
    let accordionNode = document.createElement("DIV");
    accordionNode.setAttribute('class', 'accordion-div');

    let accBtn = document.createElement("BUTTON");
    accBtn.setAttribute('class', 'accordion');
    accBtn.setAttribute('onClick', 'accord()');
    let btnText = document.createTextNode("See Recepi");
    accBtn.appendChild(btnText);

    let accDiv = document.createElement("DIV");
    accDiv.setAttribute('class', 'panel');

    let accP = document.createElement("P");
    let pText = document.createTextNode(obj["Flow"]);
    accP.appendChild(pText);

    let accList = returnAccList(obj, ingredients);

    accDiv.appendChild(accList);
    accDiv.appendChild(accP);

    accordionNode.appendChild(accBtn);
    accordionNode.appendChild(accDiv);

    return accordionNode;
};

function returnAccList(obj, ing) {
    let listDiv = document.createElement("DIV");
    listDiv.setAttribute("class", "list-div");

    let listUl = document.createElement("UL");
    listDiv.appendChild(listUl);

    ing.forEach(key => {
        if(obj["ID"]===key["foreignId"]){
        let listLi = document.createElement("LI");
        let listText = document.createTextNode(key["ingredient"] + ": " + key["quantity"]);

        listLi.appendChild(listText);

        listUl.appendChild(listLi);
        }
    })

    return listDiv;
}



function showSignIn() {
    console.log(document.getElementsByClassName('input-fields')[0].style)
    if (document.getElementsByClassName('input-fields')[0].style === 'display: flex') {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: none');
    } else {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: flex');
        document.getElementById('email').setAttribute('style', 'display: none');
        document.getElementById('ok-button').setAttribute('onclick', 'signIn()');
    }
};

function showSignUp() {
    if (document.getElementsByClassName('input-fields')[0].style === 'display: flex') {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: none');
    } else {
        document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display: flex');
        document.getElementById('email').setAttribute('style', 'display: table-caption');
        document.getElementById('ok-button').setAttribute('onclick', 'signUp()');
    }
};

function logOut() {
    document.getElementById('login-container').setAttribute('style', 'display:flex;');
    document.getElementById('login-container').setAttribute('style', 'flex-direction:column;');
    document.getElementsByClassName('input-fields')[0].setAttribute('style', 'display:none;');
    document.getElementsByClassName('wrapper')[0].setAttribute('style', 'flex-direction:column;');
    document.getElementById('container').setAttribute('style', 'display:none;');
};

function showRecipeForm() {
    document.getElementById('enter-recipe-container').setAttribute('style', 'display:flex;');
    document.getElementById('enter-recipe-container').setAttribute('style', 'z-index: 10000;');

};

function hideRecipeForm() {
    document.getElementById('enter-recipe-container').setAttribute('style', 'z-index: 0;');
    document.getElementById('enter-recipe-container').setAttribute('style', 'display:none;');
};

function postRecipe() {
    hideRecipeForm();
};
//add recipe



function accord (){
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}};