let addBtn = document.getElementById("add-btn");
let parentList = document.getElementById("parentList");

// add click function

addBtn.addEventListener("click", addName)
function addName(e){
    if(parentList.children[0].className == "emptyMsg"){
        parentList.children[0].remove();  
    }
  let currentBtn = e.currentTarget;
  let currntInput = currentBtn.previousElementSibling;
  let currentName = currntInput.value;
  
  let newLi = document.createElement("li");
//   newLi.classList.add("list-group-item");
  newLi.style.marginTop = "15px";
  newLi.className = "list-group-item d-flex justify-content-between";
  newLi.innerHTML = ` <h4 class="flex-grow-1">${currentName}</h4>
  <button class="btn btn-warning mx-3" onclick="editName(this)">Edit</button>
  <button class="btn btn-danger" onclick="removeName(this)">Remove</button>`;
  parentList.appendChild(newLi);
  
}

// removeName
function removeName(currElement){
    currElement.parentElement.remove();
    let parentList = document.getElementById("parentList");
    if(parentList.children.length <= 0){
        let newEmptyMsg = document.createElement("h3");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.textContent = "Please add some thing";
        parentList.appendChild(newEmptyMsg);
    }
}

function editName(currElement){
  if(currElement.textContent == "Done"){
     currElement.textContent = "Edit";  
     let currentName = currElement.previousElementSibling.value;
     let currHeading = document.createElement('h3');
     currHeading.className = "flex-grow-1";
     currHeading.textContent = currentName;
     currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling);  

  }else{    
   currElement.textContent = "Done";
   let currentName = currElement.previousElementSibling.textContent;
   let currntInput = document.createElement("input");
   currntInput.type = "text";
   currntInput.placeholder = "Edit Your Name";
   currntInput.className = "form-control";
   currntInput.value = currentName;

   currElement.parentElement.replaceChild(currntInput,currElement.previousElementSibling);  
  }
  
}