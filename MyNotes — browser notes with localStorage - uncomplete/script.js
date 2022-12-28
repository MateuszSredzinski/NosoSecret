// notes are saved in localstorage and also they saving automaticly in order one by one in memory. But this version dosent support display categories in title, I had issues with reaching value with category name in inner html. Globally it didnt work, so I need to consider this or rebuild code to JSON and try it and also try with async funtion to reach two values or do it on one key-value pair. In future I will repair it. Also this version doenst support note's color changing.

const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')

const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue

let cardID = 0

let notes = []
let categories = []
let value
let value2

const createOldNote = () => {
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		const key2 = localStorage.key(i)
		if (key.startsWith('note')) {
			value = localStorage.getItem(key)
			console.log(value)
			createNote2(value, key)
		} else if (key2.startsWith('category')) {
			const value2 = localStorage.getItem(key2)
			console.log(value2)
		}
	}
}
console.log(value)

const createNote2 = (content, key) => {
	const memoryNote = document.createElement('div')
	console.log(value2)
	memoryNote.classList.add('note')

	memoryNote.setAttribute('id', cardID)

	// for (let i = 0; i < localStorage.length; i++) {
	// 	const key = localStorage.key(i);
	// 	if (key.startsWith("note")) {
	// 	  notes.push(localStorage.getItem(key));
	// 	} else if (key.startsWith("category")) {
	// 	  categories.push(localStorage.getItem(key));

	memoryNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${key}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${content}
        </div>
    `
	// console.log(key2)
	console.log(key)
	console.log(value)
	console.log(value2)

	noteArea.appendChild(memoryNote)
	console.log(memoryNote)
	cardID++
	textarea.value = ''

	notePanel.style.display = 'none'

	MemoryColor = value2

	console.log(MemoryColor)

	const checkColorOld = note => {
		switch (MemoryColor) {
			case 'Zakupy':
				note.style.backgroundColor = 'rgb(72,255,0)'
				break
			case 'Praca':
				note.style.backgroundColor = 'rgb(255,243,0)'
				break
			case 'Inne':
				note.style.backgroundColor = 'rgb(0,170,255)'
				break
		}
	}

	checkColorOld(memoryNote)
}

// for (let i = 0; i < localStorage.length; i++) {
// 	const key = localStorage.key(i)
// 	if (key.startsWith('note')) {
// 		const value = localStorage.getItem(key)
// 		notes.push(value)
// 	} else if (key.startsWith('category')) {
// 		const value = localStorage.getItem(key)
// 		categories.push(value)
// 	}
// }

createOldNote()

const openPanel = () => {
	notePanel.style.display = 'flex'
}

const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
	category.selectedIndex = 0
}

const addNote = () => {
	if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
		createNote()

		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')

	const newContent = textarea.value
	notes.push(newContent)

	newNote.classList.add('note')

	newNote.setAttribute('id', cardID)

	for (let i = 0; i < notes.length; i++) {
		localStorage.setItem(`note${i}`, notes[i])
	}

	// const showJson = JSON.parse(localStorage.getItem("NewNoteText"))
	// console.log(showJson);

	// localStorage.setItem("testKey", JSON.stringify(value));
	// const test = JSON.parse(localStorage.getItem("testKey"));
	// console.log(test);

	newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${textarea.value}
        </div>  
    `

	noteArea.appendChild(newNote)
	cardID++
	textarea.value = ''

	category.selectedIndex = 0
	notePanel.style.display = 'none'

	checkColor(newNote)
}

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text

	const newCategory = category.options[category.selectedIndex].text
	categories.push(newCategory)

	for (let i = 0; i < categories.length; i++) {
		localStorage.setItem(`category${i}`, categories[i])
	}
}

const checkColor = note => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)'
			break
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)'
			break
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)'
			break
	}
}

const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ''
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
