import "./App.css";
import Month from "./components/Month";
import { getMonth } from "./util";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const monthIndex = useSelector((state) => state.calendar.monthIndex);
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-1   ">
        <Navbar />
        <Month month={getMonth(monthIndex, 35)} />
      </main>
    </div>
  );
}

export default App;
