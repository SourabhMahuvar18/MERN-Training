// there will be 2 classes
// task - for individual task
// taskmanager - manages all the tasks

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
    this.isCompleted = false;
  }
  markCompleted() {
    this.isCompleted = true;
  }
}

class TodoManager {
  constructor() {
    this.todos = [];
    this.idCounter = 1;
  }
  add(title) {
    const todo = new Todo(this.idCounter++, title);
    this.todos.push(todo);
  }
  complete(id) {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) return console.log("Todo not Found");
    // if found then mark it completed
    todo.markCompleted();
  }
  remove(id) {
    const todo = this.todos.filter((t) => t.id !== id);
  }
  list() {
    this.todos.forEach((todo) => {
      console.log(`${todo.id}. ${todo.title} ${todo.completed ? "✅" : "❌"}`);
    });
  }
}

// creating object and testing the classe base system

const todo = new TodoManager();
todo.add("Learn javascript");
todo.add("learn OOPS & practice");
todo.add("Practice for building projects");

todo.list();

todo.complete(2);

todo.remove(1);
console.log("delting ");
todo.list();



