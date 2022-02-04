const zahlenArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let fieldSize = 4;

const containerHtml = document.getElementById("container");

initializeArray();
shuffle();

const divList = zahlenArray.map(number => {
    return `<div class="field">
    <span class="number">${number}</span>
</div>`;
});

const zahlenList = document.getElementsByClassName("field");

for (let div of zahlenList) {
    div.addEventListener("click", () => {
        console.log(div.innerText);
    });
}

containerHtml.style.gridTemplateColumns = `repeat(${fieldSize}, 1fr)`;

containerHtml.innerHTML = divList.join("");

function shuffle() {
    let index = 0;
    let rand = 0;

    while (index < zahlenArray.length) {
        do {
            rand = Math.floor(Math.random() * 16);
        } while (exists(rand));
        zahlenArray[index++] = rand;
    }
}

function initializeArray() {
    for (let i = 0; i < zahlenArray.length; i++) {
        zahlenArray[i] = -1;
    }
}

function exists(rand) {
    for (let i = 0; i < zahlenArray.length; i++) {
        if (zahlenArray[i] === rand) {
            return true;
        }
    }
    return false;
}

// let numberValue = document.getElementsByClassName("number");

// GET FIELD
const clickFields = document.querySelectorAll(".field");

/*im CLickHandler

if (zahlAngeklickt !== niedrigsteZahl) {

    return; // sprich, mach gar nichts

}*/

// CLICK ON FIELD & GET NUMBER FROM FIELD
let copyZahlenArray = zahlenArray;

clickFields.forEach(field => {
    field.addEventListener("click", function () {
        // VALIDATE IF IT IS THE RIGHT NUMBER

      /*  if (field.outerText > i.toString()) {
            return;
        } else {
            field.classList.add("hide");
        }*/

        for (let i = 0; i < copyZahlenArray.length; i++) {
            // console.log(field.innerText, i)
            if (field.innerText === i.toString()) {
                field.classList.add("hide");
                // console.log(field.innerText);
                copyZahlenArray = copyZahlenArray.filter(zahl => zahl !== i);
                console.log(copyZahlenArray);
                return;
            }
        }
    });
});