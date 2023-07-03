import "./style.css";

const Tasks = ({ tasks, hideDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li 
            className={`tasks__item${
                task.done && hideDone 
                 ? "tasks__item--hidden"
                  : ""}`} key={task.id}
            >
                <button className="tasks__button tasks__button--toggleDone">
                {task.done ? "✔" : ""}
            </button>
            <span className={
                `tasks__content${task.done ? " tasks__content--toggleDone " : ""}`
                }>
                    {task.content}
            </span>
           <button className="tasks__button tasks__button--remove">
             🗑
           </button>
            </li>
        ))}
    </ul>
);

export default Tasks;