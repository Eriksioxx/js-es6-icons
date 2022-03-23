const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per 
// ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

// generare la pagina con i dati appena creati

const structureIcons = document.querySelector('.structure');

createDivIcons(icons);

// funzione per inserire i pezzi

function createDivIcons(icon) {
	structureIcons.innerHTML = '';

	for (let i = 0; i < icon.length; i++) {
		const iconDiv = createDiv(icon[i]);
		structureIcons.appendChild(iconDiv);
	}
}

function createDiv(Element) {
	const iconCreate = document.createElement('div');
	iconCreate.className = "icon-img  col-2 border border-dark rounded px-0 slide-fwd-center";
	iconCreate.innerHTML = `
	<div class=" text-center fs-1 ">
	<i class='${Element.family} ${Element.prefix}${Element.name} ${Element.color}'></i>
		<h5 class="text-center">${Element.name}</h5>
	</div>
	`
	return iconCreate;
}

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le 
// icone del colore corrispondente.

// Inserito colori su CSS


// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const changeGroup = document.getElementById('iconsSelection');

changeGroup.addEventListener('change', (event) => {

	if (event.target.value === "all") {

		createDivIcons(icons);
	} else if (event.target.value === "animal") {
		const animal = icons.filter((icons) => {
			return (icons.type === 'animal');
		})

		createDivIcons(animal);
	} else if (event.target.value === "vegetable") {
		const animal = icons.filter((icons) => {
			return (icons.type === 'vegetable');
		})

		createDivIcons(animal);
	} else if (event.target.value === "user") {
		const animal = icons.filter((icons) => {
			return (icons.type === 'user');
		})

		createDivIcons(animal);
	}
});


// BONUS

// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo 
// casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri 
// alfanumerici compresi tra 0 e 9 e A e F.

// const changeColor = () => {

// 	const colorIcon = document.querySelector('.icon-img:');
// 	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	
// }

// changeColor();