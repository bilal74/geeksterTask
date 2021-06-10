import React, { useState } from "react";
import { ItemWidget, CompleteWidget, UpcomingWidget } from "./Widget";

export default function Home() {
  let date = new Date();
  date = date.toLocaleDateString();

  const [newtask, setNewTask] = useState("");
  const [edittask, setEditTask] = useState();
  const [showEdit, setShowEdit] = useState(false);
  const [task, setTask] = useState([
    { id: 1, title: "Drinking Water", date: "12-012021", complete: false }
  ]);

  const [completetask, setCompleteTask] = useState([]);
  const [upcomingtask, setUpcoming] = useState([]);
  const addTask = (e) => {
    e.preventDefault();
    if (newtask !== "") {
      setTask((oldTask) => {
        return [...oldTask, { title: newtask, id: oldTask.length + 1 }];
      });
      setNewTask("");
    }
  };
  const deleteTask = (id) => {
    setTask((oldTask) => {
      return oldTask.filter((item) => {
        return item.id !== id;
      });
    });
  };
  const deleteUpcomingTask = (id) => {
    setCompleteTask((oldTask) => {
      return oldTask.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const completedTask = (id) => {
    setCompleteTask((oldTask) => {
      const data1 = task.filter((item) => {
        if (item.id === id) {
          return item;
        }
      });
      const time = new Date();
      data1[0].date = time.toLocaleString();

      return [...oldTask, data1[0]];
    });
    setTask((oldTask) => {
      return oldTask.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const renderTask = (task) => {
    return (
      <>
        {task.map((item) => {
          return (
            <ItemWidget
              title={item.title}
              id={item.id}
              delete={deleteTask}
              complete={completedTask}
              edit={editTask}
            />
          );
        })}
      </>
    );
  };
  const editTask = (id, title) => {
    setShowEdit(true);
    setEditTask(id);
    setNewTask(title);
  };
  const editForm = (e) => {
    e.preventDefault();

    if (newtask !== "") {
      setTask((oldTask) => {
        const arr = [];
        oldTask.filter((item) => {
          if (item.id === edittask) {
            item.title = newtask;
            arr.push(item);
          } else {
            arr.push(item);
          }
        });
        console.log(arr);
        return arr;
      });
      setNewTask("");
    }
    setShowEdit(false);
  };

  const upcomingTask = (task) => {
    return (
      <>
        {task.map((item) => {
          return (
            <UpcomingWidget title={item.title} id={item.id} date={item.date} />
          );
        })}
      </>
    );
  };

  const completeTask = (task) => {
    return (
      <>
        {task.map((item) => {
          return (
            <CompleteWidget
              title={item.title}
              id={item.id}
              date={item.date}
              delete={deleteUpcomingTask}
            />
          );
        })}
      </>
    );
  };

  const change = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <>
      {showEdit ? (
        <div className="container-fluid my-5" id="editcol">
          <div className="row m-5" id="editrow">
            <div className="col-sm-12 col-md-6" id="card1">
              <div className="row">
                <div className="col">
                  <h3 className="py-2">Edit task</h3>
                </div>
                <div className="col">
                  <button
                    class="btn btn-outline-danger mt-2"
                    onClick={() => {
                      setShowEdit(false);
                      setNewTask("");
                    }
                  }
                  >
                    close
                  </button>
                </div>
              </div>

              <div class="col-md-12 my-4" id="task">
                <form class="row g-3 mx-2">
                  <div class="col-sm-10">
                    <label for="task" class="visually-hidden">
                      Task
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="task"
                      name="edittask"
                      placeholder="task"
                      value={newtask}
                      onChange={change}
                    />
                  </div>
                  <div class="col-sm-2">
                    <button
                      type="submit"
                      class="btn btn-outline-primary mb-3"
                      onClick={editForm}
                    >
                      edit
                    </button>
                  </div>
                </form>
              </div>
              {/* {renderTask(task)} */}
            </div>
          </div>
        </div>
      ) : null}

      <div className="container my-5">
        <div className="row g-5">
          <div className="col-lg-6 mb-4" id="card1">
            <h3 className="py-2">To Do</h3>
            <div class="col-md-12 my-4" id="task">
              <form class="row g-3 mx-2">
                <div class="col-sm-10">
                  <label for="task" class="visually-hidden">
                    Task
                  </label>
                  <input
                    value={newtask}
                    type="text"
                    class="form-control"
                    id="task"
                    name="newtask"
                    placeholder="task"
                    onChange={change}
                  />
                </div>
                <div class="col-sm-2">
                  <button
                    type="submit"
                    class="btn btn-outline-primary mb-3"
                    onClick={addTask}
                  >
                    +
                  </button>
                </div>
              </form>
            </div>
            {renderTask(task)}
          </div>
          <div className="col-lg-6 mb-4" id="card1">
            <h3 className="py-2">Completed</h3>
            {completeTask(completetask)}
          </div>

          <div className="col-lg-4 mb-4" id="card1">
            <h3 className="py-2">Upcoming Event</h3>
            <p>{date}</p>
            {upcomingTask(upcomingtask)}
          </div>
        </div>
      </div>
    </>
  );
}
