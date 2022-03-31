import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks";

function Form() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState('');

  const clickHandler = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const changeHandler=(e)=>{
    setTask(e.target.value)
  }
  return (
    <div className=" p-4 pl-6 flex-1">
      <button
        onClick={clickHandler}
        className="flex items-center gap-4 text-blue-600  font-semibold hover:bg-slate-200 w-64 h-8 p-2 rounded-full "
      >
        <span className="material-icons-outlined">add_task</span>Add a Task
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShowInput(false);
          dispatch(tasksActions.addTask(task))
          setTask('')
        }}
      >
        {showInput && (
          <div className="flex items-center justify-start mt-2 text-slate-400 pb-1 border-b ">
            <span className="material-icons-outlined">add</span>
            <input
              className="outline-none pl-3"
              type="text"
              placeholder="Add a task"
              value={task}
              ref={inputRef}
              onChange={changeHandler}
            ></input>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
