import { useSelector } from "react-redux";

const AppManagement = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  console.log(tasks);
  return <div className="text-3xl font-bold underline">AppManagement</div>;
};

export default AppManagement;
