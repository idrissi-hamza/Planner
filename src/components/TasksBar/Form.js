import React, { useRef } from "react";

function Form() {
  const inputRef = useRef(null);
  const clickHandler = () => {
    inputRef.current.focus();
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
        }}
      >
        <input
          className="outline-none "
          type="text"
          placeholder="Add a task"
          ref={inputRef}
        ></input>
      </form>
    </div>
  );
}

export default Form;
