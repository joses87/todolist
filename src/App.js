//import logo from './logo.svg';
// import './App.css';
// import ProjectList from "./ProjectList";

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Build React app",
    isComplete: false,
    dateCreated: new Date(),
    dateCompleted: new Date(),
    priority: 1,
  },
  {
    id: 2,
    title: "Build Css app",
    isComplete: false,
    dateCreated: new Date(),
    dateCompleted: new Date(),
    priority: 2,
  },
  {
    id: 3,
    title: "fill Up Car",
    isComplete: true,
    dateCreated: new Date(),
    dateCompleted: new Date(),
    priority: 2,
  },
];

const tasks = [
  {
    id: 1,
    projectId: 1,
    taskName: "Create ",
  },
  {
    id: 2,
    projectId: 1,
    taskName: "create index.html file",
  },
  {
    id: 3,
    projectId: 2,
    taskName: "PHP task",
  },
  {
    id: 4,
    projectId: 2,
    taskName: "C# ",
  },
];

export default function App() {
  const [projectId, setProjectId] = useState(0);

  function handleSetTask(value) {
    console.log("handleSetTask: ", value);
    setProjectId(value);
  }

  return (
    <div className="App">
      <ProjectList handleSetTask={handleSetTask} />
      <TaskList projectId={projectId} />
    </div>
  );
}

function ProjectList({ handleSetTask }) {
  return (
    <ul>
      {projects.map((project) => (
        <Project
          key={project.id}
          project={project}
          handleSetTask={handleSetTask}
        />
      ))}
    </ul>
  );
}

function Project({ project, handleSetTask }) {
  function handleOnClick(e) {
    const projectId = e.target.value;
    handleSetTask(projectId);
  }

  return (
    <li onClick={handleOnClick} value={project.id}>
      Id: {project.id}: Title: {project.title}: Completed:
      {project.isComplete.toString()}
    </li>
  );
}

function TaskList({ projectId }) {
  console.log(projectId);
  return (
    <ul>
      {tasks
        .filter((item) => item.projectId === projectId)
        .map((task) => (
          <Task key={task.id} task={task} projectId={projectId} />
        ))}
    </ul>
  );
}

function Task({ task }) {
  return (
    <li>
      Id: {task.id}|| Title:{task.taskName}|| ProjectId:{task.projectId}
    </li>
  );
}
