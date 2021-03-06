<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food-book</title>
    <link rel="stylesheet" type="text/css" href="style/style.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</head>
<!-- https://blog.hubspot.com/marketing/best-website-designs-list  no.13 design idea-->

<body>
    <div class='wrapper'>
        <div id="login-container">
            <div id="header">
                <h1>Welcome to FoodAlley!</h1>

            </div>
            <div id="login-buttons">
                <a href="#" class="myButton" id="sign-in-button" onclick="showSignIn()">Sign In</a>
                <span>or</span>
                <a href="#" class="myButton" id="sign-up-button" onclick="showSignUp()">Sign Up</a>
            </div>
        </div>

        <div class="input-fields">
            <div class='fields'>
                <form>
                    <label for="inp" class="inp">
                        <input type="text" id="login-name-input" placeholder="Login name">
                        <span class="border"></span>
                    </label>
                    <label for="inp" class="inp">
                        <input type="password" id="password-input" placeholder="Password">
                        <span class="border"></span>
                    </label>
                    <label for="inp" class="inp" id="email">
                        <input type="email" id="password-input" placeholder="Email">
                        <span class="border"></span>
                    </label>
                </form>
            </div>
            <div class='button'>
                <a href="#" class="myButton" id="ok-button" onclick="">Ok</a>
            </div>
        </div>

        <div class='container' id='container'>
            <div class='container-header'>
                <div class='button log-out'>
                    <a href="#" class="myButton" id="log-out" onclick="logOut()">Log out</a>
                </div>
            </div>
            <div class='container-body'>
                <div class='container-left'>
                    <div class='button'>
                        <a href="#" class="myButton" id="show-recipe-form" onclick="showRecipeForm()">Post recipe!</a>
                    </div>
                </div>
                <div id='recipes' class='container-content'>

                </div>
            </div>

        </div>
        <div id='enter-recipe-container' style="display:none">
            <div id='enter-recipe-form'>
                <div id='recipe-form'>
                    <div class='recipe-form-items' id='dish-name'>
                        <label for="inp" class="inp">Recipe name</label>
                        <input type="text" value='inp' id="login-name-input" placeholder="Recipe name">
                    </div>
                    <div class='recipe-form-items' id='dish-ingredients'>
                        <div id="ingredients" style="display:none">
                            <ul id="ingredients-listing">

                            </ul>
                        </div>
                        <div class='ing'>
                                <label class='ing-lbl' for="ing" class="inp">Ingredients</label>
                                <div id='recipe-inputs'>
                                        <input type="text" value='ing' id="ingredients-input" placeholder="Name">
                                        <input type="text" value='ing' id="qtty-input" placeholder="Quantity">
                                </div>
                        </div>
                        <a href="#" class="myButton" id="add-ingredient" onclick="addIngredient()">Add</a>
                        <a href="#" class="myButton" id="remove-ingredient" onclick="removeIngredient()">Remove</a>
                    </div>
                    <div class='recipe-form-items' id='dish-flow'>
                        <div class='ing'>
                        <label class='ing-lbl' for="flow" class="inp" style="margin-top: 0px;">Ingredients</label>
                        <textarea type="text" value='flow' id="flow-input" placeholder="Recipe"></textarea>
                    </div>
                    </div>
                </div>
                <div id='dish-submit'>
                    <a href="#" class="myButton" id="show-recipe-form" onclick="postRecipe()">Post!</a>
                </div>
            </div>
        </div>

    </div>
    <script type="text/javascript" src="script/script.js"></script>
</body>

</html>