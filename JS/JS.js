var input = document.querySelector("input[type = 'text']")
var ul = document.querySelector("ul")
var spans = document.getElementsByTagName("span")
var saveBtn = document.querySelector(".save")
var cleaBtn = document.querySelector(".clear")
var removeBtns = document.getElementsByClassName('remove')

function deleteToDo() {
	for (let btn of removeBtns) {
		btn.addEventListener('click', function() {
			btn.parentElement.remove()
		})
	}
}

function loadToDo() {
	if(localStorage.getItem('todoList')) {
		ul.innerHTML = localStorage.getItem('todoList')
	}
}
loadToDo()

input.addEventListener('keypress', function(keyPressed) {
	if(keyPressed.which === 13) {
		var li = document.createElement('li')
		var btn = document.createElement('button')
		btn.innerText = 'X'
		btn.setAttribute('class', 'remove')

		var newToDo = input.value
		input.value = '';

		ul.appendChild(li).append(btn, newToDo)

		deleteToDo()
	}
})

saveBtn.addEventListener('click', function() {
	localStorage.setItem('todoList', ul.innerHTML)
})

cleaBtn.addEventListener('click', function() {
	ul.innerHTML = ' ';
	localStorage.removeItem('todoList', ul.innerHTML)
})

ul.addEventListener('click', function() {
	if(event.target.tagName === 'LI') {
		event.target.classList.toggle('checked')
	}
})