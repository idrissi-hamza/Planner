import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks";

function Form() {
  // const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const [task, setTask] = useState("");

  const pickDay = useSelector((state) => state.calendar.pickDay);

  const clickHandler = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    const timer = (s) => {
      setTimeout(() => {
        setShowInput(false);
      }, s * 1000);
    };
    timer(10);
    return () => {
      clearTimeout(timer);
    };
  }, [task, setTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(tasksActions.addTask({ title: task, ref: pickDay }));
    setTask("");
  };

  return (
    <div className="ml-4">
      <button
        onClick={clickHandler}
        className="flex items-center gap-4 text-blue-600  font-semibold hover:bg-slate-100 w-[300px] h-8 p-2 rounded-full "
      >
        <span className="material-icons-outlined">add_task</span>Add a Task
      </button>

      <form onSubmit={submitHandler}>
        {showInput && (
          <div className="flex items-center justify-start m-2 text-slate-400 pb-1 border-b ">
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
