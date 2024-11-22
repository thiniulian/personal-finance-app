import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/sidebar/sidebarComponent/Sidebar";
import Overview from "./components/pages/overview/Overview";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      
      <div className="pages">
        <Routes>
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
          <Route path='/' element={<Overview/>} /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;