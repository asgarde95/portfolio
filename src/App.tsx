import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
