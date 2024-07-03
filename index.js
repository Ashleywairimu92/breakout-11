//accessing the DOM by Id
const title = document.getElementById("title")
// console.log(title)
title.style = "color: blue";

//accessing the DOM by class
const dummy = document.getElementsByClassName("dummytest")[0];
dummy.textContent = "Learning the DOM";

//accessing the DOM by tagName
const myDiv = document.getElementsByTagName("div")[0];
// console.log(myDiv);
myDiv.style = "font-size: 30px;color: red;"

//accessin the DOM by query selector
const myTitle = document.querySelector("#title")
// console.log(myTitle)

const myDummy = document.querySelector(".dummytest")
// console.log(myDummy)

// accessing the DOM bt queryselectorall
const myDivs = document.querySelectorAll(".myDiv")
// console.log(myDivs)

const mySecondDiv = document.querySelectorAll(".myDiv")[1]
// console.log(mySecondDiv)

const myList = document.querySelector(".myDiv .list")
// console.log(myList)
myList.style = "color: green"

// creating elements on the DOM
cons
