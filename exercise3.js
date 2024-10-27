let n = parseInt(prompt("Enter the number of rows: "));

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - 1 - i; j++) {
        row += " "
    }

    row += "*";

    for (let k = 0; k < i; k++) {
        row += "|"

    }
    for (letl = 0; l < i - 1; l++) {
        row += "|";

    }

    if (i > 0) {
        row += "*";
    }

    console.log(row);


}