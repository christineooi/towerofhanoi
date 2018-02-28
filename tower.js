let status = "pick";
let disc= "";

function addDiv(id, column) {
    const newDiv = document.createElement("div");
    newDiv.className = "disc";
    newDiv.id = id;
    column.appendChild(newDiv);
}

// Get columns and add click handler to each
let cols = document.getElementsByClassName("column");

for(let i=0; i<cols.length; i++){
    cols[i].addEventListener("click", handleClick);
}

// When a column is clicked
function handleClick(event) {
    let cols = event.currentTarget;

    // If we are picking up a disc and the column has discs, set the id of disc we're picking up
    // and assign to variable disc
    // Remove the disc to illustrate pick up and change message and status to drop disc
    if (status === "pick"){
        if (cols.childElementCount > 0 ) {
          disc = cols.lastElementChild.id;       
          cols.lastElementChild.remove();  
          document.getElementById("message").innerHTML = "Drop disc";
          status = "drop";
        }
    // Otherwise we are dropping the disc to a column (status = "drop")  
    // If the column does not have any discs or the disc you are dropping is smaller than 
    // the last disc in the column, then add disc, set the message and status to pick up the disc
    // To determine if disc you are dropping is smaller than the last disc in column, the number at the end of the 
    // ids are used for comparison.
    } else {  
        if (cols.childElementCount === 0 || disc[4] < cols.lastElementChild.id[4]){
            addDiv(disc, cols);
            document.getElementById("message").innerHTML = "Pick up a disc";
            status = "pick";
            
        }     
    }

    // If there are 4 discs stacked in the second or third column, then you have moved the tower
    if ((cols.id === "rod2" && cols.childElementCount === 4) || (cols.id === "rod3" 
        && cols.childElementCount === 4)){
            // you win
            document.getElementById("message").innerHTML = "You have moved the tower!  Congrats!";

    }
}