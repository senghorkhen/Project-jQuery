function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}
$(document).ready(function () {
    getApi();
    $('#recipe').on('change', function () {
        var rcipeId = $('#recipe').val();
        eachRecipe(rcipeId);
    })
});

function getApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log('Cannot get data'),
    });
}
var allData = [];
function chooseRecipe(recipe) {
    allData = recipe;
    var option = "";
    recipe.forEach(item => {
        option += `<option value="${item.id}">${item.name}</option>`;
    });
    $('#recipe').append(option);
}

function eachRecipe(id) { 
    allData.forEach(item => {
        if (item.id == id) {
            var step = item.instructions;
            var cutStep = step.split("<step>");
             // showScutSteptep
            result = "";
            for(var i = 1;i<cutStep.length;i++){
                result += `
                Step ${i}
                <p>${cutStep[i]}</p>
            `;
            $("#instruction_project").html(result);
            }
           
                
            // Each Recipe
            // showRecipe
            showRecipe(item.name, item.iconUrl);
            // showIngredient
            showIngredient(item.ingredients);  
        }
    });
}

// showRecipe
function showRecipe(name, img) {
    var result = "";
    result += `
    <div class="row">
    <div class="col-3"></div>
    <div class="col-3"><h3>${name}</h3></div>
    <div class="col-3"><img src="${img}"width="100"></div>
    <div class="col-3"></div>
    </div>
    `;
    $('#recipe_project').html(result);
}

// get ingrediant
function showIngredient(ing) {
    var ingredient = "";
    ing.forEach(item => {
        ingredient += `
        <tr>
            <td><img src="${item.iconUrl}" width="25" class="img-fluid"></td>
            <td>${item.quantity}</td>
            <td>${item.unit[0]}</td>
            <td>${item.name}</td>
        </tr>
        `;
    });
    $('#ingradiants_project').html(ingredient);
}