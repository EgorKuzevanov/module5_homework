const arr = ["Текст", "Текст", "Текст"];
let all;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Текст") {
        all = true;
    } else {
        all = false;
        break;
    }
}

if (all === true) {
    console.log("Все элементы массива одинаковые");
} else {
    console.log("Все элементы массива разные");
}
