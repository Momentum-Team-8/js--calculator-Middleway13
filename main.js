let output = document.querySelector(".output");
let newElement = document.createElement("h1");

document.addEventListener("click", function (event) {
  console.log(event.target.innerHTML)
  let newEntry = document.createTextNode(event.target.innerHTML)
  newElement.appendChild(newEntry)
  output.appendChild(newElement)
})

// document.querySelector('#equal').addEventListener('click', function (event) {
//     console.log(eval(output.innerText)
// })

// document.querySelector('#equal').addEventListener('click', function (event) {
//     output = ""
//     let equals = document.createTextNode(eval(output.innerText))
//     document.getElementById("output").innerHTML = ""
//     newElement.appendChild(equals)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#one').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#two').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#three').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#four').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#five').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#six').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#seven').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#eight').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#nine').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#point').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#add').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#divide').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#multi').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#zero').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })

// document.querySelector('#sub').addEventListener('click', function (event){
//     let newEntry = document.createTextNode(event.target.innerHTML)
//     newElement.appendChild(newEntry)
//     output.appendChild(newElement)
//     console.log(event.target.innerHTML)
// })
