import React from "react";
import HeaderForm from './components/HeaderForm'
import { Routes, Route} from "react-router-dom";
import Planets from './views/Planets';
import People from './views/People';
import ErrorPage from './views/ErrorPage'

function App() {
  return (
    <div>
      <h1>Luke Walker Api</h1>
      <HeaderForm />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
