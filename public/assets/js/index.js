// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (readyEvent) => {
    if (readyEvent) {
        console.info('DOM loaded');
    }

    // CREATE
    // ==================================================================================
    // Creates a reference to the submit button element
    const submitBtn = document.querySelector("#burger-submit");

    // Adds a click event listener to the submit button
    submitBtn.addEventListener("click", (event) => {
        // Prevents the default reloading of the page
        event.preventDefault();

        // Creates a reference to the text input element
        const inputArea = document.getElementById("burger-name-input");

        // Gets the value of the text input
        const input = inputArea.value.trim();

        // Checks if the input is empty or not
        if (input) {
            // Puts the input into an object to be used as the body for the api call
            const inputObj = {
                name: input
            }

            // Executes the post api call to add a burger to the list
            fetch("/api/add", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputObj)
            }).then(() => {
                // Clears the input area
                inputArea.value = "";

                // Reloads the page
                location.reload();
            });
        }
        // If input is empty, the user is told to enter a name
        else {
            alert("Please enter a name for your burger");
        }
    });
    // ==================================================================================

    // UPDATE
    // ==================================================================================
    // Creates an array of references to all of the "devour" buttons
    const devourBtns = document.querySelectorAll(".devour");

    // Adds an event listener to each button referenced in the devourBtns array
    devourBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            // Gets the id from the "data-id" attribute of each button
            const id = event.target.getAttribute("data-id");

            // Creates an object with column to update and data to be updated to
            const bodyObj = {
                col: "devoured",
                data: true
            };

            // Performs the api update call
            fetch(`/api/update/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyObj)
            }).then(() => location.reload()); // Reloads the page after updating db
        });
    });
    // ==================================================================================
});
