import "./App.css";
import Month from "./components/Month";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen  flex flex-col">
      <Header />
      <main className="flex flex-1 ">
        <Navbar />
        <Month />
      </main>
    </div>
  );
}

export default App;
