// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (readyEvent) => {
    if (readyEvent) {
        console.info('DOM loaded');
    }

    const submitBtn = document.querySelector("#burger-submit");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const inputArea = document.getElementById("burger-name-input");

        const input = inputArea.value.trim();

        if (input) {

            const inputObj = {
                name: input
            }

            fetch("/api/add", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(inputObj)
            }).then(() => {
                inputArea.value = "";

                console.log("Posted!");
                location.reload();
            });
        }
        else {
            alert("Please input a name.");
        }
    });

    const devourBtns = document.querySelectorAll(".devour");

    devourBtns.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const id = event.target.getAttribute("data-id");

            console.log("id = " + id);

            const bodyObj = {
                col: "devoured",
                data: true
            };

            fetch(`/api/update/${id}`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bodyObj)
            }).then(() => {
                console.log("Updated!");
                location.reload();
            });
        });
    });
});
