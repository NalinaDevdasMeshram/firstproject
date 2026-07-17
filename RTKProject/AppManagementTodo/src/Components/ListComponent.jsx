import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { fetchTodo } from "../features/taskSlice";
const ListComponent = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  if (loading) {
    return <p>Task loading...</p>;
  }
  if (error) {
    return <p>there is an error {error}</p>;
  }

  return (
    <div>
      <div>
        <h2>Tasks</h2>
        <ul className="space=y-4 gap-2">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {task.title}
                  </h3>
                  {task.description && (
                    <p className="text-gray-600">{task.description}</p>
                  )}
                  <p className="mt-1 text-sm font-semibold">
                    status:{" "}
                    <span className="italic underline">{task.status}</span>
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-white rounded-md cursor-pointer hover:bg-blue-400 bg-blue-600">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-white rounded-md cursor-pointer bg-red-600 hover:bg-red-400">
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ListComponent;
