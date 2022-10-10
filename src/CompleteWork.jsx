import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

function CompleteWork({ id, task, onDowork, onhandleRemove }) {
  function setWork() {
    onDowork(id, task);
  }

  function handleRemove() {
    onhandleRemove(id);
  }

  return (
    <div className="flex items-center">
      <input
        className="w-4 h-4  border-gray-300 rounded-lg "
        type="checkbox"
        id={id}
        checked
        onChange={setWork}
      />
      <label className="font-semibold ml-2 text-lg" for={id}>
        {task}
      </label>
      <TiDeleteOutline onClick={handleRemove} className="ml-10 text-2xl" />
    </div>
  );
}

export default CompleteWork;
