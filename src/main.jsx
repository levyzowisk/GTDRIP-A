// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import HomePage from "./pages/HomePage/App.jsx";
// import ProductListingPage from "./pages/ProductListingPage/App.jsx";
// import ProductViewPage from "./pages/ProductViewPage/App.jsx"


// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <HomePage />
//     <ProductListingPage />
//     <ProductViewPage />
//   </StrictMode>
// );



// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HomePage from "./pages/HomePage/App.jsx";
// import ProductListingPage from "./pages/ProductListingPage/App.jsx";
// import ProductViewPage from "./pages/ProductViewPage/App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<ProductListingPage />} />
//         <Route path="/products/:id" element={<ProductViewPage />} />
//         <Route path="*" element={<h1>Not Found</h1>} />
//       </Routes>
//     </Router>
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/App.jsx";
import ProductListingPage from "./pages/ProductListingPage/App.jsx";
import ProductViewPage from "./pages/ProductViewPage/App.jsx";
import NotFoundPage from "./components/NotFoundPage/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/products/:id" element={<ProductViewPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </StrictMode>
);

