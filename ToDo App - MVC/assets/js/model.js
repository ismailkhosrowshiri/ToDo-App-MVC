class Model {
  constructor() {
    let database = [];
    let countid = 0;
  }
  addtodo =(todotext)=>{
      let todo={
          Text=todotext,
          id=countid++,
          complete=false,
          edit=false
      };
      this.database.push(todo);
  };
}
export default Model;

