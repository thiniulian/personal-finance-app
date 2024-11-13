import "./App.css";
import "./scss/main.scss";
import { Button } from "./components/button/Button";
import CaretRight from "./assets/images/icon-caret-right.svg?react";

function App() {
  return (
    <>
      <Button onClick={() => {}} disabled={false} className={"primary"}>
        <span>Placeholder</span>
      </Button>

      <Button onClick={() => {}} className={"secondary"}>
        <span>Placeholder</span>
      </Button>
      <Button onClick={() => {}} className={"tertiary"}>
        <span>
          Placeholder
          <CaretRight className="icon" />
        </span>
      </Button>

      <Button onClick={() => {}} disabled={false} className={"destroy"}>
        <span>Placeholder</span>
      </Button>
    </>
  );
}

export default App;
