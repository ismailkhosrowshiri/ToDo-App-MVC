class Controller {
  constructor(View, Model) {
    this.view = View;
    this.model = Model;

    // bind methods

    this.view.bindAddTodoToList(this.handelAddTodo.bind(this));
    this.view.bindSearchTodo(this.handelSearchTodo.bind(this));
    this.view.bindEditTodo(this.handelEditTodo.bind(this));
    this.view.bindDeleteTodo(this.handelDeleteTodo.bind(this));
    this.view.bindToggleTodo(this.handelToggleTodo.bind(this));
    this.view.bindFilterTodo(this.handelFilterTodo.bind(this));
    this.model.renderTodo(this.handelRenderTodo.bind(this));
  }
  // add Todo

  handelAddTodo(newTodoText) {
    this.model.addTodo(newTodoText);
  }

  // edit Todo

  handelEditTodo(idTodo, editTodo) {
    this.model.editTodo(idTodo, editTodo);
  }

  // delete Todo

  handelDeleteTodo(id) {
    this.model.deleteTodo(id);
  }

  // search Todo

  handelSearchTodo(term) {
    this.model.searchTodo(term);
  }

  // render Todo

  handelRenderTodo(render) {
    this.view.bindRenderTodo(render);
  }

  // toggle todo

  handelToggleTodo(id) {
    this.model.toggleTodo(id);
  }

  // filter todo status

  handelFilterTodo(statusTodo) {
    this.model.filterTodo(statusTodo);
  }
}

export default Controller;
