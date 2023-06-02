const transhCan = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';
const pen = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>';
const save = '<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,20V8.414a1,1,0,0,0-.293-.707L16.293,3.293A1,1,0,0,0,15.586,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20ZM9,8h4a1,1,0,0,1,0,2H9A1,1,0,0,1,9,8Zm7,11H8V15a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1Z"/></svg>';
const cancel = '<svg focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>';
const add = '<svg focusable viewBox="0 0 24 24" aria-hidden="true xmlns="http://www.w3.org/2000/svg"><path d="M12 6V18M18 12H6" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';


const API = (function () {
  const API_URL = "http://localhost:3000/events";

  const getTodos = async () => {
    const res = await fetch(`${API_URL}`);
    return await res.json();
  };
  const putTodo = async (oldTodo, id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(oldTodo),
    });
    console.log("----------  putTodo  -----------");
    const stuff = await res.json(); 
    console.log(stuff);
    return stuff;
  };
  const postTodo = async (newTodo) => {
    const res = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newTodo),
    });
    console.log("----------  postTodo  -----------");
    const stuff = await res.json(); 
    console.log(stuff);
    return stuff;
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    return await res.json();
  };

  return {
    getTodos,
    postTodo,
    deleteTodo,
    putTodo
  };
})();

// class TodoModel {
//   #todos = [];
//   constructor() {}
//   getTodos() {
//     return this.#todos;
//   }
//   async fetchTodos() {
//     this.#todos = await API.getTodos();
//   }
//   async addTodo(newTodo) {
//     console.log("---- addTodo ----");
//     console.log(newTodo);
//     const todo = await API.postTodo(newTodo);
//     this.#todos.push(todo);
//     console.log(todo);
//     return todo;
//   }
//   async updateTodo(updateTodo) {
//     const todo = await API.putTodo(updateTodo);
//     console.log("---- TodoModel ----");
//     console.log(todo)
//     for (let i = 0; i < this.#todos.length; i++) {
//       if (this.#todos[i].id == todo.id) {
//         this.#todos[i].title = todo.title;
//         break;
//       }
//     }
    
//     return todo 
//   }
//   async removeTodo(id) {
//     const removedId = await API.deleteTodo(id);
//     this.#todos = this.#todos.filter((todo) => todo.id !== id);
//     return removedId;
//   }
// }

// class TodoView {
//   constructor() {
//     this.tb = document.getElementById("todotbody");
//   }

//   initRenderTodos(todos) {
//     this.todolist.innerHTML = "";
//     todos.forEach((todo) => {
//       console.log(todo);
//       this.appendTodo(todo);
//     });
//   }
//   updateTodo(todo) {
//     console.log("==== updateTodo =====");
//     console.log(todo);
//     document.getElementById(`todo__textbox${todo.id}`).value="";
//     document.getElementById(`todo__textbox${todo.id}`).placeholder = todo.title;
//   }
//   removeTodo(id) {
//     const element = document.getElementById(`todo-${id}`);
//     element.remove();
//   }

//   appendTodo(todo) {
//     const todoElem = this.createTodoElem(todo);
//     this.todolist.append(todoElem);
//   }

//   createTodoElem(todo) {
//     const todoElem = document.createElement("div");
//     todoElem.classList.add("todo");
//     todoElem.setAttribute("id", `todo-${todo.id}`);

//     const title = document.createElement("input");
//     title.type="text";
//     title.classList.add("title");
//     title.id = "todo__textbox"+todo.id;
//     title.placeholder = todo.title;
//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("todo__delete-btn");
//     deleteBtn.setAttribute("remove-id", todo.id);
//     deleteBtn.textContent = "delete";
//     //edit button
//     const editBtn = document.createElement("button");
//     editBtn.classList.add("todo__update-btn");
//     editBtn.setAttribute("update-id", todo.id);
//     editBtn.textContent = "update";

//     todoElem.append(title, deleteBtn, editBtn);
//     return todoElem;
//   }
// }

// class TodoController {
//   constructor(model, view) {
//     this.model = model;
//     this.view = view;
//     this.init();
//   }

//   async init() {
//     this.setUpEvents();
//     await this.model.fetchTodos();
//     this.view.initRenderTodos(this.model.getTodos());
//   }

