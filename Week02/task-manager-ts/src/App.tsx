import { useState } from "react";
import TaskItem from "./componenets/TaskItem";
import { useTasks } from "./hooks/useTasks";

type Filter = "all" | "active" | "completed";

const App = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        backgroundColor: "#DDAED3",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center" }}> Task Manager </h2>
      <div
        className="top-box"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          padding: "20px",
          alignItems: "center",
          borderRadius: "12px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Task... "
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask(title);
              setTitle("");
            }
          }}
          value={title}
          style={{
            width: "300px",
            height: "20px",
            borderRadius: "20px",
            padding: "10px",
            outline: "none",
            border: "none",
          }}
        />
        <button
          style={{
            height: "30px",
            width: "90px",
          }}
          onClick={() => {
            addTask(title);
            setTitle("");
          }}
        >
          Add Task
        </button>
      </div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <p>
        Total: {tasks.length} | Active:{" "}
        {tasks.filter((t) => !t.completed).length}
      </p>

      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          ontoggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default App;

// gujhvurxou
