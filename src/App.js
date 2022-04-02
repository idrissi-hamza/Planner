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
    const timer = setTimeout(() => {
      setMsg("");
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [tasks]);

  useEffect(() => {
    const fetchData = async () => {
      setMsg("Loading...");
      try {
        const response = await fetch(`${URL}`);
        console.log(response);
        if (!response.ok) throw new Error("Failed to load data!");

        const data = await response.json();
        setMsg("Updated !");
        console.log(data);
        return data;
      } catch (err) {
        setMsg(err.message);
      }
    };

    fetchData();

  }, []);

  useEffect(() => {
    const sendDataRequest = async () => {
      setMsg("Sending data");
      try {
        const response = await fetch(`${URL}`, {
          method: "PUT",
          body: JSON.stringify(tasks),
        });
        if (!response.ok) throw new Error("Faild to send data!");
        setMsg("Updated !");
      } catch (err) {
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
