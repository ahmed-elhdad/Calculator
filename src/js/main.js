const numbers = [7, 8, 9, "DEL",4, 5, 6, "+", 1, 2, 3, "-", ".", 0, "/", "*", "RESET", "="];
for (let i = 0; i < numbers.length; i++) {
    const number = document.createElement("button");
    number.textContent = numbers[i];
    number.classList.add("number");
    document.querySelector(".numbers").appendChild(number);
    if (number.textContent === "=") {
        number.classList.add("equal");
    }else if (number.textContent === "RESET") {
        number.classList.add("reset");
    }
    else if (number.textContent === "DEL") {
        number.classList.add("delete");
    }
}