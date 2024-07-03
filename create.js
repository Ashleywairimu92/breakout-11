//creating DOM elements
const myDiv = document.createElement("div")
myDiv.style = "color:red"
myDiv.innerText = "Ashley"
//  appending myDiv to the DOM so that it can be seen
document.body.append(myDiv)

const myUl = document.createElement("ul")
for(let i=0; i<3; i++){
    const myLi = document.createElement("li")
    myLi.textContent = "Ashley Winnie Ian"
    myUl.append(myLi)
}
myDiv.append(myUl)

const ul = document.createElement("ul")
// ul.textContent = "1"
for(let i = 0; i<3; i++){
    const li = document.createElement("li")
    li.textContent = (i+1).toString();
    ul.append(li)
}
myDiv.append(ul)

