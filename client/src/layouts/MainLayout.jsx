import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";

function MainLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Expense Tracker & Budget Manager</h1>
        <p>Welcome to the application.</p>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;