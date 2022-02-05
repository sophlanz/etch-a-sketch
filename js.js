//grid-size
function createGrid () {
    
    //get size
  let e =  document.getElementById("size");
  //amount of rows/columns
  let size = e.options[e.selectedIndex].value;
  //amount of boxes
  let max = size*size;

  let grid = document.querySelector("#grid");
  //create the amount of columns indicated by the selected value
  grid.style.setProperty("grid-template-columns", 'repeat('+size+',1fr)')
  //amount of rows
 grid.style.setProperty("grid-template-rows", 'repeat(' + size + ', 1fr)')
  
  
  //create that number of divs in the loop
   for (let i=0;i<max;i++) {
      //create new item
    const item = document.createElement("div");
    item.classList.add("item");
    
    
    grid.appendChild(item);
  }
}

