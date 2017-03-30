function addListItem() {
	list.innerHTML += '<li>item</li>';
}

var list = document.getElementById('list');
var add = document.getElementById('addElem');

addElem.addEventListener('click', addListItem);