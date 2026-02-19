
function showFilter() {
    document.getElementById("filterContent").style.display = "block";
    document.getElementById("newContent").style.display = "none";
}


function showAddNew() {
    document.getElementById("newContent").style.display = "flex";
    document.getElementById("filterContent").style.display = "none";
}



function filterArticles() {

    var opinionChecked = document.getElementById("opinionCheckbox").checked;
    var recipeChecked = document.getElementById("recipeCheckbox").checked;
    var updateChecked = document.getElementById("updateCheckbox").checked;

    var articles = document.querySelectorAll("#articleList article");

    for (var i = 0; i < articles.length; i++) {

        if (articles[i].classList.contains("opinion")) {
            articles[i].style.display = opinionChecked ? "block" : "none";
        }

        if (articles[i].classList.contains("recipe")) {
            articles[i].style.display = recipeChecked ? "block" : "none";
        }

        if (articles[i].classList.contains("update")) {
            articles[i].style.display = updateChecked ? "block" : "none";
        }
    }
}



function addNewArticle() {

    var title = document.getElementById("inputHeader").value;
    var text = document.getElementById("inputArticle").value;

    var type = "";

    if (document.getElementById("opinionRadio").checked) {
        type = "opinion";
    }
    else if (document.getElementById("recipeRadio").checked) {
        type = "recipe";
    }
    else if (document.getElementById("lifeRadio").checked) {
        type = "update";
    }

    if (title === "" || text === "" || type === "") {
        alert("Please fill out all fields.");
        return;
    }

    
    var newArticle = document.createElement("article");
    newArticle.className = type;

    
    var marker = document.createElement("span");
    marker.className = "marker";

    if (type === "opinion") {
        marker.innerText = "Opinion";
    }
    if (type === "recipe") {
        marker.innerText = "Recipe";
    }
    if (type === "update") {
        marker.innerText = "Update";
    }

 
    var newTitle = document.createElement("h2");
    newTitle.innerText = title;

   
    var newText = document.createElement("p");
    newText.innerText = text;

    
    newArticle.appendChild(marker);
    newArticle.appendChild(newTitle);
    newArticle.appendChild(newText);

    document.getElementById("articleList").appendChild(newArticle);

    
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
}