let table;
createTable();

let red = true;

function createTable() {
    table = [[],[],[],[],[],[],[]];
    for (let column of table){
        for (let i = 0; i<6; i++){
            column.push("-");
        }
    }
}

function fillBox(pos){
    let cont=0;
    while(table[pos][cont] != "-" && cont<=5){
        cont++;
    }
    let coordinate = cont.toString() + pos.toString();
    let circle = document.getElementById(coordinate);
    if(red){
        circle.classList.add("text-danger");
        table[pos][cont] = "X";
    }else{
        circle.classList.add("text-warning");
        table[pos][cont] = "O";
    }
    console.log(table);
    red = !red;
}
