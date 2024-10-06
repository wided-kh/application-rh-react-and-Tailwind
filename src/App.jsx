
import React, { useState } from "react";
import Sidebar from "./components/SidebarAdmin/AdminSidebar";
import MainContent from "./components/Main/Main";


const App = () => {
  const [darkMode,setDarkMode] = useState(true);

  const [isOpen, setIsOpen]=useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={ 'flex font-Montserrat bg-slate-700 $ {darkMode && "dark"}'}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}
      />
      <MainContent isOpen={isOpen} darkMode={darkMode} toggleDarkMode= {toggleDarkMode} />
    </div>
  );
};

export default App;