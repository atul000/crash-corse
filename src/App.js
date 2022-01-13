import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Swimming Time",
      day: "Mar 6th at 2:30pm",
      reminder: false,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // update task
  const updateTask = (data) => {
    // if (!id && !text && !day) {
    //   alert("all fields required");
    //   return;
    // }
    console.log("---UPDATE---", data);

    // setTasks(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  // toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
      />
      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onToggle={toggleReminder}
          updateTask={updateTask}
          onDelete={deleteTask}
        />
      ) : (
        "No Task Available"
      )}
    </div>
  );
};

export default App;
