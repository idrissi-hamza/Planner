import React, { useRef, useState } from "react";

function Form() {
  const inputRef = useRef(null);
  const [showInput, setShowInput] = useState(false);
  const clickHandler = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  };
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
          setShowInput(false)
        }}
      >
        {showInput && (
          <div className="flex items-center justify-start mt-2 text-slate-400 ">
            <span className="material-icons-outlined">add</span>
            <input
              className="outline-none pl-3"
              type="text"
              placeholder="Add a task"
              ref={inputRef}
            ></input>
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
