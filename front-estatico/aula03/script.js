const checkbox = document.getElementById("aceite");
const button = document.getElementById("submit-btn");

checkbox.addEventListener("click", () => {
    if(checkbox.checked === true){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})
