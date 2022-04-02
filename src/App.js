import "./App.css";
import Month from "./components/Month";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TasksBar from "./components/TasksBar/TasksBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const URL = process.env.REACT_APP_URL;
let isInitial = true;
function App() {
  const [msg, setMsg] = useState("");
  const tasks = useSelector((state) => state.tasks);
  useEffect(() => {
    const sendDataRequest = async () => {
      setMsg("Sending data");
      try {
        const response = await fetch(`${URL}`, {
          method: "PUT",
          body: JSON.stringify(tasks),
        });
        if (!response.ok) throw new Error("faild to send data");
        console.log("worked");
        setMsg("Data sent successfully");
      } catch (err) {
        console.error(`${err.message}`);
        setMsg(err.message);
      }
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
    sendDataRequest();
  }, [tasks]);
  return (
    <>
      <div className="absolute bg-slate-900 text-slate-100 text-sm  px-2 right-0 bottom-0 z-10 ">
        {msg}
      </div>
      <div className="  flex flex-col h-screen ">
        <Header />
        <main className="flex  h-full">
          <Navbar />
          <Month />
          <TasksBar />
        </main>
      </div>
    </>
  );
}

export default App;
