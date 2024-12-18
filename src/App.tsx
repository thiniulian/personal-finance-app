import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebarComponent/Sidebar";
import Overview from "./pages/overview/Overview";
import Transactions from "./pages/transactions/Transactions";
import menuOptions from "./data/sidebarOptions";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar menuOptions = {menuOptions}></Sidebar>
      
      <div className="pages">
        <Routes>
          <Route path='/' element={<Overview/>} /> 
          <Route path='/transactions' element={<Transactions/>} /> 
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;