import type { Task } from "../types/task.ts";
import { Trash ,CheckLine,RotateCcw} from "lucide-react";

type Props = {
  task : Task;
  ontoggle : (id :number) => void;
  onDelete : (id :number) => void;
  
};

export const TaskItem = ({task,ontoggle, onDelete} : Props) => {
  return (
    <div style={{
      display :"flex",
      padding:"10px",
      marginTop:"10px",
      alignItems:"center",
      gap:"10px",
      marginBottom:"8px",
      backgroundColor:"#EEEEEE",
      borderRadius :"12px",
      fontSize:"17px"
    }}>
      <span style={{
        textDecoration : task.completed ? "line-through " : "none",
        flex :1,
      }}>
        {task.title}
      </span>
      <button onClick={() => ontoggle(task.id)}>
        {task.completed ? <RotateCcw /> : <CheckLine />}
      </button>

      <button onClick={() => onDelete(task.id)}><Trash /></button>
    </div>
  )
};

export default TaskItem;
