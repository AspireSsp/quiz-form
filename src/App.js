import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/Dashboard';
import SidebarWithHeader from './component/SideBar'
import CreateForm from "./pages/CreateForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <SidebarWithHeader />}>
              <Route exact path="/" element={<Dashboard />}></Route>            
              <Route exact path="/newform" element={<CreateForm />}></Route>            
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
