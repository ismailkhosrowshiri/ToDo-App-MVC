class View {
  constructor() {
    this.addForm = document.querySelector(".add-input");
    this.search = document.querySelector(".search input");
    this.list = document.querySelector(".ul-list");
    this.addBtn = document.querySelector(".btn-add");
    this.complete_btn = document.querySelector(".complete");
    this.filterTodoParent = document.querySelector(".footer");
    this.active_btn = document.querySelector(".active");
    this.all_btn = document.querySelector(".all");
    this.complete_btn = document.querySelector(".complete");
    this.statusTodo = "";
  }

  // render page
  bindRenderTodo(todo) {
    this.list.textContent = "";
    todo.forEach((task) => {
      const { id, text, completed, edit } = task;
      let todoList = document.createElement("li");
      todoList.classList.add("list-item");
      todoList.id = id;
      this.list.prepend(todoList);
      let todoListItemInput = document.createElement("input");
      todoListItemInput.classList.add("complete-txt");
      todoListItemInput.type = "checkbox";
      todoList.appendChild(todoListItemInput);
      let todoListItemSpan = document.createElement("span");
      todoListItemSpan.classList.add("main-text");
      todoListItemSpan.textContent = text;
      todoList.appendChild(todoListItemSpan);
      let todoListItemEdit = document.createElement("div");
      todoListItemEdit.classList.add("edit-list");
      todoList.appendChild(todoListItemEdit);
      let todoListItemDelete = document.createElement("div");
      todoListItemDelete.classList.add("delete-list");
      todoList.appendChild(todoListItemDelete);
      if (completed === true) {
        todoListItemInput.checked = true;
      }

      if (edit === true) {
        todoListItemSpan.contentEditable = true;
      }
    });
  }

  // add todo
  bindAddTodoToList(handelAddTodo) {
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let newTodoText = this.addForm.value.trim();

      if (newTodoText.length != 0) {
        handelAddTodo(newTodoText);
        this.addForm.value = "";
      }
    });
  }

  // edit todo

  bindEditTodo(editTodo) {
    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-list")) {
        let id = parseInt(e.target.parentElement.id);
        let edit = e.target.previousElementSibling.textContent;
        editTodo(id, edit);
      }
    });
  }

  // delete todo

  bindDeleteTodo(deleteTodo) {
    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-list")) {
        let deleteId = parseInt(e.target.parentElement.id);
        deleteTodo(deleteId);
      }
    });
  }
  // toggle todo
  bindToggleTodo(toggleTodo) {
    this.list.addEventListener("click", (e) => {
      if (e.target.classList.contains("complete-txt")) {
        let toggleId = parseInt(e.target.parentElement.id);
        toggleTodo(toggleId);
      }
    });
  }

  // search todo

  bindSearchTodo(filterTodo) {
    this.search.addEventListener("keyup", () => {
      const term = this.search.value.trim().toLowerCase();
      filterTodo(term);
    });
  }
  // filter todo
  bindFilterTodo(filterTodoStatus) {
    this.filterTodoParent.addEventListener("click", (e) => {
      if (e.target.classList.contains("all")) {
        this.statusTodo = "all";
        this.all_btn.classList.add("clicked-class");
        this.active_btn.classList.remove("clicked-class");
        this.complete_btn.classList.remove("clicked-class");
        filterTodoStatus(this.statusTodo);
      } else if (e.target.classList.contains("complete")) {
        this.statusTodo = "complete";
        this.all_btn.classList.remove("clicked-class");
        this.active_btn.classList.remove("clicked-class");
        this.complete_btn.classList.add("clicked-class");
        filterTodoStatus(this.statusTodo);
      } else if (e.target.classList.contains("active")) {
        this.statusTodo = "active";
        this.all_btn.classList.remove("clicked-class");
        this.active_btn.classList.add("clicked-class");
        this.complete_btn.classList.remove("clicked-class");
        filterTodoStatus(this.statusTodo);
      }
    });
  }
}

export default View;
