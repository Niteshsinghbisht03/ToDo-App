import React from "react";

function ShowData({ id, task, onSetwork }) {
  function setWork() {
    onSetwork(id, task);
  }

  return (
    <div className="flex items-center">
      <input className="h-4 w-4" type="checkbox" id={id} onClick={setWork} />
      <label className="font-semibold ml-2" for={id}>
        {task}
      </label>
    </div>
  );
}

export default ShowData;
