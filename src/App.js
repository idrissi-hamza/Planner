import "./App.css";
import Month from "./components/Month";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TasksBar from "./components/TasksBar";

function App() {
  return (
    <div className="  flex flex-col h-screen ">
      <Header />
      <main className="flex  h-full">
        <Navbar />
        <Month />
        <TasksBar/>
      </main>
    </div>
  );
}

export default App;
