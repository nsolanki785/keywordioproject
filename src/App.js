import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import CreateAds from './pages/Createads';
import TextAdsForm from './pages/TextAdsForm';
import MediaAdsForm from './pages/MediaAdsForm';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-ads" element={<CreateAds />} />
        <Route path="/text-ads" element={<TextAdsForm />} />
        <Route path="/media-ads" element={<MediaAdsForm />} />
        
      </Routes>
        </BrowserRouter>
    </>
  
  );
}

export default App;
