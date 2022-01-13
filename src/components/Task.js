import { FaTimes } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";

const Task = ({ task, onDelete, onToggle, updateTask }) => {
  const update = (...data) => {
    updateTask(...data);
    // console.log(...data);
  };

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />{" "}
        <BsPencilFill
          onClick={() => update(task.id, task.text, task.reminder)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
