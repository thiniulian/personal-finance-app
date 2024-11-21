import "./App.css";
import "./scss/main.scss";
import { Button } from "./components/button/Button";
import Pagination from "./components/pagination/Pagination";
import Sidebar from "./components/sidebar/sidebarComponent/Sidebar";

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
        
      <Pagination></Pagination>

      <Sidebar></Sidebar>
    </>
  );
}

export default App;
