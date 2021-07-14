// Varible that grabs the <div> class id 
let output = document.querySelector("#output");
// Varible that will be called on to help create a new element 
let newElement = document.createElement("h1");

// Document method that tracks any clicks made on the DOM
document.addEventListener("click", function (event) {
// When a click is made, the following code will run.

// Varible that is called to create node within exsiting DOM element
  let newEntry = document.createTextNode(event.target.innerHTML);

  // Method that appends a child element to the "newEntry" varible
  newElement.appendChild(newEntry);
  output.appendChild(newElement);
});

//Method that will output "COOL" when element with "#equal" is clicked
document.querySelector("#equal").addEventListener("click", function (event) {
  output = "cool";
  let equals = document.createTextNode(eval(output.innerText));
  document.getElementById("output").innerHTML = "COOL";
  newElement.appendChild(equals);
  output.appendChild(newElement);
});
