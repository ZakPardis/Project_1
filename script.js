//DOM
console.log(document)

//getElementById() => common way
const heading=document.getElementById('title')
console.log(heading)

//getElementByClassName()
const listItems=document.getElementsByClassName('listItem')
console.log(listItems)
console.log(listItems[2])

console.clear()
//getElementByTagName()
const liElement=document.getElementsByTagName('li')
for(let i=0; i<liElement.length; i++){
    console.log(liElement[i])
}

//querySelector()
//will select the first match
const para=document.querySelector('p')
console.log(para)

//querySelectorAll()
const all_Para_listItems=document.querySelectorAll('p, .listItem')
console.log(all_Para_listItems)

// Style an element via DOM
//heading.style.backgroundColor="gold"
// heading.style.color="red"
heading.style.cssText="color:red; text-align:center; background-color: gold; font-size: 30px"

// Changing text of HTML elements using DOM
heading.innerHTML="Document Object Model"
const firstPara=document.querySelector('p')
firstPara.innerText="<h1>Changed Using DOM</h1>"

//change the background of all list items to  orange and the text colour to red
// change the text of them to list item 1, list item 2
const allListItems=document.getElementsByClassName('listItem')
for(let i=0; i<allListItems.length; i++){
    allListItems[i].style.color="red"
    allListItems[i].style.backgroundColor="orange"
    allListItems[i].innerText=`List Item ${i+1}`
}
console.clear()
//Create a new element 
const newListItem=document.createElement('li')
console.log(newListItem)

//select the UL element and store it in a variable
const ul=document.querySelector('ul')

//Append() - allow us to add elements to the document at specific position
ul.append(newListItem)
//update the text of the new list item
newListItem.innerText="New List Item"
//console.log(ul)

//add a class using DOM
const description=document.getElementById('description')
description.classList.add('dom')

//add class to the new list item
newListItem.classList.add('listItem')

//Add an attribute using DOM
newListItem.setAttribute('id','item5')

//remove an attribute Using DOM
newListItem.removeAttribute('id')

// remove a class using dome
description.classList.remove('dom')
console.log(description)

//Remove an element from the DOM
newListItem.remove()