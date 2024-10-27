let n=parseInt(prompt("Enter an old number: "))

let odd=1;
while(odd<=n){
    let row="";
    for (let j=0;j<(odd+1)/2;j++){
        row+=(2*j+1)+" ";

    }
    console.log(row);
    odd+=2;
}