document.getElementById("button").addEventListener('click', function() {
    const inputText = document.getElementById("text").value;

    if (inputText) {
        const li = document.createElement("li");
        li.textContent = inputText;
        li.innerHTML += '<button class="deleteButton">Delete</button>'; // Add delete button to the new item
        document.getElementById("unorderedList").appendChild(li);
        document.getElementById("text").value = ""; 
    }
});

// Add event listener for delete buttons using event delegation
document.getElementById("unorderedList").addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteButton")) {
        event.target.parentNode.remove(); // Remove the parent <li> element when the delete button is clicked
    }
});
