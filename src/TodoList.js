

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


]

export default function TodoList(){

    return(
    <ul>
        {projects.map(item => (<TodoItem key={item.id} item={item} />) )}
    </ul>);
}

function TodoItem({item}){
    return (
        <li key={item.id}>Title: {item.title}, Completed: {item.isComplete.toString()}</li>
    );
}