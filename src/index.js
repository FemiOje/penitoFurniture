import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllFurniture from './routes/AllFurniture';
import LivingRoom from './routes/LivingRoom';
import Office from './routes/Office';
import Bedroom from './routes/Bedroom';
import Sofas from './routes/Sofas';
import Outdoors from './routes/Outdoors';
import Kitchen from './routes/Kitchen';
import Others from './routes/Others';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="all-furniture" element={<AllFurniture />} />
        <Route path="living-room" element={<LivingRoom />} />
        <Route path="office" element={<Office />} />
        <Route path="bedroom" element={<Bedroom />} />
        <Route path="sofas" element={<Sofas />} />
        <Route path="outdoors" element={<Outdoors />} />
        <Route path="kitchen" element={<Kitchen />} />
        <Route path="others" element={<Others />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
