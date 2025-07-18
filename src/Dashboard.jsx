import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login';
import Signup from './signup';
import Dashboard from './Dashboard';
function App()  {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<Signup/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
        </Routes>
  );
};

export default Dashboard;
