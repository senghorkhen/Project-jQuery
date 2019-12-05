$(document).ready(() => {
    $('#recipe').on('change', () => {
        var recipes = $('#recipe').val();
        choose(recipes);                                                                                          
    });
});

var choose = (data) => {
    switch (parseInt(data)) {
        case 1:
        requesApi();
            break;
        case 2:
        requesApi();
            break;
        case 3:
        requesApi();
            break;
    }
}

// requesApi
var requesApi = () => {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => getRecipe(data),
        error: () => getError(),

    });
}

// getUrl
var getUrl = () => {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// getData
var getRecipe = (myData) => {
    myData.recipes.forEach(item => {
        //recipe : item.name
        //get ingredient
        getIngredient(item.ingredients);
    });
}

// getError
var getError = (myError) => {
    console.log(myError);

}

//get ingredient
var getIngredient = (ing) => {
    ing.forEach(item => {
        computeHTML(item);
    });
}

// compute html
var computeHTML = (element) => {
    var result = "";
    result += `
        <tr>
            <td><img src ="${element.iconUrl}" width = "100"</td>
            <td>${element.name}</td>
            <td>${element.quantity}</td>
            <td>${element.unit}</td>
        </tr>

    `;
    prinOut(result);
}

// print out to HTML
var prinOut = (out) => {
    $('#project').append(out);
}