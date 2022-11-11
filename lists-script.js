//#region Task-2

//get all unordered lists
const unorderedLists = document.getElementsByTagName('ul');
//loop through the collection 
// unorderedLists.forEach(element => {
//     //get its list items
//     let listItems = element.getElementsByTagName('li');
//     //loop through each list item to modify
//     for(let index = 0; index < listItems.length; i++)
//     {

//     }
// });


//loop through all lists
for(let i = 0; i < unorderedLists.length; i++)
{
    //get all list elements
    let listItems = unorderedLists[i].getElementsByTagName('li');
    //loop through every list element
    for(let j = 0; j < listItems.length; j++)
    {
        //modify if first or last
        listItems[j].innerHTML = (j == 0) ? "first" : (j == listItems.length - 1) ? "last" : listItems[j].innerHTML;
    }
}

//#endregion

//#region Task-4

//create the array
const fruits = ['apple', 'banana', 'tomato',' orange '];

//get section where to add list
const section = document.getElementById('unorderedListModification');

//create a list
const orderedList = document.createElement('ol');

//add the list to the section
section.appendChild(orderedList);

//loop through the array
fruits.forEach(element => {
    orderedList.innerHTML += `<li>${element}</li>`;
});
//#endregion