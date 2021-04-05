// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', (readyEvent) => {
    if (readyEvent) {
        console.info('DOM loaded');
    }

    const devourBtns = document.querySelectorAll(".devour");

    console.log(devourBtns);

    const submitBtn = document.querySelector("#burger-submit");

    submitBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const inputArea = document.getElementById("burger-name-input");

        const input = inputArea.value.trim();

        if (input) {
            console.log(input);
        }
        else {
            alert("Please input a name.");
        }

        inputArea.value = "";
    });
});
