
function Add(){
  var taskValue=document.getElementById("task")
  if (taskValue != null) {
    str = taskValue.value;
}
else {
    console.log("error")}
  var tododiv=document.getElementById("mylist")
  if (tododiv != null) {
    str2 = tododiv.value;
}
else {
    console.log("error2")}
  // console.log(taskValue)
  var newToDoItem=document.createElement("div")
  var newItem=document.createElement("li")
  newItem.innerHTML=str
  var icon=document.createElement("i")
  icon.classList.add("fa-solid")
  icon.classList.add("fa-trash-can")
  newToDoItem.appendChild(newItem)
  newToDoItem.appendChild(icon)
  tododiv.appendChild(newToDoItem)
}
var tododiv=document.getElementById("mylist")
tododiv.addEventListener("click", deleteItem)
function deleteItem(e){
  const element=e.target
  if(element.classList[0]=="fa-solid"){
    element.parentElement.remove()

}
}
