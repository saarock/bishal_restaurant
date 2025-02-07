import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct imports
import Layout from "./Layout";
import Home from './pages/home/Home';
import "./App.css"
import AllTheItems from './pages/allitems/AllTheItems';

const App = () => {
  return (
    <Router>
      <Routes> {/* Wrap Routes around all Route components */}
        <Route element={<Layout />}>
          <Route index element={<Home />} /> {/* The "index" route is used for the default route */}
          <Route path='/menu' element={<AllTheItems/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
