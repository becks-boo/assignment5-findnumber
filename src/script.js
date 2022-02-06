function getFieldSize() {
    let userInput = document.getElementById("field-size");
    return userInput.value;
}

function getFinalFieldNum() {
    return Math.pow(getFieldSize(), 2);
}

function insertFields(newArray) {
    const containerHtml = document.getElementById("container");

    const divList = newArray.map(number => {
        return `<div class="field">
    <span class="number">${number}</span>
</div>`;
    });

    containerHtml.innerHTML = divList.join("");

    containerHtml.style.gridTemplateColumns = `repeat(${getFieldSize()}, 1fr)`;
}

function shuffle(newArray) {
    let index = 0;
    let rand = 0;
    let copyArray = newArray.map(() => -1);

    while (index < newArray.length) {
        do {
            rand = Math.floor(Math.random() * newArray.length);
        } while (exists(copyArray, rand));
        copyArray[index++] = rand;
    }

    return copyArray;
}

function createNewArray() {
    return [...Array(getFinalFieldNum()).keys()];
}

function exists(newArray, rand) {
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i] === rand) {
            return true;
        }
    }
    return false;
}

function startGame() {
    const newArray = createNewArray();
    const shuffledArray = shuffle(newArray);
    insertFields(shuffledArray);
    addClickHandlers(newArray);
}

let startBtn = document.getElementById("start");

startBtn.addEventListener("click", startGame);

function addClickHandlers(sortedArray) {
    const clickFields = document.querySelectorAll(".field");

    clickFields.forEach(field => {
        field.addEventListener("click", function () {
            if (parseInt(field.innerText) === sortedArray[0]) {
                field.classList.add("hide");
                sortedArray = sortedArray.filter(zahl => zahl !== sortedArray[0]);
                return;
            } else {
                field.classList.add("show");

                setTimeout(function() {
                    field.classList.remove("show");
                }, 1000);
            }
        });
    });
}