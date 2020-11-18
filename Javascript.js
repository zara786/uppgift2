
var option = document.querySelector ("#options"); //the option's input value is selected
var add= document.querySelector("#addBtn")  //add button is selected
var array= [];   //created an empty array where numbers will be added


add.addEventListener("click" , addInfo);  //event "click" and a function is added to the button

function addInfo() {   //the add function starts here
   
    if (option.value === "+") {   //a condition when "+" is selected, following code will run
       
        var description= document.querySelector("#description").value; //description's value is grabbed
        var value= document.querySelector("#number").value;  //the value of value field is grabbed
        var p = document.createElement("p");    //1st created a "p"
        p.textContent= description + " " + value;   //in p, description and value will be added with a space
        var income= document.querySelector(".income");        //the "income" list has been selected
        income.appendChild(p);   //"p" added to the income list
        var number= Number(value);   //the value gets converted to a number
        array.push(number); // number will be pushed to the array
       
        
 }

    
 
  else if (option.value === "-" ) {    //if "-" is selected, the following code will run

        var description= document.querySelector("#description").value; //selected description's value
        var value= document.querySelector("#number").value;  //selected number's value
        var p= document.createElement("p"); //create a new element where data will be displayed
        p.textContent= description + " " + value;  //description and value is added
        var expense = document.querySelector(".expense"); //select the expense list
        expense.appendChild(p); // "p" will be added to the list
        var number2 = Number(-value);  //converted number into a minus value
        array.push(number2);  //will push the number into the array

 }


 var total= document.querySelector("#sum");   //grabbed the id where value will be displayed
 var sum = 0;   //initialzed sum as 0;
 
 for ( var i=0; i<array.length; i++) {   //for loop
             sum = sum + array[i];   //arrays value will be added to the sum
         }
 
 total.textContent= sum;  //the output will be displayed here

}


var clear = document.querySelector("#clearBtn");  //select "clear" button to clear all
clear.addEventListener("click", clearAll);  //on clicking "clear", a function will be triggered 

function clearAll() {        //a function to clear all data
    window.location.reload();   //entire data will be erased
}

