import A from "./components/A";
import B from "./components/B";

function App() {
  return (
    <div className="App">
      <A>
        <B />
        <B />
        <B />
        text
      </A>
    </div>
  );
}

export default App;
