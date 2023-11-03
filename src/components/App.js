import React from "react";
import { CATEGORIES, TASKS } from "../data";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

function App() {
  const [tasks, setTasks] = useState(TASKS);

	
	function filterTasks(CATEGORIES) {
		if (CATEGORIES === "All") {
			setTasks(TASKS);
		} else {
			let updList = TASKS.filter((letT) => letT.category === CATEGORIES);
			setTasks(updList);
		}
	};
	function onTaskFormSubmit(updList) {
		setTasks([...tasks, updList]);
	};

	function delTasks(task) {
		let updList = tasks.filter((newT) => newT.text !== task);
		setTasks(updList);
	};

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} delTasks={delTasks}/>
    </div>
  );
}

export default App;
