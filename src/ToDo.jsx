import React from "react";

function ToDo({ handleSubmit, handleChange, task, handleClose }) {
  function onHandleChange(event) {
    handleChange(event);
  }

  function onSubmithandle(event) {
    handleSubmit(event);
  }

  function onClose(event) {
    handleClose(event);
  }
  return (
    <div className="flex flex-col space-y-6 p-4 border-2 border-gray-100 rounded-md shadow-md">
      <h1 className="font-semibold text-xl">Create a Todo</h1>
      <div>
        <form onSubmit={onSubmithandle} className="flex flex-col space-y-4">
          <input
            type="text"
            value={task}
            placeholder="Please write here"
            onChange={onHandleChange}
            required
            className="rounded-md w-80 p-1 shadow-sm border-2 border-gray-300 focus:z-10 focus:border-orange-400 focus:outline-none focus:ring-orange-400"
          />
          <div>
            <button
              type="submit"
              className="bg-orange-400  px-4 py-1 text-white rounded-md hover:bg-orange-600"
            >
              Save
            </button>
            <button
              type="submit"
              className="ml-4 px-4 py-1 rounded-md border border-gray-300"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToDo;
