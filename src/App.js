import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">Hello World</header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project is coded by Hyunjoo Park and it's{" "}
          <a href="#" target="_blank">
            open sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
