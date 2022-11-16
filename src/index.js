import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Edit from "./pages/edit";
// import Home from "./pages/home";
// import Contact from "./pages/contact";


// export default function navi() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Edit />}>
//           <Route index element={<Home />} />
//           <Route path="contact" element={<Contact/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
