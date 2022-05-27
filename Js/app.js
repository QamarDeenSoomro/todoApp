var main = document.getElementById("main");
var heading = document.createElement("h1");
var headingTxt = document.createTextNode("Todo App");
main.appendChild(heading);
heading.appendChild(headingTxt);
heading.setAttribute("class", "mainheading")
var InputDiv = document.createElement("div")
main.appendChild(InputDiv);
InputDiv.setAttribute("class", "inputDiv")
var Input = document.createElement("input")
Input.setAttribute("type", "text")
Input.setAttribute("class", "todoInput")
var SubmitBtn = document.createElement("button");
var Btnimg = document.createElement("img")
Btnimg.setAttribute("src", "./icons/add.png")
SubmitBtn.appendChild(Btnimg)
Input.value = ""
InputDiv.appendChild(Input)
InputDiv.appendChild(SubmitBtn)
SubmitBtn.setAttribute("class", "SubmitBtn")
SubmitBtn.setAttribute("onclick", "Addtodo()")
Todos = ["First todo", "Second"];
var TdlistDiv = document.createElement("div")
main.appendChild(TdlistDiv)
TdlistDiv.setAttribute("class", "TodolistDiv")
// var Tdlist = document.createElement("div")
// Tdlist.setAttribute("class","TodoListMain")
// TdlistDiv.appendChild(Tdlist)

// var Todos = ["Todo 1", "Todo 2"];

function Addtodo() {
    // console.log(Todos);
    // Todos.push(Input.value);
    var listItemdiv = document.createElement("div")
    TdlistDiv.appendChild(listItemdiv)
    listItemdiv.setAttribute("class", "TodoListMain")
    var list = document.createElement("label");
    listText = document.createTextNode(Input.value)
    listBullet = document.createElement("input")
    list.appendChild(listText)
    list.setAttribute("class", "TodoItem")
    listBullet.setAttribute("type", "radio")
    listItemdiv.appendChild(listBullet);
    listItemdiv.appendChild(list)
    editImg = document.createElement("img")
    editImg.setAttribute("src", "./icons/edit.png")
    DeleteImg = document.createElement("img")
    DeleteImg.setAttribute("src", "./icons/delete.png")
    listItemdiv.appendChild(editImg)
    listItemdiv.appendChild(DeleteImg)
    id = Input.value
    id = id.replace(/\s+/g, '');
    list.setAttribute("for", id)
    listBullet.setAttribute("id", id)
    editImg.addEventListener("click", function () {
        // var inputedit = createElement
        var editig = prompt("Edit", listText.textContent);
        list.innerHTML = editig
    })
    // editImg.setAttribute("onclick", "editItem()");
    DeleteImg.addEventListener("click", function () {
        this.parentNode.remove();
    })
    // DeleteImg.setAttribute("onclick","Imgdel()")
}
Input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    // event.preventDefault();
    Addtodo();
} 
})
// console.log[Todos]
// function editItem() {
//     alert("Edit item");
//     // list.replace(Input);
// }
// function Imgdel() {
//     this.parentElement.parentElement.remove();
//     var myNodelist = document.getElementsByTagName("li");

//     this.parentNode.removeChild(this)

// }