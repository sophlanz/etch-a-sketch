createGrid();
//grid-size
function createGrid () {
    
    //get size
  let size =  document.getElementById("range").value;
  //amount of rows/columns
  
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
    item.setAttribute("id","item");
    //create boolean to monitor if a div has an event listener already attached
    item.setAttribute ('listener', "false");
    //add eventlistener for changing color of divs
    //item.addEventListener("mouseover", changeColor,false);

  
    grid.appendChild(item);
  }
  
}
function color () {
  const modes = document.getElementById('modes')
  const value = modes.options[modes.selectedIndex].value
  const range = document.getElementById('range').value;
  console.log(range);
  const size = range * range;
  console.log(size);
  
  const item = document.querySelectorAll('#item');
  
  

  if(value == "bw") {
    
    for (let i=0;i<size;i++) {
      //check to see if listener is already attached
      if(item[i].getAttribute('listener') !== "true") {
        //add eventlistener for changing color of divs
        item[i].addEventListener("mouseover", blackWhite,false);
        item[i].setAttribute ('listener', "true");
      }
      //clone node to get rid of listeners, and replace the old one with the new one on the parent node
      const grid = document.querySelector("#grid");
      const newItem = item[i].cloneNode(true); 
      newItem.addEventListener("mouseover", blackWhite,false);
      newItem.setAttribute ('listener', "true");
      grid.replaceChild(newItem, item[i]);

      
    }
    
  }

  if(value == "rainbow") {
    for (let i=0;i<size;i++) {
      //check to see if listener is already attached
      if(item[i].getAttribute('listener') !== "true") {
        //add eventlistener for changing color of divs
        item[i].addEventListener("mouseover", rainbow,false);
        item[i].setAttribute ('listener', "true");
      }
      //clone node to get rid of listeners, and replace the old one with the new one on the parent node
      const grid = document.querySelector("#grid");
      const newItem = item[i].cloneNode(true); 
      newItem.addEventListener("mouseover", rainbow,false);
      newItem.setAttribute ('listener', "true");
      grid.replaceChild(newItem, item[i]);

      
    }
    
  }
  if(value == "clear") {
    
    restart();
    
  }
  if(value == "eraser") {
    for (let i=0;i<size;i++) {
      //check to see if listener is already attached
      if(item[i].getAttribute('listener') !== "true") {
        //add eventlistener for changing color of divs
        item[i].addEventListener("mouseover", eraser,false);
        item[i].setAttribute ('listener', "true");
      }
      //clone node to get rid of listeners, and replace the old one with the new one on the parent node
      const grid = document.querySelector("#grid");
      const newItem = item[i].cloneNode(true); 
      newItem.addEventListener("mouseover", eraser,false);
      newItem.setAttribute ('listener', "true");
      grid.replaceChild(newItem, item[i]);

      
    }
  }
}
function rainbow () {

 
  const randomColor = Math.floor(Math.random() * 1677215).toString(16);
  this.style.backgroundColor= "#" + randomColor;
  
 

}
function blackWhite () {
  
  const color = Math.random() < 0.5 ? "#FFFFFF" : '	#000000';
  this.style.backgroundColor = 	color;
  
}

function restart () {
  
  let items = document.querySelectorAll("#item")
  if(items) {
    for (let i=0; i<items.length; i++) {
      items[i].setAttribute("style", "background: white");
    }
  } 
}
function eraser () {
  this.style.backgroundColor = "white";
}
//range slider
let range = document.getElementById('range');
output.innerText = `${range.value} X ${range.value}`;
range.oninput = function () {
  let output = document.getElementById('output');
  output.innerText= `${this.value} X ${this.value}`;
  //clear the pixels before creating new grid size
  restart();
  createGrid();
}

