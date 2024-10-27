// exercise 1


const rows=parseInt(prompt("enter the number of rows: "));

for (let i=0; i< rows;i++){
    let row="";
    for (let j=0;j<rows-1-i;j++){
        row +=" ";
    }
    
    for (let j=0;j<i+1;j++){
        row+="* ";
    }

    console.log(row);

}


for(let i=0;i<rows-1;i++){
    let row=""
    for(let j=0;j<i+1;j++){
        row+=" ";

    }

    for (let j=0;j<rows-1-i;j++){
        row+="* ";
    }

    console.log(row);
}