//CRUD
let foods;
let panel_class;
alert("Welcome to the Earthly Essence Cafe! Continue on to start building a menu!");
    
const foodSetUp = () =>
{

let nameStr = $(`<h3>Welcome!</h3>`);
  $("header").append(nameStr);
  // Add a click hander for the coffee button
  $("#coffee").on("click", createFood);
  // Add a click hander for the tea button
  $("#tea").on("click", createFood);
  
};
//Create
const createFood = (event) =>
{
  //console.log("createFood -- event --", event);
  panel_class = event.target.id;
  //console.log("panel_class : ", panel_class);
  $(".foods").html(`<div class=${panel_class}></div>`);
  let area = $(`.foods .${panel_class}`);

  console.log("AREA:", area);
  foods = panel_class == "coffee" ? getAllCoffee() : getAllTea();
  console.log(foods);
  foods.forEach((food) => 
    {
    let foodLine = $(
      `<div class="displayLine">
          <div class = "info">${food.drinkName}  <img src="./images/${food.drinkName}.png"/> </div>
          <div class = "crud_buttons"><button class="view">View</button><button class="update">Update</button><button class="remove">Remove</button></div>
          <div class="showInfo"></div>
       </div>`
    );
    area.append(foodLine);
  });
  let newParagraph =
  $(`<span>Use the  button below to create a new ${panel_class} for the menu.</span>
  <div class="crud_buttons"><button class="create">Create</button></div>`);
$(`.foods`).prepend(newParagraph);
$(".crud_buttons .create").on("click", createHandler);
$(".displayLine button").on("click", (e) => {
  const target = $(e.target);
  
  readFood(target["0"]);
});

};
//Read
const readFood = (element) =>
  {
    let elementClass = element.className;
    console.log(
      `All buttons of class ${elementClass}`,
      $(`button.${elementClass}`)
    );
    let indexdrink = $(`button.${elementClass}`).index(element);
    console.log("index of drinks ", indexdrink);
   
 

  if (indexdrink >= 0)
    if (elementClass == "view") {
      viewHandler(indexdrink);
    } else if (elementClass == "update") {
      updateFood(indexdrink);
    } else if (elementClass == "remove") {
      console.log("Removing!!!!", indexdrink);
      deleteFood(indexdrink);
    }
};
const viewHandler = (index) => {
  console.log("viewhandler", index);
  let info = $(".showInfo:eq(" + index + ")");
 
  info.html(
    `${foods[index].drinkName} has ${foods[index].ingredients} . It contains ${foods[index].calories}  calories and has ${foods[index].flavors} as different flavors<button class="close">Close</button>`
  );
  info.find(".close").on("click", () => {
    setTimeout(function () {
     //reset
      info.html("");
    }, 1000);
  });
};

//Update
const updateFood = (index) =>
  
  {
    let displayLine = $(".foods .displayLine").eq(index);
    let updateInfo =
    $(`<div class="updateForm">
      <input type="text" id="update_name" value='${foods[index].drinkName}' size="50"/> contains
       <input type="text" id="update_ingredients" value='${foods[index].ingredients}' size="50"/> 
       as ingredients. This also contains
        <input type="text" id="update_calories" value='${foods[index].calories}' size="50"/>
        calories and comes with
         <input type="text" id="update_flavors" value='${foods[index].flavors}' size="50"/>
         as the different types of ingredients.
          <button class="save_update">Save</button>
    </div>`);
  
  displayLine.html(updateInfo);
  $(".save_update").on("click", function () 
  {
    foods[index]=
    {
      drinkName: $("#update_name").val(),
      ingredients: $("#update_ingredients").val(),
      calories: $("#update_calories").val(),
      flavors: $("#update_flavors").val(),
    };

    displayLine.html(`
      <div class="info">${foods[index].drinkName}  <img src="./images/genericdrink.png"/></div>
      <div class="crud_buttons">
        <button class="view">View</button>
        <button class="update">Update</button>
        <button class="remove">Remove</button>
      </div>
      <div class="showInfo"></div>
    `);
  $(".displayLine button").on("click", (e) => 
    {
    const target = $(e.target);
    
    readFood(target["0"]);
  });
});
};
//Delete
const deleteFood = (index) =>
  {
    let item = $(".foods .displayLine").eq(index);
    item.remove();
    foods.splice(index, 1);
    console.log(foods);
  };
const createHandler = () =>
{
  $("button.create").prop("disabled", true);
  console.log("Creating a new item for the menus");

  
  let newParagraph =
    $(`<input type="text" id="new_name" value = 'name' size="50"/> 
    contains 
    <input type="text" id="new_ingredients" value = 'ingredients' size="50" />, 
    as thier ingredients. They also contain
    <input type="text" id="new_calorie" value = calorie size="1000" /> 
    calories and has 
    <input type="text" id="new_flavor" value = 'flavor' size="50">
    as thier flavors >.<button class="save_new">Save</button>`);
 
  $(".crud_buttons .create").after(newParagraph);

  $(".save_new").on("click", function () {
    let newFood = {
      
      drinkName: $("input#new_drinkName").val(),
      ingredients: $("input#new_ingredients").val(),
      calories: $("input#new_calories").val(),
      flavors: $("input#new_flavors").val(),
      
    };

   
    foods.push(newFood);
    console.log(foods);
    

  
    let area = $(`.foods .${panel_class}`);
 
    let foodLine = $(
      `<div class="displayLine">
          <div class = "info">${newFood.drinkName} <img src="./images/genericdrink.png"/> </div>
          <div class = "crud_buttons"><button class="view">View</button><button class="update">Update</button><button class="remove">Remove</button></div>
          <div class="showInfo"></div>
       </div>`
    );

    area.append(foodLine);

  
    $(".displayLine button").on("click", (e) => {
      const target = $(e.target);
     
    
      readFood(target["0"]);
    });

  
    $("button.create").prop("disabled", false);


    newParagraph.remove();
  });
};
    
  $(document).ready(foodSetUp);
