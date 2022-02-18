class Model {
  constructor() {
    // database todo
    this.database = [];

    // id todo
    this.countId = 0;
  }

  // render Todo to view

  renderTodo(render) {
    this.render = render;
  }

  // add todo to database

  addTodo(todo) {
    this.database.push({
      id: this.countId,
      text: todo,
      completed: false,
      edit: false,
    });
    this.countId++;
    this.render(this.database);
  }

  // toggle Todo to database

  toggleTodo(id) {
    this.database = this.database.map((todo) =>
      todo.id === id ? { id: todo.id, text: todo.text, completed: !todo.completed } : todo
    );
    this.render(this.database);
  }

  // edit todo to database
  editTodo(idTodo, editTodo) {
    for (let editText of this.database) {
      if (idTodo === editText.id) {
        editText.edit = !editText.edit;
        editText.text = editTodo;
      }
    }
    this.render(this.database);
  }

  // delete todo to database

  deleteTodo(id) {
    this.database = this.database.filter((todo) => {
      return todo.id !== id;
    });
    this.render(this.database);
  }

  // search todo to database
  searchTodo(term) {
    const searchTodo = this.database.filter((todo) => {
      return todo.text.toLowerCase().includes(term.toLowerCase());
    });
    this.render(searchTodo);
  }

  // filter todo  to database
  filterTodo(statusTodo) {
    if (statusTodo === "all") {
      this.render(this.database);
    } else if (statusTodo === "complete") {
      let filterDataBase = this.database.filter((filter) => {
        return filter.completed !== false;
      });
      this.render(filterDataBase);
    } else if (statusTodo === "active") {
      let filterDataBase = this.database.filter((filter) => {
        return filter.completed !== true;
      });
      this.render(filterDataBase);
    }
  }
}
export default Model;
