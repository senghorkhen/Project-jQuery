<<<<<<< HEAD
// getURL function for control url
function getURL() {
  var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
  return url;
}


// jQuery
=======
>>>>>>> 73ea5dfc82d5b9eec839fe501b8bb3990d5433ee
$(document).ready(function () {
  // call function for request API
  requestdata();
  // Select recipes with id
  $("#selection").on('change', function () {
    var chooseRecipse = $("#selection").val();
    recipesId(chooseRecipse);
  })
});

<<<<<<< HEAD

// function for query API
function requestdata() {
  $.ajax({
    dataType: 'json',
    url: getURL(),
    success: (data) => getRecipse(data.recipes),
    error: () => console.error("Cannot request data"),
    error: () => console.log("Cannot get data")
  })
}


//variable for store data in arrays that get from API
var allData = [];

// function for display the name of food on the selection option
function getRecipse(data) {
  var option = "";
  allData = data;
  data.forEach(element => {
    option += `<option value="${element.id}">${element.name}</option>`;
  });
  $("#selection").append(option);
}


// variable for get old Guest
var getQuanlity = [];

// function for loop data from array variable
var oldGuest = 0;
function recipesId(chooseRecipse) {
  allData.forEach(item => {
    if (item.id == chooseRecipse) {

      // choose recipses 
      chooseRecipses(item);

      // get ingredients in recipse name
      getIngrediants(item);

      // get number of person 
      numberOfPerson(item);

      // get instruction
      getInstruction(item);

      // get quantity
      getQuanlities = item;

      //get OldGuest
      oldGuest = item.nbGuests;

    }
  })
}

// display name and image of recipes
function chooseRecipses(item) {
  const { name, iconUrl } = item;
  var result = "";
  result += `
      <h5 class="text-center mt-5">${name}</h5><br>
      <img src="${iconUrl}" style="width:280px; height:250px; border-radius:50%">
  `;
  $("#img-recipes").html(result);
}

// get number of person 
function numberOfPerson(Guests) {
  const { nbGuests } = Guests;
  var person = "";
  person += `
      <h5>Number of Person</h5>
      <button id="minus" class="waves-effect waves-light btn" type="button">-</button>
      <input  id="input" style="width:115px" class="center" value="${nbGuests}" disabled type="text">
      <button type="button" id="sum" class="waves-effect waves-light btn">+</button>
`;
  // diplay number of person in input value
  $("#number_people").html(person);

  // function click on icon sum
  $("#sum").on('click', function () {
    var number = parseInt($("#input").val());
    sum(number);
  })
  // function click on icon minus
  $("#minus").on('click', function () {
    var number = parseInt($("#input").val());
    minus(number);
  })
}

// get ingredients in recipse name
function getIngrediants(item) {
  var result = "";
  item.ingredients.forEach(element => {
    const { name, quantity, unit, iconUrl } = element;
    result += `
         <table class="striped">
              <tr>
              <td><img src="${iconUrl}" style="width:50px"></td>
              <td id='quantity'>${quantity}</td>
              <td>${unit[0]}</td>
              <td>${name}</td>
              </tr>
         </table>
      `;
  });
  $("#ingredients").html(result);
}
// increase value when click on icon sum
function sum(number) {
  var add = parseInt(number) + 1;
  if (add <= 15) {
    $("#input").val(add);
    getPerson($("#input").val());
  }
}


// decrease value when click on icon minus
function minus(number) {
  var minus = parseInt(number) - 1;
  if (minus >= 1) {
    $("#input").val(minus);
    getPerson($("#input").val());
  }
}


// get instruction
function getInstruction(item) {
  const { instructions } = item;
  var instruction = "";
  var step = instructions.split("<step>");
  for (let i = 1; i < step.length; i++) {
    instruction += `
    <h5 class="blue-text">step ${i}:</h5>
           ${step[i]}
      `;
  }
  // diplay instruction
  $('#step').html(instruction);
}