//   setUpEvents() {
//     this.setUpAddEvent();
//     this.setUpDeleteEvent();
//     this.setUpdateEvent();
//   }
//   setUpAddEvent() {
//     this.view.form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const title = this.view.input.value;
//       this.model
//         .addTodo({
//           title,
//           completed: false,
//         })
//         .then((todo) => {
//           this.view.appendTodo(todo);
//         });
//     });
//   }
//   setUpDeleteEvent() {
//     this.view.todolist.addEventListener("click", (e) => {
//       const isDeleteBtn = e.target.classList.contains("todo__delete-btn");
//       if (isDeleteBtn) {
//         const removeId = e.target.getAttribute("remove-id");
//         this.model.removeTodo(removeId).then(() => {
//           this.view.removeTodo(removeId);
//         });
//       }
//     });
//   }
//   setUpdateEvent() {
//     this.view.todolist.addEventListener("click", (e) => {
//       const isUpdateBtn = e.target.classList.contains("todo__update-btn");
      
//       if (isUpdateBtn) {
//         const updateId = e.target.getAttribute("update-id");
//         console.log("---- setUpdateEvent ----");
//         console.log(document.getElementById("todo__textbox"+updateId).value )
//         const obj={
//           "id": updateId,
//           "title" : document.getElementById("todo__textbox"+updateId).value 
//         }
//         this.model.updateTodo(obj).then((x) => {
//           this.view.updateTodo(x);
//         });
//       }
//     });
//   }
// }

// const model = new TodoModel();
// const view = new TodoView();
// const controller = new TodoController(model, view);

//initialize table


async function init() {
  let events = await API.getTodos();



let tbdy = document.getElementById("todotbody");
tbdy.innerHTML = "";
for (let i = 0; i < events.length; i++) {
  const row = document.createElement('tr');
  row.setAttribute('rstatus', 1);
  row.classList.add("tableRow");

  const four = document.createElement('td');
  four.innerText = events[i].eventName;
  four.classList.add("one");
  
  const one = document.createElement('td');
  one.innerText = events[i].startDate;
  one.classList.add("two");
  
  const two = document.createElement('td');
  two.innerText = events[i].endDate;
  two.classList.add("three");

  const three = document.createElement('td');
  const ebut = document.createElement('button');
  ebut.innerHTML = pen;
  ebut.classList.add("edBut");
  
  
  const debut = document.createElement('button');
  debut.innerHTML = transhCan;
  debut.classList.add("delBut");
  debut.addEventListener('click', function() {
    calcelEdit(row);
  });
  ebut.addEventListener('click', function() {
    turnSave(row);
  });
  
  three.appendChild(ebut);
  three.appendChild(debut);
  
  row.appendChild(four);
  row.appendChild(one);
  row.appendChild(two);
  row.appendChild(three);
  
  tbdy.appendChild(row);
}
}
async function saveToServer(eve, std, end) {
    await API.postTodo({
      "eventName": eve,
      "startDate": std,
      "endDate": end,
    });
}
async function changeServer(eve, std, end, id) {
  await API.putTodo({
    "eventName": eve,
    "startDate": std,
    "endDate": end,
  }, id);
}
async function delDB(id) {
  const removedId = await API.deleteTodo(id);
}
init();

//o = + 1 = save 2 = pen
function calcelEdit(tr) {
  let status = tr.getAttribute('rstatus');
  
  const tbody = document.getElementById("todotbody");
    // Get the last row in the tbody
    if (status == 0) {// drop last row
      const lastRow = tbody.rows[tbody.rows.length - 1];
      // Remove the last row from the tbody
      tbody.removeChild(lastRow);
    } else if (status == 2) { // not change anything
      console.log("enter dude!!!!");
      let edBut, delBut; 
      const buttons = tr.querySelectorAll('button');
      buttons.forEach(button => {
        if (button.classList.contains('edBut')) {
          console.log('get edbut');
          edBut = button;
        } else {
          console.log('get delBut');
          delBut = button;
        }
      });
      edBut.innerHTML = pen;
      delBut.innerHTML = transhCan;
      tr.setAttribute('rstatus', 1);
      //make UI uneditable
      const std = tr.querySelectorAll('.std')[0];
      const end = tr.querySelectorAll('.end')[0];
      const title = tr.querySelectorAll('.title')[0];
      one = tr.querySelectorAll('.one')[0];
      two = tr.querySelectorAll('.two')[0];
      three = tr.querySelectorAll('.three')[0];
      one.innerHTML = title.value;
      two.innerHTML = std.value;
      three.innerHTML = end.value;


    } else { //delete that row
      
      //send delete request
      const rows = document.getElementById("todotbody").getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        if (rows[i] == tr) {
          console.log("we delete " + i + " th row ");
          delDB(i+1);
          break;
        }
      }
      tbody.removeChild(tr);
      
    }
}

