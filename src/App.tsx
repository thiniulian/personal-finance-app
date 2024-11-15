import "./App.css";
import "./scss/main.scss";
import { Button } from "./components/button/Button";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <>
      <div>
        <Button onClick={() => {}} disabled={false} className={"destroy"}>
          <span>Yes, Confirm Deletion</span>
        </Button>

        <Button onClick={() => {}} disabled={false} className={"primary"}>
          <span>Add Budget</span>
        </Button>

        <Button onClick={() => {}} disabled={false} className={"secondary"}>
          <span> + Add Money</span>
        </Button>
      </div>
      
      <Pagination></Pagination>

    </>
  );
}

export default App;