// function for new quanlity
function getPerson(person) {
  var quantities;
  var newQuanlity;
  var result = "";
  getQuanlities.ingredients.forEach(element => {
    var { quantity, iconUrl, name, unit } = element;
    quantities = quantity / oldGuest;
    newQuanlity = quantities * person;
    result += `
      <table class="striped">
          <tr>
          <td><img src="${iconUrl}" style="width:50px"></td>
          <td id='quantity'>${newQuanlity}</td>
          <td>${unit[0]}</td>
          <td>${name}</td>
          </tr>
      </table>
  `;
  });
  $("#ingredients").html(result);
}
=======
// function click on icon plus
$("#plus").on('click', function () {
    plus();
    var member = $("#member_project").val();
    var seclect = $('#recipe').val();
    updateRecipe(seclect,member);
});

// function click on icon minus
$("#minus").on('click', function () {
    minus();
    var member = $("#member_project").val();
    var seclect = $('#recipe').val();
    updateRecipe(seclect,member);
});

// get url
function getUrl() {
    var url = "https://raw.githubusercontent.com/radytrainer/test-api/master/test.json";
    return url;
}

// gteApi
function getApi() {
    $.ajax({
        dataType: 'json',
        url: getUrl(),
        success: (data) => chooseRecipe(data.recipes),
        error: () => console.log('Cannot get data'),
    });
}

// get recipe
var allData = [];
function chooseRecipe(recipe) {
    allData = recipe;
    var option = "";
    recipe.forEach(item => {
        option += `<option value="${item.id}">${item.name}</option>`;
    });
    $('#recipe').append(option);
}
$('#action').hide();
$('#number').hide();
$('#card').hide();

// function for loop data from array variable
function eachRecipe(id) {
    allData.forEach(item => {
        if (item.id == id) {
            recipeimage(item.name,item.iconUrl);

            //step
            getStep(item.instructions);

            // showIngredient
            showIngredient(item.ingredients);
            $('#action').show();
            $('#member_project').val(item.nbGuests);

            // oldGuest
            oldGuests = $('#member_project').val();
        }
    });
    $('#number').show();
}

// updateRecipe
function updateRecipe(seclect,member) {
    allData.forEach(item => {
        if (item.id == seclect) {
            recipeimage(item.name,item.iconUrl);

            // step
            getStep(item.instructions);

            // updateIngredient
            updateIngredient(item.ingredients,member);
            $('#action').show();
        }
    });
}

//recipeimage
function recipeimage(name, image){
    var recipe = "";
    recipe += `
    <h5 class="text-center">${name}</h5>
    <img src="${image}" width = "150" class="rounded-circle img-thumbnail">
    `;
    $('#recipes').html(recipe);
}

//step
function getStep(step) {
    var cutStep = step.split("<step>");
    // showScutSteptep
    result = "";
    for (var i = 1; i < cutStep.length; i++) {
        result += `
        <p class="text-primary">Step ${i}</p>
        <p>${cutStep[i]}</p>
    `;
        $("#instruction_project").html(result);
    }
}

// get ingredient
function showIngredient(ing) {
    var ingredient = "";
    ing.forEach(item => {
        ingredient += `
        <table class="striped">
        <tr>
            <td><img src="${item.iconUrl}" width="50" class ="img-fluid img-thumbnail"></td>
            <td>${item.quantity}</td>
            <td>${item.unit[0]}</td>
            <td>${item.name}</td>
        </tr>
        </table>
        `;
    });
    $('#ingredients_project').html(ingredient);
    $('#card').show();
}

// updateIngredient
function updateIngredient(ing,member) {
    var ingredient = "";
    ing.forEach(item => {
        var update = item.quantity * parseInt(member) /oldGuests;
        ingredient += `
        <tr>
            <td><img src="${item.iconUrl}" width="50" class ="img-fluid img-thumbnail"></td>
            <td>${update}</td>
            <td>${item.unit[0]}</td>
            <td>${item.name}</td>
        </tr>
        `;
    });
    $('#ingredients_project').html(ingredient);
}

// increase value when click on icon add
function plus() {
    var increas = $('#member_project').val();
    var numAdd = parseInt(increas) + 1;
    if (numAdd <= 15) {
        $("#member_project").val(numAdd);
    }
}

// decrease value when click on icon minus
function minus() {
    var decreas = $('#member_project').val();
    var minus = parseInt(decreas) - 1;
    if (minus >= 1) {
        $("#member_project").val(minus);
    }
}
>>>>>>> 73ea5dfc82d5b9eec839fe501b8bb3990d5433ee
