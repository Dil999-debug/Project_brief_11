import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="app-layout">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;