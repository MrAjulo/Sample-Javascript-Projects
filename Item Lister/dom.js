var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //Get input value
    var newItem = document.getElementById('item').value;

    //Create new li element 
    var li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';
    //Add text node with input value 
    li.appendChild(document.createTextNode(newItem));

    // Create del button element 
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    //Append text node 
    deleteBtn.appendChild(document.createTextNode('x'));

    li.appendChild(deleteBtn);
    //Append li to list
    itemList.appendChild(li);
}

//Remove Item
function removeItem(e) {
   if(e.target.classList.contains('delete')) {
       if (confirm ('Are You Sure?')) {
           var li = e.target.parentElement;
           itemList.removeChild(li);
       }
   } 
}

// filter Items
function filterItems(e) {
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}