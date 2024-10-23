
document.querySelector('.task-form').addEventListener('submit', function(event){
	event.preventDefault();

	let newTask = document.createElement('li');

	
	let newParagraph = document.createElement('p');
	newParagraph.textContent = event.target.elements.task.value
	newTask.appendChild(newParagraph);

	let removeButton = document.createElement('button');
	removeButton.classList.add('remove-btn');
	newParagraph.appendChild(removeButton);
	removeButton.type = 'button';
	removeButton.textContent = 'X'

	newTask.classList.add('newLiStyle');
	

	document.querySelector('.task-form').appendChild(newTask);

	event.target.elements.task.value ='';



	removeButton.addEventListener('click', function() {
		newTask.remove();
	});
	

});







































/*
function createNewCard(content) {
	// vytvorim novy HTML element (li)
	let newCard = document.createElement('li');


	newCard.innerHTML = `
		<p>
			${content}
		</p>
	`;

	taskContainer.appendChild(newCard);
}


// ------------------
// HLAVNY KOD
// ------------------


// najdem rodica, do ktoreho chcem pridavat HTML elementy
const taskContainer = document.querySelector('.tasks ul').addEventListener('submit', function(event){
	event.preventDefault();
});



/**
 * VERZIA 01: HTML elementy vyrabam BEZ FUNKCIE
 * 
 * problem tejto verzie je napriklad ten, 
 * ze ak by som potreboval vytvorit 5 novych elementov
 * musim si tento kod nakopirovat 5x pod seba 
 * a v tom sa ani besny pes neozrientuje
 * je to bordel a to nechceme
 * 
 * navyse co ak v tom kode najdem chybu?
 * teraz ju musim opravovat na 5 roznych miestach
 * 
 * co ak potrebujes nieco zmenit? pridat?
 * musim to pridat na 5 roznych miestach
 * je to na odstrel
 * 
 * preto vytvorim funkciu: ak najdem chybu, staci ju opravit na jednom mieste
 * a ja viem presne, kde to miesto je
 * vo funkcii s nazvom createNewCard()
 */

/* 

// najdem rodica, do ktoreho chcem pridavat nove HTML elementy
const cardContainer = document.querySelector('.cards ul');

// novy element bude mat nadpis (h3) a text (p)
let title = 'Nový nadpis';
let content = 'Toto je kúsok textu. Je krásny. Je priam nádherný. Čítaj ho očami a užívaj si ako znie v tvojich ušiach, ak ho niekto vysloví.';

// vytvorim novy HTML element (li)
let newCard = document.createElement('li');
newCard.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';

// alebo sposob, ako prilepit string na koniec ineho stringu pomocou +=
// newCard.innerHTML = '<h3>' + title + '</h3>';
// newCard.innerHTML += '<p>' + content + '</p>';

// vlozim ho do rodica
cardContainer.appendChild(newCard);

*/