function turnSave(tr) {
  let status = tr.getAttribute('rstatus');
  let edBut, delBut; 
  const buttons = tr.querySelectorAll('button');
  buttons.forEach(button => {
    if (button.classList.contains('edBut')) {
      edBut = button;
    } else {
      delBut = button;
    }
  });
  console.log("enter dude");
  if (status == 0) {
    edBut.innerHTML = pen
    delBut.innerHTML = transhCan
    status = 1;

    //send post
    const std = tr.querySelectorAll('.std')[0];
    const end = tr.querySelectorAll('.end')[0];
    const title = tr.querySelectorAll('.title')[0];
    one = tr.querySelectorAll('.one')[0];
    two = tr.querySelectorAll('.two')[0];
    three = tr.querySelectorAll('.three')[0];
    one.innerHTML = title.value;
    two.innerHTML = std.value;
    three.innerHTML = end.value;
    
    saveToServer(title.value, std.value, end.value);
  } else if (status == 1) {
    edBut.innerHTML = save
    delBut.innerHTML = cancel
    status = 2;
    console.log(" ###### ");
    //change UI to editable
    one = tr.querySelectorAll('.one')[0];
    two = tr.querySelectorAll('.two')[0];
    three = tr.querySelectorAll('.three')[0];
    const title = document.createElement('input');
    title.type="text";
    title.value = one.innerText;
    title.classList.add("title");
    one.innerHTML = "";
    one.appendChild(title);

    const std = document.createElement('input');
    std.type="date";
    std.value = two.innerText;
    std.classList.add("std");
    two.innerHTML = "";
    two.appendChild(std);

    const end = document.createElement('input');
    end.type="date";
    end.value = three.innerText;
    end.classList.add("end");
    three.innerHTML = "";
    three.appendChild(end);
  } else {
    edBut.innerHTML = pen
    delBut.innerHTML = transhCan
    
      //make UI uneditable
      const std = tr.querySelectorAll('.std')[0];
      const end = tr.querySelectorAll('.end')[0];
      const title = tr.querySelectorAll('.title')[0];
      one = tr.querySelectorAll('.one')[0];
      two = tr.querySelectorAll('.two')[0];
      three = tr.querySelectorAll('.three')[0];
      one.innerHTML = title.value;
      two.innerHTML = std.value;
      three.innerHTML = end.value;

    //send put request to change db
    status = 1;
    //need to know which th row

    const rows = document.getElementById("todotbody").getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      if (rows[i] == tr) {
        console.log("we got " + i + " th row ");
        changeServer(title.value, std.value, end.value, i+1);
        return;
      }
    }

    
    //
  }
  tr.setAttribute('rstatus', status);
}

function addEvent() {
  const row = document.createElement('tr');
  row.setAttribute('rstatus', 0);
  row.classList.add("tableRow");
  const four = document.createElement('td');
  const title = document.createElement('input');
  title.type="text";
  title.classList.add("title");
  four.appendChild(title);
  four.classList.add("one");

  const one = document.createElement('td');
  const dd = document.createElement('input')
  dd.type="date";
  dd.classList.add("std");
  one.appendChild(dd);
  one.classList.add("two");

  const two = document.createElement('td');
  const d = document.createElement('input')
  d.type="date";
  d.classList.add("end");
  two.appendChild(d);
  two.classList.add("three");

  const three = document.createElement('td');
  const ebut = document.createElement('button');
  ebut.innerHTML = '<svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V18M18 12H6" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  ebut.classList.add("edBut");
  

  const debut = document.createElement('button');
  debut.innerHTML = '<svg focusable="false" aria-hidden="true" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M19.587 16.001l6.096 6.096c0.396 0.396 0.396 1.039 0 1.435l-2.151 2.151c-0.396 0.396-1.038 0.396-1.435 0l-6.097-6.096-6.097 6.096c-0.396 0.396-1.038 0.396-1.434 0l-2.152-2.151c-0.396-0.396-0.396-1.038 0-1.435l6.097-6.096-6.097-6.097c-0.396-0.396-0.396-1.039 0-1.435l2.153-2.151c0.396-0.396 1.038-0.396 1.434 0l6.096 6.097 6.097-6.097c0.396-0.396 1.038-0.396 1.435 0l2.151 2.152c0.396 0.396 0.396 1.038 0 1.435l-6.096 6.096z"></path></svg>'
  debut.classList.add("delBut");
  debut.addEventListener('click', function() {
    calcelEdit(row);
  });
  ebut.addEventListener('click', function() {
    turnSave(row);
  });

  three.appendChild(ebut);
  three.appendChild(debut);

  row.appendChild(four);
  row.appendChild(one);
  row.appendChild(two);
  row.appendChild(three);
  
  document.getElementById("todotbody").appendChild(row);

}
