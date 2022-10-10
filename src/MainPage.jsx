import React, { useState } from "react";
import { useEffect } from "react";
import CompleteWork from "./CompleteWork";
import ShowData from "./ShowData";
import ToDo from "./ToDo";

function MainPage() {
  const savedWorkString = localStorage.getItem("my-work") || "[]";
  const savedWork = JSON.parse(savedWorkString);
  const savedDoneString = localStorage.getItem("done-work") || "[]";
  const savedDone = JSON.parse(savedDoneString);

  const [task, setTask] = useState("");
  const [work, setWork] = useState(savedWork);
  const [done, setDone] = useState([]);
  const [show, setShow] = useState(savedDone);

  function onHandleChange(event) {
    setTask(event.target.value);
  }

  function onSubmithandle(event) {
    event.preventDefault();
    const newData = task;
    setWork([...work, newData]);
    setTask("");
    setShow(true);
  }

  function onShow() {
    setShow(false);
  }
  function onCloseButton() {
    setShow(true);
  }

  function onCompleteWork(id, task) {
    const newWork = task;
    setDone([newWork, ...done]);
    const finalWork = work.filter(function (item) {
      return item != id;
    });
    setWork(finalWork);
  }
  function onCompleteDoWork(id, task) {
    const newCompleteWork = task;
    setWork([newCompleteWork, ...work]);
    const finalcompleteWork = done.filter(function (item) {
      return item != id;
    });
    setDone(finalcompleteWork);
  }

  function removeClickButton(id) {
    const completeWork = done.filter(function (item) {
      return item != id;
    });
    setDone(completeWork);
  }

  useEffect(
    function () {
      const workString = JSON.stringify(work);
      localStorage.setItem("my-work", workString);
    },
    [work]
  );
  useEffect(
    function () {
      const doneString = JSON.stringify(done);
      localStorage.setItem("done-work", doneString);
    },
    [done]
  );
  return (
    <div className="max-w-6xl px-2 mx-auto mt-10 space-y-4">
      <h1 className="text-3xl font-bold">Things to get done</h1>
      <h1 className="text-xl font-semibold">Things to do</h1>
      {work.length == 0 ? (
        <div>No todo here!</div>
      ) : (
        <div className="space-y-2">
          {work.map(function (value) {
            return (
              <ShowData
                key={value}
                id={value}
                task={value}
                onSetwork={onCompleteWork}
              />
            );
          })}
        </div>
      )}

      {show ? (
        <button
          type="button"
          className="px-4 py-2 text-white bg-orange-400 rounded-full hover:bg-orange-600"
          onClick={onShow}
        >
          + Add a todo
        </button>
      ) : (
        <ToDo
          handleSubmit={onSubmithandle}
          handleChange={onHandleChange}
          handleClose={onCloseButton}
          task={task}
        />
      )}
      <h1 className="text-xl font-semibold">Things done</h1>
      {done.length == 0 ? (
        <div>No todo here!</div>
      ) : (
        <div className="space-y-2">
          {done.map(function (value) {
            return (
              <CompleteWork
                key={value}
                id={value}
                task={value}
                onDowork={onCompleteDoWork}
                onhandleRemove={removeClickButton}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MainPage;
