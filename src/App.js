//import logo from './logo.svg';
// import './App.css';
// import ProjectList from "./ProjectList";
import { initialProjects } from "./initialProjects";
import { tasks } from "./tasks";

import { useState } from "react";

export default function App() {
  //TODO: initialize projects array and pass it to Projects component
  const [projects, setProjects] = useState(initialProjects);
  const [projectId, setProjectId] = useState(null);

  function handleSetProjects(newFriend) {
    setProjects((project) => [...project, projects]);
  }
  function handleSetProject(id) {
    // console.log("handleSetProject: ", id);
    setProjectId(id);
  }

  const main = {
    margin: "10px",
    padding: "10px",
    display: "flex",
    border: "1px solid grey",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    justifyContent: "space-between",
  };
  const panelStyle = {
    border: "1px solid grey",
    margin: "0",
  };
  return (
    <div className="App" style={main}>
      <div className="" style={panelStyle}>
        <ProjectList projects={projects} handleSetProject={handleSetProject} />
      </div>
      {/* <div className="" style={panelStyle}>
        {showSubProject && (
          <ProjectList
            handleSetProject={handleSetProject}
            handleShowSubProject={handleShowSubProject}
          />
        )}
      </div> */}
      <div className="" style={panelStyle}>
        <TaskList projectId={projectId} />
      </div>
    </div>
  );
}

function ProjectList({ projects, handleSetProject, handleShowSubProject }) {
  const ulStyle = {
    margin: 0,
    padding: "9px",
  };
  return (
    <ul style={ulStyle}>
      {projects?.map((project) => (
        <Project
          key={project.id}
          project={project}
          handleSetProject={handleSetProject}
          handleShowSubProject={handleShowSubProject}
        />
      ))}
    </ul>
  );
}

function Project({ project, handleSetProject, handleShowSubProject }) {
  // function handleOnClick(e) {
  //   const projectId = e.target.value;
  //   console.log("projectId: ", projectId);
  //   handleSetProject(projectId);
  // }

  const listItemStyle = {
    listStyle: "none",
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
  };

  return (
    <li
      style={listItemStyle}
      onClick={() => handleSetProject(project.id)}
      value={project.id}
    >
      Id: {project.id}
      <br /> ParentId: {project.parentId?.toString()}
      <br /> Title: {project.title}
      <br /> Completed: {project.isComplete.toString()}
    </li>
  );
}

function TaskList({ projectId }) {
  // console.log("TaskList.projectId: ", projectId);
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
