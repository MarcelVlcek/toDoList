if (localStorage.getItem("tasks") === null) {
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("tasks"))
}

let myForm = document.querySelector("#to-do-form").addEventListener("submit", function(event){
    event.preventDefault()

    
    let newTask = {
        id:uuidv4(),
        taskValue: event.target.elements.task.value
    }

    myArray.push(newTask)
    localStorage.setItem("tasks", JSON.stringify(myArray))

    event.target.elements.task.value = ""

    let paragraph = document.createElement("p")
    paragraph.textContent = newTask.taskValue

    let removeButton = document.createElement("i")
    removeButton.classList.add("fa-solid", "fa-trash-can")

    paragraph.appendChild(removeButton)

    document.querySelector("#to-do-tasks").appendChild(paragraph)

    removeButton.addEventListener("click", function(){
        paragraph.remove()
        myArray = myArray.filter(task => task.id !== newTask.id)
        localStorage.setItem("tasks", JSON.stringify(myArray))
    })
})

let myPresentArray = JSON.parse(localStorage.getItem("tasks"))

if (myPresentArray !== null) {
    myPresentArray.forEach(function(oneTask){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneTask.taskValue

        let removeButton = document.createElement("i")
        removeButton.classList.add("fa-solid", "fa-trash-can")

        paragraph.appendChild(removeButton)

        document.querySelector("#to-do-tasks").appendChild(paragraph)

        removeButton.addEventListener("click", function(){
            paragraph.remove()
            myArray = myArray.filter(task => task.id !== oneTask.id)
            localStorage.setItem("tasks", JSON.stringify(myArray))
        })
    })
}



