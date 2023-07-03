import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons__button">
      {tasks.length > 0 && (
        <>
      <button className="buttons__button button--markAllDoneButton">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button button--toggleHideDoneButton"
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
      </>
      )}
    </div>
  );

export default Buttons;
