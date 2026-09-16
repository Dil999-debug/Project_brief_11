import Welcome from "../../Components/ui/Welcome";
import PageTitle from "../../Components/ui/PageTitle";
import Card from "../../Components/ui/Card";
import Button from "../../Components/ui/Button";

function Home() {
  return (
    <div>
      <PageTitle title="Home" />
      <Welcome name="User" />

      <div className="card-container">
        <Card
          title="Welcome"
          description="Welcome to Expense Tracker & Budget Manager."
        />

        <Card
          title="Track Expenses"
          description="Keep track of your daily expenses."
        />

        <Card
          title="Manage Budget"
          description="Set and manage your personal budget."
        />
      </div>

      <Button text="Get Started" />
    </div>
  );
}

export default Home;