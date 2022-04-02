import "./App.css";
import Month from "./components/Month";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TasksBar from "./components/TasksBar/TasksBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const URL = process.env.REACT_APP_URL;
let isInitial = true;
function App() {
  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    fetch(` ${URL} `, {
      method: "PUT",
      body: JSON.stringify(tasks),
    });
  }, [tasks]);
  return (
    <div className="  flex flex-col h-screen ">
      <Header />
      <main className="flex  h-full">
        <Navbar />
        <Month />
        <TasksBar />
      </main>
    </div>
  );
}

export default App;
