$(document).ready(function () {
    requesAPI();
});

//requesAPI
var requesAPI = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),
    });
}

//getUrl
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

function getRecipe(datas) {
    datas.recipes.forEach(element => {
        getData(element);
    });
}
var getData = (element) => {
    selectionFuntion(element);
}
function selectionFuntion(element) {
    $("#select_recipes").on('change', function () {
        selection = $("#select_recipes").val();
        if (element.id == selection) {
            getId(element);
            element.ingredients.forEach(item => {
                getAllRecipse(item);
            });
        }
    });
}

function getId(recipes) {
    const {name, iconUrl, instructions} = recipes;
    var intruction = "";
    intruction = `${instructions}`;
    var displayResult = "";
    displayResult = `
    <div class="row text-center">
    <div class="col-2"></div>
    <div class="col-4">
                <h3 class="text-center" id="card">${name}</h3>
            </div>
            <div class="col-4">
                <class="card">
                <img src="${iconUrl}" class="img-fluid">
                </div>
            </div>
            <div class="col-2"></div>
    </div>

        <div class="container mt-5">
        <div class="row" id="increase">
            <div class="col-2"></div>
            <div class="col-4">
                <h5>Number of persons </h5>
            </div>
            <div class="col-4">
            <form>
            <div class="input-group mb-3 mx-auto" style=" width: 30%">
            <div class="input-group-prepend">
                <button type="button" id="minus">&minus;</button>
            </div>
            <input type="number" class="form-control text-center" value="0" disabled id="member" max="15"
                min="0">
            <div class="input-group-append">
                <button type="button" id="add">&#x2b;</button>
            </div>
        </form>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
        <div class="container mt-5">
        <div class="row">
            <div class="col-2"></div>
            <div class="col-4">
                <h5 class="text-center"> Ingredients</h5></div>
            <div class="col-4"><h5>Instruction</h5></div>
            <div class="col-2"></div>
        </div>
    </div>
    `;
    $("#instruction").html(intruction);

    display_result(displayResult);
}

function display_result(out) {
    $("#card").html(out);
}

// display ingrediant in table [arrow function]
function getAllRecipse(item) {
    var ingradiants = "";
    ingradiants = `
    <tr>
    <td><img src="${item.iconUrl}" width="25" class="img-fluid"></td>
    <td>${item.quantity}</td>
    <td>${item.unit[0]}</td>
    <td>${item.name}</td>
</tr>
        `;
    $("#ingradiants").append(ingradiants);
}