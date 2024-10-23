
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


